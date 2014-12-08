sap.designstudio.sdk.PropertyPage.subclass("com.sap.sample.SimpleTablePropertyPage", function() {

	var that = this;

	this.init = function() {
		fillDropDown();
		$("#editcolumn1").click(function() {
			that.openPropertyDialog("column1");
		});
	};

	this.componentSelected = function() {
		fillDropDown();
	};

	function fillDropDown() {
		var jqDropdownMembers = $("#members");
		jqDropdownMembers.empty();
		var strMetadata = that.callRuntimeHandler("getMetadataAsString");
		if (strMetadata) {
			var metadata = jQuery.parseJSON(strMetadata);
			if (metadata) {
				var column1Members = metadata.dimensions[0].members;
				for (var i = 0; i < column1Members.length; i++) {
					var member = column1Members[i];
					var jqDropdownItem = $("<option value='" + member.key + "'>" + member.text + "</option>");
					jqDropdownMembers.append(jqDropdownItem);
				}
			}
		}
	}
});