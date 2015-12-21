package org.scn.community.spec;

import java.io.File;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.scn.community.defgenerator.ZtlAndAps;
import org.scn.community.htmlgenerator.Component;
import org.scn.community.htmlgenerator.Property;
import org.scn.community.spec.aps.SpecificationApsTemplate;
import org.scn.community.spec.js.SpecificationJsTemplate;
import org.scn.community.spec.ui5.Ui5JsSpec;
import org.scn.community.spec.xml.SpecificationXmlTemplate;
import org.scn.community.spec.ztl.SpecificationZtlTemplate;
import org.scn.community.ui5.UI5Control;
import org.scn.community.ui5.UI5Type;
import org.scn.community.utils.Helpers;

import com.sun.xml.internal.messaging.saaj.soap.ver1_1.HeaderElement1_1Impl;

public class SpecificationReader {

	private static final String CONS_LINK = "\"+scn_pkg+\"";
	// private static final String CONS_LINK = "org.scn.community.";

	private String pathToGenSpec;

	private JSONObject jsonSpecification;
	private JSONObject jsonIncludeSpecification;
	private JSONObject jsonComponent;
	private JSONObject jsonAbout;
	private String XmlTmpl;
	private String JsLoaderTmpl;
	private String JsTmpl;
	private String ZtlTmpl;
	private String UI5XmlTmpl;
	
	private HashMap<String, String> templates = new HashMap<String, String>();
	private HashMap<String, String> replacedTemplates = new HashMap<String, String>();
	private String componentName;
	private String rootPath;
	private String JsSpecTmpl;
	private ArrayList<String> componentRequries = new ArrayList<String>();
	private ArrayList<String> componentRequries2 = new ArrayList<String>();
	private ArrayList<String> componentStdIncludes = new ArrayList<String>();
	private ArrayList<String> componentCssIncludes = new ArrayList<String>();
	private String includeSpec;
	private boolean hasUi5Spec;
	private String repeaterSpec;

	public SpecificationReader(String pathToGenSpec, Component component) {
		this.pathToGenSpec = pathToGenSpec;
		
		this.rootPath = pathToGenSpec.substring(0, pathToGenSpec.indexOf(File.separator+"spec"));
		this.componentName = this.rootPath.substring(this.rootPath.lastIndexOf(File.separator)+1);
	}

	public void read() {
		String spec = Helpers.file2String(pathToGenSpec);
		try {
			jsonSpecification = new JSONObject(spec);
		} catch (JSONException e) {
			throw new RuntimeException(e);
		}
		String pathToGenSpecCopy = pathToGenSpec.replace("specification.json", "component.json");
		spec = Helpers.file2String(pathToGenSpecCopy);
		try {
			jsonComponent = new JSONObject(spec);
		} catch (JSONException e) {
			throw new RuntimeException(e);
		}
		pathToGenSpecCopy = pathToGenSpecCopy.replace("component.json", "about.json");
		spec = Helpers.file2String(pathToGenSpecCopy);
		try {
			jsonAbout = new JSONObject(spec);
		} catch (JSONException e) {
			throw new RuntimeException(e);
		}
	}
	
