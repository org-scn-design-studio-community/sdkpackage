/*
 * @copyright
 */
 
jQuery.sap.declare("sap.suite.ui.commons.TimelineFilterListItemRenderer");
jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.m.ListItemBaseRenderer"); 
/**
 * @class TimelineFilterListItem renderer. 
 * @static
 */

sap.suite.ui.commons.TimelineFilterListItemRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.TimelineFilterListItemRenderer.render = function(oRm, oControl){ 
	 // write the HTML into the render manager
	 oRm.write("<div");
	 oRm.writeControlData(oControl);
	 oRm.addClass("sapSuiteUiCommonsTimelineFilterListItem");
	 oRm.writeClasses();
	 oRm.write(">"); 
	 oRm.write("</div>");
};
