package org.scn.community.htmlgenerator;

import java.io.File;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Locale;

import org.scn.community.utils.Helpers;

import com.sun.xml.internal.messaging.saaj.soap.ver1_1.HeaderElement1_1Impl;

public class Main {

	public static void main(String[] attrs) {
		Main main = new Main();
		main.test_RunMain();
	}

	public void test_RunMain() {
		System.out.println("START...");

		String path = Main.class.getClassLoader().getResource("").getPath(); //$NON-NLS-1$
		System.out.println("PATH... " + path);

		// cut until "tools"
		path = path.substring(0, path.indexOf("/tools"));
		path = path + "/src";

		File mainSrcFolder = new File(path);

		boolean directory = mainSrcFolder.isDirectory();
		System.out.println("SRC... " + mainSrcFolder.getAbsoluteFile() + ", isDirectory: " + directory);

		listAllComponents(mainSrcFolder);
	}

	private static void listAllComponents(File mainSrcFolder) {

		List<File> allContributionXmls = new ArrayList<File>();
		Helpers.findMatchingFiles(mainSrcFolder, "contribution.xml", "def", "component", allContributionXmls);
		
		List<File> allSpecifications = new ArrayList<File>();
		Helpers.findMatchingFiles(mainSrcFolder, "component.json", "spec", "\"id\"", allSpecifications);

		List<String> allComponents = new ArrayList<String>();
		
		for (File file : allContributionXmls) {
			if(!allComponents.contains(file.getAbsolutePath())) {
				allComponents.add(file.getAbsolutePath());	
			}
		}
		
		for (File file : allSpecifications) {
			String pathSpec = file.getAbsolutePath();
			pathSpec = pathSpec.replace("component.json", "contribution.xml");
			pathSpec = pathSpec.replace(File.separator + "spec" + File.separator, File.separator + "def" + File.separator);
			
			if(!allComponents.contains(pathSpec)) {
				allComponents.add(pathSpec);	
			}
		}
		
		System.out.println("Components Count: " + allComponents.size());

		ArrayList<String> listEntries = new ArrayList<String>();
		String componentModelEntry = Helpers.resource2String(Main.class, "model_components_entry.tmpl");

		String targetFolder = mainSrcFolder.getAbsolutePath().replace("src", "web");
		targetFolder = targetFolder.replace("sdkpackage", "sdkinstall");
		targetFolder = targetFolder + "/" + "components";

		String componentModelTemplate = Helpers.resource2String(Main.class, "model_components.js.tmpl");
		String castString = "";

		Collections.sort(allComponents);
		
		for (String element : allComponents) {
			File contrXml = new File(element);

			Component component = new Component(contrXml);
			

			String group = component.group;
			group = group.replace("ScnCommunity", "");
			group = group.toLowerCase(Locale.ENGLISH);

			String iFileName = targetFolder + "/" + group + "/" + component.name + ".html";
			iFileName = iFileName.toLowerCase(Locale.ENGLISH);

			component.copyIcon(iFileName);
			component.createHelp(iFileName);
			
			String componentModelEntryCopy = componentModelEntry;
			
			componentModelEntryCopy = componentModelEntryCopy.replace("%COMPONENT_HTML_PACKAGE%", group);
			componentModelEntryCopy = componentModelEntryCopy.replace("%COMPONENT_HTML_PAGE%", group + "/" + component.name.toLowerCase(Locale.ENGLISH));
			componentModelEntryCopy = componentModelEntryCopy.replace("%COMPONENT_NAME%", component.name);
			componentModelEntryCopy = componentModelEntryCopy.replace("%COMPONENT_TITLE%", component.title);
			componentModelEntryCopy = componentModelEntryCopy.replace("%COMPONENT_ICON%", group + "/" + component.name.toLowerCase(Locale.ENGLISH) + ".png");
			componentModelEntryCopy = componentModelEntryCopy.replace("%COMPONENT_PACKAGE%", group);

			component.serializeProperties(iFileName);
			component.checkBlogs(iFileName);
			component.checkExamples(iFileName);

			componentModelTemplate = componentModelTemplate.replace("%COMPONENT_LIST_ENTRY_" + group.toUpperCase() + "%", componentModelEntryCopy + "\r\n" + " %COMPONENT_LIST_ENTRY_" + group.toUpperCase() + "%");
			Helpers.string2File(iFileName, component.toHtml(iFileName));
			
			String makeSpec = element.replace("def\\contribution.xml", "make.spec");
			if(new File(makeSpec).exists()) {
				String content = Helpers.file2String(makeSpec);
				
				if(!content.contains("lock")) {
					String[] spec20 = component.toSpec20();
					for (int i = 0; i < spec20.length; i++) {
						String specContent = spec20[i];
						
						if(i == 0) {
							iFileName = element.replace("def\\contribution.xml", "spec20/component.json");
						} else if(i == 1) {
							iFileName = element.replace("def\\contribution.xml", "spec20/specification.json");
						} else if(i == 2) {
							iFileName = element.replace("def\\contribution.xml", "spec20/about.json");
						} else if(i == 3) {
							iFileName = element.replace("def\\contribution.xml", "spec20/contribution.ztl");
						}

						Helpers.string2File(iFileName, specContent);	
					}
				}
			}

			String cssFile = element.replace("def\\contribution.xml", component.getName() + ".css");
			if(!new File(cssFile).exists()) {
				Helpers.string2File(cssFile, "");
			}

			if(!component.name.startsWith("ChangeLog")) {
				String castStringFromComponent = component.toCastString();
				castString = castString + castStringFromComponent + "\r\n";
			}
		}

		// C:\DEV\community.sdkpackage\src\org.scn.community.utils\res\ComponentManager\def\contribution.ztl
		String realZtlFileForComponentManager = mainSrcFolder.getAbsolutePath() + "\\org.scn.community.utils\\res\\ComponentManager\\def\\" + "contribution.ztl";
		String contentOfRealZtl = Helpers.file2String(realZtlFileForComponentManager);
		int indexOfReplace = contentOfRealZtl.indexOf("/* GENERATION PLACE BELOW - DO NOT DELETE THIS LINE ! */");
		
		if(indexOfReplace == -1) {
			throw new RuntimeException("Index of Replacement in ComponentManager ZTL not found");
		}
		contentOfRealZtl = contentOfRealZtl.substring(0, indexOfReplace + "/* GENERATION PLACE BELOW - DO NOT DELETE THIS LINE ! */".length());
		contentOfRealZtl = contentOfRealZtl + "\r\n";
		contentOfRealZtl = contentOfRealZtl + castString + "\r\n" + "}";

		Helpers.string2File(realZtlFileForComponentManager, contentOfRealZtl);
		
		componentModelTemplate = removeReplacements(componentModelTemplate);

		Helpers.string2File(targetFolder + "/model/components.js", componentModelTemplate);

		System.out.println();
		System.out.println("---------------------------------------------------------");
		System.out.println("DONE SUCCESSFULLY.");
		System.out.println("INDEX FILE: " + Helpers.fixFileName(targetFolder + "/index.html"));

	}

	private static String removeReplacements(String templateList) {
		templateList = templateList.replace(" %COMPONENT_LIST_ENTRY_BASICS%", "");
		templateList = templateList.replace(" %COMPONENT_LIST_ENTRY_DATABOUND%", "");
		templateList = templateList.replace(" %COMPONENT_LIST_ENTRY_CHARTMAPS%", "");
		templateList = templateList.replace(" %COMPONENT_LIST_ENTRY_DATASOURCE%", "");
		templateList = templateList.replace(" %COMPONENT_LIST_ENTRY_GEO%", "");
		templateList = templateList.replace(" %COMPONENT_LIST_ENTRY_PROTOTYPES%", "");
		templateList = templateList.replace(" %COMPONENT_LIST_ENTRY_UTILS%", "");
		templateList = templateList.replace(" %COMPONENT_LIST_ENTRY_FRAMEWORK%", "");
		return templateList;
	}
}
