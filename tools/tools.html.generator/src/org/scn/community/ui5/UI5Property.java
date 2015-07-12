package org.scn.community.ui5;

import java.io.File;
import java.util.ArrayList;

import javax.smartcardio.ATR;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamReader;

import org.json.JSONException;
import org.json.JSONObject;
import org.scn.community.htmlgenerator.Property;
import org.scn.community.htmlgenerator.Value;
import org.scn.community.spec.ParamFullSpec;
import org.scn.community.spec.SpecHelper;
import org.scn.community.spec.orgin.OrginSpec;
import org.scn.community.utils.Helpers;

public class UI5Property {

	private XMLStreamReader reader;
	private String componentName;
	
	private ArrayList<UI5Attribute> attributes = new ArrayList<UI5Attribute>();
	private String docu;
	private File root;
	private ArrayList<Property> valueProperties = new ArrayList<Property>();
	private final ArrayList<Value> values = new ArrayList<Value>();
	
	public UI5Property(XMLStreamReader reader, String componentName, File root) {
		this.reader = reader;
		this.componentName = componentName.replace(".control", "");
		this.root = root;
		
		int attributeCount = reader.getAttributeCount();
		for (int i = 0; i < attributeCount; i++) {
			String attributeLocalName = reader.getAttributeLocalName(i);
			String attributeValue = reader.getAttributeValue(i);
			
			this.attributes.add(new UI5Attribute(attributeLocalName, attributeValue));
		}
		
		while (hasNextTag(reader)) {
			readNextTag(reader);
			
			String localName = reader.getLocalName();
			
			if(localName.equals("documentation")) {
				readNextTag(reader);
				
				this.docu = reader.getText();
				break;
			}
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

	@Override
	public String toString() {
		return "\r\n\r\nUI5Property \r\n\t[componentName=" + componentName + ", \r\n\r\n\tattributes=" + attributes
				+ ", \r\n\r\n\tdocu=" + docu + "]";
	}
	
	public String[] toSpec20() {
		String compatibleType = this.getType();
		String originalType = this.getAttr("type");
		originalType = originalType.substring(originalType.indexOf("/") + 1);

		String template = Helpers.resource2String(OrginSpec.class, "org."+compatibleType+".tmpl");
		
		if(template == null) {
			template = Helpers.resource2String(OrginSpec.class, "org.default.tmpl");
		}
		
		String templateDs = Helpers.resource2String(OrginSpec.class, "ds."+compatibleType+".tmpl");

		if(templateDs == null) {
			templateDs = Helpers.resource2String(OrginSpec.class, "ds.simple.tmpl");
		}

		String category = "Display";
		String categoryDs = "Display";
		
		String nameOfProperty = getName();
		String desctiptionOfProperty = this.createDesctiption();
		
		if(desctiptionOfProperty.contains("Value")) {
			category = "Data-Values";
			categoryDs = "Display-Values";
		}
		if(desctiptionOfProperty.contains("Label")) {
			category = "Data-Labels";
			categoryDs = "Display-Labels";
		}
		
		if(compatibleType.equals("ObjectArray") || compatibleType.equals("ObjectSingle")) {
			category = "Content-" + desctiptionOfProperty;
			categoryDs = "Content-" + desctiptionOfProperty;
		}
		
		template = template.replace("%NAME%", nameOfProperty);
		template = template.replace("%DESCRIPTION%", desctiptionOfProperty);
		template = template.replace("%TOOLTIP%", this.docu);
		template = template.replace("%ZTL_TYPE%", compatibleType);
		template = template.replace("%CATEGORY%", category);
		template = template.replace("%VISIBLE%", "true");
		
		template = template.replace("%ZTL_FUNCTION%", "");
		template = template.replace("%NO_APS%", "false");
		template = template.replace("%NO_ZTL%", "false");

		// DS
		templateDs = templateDs.replace("%NAME%", Helpers.makeFirstUpper(nameOfProperty));
		templateDs = templateDs.replace("%DESCRIPTION%", Helpers.makeDescription(nameOfProperty));
		templateDs = templateDs.replace("%TOOLTIP%", this.docu);
		templateDs = templateDs.replace("%CATEGORY%", categoryDs);
		templateDs = templateDs.replace("%VISIBLE%", "true");
		
		templateDs = templateDs.replace("%ZTL_FUNCTION%", "");
		templateDs = templateDs.replace("%NO_APS%", "false");
		templateDs = templateDs.replace("%NO_ZTL%", "false");
		
		if(compatibleType.equals("boolean") || compatibleType.equals("String") || compatibleType.equals("Choice")) {
			// no need for booleans
			templateDs = "";
		}

		template = template.replace("\"choiceType\": \"\",", "\"choiceType\": \""+originalType+"\",");

		String defaultValue = this.getAttr("defaultValue");

		int currentI = 0;
		boolean defaultIsInValues = false;
		JSONObject jsonIncludeSpecification = null;		
		if(compatibleType.equals("Choice") || compatibleType.equals("ObjectArray") || compatibleType.equals("ObjectSingle")) {

			String suffix = "type";
			if(compatibleType.equals("ObjectArray") || compatibleType.equals("ObjectSingle")) {
				suffix = "control";
				defaultValue = "[]";
			}

			String typeFile = root.getAbsolutePath().substring(0, root.getAbsolutePath().indexOf("org.scn.community"));
			String xmlSpecFile = typeFile + "org.scn.community.shared\\ui5spec\\xml\\" + originalType + "." + suffix;
			typeFile = typeFile + "org.scn.community.shared\\ui5spec\\"+suffix+"\\" + originalType + ".spec.json";
			
			String jsonSpec = Helpers.file2String(typeFile);

			SpecHelper helper = new SpecHelper(this.componentName);

			if(jsonSpec == null) {
				String url = "https://sapui5.hana.ondemand.com/sdk/resources/sap/suite/ui/commons/"+originalType + "." +suffix;
				String onlineSpec = helper.sendGet(url);
				
				if(onlineSpec == null || onlineSpec.length() == 0) {
					throw new RuntimeException("UI5 Type/Control " + originalType + " is missing spec. Url " + url + " does not have spec.");	
				}

				if(suffix.equals("type")) {
					Helpers.string2File(xmlSpecFile, onlineSpec);
					UI5Type ui5Type = new UI5Type(new File(xmlSpecFile));
					ui5Type.generateSpec();
					jsonSpec = ui5Type.updateSpecAndZtlSingle();
				} else {
					Helpers.string2File(xmlSpecFile, onlineSpec);
					UI5Control ui5Type = new UI5Control(new File(xmlSpecFile));
					ui5Type.generateSpec();
					jsonSpec = ui5Type.updateSpecSingle();
				}
			}
			
			try {
				jsonIncludeSpecification = new JSONObject(jsonSpec);
			} catch (JSONException e) {
				throw new RuntimeException(e);
			}

			if(suffix.equals("type")) {
				helper.readSpecification(this.valueProperties, jsonIncludeSpecification);
				Property property = helper.getProperty(this.valueProperties, "values");
				
				if(property.getExtendedFullSpec() == null) {
					throw new RuntimeException("UI5 Type " + originalType + " is missing spec.");
				}
				
				ArrayList<ParamFullSpec> parameters = property.getExtendedFullSpec().getParameters();
				for (ParamFullSpec paramFullSpec : parameters) {
					String name = paramFullSpec.getPropertyName();
					String description = paramFullSpec.getValue();
					
					Value vaObj = new Value(name, description);
					this.values.add(vaObj);
				}
			} else {
				helper.readSpecification(this.valueProperties, jsonIncludeSpecification);
				
				for (Property propertyChild : this.valueProperties) {
					String typeChild = propertyChild.getExtendedFullSpec().getType(true);
					
					if(typeChild.equals("float") || typeChild.equals("int")) {
						typeChild = "String";
					}
					String nameChild = propertyChild.getName();
					
					String propDef = "\""+nameChild+"\": {\r\n\t\t\t\t\t";
					propDef = propDef + "  \"desc\": \""+Helpers.makeDescription(nameChild)+"\",\r\n\t\t\t\t\t";
					propDef = propDef + "  \"type\": \""+typeChild+"\"\r\n\t\t\t\t\t";
					propDef = propDef + "}";
					
					template = template.replace("%ARRAY_PROPERTY_SEQUENCE%", nameChild + ",%ARRAY_PROPERTY_SEQUENCE%");
					template = template.replace("%ARRAY_PROPERTY_VALUE%", propDef + ",\r\n\t\t\t\t\t%ARRAY_PROPERTY_VALUE%");
				}

				template = template.replace(",%ARRAY_PROPERTY_SEQUENCE%", "");
				template = template.replace(",\r\n\t\t\t\t\t%ARRAY_PROPERTY_VALUE%", "");
			}
		}
		
		if (this.values.size() > 0) {
			for (Value value : this.values) {
				template = template.replace("%VALUE_ENTRY%", value.toSpec20() + (++currentI < this.values.size() ? "," : "") + "\r\n\t\t\t\t%VALUE_ENTRY%");
				if(value.getName().equals(defaultValue)) {
					defaultIsInValues = true;
				}
			}
			template = template.replace("%VALUE_ENTRY%", "");
		} else {
			defaultIsInValues = true;
		}
		template = template.replace("%VALUE_ENTRY%", "");

		if(!defaultIsInValues) {
			throw new RuntimeException("default "+this.getAttr("defaultValue")+" is not in value list! " + nameOfProperty + ", in component " + this.componentName);
		}
		
		if (this.values.size() > 0) {
			for (Value value : this.values) {
				if(value.isDefault()) {
					defaultValue = value.getName();
				}
			}
		}
		
		// cut default value in case too long
		if(defaultValue == null) {
			defaultValue = "";
		}
		
		
		if(compatibleType.equals("int") && defaultValue.length() == 0) {
			defaultValue = "0";
		}
		
		if(compatibleType.equals("float") && defaultValue.length() == 0) {
			defaultValue = "0.0";
		}
		
		template = template.replace("%DEFAULT%", defaultValue);

		return new String[]{template, templateDs};
	}

	private String createDesctiption() {
		String name = this.getAttr("name");
		String description = "";
		
		for (int i = 0; i < name.length(); i++) {
			char n = name.charAt(i);
			
			if(Character.isUpperCase(n)) {
				description = description + " ";
			}
			
			if(i == 0) {
				n = new Character(n).toUpperCase(n);
			}
			description = description + n;
		}

		if(description.contains("Color")) {
			// need a hack as the description with "Color" is taking it as type
			description = description.replace("Color", "Colour");
		}
		return description;
	}

	String getType() {
		String type = this.getAttr("type");
		
		if(type.endsWith("string")) {
			return "String";
		}
		
		if(type.endsWith("float")) {
			return "float";
		}
		
		if(type.endsWith("int")) {
			return "int";
		}
		
		if(type.endsWith("boolean")) {
			return "boolean";
		}
		
		if(type.endsWith("CSSSize")) {
			return "int";
		}
		
		String cardi = this.getAttr("cardinality");
		if(cardi != null) {
			if(cardi.equals("0..n")) {
				return "ObjectArray";	
			}

			if(cardi.equals("0..1")) {
				return "ObjectSingle";
			}
		}
		
		return "Choice";
	}
	public String getAttr(String name) {
		for (UI5Attribute ui5Attribute : attributes) {
			if(ui5Attribute.getName().equals(name)){
				return ui5Attribute.getValue();
			}
		}
		
		return null;
	}

	public String getName() {
		String type = this.getAttr("type");
		if(type != null) {
			type = this.getType();
		}
		
		String name = this.getAttr("name");
		
//		if(type != null && type.equals("ObjectArray")) {
//			if(name.charAt(name.length()-1) == 's') {
//				name = name.substring(0, name.length()-1);
//			}
//		}

		return name;
	}

	public String getDesc() {
		return this.docu;
	}

	public void setName(String name) {
		for (UI5Attribute ui5Attribute : attributes) {
			if(ui5Attribute.getName().equals("name")){
				ui5Attribute.setValue(name);
			}
		}
	}

	public String getComponentName() {
		return this.componentName;
	}

	public void setType(String type) {
		for (UI5Attribute ui5Attribute : attributes) {
			if(ui5Attribute.getName().equals("type")){
				ui5Attribute.setValue(type);
			}
		}
	}
}
