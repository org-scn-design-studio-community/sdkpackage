package org.scn.community.defgenerator;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Locale;

import javax.management.RuntimeErrorException;

import org.scn.community.htmlgenerator.Property;
import org.scn.community.htmlgenerator.Value;
import org.scn.community.utils.Helpers;

import com.sun.org.apache.xml.internal.dtm.ref.DTMDefaultBaseIterators.ChildrenIterator;

public class ParamSimpleSpec {

	private String key;
	
	private ArrayList<ParamSimpleSpec> parameters = new ArrayList<ParamSimpleSpec>();
	private HashMap<String, String> properties = new HashMap<String, String>();
	private Property parentProperty;

	public void setName(String key) {
		this.key = key;
	}

	public String getName() {
		if(key.indexOf(",") > -1 ) {
			return key.substring(0, key.indexOf(","));
		}
		
		return key;
	}
	
	public String getHelp() {
		return "/**" + properties.get("desc") + "*/";
	}
	
	public String getTitle() {
		return properties.get("desc");
	}

	public void addParameter(ParamSimpleSpec parameter) {
		parameters.add(parameter);
	}

	public String getType() {
		String type = properties.get("type");
		if(type.contains(",")) {
			type = type.substring(0, type.indexOf(","));
		}
		
		if(type.equals("Url") || type.equals("Color")) {
			type = "String";
		}
		return type;
	}

	public boolean isOptional() {
		return properties.get("type").contains(",optional");
	}
	
