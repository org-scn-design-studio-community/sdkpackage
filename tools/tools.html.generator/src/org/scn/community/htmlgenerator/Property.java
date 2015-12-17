package org.scn.community.htmlgenerator;

import java.io.File;
import java.util.ArrayList;

import javax.management.RuntimeErrorException;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamReader;

import org.scn.community.defgenerator.ZtlAndAps;
import org.scn.community.defgenerator.ParamSimpleSpec;
import org.scn.community.spec.ParamFullSpec;
import org.scn.community.spec.orgin.OrginSpec;
import org.scn.community.ui5.UI5Property;
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

	private ParamSimpleSpec extendedSimpleSpec;
	
	private ParamFullSpec extendedFullSpec;

	private String componentName;

	private String titleBig;

	private String tooltipBig;

	private String correctName;

	private File specFile;

	@SuppressWarnings("nls")
	public Property(XMLStreamReader reader, String componentName, File specFile) {
		this.componentName = componentName;
		this.specFile = specFile;
		
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
			this.tooltip = this.title;
		}
		if (this.type == null) {
			System.out.println("ISSUE: " + componentName + " - PARAMETER  - property '" + this.name + "' is missing 'type'");
			this.type = "";
		}

		if (this.group == null) {
			System.out.println("ISSUE: " + componentName + " - PARAMETER  - property '" + this.name + "' is missing 'group'");
			// throw new RuntimeException("Group Must Be Assigned!");
			this.group = "Display";
		}
		
		this.titleBig = Helpers.makeAllUpper(this.title);
		this.tooltipBig = Helpers.makeAllUpper(this.tooltip);
	}

	public Property(String componentName, String propertyName, File specFile) {
		this.componentName = componentName;
		this.name = propertyName;
		this.specFile = specFile;
	}

	public Property(UI5Property ui5property, File specFile) {
		this.componentName = ui5property.getComponentName();
		this.specFile = specFile;
		
		this.name = ui5property.getAttr("name");
		this.title = ui5property.getAttr("name");
		this.tooltip = ui5property.getAttr("name");
		this.type = ui5property.getAttr("name");

		this.visible = "true";
		this.group = "Ui5";
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
			this.tooltip = this.title;
		}
		if (this.type == null) {
			System.out.println("ISSUE: " + componentName + " - PARAMETER  - property '" + this.name + "' is missing 'type'");
			this.type = "";
		}

		if (this.group == null) {
			System.out.println("ISSUE: " + componentName + " - PARAMETER  - property '" + this.name + "' is missing 'group'");
			// throw new RuntimeException("Group Must Be Assigned!");
			this.group = "Display";
		}
		
		this.titleBig = Helpers.makeAllUpper(this.title);
		this.tooltipBig = Helpers.makeAllUpper(this.tooltip);
	}

	@Override
	public String toString() {
		return "\r\nProperty  \r\n\t[\r\n\t\tname=" + name + ", \r\n\t\ttitle=" + title + ", \r\n\t\ttooltip="
				+ tooltip + ", \r\n\t\ttype=" + type + ", \r\n\t\tvisible=" + visible
				+ ", \r\n\t\tgroup=" + group + ", \r\n\t\tvalues=" + values + ", \r\n\t\tdefaultValue="
				+ defaultValue + ", \r\n\t\textendedSimpleSpec=" + extendedSimpleSpec
				+ ", \r\n\t\textendedFullSpec=" + extendedFullSpec + ", \r\n\t\tcomponentName="
				+ componentName + ", \r\n\t\ttitleBig=" + titleBig + ", \r\n\t\ttooltipBig="
				+ tooltipBig + ", \r\n\t\tcorrectName=" + correctName + "]";
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

		String htmlDefault = this.defaultValue; 
		if (htmlDefault == "") {
			htmlDefault = "&nbsp;";
		}

		// cut default value in case too long
		template = template.replace("%DEFAULT_VALUE%", htmlDefault.length() < 100 ? htmlDefault : htmlDefault.substring(0, 100) + " ... truncated");

		boolean defaltInList = false;
		if (this.values.size() > 0) {
			for (Value value : this.values) {
				templateValuesList = templateValuesList.replace("%VALUE_ENTRY%", value.toHtml() + "\r\n" + "%VALUE_ENTRY%");
				if(this.defaultValue.equals(value.getName())) {
					defaltInList = true;	
				}
			}
			templateValuesList = templateValuesList.replace("%VALUE_ENTRY%", "");
			template = template.replace("%VALUES_LIST%", templateValuesList);
		} else {
			defaltInList = true;
		}
		
		if(!defaltInList) {
			throw new RuntimeException("default "+this.defaultValue+" is not in value list! " + this.name + ", in component " + this.componentName);
		}
		template = template.replace("%VALUES_LIST%", "");

		return template;
	}

	public void addValue(XMLStreamReader reader) {
		try {
			String elementText = reader.getElementText();
			this.values.add(new Value(elementText, elementText));
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

	public void extendSpec(ParamSimpleSpec parameter) {
		this.extendedSimpleSpec = parameter;
	}
	
	public void extendSpec(ParamFullSpec parameter) {
		this.extendedFullSpec = parameter;
	}
	
	public boolean hasExtendSpec() {
		return (this.extendedSimpleSpec != null) || (this.extendedFullSpec != null);
	}

	public ZtlAndAps generateZtlAndAps() {
		if(this.extendedSimpleSpec != null) {
			return this.extendedSimpleSpec.getFunctions();	
		}
		if(this.extendedFullSpec != null) {
			return this.extendedFullSpec.getFunctions();
		}
		return null;
	}

	public String getNameCut() {
		String name = this.name;
		
		if (this.extendedFullSpec != null){
			name = this.extendedFullSpec.getCorrectName();
		}

		if(!name.startsWith("D")) {
			return name;
		}
		
		return name.substring(1);
	}

	public String getName() {
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
	
	public String getDefaultValue() {
		return this.defaultValue;
	}

	public ParamFullSpec getExtendedFullSpec() {
		return this.extendedFullSpec;
	}

	public String toSpec20() {
		boolean invisible = false;
		if(!this.visible.equals("true")) {
			// special case for invisible properties
			
			invisible = true;
		}
		
		String template = Helpers.resource2String(OrginSpec.class, "org."+this.getType()+".tmpl");
		
		if(this.values.size() > 0) {
			template = Helpers.resource2String(OrginSpec.class, "org.Choice.tmpl");
		}
		
		
		if(template == null) {
			template = Helpers.resource2String(OrginSpec.class, "org.default.tmpl");
		}
		
		template = template.replace("%NAME%", this.name);
		
		template = template.replace("%DESCRIPTION%", this.titleBig);
		template = template.replace("%TOOLTIP%", this.tooltip == "" ? this.titleBig : this.tooltipBig);
		template = template.replace("%ZTL_TYPE%", this.getType(true));
		template = template.replace("%CATEGORY%", this.group);
		template = template.replace("%VISIBLE%", this.visible);
		
		if(invisible) {
			if(this.name.endsWith("s")) {
				// plural case -> a list?
				
			}
			
			template = template.replace("%NO_APS%", "true");
			template = template.replace("%NO_ZTL%", "false");
			template = template.replace("%ZTL_FUNCTION%", "-get");
		} else {
			template = template.replace("%ZTL_FUNCTION%", "");
			template = template.replace("%NO_APS%", "false");
			template = template.replace("%NO_ZTL%", "false");
		}

		int currentI = 0;
		boolean defaultIsInValues = false;
		
		if (this.values.size() > 0) {
			for (Value value : this.values) {
				template = template.replace("%VALUE_ENTRY%", value.toSpec20() + (++currentI < this.values.size() ? "," : "") + "\r\n\t\t\t\t%VALUE_ENTRY%");
				if(value.getName().equals(this.defaultValue)) {
					defaultIsInValues = true;
				}
			}
			template = template.replace("%VALUE_ENTRY%", "");
		} else {
			defaultIsInValues = true;
		}
		template = template.replace("%VALUE_ENTRY%", "");

		if(!defaultIsInValues) {
			throw new RuntimeException("default "+this.defaultValue+" is not in value list! " + this.name + ", in component " + this.componentName);
		}
		
		if (this.values.size() > 0) {
			for (Value value : this.values) {
				if(value.isDefault()) {
					this.defaultValue = value.getName();
				}
			}
		}
		
		// cut default value in case too long
		template = template.replace("%DEFAULT%", this.defaultValue);

		return template;
	}

	public String getType(boolean convertToZtlCompatibility) {
		String type = this.type;
		if(type.contains(",")) {
			type = type.substring(0, type.indexOf(","));
		}
		
		if(convertToZtlCompatibility) {
			if(type.equals("Url") || type.equals("Color") || type.equals("Choice")) {
				type = "String";
			}
		}
		return type;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSpecFile() {
		return specFile.getAbsolutePath();
	}

	public String[] getSubArraySpec20() {
		ParamFullSpec spec = this.getExtendedFullSpec();
		
		String parametersJson = "%ENTRY%\r\n";
		String parametersList = "";
		
		String parameterMode = spec.getParameter("opts").getPropertyValue("arrayMode");
		if(!parameterMode.equals("StringArray")) {
			ParamFullSpec parameter = spec.getParameter("opts").getParameter("arrayDefinition").getParameter(0);
			String sequence = parameter.getPropertyValue("sequence");
			
			String[] params = sequence.split(",");
			ArrayList<ParamFullSpec> parameters = parameter.getParameters();
			
			for (int i = 0; i < params.length; i++) {
				String nameRequested = params[i];
				if(nameRequested.equals("key") || nameRequested.equals("parentKey") || nameRequested.equals("leaf")) {
					continue;
				}
				
				for (ParamFullSpec paramFullSpec : parameters) {
					String nameChild = paramFullSpec.getName();
					if(nameChild.equals(nameRequested)) {
						String json = paramFullSpec.getJson();
						parametersJson = parametersJson.replace("%ENTRY%", json + "\r\n%ENTRY%");
						
						parametersList = parametersList + nameChild + ",";
						break;
					}
				}
			}
		}

		parametersJson = parametersJson.replace(",\r\n%ENTRY%", "");
		if(parametersList.length() > 0) {
			parametersList = parametersList.substring(0, parametersList.length()-1);	
		}

		return new String[]{parametersList, parametersJson};
	}

	public String generateXml() {
		return "name=\"{value}\"";
	}
}
