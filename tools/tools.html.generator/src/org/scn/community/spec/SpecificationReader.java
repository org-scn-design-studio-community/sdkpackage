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
import org.scn.community.spec.aps.SpecificationApsTemplate;
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
	private String ApsJs;
	private String ApsHtml;
	private String JsSpecTmpl;
	private ArrayList<String> componentRequries = new ArrayList<String>();
	private ArrayList<String> componentStdIncludes = new ArrayList<String>();

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
				
				if(generatedZtlAndAps.getXml() != null && generatedZtlAndAps.getXml().length() > 0) {
					XmlTmpl = XmlTmpl.replace("%XML_PROPERTY_TEMPLATE%", generatedZtlAndAps.getXml() + "\r\n%XML_PROPERTY_TEMPLATE%");	
					XmlTmpl = XmlTmpl.replace("%XML_DEAFULT_TEMPLATE%", property.getExtendedFullSpec().getValueXml() + "\r\n%XML_DEAFULT_TEMPLATE%");
				}
			}
		}
		
		Property widthProp = this.getProperty(this.compProperties, "width");
		HashMap<String, String> widthProperties = widthProp.getExtendedFullSpec().getProperties();
		String widthPropValue = this.getAdvancedProperty(widthProperties, "width");
		XmlTmpl = XmlTmpl.replace("%XML_DEAFULT_WIDTH%", widthPropValue);
		
		Property heightProp = this.getProperty(this.compProperties, "height");
		HashMap<String, String> heightProperties = heightProp.getExtendedFullSpec().getProperties();
		String heightPropValue = this.getAdvancedProperty(heightProperties, "height");
		XmlTmpl = XmlTmpl.replace("%XML_DEAFULT_HEIGHT%", heightPropValue);
		
		Property requrieSpec = this.getProperty(this.compProperties, "require");

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

			if(key.equals("require")) {
				// special case, an array
				
				componentRequries = new ArrayList<String>();
				ParamFullSpec extendedFullSpecArray = property.getExtendedFullSpec();
				
				ArrayList<ParamFullSpec> parameters = extendedFullSpecArray.getParameters();
				
				for (ParamFullSpec paramFullSpec : parameters) {
					String space = paramFullSpec.getProperties().get("space");
					String id = paramFullSpec.getProperties().get("id");
					
					componentRequries.add("org_scn_community_require."+space+"Modules." + id + ".name");
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
		
		readSpecification(this.aboutProperties, this.jsonAbout);
		
		Property compType = this.getProperty(this.compProperties, "handlerType");
		HashMap<String, String> properties = compType.getExtendedFullSpec().getProperties();
		String compTypeValue = this.getAdvancedProperty(properties, "handlerType");
		
		XmlTmpl = Helpers.resource2String(SpecificationXmlTemplate.class, "xml_root.template");

		JsLoaderTmpl = Helpers.resource2String(SpecificationJsTemplate.class, "js_root.loader."+compTypeValue+".js.template");
		JsTmpl = Helpers.resource2String(SpecificationJsTemplate.class, "js_root.component."+compTypeValue+".js.template");
		JsSpecTmpl = Helpers.resource2String(SpecificationJsTemplate.class, "js_root.spec."+compTypeValue+".js.template");
		
		if(JsLoaderTmpl == null || JsTmpl == null || JsSpecTmpl == null) {
			throw new RuntimeException("'" + compTypeValue + "' is not a valid component type (div | sapui5)");
		}
		
		ZtlTmpl = Helpers.resource2String(SpecificationZtlTemplate.class, "ztl_root.ztl.template");
		
		if(compTypeValue.equals("sapui5")) {
			ApsJs  = Helpers.resource2String(SpecificationApsTemplate.class, "PropertyPage."+compTypeValue+".def.js.template");
			ApsHtml  = Helpers.resource2String(SpecificationApsTemplate.class, "PropertyPage."+compTypeValue+".html.template");

			XmlTmpl = XmlTmpl.replace("%PROPERTY_PAGE_LINK%", "res/%COMP-id%/aps/PropertyPage.html");
		} else {
			XmlTmpl = XmlTmpl.replace("%PROPERTY_PAGE_LINK%", "aps/org.scn.community.PropertyPage."+compTypeValue+".html");
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
				} else if(object instanceof JSONArray) {
					processJsonArrayReq(parameter, object);
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

	private void processJsonArrayReq(ParamFullSpec parameter, Object object) 
			throws JSONException {
		JSONArray object1 = (JSONArray) object;
		
		for (int i = 0; i < object1.length(); i++) {
			Object element = object1.get(i);
			
			insertParameter(parameter, ""+i, element);
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
	
	private void insertParameter(ParamFullSpec parameterTo, String key, Object value) 
			throws JSONException {
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
			
			if(value instanceof JSONObject) {
				JSONObject object2Array = (JSONObject) value;
				
				Iterator keys = object2Array.keys();
				while (keys.hasNext()) {
					String keyArray = (String) keys.next();
					String valueArray = object2Array.getString(keyArray);
					
					parameterNew.addProperty(keyArray, valueArray);
				}
			}
			
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
		templates.put("%COMPONENT_NAME%Spec.js", JsSpecTmpl);
		
		templates.put("%COMPONENT_NAME%.js", JsTmpl);
		
		templates.put("def"+File.separator+"contribution.ztl", ZtlTmpl);
		
		if(ApsHtml != null){
			templates.put("aps"+File.separator+"PropertyPage.html", ApsHtml);	
		}
		
		if(ApsJs != null){
			templates.put("aps"+File.separator+"PropertyPage.def.js", ApsJs);
		}
		
		for (String templatePath : this.templates.keySet()) {
			String content = templates.get(templatePath);
			templatePath = templatePath.replace("%COMPONENT_NAME%", this.componentName);
			
			// here we will generically clean up the replacement
			content = content.replace("%FUNCTION_ENTRY%", "");
			content = content.replace("%CUSTOM_ENTRY%", "");
			content = content.replace("%COMPONENT_REQUIRE_SPEC%", this.serializeRequires());
			content = content.replace("%COMPONENT_STD_INCLUDES_SPEC%", this.serializeStdIncludes());
			
			content = content.replace("%XML_PROPERTY_TEMPLATE%", "");
			content = content.replace("%XML_EVENT_TEMPLATE%", "");
			content = content.replace("%XML_DEAFULT_TEMPLATE%", "");
			
			try {
				content = content.replace("%FULL_SPEC_DEFINITION%", jsonSpecification.toString(2) + ";");
				content = content.replace("%FULL_COMP_SPEC_DEFINITION%", jsonComponent.toString(2) + ";");
				content = content.replace("%FULL_ABOUT_SPEC_DEFINITION%", jsonAbout.toString(2) + ";");

				content = content.replace("%FULL_SPEC_DEFINITION_JSON%", jsonSpecification.toString(2));
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
		
			// content = content.replace("%", "_");
			
			// last check if we have not missed some
			if(content.contains("%")) {
				// throw new RuntimeException(content.substring(content.indexOf("%"), 10));
			}

			String iFileName = this.rootPath + File.separator + templatePath;
			if(templatePath.endsWith(this.componentName + ".js")) {
				if(!new File(iFileName).exists()) {
					Helpers.string2File(iFileName, content);
				}
			} else {
				Helpers.string2File(iFileName, content);
			}
		}
	}

	private CharSequence serializeRequires() {
		String requires = "";
		
		for (String require : componentRequries) {
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
}
