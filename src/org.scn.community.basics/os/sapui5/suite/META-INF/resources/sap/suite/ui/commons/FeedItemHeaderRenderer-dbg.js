// @copyright 

jQuery.sap.declare("sap.suite.ui.commons.FeedItemHeaderRenderer");

jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.m.ListItemBaseRenderer");
jQuery.sap.require("sap.suite.ui.commons.util.FeedItemUtils");

/**
 * @class FeedItemHeader renderer.
 * @static
 */
sap.suite.ui.commons.FeedItemHeaderRenderer = sap.ui.core.Renderer
        .extend(sap.m.ListItemBaseRenderer);

/**
 * Overrides the List Content Rendering to suit FeedItemHeader style
 * 
 * @param {sap.ui.core.RenderManager}
 *                oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control}
 *                oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.FeedItemHeaderRenderer.renderLIContent = function(oRm,
        oFeedItemHeader) {
        
    // Change to display multiple columns on FeedItem.
    // Multi-column display for <div> elements is supported in Chrome, Safari and Firefox. Not supported in I.E 9 and lower versions. The current 
    // style will apply in those browsers.

    var multiColumnSupported = true;    
    if (jQuery.browser.msie && jQuery.browser.version.substring(0,2) < 10) {
    	multiColumnSupported = false;
    }

    // write the HTML into the render manager
    oRm.write("<div");
    oRm.writeControlData(oFeedItemHeader);
    oRm.addClass("sapSuiteUiCommonsFeedItemHeader");
    oRm.addClass("sapSuiteUiCommonsPointer");
    oRm.writeClasses();
    oRm.write(">");

	    oRm.write('<div id="' + oFeedItemHeader.getId() + '-feedItemHeaderImage"');
	    oRm.write(" style='background-image:url(");
	    oRm.writeEscaped(oFeedItemHeader.getImage());
	    oRm.write(");'");
	    oRm.addClass("sapSuiteUiCommonsFeedItemHeaderImage");
	    oRm.writeClasses();
	    oRm.write(">");
		       oRm.write("<div");
			    oRm.addClass("sapSuiteUiCommonsFeedItemHeaderLowerText");
			    oRm.writeClasses();
			    oRm.write(">");
				    oRm.write('<div id="' + oFeedItemHeader.getId() + '-feedItemHeaderSource"');
				    oRm.addClass("sapSuiteUiCommonsFeedItemHeaderSource");
				    oRm.writeClasses();
				    oRm.writeAttribute("tabindex", 0);
				    oRm.write(">");
				    oRm.writeEscaped(oFeedItemHeader.getSource());
				    oRm.write("</div>");
				    
				    oRm.write('<div id="' + oFeedItemHeader.getId() + '-feedItemHeaderAge"');
				    oRm.addClass("sapSuiteUiCommonsFeedItemHeaderAge");
				    oRm.writeClasses();
				    oRm.writeAttribute("tabindex", 0);
				    oRm.write(">");
				    oRm.writeEscaped(sap.suite.ui.commons.util.FeedItemUtils
				            .calculateFeedItemAge(oFeedItemHeader.getPublicationDate()));
				    oRm.write("</div>");
				oRm.write("</div>");
		oRm.write("</div>");

	    oRm.write("<div");
	    oRm.addClass("sapSuiteUiCommonsFeedItemHeaderText");
	    oRm.writeClasses();
	    oRm.write(">");    

		    oRm.write('<div id="' + oFeedItemHeader.getId() + '-feedItemHeaderTitleAndDesc"');
		    oRm.addClass("sapSuiteUiCommonsFeedItemHeaderDescription");
		    if (multiColumnSupported) {
		    	oRm.addClass("sapSuiteUiCommonsFeedItemHeaderDescriptionMultiCol");
		    }
		    oRm.writeClasses();
		    oRm.write(">");
    
			    oRm.write('<div id="' + oFeedItemHeader.getId() + '-feedItemHeaderTitle"');
			    oRm.addClass("sapSuiteUiCommonsFeedItemHeaderTitle");
			    if (multiColumnSupported) {
			    	oRm.addClass("sapSuiteUiCommonsFeedItemHeaderTitleMultiCol");
			    }
			    oRm.writeClasses();
			    oRm.writeAttribute("tabindex", 0);
			    oRm.write(">");
			    oRm.writeEscaped(oFeedItemHeader.getTitle());
			    oRm.write("</div>");
			    
			    oRm.write('<div id="' + oFeedItemHeader.getId() + '-feedItemHeaderDesc"');
				    oRm.addClass("sapSuiteUiCommonsFeedItemHeaderHeight");
				    oRm.writeClasses();
				    oRm.writeAttribute("tabindex", 0);
				    oRm.write(">");
				    var htmlControl = oFeedItemHeader._getHtmlControl();
					//The HTML control will only render content inside of html tags, so you can't just set plain text for the content without
					//wrapping in an html tag.	
				    htmlControl.setContent('<div>' + oFeedItemHeader.getDescription() +  '</div>');
				    oRm.renderControl(htmlControl);
			    oRm.write("</div>");
		oRm.write("</div>");
 
    oRm.write("</div>"); // FeedItemHeader control
};
