package org.scn.community.spec;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Locale;

import javax.management.RuntimeErrorException;

import org.json.JSONException;
import org.json.JSONObject;
import org.scn.community.defgenerator.ZtlAndAps;
import org.scn.community.htmlgenerator.Property;
import org.scn.community.htmlgenerator.Value;
import org.scn.community.spec.xml.SpecificationXmlTemplate;
import org.scn.community.spec.ztl.SpecificationZtlTemplate;
import org.scn.community.utils.Helpers;

import com.sun.org.apache.xml.internal.dtm.ref.DTMDefaultBaseIterators.ChildrenIterator;

public class ParamFullSpec {

	private String key;
	
	private ArrayList<ParamFullSpec> parameters = new ArrayList<ParamFullSpec>();
	private HashMap<String, String> properties = new HashMap<String, String>();
	private Property parentProperty;

	private ParamFullSpec options;

	public void setName(String key) {
		this.key = key;
	}

	public String getName() {
		if(key.indexOf(",") > -1 ) {
			return key.substring(0, key.indexOf(","));
		}
		
		return key;
	}

	public String getCorrectName() {
		String correctName = properties.get("correctName");
		if(correctName == null || correctName.length() == 0) {
			return this.getName();
		}
		
		return correctName;
	}
	
	public String getHelp() {
		if(options != null)
			return "/**" + options.getPropertyValue("desc") + "*/";
		else
			return "/**" + this.getPropertyValue("desc") + "*/";
	}
	
	public String getTitle() {
		String title = "";
		if(options != null)
			title= options.getPropertyValue("desc");
		else
			title= this.getPropertyValue("desc");
		return title;
	}
	
	public String getValue() {
		return this.getPropertyValue("value");
	}

	public void addParameter(ParamFullSpec parameter) {
		parameters.add(parameter);
	}

