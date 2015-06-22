package org.scn.community.htmlgenerator;

import java.util.Locale;

import org.scn.community.spec.orgin.OrginSpec;
import org.scn.community.utils.Helpers;

public class Value {

	final String name;

	public String getName() {
		return name;
	}

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

	public String toSpec20() {
		String templateValues = Helpers.resource2String(OrginSpec.class, "org.Choice-Entry.tmpl");

		String correctedName = "";
		for (int i = 0; i < this.name.length(); i++) {
			char c = this.name.charAt(i);
			
			if(Character.isAlphabetic(c) || Character.isDigit(c)) {
				if(Character.isWhitespace(c)) {
					correctedName = correctedName + "_";	
				} else {
					if(Character.isUpperCase(c)) {
						if(i == 0) {
							correctedName = correctedName + c;
						} else {
							correctedName = correctedName + "_" + c;
						}
					} else {
						correctedName = correctedName + c;
					}
				}
			}
		}
		
		// correctedName = correctedName.toUpperCase();
		
		templateValues = templateValues.replace("%VALUE%", correctedName);
		templateValues = templateValues.replace("%DEFAULT%", ""+this.isDefault);

		return templateValues;
	}

	public boolean isDefault() {
		return this.isDefault;
	}

}