	public void generate() {
		readSpecs();

		for (Property property : this.specProperties) {
			if(property.hasExtendSpec()) {
				ZtlAndAps generatedZtlAndAps = property.generateZtlAndAps();
				
				ZtlTmpl = ZtlTmpl.replace("%FUNCTION_ENTRY%", generatedZtlAndAps.getFunctions() + "\r\n\r\n%FUNCTION_ENTRY%");
				
				String pathToGenZtl = pathToGenSpec.replace("specification.json", "contribution.ztl");
				pathToGenZtl = pathToGenZtl.replace(File.separator + "def" + File.separator, File.separator + "spec" + File.separator);
				File fileGenZtl = new File(pathToGenZtl);
				
				if(fileGenZtl.exists()) {
					String customZtl = Helpers.file2String(fileGenZtl);
					ZtlTmpl = ZtlTmpl.replace("%CUSTOM_ENTRY%", customZtl);
				}
				
				processPropertyExtension(property, generatedZtlAndAps);
			}
		}
		
		for (Property property : this.specExtendedProperties) {
			if(property.hasExtendSpec()) {
				ZtlAndAps generatedZtlAndAps = property.generateZtlAndAps();
				
				processPropertyExtension(property, generatedZtlAndAps);
			}
		}
		
		if(hasUi5Spec) {
			for (Property property : this.specExtendedProperties) {
				if(property.getName().equals(repeaterSpec)){
					Ui5JsContent jsContent = property.getExtendedFullSpec().getJsContent();
					JsTmpl = jsContent.replaceRepeater(JsTmpl);
				}
			}
			for (String templateName : Ui5JsContent.templatesStatic.keySet()) {
				JsTmpl = JsTmpl.replace("%"+templateName+"%", "");	
			}
		}

		SpecHelper helper = new SpecHelper(this.componentName, new File(pathToGenSpec));
		
		Property widthProp = helper.getProperty(this.compProperties, "width");
		HashMap<String, String> widthProperties = widthProp.getExtendedFullSpec().getProperties();
		String widthPropValue = this.getAdvancedProperty(widthProperties, "width");
		XmlTmpl = XmlTmpl.replace("%XML_DEAFULT_WIDTH%", widthPropValue);
		
		Property heightProp = helper.getProperty(this.compProperties, "height");
		HashMap<String, String> heightProperties = heightProp.getExtendedFullSpec().getProperties();
		String heightPropValue = this.getAdvancedProperty(heightProperties, "height");
		XmlTmpl = XmlTmpl.replace("%XML_DEAFULT_HEIGHT%", heightPropValue);
		
		XmlTmpl = XmlTmpl.replace("%XML_DEAFULT_RIGHT%", widthPropValue.equals("auto")?"0":"auto");
		XmlTmpl = XmlTmpl.replace("%XML_DEAFULT_BOTTOM%", heightPropValue.equals("auto")?"0":"auto");
		
		Property requrieSpec = helper.getProperty(this.compProperties, "require");

		writeBack();
	}

	private void processPropertyExtension(Property property, ZtlAndAps generatedZtlAndAps) {
		SpecHelper helper = new SpecHelper(this.componentName, new File(pathToGenSpec));
		
		if(generatedZtlAndAps.getXml() != null && generatedZtlAndAps.getXml().length() > 0) {
			if(property.getExtendedFullSpec().getTemplateName().startsWith("ds-")) {
				if(helper.getProperty(compProperties, "databound").getExtendedFullSpec().getPropertyValue("databound").equals("true")) {
					XmlTmpl = XmlTmpl.replace("%XML_PROPERTY_TEMPLATE%", generatedZtlAndAps.getXml() + "\r\n%XML_PROPERTY_TEMPLATE%");
					XmlTmpl = XmlTmpl.replace("%XML_DEAFULT_TEMPLATE%", property.getExtendedFullSpec().getValueXml() + "\r\n%XML_DEAFULT_TEMPLATE%");
				} else {
					if(!property.getExtendedFullSpec().getParameter("opts").getPropertyValue("type").equals("data")) {
						XmlTmpl = XmlTmpl.replace("%XML_PROPERTY_TEMPLATE%", generatedZtlAndAps.getXml() + "\r\n%XML_PROPERTY_TEMPLATE%");
						XmlTmpl = XmlTmpl.replace("%XML_DEAFULT_TEMPLATE%", property.getExtendedFullSpec().getValueXml() + "\r\n%XML_DEAFULT_TEMPLATE%");
					}
				}
			} else {
				XmlTmpl = XmlTmpl.replace("%XML_PROPERTY_TEMPLATE%", generatedZtlAndAps.getXml() + "\r\n%XML_PROPERTY_TEMPLATE%");
				XmlTmpl = XmlTmpl.replace("%XML_DEAFULT_TEMPLATE%", property.getExtendedFullSpec().getValueXml() + "\r\n%XML_DEAFULT_TEMPLATE%");
			}

			if(hasUi5Spec) {
				if(property.hasExtendSpec() && !property.getExtendedFullSpec().getTemplateName().startsWith("ds-")) {
					Ui5JsContent jsContent = property.getExtendedFullSpec().getJsContent();
					JsTmpl = jsContent.replaceTemplate(JsTmpl);
				}
			}
		}
	}
	
