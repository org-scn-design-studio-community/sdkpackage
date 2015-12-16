package org.scn.community.defgenerator;

public class ZtlAndAps {

	String functions = "";
	String aps = "";
	String xml = "";
	private String templateUI5Xml;
	private String templateUI5ComplexXml;
	
	public String getFunctions() {
		if(functions == null) {
			return "";
		}
		return functions;
	}
	public void setFunctions(String functions) {
		this.functions = functions;
	}
	
	public String getAps() {
		if(aps == null) {
			return "";
		}
		return aps;
	}
	public void setAps(String aps) {
		this.aps = aps;
	}
	
	public String getXml() {
		if(xml == null) {
			return "";
		}
		return xml;
	}
	public void setXml(String xml) {
		this.xml = xml;
	}
	public void setParamXml(String templateUI5Xml) {
		this.templateUI5Xml = templateUI5Xml;
	}
	public String getParamXml() {
		if(templateUI5Xml == null) {
			return "";
		}
		return templateUI5Xml;
	}
	public void setParamComplexXml(String templateUI5ComplexXml) {
		this.templateUI5ComplexXml = templateUI5ComplexXml;
	}
	public String getParamComplexXml() {
		if(templateUI5ComplexXml == null) {
			return "";
		}
		return this.templateUI5ComplexXml;
	}
}
