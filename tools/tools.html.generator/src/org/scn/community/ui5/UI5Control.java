package org.scn.community.ui5;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;

import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamReader;

import org.json.JSONException;
import org.json.JSONObject;
import org.scn.community.defgenerator.ParamSimpleSpec;
import org.scn.community.defgenerator.ZtlAndAps;
import org.scn.community.htmlgenerator.Property;
import org.scn.community.spec.SpecHelper;
import org.scn.community.spec.ui5.Ui5JsSpec;
import org.scn.community.utils.Helpers;

public class UI5Control extends UI5Reader {

	private File ui5spec;
	private String name;
	
	private ArrayList<UI5Property> properties = new ArrayList<UI5Property>();
	private ArrayList<UI5Event> events = new ArrayList<UI5Event>();
	
	public UI5Control (File spec) {
		this.ui5spec = spec;
		this.name = spec.getName().replace(".control", "");
		
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
			} else if (localName.equals("property")) {
				currentProperty = new UI5Property(reader, this.name.replace(".control", ""), ui5spec);
				
				if(currentProperty.getName().equals("width") || currentProperty.getName().equals("height")) {
					// hmm, what with width, height?
					currentProperty.setName("content" + currentProperty.getName().substring(0, 1).toUpperCase() +currentProperty.getName().substring(1));
					currentProperty.setType("int");
				}
				this.properties.add(currentProperty);
			} else if (localName.equals("aggregation")) {
				currentProperty = new UI5Property(reader, this.name.replace(".control", ""), ui5spec);
				this.properties.add(currentProperty);
			} else if (localName.equals("event")) {
				UI5Event currentEvent = new UI5Event(reader, this.name.replace(".control", ""), ui5spec);
				this.events.add(currentEvent);
			}
		} while (hasNextTag(reader));
	}

	private void setControl(XMLStreamReader reader) {
		// TODO Auto-generated method stub
	}

	@Override
	public String toString() {
		return "UI5Component \r\n\t[\r\n\t\tui5spec=" + ui5spec + ", \r\n\t\tname=" + name
				+ ", \r\n\t\tproperties=" + properties + "]";
	}

	public String[] toSpec20() {
		String spec = "{\r\n";
		String specDs = "{\r\n";
		
		for (UI5Property ui5Property : properties) {
			String[] propSpec = ui5Property.toSpec20("");
			
			spec = spec + "\r\n" + propSpec[0] + ",";
			
			if(!propSpec[1].isEmpty()) {
				specDs = specDs + "\r\n" + propSpec[1] + ",";	
			}
		}
		
		spec = spec.substring(0, spec.length()-1);
		spec = spec + "\r\n}";
		
		specDs = specDs.substring(0, specDs.length()-1);
		specDs = specDs + "\r\n}";
		
		String newSpec = ui5spec.getAbsolutePath().replace(".control", ".spec.json").replace("\\xml", "\\control");
		File specFile = new File(newSpec);
		if(!specFile.exists()) {
			Helpers.string2File(newSpec, spec);
		}
		
		newSpec = newSpec.replace(".spec.json", ".ds.spec.json");
		specFile = new File(newSpec);
		if(!specFile.exists()) {
			Helpers.string2File(newSpec, specDs);
		}
		
		String specEvents = "{\r\n";
		for (UI5Event ui5Event : events) {
			if(!ui5Event.isDeprecated()) {
				String[] propSpec = ui5Event.toSpec20("");
				
				specEvents = specEvents + "\r\n" + propSpec[0] + ",";
			}
		}
		if(specEvents.length() > 3) {
			specEvents = specEvents.substring(0, specEvents.length()-1);	
		}
		specEvents = specEvents + "\r\n}";
		
		if(!specEvents.equals("{\r\n\r\n}")) {
			newSpec = newSpec.replace(".ds.spec.json", ".events.spec.json");
			specFile = new File(newSpec);
			if(!specFile.exists()) {
				Helpers.string2File(newSpec, specEvents);
			}
		}

		String[] ztlAndUI5Xml = this.generateZtlAndUI5Xml();
		
		return new String[] {spec, ztlAndUI5Xml[0], ztlAndUI5Xml[1]};
	}
	public String updateSpecSingle() {
		String[] spec20 = this.toSpec20();
		
		String fileZtl = ui5spec.getAbsolutePath().substring(0, ui5spec.getAbsolutePath().indexOf("\\org.scn.community")) + "\\org.scn.community.shared\\ui5spec\\extensions\\contribution.ztl";
		String content = Helpers.file2String(fileZtl);
		content = content + "\r\n" + spec20[1];
		Helpers.string2File(fileZtl, content);
		
		String newSpec = ui5spec.getAbsolutePath().replace(".control", ".spec.json").replace("\\xml", "\\control");
		Helpers.string2File(newSpec, spec20[0]);
		
		return spec20[0];
	}
	
	public String[] generateZtlAndUI5Xml() {
		ArrayList<Property> genProperties = new ArrayList<Property>();
		for (UI5Property ui5property : this.properties) {
			Property property = new Property(ui5property, ui5spec);
			
//			if(ui5property.getType().equals("ObjectArray")) {
//				property.setName(Helpers.cutLastS(ui5property.getName()));
//			}
			
			genProperties.add(property);
		}

		// default
		SpecHelper helper = new SpecHelper(this.name, this.ui5spec);
		String newSpec = ui5spec.getAbsolutePath().replace(".control", ".spec.json").replace("\\xml", "\\control");
		String jsonSpecContent = Helpers.file2String(newSpec);
		
		JSONObject jsonSpec = null;
		try {
			jsonSpec = new JSONObject(jsonSpecContent);
		} catch (JSONException e) {
			throw new RuntimeException(newSpec + "\r\n" + e);
		}
		
		helper.readSpecification(genProperties, jsonSpec);
		
		// ds
		newSpec = ui5spec.getAbsolutePath().replace(".control", ".ds.spec.json").replace("\\xml", "\\control");
		jsonSpecContent = Helpers.file2String(newSpec);
		
		jsonSpec = null;
		try {
			jsonSpec = new JSONObject(jsonSpecContent);
		} catch (JSONException e) {
			throw new RuntimeException(newSpec + "\r\n" + e);
		}

		helper.readSpecification(genProperties, jsonSpec);
		
		// events
		newSpec = ui5spec.getAbsolutePath().replace(".control", ".events.spec.json").replace("\\xml", "\\control");
		jsonSpecContent = Helpers.file2String(newSpec);
		
		if(jsonSpecContent != null) {
			jsonSpec = null;
			try {
				jsonSpec = new JSONObject(jsonSpecContent);
			} catch (JSONException e) {
				throw new RuntimeException(newSpec + "\r\n" + e);
			}

			helper.readSpecification(genProperties, jsonSpec);
		}
		
		String template = Helpers.resource2String(ParamSimpleSpec.class, "ztl_root.ztl.tmlp");
		String templateUI5Xml = Helpers.resource2String(Ui5JsSpec.class, "comp.view.xml.tmlp");
		
		for (Property property : genProperties) {
			if(property.hasExtendSpec()) {
				ZtlAndAps generatedZtlAndAps = property.generateZtlAndAps();
				
				template = template.replace("%FUNCTION_ENTRY%", generatedZtlAndAps.getFunctions() + "\r\n\r\n%FUNCTION_ENTRY%");
				
				String propInitialTemplate = property.getExtendedFullSpec().getPropertyValue("template");
				if(!propInitialTemplate.startsWith("ds-")) {
					templateUI5Xml = templateUI5Xml.replace("%PROPERTY_SIMPLE%", generatedZtlAndAps.getParamXml() + "\r\n\t\t%PROPERTY_SIMPLE%");
					templateUI5Xml = templateUI5Xml.replace("%PROPERTY_COMPLEX%", generatedZtlAndAps.getParamComplexXml() + "\r\n\t\t%PROPERTY_COMPLEX%");
				}
			}
		}
		
		template = template.replace("%TECH_DESCRIPTION%", this.name);
		template = template.replace("%TECH_EXTENSION%", "DataComponent");
		template = template.replace("%TECH_NAME%", "org.scn.community.shared.ui5." + this.name);
		
		template = template.replace("%FUNCTION_ENTRY%", "");
		template = template.replace("%CUSTOM_ENTRY%", "");
		
		templateUI5Xml = templateUI5Xml.replace("%NAME%", this.name);
		templateUI5Xml = templateUI5Xml.replace("%PROPERTY_SIMPLE%", "");
		templateUI5Xml = templateUI5Xml.replace("%PROPERTY_COMPLEX%", "");
		
		template = template.replace("for custom functions in /spec/contribution.ztl", "is based on SAP UI5 specification");
		
		return new String[]{template, templateUI5Xml};
	}
	public boolean is2notSimple() {
		for (UI5Property ui5property : this.properties) {
			if(ui5property.isNotSimple()) {
				return true;
			}
		}
		return false;
	}
	
	public String getName() {
		return this.name;
	}
}