	private void readSpecs() {
		SpecHelper helper = new SpecHelper(this.componentName, new File(pathToGenSpec));
		
		helper.readSpecification(this.specProperties, this.jsonSpecification);
		helper.readSpecification(this.compProperties, this.jsonComponent);
		
		for (Property property : compProperties) {
			String key = property.getName();
			ParamFullSpec extendedFullSpec = property.getExtendedFullSpec();

			HashMap<String, String> modifiedProperties = new HashMap<String, String>();
			HashMap<String, String> properties = extendedFullSpec.getProperties();

			if(key.equals("require")) {
				// special case, an array
				
				componentRequries = new ArrayList<String>();
				ParamFullSpec extendedFullSpecArray = property.getExtendedFullSpec();
				
				ArrayList<ParamFullSpec> parameters = extendedFullSpecArray.getParameters();
				
				for (ParamFullSpec paramFullSpec : parameters) {
					String space = paramFullSpec.getProperties().get("space");
					String id = paramFullSpec.getProperties().get("id");
					String ind = paramFullSpec.getProperties().get("ind");
					
					String idOld = id;
					
					if(id.startsWith("common_")) {continue;}
					if(id.startsWith("jshashtable")) {continue;}
					if(id.startsWith("numberformatter")) {continue;}
					
					if(id.startsWith("sap_m_loader")) {id = "../../../"+CONS_LINK+"basics/os/sapui5/" + id;}
					if(id.startsWith("sap_suite_loader")) {id = "../../../"+CONS_LINK+"basics/os/sapui5/" + id;}
					if(id.startsWith("x2js")) {id = "../../../"+CONS_LINK+"basics/os/x2js/xml2json";}
					if(id.equals("mm")) {id = "../../../"+CONS_LINK+"basics/os/mm/mm";}
					if(id.equals("mmfollower")) {id = "../../../"+CONS_LINK+"basics/os/mm/mm-follower";}
					if(id.equals("noty")) {id = "../../../"+CONS_LINK+"basics/os/noty/packaged/noty";}
					if(id.equals("qrcode")) {id = "../../../"+CONS_LINK+"basics/os/qrcode/qrcode";}
					if(id.equals("chartjs")) {id = "../../../"+CONS_LINK+"basics/os/chartjs/Chart";}
					if(id.equals("scheme")) {id = "../../../"+CONS_LINK+"basics/os/color/scheme";}
					if(id.equals("dateformatter")) {id = "../../../"+CONS_LINK+"basics/os/date/DateFormat";}
					if(id.equals("validate")) {id = "../../../"+CONS_LINK+"basics/os/validate/validate";}
					if(id.equals("ndd")) {id = "../../../"+CONS_LINK+"basics/os/ndd/jq-ndd";}

					if(!idOld.equals(id)) {
						if(ind == null || ind.equals("1")) {
							componentRequries.add("\""+id+"\"");
						} else {
							componentRequries2.add("\""+id+"\"");
						}
					} else {
						if(ind == null || ind.equals("1")) {
							componentRequries.add("\"../../../"+CONS_LINK+""+id+"\"");
						} else {
							componentRequries2.add("\"../../../"+CONS_LINK+""+id+"\"");
						}
					}
				}
			} else if(key.equals("stdIncludes")) {
				// special case, an array
				
				componentStdIncludes = new ArrayList<String>();
				ParamFullSpec extendedFullSpecArray = property.getExtendedFullSpec();
				
				ArrayList<ParamFullSpec> parameters = extendedFullSpecArray.getParameters();
				
				for (ParamFullSpec paramFullSpec : parameters) {
					String name = paramFullSpec.getProperties().get("name");
					
					componentStdIncludes.add("<stdInclude kind=\""+name+"\"/>");
				}
			} else if(key.equals("cssIncludes")) {
				// special case, an array
				
				componentCssIncludes = new ArrayList<String>();
				ParamFullSpec extendedFullSpecArray = property.getExtendedFullSpec();
				
				ArrayList<ParamFullSpec> parameters = extendedFullSpecArray.getParameters();
				
				for (ParamFullSpec paramFullSpec : parameters) {
					String name = paramFullSpec.getProperties().get("name");
					
					componentCssIncludes.add("<cssInclude>"+name+"</cssInclude>");
				}
			} else if(key.startsWith("extends")) {
				String newFile = pathToGenSpec.substring(0, pathToGenSpec.indexOf("org.scn.community."));
				String specName = property.getExtendedFullSpec().getPropertyValue(key);
				
				String ui5package = "sap/suite/ui/commons";
				if(helper.hasProperty(this.compProperties, "ui5package")) {
					ui5package = helper.getProperty(this.compProperties, "ui5package").getExtendedFullSpec().getPropertyValue("ui5package");
					ui5package = ui5package.replace(".", "/");
				}
				
				newFile = newFile + "org.scn.community.shared\\ui5spec\\control\\" + specName + ".spec.json";
				String includeSpecN = Helpers.file2String(newFile);
				if(includeSpec != null) {
					includeSpec = includeSpec.substring(0, includeSpec.length() - 1);
					if(includeSpec.contains("}")) {
						includeSpec = includeSpec + ",";
					}
							
					includeSpec = includeSpec + "\r\n" + includeSpecN.substring(1);
				} else {
					includeSpec = includeSpecN;
				}
				
				if(includeSpecN == null) {
					String url = "https://sapui5.hana.ondemand.com/sdk/resources/"+ui5package+"/" + specName.replace(".ds",  "") + ".control";
					String onlineSpec = helper.sendGet(url);
					
					if(onlineSpec == null || onlineSpec.length() == 0) {
						throw new RuntimeException("UI5 Type/Control " + specName + " is missing spec. Url " + url + " does not have spec.");	
					}

					String replaceDXmlFile = newFile.replace(".ds", "").replace(".spec.json", ".control").replace("control\\", "xml\\");
					Helpers.string2File(replaceDXmlFile, onlineSpec);
					UI5Control ui5Control = new UI5Control(new File(replaceDXmlFile));
					ui5Control.generateSpec();
					ui5Control.updateSpecSingle();
					
					includeSpecN = Helpers.file2String(newFile);
					if(includeSpec != null) {
						includeSpec = includeSpec.substring(0, includeSpec.length() - 1);
						if(includeSpec.contains("}")) {
							includeSpec = includeSpec + ",";
						}
								
						includeSpec = includeSpec + "\r\n" + includeSpecN.substring(1);
					} else {
						includeSpec = includeSpecN;
					}
				}

				try {
					jsonIncludeSpecification = new JSONObject(includeSpecN);
				} catch (JSONException e) {
					throw new RuntimeException(e);
				}
				helper.readSpecification(this.specExtendedProperties, this.jsonIncludeSpecification);
				
				try {
					jsonIncludeSpecification = new JSONObject(includeSpec);
				} catch (JSONException e) {
					throw new RuntimeException(e);
				}
			} else {
				// add special properties
				for (String extendedPropertyKey : properties.keySet()) {
					String value = properties.get(extendedPropertyKey);
					
					modifiedProperties.put(extendedPropertyKey + "(lower)", value.toLowerCase());
				}
				
				for (String extendedPropertyKey : modifiedProperties.keySet()) {
					String value = modifiedProperties.get(extendedPropertyKey);
					
					properties.put(extendedPropertyKey, value);
				}
			}			
		}
		
		helper.readSpecification(this.aboutProperties, this.jsonAbout);
		
		Property compType = helper.getProperty(this.compProperties, "handlerType");
		Property databound = helper.getProperty(this.compProperties, "databound");

		HashMap<String, String> properties = compType.getExtendedFullSpec().getProperties();
		String compTypeValue = this.getAdvancedProperty(properties, "handlerType");
		
		HashMap<String, String> propertiesDb = databound.getExtendedFullSpec().getProperties();
		String databoundTamplate = this.getAdvancedProperty(propertiesDb, "databound").equals("true") ? ".databound":"";
		
		XmlTmpl = Helpers.resource2String(SpecificationXmlTemplate.class, "xml_root.template");

		JsLoaderTmpl = Helpers.resource2String(SpecificationJsTemplate.class, "js_root.loader."+compTypeValue+".js.template");
		
		hasUi5Spec = false;
		if(helper.hasProperty(this.compProperties, "extension")){
			Property extendsUi = null;
			extendsUi = helper.getProperty(this.compProperties, "extension");
			HashMap<String, String> propertiesEx = extendsUi.getExtendedFullSpec().getProperties();
			String advancedPropertyExtansion = this.getAdvancedProperty(propertiesEx, "extension");
			hasUi5Spec = advancedPropertyExtansion != null && advancedPropertyExtansion.contains("ui5");
		}
		if(hasUi5Spec) {
			JsTmpl = Helpers.resource2String(Ui5JsSpec.class, "root.js.tmpl");	
			
			UI5XmlTmpl = Helpers.resource2String(Ui5JsSpec.class, "comp.view.xml");
		} else {
			JsTmpl = Helpers.resource2String(SpecificationJsTemplate.class, "js_root.component."+compTypeValue+databoundTamplate+".js.template");	
		}
		JsSpecTmpl = Helpers.resource2String(SpecificationJsTemplate.class, "js_root.spec."+compTypeValue+".js.template");
		
		repeaterSpec = "";
		if(helper.hasProperty(this.compProperties, "repeaterProperty")) {
			Property repeaterProp = null;
			repeaterProp = helper.getProperty(this.compProperties, "repeaterProperty");
			HashMap<String, String> propertiesEx = repeaterProp.getExtendedFullSpec().getProperties();
			String advancedPropertyExtansion = this.getAdvancedProperty(propertiesEx, "repeaterProperty");
			repeaterSpec = advancedPropertyExtansion;
		}
		
		if(JsLoaderTmpl == null || JsTmpl == null || JsSpecTmpl == null) {
			throw new RuntimeException("'" + compTypeValue + "' is not a valid component type (div | sapui5)");
		}
		
		ZtlTmpl = Helpers.resource2String(SpecificationZtlTemplate.class, "ztl_root.ztl.template");
		
		XmlTmpl = XmlTmpl.replace("%PROPERTY_PAGE_LINK%", "aps/PropertyPage.html");
		
		if(jsonIncludeSpecification == null) {
			jsonIncludeSpecification = new JSONObject();
		}
	}

