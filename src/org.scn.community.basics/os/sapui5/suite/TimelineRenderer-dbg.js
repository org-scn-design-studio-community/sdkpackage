/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */


jQuery.sap.declare("sap.suite.ui.commons.TimelineRenderer");


/**
 * @class Timeline renderer. 
 * @static
 */
sap.suite.ui.commons.TimelineRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.TimelineRenderer.render = function(oRm, oControl){ 
	// return immediately if control is invisible
	if (!oControl.getVisible()) {
		return;
	}
	if (oControl.getAxisOrientation() === sap.suite.ui.commons.TimelineAxisOrientation.Horizontal){
		this.renderH(oRm, oControl);
	} else {
		this.renderV(oRm, oControl);
	}
};

sap.suite.ui.commons.TimelineRenderer.renderH = function(oRm, oControl) {
	var oContent = oControl._outputItem;
	oRm.write("<div ");
	oRm.writeControlData(oControl);
	oRm.addClass("sapSuiteUiCommonsTimelineH");
	oRm.writeStyles();
	oRm.writeClasses();
	oRm.write(">");// top level div
	
	oRm.renderControl(oControl._headerBar);
	oRm.renderControl(oControl._headerInfoBar);
	if ((oControl.getMessageStrip() !== null) && (oControl.getMessageStrip() !== undefined) && oControl.getMessageStrip().getText() !== "") {
		oRm.renderControl(oControl._messageStrip);
		}
	

	oRm.write("<div ");
	oRm.writeAttribute("id", oControl.getId() + "-contentH");
	oRm.addClass("sapSuiteUiCommonsTimelineContentsH");
	oRm.writeStyles();
	oRm.writeClasses();
	oRm.write(">"); 

	oRm.write("<div ");
	oRm.writeAttribute("id", oControl.getId() + "-scrollH");
	oRm.addClass("sapSuiteUiCommonsTimelineScrollH");
	oRm.addStyle("width", 19 + oContent.length * 18 + "rem");
	oRm.writeStyles();
	oRm.writeClasses();
	oRm.write(">");
	oRm.write("<ul ");
	oRm.writeAttribute("role", "listbox");
	oRm.addClass("sapSuiteUiCommonsTimelineItemUlWrapperV");
	oRm.writeClasses();
	oRm.write(">");
	
	if (oContent.length > 0) {
		for ( var i = 0; i < oContent.length; i++) {
			var oC = oContent[i];
			oC._orientation = 'H';
			oRm.renderControl(oC);
		}
	} else {
		if (oControl._finishLoading){
    		oRm.renderControl(oControl._emptyList);
    	}
	}
	oRm.write("</ul>");
	if (oControl._showMore){
	   this.renderGetMoreH(oRm, oControl);
	}

	oRm.write("</div>"); // scroll div
	oRm.write("</div>");
	oRm.write("</div>");// top level div
};

sap.suite.ui.commons.TimelineRenderer.renderV = function(oRm, oControl){ 

	var oContent = oControl._outputItem;
	oRm.write("<div ");
	oRm.writeControlData(oControl);
	oRm.addClass("sapSuiteUiCommonsTimeline");
	// set the width attribute here..
	if (oControl.getWidth()) {
		oRm.addStyle("width", oControl.getWidth());
	}
	
 
	oRm.writeStyles();
	oRm.writeClasses();
	oRm.write(">");//top level div

	oRm.renderControl(oControl._headerBar);
	oRm.renderControl(oControl._headerInfoBar);
	if (oControl.getMessageStrip().getText() !== "") {
		oRm.renderControl(oControl._messageStrip);
	}
	
    oRm.write("<div ");
    oRm.writeAttribute("id", oControl.getId() + "-content");
    oRm.writeAttribute("data-sap-ui-fastnavgroup", "true");
	oRm.addClass("sapSuiteUiCommonsTimelineContents");
	//if (height) {
	//	oRm.addStyle("height", "300px");
	//}
	oRm.addClass("sapSuiteUiCommonsTimelineScrollV");
	oRm.addClass("sapSuiteUiCommonsTimelineScroll");
	oRm.writeClasses();
	oRm.write(">");
	
	oRm.write("<div ");
	oRm.writeAttribute("id", oControl.getId() + "-scroll");
	oRm.addClass("sapSuiteUiCommonsTimelineScroll");
	/*
	if (oControl._scHeight > 0) {
		oRm.addStyle("height", oControl._scHeight);
	} else {
		oRm.addStyle("height", "100%");
	}
	*/
	//oRm.addStyle("height", "100%"); 
	oRm.writeStyles();
	oRm.writeClasses();
	oRm.write(">");
	oRm.write("<ul ");
	oRm.addClass("sapSuiteUiCommonsTimelineItemUlWrapper");
	oRm.writeClasses();
	oRm.writeAttribute("id", oControl.getId() + "-scroll-ul");
	oRm.writeAttribute("role", "listbox");
	oRm.write(">");
    if (oContent.length > 0) {
    	for (var i = 0; i < oContent.length; i++) {
            oRm.renderControl(oContent[i]);  
        }
    } else {
    	if (oControl._finishLoading){
    		oRm.renderControl(oControl._emptyList);
    	}
    }
     oRm.write("</ul>");
    if (oControl._showMore){
    	oRm.write("<ul ");
    	oRm.addClass("sapSuiteUiCommonsTimelineGetMoreUlWrapper");
    	oRm.writeClasses();
    	oRm.writeAttribute("id", oControl.getId() + "-scroll-getmore-ul");
    	oRm.write(">");
    	this.renderGetMore(oRm, oControl);
    	oRm.write("</ul>");
    }
    oRm.write("</div>");
    oRm.write("</div>");
	oRm.write("</div>");//top level div
};


sap.suite.ui.commons.TimelineRenderer.renderGetMoreH = function(oRm, oControl) {
	oRm.write("<div ");
	oRm.addClass("sapSuiteUiCommonsTimelineGetMoreH");
	oRm.writeClasses();
	oRm.write(">");
	oRm.write("<div ");
	oRm.addClass("sapSuiteUiCommonsTimelineGetMoreBarH");
	oRm.writeClasses();
	oRm.write(">");
	oRm.write("</div>");
	oRm.write("<div ");
	oRm.addClass("sapSuiteUiCommonsTimelineGetMoreBoxH");
	oRm.writeClasses();
	oRm.write(">");
	oRm.renderControl(oControl._getMoreButton);
	oRm.write("</div>");
	oRm.write("</div>");
};

sap.suite.ui.commons.TimelineRenderer.renderGetMore = function(oRm, oControl) {
		oRm.write("<div ");
		oRm.writeAttribute("id", oControl.getId() + "-showmore");
		oRm.addClass("sapSuiteUiCommonsTimelineGetMore");
		oRm.writeClasses();
		oRm.write(">");
		oRm.write("<div ");
		oRm.addClass("sapSuiteUiCommonsTimelineGetMoreBar");
		oRm.writeClasses();
		oRm.write(">");
		oRm.write("</div>");
		oRm.write("<div ");
		oRm.addClass("sapSuiteUiCommonsTimelineGetMoreBox");
		oRm.writeClasses();
		oRm.write(">");
		oRm.renderControl(oControl._getMoreButton);
		oRm.write("</div>");
		oRm.write("</div>");
};
