package org.scn.community.ui5;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.ArrayList;

import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamReader;

import org.scn.community.spec.orgin.OrginSpec;
import org.scn.community.spec.ztl.SpecificationZtlTemplate;
import org.scn.community.utils.Helpers;

public class UI5Type {

	private File ui5spec;
	private String name;
	
	private ArrayList<UI5Property> properties = new ArrayList<UI5Property>();
	private String docu;

	public UI5Type(File spec) {
		this.ui5spec = spec;
		this.name = spec.getName().replace(".type", "");
	}

	public void generateSpec() {
		XMLInputFactory factory = XMLInputFactory.newInstance();
		XMLStreamReader reader = null;
		try {
			reader = factory.createXMLStreamReader(new FileReader(ui5spec));
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
		} catch (XMLStreamException e) {
			// TODO Auto-generated catch block
		}

		UI5Property currentProperty = null;

		do {
			readNextTag(reader);

			if (!reader.isStartElement()) {
				continue;
			}

			String localName = reader.getLocalName();

			if (localName.equals("control")) {
				setControl(reader);
			} else if (localName.equals("value")) {
				currentProperty = new UI5Property(reader, this.name.replace(".controls", ""), ui5spec);
				this.properties.add(currentProperty);
			} else if (localName.equals("documentation")) {
				readNextTag(reader);
				
				this.docu = reader.getText();
				this.docu = this.docu.replace("\"", "'");
				this.docu = this.docu.replace("\r", "");
				this.docu = this.docu.replace("\n", " ");
			}
		} while (hasNextTag(reader));
	}

	private void setControl(XMLStreamReader reader) {
		// TODO Auto-generated method stub
	}

	private boolean hasNextTag(XMLStreamReader reader) {
		try {
			return reader.hasNext();
		} catch (XMLStreamException e) {
			// TODO Auto-generated catch block
	
		}
		return false;
	}
	
	private void readNextTag(XMLStreamReader reader) {
		try {
			reader.nextTag();
		} catch (XMLStreamException e) {
			// TODO Auto-generated catch block
	
		}
	}
	public String[] toSpec20() {
		String templateSpec = Helpers.resource2String(OrginSpec.class, "org.simple.type.tmpl");
		String templateZtl = Helpers.resource2String(SpecificationZtlTemplate.class, "ztl.simple.type.tmpl");
		
		String typeEntry = "\t/** %DESCRIPTION% */\r\n";
		typeEntry = typeEntry + "\torg_scn_community_shared_%TYPE_NAME%Enumfield %VALUE%;";
		
		String spec = "{\r\n"
				+ "\t\"name\": \"" + this.name + "\",\r\n"
				+ "\t\"docu\": \"" + this.docu + "\",\r\n";
		spec = spec + "\r\n\tvalues: [";
		
		int index = 0;
		for (UI5Property ui5Property : properties) {
			String propName = ui5Property.getName();
			
			char ch = propName.charAt(0);
			if(new Character(ch).isDigit(ch)) {
				propName = "D" + propName;
			}
			
			String propSpec = templateSpec.replace("%NAME%", propName);
			propSpec = propSpec.replace("%VALUE%", ui5Property.getDesc());
			
			String propZtl = typeEntry.replace("%VALUE%", propName);
			propZtl = propZtl.replace("%DESCRIPTION%", ui5Property.getDesc());
			
			templateZtl = templateZtl.replace("%TYPE_ENTRY%", propZtl + "\r\n\r\n%TYPE_ENTRY%");
			
			if(index > 0) {
				spec = spec + ",";
			}
			spec = spec + "\r\n" + propSpec;
			
			index++;
		}
		
		templateZtl = templateZtl.replace("%TYPE_DESCRIPTION%", this.docu);
		templateZtl = templateZtl.replace("%TYPE_NAME%", this.name);
		templateZtl = templateZtl.replace("%TYPE_ENTRY%", "");
		
		spec = spec + "\r\n\t]\r\n}";
		
		return new String[]{spec, templateZtl};
	}

	@Override
	public String toString() {
		return "UI5Type \r\n\t[\r\n\t\tui5spec=" + ui5spec + ", \r\n\t\tname=" + name
				+ ", \r\n\t\tproperties=" + properties + ", \r\n\t\tdocu=" + docu + "]";
	}

	public String updateSpecAndZtlSingle() {
		String[] spec20 = this.toSpec20();
		
		String fileZtl = ui5spec.getAbsolutePath().substring(0, ui5spec.getAbsolutePath().indexOf("\\org.scn.community")) + "\\org.scn.community.shared\\ui5spec\\const\\contribution.ztl";
		String content = Helpers.file2String(fileZtl);
		content = content + "\r\n" + spec20[1];
		if(!new File(fileZtl).exists()) {
			Helpers.string2File(fileZtl, content);
		}

		String newSpec = ui5spec.getAbsolutePath().replace(".type", ".spec.json").replace("\\xml", "\\type");
		if(!new File(newSpec).exists()) {
			Helpers.string2File(newSpec, spec20[0]);	
		}
		
		
		return spec20[0];
	}

}
