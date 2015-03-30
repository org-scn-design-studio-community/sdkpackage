package org.scn.community.spec;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.scn.community.defgenerator.ZtlAndAps;
import org.scn.community.htmlgenerator.Component;
import org.scn.community.htmlgenerator.Property;
import org.scn.community.spec.js.SpecificationJsTemplate;
import org.scn.community.spec.xml.SpecificationXmlTemplate;
import org.scn.community.spec.ztl.SpecificationZtlTemplate;
import org.scn.community.utils.Helpers;

import sun.org.mozilla.javascript.internal.json.JsonParser;

public class SpecificationReader {

	private String pathToGenSpec;
	private Component component;
	private JSONObject jsonSpecification;
	private JSONObject jsonComponent;
	private JSONObject jsonAbout;
	private String XmlTmpl;
	private String JsLoaderTmpl;
	private String JsTmpl;
	private String ZtlTmpl;
	
	private HashMap<String, String> templates = new HashMap<String, String>();
	private String componentName;
	private String rootPath;

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
		pathToGenSpec = pathToGenSpec.replace("specification.json", "component.json");
		spec = Helpers.file2String(pathToGenSpec);
		try {
			jsonComponent = new JSONObject(spec);
		} catch (JSONException e) {
			throw new RuntimeException(e);
		}
		pathToGenSpec = pathToGenSpec.replace("component.json", "about.json");
		spec = Helpers.file2String(pathToGenSpec);
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
				
