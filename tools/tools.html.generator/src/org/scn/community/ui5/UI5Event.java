package org.scn.community.ui5;

import java.io.File;
import java.util.ArrayList;

import javax.xml.stream.XMLStreamReader;

import org.scn.community.spec.SpecHelper;
import org.scn.community.spec.orgin.OrginSpec;
import org.scn.community.utils.Helpers;

public class UI5Event extends UI5Reader {

	private XMLStreamReader reader;
	private String componentName;
	private File root;
	
	private ArrayList<UI5Attribute> attributes = new ArrayList<UI5Attribute>();
	private String docu;
	private boolean deprecated;
	private String name;

	public UI5Event(XMLStreamReader reader, String componentName, File root) {
		this.reader = reader;
		this.componentName = componentName.replace(".control", "");
		this.root = root;
		
		int attributeCount = reader.getAttributeCount();
		for (int i = 0; i < attributeCount; i++) {
			String attributeLocalName = reader.getAttributeLocalName(i);
			String attributeValue = reader.getAttributeValue(i);
			
			if(attributeLocalName.equals("name")) {
				this.name = attributeValue;
			} else {
				this.attributes.add(new UI5Attribute(attributeLocalName, attributeValue));
			}
		}
		
		while (hasNextTag(reader)) {
			readNextTag(reader);
			
			if(isEnd(reader)) {
				break;
			}
			
			if(isChar(reader)) {
				continue;
			}
			
			String localName = reader.getLocalName();

			if(reader.isEndElement()) {
				if(localName.equals("event")) {
					break;
				}
				continue;
			}
			
			if(localName.equals("deprecation")) {
				this.deprecated = true;
			}
			if(localName.equals("documentation")) {
				readNextTag(reader);
				
				this.docu = reader.getText();
				this.docu = this.docu.replace("\"", "'");
				this.docu = this.docu.replace("\r", "");
				this.docu = this.docu.replace("\n", " ");
			}
		}
	}

	public String[] toSpec20(String string) {
		String template = Helpers.resource2String(OrginSpec.class, "org.Event.tmpl");
		
		String newName = this.name;
		if(newName.startsWith("on")) {
			newName = newName.substring(2);
		}
		
		template = template.replace("%NAME_CAPITAL%", Helpers.makeFirstUpper(newName));
		template = template.replace("%NAME%", this.name);
		
		template = template.replace("%TITLE%", Helpers.makeDescription(newName));
		template = template.replace("%DESCRIPTION%", this.docu);
		
		return new String[]{template};
	}

	public boolean isDeprecated() {
		return this.deprecated;
	}
}
