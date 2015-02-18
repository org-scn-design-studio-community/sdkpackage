package org.scn.community.htmlgenerator;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;

import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamReader;
import org.scn.community.utils.Helpers;

public class Component {

	private final ArrayList<Property> properties;

	String name;

	String title;

	String group;

	private String tooltip;

	private String handlerType;

	private int firstMethodIndex;

	private final ArrayList<ZtlFunction> functions = new ArrayList<ZtlFunction>();

	private final String customHtmlContent;

	private String fullName;

	private final File contributionXml;

	@SuppressWarnings("null")
	Component(File contributionXml) {
		this.contributionXml = contributionXml;
		// System.out.println("Parsing: " + contributionXml.getAbsolutePath());
		this.properties = new ArrayList<Property>();

		XMLInputFactory factory = XMLInputFactory.newInstance();

		XMLStreamReader reader = null;
		try {
			reader = factory.createXMLStreamReader(new FileReader(contributionXml));
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block

		} catch (XMLStreamException e) {
			// TODO Auto-generated catch block

		}

		Property currentProperty = null;

		do {
			readNextTag(reader);

			if (!reader.isStartElement()) {
				continue;
			}

			String localName = reader.getLocalName();

			if (localName.equals("component")) {
				setComponent(reader);
			} else if (localName.equals("property")) {
				currentProperty = new Property(reader, this.name);
				this.properties.add(currentProperty);
			} else if (localName.equals("possibleValue")) {
				currentProperty.addValue(reader);
			} else if (localName.equals("defaultValue")) {
				String attributeValue = reader.getAttributeValue("", "property");
				Property property = getProperty(attributeValue);

				if (property != null) {
					property.setDefaultValue(reader);
				}
			}

		} while (hasNextTag(reader));

		String pathToZtl = contributionXml.getAbsolutePath().replace(".xml", ".ztl");
		List<String> ztlContent = Helpers.file2List(pathToZtl);

		if (ztlContent != null && ztlContent.size() > 0) {
			String currentFunction = "";

			for (int i = 0; i < ztlContent.size(); i++) {
				String line = ztlContent.get(i);

				currentFunction = currentFunction + line + "\n";

				if (line.trim().startsWith("class ")) {
					this.firstMethodIndex = i + 1;
					currentFunction = "";
				}

				if (line.trim().contains("*}")) {
					// end of defined function
					ZtlFunction function = new ZtlFunction(currentFunction);

					this.functions.add(function);
					this.firstMethodIndex = i + 1;
					currentFunction = "";
				}
			}
		}

		String pathToCustom = contributionXml.getAbsolutePath().replace("contribution.xml", "custom.html");
		String customHtmlContent = Helpers.file2String(pathToCustom);

		this.customHtmlContent = customHtmlContent == null ? "" : customHtmlContent;
	}

	private Property getProperty(String propertyName) {
		for (Property property : this.properties) {
			if (property.name.equals(propertyName)) {
				return property;
			}
		}
		return null;
	}

	private void setComponent(XMLStreamReader reader) {
		this.name = reader.getAttributeValue("", "id");

		System.out.println("--------------------------------------------------------");
		System.out.println("Processing Component: " + this.name);

		this.title = reader.getAttributeValue("", "title");
		this.tooltip = reader.getAttributeValue("", "tooltip");
		this.group = reader.getAttributeValue("", "group");

		this.handlerType = reader.getAttributeValue("", "handlerType");

		// read package from file
		int srcI = this.contributionXml.getAbsolutePath().indexOf("src");
		int resI = this.contributionXml.getAbsolutePath().indexOf("res");

		String packageName = this.contributionXml.getAbsolutePath().substring(srcI + 4, resI - 1);
		this.fullName = packageName + "." + this.name;

		if (this.handlerType.equals("datasource")) {
			this.group = this.handlerType;
		}

		if (this.title == null) {
			System.out.println("ISSUE: " + this.name + " - COMPONENT - property is missing 'title'");
			this.title = "";
		}
		if (this.tooltip == null) {
			System.out.println("ISSUE: " + this.name + " - COMPONENT - property is missing 'tooltip'");
			this.tooltip = "";
		}
		if (this.group == null) {
			System.out.println("ISSUE: " + this.name + " - COMPONENT - property is missing 'group'");
			this.group = "";
		}
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

	public String toHtml() {
		String template = Helpers.resource2String(this.getClass(), "component.html");

		template = template.replace("%COMPONENT_NAME%", this.name);
		template = template.replace("%COMPONENT_TITLE%", this.title);
		template = template.replace("%COMPONENT_GROUP%", this.group);

		for (Property property : this.properties) {
			String html = property.toHtml();
			if (property.visible.equals("false")) {
				template = template.replace("%HIDDEN_PROPERTY_ENTRY%", html + "\r\n" + "%HIDDEN_PROPERTY_ENTRY%");
			} else {
				if (property.type.equals("ScriptText")) {
					template = template.replace("%EVENT_ENTRY%", html + "\r\n" + "%EVENT_ENTRY%");
				} else {
					template = template.replace("%VISIBLE_PROPERTY_ENTRY%", html + "\r\n" + "%VISIBLE_PROPERTY_ENTRY%");
				}
			}
		}

		for (ZtlFunction function : this.functions) {
			String html = function.toHtml();
			String shortHtml = function.toShortHtml();
			template = template.replace("%FUNCTION_ENTRY_FULL%", html + "\r\n" + "%FUNCTION_ENTRY_FULL%");
			template = template.replace("%FUNCTION_ENTRY_LIST%", shortHtml + "\r\n" + "%FUNCTION_ENTRY_LIST%");
		}

		template = template.replace("%VISIBLE_PROPERTY_ENTRY%", "");
		template = template.replace("%HIDDEN_PROPERTY_ENTRY%", "");
		template = template.replace("%EVENT_ENTRY%", "");
		template = template.replace("%FUNCTION_ENTRY_LIST%", "");
		template = template.replace("%FUNCTION_ENTRY_FULL%", "");

		template = template.replace("%CUSTOM_HTML%", this.customHtmlContent);

		return template; //replace(this.getClass().getResource("component.html").openStream().);
	}

	public String toCastString() {
		String output = "\t/**Cast to " + this.title + " component*/\r\n";
		output = output + "\t" + this.fullName + " returnAsScn" + this.name + " (Component inputComponent) {* return inputComponent; *}\r\n";
		return output;
	}
}
