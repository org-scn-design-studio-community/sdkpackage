sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.utils.PdfPrintPropertyPage",  function() {

	var that = this;

	this.init = function() {
		$("#select").change(function() {
			that.firePropertiesChanged(["pdfMethod"]);
			return false;
		});
	};

	this.pdfMethod = function(value) {
		if (value === undefined) {
			return $("#select").val();
		}
		else {
			$("#select").val(value);
		}
	};
});