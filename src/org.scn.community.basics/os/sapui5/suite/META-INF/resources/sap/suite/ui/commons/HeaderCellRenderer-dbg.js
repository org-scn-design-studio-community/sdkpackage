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

	 rm.write("<div");
	 rm.writeControlData(oControl);
	 rm.addClass("sapSuiteUiCommonsHeaderCell");
	 rm.addStyle("height", oControl.getHeight());
	 rm.writeStyles();
	 rm.writeClasses();
	 rm.write(">");
		 // write the HTML into the render manager
		 var oWestControl = oControl.getWest();
		 var oNorthControl = oControl.getNorth();
		 var oEastControl = oControl.getEast();
		 var oSouthControl = oControl.getSouth();
		 var sType = "";
		 if(oWestControl != null) {
			 sType += "W";
		 }
		 if(oNorthControl != null) {
			 sType += "N";
		 }
		 if(oEastControl != null) {
			 sType += "E";
		 }
		 if(oSouthControl != null) {
			 sType += "S";
		 }
		 
		 if(oWestControl != null) {
			 this._renderInnerCell(rm, oWestControl, sType, "sapSuiteHdrCellWest");
		 }
		 if(oNorthControl != null) {
			 this._renderInnerCell(rm, oNorthControl, sType, "sapSuiteHdrCellNorth");
		 }
		 if(oEastControl != null) {
			 this._renderInnerCell(rm, oEastControl, sType, "sapSuiteHdrCellEast");
		 }
		 if(oSouthControl != null) {
			 this._renderInnerCell(rm, oSouthControl, sType, "sapSuiteHdrCellSouth");
		 }
	rm.write("</div>");
};
sap.suite.ui.commons.HeaderCellRenderer._renderInnerCell = function(rm, oControl, sType, side) {
		 rm.write("<div");
		 rm.addClass(sType);
		 rm.addClass(side);
		 rm.addStyle("height", oControl.getHeight());
		 rm.writeStyles();
		 rm.writeClasses();
		 rm.write(">");
		 rm.renderControl(oControl.getContent());
		 rm.write("</div>");
};