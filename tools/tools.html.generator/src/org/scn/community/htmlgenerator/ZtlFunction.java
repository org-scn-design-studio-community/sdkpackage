package org.scn.community.htmlgenerator;

import java.security.MessageDigest;
import java.util.ArrayList;
import java.util.List;

import org.scn.community.spec.orgin.OrginSpec;
import org.scn.community.utils.Helpers;

import sun.security.provider.MD5;

public class ZtlFunction {

	private final String currentFunction;

	String name;

	private String returnType;

	private String help;

	private String content;

	private final ArrayList<ZtlParameter> parameters = new ArrayList<ZtlParameter>();

	public ZtlFunction(String currentFunction) {
		this.currentFunction = currentFunction;

		currentFunction = currentFunction.replace("\t", "  ");

		parseFunction(currentFunction);
	}

	private void parseFunction(String currentFunction) {
		int indexOfBrackletStart = currentFunction.indexOf("{*");
		int indexOfBrackletEnd = currentFunction.indexOf("*}");

		int indexOfBrackletLastBeforeBrackletStar = currentFunction.lastIndexOf("(", indexOfBrackletStart);
		int indexOfSpaceBefore = currentFunction.lastIndexOf(" ", indexOfBrackletLastBeforeBrackletStar);
		int indexOfLinebreakBefore = currentFunction.lastIndexOf("\n", indexOfSpaceBefore);

		boolean bracketIsGood = false;

		do {
			String checkPart = currentFunction.substring(indexOfBrackletLastBeforeBrackletStar, indexOfBrackletStart);
			String reducedByBracketClose = checkPart.replace(")", "");
			String reducedByBracketOpen = checkPart.replace("(", "");

			int diffInLength = reducedByBracketOpen.length() - reducedByBracketClose.length();

			if (diffInLength > 0) {
				indexOfBrackletLastBeforeBrackletStar = currentFunction.lastIndexOf("(", indexOfBrackletLastBeforeBrackletStar - 1);
				indexOfSpaceBefore = currentFunction.lastIndexOf(" ", indexOfBrackletLastBeforeBrackletStar);
				indexOfLinebreakBefore = currentFunction.lastIndexOf("\n", indexOfSpaceBefore);
			} else {
				bracketIsGood = true;
			}
		} while (!bracketIsGood);

		if (indexOfLinebreakBefore == -1) {
			indexOfLinebreakBefore = 0;
		}

		this.help = currentFunction.substring(0, indexOfLinebreakBefore);
		this.help = this.help.replace("/**", "");
		this.help = this.help.replace("*/", "");
		this.help = this.help.replace("* ", "");
		this.help = this.help.trim();

		this.content = currentFunction.substring(indexOfBrackletStart + 2, indexOfBrackletEnd);
		this.content = this.content.trim();

		// System.out.println("INDEX: -" + indexOfBrackletStar + "-" + indexOfStarBracklet + "-" + indexOfBrackletLastBeforeBrackletStar + "-" + indexOfSpaceBefore + "-" + indexOfLinebreakBefore + "-");

		if (indexOfSpaceBefore == -1) {
			System.out.println(currentFunction);
		}

		this.name = currentFunction.substring(indexOfLinebreakBefore + 1, indexOfBrackletLastBeforeBrackletStar);
		this.name = this.name.trim();

		this.returnType = this.name.substring(0, this.name.indexOf(" "));
		this.name = this.name.substring(this.name.indexOf(" ") + 1);

		String parameters = currentFunction.substring(indexOfBrackletLastBeforeBrackletStar, indexOfBrackletStart);
		int firstParamBacklet = parameters.indexOf("(");
		int lastParamBracklet = parameters.lastIndexOf(")");

		parameters = parameters.substring(firstParamBacklet + 1, lastParamBracklet);
		parameters = parameters.replace("\n", "");
		parameters = parameters.trim();

		String[] singleParameters = parameters.split(",");

		for (int i = 0; i < singleParameters.length; i++) {
			String paramLine = singleParameters[i];

			if (paramLine.contains("/*")) {
				// with documentation

				while (!paramLine.contains("*/")) {
					// try to correct line
					i++;
					paramLine = paramLine + singleParameters[i];
				}
			} else {
				// only definition
			}

			if (paramLine.trim().length() > 0) {
				ZtlParameter param = new ZtlParameter(paramLine);
				this.parameters.add(param);
			}
		}
		int k = 0;
	}

