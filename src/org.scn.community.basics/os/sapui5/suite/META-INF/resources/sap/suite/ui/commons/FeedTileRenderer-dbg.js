// @copyright 

jQuery.sap.declare("sap.suite.ui.commons.FeedTileRenderer");

jQuery.sap.require("sap.suite.ui.commons.util.FeedItemUtils");

/**
 * @class FeedTile renderer.
 * @static
 */
sap.suite.ui.commons.FeedTileRenderer = {};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager}
 *            oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control}
 *            oFeedTile an object representation of the control that should be rendered
 */
sap.suite.ui.commons.FeedTileRenderer.render = function(oRm, oFeedTile) {

	var oLocale = sap.ui.getCore().getConfiguration().getLanguage();
	var oResBundle = sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons", oLocale);

	var oCurrentItem = oFeedTile.getCurrentItem();		

	oRm.write("<div");
	oRm.writeControlData(oFeedTile);
	oRm.writeAttribute("tabindex", "0");
	oRm.addClass("sapSuiteUiCommonsFeedTile");
	oRm.addClass("sapSuiteUiCommonsPointer");
	oRm.writeClasses();

	var sFeedTileTitle = "";
	if (oFeedTile.getTooltip_AsString()) {
		oRm.writeAttributeEscaped("title", oFeedTile.getTooltip_AsString());
		sFeedTileTitle = oFeedTile.getTooltip_AsString();
	}
	
	var sNewsItemTitle = "";
	if(oCurrentItem){
		sNewsItemTitle = oCurrentItem.getTitle();
	}
	
	oRm.writeAccessibilityState(oFeedTile, {
		role : 'link',		
		label : sFeedTileTitle + " " + sNewsItemTitle	
	});

	oRm.write(">");

	if (oCurrentItem) {
		sap.suite.ui.commons.FeedTileRenderer.renderFeedItem(oRm, oFeedTile, oCurrentItem, oFeedTile.getId());
		var oNextItem = oFeedTile.getNextItem();
		if (oNextItem) {
			sap.suite.ui.commons.FeedTileRenderer.renderFeedItem(oRm, oFeedTile, oNextItem, oFeedTile.getId() + '-next', true);
		}
	} else { // This is a condition when no feed items exist. Add a title that displays the condition & also render the defaultImage

		var oBackgroundImage = oFeedTile.getDefaultImage();

		if (oBackgroundImage) {
			oRm.write('<div id="' + oFeedTile.getId() + '-feedTileImage"');
			oRm.write(" style='background-image:url(");
			oRm.writeEscaped(oBackgroundImage);
			oRm.write(");'");
			oRm.addClass("sapSuiteUiCommonsFeedTileBackground");
			oRm.writeClasses();
			oRm.write(">");
		}

		var sTitle = oResBundle.getText("FEEDTILE_NOARTICLE_TITLE"); // "No articles to display";

		oRm.write('<div id="' + oFeedTile.getId() + '-feedTileText"');
		oRm.addClass("sapSuiteUiCommonsFeedTileText");
		oRm.writeClasses();
		oRm.write(">");
		oRm.write('<div id="' + oFeedTile.getId() + '-feedTileTitle"');
		oRm.addClass("sapSuiteUiCommonsFeedTileTitle");
		oRm.writeClasses();
		oRm.write(">");
		oRm.writeEscaped(sTitle);
		oRm.write("</div>");
		oRm.write("</div>"); // sapSuiteUiCommonsFeedTileText
		if (oBackgroundImage) {
			oRm.write("</div>"); // sapSuiteUiCommonsFeedTileBackground
		}
	}

	oRm.write("</div>"); // sapSuiteUiCommonsFeedTile
};

sap.suite.ui.commons.FeedTileRenderer.renderFeedItem = function(oRm, oFeedTile, oFeedItem, itemId, hidden) {

	var oBackgroundImage = oFeedItem.getImage();
	if (!oBackgroundImage || !oFeedTile.getDisplayArticleImage()) {
		oBackgroundImage = oFeedTile.getDefaultImage();
	}

	if (oBackgroundImage) {
		oRm.write('<div id="' + itemId + '-feedTileImage"');
		oRm.write(" style='background-image:url(");
		oRm.writeEscaped(oBackgroundImage);
		oRm.write(");'");
		oRm.addClass("sapSuiteUiCommonsFeedTileBackground");
		if (hidden) {
			oRm.addClass("sapSuiteFTItemHidden");
		}
		oRm.writeClasses();
		oRm.write(">");
	}

	oRm.write('<div id="' + itemId + '-feedTileText"');
	oRm.addClass("sapSuiteUiCommonsFeedTileText");
	oRm.writeClasses();
	oRm.write(">");

	var sTitle = oFeedItem.getTitle();
	if (sTitle) {
		oRm.write('<div id="' + itemId + '-feedTileTitle"');		
		oRm.addClass("sapSuiteUiCommonsFeedTileTitle");
		oRm.writeClasses();
		oRm.write(">");
		oRm.writeEscaped(sTitle);
		oRm.write("</div>");

		oRm.write("<div");
		oRm.addClass("sapSuiteUiCommonsFeedTileLowerText");
		oRm.writeClasses();
		oRm.write(">");

		oRm.write('<div id="' + itemId + '-feedTileSource"');
		oRm.addClass("sapSuiteUiCommonsFeedTileSource");
		oRm.writeClasses();
		oRm.write(">");
		oRm.writeEscaped(oFeedItem.getSource());
		oRm.write("</div>");

		oRm.write('<div id="' + itemId + '-feedTileAge"');
		oRm.addClass("sapSuiteUiCommonsFeedTileAge");
		oRm.writeClasses();
		oRm.write(">");
		oRm.writeEscaped(sap.suite.ui.commons.util.FeedItemUtils.calculateFeedItemAge(oFeedItem.getPublicationDate()));
		oRm.write("</div>");
		oRm.write("</div>");
	}
	oRm.write("</div>"); // sapSuiteUiCommonsFeedTileText
	oRm.write("</div>"); // sapSuiteUiCommonsFeedTileBackground

};