	private boolean isAps() {
		String mode = properties.get("mode");
		
		if(mode == null) {
			return true;
		}
		
		if(mode.contains("aps")) {
			return true;
		}
		
		return false;
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
		
		String content = prefix + this.getName() + ", " +this.getType()+ "\r\n";
		content = content + prefix + "PARAMETERS:\r\n";
		for (ParamSimpleSpec paramGen : parameters) {
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
		String templateAps = null;
		
			String type = properties.get("type");
			String function = properties.get("function");
			if(function == null) {
				function = "";
			}
			
			String arraySubType = "";
			if(type.equals("DoubleArray") || type.equals("SingleArray")) {
				arraySubType = type;
				type = "Array";
			}
			
			if(type.equals("Array")) {
				template = Helpers.resource2String(ParamSimpleSpec.class, "ztl_"+arraySubType+function+".ztl.tmlp");
				templateAps = Helpers.resource2String(ParamSimpleSpec.class, "aps_"+type+function+".js.tmlp");

				if(template == null) {
					template = Helpers.resource2String(ParamSimpleSpec.class, "ztl_"+"simple"+".ztl.tmlp");
				}
				
				if(templateAps == null) {
					templateAps = Helpers.resource2String(ParamSimpleSpec.class, "aps_"+"simple"+".js.tmlp");
				}

				ParamSimpleSpec paramFirstChild = this.parameters.get(0);
				String firstKey = paramFirstChild.getName();
				String firstKeyUpper = Helpers.makeFirstUpper(firstKey); 
				template = template.replace("%ROOT_CONTENT_NAME%", firstKeyUpper);
				templateAps = templateAps.replace("%ROOT_CONTENT_NAME%", firstKeyUpper);
				
				String sequence = paramFirstChild.properties.get("sequence");
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
					
					ArrayList<ParamSimpleSpec> children = paramFirstChild.parameters;
					for (ParamSimpleSpec paramGenChild : children) {
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
								ArrayList<ParamSimpleSpec> children2 = paramGenChild.parameters;
								for (ParamSimpleSpec paramGenChild2 : children2) {
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
											
											String initValue = paramGenChild2.getType().equals("boolean")?"false":"\"\"";
											if(optional) {
												ASSURE_OPTIONAL_INITIALIZED = ASSURE_OPTIONAL_INITIALIZED + "if(" + paramGenChild2.getName() + " == undefined) { " + paramGenChild2.getName() + " = "+initValue+";}" + "\r\n\t\t";; 
											}
											
											PROPERTY_DEFINITION_FULL = PROPERTY_DEFINITION_FULL + paramGenChild2.getHelp() + (optional?"optional ":"") + paramGenChild2.getType() + " " + paramGenChild2.getName();
											PROPERTY_DEFINITION_JSON = PROPERTY_DEFINITION_JSON + paramGenChild2.getName() + ":" + paramGenChild2.getName();
											
											ALL_PROPERTIES = ALL_PROPERTIES + paramGenChild2.getName() + " [" + paramGenChild2.getType() + "]"; 
											
											if(paramGenChild2.getName().equals("key")) {
												PROPERTY_DEFINITION_KEY = paramGenChild2.getType() + " " + paramGenChild2.getName();
												ITEM_PROPERTY_DESCRIPTION = paramGenChild2.getTitle();
											} else {
												boolean isAps = paramGenChild2.isAps();
												
												if(isAps) {
													if(PROPERTY_NEW_APS_JSON.length() > 0) {
														PROPERTY_NEW_APS_JSON = PROPERTY_NEW_APS_JSON + ", "  + "\r\n\t\t\t";
													}
													PROPERTY_NEW_APS_JSON = PROPERTY_NEW_APS_JSON + paramGenChild2.getName() + ":" + initValue;
													
													// add param handler
													String paramGenChild2Value = paramGenChild2.getType();
													String paramGenChild2Template = Helpers.resource2String(ParamSimpleSpec.class, "aps_"+type+"-param-"+paramGenChild2Value+".js.tmlp");
													
													if(paramGenChild2Template == null){
														paramGenChild2Template = Helpers.resource2String(ParamSimpleSpec.class, "aps_"+type+"-param-"+"String"+".js.tmlp");
													}
													
													paramGenChild2Template = paramGenChild2Template.replace("%PARAM_NAME%", paramGenChild2.getName());
													paramGenChild2Template = paramGenChild2Template.replace("%PARAM_TITLE%", paramGenChild2.getTitle());
													
													templateAps = templateAps.replace("%ITEM_CONTENT_HANDLER%", paramGenChild2Template+"\r\n\r\n%ITEM_CONTENT_HANDLER%");
												}
												break;
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
							
							templateAps = templateAps.replace("%ITEM_CONTENT_HANDLER%", "");
							templateAps = templateAps.replace("%ITEM_PROPERTY_DESCRIPTION%", ITEM_PROPERTY_DESCRIPTION);
							templateAps = templateAps.replace("%PROPERTY_NEW_APS_JSON%", PROPERTY_NEW_APS_JSON);
						} else {
							if(keySequence.equals(paramGenChild.getName())) {
								if(ROOT_PROPERTY_DEFINITION_FULL.length() > 0) {
									ROOT_PROPERTY_DEFINITION_FULL = ROOT_PROPERTY_DEFINITION_FULL + ", " + "\r\n\t\t\t";
									PROPERTY_FULL = PROPERTY_FULL + ", " + "\r\n\t\t\t";
									ROOT_ALL_PROPERTIES = ROOT_ALL_PROPERTIES + ", ";
									ROOT_PROPERTY_DEFINITION_JSON = ROOT_PROPERTY_DEFINITION_JSON + ", "  + "\r\n\t\t\t";
								}
								
								boolean optional = paramGenChild.isOptional();
								String initValue = paramGenChild.getType().equals("boolean")?"false":"\"\"";
								
								if(optional) {
									ASSURE_OPTIONAL_ROOT_INITIALIZED = ASSURE_OPTIONAL_ROOT_INITIALIZED + "if(" + paramGenChild.getName() + " == undefined) { " + paramGenChild.getName() + " = "+initValue+";}" + "\r\n\t\t";; 
								}
								
								ROOT_PROPERTY_DEFINITION_FULL = ROOT_PROPERTY_DEFINITION_FULL + paramGenChild.getHelp() + (optional?"optional ":"") + paramGenChild.getType() + " " + paramGenChild.getName();
								ROOT_PROPERTY_DEFINITION_JSON = ROOT_PROPERTY_DEFINITION_JSON + paramGenChild.getName() + ":" + paramGenChild.getName();
								PROPERTY_FULL = PROPERTY_FULL + paramGenChild.getName();
								ROOT_ALL_PROPERTIES = ROOT_ALL_PROPERTIES + paramGenChild.getName() + " [" + paramGenChild.getType() + "]";
								
								if(paramGenChild.getName().equals("key")) {
									ROOT_PROPERTY_DEFINITION_KEY = paramGenChild.getType() + " " + paramGenChild.getName();
									ROOT_PROPERTY_KEY = paramGenChild.getName();
									ROOT_PROPERTY_DESCRIPTION = paramGenChild.getTitle();
								} else {
									boolean isAps = paramGenChild.isAps();
									if(isAps) {
										
										if(ROOT_PROPERTY_NEW_APS_JSON.length() > 0) {
											ROOT_PROPERTY_NEW_APS_JSON = ROOT_PROPERTY_NEW_APS_JSON + ", "  + "\r\n\t\t\t";
										}
										ROOT_PROPERTY_NEW_APS_JSON = ROOT_PROPERTY_NEW_APS_JSON + paramGenChild.getName() + ":" + initValue;
										
										// add param handler
										String paramGenChildValue = paramGenChild.getType();
										String paramGenChildTemplate = Helpers.resource2String(ParamSimpleSpec.class, "aps_"+type+"-section-"+paramGenChildValue+".js.tmlp");
										
										if(paramGenChildTemplate == null){
											paramGenChildTemplate = Helpers.resource2String(ParamSimpleSpec.class, "aps_"+type+"-section-"+"String"+".js.tmlp");
										}
										
										paramGenChildTemplate = paramGenChildTemplate.replace("%PARAM_NAME%", paramGenChild.getName());
										paramGenChildTemplate = paramGenChildTemplate.replace("%PARAM_TITLE%", paramGenChild.getTitle());
										
										templateAps = templateAps.replace("%SECTION_CONTENT_HANDLER%", paramGenChildTemplate+"\r\n\r\n%SECTION_CONTENT_HANDLER%");
									}
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
				
				if(CONTENT_NAME != null && CONTENT_NAME.length() > 0) {
					template = template.replace("%CONTENT_NAME%", Helpers.makeFirstUpper(CONTENT_NAME));	
				} else {
					template = template.replace("%CONTENT_NAME%", "none");
				}
				
				
				template = template.replace("%COMPONENT_NAME%", this.parentProperty.getComponent().toUpperCase(Locale.ENGLISH));
				template = template.replace("%PROPERTY_NAME%", this.parentProperty.getName());
				template = template.replace("%ROOT_PROPERTY_DEFINITION_KEY%", ROOT_PROPERTY_DEFINITION_KEY);
				template = template.replace("%ROOT_PROPERTY_KEY%", ROOT_PROPERTY_KEY);
				
				if(CONTENT_NAME != null && CONTENT_NAME.length() > 0) {
					templateAps = templateAps.replace("%CONTENT_NAME%", Helpers.makeFirstUpper(CONTENT_NAME));	
				} else {
					templateAps = templateAps.replace("%CONTENT_NAME%", "none");
				}
				templateAps = templateAps.replace("%SECTION_CONTENT_HANDLER%", "");
				templateAps = templateAps.replace("%ROOT_PROPERTY_DESCRIPTION%", ROOT_PROPERTY_DESCRIPTION);
				templateAps = templateAps.replace("%ROOT_ARRAY_TYPE_LIST_CSS%", "org-scn-Aps-DetailList-" + arraySubType);
				templateAps = templateAps.replace("%ITEM_CONTENT_HANDLER%", "");
				templateAps = templateAps.replace("%ROOT_PROPERTY_NEW_APS_JSON%", ROOT_PROPERTY_NEW_APS_JSON);
				templateAps = templateAps.replace("%PROPERTY_NEW_APS_JSON%", "");
				templateAps = templateAps.replace("%COMPONENT_NAME%", this.parentProperty.getComponent().toUpperCase(Locale.ENGLISH));
				templateAps = templateAps.replace("%PROPERTY_NAME%", this.parentProperty.getName());
				templateAps = templateAps.replace("%PROPERTY_DESCRIPTION%", this.parentProperty.getTitle());
			} else {
				template = Helpers.resource2String(ParamSimpleSpec.class, "ztl_"+type+function+".ztl.tmlp");
				templateAps = Helpers.resource2String(ParamSimpleSpec.class, "aps_"+type+function+".js.tmlp");

				if(template == null) {
					template = Helpers.resource2String(ParamSimpleSpec.class, "ztl_"+"simple"+".ztl.tmlp");
				}
				
				if(templateAps == null) {
					templateAps = Helpers.resource2String(ParamSimpleSpec.class, "aps_"+"simple"+".js.tmlp");
				}

				 String nameCut = this.parentProperty.getNameCut();
				 nameCut = Helpers.makeFirstUpper(nameCut);
				 template = template.replace("%PROPERTY_CAPITAL_CUT%", nameCut);
				 template = template.replace("%PROPERTY_SMALL_CUT%", nameCut.substring(0,1).toLowerCase(Locale.ENGLISH) + nameCut.substring(1));
				 template = template.replace("%PROPERTY_CAPITAL%", this.parentProperty.getName());
				 template = template.replace("%PROPERTY_TYPE%", this.getType());
				 template = template.replace("%PROPERTY_TYPE_OVERLOAD%", type);
				 template = template.replace("%HELP%", this.parentProperty.getHelp());
				 template = template.replace("%NAME%", this.parentProperty.getTitle());
				 template = template.replace("%COMPONENT_NAME%", this.parentProperty.getComponent().toUpperCase(Locale.ENGLISH));
				 
				 String refProp = this.properties.get("refProperty");
				 String refInitValue = this.properties.get("refValue");
				 String refDesc = this.properties.get("refDesc");
				 
				 if(refProp != null) {
					 template = template.replace("%PROPERTY_CAPITAL_REF%", refProp);
					 template = template.replace("%PROPERTY_REF_INIT%", refInitValue);
					 
					 template = template.replace("%PROPERTY_REF_DESC%", refDesc);
				 }
				 
				 // addition for choice
				 if(type.equals("choice")) {
					 ArrayList<Value> values = this.parentProperty.getValues();
					 
					 for (Value value : values) {
						 templateAps = templateAps.replace("%COMBO_ADD_ITEMS%", "that[\"fun_%PROPERTY_NAME%\"]._input.addItem(new sap.ui.core.ListItem({key:\""+value.getName() + "\", text:\""+value.getName()+"\"}));\r\n\t\t%COMBO_ADD_ITEMS%");
					}
					templateAps = templateAps.replace("%COMBO_ADD_ITEMS%", "");
				 }

				 templateAps = templateAps.replace("%COMPONENT_NAME%", this.parentProperty.getComponent().toUpperCase(Locale.ENGLISH));
				 templateAps = templateAps.replace("%PROPERTY_NAME%", this.parentProperty.getName());
				 templateAps = templateAps.replace("%PROPERTY_DESCRIPTION%", this.parentProperty.getTitle());
		}
		
		ZtlAndAps faa = new ZtlAndAps();
		
		String mode = properties.get("mode");
		
		if(mode == null) {
			faa.setFunctions(template);
			faa.setAps(templateAps);
		} else {
			if(mode.contains("ztl")) {
				faa.setFunctions(template);
			}
			if(mode.contains("aps")) {
				faa.setAps(templateAps);
			}
		}
		return faa;
	}

	public void setParent(Property parentProperty) {
		this.parentProperty = parentProperty;
	}

}
