package org.scn.community.htmlgenerator;

import java.util.ArrayList;

import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamReader;

import org.scn.community.defgenerator.ZtlAndAps;
import org.scn.community.defgenerator.ParamSpec;
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

	private ParamSpec extendedSpec;

	private String componentName;

	@SuppressWarnings("nls")
	public Property(XMLStreamReader reader, String componentName) {
		this.componentName = componentName;
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
			this.name = "&nbsp;";
		}
		if (this.title == null) {
			System.out.println("ISSUE: " + componentName + " - PARAMETER  - property '" + this.name + "' is missing 'title'");
			this.title = "&nbsp;";
		}
		if (this.tooltip == null) {
			// System.out.println("ISSUE: " + componentName + "Property '" + this.name + "' is missing 'tooltip'");
			this.tooltip = "&nbsp;";
		}
		if (this.type == null) {
			System.out.println("ISSUE: " + componentName + " - PARAMETER  - property '" + this.name + "' is missing 'type'");
			this.type = "&nbsp;";
		}

		if (this.group == null) {
			System.out.println("ISSUE: " + componentName + " - PARAMETER  - property '" + this.name + "' is missing 'group'");
			this.group = "&nbsp;";
		}
	}

	public String toString() {
		return toHtml();
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

		if (this.defaultValue == "") {
			this.defaultValue = "&nbsp;";
		}

		// cut default value in case too long
		template = template.replace("%DEFAULT_VALUE%", this.defaultValue.length() < 100 ? this.defaultValue : this.defaultValue.substring(0, 100) + " ... truncated");

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

	public void extendSpec(ParamSpec parameter) {
		this.extendedSpec = parameter;
	}
	
	public boolean hasExtendSpec() {
		return (this.extendedSpec != null);
	}

	public ZtlAndAps generateZtlAndAps() {
		return this.extendedSpec.getFunctions();
	}

	public String getNameCut() {
		if(!this.name.startsWith("D")) {
			return this.name;
		}
		
		return this.name.substring(1);
	}

	public CharSequence getName() {
		return this.name;
	}

	public String getType() {
		return this.type;
	}

	public String getHelp() {
		return "/* " + this.tooltip + " */ ";
	}

	public String getTitle() {
		return this.title;
	}

	public String getComponent() {
		return componentName;
	}

	public ArrayList<Value> getValues() {
		return this.values;
	}
}
