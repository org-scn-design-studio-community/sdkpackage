package org.scn.community.spec;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.InetSocketAddress;
import java.net.MalformedURLException;
import java.net.Proxy;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import javax.xml.stream.XMLStreamReader;

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

import com.sun.xml.internal.messaging.saaj.soap.ver1_1.HeaderElement1_1Impl;

public class SpecHelper {

	public String componentName;
	private File specFile;

	public SpecHelper(String componentName, File specFile) {
		this.componentName = componentName;
		this.specFile = specFile;
	}

	public void readSpecification(ArrayList<Property> properties, JSONObject jsonSpec) {
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

		// Sorting for better HTML
		Collections.sort(properties, new Comparator<Property>() {
			@Override
			public int compare(Property o1, Property o2) {
				 return  o1.getName().compareTo(o2.getName());
			}
		});
	}

	public void processJsonArrayReq(ParamFullSpec parameter, Object object) 
			throws JSONException {
		JSONArray object1 = (JSONArray) object;
		
		for (int i = 0; i < object1.length(); i++) {
			Object element = object1.get(i);
			
			insertParameter(parameter, ""+i, element);
		}
	}

	public void processJsonObjectReq(ParamFullSpec parameter, Object object)
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
	
	public void insertParameter(ParamFullSpec parameterTo, String key, Object value) 
			throws JSONException {
		if(!(value instanceof JSONObject) && !(value instanceof JSONArray)) {
			String realKey = key.substring(key.indexOf("-")+1);
			
			if(value instanceof Boolean) {
				parameterTo.addProperty(realKey, ""+((Boolean) value).booleanValue());
			} else if(value.getClass().getCanonicalName().equals("org.json.JSONObject.Null")) {
				parameterTo.addProperty(realKey, "");
			} else if(value instanceof Integer) {
				parameterTo.addProperty(realKey, ""+((Integer) value).intValue());
			} else if(value instanceof Double) {
				parameterTo.addProperty(realKey, ""+((Double) value).doubleValue());
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
	
	public boolean hasProperty(ArrayList<Property> properties, String propertyName) {
		for (Property property : properties) {
			if (property.getName().equals(propertyName)) {
				return true;
			}
		}
		
		return false;
	}
	
	public Property getProperty(ArrayList<Property> properties, String propertyName) {
		for (Property property : properties) {
			if (property.getName().equals(propertyName)) {
				return property;
			}
		}
		Property prop = new Property(this.componentName, propertyName, this.specFile);
		properties.add(prop);
		
		return prop;
	}
	
	// HTTP GET request
	public String sendGet(String url) {
  
		StringBuffer response = new StringBuffer();

		try {

			URLConnection openConnection = null;

			List<String> file2List = Helpers.file2List("c:\\DEV\\proxy.txt");
			if(file2List.size() == 2) {
				Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress("proxy", 8080));
				openConnection = new URL(url).openConnection(proxy);
			} else {
				openConnection = new URL(url).openConnection();
			}
			
			HttpURLConnection con = (HttpURLConnection) openConnection;

			// optional default is GET
			con.setRequestMethod("GET");

			//add request header
			con.setRequestProperty("User-Agent", "");

			int responseCode = con.getResponseCode();
			System.out.println("\nSending 'GET' request to URL : " + url);
			System.out.println("Response Code : " + responseCode);

			BufferedReader in = new BufferedReader(
			        new InputStreamReader(con.getInputStream()));
			String inputLine;

			while ((inputLine = in.readLine()) != null) {
				response.append(inputLine);
			}
			in.close();
		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

		//print result
		return response.toString();
	}
}
