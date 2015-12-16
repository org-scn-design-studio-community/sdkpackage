package org.scn.community.spec;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Locale;

import javax.management.RuntimeErrorException;

import org.json.JSONException;
import org.json.JSONObject;
import org.scn.community.defgenerator.ParamSimpleSpec;
import org.scn.community.defgenerator.ZtlAndAps;
import org.scn.community.htmlgenerator.Property;
import org.scn.community.htmlgenerator.Value;
import org.scn.community.spec.js.SpecificationJsTemplate;
import org.scn.community.spec.ui5.Ui5JsSpec;
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
		if(options == null) {
			options = getParameter("opts");
		}
		if(options == null) {
			return this.getName();
		}
		String correctName = options.getPropertyValue("correctName");
		if(correctName == null || correctName.length() == 0) {
			return this.getName();
		}
		
		return correctName;
	}
	
	public String getTemplateName() {
		String correctName = properties.get("template");
		if(correctName == null || correctName.length() == 0) {
			return "none";
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

	public String getPropertyName() {
		return this.getPropertyValue("name");
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

	public boolean isArrayType() {
		if(options == null) {
			options = getParameter("opts");
		}
		String ztlType = options.getPropertyValue("ztlType");
		if(ztlType != null && ztlType.contains("Array") && !ztlType.equals("StringArray")) {
			return true;
		}
		
		return false;
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


	
	@Override
	public String toString() {
		return "\r\nParamFullSpec \r\n\t[\r\n\t\tkey=" + key + ", \r\n\t\tparameters=" + parameters
				+ ", \r\n\t\tproperties=" + properties + ", \r\n\t\toptions=" + options + "]";
	}

	public String toString(int level) {
		String prefix = "";
		for (int i = 0; i <= level; i++) {
			prefix = prefix + "\t";
		}
		
		String content = prefix + this.getName() + ", " +this.getType(false)+ "\r\n";
		content = content + prefix + "PARAMETERS:\r\n";
		if(parameters != null) {
			for (ParamFullSpec paramGen : parameters) {
				content = content + "\r\n" + prefix + "\t" + paramGen.toString(level+1);
			}
			content = content + prefix + "PROPERTIES:\r\n";
		}
		if(properties != null){
			for (String propKey : properties.keySet()) {
				content = content +  "\r\n" + prefix + "\t" + propKey + "=" + properties.get(propKey);
			}
			
		}
		return  content;
	}
	
	public ZtlAndAps getFunctions() {
		String template = null;
		String templateXml = null;
		String templateUI5Xml = null;
		String templateUI5ComplexXml = null;

		String xmlType = getPropertyValue("type");
		
		templateXml = Helpers.resource2String(SpecificationXmlTemplate.class, "xml_prop."+xmlType+".template");

		if(templateXml == null) {
			templateXml = Helpers.resource2String(SpecificationXmlTemplate.class, "xml_prop.template");
		}
		
		if(this.isNotSimple()) {
			templateUI5ComplexXml = Helpers.resource2String(Ui5JsSpec.class, "comp.view.param.complex.xml.tmpl");
		}
		templateUI5Xml = Helpers.resource2String(Ui5JsSpec.class, "comp.view.param.xml.tmpl");

		options = getParameter("opts");

		String type = options.getPropertyValue("ztlType");
		String function = options.getPropertyValue("ztlFunction");
		
		String choiceType = options.getPropertyValue("choiceType");
		
		ParamFullSpec valueOptions = options.getParameter("options");
		
		boolean defaultInValues = false;
		
		String defaultValue = this.getPropertyValue("value");
		String valueList = "";
		if(valueOptions != null) {
			ArrayList<ParamFullSpec> valueParameters = valueOptions.getParameters();
			
			for (ParamFullSpec paramFullSpec : valueParameters) {
				String name = paramFullSpec.getPropertyValue("key");
				String text = paramFullSpec.getPropertyValue("text");

				if(name.equals(defaultValue)) {
					defaultInValues = true;
				}

				if(valueList.length()>0){
					valueList = valueList + " | " + name;	
				}else {
					valueList = name;
				}
			}
		} else {
			defaultInValues = true;
		}
		
		if(!defaultInValues) {
			throw new RuntimeException("default "+defaultValue+" is not in value list ["+valueList+"]! " + this.getName() + ", in component " + this.parentProperty.getComponent());
		}
		
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
			arrayName = Helpers.cutLastS(arrayName);

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
					
					String nameRoot = paramGenChild.getName();
					if(keySequence.equals(nameRoot)) {
						if(typeOfChild != null && typeOfChild.equals("Array")) {
							CONTENT_NAME = nameRoot;
							
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
										String nameChild = paramGenChild2.getName();
										if(keySequence2.equals(nameChild)) {
											if(PROPERTY_DEFINITION_FULL.length() > 0) {
												PROPERTY_DEFINITION_FULL = PROPERTY_DEFINITION_FULL + ", "  + "\r\n\t\t\t";
												PROPERTY_DEFINITION_JSON = PROPERTY_DEFINITION_JSON + ", "  + "\r\n\t\t\t";
												ALL_PROPERTIES = ALL_PROPERTIES + ", ";
											}
											
											boolean optional = paramGenChild2.isOptional();
											
											boolean isBoolean = paramGenChild2.getType(true).equals("boolean");
											String initValue = isBoolean?"false":"\"\"";
											
											if(optional) {
												ASSURE_OPTIONAL_INITIALIZED = ASSURE_OPTIONAL_INITIALIZED + "if(" + nameChild + " == undefined) { " + nameChild + " = "+initValue+";}" + "\r\n\t\t";; 
											}
											
											String subArrayName = nameRoot;
											String subArrayNameUpper = Helpers.makeFirstUpper(subArrayName); 
											
											PROPERTY_DEFINITION_FULL = PROPERTY_DEFINITION_FULL + paramGenChild2.getHelp() + (optional?"optional ":"") + paramGenChild2.getType(true) + " " + nameChild;
											PROPERTY_DEFINITION_JSON = PROPERTY_DEFINITION_JSON + nameChild + ":" + nameChild;
											
											ALL_PROPERTIES = ALL_PROPERTIES + nameChild + " [" + paramGenChild2.getType(true) + "]"; 
											
											if(nameChild.equals("key")) {
												PROPERTY_DEFINITION_KEY = paramGenChild2.getType(true) + " " + nameChild;
												ITEM_PROPERTY_DESCRIPTION = paramGenChild2.getTitle();
											} else {
												if(!nameChild.equals("parentKey") && !nameChild.equals("leaf")) {
													template = extendFor(paramGenChild2.getType(true), template, paramGenChild2, subArrayNameUpper);	
												}
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
							if(keySequence.equals(nameRoot)) {
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
									ASSURE_OPTIONAL_ROOT_INITIALIZED = ASSURE_OPTIONAL_ROOT_INITIALIZED + "if(" + nameRoot + " == undefined) { " + nameRoot + " = "+initValue+";}" + "\r\n\t\t";; 
								}
								
								ROOT_PROPERTY_DEFINITION_FULL = ROOT_PROPERTY_DEFINITION_FULL + paramGenChild.getHelp() + (optional?"optional ":"") + paramGenChild.getType(true) + " " + nameRoot;
								ROOT_PROPERTY_DEFINITION_JSON = ROOT_PROPERTY_DEFINITION_JSON + nameRoot + ":" + nameRoot;
								PROPERTY_FULL = PROPERTY_FULL + nameRoot;
								ROOT_ALL_PROPERTIES = ROOT_ALL_PROPERTIES + nameRoot + " [" + paramGenChild.getType(true) + "]";
								
								if(nameRoot.equals("key")) {
									ROOT_PROPERTY_DEFINITION_KEY = paramGenChild.getType(true) + " " + nameRoot;
									ROOT_PROPERTY_KEY = nameRoot;
									ROOT_PROPERTY_DESCRIPTION = paramGenChild.getTitle();
								} else {
									if(!nameRoot.equals("parentKey") && !nameRoot.equals("leaf")) {
										template = extendFor(paramGenChild.getType(true), template, paramGenChild, arrayNameUpper);	
									}
								}
							}
						}
					}
				}
			}

			template = template.replace("%ROOT_PROPERTY_DEFINITION_FULL%", ROOT_PROPERTY_DEFINITION_FULL);
			template = template.replace("%ROOT_PROPERTY_DEFINITION_JSON%", ROOT_PROPERTY_DEFINITION_JSON);
			template = template.replace("%PROPERTY_FULL%", PROPERTY_FULL);
			template = template.replace("%ROOT_ALL_PROPERTIES%", ROOT_ALL_PROPERTIES);
			template = template.replace("%ASSURE_OPTIONAL_ROOT_INITIALIZED%", ASSURE_OPTIONAL_ROOT_INITIALIZED);
			
			template = template.replace("%CUSTOM_EXTENSION_PROPERTY%", "");
			
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
				template = Helpers.resource2String(SpecificationZtlTemplate.class, "ztl_"+type+function+"."+"shared"+"."+xmlType+".ztl.template");
			} else {
				template = Helpers.resource2String(SpecificationZtlTemplate.class, "ztl_"+type+function+"."+xmlType+".ztl.template");	
			}
			
			if(template == null) {
				template = Helpers.resource2String(SpecificationZtlTemplate.class, "ztl_"+type+function+".ztl.template");
			}

			if(template == null) {
				template = Helpers.resource2String(SpecificationZtlTemplate.class, "ztl_"+"simple"+".ztl.template");
			}
		}
	
		template = exchangeTemplate(template);
		templateXml = exchangeTemplate(templateXml);
		templateUI5Xml = exchangeTemplate(templateUI5Xml);
		templateUI5ComplexXml = exchangeTemplate(templateUI5ComplexXml);

		ZtlAndAps faa = new ZtlAndAps();
		
		if(isZtl()) {
			faa.setFunctions(template);
		}
		faa.setXml(templateXml);
		faa.setParamXml(templateUI5Xml);
		faa.setParamComplexXml(templateUI5ComplexXml);

		return faa;
	}

	private String extendFor(String type, String template, ParamFullSpec paramGenChild, String arrayNameUpper) {
		String templateCustom = Helpers.resource2String(SpecificationZtlTemplate.class, "ztl_Array."+type+".ztl.template");
		
		if(templateCustom == null) {
			return template;
		}
		
		templateCustom = templateCustom.replace("%NAME%", paramGenChild.getName());
		
		String nameCut = paramGenChild.getName();
		nameCut = Helpers.makeFirstUpper(nameCut);
		templateCustom = templateCustom.replace("%NAME_CAPITAL%", nameCut);

		templateCustom = templateCustom.replace("%PROPERTY_CAPITAL_CUT%", arrayNameUpper);
		 
		return template.replace("%CUSTOM_EXTENSION_PROPERTY%", templateCustom + "\r\n" + "%CUSTOM_EXTENSION_PROPERTY%");
	}

	public String exchangeTemplate (String template) {
		 if(template == null) {return null;}
		 String nameCut = this.parentProperty.getNameCut();
		 String nameCutCapital = Helpers.makeFirstUpper(nameCut);
		 template = template.replace("%PROPERTY_CAPITAL_CUT%", nameCutCapital);
		 template = template.replace("%PROPERTY_TYPE_CHOICE%", this.getChoiceType());
		 template = template.replace("%PROPERTY_SMALL_CUT%", Helpers.makeFirstLower(nameCut));
		 template = template.replace("%PROPERTY_CAPITAL%", this.parentProperty.getName());
		 template = template.replace("%PROPERTY_TYPE%", this.getType(false));
		 template = template.replace("%PROPERTY_TYPE_ZTL%", this.getType(true));
		 template = template.replace("%PROPERTY_TYPE_OVERLOAD%", this.options.getPropertyValue("ztlType"));
		 template = template.replace("%HELP%", getHelp());
		 template = template.replace("%NAME%", this.getCorrectName());
		 template = template.replace("%TITLE%", getTitle());
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

	public String getPropertyValue(String name) {
		for (String key : properties.keySet()) {
			if(key.equals(name)) {
				return properties.get(key);
			}
		}
		return "";
	}

	public ParamFullSpec getParameter(String name) {
		for (ParamFullSpec paramFullSpec : parameters) {
			if(paramFullSpec.getName().equals(name)) {
				return paramFullSpec;
			}
		}
		return null;
	}
	
	public ParamFullSpec getParameter(int i) {
		return parameters.get(i);
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
		template = template.replace("%PROPERTY_DEFAULT_VALUE%", this.getValue().replace("\\\"", "\""));
		
		return template;
	}
	
	public String getJson() {
		String template = Helpers.resource2String(Ui5JsSpec.class, "json_parameter.template");
		
		
		template = template.replace("%PROPERTY_DEFAULT_VALUE%", this.getValue().replace("\\\"", "\""));
		template = template.replace("%PROPERTY_TYPE%", this.getPropertyValue("type"));
		
		String typeZtlChild = getZtlType();
		
		String propDef = "";
		if(typeZtlChild.equals("Choice")) {
			String valuesJson = getValues();
			propDef = propDef + "\"options\": \""+valuesJson+"\",\r\n\t\t\t\t\t\t\t";
			propDef = propDef + "\"apsControl\": \""+"combobox"+"\"\r\n";
		}
		template = template.replace("%PROPERTY_CHOICE_DEFINITION%", propDef);
		
		
		template = template.replace("%PROPERTY_NAME%", this.getName());
		template = template.replace("%PROPERTY_DESCRIPTION%", this.getPropertyValue("desc") + (typeZtlChild.equals("StringArray")?" [Array]":""));
		return template;
	}

	public Ui5JsContent getJsContent() {
		Ui5JsContent content = new Ui5JsContent(this);
		content.calculate();
		return content;
	}

	public String getViewXml() {
		String template = Helpers.resource2String(Ui5JsContent.class, "comp.view.property.xml");
		template = exchangeTemplate(template);

		return template;
	}

	public Property getParentProperty() {
		return this.parentProperty;
	}

	public String getOriginalType() {
		return getPropertyValue("origType");
	}

	public String getZtlType() {
		if(getParameter("opts") != null) {
			return getParameter("opts").getPropertyValue("ztlType");	
		}
		return getType(true);
	}
	public String getValues() {
		ParamFullSpec parameter = getParameter("opts"); 
		ParamFullSpec parameter2 = parameter.getParameter("options");
		
		String options = "[";
		ArrayList<ParamFullSpec> parameters2 = parameter2.getParameters();
		for (ParamFullSpec paramFullSpec : parameters2) {
			String key = paramFullSpec.getPropertyValue("key");
			String text = paramFullSpec.getPropertyValue("text");
			
			if(options.length() > 1) {options = options + ",";}
			options = options + "{\"key\":\""+key+"\",\"text\":\""+text+"\"}";
		}
		
		options = options + "]";
		return options;
	}
	
	public boolean isNotSimple() {
		String typeChild =  getPropertyValue("type");
		
		if(typeChild.equals("String") 
				|| typeChild.equals("boolean") || typeChild.equals("int") || typeChild.equals("float") 
				|| typeChild.equals("Url") || typeChild.equals("Color") || typeChild.equals("Choice") 
				|| typeChild.equals("StringArray")) {
			// those we accept in single array
		} else {
			return true;
		}
		
		return false;
	}

}
