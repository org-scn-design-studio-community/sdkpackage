package org.scn.community.htmlgenerator;

import org.scn.community.utils.Helpers;

public class Value {

	final String name;

	public boolean isDefault;

	public Value(String name) {
		this.name = name;
	}

	public String toHtml() {
		String templateValues = Helpers.resource2String(this.getClass(), "value.html");

		templateValues = templateValues.replace("%VALUE%", this.name);
		templateValues = templateValues.replace("%DEFAULT%", this.isDefault ? "X" : "&nbsp;");

		return templateValues;
	}

}
