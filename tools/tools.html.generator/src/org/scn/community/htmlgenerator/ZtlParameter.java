package org.scn.community.htmlgenerator;

import org.scn.community.spec.orgin.OrginSpec;
import org.scn.community.utils.Helpers;

public class ZtlParameter {

	private String paramLine;

	private String docu;

	final String type;

	final String name;

	boolean isOptional;

	public ZtlParameter(String paramLine) {
		this.paramLine = paramLine.trim();

		if (paramLine.contains("/*")) {
			this.docu = this.paramLine.substring(this.paramLine.indexOf("/*") + 2, this.paramLine.indexOf("*/"));
			this.docu = this.docu.replace("*", "");
		} else {
			this.docu = "";
		}

		if (paramLine.contains("*/")) {
			this.paramLine = this.paramLine.substring(this.paramLine.indexOf("*/") + 2);
		}

		if (this.paramLine.contains("optional")) {
			this.isOptional = true;
			this.paramLine = this.paramLine.replace("optional", "");
		}

		this.paramLine = this.paramLine.trim();
		if(this.paramLine.indexOf(" ") == -1) {
			System.err.println(paramLine + " does not contain type!");
		}
		
		this.type = this.paramLine.substring(0, this.paramLine.indexOf(" "));
		this.name = this.paramLine.substring(this.paramLine.indexOf(" ") + 1);
	}

	public String toHtml() {
		String template = Helpers.resource2String(this.getClass(), "parameter.html");

		template = template.replace("%NAME%", this.name);
		String typeOptional = this.type;

		if (this.isOptional) {
			typeOptional = typeOptional + " [ optional ]";
		}

		template = template.replace("%TYPE%", typeOptional);
		template = template.replace("%HELP%", this.docu);

		return template;
	}

	public String toSpec20() {
		String template = Helpers.resource2String(OrginSpec.class, "org.ztl.parameter.ztl");

		template = template.replace("%NAME%", this.name);
		String typeOptional = this.type;

		if (this.isOptional) {
			typeOptional = typeOptional + " [ optional ]";
		}

		template = template.replace("%TYPE%", typeOptional);
		template = template.replace("%HELP%", this.docu);

		return template;
	}

}