	public String getType(boolean convertToZtlCompatibility) {
		String type = properties.get("type");
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
	
	public String getChoiceType() {
		if(options.getPropertyValue("ztlType").equals("Choice")) {
			String choiceType = options.getPropertyValue("choiceType");

			if(choiceType == null || choiceType.length() == 0) {
				throw new RuntimeException("ChoiceType not specified in " + this.getName() + " (component: " + this.parentProperty.getComponent() + ")");
			}
			
			if(choiceType.equals("-")) {
				choiceType = "";
			}
			
			return choiceType;
		}
		
		return "";
	}

	public boolean isOptional() {
		return properties.get("type").contains(",optional");
	}

	private boolean isZtl() {
		String mode = options.getPropertyValue("noZtl");
		
		if(mode == null || mode.length() == 0) {
			return true;
		}
		
		if(mode.contains("true")) {
			return false;
		}
		
		return true;
	}

	public String getKey() {
		return this.key;
	}

	public void addProperty(String key, String value) {
		properties.put(key,  value);
	}

	public String toString() {
		return toString(0);
	}
	
	public String toString(int level) {
		String prefix = "";
		for (int i = 0; i <= level; i++) {
			prefix = prefix + "\t";
		}
		
		String content = prefix + this.getName() + ", " +this.getType(false)+ "\r\n";
		content = content + prefix + "PARAMETERS:\r\n";
		for (ParamFullSpec paramGen : parameters) {
			content = content + "\r\n" + prefix + "\t" + paramGen.toString(level+1);
		}
		content = content + prefix + "PROPERTIES:\r\n";
		for (String propKey : properties.keySet()) {
			content = content +  "\r\n" + prefix + "\t" + propKey + "=" + properties.get(propKey);
		}
		return  content;
	}
	
	public ZtlAndAps getFunctions() {
		String template = null;
		String templateXml = null;

		String xmlType = getPropertyValue("type");
		
		templateXml = Helpers.resource2String(SpecificationXmlTemplate.class, "xml_prop."+xmlType+".template");

		if(templateXml == null) {
			templateXml = Helpers.resource2String(SpecificationXmlTemplate.class, "xml_prop.template");
		}

		options = getParameter("opts");

		String type = options.getPropertyValue("ztlType");
		String function = options.getPropertyValue("ztlFunction");
		
		String choiceType = options.getPropertyValue("choiceType");
		
		if(function == null) {
			function = "";
		}
		
		String arraySubType = "";
		if(type.equals("DoubleArray") || type.equals("SingleArray") || type.equals("JsonObject")) {
			arraySubType = type;
			type = "Array";
		}
		
		if(type.equals("Array")) {
			template = Helpers.resource2String(SpecificationZtlTemplate.class, "ztl_"+arraySubType+function+".ztl.template");

			if(template == null) {
				template = Helpers.resource2String(SpecificationZtlTemplate.class, "ztl_"+"simple"+".ztl.template");
			}
			
			ParamFullSpec arrayFullSpec = options.getParameter("arrayDefinition").getParameters().get(0);
			
			String arrayName = arrayFullSpec.getName();
			String arrayNameUpper = Helpers.makeFirstUpper(arrayName); 
			template = template.replace("%ROOT_CONTENT_NAME%", arrayNameUpper);
			
			String sequence = arrayFullSpec.getPropertyValue("sequence");
			String[] splitSequence = sequence.split(",");
			
			String PROPERTY_FULL = "";
			String CONTENT_NAME = "";
			String ROOT_ALL_PROPERTIES = "";
			String ROOT_PROPERTY_DEFINITION_KEY = "";
			String ROOT_PROPERTY_DESCRIPTION = "";
			String ROOT_PROPERTY_KEY = "";
			String ROOT_PROPERTY_DEFINITION_FULL = "";
			String ROOT_PROPERTY_DEFINITION_JSON = "";
			String ROOT_PROPERTY_NEW_APS_JSON = "";
			String ASSURE_OPTIONAL_ROOT_INITIALIZED = "";
			
			for (int i = 0; i < splitSequence.length; i++) {
				String keySequence = splitSequence[i];
				
				ArrayList<ParamFullSpec> children = arrayFullSpec.parameters;
				for (ParamFullSpec paramGenChild : children) {
					String typeOfChild = paramGenChild.properties.get("type");
					
					if(typeOfChild != null && typeOfChild.equals("Array")) {
						CONTENT_NAME = paramGenChild.getName();
						
						// now parse the array down...
						String sequence2 = paramGenChild.properties.get("sequence");
						String[] splitSequence2 = sequence2.split(",");
						
						String PROPERTY_DEFINITION_FULL = "";
						String PROPERTY_DEFINITION_JSON = "";
						String PROPERTY_NEW_APS_JSON = "";
						String ALL_PROPERTIES = "";
						String PROPERTY_DEFINITION_KEY = "";
						String ASSURE_OPTIONAL_INITIALIZED = "";
						String ITEM_PROPERTY_DESCRIPTION = "";
							
						for (int i2 = 0; i2 < splitSequence2.length; i2++) {
							String keySequence2 = splitSequence2[i2];
							ArrayList<ParamFullSpec> children2 = paramGenChild.parameters;
							for (ParamFullSpec paramGenChild2 : children2) {
								String typeOfChild2 = paramGenChild2.properties.get("type");
								
								if(typeOfChild2 != null && typeOfChild2.equals("Array")) {
									throw new RuntimeException("unexpected");
								} else {
									if(keySequence2.equals(paramGenChild2.getName())) {
										if(PROPERTY_DEFINITION_FULL.length() > 0) {
											PROPERTY_DEFINITION_FULL = PROPERTY_DEFINITION_FULL + ", "  + "\r\n\t\t\t";
											PROPERTY_DEFINITION_JSON = PROPERTY_DEFINITION_JSON + ", "  + "\r\n\t\t\t";
											ALL_PROPERTIES = ALL_PROPERTIES + ", ";
										}
										
										boolean optional = paramGenChild2.isOptional();
										
										boolean isBoolean = paramGenChild2.getType(true).equals("boolean");
										String initValue = isBoolean?"false":"\"\"";
										
										if(optional) {
											ASSURE_OPTIONAL_INITIALIZED = ASSURE_OPTIONAL_INITIALIZED + "if(" + paramGenChild2.getName() + " == undefined) { " + paramGenChild2.getName() + " = "+initValue+";}" + "\r\n\t\t";; 
										}
										
										if(isBoolean) {
											template = extendForBoolean(template, paramGenChild);
										}
										
										PROPERTY_DEFINITION_FULL = PROPERTY_DEFINITION_FULL + paramGenChild2.getHelp() + (optional?"optional ":"") + paramGenChild2.getType(true) + " " + paramGenChild2.getName();
										PROPERTY_DEFINITION_JSON = PROPERTY_DEFINITION_JSON + paramGenChild2.getName() + ":" + paramGenChild2.getName();
										
										ALL_PROPERTIES = ALL_PROPERTIES + paramGenChild2.getName() + " [" + paramGenChild2.getType(true) + "]"; 
										
										if(paramGenChild2.getName().equals("key")) {
											PROPERTY_DEFINITION_KEY = paramGenChild2.getType(true) + " " + paramGenChild2.getName();
											ITEM_PROPERTY_DESCRIPTION = paramGenChild2.getTitle();
										}
									}
								}
							}
						}
						
						template = template.replace("%PROPERTY_DEFINITION_FULL%", PROPERTY_DEFINITION_FULL);
						template = template.replace("%PROPERTY_DEFINITION_JSON%", PROPERTY_DEFINITION_JSON);
						template = template.replace("%ALL_PROPERTIES%", ALL_PROPERTIES);
						template = template.replace("%PROPERTY_DEFINITION_KEY%", PROPERTY_DEFINITION_KEY);
						template = template.replace("%ASSURE_OPTIONAL_INITIALIZED%", ASSURE_OPTIONAL_INITIALIZED);
						
					} else {
						if(keySequence.equals(paramGenChild.getName())) {
							if(ROOT_PROPERTY_DEFINITION_FULL.length() > 0) {
								ROOT_PROPERTY_DEFINITION_FULL = ROOT_PROPERTY_DEFINITION_FULL + ", " + "\r\n\t\t\t";
								PROPERTY_FULL = PROPERTY_FULL + ", " + "\r\n\t\t\t";
								ROOT_ALL_PROPERTIES = ROOT_ALL_PROPERTIES + ", ";
								ROOT_PROPERTY_DEFINITION_JSON = ROOT_PROPERTY_DEFINITION_JSON + ", "  + "\r\n\t\t\t";
							}
							
							boolean optional = paramGenChild.isOptional();
							
							boolean isBoolean = paramGenChild.getType(true).equals("boolean");
							String initValue = isBoolean?"false":"\"\"";

							if(optional) {
								ASSURE_OPTIONAL_ROOT_INITIALIZED = ASSURE_OPTIONAL_ROOT_INITIALIZED + "if(" + paramGenChild.getName() + " == undefined) { " + paramGenChild.getName() + " = "+initValue+";}" + "\r\n\t\t";; 
							}
							
							if(isBoolean) {
								template = extendForBoolean(template, paramGenChild);
							}
							
							ROOT_PROPERTY_DEFINITION_FULL = ROOT_PROPERTY_DEFINITION_FULL + paramGenChild.getHelp() + (optional?"optional ":"") + paramGenChild.getType(true) + " " + paramGenChild.getName();
							ROOT_PROPERTY_DEFINITION_JSON = ROOT_PROPERTY_DEFINITION_JSON + paramGenChild.getName() + ":" + paramGenChild.getName();
							PROPERTY_FULL = PROPERTY_FULL + paramGenChild.getName();
							ROOT_ALL_PROPERTIES = ROOT_ALL_PROPERTIES + paramGenChild.getName() + " [" + paramGenChild.getType(true) + "]";
							
							if(paramGenChild.getName().equals("key")) {
								ROOT_PROPERTY_DEFINITION_KEY = paramGenChild.getType(true) + " " + paramGenChild.getName();
								ROOT_PROPERTY_KEY = paramGenChild.getName();
								ROOT_PROPERTY_DESCRIPTION = paramGenChild.getTitle();
							}
							
							break;
						}
					}
				}
			}

			template = template.replace("%ROOT_PROPERTY_DEFINITION_FULL%", ROOT_PROPERTY_DEFINITION_FULL);
			template = template.replace("%ROOT_PROPERTY_DEFINITION_JSON%", ROOT_PROPERTY_DEFINITION_JSON);
			template = template.replace("%PROPERTY_FULL%", PROPERTY_FULL);
			template = template.replace("%ROOT_ALL_PROPERTIES%", ROOT_ALL_PROPERTIES);
			template = template.replace("%ASSURE_OPTIONAL_ROOT_INITIALIZED%", ASSURE_OPTIONAL_ROOT_INITIALIZED);
			
			template = template.replace("%BOOLEAN_EXTENSION_PROPERTY%", "");
			
			if(CONTENT_NAME != null && CONTENT_NAME.length() > 0) {
				template = template.replace("%CONTENT_NAME%", Helpers.makeFirstUpper(CONTENT_NAME));	
			} else {
				template = template.replace("%CONTENT_NAME%", "none");
			}
			
			
			template = template.replace("%COMPONENT_NAME%", this.parentProperty.getComponent().toUpperCase(Locale.ENGLISH));
			template = template.replace("%PROPERTY_NAME%", this.parentProperty.getName());
			template = template.replace("%ROOT_PROPERTY_DEFINITION_KEY%", ROOT_PROPERTY_DEFINITION_KEY);
			template = template.replace("%ROOT_PROPERTY_KEY%", ROOT_PROPERTY_KEY);
		
		} else {
			
			if(choiceType != null && choiceType.length() > 0) {
				template = Helpers.resource2String(SpecificationZtlTemplate.class, "ztl_"+type+function+"."+"shared"+".ztl.template");
			} else {
				template = Helpers.resource2String(SpecificationZtlTemplate.class, "ztl_"+type+function+".ztl.template");	
			}
			
			if(template == null) {
				template = Helpers.resource2String(SpecificationZtlTemplate.class, "ztl_"+"simple"+".ztl.template");
			}
		}
	
		template = exchangeTemplate(template, type, xmlType);
		templateXml = exchangeTemplate(templateXml, type, xmlType);

		ZtlAndAps faa = new ZtlAndAps();
		
		if(isZtl()) {
			faa.setFunctions(template);
		}
		faa.setXml(templateXml);
		return faa;
	}

	private String extendForBoolean(String template, ParamFullSpec paramGenChild) {
		String templateBoolean = Helpers.resource2String(SpecificationZtlTemplate.class, "ztl_ArrayBooleanSwitch.ztl.template");
		
		templateBoolean = templateBoolean.replace("%NAME%", paramGenChild.getName());
		
		String nameCut = paramGenChild.getName();
		nameCut = Helpers.makeFirstUpper(nameCut);
		templateBoolean = templateBoolean.replace("%NAME_CAPITAL%", nameCut);
		
		String nameCutParent = this.parentProperty.getNameCut();
		nameCutParent = Helpers.makeFirstUpper(nameCutParent);
		templateBoolean = templateBoolean.replace("%PROPERTY_CAPITAL_CUT%", nameCutParent);
		 
		return template.replace("%BOOLEAN_EXTENSION_PROPERTY%", templateBoolean);
	}

	private String exchangeTemplate (String template, String type, String xmlType) {
		String nameCut = this.parentProperty.getNameCut();
		 nameCut = Helpers.makeFirstUpper(nameCut);
		 template = template.replace("%PROPERTY_CAPITAL_CUT%", nameCut);
		 template = template.replace("%PROPERTY_TYPE_CHOICE%", this.getChoiceType());
		 template = template.replace("%PROPERTY_SMALL_CUT%", nameCut.substring(0,1).toLowerCase(Locale.ENGLISH) + nameCut.substring(1));
		 template = template.replace("%PROPERTY_CAPITAL%", this.parentProperty.getName());
		 template = template.replace("%PROPERTY_TYPE%", this.getType(false));
		 template = template.replace("%PROPERTY_TYPE_ZTL%", this.getType(true));
		 template = template.replace("%PROPERTY_TYPE_OVERLOAD%", this.options.getPropertyValue("ztlType"));
		 template = template.replace("%HELP%", getHelp());
		 template = template.replace("%NAME%", getTitle());
		 template = template.replace("%COMPONENT_NAME%", this.parentProperty.getComponent().toUpperCase(Locale.ENGLISH));
		 
		template = template.replace("%COMPONENT_NAME%", this.parentProperty.getComponent().toUpperCase(Locale.ENGLISH));
		template = template.replace("%PROPERTY_NAME%", this.parentProperty.getName());
		template = template.replace("%PROPERTY_TITLE%", this.options.getPropertyValue("desc"));
		template = template.replace("%PROPERTY_VISIBLE%", this.getPropertyValue("visible"));
		
		String refProp = this.options.getPropertyValue("refProperty");
		String refInitValue = this.options.getPropertyValue("refValue");
		String refDesc = this.options.getPropertyValue("refDesc");
		 
		if(refProp != null) {
			template = template.replace("%PROPERTY_CAPITAL_REF%", refProp);
			template = template.replace("%PROPERTY_REF_INIT%", refInitValue);
				 
			template = template.replace("%PROPERTY_REF_DESC%", refDesc);
		}
		template = template.replace("%XML_PROPERTY_POSSIBLE_VALUE%", "");
 
		return template;
	}

	private String getPropertyValue(String name) {
		for (String key : properties.keySet()) {
			if(key.equals(name)) {
				return properties.get(key);
			}
		}
		return "";
	}

	private ParamFullSpec getParameter(String name) {
		for (ParamFullSpec paramFullSpec : parameters) {
			if(paramFullSpec.getName().equals(name)) {
				return paramFullSpec;
			}
		}
		return null;
	}

	public void setParent(Property parentProperty) {
		this.parentProperty = parentProperty;
	}

	public void addEntry(int i, JSONObject element) {
		Iterator keys = element.keys();
		while (keys.hasNext()) {
			String key = (String) keys.next();
			String value;
			try {
				value = (String) element.get(key);
			} catch (JSONException e) {
				throw new RuntimeException(e);
			}
			
			this.properties.put(key, value);
		}
		
	}

	public HashMap<String, String> getProperties() {
		return this.properties;
	}
	public ArrayList<ParamFullSpec> getParameters() {
		return this.parameters;
	}

	public String getValueXml() {
		String template = Helpers.resource2String(SpecificationXmlTemplate.class, "xml_default.template");
		
		template = template.replace("%PROPERTY_NAME%", this.getName());
		template = template.replace("%PROPERTY_DEFAULT_VALUE%", this.getValue());
		
		return template;
	}
}
