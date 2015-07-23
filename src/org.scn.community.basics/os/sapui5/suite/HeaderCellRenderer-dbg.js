/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.suite.ui.commons.HeaderCellRenderer");

/**
 * @class HeaderCell renderer. 
 * @static
 */
sap.suite.ui.commons.HeaderCellRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.HeaderCellRenderer.render = function(rm, oControl){
	 var oWestControl = oControl.getWest();
	 var oNorthControl = oControl.getNorth();
	 var oEastControl = oControl.getEast();
	 var oSouthControl = oControl.getSouth();
	 var sType = "";
	 var sDesc = "";
	 
	 if(oWestControl != null) {
		 sType += "W";
		 sDesc += oControl.getId() + "-west ";
	 }
	 if(oNorthControl != null) {
		 sType += "N";
		 sDesc += oControl.getId() + "-north ";
	 }
	 if(oEastControl != null) {
		 sType += "E";
		 sDesc += oControl.getId() + "-east ";
	 }
	 if(oSouthControl != null) {
		 sType += "S";
		 sDesc += oControl.getId() + "-south";
	 }
	 
	 rm.write("<div");
	 rm.writeControlData(oControl);
	 rm.addClass("sapSuiteUiCommonsHeaderCell");
	 rm.addStyle("height", oControl.getHeight());
	 rm.writeStyles();
	 rm.writeClasses();
	 rm.writeAttribute("role", "presentation");
	 rm.writeAttribute("aria-live", "assertive");
	 rm.writeAttribute("aria-labelledby", sDesc);
	 rm.write(">");
		 // write the HTML into the render manager
		 if(oWestControl != null) {
			 this._renderInnerCell(rm, oWestControl, sType, "sapSuiteHdrCellWest", oControl.getId() + "-west");
		 }
		 if(oNorthControl != null) {
			 this._renderInnerCell(rm, oNorthControl, sType, "sapSuiteHdrCellNorth", oControl.getId() + "-north");
		 }
		 if(oEastControl != null) {
			 this._renderInnerCell(rm, oEastControl, sType, "sapSuiteHdrCellEast", oControl.getId() + "-east");
		 }
		 if(oSouthControl != null) {
			 this._renderInnerCell(rm, oSouthControl, sType, "sapSuiteHdrCellSouth", oControl.getId() + "-south");
		 }
	rm.write("</div>");
};
sap.suite.ui.commons.HeaderCellRenderer._renderInnerCell = function(rm, oControl, sType, side, sId) {
		 rm.write("<div");
		 rm.addClass(sType);
		 rm.addClass(side);
		 rm.addStyle("height", oControl.getHeight());
		 rm.writeStyles();
		 rm.writeClasses();
		 rm.writeAttribute("id", sId);
		 //rm.writeAttribute("aria-hidden", "true");
		 if (oControl.getContent() && oControl.getContent().getId()) {
			 rm.writeAttribute("aria-labelledby", oControl.getContent().getId());
		 }
		 rm.write(">");
		 rm.renderControl(oControl.getContent());
		 rm.write("</div>");
};