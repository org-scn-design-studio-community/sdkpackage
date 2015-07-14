package org.scn.community.spec;

import java.io.File;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.TreeMap;

import org.scn.community.spec.ui5.Ui5JsSpec;
import org.scn.community.utils.Helpers;

public class Ui5JsContent {

	private ParamFullSpec spec;
	public static TreeMap<String, String> templatesStatic = new TreeMap<String, String>();   
	private TreeMap<String, String> templates = new TreeMap<String, String>();
	private String type;
	private String name;   

	public Ui5JsContent(ParamFullSpec paramFullSpec) {
		this.spec = paramFullSpec;
		
		this.name = paramFullSpec.getName();
		this.type = paramFullSpec.getTemplateName();
		
		if(templatesStatic.size() == 0) {
			String specFile = spec.getParentProperty().getSpecFile();
			specFile = specFile.substring(0, specFile.indexOf("\\src\\org.scn.community"));
			specFile = specFile + "\\tools\\tools.html.generator\\src\\org\\scn\\community\\spec\\ui5";

			List<File> allTemplates = new ArrayList<File>();
			Helpers.findMatchingFiles(new File(specFile), ".tmpl", "ui5", "", allTemplates);
			
			for (File file : allTemplates) {
				if(file.getName().equals("root.js.tmpl")) {
					continue;
				}
				templatesStatic.put(file.getName(), Helpers.file2String(file));
			}
		}
		
		boolean found = false;
		for (String templateName : templatesStatic.keySet()) {
			if(templateName.contains("js." +this.type + ".")) {
				templates.put(templateName, new String(templatesStatic.get(templateName)));
				found = true;
			}
		}
		
		if(!found) {
			this.type = "simple";
			for (String templateName : templatesStatic.keySet()) {
				if(templateName.contains("js." +this.type + ".")) {
					templates.put(templateName, new String(templatesStatic.get(templateName)));
				}
			}
		}
	}

	public String replaceTemplate(String jsTmpl) {
		for (String templateName : templates.keySet()) {
			String template = templates.get(templateName);
			jsTmpl = jsTmpl.replace("%"+templateName+"%", template + "\r\n" + "%"+templateName+"%");
		}
		return jsTmpl;
	}

	public void calculate() {
		for (String templateName : templates.keySet()) {
			String template = templates.get(templateName);
			template = spec.exchangeTemplate(template);
			templates.put(templateName, template);
		}
	}

	public String replaceRepeater(String jsTmpl) {
		for (String templateName : templatesStatic.keySet()) {
			if(templateName.equals("root.repeater.js.tmpl")) {
				String template = new String(templatesStatic.get(templateName));
				template = spec.exchangeTemplate(template);
				jsTmpl = jsTmpl.replace("%"+templateName+"%", template + "\r\n" + "%"+templateName+"%");
				break;
			}
		}
		return jsTmpl;
	}

}
