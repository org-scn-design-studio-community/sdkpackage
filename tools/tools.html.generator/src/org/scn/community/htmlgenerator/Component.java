package org.scn.community.htmlgenerator;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamReader;

import org.json.JSONException;
import org.json.JSONObject;
import org.scn.community.defgenerator.ParamSimpleSpec;
import org.scn.community.defgenerator.ZtlAndAps;
import org.scn.community.spec.SpecificationReader;
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

	private String pathToZtl;

	private String packageName;

	@SuppressWarnings("null")
	Component(File contributionXml) {
		this.contributionXml = contributionXml;
		// System.out.println("Parsing: " + contributionXml.getAbsolutePath());
		this.properties = new ArrayList<Property>();

		/* FULL SPECIFICATION */
		String pathToGenSpec = contributionXml.getAbsolutePath().replace("contribution.xml", "specification.json");
		pathToGenSpec = pathToGenSpec.replace(File.separator + "def" + File.separator, File.separator + "spec" + File.separator);
		File fileGenSpec = new File(pathToGenSpec);
		// spec is there and no lock file
		if(fileGenSpec.exists()) {
			// run full generation
			
			SpecificationReader specReader = new SpecificationReader(pathToGenSpec, this);
			specReader.read();
			specReader.generate();
		}
		/* FULL SPECIFICATION */

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

		String pathToGenJson = contributionXml.getAbsolutePath().replace(".xml", ".json");
		pathToGenJson = pathToGenJson.replace(File.separator + "def" + File.separator, File.separator + "spec" + File.separator);
		File fileGenJson = new File(pathToGenJson);
		
		String pathToGenlock = pathToGenJson.replace("contribution.json", "spec.lock");
		File fileToGenlock = new File(pathToGenlock);
		
		pathToZtl = contributionXml.getAbsolutePath().replace(".xml", ".ztl");

		// spec is there and no lock file
		if(fileGenJson.exists() && !fileToGenlock.exists()) {
			// run ZTL and APS generation
			
			String contentJson = Helpers.file2String(pathToGenJson);
			try {
				JSONObject jsonSpec = new JSONObject(contentJson);
				readSpecification(jsonSpec);
			} catch (JSONException e) {
				throw new RuntimeException(e);
			}
			
			generateZtlAndAps();
		}

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

	private void generateZtlAndAps() {
		String template = Helpers.resource2String(ParamSimpleSpec.class, "ztl_root.ztl.tmlp");
		String templateAps = Helpers.resource2String(ParamSimpleSpec.class, "aps_root.js.tmlp");
		String templateApsHtml = Helpers.resource2String(ParamSimpleSpec.class, "aps_root.html.tmlp");
		
		template = template.replace("%TECH_NAME%", this.fullName);
		template = template.replace("%TECH_DESCRIPTION%", this.title);
		
		templateAps = templateAps.replace("%TECH_NAME%", this.fullName);
		templateAps = templateAps.replace("%TECH_DESCRIPTION%", this.title);
		templateAps = templateAps.replace("%TECH_SHORT_NAME%", this.name);
		
		templateApsHtml = templateApsHtml.replace("%TECH_NAME%", this.fullName);
		templateApsHtml = templateApsHtml.replace("%TECH_DESCRIPTION%", this.title);
		templateApsHtml = templateApsHtml.replace("%TECH_SHORT_NAME%", this.name);

		if(this.packageName.endsWith(".databound")) {
			template = template.replace("%TECH_EXTENSION%", "DataComponent");
		} else {
			template = template.replace("%TECH_EXTENSION%", "Component");
		}
		
		for (Property property : this.properties) {
			if(property.hasExtendSpec()) {
				ZtlAndAps generatedZtlAndAps = property.generateZtlAndAps();
				
				template = template.replace("%FUNCTION_ENTRY%", generatedZtlAndAps.getFunctions() + "\r\n\r\n%FUNCTION_ENTRY%");
				templateAps = templateAps.replace("%APS_ENTRY%", generatedZtlAndAps.getAps() + "\r\n\r\n%APS_ENTRY%");
				
				if(generatedZtlAndAps.getAps() != null && generatedZtlAndAps.getAps().length() > 0) {
					templateAps = templateAps.replace("%INIT_PROPERTY%", "this.init"+property.getName() + "();\r\n\t\t%INIT_PROPERTY%");	
					templateAps = templateAps.replace("%UPDATE_PROPERTY%", "this.update"+property.getName() + "();\r\n\t\t%UPDATE_PROPERTY%");
				}
			}
		}
		
		templateApsHtml = templateApsHtml.replace("%PROPERTY_SEQUENCE%", "");
		
		template = template.replace("%FUNCTION_ENTRY%", "");
		templateAps = templateAps.replace("%APS_ENTRY%", "");
		templateAps = templateAps.replace("%INIT_PROPERTY%", "");
		templateAps = templateAps.replace("%UPDATE_PROPERTY%", "");
		
		String pathToGenZtl = contributionXml.getAbsolutePath().replace(".xml", ".ztl");
		pathToGenZtl = pathToGenZtl.replace(File.separator + "def" + File.separator, File.separator + "spec" + File.separator);
		File fileGenZtl = new File(pathToGenZtl);
		
		if(fileGenZtl.exists()) {
			String customZtl = Helpers.file2String(fileGenZtl);
			template = template.replace("%CUSTOM_ENTRY%", customZtl);
		}
		
		template = template.replace("%CUSTOM_ENTRY%", "");
		
		String pathToGenAps = contributionXml.getAbsolutePath().replace("contribution.xml", this.name + "PropertyPage.js");
		pathToGenAps = pathToGenAps.replace(File.separator + "def" + File.separator, File.separator + "aps" + File.separator);
				
		String pathToGenApsHtml = contributionXml.getAbsolutePath().replace("contribution.xml", this.name + "PropertyPage.html");
		pathToGenApsHtml = pathToGenApsHtml.replace(File.separator + "def" + File.separator, File.separator + "aps" + File.separator);

		Helpers.string2File(pathToGenApsHtml, templateApsHtml);
		Helpers.string2File(pathToGenAps, templateAps);
		Helpers.string2File(pathToZtl, template);
	}

	private void readSpecification(JSONObject jsonSpec) {
		
		Iterator keys = jsonSpec.keys();
		while (keys.hasNext()) {
			String key = (String) keys.next();
			
			ParamSimpleSpec parameter = new ParamSimpleSpec();
			parameter.setName(key);
			
			try {
				Object object = (Object) jsonSpec.get(key);
				
				if(object instanceof JSONObject) {
					JSONObject object1 = (JSONObject) object;
					
					Iterator keys2 = object1.keys();
					while (keys2.hasNext()) {
						String key2 = (String) keys2.next();
						
						Object object2 = (Object) object1.get(key2);
						
						if(object2 instanceof JSONObject) {
							
							ParamSimpleSpec parameter2 = new ParamSimpleSpec();
							parameter2.setName(key2);
							
							parameter.addParameter(parameter2);
							
							// parse object
							JSONObject object3 = (JSONObject) object2;
							
							Iterator keys3 = object3.keys();
							while (keys3.hasNext()) {
								String key3 = (String) keys3.next();
								
								Object object4 = (Object) object3.get(key3);
								
								if(object4 instanceof JSONObject) {
									
									ParamSimpleSpec parameter3 = new ParamSimpleSpec();
									parameter3.setName(key3);
									
									parameter2.addParameter(parameter3);
									
									JSONObject object5 = (JSONObject) object4;
									Iterator keys5 = object5.keys();
									while (keys5.hasNext()) {
										String key5 = (String) keys5.next();
										
										Object object6 = (Object) object5.get(key5);
										
										if(object6 instanceof JSONObject) {
											
											ParamSimpleSpec parameter4 = new ParamSimpleSpec();
											parameter4.setName(key5);
											
											parameter3.addParameter(parameter4);
											
											JSONObject object7 = (JSONObject) object6;
											Iterator keys7 = object7.keys();
											while (keys7.hasNext()) {
												String key7 = (String) keys7.next();
												insertParameter(parameter4, key7, object7.get(key7));
											}
										} else {
											
											insertParameter(parameter3, key5, object6);
										}
									}
								} else {
									insertParameter(parameter2, key3, object4);
								}
							}
						} else {
							insertParameter(parameter, key2, object2);
						}
					}
				} else {
					insertParameter(parameter, key, object);
				}
			} catch (JSONException e) {
				throw new RuntimeException(e);
			}
			
			Property prop = getProperty(parameter.getKey());
			parameter.setParent(prop);
			prop.extendSpec(parameter);
		}
		
	}

	private void insertParameter(ParamSimpleSpec parameterTo, String key, Object value) {
		if(key.startsWith("gen-")) {
			String realKey = key.substring(key.indexOf("-")+1);
			
			parameterTo.addProperty(realKey, (String) value);
		} else {
			ParamSimpleSpec parameterNew = new ParamSimpleSpec();
			parameterNew.setName(key);
			// parameterNew.setValue((String) value);
			
			parameterTo.addParameter(parameterNew);
		}
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

		this.packageName = this.contributionXml.getAbsolutePath().substring(srcI + 4, resI - 1);
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

	public void copyIcon(String iFileName) {
		String icon = contributionXml.getAbsolutePath().replace("def"+File.separator+"contribution.xml", this.name + ".png");
		iFileName = iFileName.replace(".html", ".png");
		File targetFile = new File(iFileName);
		if(!targetFile.exists()) {
			Helpers.copyFileBin(new File(icon), targetFile);
		}
	}

	public void createHelp(String iFileName) {
		iFileName = iFileName.replace(".html", File.separator+"read.me");
		iFileName = iFileName.replace("sdkinstall"+File.separator, "sdkhelp"+File.separator);
		Helpers.string2File(iFileName, "Place Help Content Here\r\n"
				+ "For details see blog http://scn.sap.com/community/businessobjects-design-studio/blog/2015/04/02/community-sdk--call-for-help-in-documentation");
	}
}