	public String toHtml() {
		String template = Helpers.resource2String(this.getClass(), "function.html");
		String templateParamHeader = Helpers.resource2String(this.getClass(), "parameter_header.html");

		String htmlFunction = "";

		List<String> helpList = Helpers.stringToList(this.help);
		for (int i = 0; i < helpList.size(); i++) {
			String helpLine = helpList.get(i);
			helpLine = helpLine.trim();

			if (helpLine.trim().length() == 0) {
				continue;
			}

			if (helpLine.trim().length() < 5 && helpLine.contains("br")) {
				continue;
			}

			if (!helpLine.contains("<br") && !helpLine.contains("<ol") && !helpLine.contains("<ul") && !helpLine.contains("<li") && !helpLine.contains("example") && !helpLine.contains("code")) {
				helpLine = helpLine + "<br/>";
			}

			htmlFunction = htmlFunction + helpLine;
		}

		htmlFunction = htmlFunction.replace("<br/><br/>", "<br/>");
		htmlFunction = htmlFunction.replace("<br/><br/>", "<br/>");
		htmlFunction = htmlFunction.replace("<br/><br/>", "<br/>");
		htmlFunction = htmlFunction.replace(" ", "&nbsp;");

		htmlFunction = htmlFunction.replace("<example>", "<div class='html-example'\">");
		htmlFunction = htmlFunction.replace("</example>", "</div>");

		htmlFunction = htmlFunction.replace("<code>", "<div class='html-code'>");
		htmlFunction = htmlFunction.replace("</code>", "</div>");

		template = template.replace("%CONTENT%", Helpers.encodeHtml(this.content));

		template = template.replace("%NAME%", this.name);
		template = template.replace("%RETURN_TYPE%", this.returnType);

		template = template.replace("%HELP%", htmlFunction);

		if (this.parameters.size() > 0) {
			template = template.replace("%PARAMETER_HEADER%", templateParamHeader);
		} else {
			template = template.replace("%PARAMETER_HEADER%", "");
		}

		for (ZtlParameter parameter : this.parameters) {
			template = template.replace("%PARAMETER%", parameter.toHtml() + "\r\n" + "%PARAMETER%");
		}
		template = template.replace("%PARAMETER%", "");

		return template;
	}

	public String toShortHtml() {
		String template = Helpers.resource2String(this.getClass(), "function_short.html");

		template = template.replace("%NAME%", this.name);
		template = template.replace("%RETURN_TYPE%", this.returnType);

		String parameters = "";

		if (this.parameters.size() > 0) {
			for (ZtlParameter parameter : this.parameters) {
				String parName = parameter.name;

				if (parameter.isOptional) {
					parName = "(" + parName + ")";
				}
				parameters = parameters + parName + ", ";
			}
			parameters = parameters.substring(0, parameters.length() - 2);
			template = template.replace("%PARAMETERS%", parameters);
		} else {
			template = template.replace("%PARAMETERS%", "");
		}

		return template;
	}

	public String toPropertyValue() {
		String value = "";
		
		value = value + this.returnType + "|";
		if (this.parameters.size() > 0) {
			value = value + "[";
			for (ZtlParameter parameter : this.parameters) {
				if (parameter.isOptional) {
					value = value + "("+parameter.name+","+parameter.type + ");";
				} else  {
					value = value + parameter.name+","+parameter.type + ";";
				}
			}
			value = value.substring(0, value.length()-1);
			value = value + "]|";
		}
		
		value = value + "CONT:" + Helpers.hashString(this.content) + "|";
		
		return value;
	}

	public String getName() {
		return this.name;
	}

	public String toSpec20() {
		String template = Helpers.resource2String(OrginSpec.class, "org.ztl.function.ztl");
		
		String htmlFunction = "";
		List<String> helpList = Helpers.stringToList(this.help);
		for (int i = 0; i < helpList.size(); i++) {
			String helpLine = helpList.get(i);
			helpLine = helpLine.trim();

			if (helpLine.trim().length() == 0) {
				continue;
			}

			if (helpLine.trim().length() < 5 && helpLine.contains("br")) {
				continue;
			}

			if (!helpLine.contains("<br") && !helpLine.contains("<ol") && !helpLine.contains("<ul") && !helpLine.contains("<li") && !helpLine.contains("example") && !helpLine.contains("code")) {
				helpLine = helpLine + "<br/>";
			}

			if(helpLine.trim().startsWith("/")) {
				helpLine = helpLine.substring(1);
			}

			if(!helpLine.trim().startsWith("*")) {
				helpLine = "\t * " + helpLine;
			}
			
			if(helpLine.trim().contains("code>")) {
				helpLine = helpLine + "<br/>";
			}
			if(helpLine.trim().contains("example>")) {
				helpLine = helpLine + "<br/>";
			}
			
			htmlFunction = htmlFunction + helpLine;
		}

		htmlFunction = htmlFunction.replace("<br/><br/>", "<br/>");
		htmlFunction = htmlFunction.replace("<br/><br/>", "<br/>");
		htmlFunction = htmlFunction.replace("<br/><br/>", "<br/>");
		htmlFunction = htmlFunction.replace("<br>", "<br/>");
		
		htmlFunction = htmlFunction.replace("<br/>", "<br/>\r\n");
		List<String> stringToList = Helpers.stringToList(this.content);
		String contentNew = "";
		for (String line : stringToList) {
			if(line.indexOf(" ")  == 0) {
				line =  line.replace("  ", "\t");	
			}
			// line = "\t" + line;
			
			if(contentNew.length() == 0) {
				contentNew = line;
			} else {
				contentNew = contentNew + "\r\n" + line;
			}
		}
		
		template = template.replace("%CONTENT%", contentNew);

		template = template.replace("%NAME%", this.name);
		template = template.replace("%RETURN_TYPE%", this.returnType);

		if(htmlFunction.endsWith("\r\n")) {
			htmlFunction = htmlFunction.substring(0, htmlFunction.length()-2);
		}
		
		template = template.replace("%HELP%", htmlFunction);

		for (ZtlParameter parameter : this.parameters) {
			template = template.replace("%PARAMETER%", parameter.toSpec20() + ",\r\n\t\t\t" + "%PARAMETER%");
		}
		template = template.replace("%PARAMETER%", "");

		return template;
	}
}
