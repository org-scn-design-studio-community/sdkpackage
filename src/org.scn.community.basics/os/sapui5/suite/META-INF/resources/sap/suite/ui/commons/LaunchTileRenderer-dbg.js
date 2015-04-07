// @copyright 

jQuery.sap.declare("sap.suite.ui.commons.LaunchTileRenderer");

/**
 * @class LaunchTile renderer.
 * @static
 */
sap.suite.ui.commons.LaunchTileRenderer = {};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager}
 *            oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.LaunchTileRenderer.render = function(oRm, oLaunchTile) {

	var oLocale = sap.ui.getCore().getConfiguration().getLanguage();
	var oResBundle = sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons", oLocale);
	var sAriaLabel = "";

	// write the HTML into the render manager
	oRm.write("<div");
	oRm.writeControlData(oLaunchTile);
	oRm.addClass("sapSuiteUiCommonsLaunchTile");
	oRm.addClass("sapSuiteUiCommonsPointer");
	oRm.writeAttribute("tabindex", "0");
	oRm.writeClasses();

	if (oLaunchTile.getTooltip_AsString()) {
		sAriaLabel = oLaunchTile.getTooltip_AsString();
		oRm.writeAttributeEscaped("title", oLaunchTile.getTooltip_AsString());
	} else {
		sAriaLabel = oResBundle.getText("LAUNCHTILE_LAUNCH") + " " + oLaunchTile.getTitle();
	}

	// ARIA
	oRm.writeAccessibilityState(oLaunchTile, {
		role : 'link',
		live : 'assertive',
		label : sAriaLabel
	});

	oRm.write(">"); // tile element

	oRm.write('<div id="' + oLaunchTile.getId() + '-launchTileText"');
	oRm.addClass("sapSuiteUiCommonsLaunchTileTitle");
	oRm.writeClasses();
	oRm.write(">");
	oRm.writeEscaped(oLaunchTile.getTitle());
	oRm.write("</div>");

	// Container for icon
	oRm.write('<div id="' + oLaunchTile.getId() + '-launchTileIcon"'); // Start icon container
	oRm.addClass("sapSuiteUiCommonsLaunchTileIcon");
	oRm.writeClasses();
	oRm.write(">");
	oRm.renderControl(oLaunchTile._iconImage);
	oRm.write("</div>"); // end icon container

	oRm.write("</div>"); // end launch tile
};
