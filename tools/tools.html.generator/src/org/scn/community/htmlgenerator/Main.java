package org.scn.community.htmlgenerator;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

import org.scn.community.utils.Helpers;

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

		System.out.println("Components Count: " + allContributionXmls.size());

		ArrayList<String> listEntries = new ArrayList<String>();
		String template = Helpers.resource2String(Main.class, "list_entry.html");

		String targetFolder = mainSrcFolder.getAbsolutePath().replace("src", "web");
		targetFolder = targetFolder.replace("sdkpackage", "sdkinstall");
		targetFolder = targetFolder + "/" + "components";

		String templateList = Helpers.resource2String(Main.class, "list.html");

		for (Object element : allContributionXmls) {
			File contrXml = (File) element;

			Component component = new Component(contrXml);

			String group = component.group;
			group = group.replace("ScnCommunity", "");
			group = group.toLowerCase(Locale.ENGLISH);

			String iFileName = targetFolder + "/" + group + "/" + component.name + ".html";
			iFileName = iFileName.toLowerCase(Locale.ENGLISH);

			String templateCopy = template;
			templateCopy = templateCopy.replace("%COMPONENT_HTML_PACKAGE%", group);
			templateCopy = templateCopy.replace("%COMPONENT_HTML_PAGE%", component.name.toLowerCase(Locale.ENGLISH));
			templateCopy = templateCopy.replace("%COMPONENT_NAME%", component.title);

			templateList = templateList.replace(" %COMPONENT_LIST_ENTRY_" + group.toUpperCase() + "%", templateCopy + "\r\n" + " %COMPONENT_LIST_ENTRY_" + group.toUpperCase() + "%");

			Helpers.string2File(iFileName, component.toHtml());
		}

		templateList = templateList.replace(" %COMPONENT_LIST_ENTRY_BASICS%", "");
		templateList = templateList.replace(" %COMPONENT_LIST_ENTRY_DATABOUND%", "");
		templateList = templateList.replace(" %COMPONENT_LIST_ENTRY_DATASOURCE%", "");
		templateList = templateList.replace(" %COMPONENT_LIST_ENTRY_GEO%", "");
		templateList = templateList.replace(" %COMPONENT_LIST_ENTRY_PROTOTYPES%", "");
		templateList = templateList.replace(" %COMPONENT_LIST_ENTRY_UTILS%", "");

		Helpers.string2File(targetFolder + "/index.html", templateList);

		System.out.println();
		System.out.println("---------------------------------------------------------");
		System.out.println("DONE SUCCESSFULLY.");
		System.out.println("INDEX FILE: " + Helpers.fixFileName(targetFolder + "/index.html"));

	}
}
