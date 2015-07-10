package org.scn.community.ui5;

import org.scn.community.spec.orgin.OrginSpec;
import org.scn.community.utils.Helpers;

public class UI5Attribute {

	private String name;
	private String value;

	public UI5Attribute(String name, String value) {
		this.name = name;
		this.value = value;
	}

	@Override
	public String toString() {
		return "\r\n\tUI5Attribute \r\n\t\t[name=" + name + ", value=" + value + "]";
	}

	public Object getName() {
		return this.name;
	}

	public String getValue() {
		return this.value;
	}

	public void setValue(String value) {
		this.value = value;
	}
}
