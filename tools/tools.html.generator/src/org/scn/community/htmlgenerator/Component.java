package org.scn.community.htmlgenerator;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FilenameFilter;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Properties;
import java.util.Vector;

import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamReader;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.scn.community.defgenerator.ParamSimpleSpec;
import org.scn.community.defgenerator.ZtlAndAps;
import org.scn.community.spec.SpecificationReader;
import org.scn.community.spec.orgin.OrginSpec;
import org.scn.community.utils.Helpers;

public class Component {

	private static final String PROPERTIES_CREATED_AT_DATE = "Properties created at date";

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

	private String filterEnd;

	private String filterStart;

	private String icon;

	private String path;
	
	private HashMap<String, String> dafaultValues = new HashMap<String, String>();

	private boolean databound; 

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
				currentProperty = new Property(reader, this.name, this.contributionXml);
				this.properties.add(currentProperty);
			} else if (localName.equals("possibleValue")) {
				currentProperty.addValue(reader);
			} else if (localName.equals("defaultValue")) {
				String attributeValue = reader.getAttributeValue("", "property");
				Property property = getProperty(attributeValue);

				if (property != null) {
					property.setDefaultValue(reader);
				} else {
					try {
						dafaultValues.put(attributeValue, reader.getElementText());
					} catch (XMLStreamException e) {
						throw new RuntimeException(e);
					}
				}
			}

		} while (hasNextTag(reader));

		// Sorting for better HTML
		Collections.sort(this.properties, new Comparator<Property>() {
			@Override
			public int compare(Property o1, Property o2) {
				 return  o1.getName().compareTo(o2.getName());
			}
		});
		
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
		
		// Sorting for better HTML
		Collections.sort(this.functions, new Comparator<ZtlFunction>() {
			@Override
			public int compare(ZtlFunction o1, ZtlFunction o2) {
				 return  o1.getName().compareTo(o2.getName());
			}
		});

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
					templateAps = templateAps.replace("%INIT_PROPERTY%", "that[\"fun_"+property.getName()+"\"].init();\r\n\t\t%INIT_PROPERTY%");	
					templateAps = templateAps.replace("%UPDATE_PROPERTY%", "that[\"fun_"+property.getName()+"\"].update();\r\n\t\t%UPDATE_PROPERTY%");
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
		String databoundV = reader.getAttributeValue("", "databound");
		if(databoundV== null) {
			this.databound = false;
		} else { this.databound = true; };
		
		this.icon = reader.getAttributeValue("", "icon");
		
		// special code for filter in ChangeLog components
		this.filterEnd = reader.getAttributeValue("", "filterEnd");
		this.filterStart = reader.getAttributeValue("", "filterStart");
		this.path = reader.getAttributeValue("", "path");
		
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

	public String[] toSpec20() {
		String templateComp = Helpers.resource2String(OrginSpec.class, "spec.component.json");
		String templateAbout = Helpers.resource2String(OrginSpec.class, "spec.about.json");
		String templateSpec = Helpers.resource2String(OrginSpec.class, "spec.specification.json");
		String templateZtl = Helpers.resource2String(OrginSpec.class, "spec.contribution.ztl");

		templateComp = templateComp.replace("%COMPONENT_NAME%", this.name);
		templateComp = templateComp.replace("%COMPONENT_TITLE%", this.title);
		templateComp = templateComp.replace("%COMPONENT_GROUP%", this.group);
		templateComp = templateComp.replace("%COMPONENT_TOOLTIP%", this.tooltip != "" ? this.tooltip : this.title);
		String shortPackage = this.packageName.replace("org.scn.community.", "").replace(".","");
		templateComp = templateComp.replace("%COMPONENT_PACKAGE%", shortPackage);
		templateComp = templateComp.replace("%COMPONENT_TYPE%", this.handlerType);
		
		templateComp = templateComp.replace("%COMPONENT_DATABOUND%", ""+this.databound);
		
		templateComp = templateComp.replace("%COMPONENT_WIDTH%", this.dafaultValues.get("WIDTH"));
		templateComp = templateComp.replace("%COMPONENT_HEIGHT%", this.dafaultValues.get("HEIGHT"));
		
		templateAbout = templateAbout.replace("%COMPONENT_NAME%", this.name);
		templateAbout = templateAbout.replace("%COMPONENT_TITLE%", this.title);
		templateAbout = templateAbout.replace("%COMPONENT_TOOLTIP%", this.tooltip != "" ? this.tooltip : this.title);

		for (Property property : this.properties) {
			String propSpec = property.toSpec20();
			if (property.visible.equals("false")) {
				templateSpec = templateSpec.replace("%HIDDEN_PROPERTY_ENTRY%", propSpec + ",\r\n" + "%HIDDEN_PROPERTY_ENTRY%");
			} else {
				if (property.type.equals("ScriptText")) {
					templateSpec = templateSpec.replace("%EVENT_ENTRY%", propSpec + ",\r\n" + "%EVENT_ENTRY%");
				} else {
					templateSpec = templateSpec.replace("%VISIBLE_PROPERTY_ENTRY%", propSpec + ",\r\n" + "%VISIBLE_PROPERTY_ENTRY%");
				}
			}
		}
		
		for (ZtlFunction function : this.functions) {
			String html = function.toHtml();
			String shortHtml = function.toSpec20();
			templateZtl = templateZtl.replace("%FUNCTION_ENTRY_LIST%", shortHtml + "\r\n\t" + "%FUNCTION_ENTRY_LIST%");
		}

		templateSpec = templateSpec.replace("%VISIBLE_PROPERTY_ENTRY%", "");
		templateSpec = templateSpec.replace("%HIDDEN_PROPERTY_ENTRY%", "");
		templateSpec = templateSpec.replace("%EVENT_ENTRY%", "");
		templateZtl = templateZtl.replace("%FUNCTION_ENTRY_LIST%", "");

		return new String[] {templateComp, templateSpec, templateAbout, templateZtl};
	}

	public String toHtml(String iFileName) {
		String template = Helpers.resource2String(this.getClass(), "component.html");

		template = template.replace("%COMPONENT_NAME%", this.name);
		template = template.replace("%COMPONENT_TITLE%", this.title);
		template = template.replace("%COMPONENT_GROUP%", this.group);
		String groupLower = group.replace("ScnCommunity", "");
		groupLower = groupLower.toLowerCase(Locale.ENGLISH);
		template = template.replace("%FULL_HTML_PATH_ACCESS%",  groupLower + "/" + this.name.toLowerCase(Locale.ENGLISH));
		

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
		
		String changeLog = toChangeLog(iFileName);

		iFileName = iFileName.replace(".html", File.separator+"changes"+File.separator+"changelog.json");
		iFileName = iFileName.replace("sdkinstall"+File.separator, "sdkhelp"+File.separator);
		String changeJsonContent = Helpers.file2String(iFileName);

		Calendar calendar = Calendar.getInstance();
		String  date = "" + calendar.get(Calendar.YEAR) + "-" + (calendar.get(Calendar.MONTH)+1) + "-" + calendar.get(Calendar.DAY_OF_MONTH);

		if(changeJsonContent == null) {
			// create initial statement
			changeJsonContent = "changeLog = [\r\n{"
					+ "\r\n   \"date\":\""+date+"\","
					+ "\r\n   \"title\":\"Start of Change Log\","
					+ "\r\n   \"text\":\"Change Log has been started today, all changes in the component are now in the log\","
					+ "\r\n   \"author\":\"n/a\","
					+ "\r\n   \"icon\":\"sap-icon://notes\","
					+ "\r\n   \"filterValue\":\"creation\","
					+ "\r\n   \"test-status\":\"untested\","
					+ "\r\n   \"test-comment\":\"Initial component status placement\"\r\n}\r\n]";
			Helpers.string2File(iFileName, changeJsonContent);
		}
		
		//String bad = Helpers.resource2String(this.getClass(), "bad.log");
		//changeJsonContent = changeJsonContent.replace(bad, "");
		
		if(changeLog.length() > 0) {
			// template = template.replace("<!-- CHANGE_LOG -->", "<!-- CHANGE_LOG --><br>Changes, "+date+"<br><ul>" + changeLog + "</ul>");
			
			// append
			changeJsonContent = changeJsonContent.substring(changeJsonContent.indexOf("[")+1);
			changeJsonContent = "changeLog = [\r\n" + changeLog + ", " + changeJsonContent;
			
			Helpers.string2File(iFileName, changeJsonContent);
		} else {
			//Helpers.string2File(iFileName, changeJsonContent);
		}

		if (!changeJsonContent.startsWith("/")) {
			String comments = Helpers.resource2String(this.getClass(), "changelog_comments.tmpl");
			
			changeJsonContent = comments + "\r\n" + changeJsonContent;
			Helpers.string2File(iFileName, changeJsonContent);
		}
		
		return template;
	}
	
	public Properties toProperties() {
		SortedProperties props = new SortedProperties();

		Calendar calendar = Calendar.getInstance();
		String  dateValue = "" + calendar.get(Calendar.YEAR) + "-" + (calendar.get(Calendar.MONTH)+1) + "-" + calendar.get(Calendar.DAY_OF_MONTH);
		props.put(PROPERTIES_CREATED_AT_DATE, dateValue);
		
		props.put("Component Name", this.name);
		props.put("Component Title", this.title);
		props.put("Component Group", this.group);

		for (Property property : this.properties) {
			props.put("Property " + property.name, property.type);
		}

		for (ZtlFunction function : this.functions) {
			String propertyValue = function.toPropertyValue();
			props.put("Ztl Function " + function.name, propertyValue);
		}

		boolean hasSpec = new File(contributionXml.getParentFile().getParentFile().getAbsolutePath() + File.separator + "spec").exists();
		boolean isComponentManager = this.name.equals("ComponentManager");
		
		File[] resFiles = Helpers.listFiles(contributionXml.getParentFile().getParentFile().getAbsolutePath());
		
		for (File file : resFiles) {
			String file2String = Helpers.file2String(file);
			if(!file.isDirectory()) {
				if(file.getName().endsWith("Loader.js") || file.getName().endsWith("Spec.js")) {
					continue;
				}
				props.put("Resource " + file.getParentFile().getName() + " - " +file.getName(), file2String.length() + ";" + Helpers.hashString(file2String));	
			}
		}
		
		// do not monitor def filder in case it is fully generated
		if(!hasSpec && !isComponentManager) {
			// read all files in RES
			resFiles = Helpers.listFiles(contributionXml.getParentFile().getParentFile().getAbsolutePath() + File.separator + "def");
			for (File file : resFiles) {
				String file2String = Helpers.file2String(file);
				if(!file.isDirectory()) {
					props.put("Resource " + file.getParentFile().getName() + " - " +file.getName(), file2String.length() + ";" + Helpers.hashString(file2String));	
				}
			}
		}
		
		resFiles = Helpers.listFiles(contributionXml.getParentFile().getParentFile().getAbsolutePath() + File.separator + "spec");
		for (File file : resFiles) {
			String file2String = Helpers.file2String(file);
			if(!file.isDirectory()) {
				props.put("Resource " + file.getParentFile().getName() + " - " +file.getName(), file2String.length() + ";" + Helpers.hashString(file2String));	
			}
		}
		
		// special framework check
		if(this.name.startsWith("ChangeLog_")) {
			String parentFolder = contributionXml.getParentFile().getParentFile().getParentFile().getParentFile().getParentFile().getAbsolutePath();
			
			parentFolder = parentFolder.replace(".shared", "." + this.path);
			
			ComponentFilenameFilter filter = new ComponentFilenameFilter(this.filterStart, this.filterEnd);
			
			resFiles = Helpers.listFiles(parentFolder, filter);
			for (File file : resFiles) {
				if(file.isDirectory()) {
					continue;
				}
				String file2String = Helpers.file2String(file);

				int indexOfTimestamp = file2String.indexOf("/*%TIMESTAMP-START%*/");
				int indexOfTimestampEnd = file2String.indexOf("/*%TIMESTAMP-END%*/");
				if(indexOfTimestamp > -1) {
					String file2StringTemp = file2String.substring(0, indexOfTimestamp + "/*%TIMESTAMP-START%*/".length());
					file2StringTemp = file2StringTemp + "\"" + dateValue + "\"";
					file2StringTemp = file2StringTemp + file2String.substring(indexOfTimestampEnd);
					file2String = file2StringTemp;
					
					Helpers.string2File(file.getAbsolutePath(), file2String);
				}

				
				int indexOfNoChangeLog = file2String.indexOf("/*NO DELTA CHECK START*/");
				int indexOfNoChangeLogEnd = file2String.indexOf("/*NO DELTA CHECK END*/");
				if(indexOfNoChangeLog > -1) {
					String file2StringTemp = file2String.substring(0, indexOfNoChangeLog);
					file2StringTemp = file2StringTemp+ file2String.substring(indexOfNoChangeLogEnd);
					file2String = file2StringTemp;
				}
				
				if(!file.isDirectory()) {
					props.put("Resource " + file.getParentFile().getName() + " - " +file.getName(), file2String.length() + ";" + Helpers.hashString(file2String));	
				}
			}
		}

		return props;
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

	public void serializeProperties(String iFileName) {
		iFileName = iFileName.replace(".html", File.separator+"changes"+File.separator+"state.properties");
		iFileName = iFileName.replace("sdkinstall"+File.separator, "sdkhelp"+File.separator);
		
		// write only if not existing here, required for comparison
		if(!(new File(iFileName).exists())) {
			Helpers.saveProperties(iFileName, toProperties(), true);	
		}
	}
	
	public void checkBlogs(String iFileName) {
		iFileName = iFileName.replace(".html", File.separator+"blogs.json");
		iFileName = iFileName.replace("sdkinstall"+File.separator, "sdkhelp"+File.separator);
		
		if(!(new File(iFileName).exists())) {
			String template = Helpers.resource2String(this.getClass(), "blog.json.tmpl");
			Helpers.string2File(iFileName, template);	
		}
	}
	
	public void checkExamples(String iFileName) {
		iFileName = iFileName.replace(".html", File.separator+"examples.json");
		iFileName = iFileName.replace("sdkinstall"+File.separator, "sdkhelp"+File.separator);
		
		if(!(new File(iFileName).exists())) {
			String template = Helpers.resource2String(this.getClass(), "example.json.tmpl");
			Helpers.string2File(iFileName, template);	
		}
	}
	
	public String toChangeLog(String iFileName) {
		iFileName = iFileName.replace(".html", File.separator+"changes"+File.separator+"state.properties");
		iFileName = iFileName.replace("sdkinstall"+File.separator, "sdkhelp"+File.separator);
		
		Calendar calendar = Calendar.getInstance();
		String date = "" + calendar.get(Calendar.YEAR) + "-" + (calendar.get(Calendar.MONTH)+1) + "-" + calendar.get(Calendar.DAY_OF_MONTH);
		
		
		ArrayList<String> changes = new ArrayList<String>();
		
		Properties currentProperties = toProperties();
		Properties lastProperties = Helpers.loadProperties(iFileName);
		
		// check for add, change
		Enumeration<Object> currentKeys = currentProperties.keys();
		while (currentKeys.hasMoreElements()) {
			String nextElement = (String) currentKeys.nextElement();
			
			String currentValue = (String) currentProperties.get(nextElement);
			String lastValue = (String) lastProperties.get(nextElement);
			
			if(lastValue == null) {
				changes.add("New_"+nextElement);
			} else {
				if(!currentValue.equals(lastValue) && !nextElement.equals(PROPERTIES_CREATED_AT_DATE.replace(" ", "_"))) {
					changes.add(nextElement);
				}
			}
		}
		
		// check for removal
		Enumeration<Object> lastKeys = currentProperties.keys();
		while (lastKeys.hasMoreElements()) {
			String nextElement = (String) lastKeys.nextElement();
			
			String currentValue = (String) currentProperties.get(nextElement);
			
			if(currentValue == null) {
				changes.add(nextElement);
			}
		}
		
		if(changes.size() > 0) {
			Helpers.saveProperties(iFileName, currentProperties, true);

			JSONObject changesEntry = new JSONObject();
			try {
				changesEntry.put("date", date);
				
				// properties which can be changed manually
				changesEntry.put("author", "n/a");
				changesEntry.put("icon", "sap-icon://notes");
				changesEntry.put("filterValue", "change");

				changesEntry.put("test-status", "untested");
				changesEntry.put("test-comment", "some component content has been changed, see details");
				changesEntry.put("test-icon", "sap-icon://notification");
				
				JSONArray changesList = new JSONArray();
			
				String changesSummary = "";
				for (String line : changes) {
					JSONObject fullEntry = new JSONObject();
					line = line.replace("_", " ");
					fullEntry.put("change", line);
					fullEntry.put("status", "untested");
					changesList.put(fullEntry);
					
					changesSummary = changesSummary + line + ";";
				}
				
				changesEntry.put("title", "There were " + changes.size() + " changes in the component.");
				changesEntry.put("text", "Changes: " + changesSummary);

				changesEntry.put("changes", changesList);
				return changesEntry.toString(3);
			} catch (JSONException e) {
				throw new RuntimeException("Json Issue");
			}
		}
		
		return "";
	}

	/**
	 * http://stackoverflow.com/questions/10275862/how-to-sort-properties-in-java
	 */
	class SortedProperties extends Properties {
		  public Enumeration keys() {
		     Enumeration<Object> keysEnum = super.keys();
		     Vector<String> keyList = new Vector<String>();
		     while(keysEnum.hasMoreElements()){
		       keyList.add((String)keysEnum.nextElement());
		     }
		     Collections.sort(keyList);
		     return keyList.elements();
		  }
		  
		  public Object put(Object key, Object value) {
			  String correctedKey = (String) key;
			  correctedKey = correctedKey.replace(" ", "_");
			  
			  super.put(correctedKey, value);
			  
			  return keys();
		  }
		}
	class ComponentFilenameFilter implements FilenameFilter {
		
		private String filterStart;
		private String filterEnd;

		public ComponentFilenameFilter(String filterStart, String filterEnd) {
			this.filterStart = filterStart;
			this.filterEnd = filterEnd;
		}

		@Override
		public boolean accept(File dir, String name) {
			if(filterEnd == null && filterStart == null) {
				return true;
			}
			
			if(this.filterEnd != null && name.endsWith(this.filterEnd)) {
				return true;
			}
			if(this.filterStart != null && name.startsWith(this.filterStart)) {
				return true;
			}
			return false;
		}
	}
	public String getName() {
		return this.name;
	};
	
}