	private String getAdvancedProperty(HashMap<String, String> properties,
			String requestedKey) {
		for (String key : properties.keySet()) {
			if(key.equals(requestedKey)) {
				return properties.get(key);
			}
		}
		
		return "";
	}

	
	private final ArrayList<Property> specProperties = new ArrayList<Property>();
	private final ArrayList<Property> specExtendedProperties = new ArrayList<Property>();
	private final ArrayList<Property> compProperties = new ArrayList<Property>();
	private final ArrayList<Property> aboutProperties = new ArrayList<Property>();
	
	
	
	@SuppressWarnings("unused")
	private void writeBack() {
		templates.put("def"+File.separator+"contribution.xml", XmlTmpl);
		templates.put("%COMPONENT_NAME%Loader.js", JsLoaderTmpl);
		templates.put("%COMPONENT_NAME%Spec.js", JsSpecTmpl);
		
		templates.put("%COMPONENT_NAME%.js", JsTmpl);
		if(UI5XmlTmpl!=null) {
			templates.put("%COMPONENT_NAME%.view.xml", UI5XmlTmpl);			
		}

		templates.put("def"+File.separator+"contribution.ztl", ZtlTmpl);
		
		SpecHelper helper = new SpecHelper(this.componentName, new File(pathToGenSpec));
		Property generatedJs = null;
		if(helper.hasProperty(this.compProperties, "generatedJsFile")) {
			generatedJs = helper.getProperty(this.compProperties, "generatedJsFile");
		}

		for (String templatePath : this.templates.keySet()) {
			String content = templates.get(templatePath);
			templatePath = templatePath.replace("%COMPONENT_NAME%", this.componentName);
			
			// here we will generically clean up the replacement
			content = content.replace("%FUNCTION_ENTRY%", "");
			content = content.replace("%CUSTOM_ENTRY%", "");
			content = content.replace("%COMPONENT_REQUIRE_SPEC%", this.serializeRequires());
			content = content.replace("%COMPONENT_REQUIRE_SPEC2%", this.serializeRequires2());
			content = content.replace("%COMPONENT_STD_INCLUDES_SPEC%", this.serializeStdIncludes());
			content = content.replace("%COMPONENT_CSS_INCLUDES_SPEC%", this.serializeCssIncludes());
			
			content = content.replace("%XML_PROPERTY_TEMPLATE%", "");
			content = content.replace("%XML_EVENT_TEMPLATE%", "");
			content = content.replace("%XML_DEAFULT_TEMPLATE%", "");
			
			try {
				content = content.replace("%FULL_SPEC_DEFINITION%", jsonSpecification.toString(2) + ";");
				content = content.replace("%FULL_SPEC_INCLUDE_DEFINITION%", jsonIncludeSpecification.toString(2) + ";");
				content = content.replace("%FULL_COMP_SPEC_DEFINITION%", jsonComponent.toString(2) + ";");
				content = content.replace("%FULL_ABOUT_SPEC_DEFINITION%", jsonAbout.toString(2) + ";");

				content = content.replace("%FULL_SPEC_DEFINITION_JSON%", jsonSpecification.toString(2));
				content = content.replace("%FULL_SPEC_INCLUDE_DEFINITION_JSON%", jsonIncludeSpecification.toString(2));
				content = content.replace("%FULL_COMP_SPEC_DEFINITION_JSON%", jsonComponent.toString(2));
				content = content.replace("%FULL_ABOUT_SPEC_DEFINITION_JSON%", jsonAbout.toString(2));
			} catch (JSONException e) {
				throw new RuntimeException(e);
			}
			
			
			for (Property property : compProperties) {
				String key = property.getName();
				ParamFullSpec extendedFullSpec = property.getExtendedFullSpec();
				
				HashMap<String, String> properties = extendedFullSpec.getProperties();
				for (String extendedPropertyKey : properties.keySet()) {
					String value = properties.get(extendedPropertyKey);
					
					if(value == null) {
						value = "";
					}

					content = content.replace("%COMP-"+extendedPropertyKey+"%", value);
				}
			}
			
			if(content.contains("%COMP-modes%")) {
				content = content.replace("%COMP-modes%", "commons");
			}
		
			replacedTemplates.put(templatePath, content);
			
			// last check if we have not missed some
			if(content.contains("%")) {
				// throw new RuntimeException(content.substring(content.indexOf("%"), 10));
			}
		}

		for (String templatePath : this.replacedTemplates.keySet()) {
			String content = replacedTemplates.get(templatePath);
			
			content = content.replace("%LOADER%", replacedTemplates.get(this.componentName+"Loader.js"));
			
			String iFileName = this.rootPath + File.separator + templatePath;
			
			if(templatePath.endsWith(this.componentName + "Loader.js")) {
				continue;
			}

			if(templatePath.endsWith(this.componentName + ".js")) {
				if(!new File(iFileName).exists() || (generatedJs != null && generatedJs.getExtendedFullSpec().getPropertyValue("generatedJsFile").equals("true"))) {
					Helpers.string2File(iFileName, content);
				} else {
					String contentJs = Helpers.file2String(iFileName);

					int indexDefineStart = contentJs.indexOf("//%DEFINE-START%");
					if(indexDefineStart == -1) {
						indexDefineStart = contentJs.indexOf("var scn_pkg=\"org.scn.community.\"");
					}
					int indexDefineEnd = contentJs.lastIndexOf("//%DEFINE-END%");
					
					if(indexDefineStart > -1) {
						String defineContent = "//%DEFINE-START%\r\n";
						defineContent += "var scn_pkg=\"org.scn.community.\";if(sap.firefly!=undefined){scn_pkg=scn_pkg.replace(\".\",\"_\");}";
						defineContent += "\r\ndefine([";
						
						defineContent += "\r\n\t\"sap/designstudio/sdk/component\",";
						defineContent += "\r\n\t\"./"+this.componentName+"Spec\",";
						defineContent += "\r\n\t\"../../../\"+scn_pkg+\"shared/modules/component.core\",";
						
						Property packageProp = helper.getProperty(this.compProperties, "package");
						HashMap<String, String> packageProperties = packageProp.getExtendedFullSpec().getProperties();
						String packagePropValue = this.getAdvancedProperty(packageProperties, "package");
						
						Property unifiedProp = helper.getProperty(this.compProperties, "extension");
						boolean hasExtension = unifiedProp != null;
						
						if(hasExtension) {
							HashMap<String, String> unifiedProperties = unifiedProp.getExtendedFullSpec().getProperties();
							String unifiedPropValue = this.getAdvancedProperty(unifiedProperties, "extension");
							if(unifiedPropValue.startsWith("ui5.")) {
								defineContent += "\r\n\t\"../../../\"+scn_pkg+\"shared/modules/component.basics\",";
								defineContent += "\r\n\t\"../../../\"+scn_pkg+\"shared/modules/component.databound\",";
								defineContent += "\r\n\t\"../../../\"+scn_pkg+\"shared/modules/component.unified\"";
							} else {
								if(!packagePropValue.equals("basics") && !packagePropValue.equals("utils")) {
									defineContent += "\r\n\t\"../../../\"+scn_pkg+\"shared/modules/component.basics\",";
									defineContent += "\r\n\t\"../../../\"+scn_pkg+\"shared/modules/component."+packagePropValue+"\"";	
								} else {
									defineContent += "\r\n\t\"../../../\"+scn_pkg+\"shared/modules/component.basics\"";
								}
							}
						} else {
							if(!packagePropValue.equals("basics") && !packagePropValue.equals("utils")) {
								defineContent += "\r\n\t\"../../../\"+scn_pkg+\"shared/modules/component.basics\",";
								defineContent += "\r\n\t\"../../../\"+scn_pkg+\"shared/modules/component."+packagePropValue+"\"";
							} else {
								defineContent += "\r\n\t\"../../../\"+scn_pkg+\"shared/modules/component.basics\"";
							}
						}

						String requ = this.serializeRequires();
						if(!requ.isEmpty()) {
							defineContent += ",";	
						}
						
						defineContent += "\r\n\t" + requ;
						
						defineContent += "\r\n\t],\r\n\tfunction(";
						defineContent += "\r\n\t\tComponent,";
						defineContent += "\r\n\t\tspec,";
						defineContent += "\r\n\t\tcore,";
						defineContent += "\r\n\t\tbasics";
						defineContent += "\r\n\t) {\r\n";

						if(indexDefineStart > -1) {
							contentJs = contentJs.substring(0, indexDefineStart) + defineContent + contentJs.substring(indexDefineEnd);
							
							indexDefineStart = contentJs.indexOf("//%INIT-START%");
							if(indexDefineStart == -1) {
								indexDefineStart = contentJs.indexOf("myComponentData.instance = "+this.componentName+";");
								indexDefineStart = contentJs.lastIndexOf("};") + 4;
							}
							indexDefineEnd = contentJs.lastIndexOf("});");
							
							defineContent = "//%INIT-START%\r\n";
							defineContent += "myComponentData.instance = "+this.componentName+";\r\n";
							defineContent += "" + replacedTemplates.get(this.componentName+"Loader.js");
							defineContent += "\r\n";
							
							contentJs = contentJs.substring(0, indexDefineStart) + defineContent + contentJs.substring(indexDefineEnd);
							
							contentJs = contentJs.replace("myComponentData = org_scn_community_require.knownComponents."+packagePropValue+"." + this.componentName, "myComponentData = spec");							
						}

						// contentJs = contentJs.replace("", "");
						Helpers.string2File(iFileName, contentJs);
					}

				}
			} else {
				Helpers.string2File(iFileName, content);
			}
		}
	}

	private String serializeRequires() {
		String requires = "";
		
		for (String require : componentRequries) {
			requires = requires + require + ",\r\n\t";
		}
		
		for (String require : componentRequries2) {
			requires = requires + require + ",\r\n\t";
		}

		if(!requires.isEmpty()) {
			requires = requires.substring(0, requires.lastIndexOf(",\r\n\t"));	
		}

		return requires;
	}
	
	private CharSequence serializeRequires2() {
		String requires = "";
		
		for (String require : componentRequries2) {
			requires = requires + require + ",\r\n\t\t";
		}
		return requires;
	}

	private CharSequence serializeStdIncludes() {
		String requires = "";
		
		for (String require : componentStdIncludes) {
			requires = requires + require + "\r\n\t";
		}
		return requires;
	}
	
	private CharSequence serializeCssIncludes() {
		String requires = "";
		
		for (String require : componentCssIncludes) {
			requires = requires + require + "\r\n\t";
		}
		return requires;
	}
}
