package org.scn.community.htmlgenerator;

import java.util.ArrayList;

import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamReader;
import org.scn.community.utils.Helpers;

public class Property {

	String name;

	private String title;

	private String tooltip;

	String type;

	String visible;

	private String group;

	private final ArrayList<Value> values = new ArrayList<Value>();

	private String defaultValue;

	@SuppressWarnings("nls")
	public Property(XMLStreamReader reader, String componentName) {
		this.name = reader.getAttributeValue("", "id");
		this.title = reader.getAttributeValue("", "title");
		this.tooltip = reader.getAttributeValue("", "tooltip");
		this.type = reader.getAttributeValue("", "type");
		this.visible = reader.getAttributeValue("", "visible");
		this.group = reader.getAttributeValue("", "group");
		this.defaultValue = "";

		if (this.visible == null) {
			this.visible = "true";
		}

		if (this.name == null) {
			System.out.println("ISSUE: " + componentName + " - PARAMETER - property '" + this.name + "' is missing 'name'");
			this.name = "";
		}
		if (this.title == null) {
			System.out.println("ISSUE: " + componentName + " - PARAMETER  - property '" + this.name + "' is missing 'title'");
			this.title = "";
		}
		if (this.tooltip == null) {
			// System.out.println("ISSUE: " + componentName + "Property '" + this.name + "' is missing 'tooltip'");
			this.tooltip = "";
		}
		if (this.type == null) {
			System.out.println("ISSUE: " + componentName + " - PARAMETER  - property '" + this.name + "' is missing 'type'");
			this.type = "";
		}

		if (this.group == null) {
			System.out.println("ISSUE: " + componentName + " - PARAMETER  - property '" + this.name + "' is missing 'group'");
			this.group = "";
		}
	}

	public String toHtml() {
		String template = Helpers.resource2String(this.getClass(), "property.html");
		String templateValuesList = Helpers.resource2String(this.getClass(), "values_list.html");

		template = template.replace("%PROPERTY_NAME%", this.name);
		template = template.replace("%PROPERTY_TITLE%", this.title);
		template = template.replace("%PROPERTY_TOOLTIP%", this.tooltip);
		template = template.replace("%PROPERTY_TYPE%", this.type);
		template = template.replace("%PROPERTY_GROUP%", this.group);
		template = template.replace("%VISIBLE_FLAG%", this.visible);

		template = template.replace("%DEFAULT_VALUE%", this.defaultValue);

		if (this.values.size() > 0) {
			for (Value value : this.values) {
				templateValuesList = templateValuesList.replace("%VALUE_ENTRY%", value.toHtml() + "\r\n" + "%VALUE_ENTRY%");
			}
			templateValuesList = templateValuesList.replace("%VALUE_ENTRY%", "");
			template = template.replace("%VALUES_LIST%", templateValuesList);
		}
		template = template.replace("%VALUES_LIST%", "");

		return template;
	}

	public void addValue(XMLStreamReader reader) {
		try {
			String elementText = reader.getElementText();
			this.values.add(new Value(elementText));
		} catch (XMLStreamException e) {
			// TODO Auto-generated catch block

		}
	}

	public void setDefaultValue(XMLStreamReader reader) {
		try {
			String defaultValue = reader.getElementText();

			this.defaultValue = defaultValue;

			for (Value value : this.values) {
				if (value.name.equals(defaultValue)) {
					value.isDefault = true;
				}
			}
		} catch (XMLStreamException e) {
			// TODO Auto-generated catch block
		}
	}
}