				if(generatedZtlAndAps.getXml() != null && generatedZtlAndAps.getXml().length() > 0) {
					XmlTmpl = XmlTmpl.replace("%XML_PROPERTY_TEMPLATE%", generatedZtlAndAps.getXml() + "\r\n%XML_PROPERTY_TEMPLATE%");	
				}
			}
		}

		writeBack();
	}
	
	private void readSpecs() {
		readSpecification(this.specProperties, this.jsonSpecification);
		readSpecification(this.compProperties, this.jsonComponent);
		for (Property property : compProperties) {
			String key = property.getName();
			ParamFullSpec extendedFullSpec = property.getExtendedFullSpec();

			HashMap<String, String> modifiedProperties = new HashMap<String, String>();
			HashMap<String, String> properties = extendedFullSpec.getProperties();

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
		readSpecification(this.aboutProperties, this.jsonAbout);
		
		Property compType = this.getProperty(this.compProperties, "handlerType");
		HashMap<String, String> properties = compType.getExtendedFullSpec().getProperties();
		String compTypeValue = this.getAdvancedProperty(properties, "handlerType");
		
		XmlTmpl = Helpers.resource2String(SpecificationXmlTemplate.class, "xml_root.tmpl");
		
		JsLoaderTmpl = Helpers.resource2String(SpecificationJsTemplate.class, "js_root.loader."+compTypeValue+".js.tmlp");
		JsTmpl = Helpers.resource2String(SpecificationJsTemplate.class, "js_root.component."+compTypeValue+".js.tmpl");
		
		if(JsLoaderTmpl == null || JsTmpl == null) {
			throw new RuntimeException("'" + compTypeValue + "' is not a valid component type (div | sapui5)");
		}
		
		ZtlTmpl = Helpers.resource2String(SpecificationZtlTemplate.class, "ztl_root.ztl.tmlp");
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

	private void readSpecification(ArrayList<Property> properties, JSONObject jsonSpec) {
		Iterator keys = jsonSpec.keys();
		while (keys.hasNext()) {
			String key = (String) keys.next();
			
			ParamFullSpec parameter = new ParamFullSpec();
			parameter.setName(key);
			
			try {
				Object object = (Object) jsonSpec.get(key);
				if(object instanceof JSONObject) {
					processJsonObjectReq(parameter, object);
				} else {
					insertParameter(parameter, key, object);
				}
			} catch (JSONException e) {
				throw new RuntimeException(e);
			}
			
			Property prop = getProperty(properties, parameter.getKey());
			parameter.setParent(prop);
			prop.extendSpec(parameter);
		}
	}

	private void processJsonObjectReq(ParamFullSpec parameter, Object object)
			throws JSONException {
		JSONObject object1 = (JSONObject) object;
		
		Iterator keys2 = object1.keys();
		while (keys2.hasNext()) {
			String key2 = (String) keys2.next();
			
			Object object2 = (Object) object1.get(key2);
			
			if(object2 instanceof JSONObject) {
				
				ParamFullSpec parameter2 = new ParamFullSpec();
				parameter2.setName(key2);
				
				parameter.addParameter(parameter2);
				
				processJsonObjectReq (parameter2, object2);
			} else if(object2 instanceof JSONArray) {
				ParamFullSpec parameter2 = new ParamFullSpec();
				parameter2.setName(key2);
				
				JSONArray object2Array = (JSONArray) object2;
				for (int i = 0; i < object2Array.length(); i++) {
					JSONObject element = (JSONObject) object2Array.get(i);
					
					ParamFullSpec parameterArray = new ParamFullSpec();
					parameterArray.setName(""+i);
					
					parameterArray.addEntry(i, element);
					parameter2.addParameter(parameterArray);
				}
				
				parameter.addParameter(parameter2);
			} else {
				insertParameter(parameter, key2, object2);
			}
		}
	}
	
	private void insertParameter(ParamFullSpec parameterTo, String key, Object value) {
		if(!(value instanceof JSONObject) && !(value instanceof JSONArray)) {
			String realKey = key.substring(key.indexOf("-")+1);
			
			if(value instanceof Boolean) {
				parameterTo.addProperty(realKey, ""+((Boolean) value).booleanValue());				
			} else if(value.getClass().getCanonicalName().equals("org.json.JSONObject.Null")) {
				parameterTo.addProperty(realKey, "");
			} else {
				parameterTo.addProperty(realKey, (String) value);	
			}
		} else {
			ParamFullSpec parameterNew = new ParamFullSpec();
			parameterNew.setName(key);
			// parameterNew.setValue((String) value);
			
			parameterTo.addParameter(parameterNew);
		}
	}
	private final ArrayList<Property> specProperties = new ArrayList<Property>();
	private final ArrayList<Property> compProperties = new ArrayList<Property>();
	private final ArrayList<Property> aboutProperties = new ArrayList<Property>();
	
	private Property getProperty(ArrayList<Property> properties, String propertyName) {
		for (Property property : properties) {
			if (property.getName().equals(propertyName)) {
				return property;
			}
		}
		Property prop = new Property(this.componentName, propertyName);
		properties.add(prop);
		
		return prop;
	}
	
	@SuppressWarnings("unused")
	private void writeBack() {
		templates.put("def"+File.separator+"contribution.xml", XmlTmpl);
		templates.put("%COMPONENT_NAME%Loader.js", JsLoaderTmpl);
		templates.put("%COMPONENT_NAME%.js", JsTmpl);
		templates.put("def"+File.separator+"contribution.ztl", ZtlTmpl);

		for (String templatePath : this.templates.keySet()) {
			String content = templates.get(templatePath);
			templatePath = templatePath.replace("%COMPONENT_NAME%", this.componentName);
			
			// here we will generically clean up the replacement
			content = content.replace("%FUNCTION_ENTRY%", "");
			content = content.replace("%CUSTOM_ENTRY%", "");
			content = content.replace("%COMPONENT_REQUIRE_SPEC%", "");
			
			content = content.replace("%XML_PROPERTY_TEMPLATE%", "");
			content = content.replace("%XML_EVENT_TEMPLATE%", "");
			content = content.replace("%XML_DEAFULT_TEMPLATE%", "");

			try {
				content = content.replace("%FULL_SPEC_DEFINITION%", "that.spec = \r\n" + jsonSpecification.toString(2) + ";");
				// content = content.replace("%FULL_COMP_SPEC_DEFINITION%", "that.compSpec = \r\n" +jsonAbout.toString(2) + ";");
				content = content.replace("%FULL_ABOUT_SPEC_DEFINITION%", "that.aboutSpec = \r\n" +jsonAbout.toString(2) + ";");
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
		
			// content = content.replace("%", "_");
			
			// last check if we have not missed some
			if(content.contains("%")) {
				// throw new RuntimeException(content.substring(content.indexOf("%"), 10));
			}
			
			String iFileName = this.rootPath + File.separator + templatePath;
			Helpers.string2File(iFileName, content);
			
		}
	}
}
