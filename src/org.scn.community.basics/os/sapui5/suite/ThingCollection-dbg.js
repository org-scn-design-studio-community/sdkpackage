/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.ThingCollection.
jQuery.sap.declare("sap.suite.ui.commons.ThingCollection");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ThingCollection.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getMinWidth minWidth} : sap.ui.core.CSSSize</li>
 * <li>{@link #getMinHeight minHeight} : sap.ui.core.CSSSize</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.ux3.ThingViewer[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control contains a collection of the sap.ui.ux3.ThingViewer controls or descendants of sap.ui.ux3.ThingViewer. It allows you to navigate through them as well as delete them from the collection.
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.ThingCollection
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.ThingCollection", { metadata : {

	publicMethods : [
		// methods
		"shiftPrev", "shiftNext", "addNextContent"
	],
	library : "sap.suite.ui.commons",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : '100%'},
		"height" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : '100%'},
		"minWidth" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null},
		"minHeight" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null}
	},
	aggregations : {
		"content" : {type : "sap.ui.ux3.ThingViewer", multiple : true, singularName : "content"}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.ThingCollection with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.suite.ui.commons.ThingCollection.extend
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * The width of the control.
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.suite.ui.commons.ThingCollection#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.suite.ui.commons.ThingCollection} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ThingCollection#setWidth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * The height of the control.
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.suite.ui.commons.ThingCollection#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.suite.ui.commons.ThingCollection} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ThingCollection#setHeight
 * @function
 */


/**
 * Getter for property <code>minWidth</code>.
 * The minimal width of the control.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>minWidth</code>
 * @public
 * @name sap.suite.ui.commons.ThingCollection#getMinWidth
 * @function
 */

/**
 * Setter for property <code>minWidth</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sMinWidth  new value for property <code>minWidth</code>
 * @return {sap.suite.ui.commons.ThingCollection} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ThingCollection#setMinWidth
 * @function
 */


/**
 * Getter for property <code>minHeight</code>.
 * The minimal height of the control.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>minHeight</code>
 * @public
 * @name sap.suite.ui.commons.ThingCollection#getMinHeight
 * @function
 */

/**
 * Setter for property <code>minHeight</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sMinHeight  new value for property <code>minHeight</code>
 * @return {sap.suite.ui.commons.ThingCollection} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ThingCollection#setMinHeight
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * Contains a collection of sap.ui.ux3.ThingViewer controls or descendants of sap.ui.ux3.ThingViewer.
 * 
 * @return {sap.ui.ux3.ThingViewer[]}
 * @public
 * @name sap.suite.ui.commons.ThingCollection#getContent
 * @function
 */


/**
 * Inserts a content into the aggregation named <code>content</code>.
 *
 * @param {sap.ui.ux3.ThingViewer}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.ThingCollection} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ThingCollection#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.ux3.ThingViewer}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.ThingCollection} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ThingCollection#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.ux3.ThingViewer} vContent the content to remove or its index or id
 * @return {sap.ui.ux3.ThingViewer} the removed content or null
 * @public
 * @name sap.suite.ui.commons.ThingCollection#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ThingViewer[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.ThingCollection#removeAllContent
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.ux3.ThingViewer</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.ThingViewer}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.suite.ui.commons.ThingCollection#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.suite.ui.commons.ThingCollection} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ThingCollection#destroyContent
 * @function
 */


/**
 * Displays a previous item in the collection.
 *
 * @name sap.suite.ui.commons.ThingCollection#shiftPrev
 * @function
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


/**
 * Displays the next item in the collection.
 *
 * @name sap.suite.ui.commons.ThingCollection#shiftNext
 * @function
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


/**
 * Inserts an element into the next display position.
 *
 * @name sap.suite.ui.commons.ThingCollection#addNextContent
 * @function
 * @param {sap.ui.ux3.ThingViewer} oOContent
 *         An instance of ThingViewer or an instance of its descendant.
 * @type sap.suite.ui.commons.ThingCollection
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */

// Start of sap/suite/ui/commons/ThingCollection.js
///**
// * This file defines behavior for the control,
// */
sap.suite.ui.commons.ThingCollection.prototype.init = function() {
	this._iCenterNum = 0;
    this._bScrollDisabled = false;
    var that = this;
    this._rb = sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons");

    this._oRemoveButton = new sap.ui.commons.Link({
        id: this.getId() + "-remove-button",
        tooltip: this._rb.getText("THINGCOLLECTION_BUTTON_REMOVE_TOOLTIP"),
        press: function() {
            that._removeCenterContent();
        }
    });
    this._oRemoveButton.addStyleClass("sapUiUx3OverlayCloseButton");

    this._initTouchEvents();
};

sap.suite.ui.commons.ThingCollection.prototype.exit = function() {
	this._oRemoveButton.destroy();
};

sap.suite.ui.commons.ThingCollection.prototype.onBeforeRendering = function() {
    this._oCenterControl = this.getContent()[this._iCenterNum] || null;
};

sap.suite.ui.commons.ThingCollection.prototype.onAfterRendering = function() {
    var that = this;

    jQuery.sap.byId(this.getId() + "-nav-prev").bind("click", function() { that.shiftPrev(); });
    jQuery.sap.byId(this.getId() + "-nav-next").bind("click", function() { that.shiftNext(); });

    this._updateArrows();
    
    if(this.getContent().length <= 1) {
        this._hideRemoveButton();        
    }
    
    jQuery.sap.byId(this._oRemoveButton.getId()).attr("role", "button");
    jQuery.sap.byId(this._oRemoveButton.getId()).attr("aria-disabled", "false");
};

sap.suite.ui.commons.ThingCollection.prototype.addContent = function(oContent) {
    this.addAggregation("content", oContent, true);
    this._updateArrows();
    this._showRemoveButton();
    return this;
};

sap.suite.ui.commons.ThingCollection.prototype.addNextContent = function(oContent) {
    this.insertAggregation("content", oContent, this._iCenterNum + 1, true);
    this._updateArrows();
    this._showRemoveButton();
    return this;  		
};

sap.suite.ui.commons.ThingCollection.prototype.shiftPrev = function() {
    if (this._isShiftPrevForbidden()) {
        return;
    }

    var that = this;
    this._hideRemoveButton();
    this._bScrollDisabled = true;

    var sContainerId = "#" + this.getId() + "-container";
    var oPrevPanel = jQuery(sContainerId + ">.sapSuiteTcPrev");
    var oCenterPanel = jQuery(sContainerId + ">.sapSuiteTcCenter");
    var oNextPanel = jQuery(sContainerId + ">.sapSuiteTcNext");

    var oRm = sap.ui.getCore().createRenderManager();
    
    var sDirection = sap.ui.getCore().getConfiguration().getRTL() ? "right" : "left";
    this._iCenterNum--;
    var oDirection = {};
    oDirection[sDirection] = "+=110%";
    
    this._renderPrevPanel(oRm, this.getContent()[this._iCenterNum]);

    oCenterPanel.animate(oDirection, 800);

    oPrevPanel.animate(oDirection, 800, function() {
        oNextPanel.css(sDirection, "-110%");

        that._renderNextPanel(oRm);        // clear next panel
        oRm.destroy();

        that._bScrollDisabled = false;
        that._updateArrows();
        that._showRemoveButton();
        jQuery(sContainerId).focus();
        oCenterPanel.show();                // restore center panel if it was hidden on removing content
    });
    
    oPrevPanel.removeClass("sapSuiteTcPrev").addClass("sapSuiteTcCenter").attr("aria-hidden", "false");
    oCenterPanel.removeClass("sapSuiteTcCenter").addClass("sapSuiteTcNext").attr("aria-hidden", "true");
    oNextPanel.removeClass("sapSuiteTcNext").addClass("sapSuiteTcPrev");
};

sap.suite.ui.commons.ThingCollection.prototype.shiftNext = function() {
    if (this._isShiftNextForbidden()) {
        return;
    }

    var that = this;
    this._hideRemoveButton();
    this._bScrollDisabled = true;

    var sContainerId = "#" + this.getId() + "-container";
    var oPrevPanel = jQuery(sContainerId + ">.sapSuiteTcPrev");
    var oCenterPanel = jQuery(sContainerId + ">.sapSuiteTcCenter");
    var oNextPanel = jQuery(sContainerId + ">.sapSuiteTcNext");

    var oRm = sap.ui.getCore().createRenderManager();
    
    var sDirection = sap.ui.getCore().getConfiguration().getRTL() ? "right" : "left";
    this._iCenterNum++;
    
    var oDirection = {};
    oDirection[sDirection] = "-=110%";
    
    this._renderNextPanel(oRm, this.getContent()[this._iCenterNum]);

    oCenterPanel.animate(oDirection, 800);

    oNextPanel.animate(oDirection, 800, function() {
        oPrevPanel.css(sDirection, "110%");

        that._renderPrevPanel(oRm);     // clear previous panel
        oRm.destroy();

        that._bScrollDisabled = false;
        that._updateArrows();
        that._showRemoveButton();
        jQuery(sContainerId).focus();
        oCenterPanel.show();            // restore center panel if it was hidden on removing content
    });

    oPrevPanel.removeClass("sapSuiteTcPrev").addClass("sapSuiteTcNext");
    oCenterPanel.removeClass("sapSuiteTcCenter").addClass("sapSuiteTcPrev").attr("aria-hidden", "true");
    oNextPanel.removeClass("sapSuiteTcNext").addClass("sapSuiteTcCenter").attr("aria-hidden", "false");
};

sap.suite.ui.commons.ThingCollection.prototype.onsapprevious = function(oEvent) {
    this.shiftPrev();
    oEvent.preventDefault();
};

sap.suite.ui.commons.ThingCollection.prototype.onsapnext = function(oEvent) {
    this.shiftNext();
    oEvent.preventDefault();
};

sap.suite.ui.commons.ThingCollection.prototype._initTouchEvents = function() {
    if (jQuery.sap.touchEventMode != "OFF") {
        var that = this;

        this.onswipeleft = function(oEvent) {
            oEvent.preventDefault();
            that.shiftNext();
        };
        this.onswiperight = function(oEvent) {
            oEvent.preventDefault();
            that.shiftPrev();
        };
    }
};

sap.suite.ui.commons.ThingCollection.prototype._removeCenterContent = function() {
    this._hideRemoveButton();           // hide remove button immediately to prevent double click
    this.removeAggregation("content", this.getContent()[this._iCenterNum], true);

    var that = this;
    var iContentLength = this.getContent().length;

    var oCenterPanel = jQuery("#" + this.getId() + "-container>.sapSuiteTcCenter");
    oCenterPanel.hide(600);

    if (that._iCenterNum >= iContentLength) {
        that._iCenterNum = iContentLength;
        that.shiftPrev();
    } else {
        that._iCenterNum -= 1;
        that.shiftNext();
    }
};

sap.suite.ui.commons.ThingCollection.prototype._showRemoveButton = function() {
    if (this.getContent().length > 1) {
        jQuery.sap.byId(this.getId() + "-remove-button").show();
    }
};

sap.suite.ui.commons.ThingCollection.prototype._hideRemoveButton = function() {
    jQuery.sap.byId(this.getId() + "-remove-button").hide();
};

sap.suite.ui.commons.ThingCollection.prototype._updateArrows = function() {
    var oNavPrev = jQuery.sap.byId(this.getId() + "-nav-prev");
    var oNavNext = jQuery.sap.byId(this.getId() + "-nav-next");
    var sPrevTooltip = "";
    var sNextTooltip = "";

	if (this._isShiftPrevForbidden()) {
        oNavPrev.removeClass("sapSuiteTcNavPrevArrow");
    } else {
        oNavPrev.addClass("sapSuiteTcNavPrevArrow");
        sPrevTooltip = this._rb.getText("THINGCOLLECTION_BUTTON_PREVIOUS_TOOLTIP");
    }
	oNavPrev.attr("title", sPrevTooltip);
	
    if (this._isShiftNextForbidden()) {
        oNavNext.removeClass("sapSuiteTcNavNextArrow");
    } else {
        oNavNext.addClass("sapSuiteTcNavNextArrow");
        sNextTooltip = this._rb.getText("THINGCOLLECTION_BUTTON_NEXT_TOOLTIP");
    }
    oNavNext.attr("title", sNextTooltip);
};

sap.suite.ui.commons.ThingCollection.prototype._isShiftPrevForbidden = function() {
	return this._bScrollDisabled || (this._iCenterNum <= 0);
};

sap.suite.ui.commons.ThingCollection.prototype._isShiftNextForbidden = function() {
	return this._bScrollDisabled || (this._iCenterNum >= this.getContent().length - 1);
};

sap.suite.ui.commons.ThingCollection.prototype._renderPrevPanel = function(oRm, oControl) {
	this._renderPanel(oRm, oControl, true);
};

sap.suite.ui.commons.ThingCollection.prototype._renderNextPanel = function(oRm, oControl) {
	this._renderPanel(oRm, oControl, false);
};

sap.suite.ui.commons.ThingCollection.prototype._renderPanel = function(oRm, oControl, bLeft) {
    var sPanelSelector = "#" + this.getId() + "-container>" + (bLeft ? ".sapSuiteTcPrev" : ".sapSuiteTcNext");
    var oPanel = jQuery(sPanelSelector);

    if (oPanel.length > 0) {

        if (oControl) {
            oRm.renderControl(oControl);
        } else {
            oRm.write("");
        }

        oRm.flush(oPanel[0]);
    }
};
