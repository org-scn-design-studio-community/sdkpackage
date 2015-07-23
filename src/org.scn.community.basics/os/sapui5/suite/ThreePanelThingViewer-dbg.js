/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.ThreePanelThingViewer.
jQuery.sap.declare("sap.suite.ui.commons.ThreePanelThingViewer");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.ux3.ThingViewer");


/**
 * Constructor for a new ThreePanelThingViewer.
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
 * <li>{@link #getLogo logo} : sap.ui.core.URI</li>
 * <li>{@link #getShowHeader showHeader} : boolean</li>
 * <li>{@link #getSidebarWidth sidebarWidth} : sap.ui.core.CSSSize (default: '244px')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getMenuContent menuContent} : sap.ui.commons.Link[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.ux3.ThingViewer#constructor sap.ui.ux3.ThingViewer}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control extends the sap.ui.ux3.ThingViewer control. The first panel can display a thing icon, a title, the Action Menu button, up to two rows of text descriptions (the first is wrapped, the second is truncated), vertical navigation bar (sap.suite.ui.commons.VerticalNavigationBar), and an image aka key visual. The second panel displays the header area as a vertical panel containing ThingGroup objects. The third panel is a main content area designed to display ThingGroup objects.
 * @extends sap.ui.ux3.ThingViewer
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.ThreePanelThingViewer
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.ux3.ThingViewer.extend("sap.suite.ui.commons.ThreePanelThingViewer", { metadata : {

	publicMethods : [
		// methods
		"selectDefaultFacet"
	],
	library : "sap.suite.ui.commons",
	properties : {
		"logo" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"showHeader" : {type : "boolean", group : "Misc", defaultValue : null},
		"sidebarWidth" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : '244px'}
	},
	aggregations : {
		"menuContent" : {type : "sap.ui.commons.Link", multiple : true, singularName : "menuContent"}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.ThreePanelThingViewer with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.ThreePanelThingViewer.extend
 * @function
 */


/**
 * Getter for property <code>logo</code>.
 * A URL of the source of an image known as key visual. This can be a company logo or other essential graphics.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>logo</code>
 * @public
 * @name sap.suite.ui.commons.ThreePanelThingViewer#getLogo
 * @function
 */

/**
 * Setter for property <code>logo</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sLogo  new value for property <code>logo</code>
 * @return {sap.suite.ui.commons.ThreePanelThingViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ThreePanelThingViewer#setLogo
 * @function
 */


/**
 * Getter for property <code>showHeader</code>.
 * Shows or hides a middle panel named Header that contains general information.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>showHeader</code>
 * @public
 * @name sap.suite.ui.commons.ThreePanelThingViewer#getShowHeader
 * @function
 */

/**
 * Setter for property <code>showHeader</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bShowHeader  new value for property <code>showHeader</code>
 * @return {sap.suite.ui.commons.ThreePanelThingViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ThreePanelThingViewer#setShowHeader
 * @function
 */


/**
 * Getter for property <code>sidebarWidth</code>.
 * The width of the first panel that contains thing's title, icon, key visual and navigation bar. The default value is "244px".
 *
 * Default value is <code>244px</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>sidebarWidth</code>
 * @public
 * @name sap.suite.ui.commons.ThreePanelThingViewer#getSidebarWidth
 * @function
 */

/**
 * Setter for property <code>sidebarWidth</code>.
 *
 * Default value is <code>244px</code> 
 *
 * @param {sap.ui.core.CSSSize} sSidebarWidth  new value for property <code>sidebarWidth</code>
 * @return {sap.suite.ui.commons.ThreePanelThingViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ThreePanelThingViewer#setSidebarWidth
 * @function
 */


/**
 * Getter for aggregation <code>menuContent</code>.<br/>
 * This aggregation allows you to add sap.ui.commons.Link items to the Action Menu. The menu appears as a popup when a user chooses a button in the top title section of the navigation panel.
 * 
 * @return {sap.ui.commons.Link[]}
 * @public
 * @name sap.suite.ui.commons.ThreePanelThingViewer#getMenuContent
 * @function
 */


/**
 * Inserts a menuContent into the aggregation named <code>menuContent</code>.
 *
 * @param {sap.ui.commons.Link}
 *          oMenuContent the menuContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the menuContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the menuContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the menuContent is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.ThreePanelThingViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ThreePanelThingViewer#insertMenuContent
 * @function
 */

/**
 * Adds some menuContent <code>oMenuContent</code> 
 * to the aggregation named <code>menuContent</code>.
 *
 * @param {sap.ui.commons.Link}
 *            oMenuContent the menuContent to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.ThreePanelThingViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ThreePanelThingViewer#addMenuContent
 * @function
 */

/**
 * Removes an menuContent from the aggregation named <code>menuContent</code>.
 *
 * @param {int | string | sap.ui.commons.Link} vMenuContent the menuContent to remove or its index or id
 * @return {sap.ui.commons.Link} the removed menuContent or null
 * @public
 * @name sap.suite.ui.commons.ThreePanelThingViewer#removeMenuContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>menuContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.Link[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.ThreePanelThingViewer#removeAllMenuContent
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.commons.Link</code> in the aggregation named <code>menuContent</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.Link}
 *            oMenuContent the menuContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.suite.ui.commons.ThreePanelThingViewer#indexOfMenuContent
 * @function
 */
	

/**
 * Destroys all the menuContent in the aggregation 
 * named <code>menuContent</code>.
 * @return {sap.suite.ui.commons.ThreePanelThingViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ThreePanelThingViewer#destroyMenuContent
 * @function
 */


/**
 * Marks the first facet(navigation item) as selected if no facets selected and fires facetSelected event.
 *
 * @name sap.suite.ui.commons.ThreePanelThingViewer#selectDefaultFacet
 * @function
 * @type sap.suite.ui.commons.ThreePanelThingViewer
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */

// Start of sap/suite/ui/commons/ThreePanelThingViewer.js
jQuery.sap.require("sap.suite.ui.commons.VerticalNavigationBar");
jQuery.sap.require("sap.ui.ux3.NavigationBar");
jQuery.sap.require("sap.ui.ux3.ThingViewer");
///*
// * This file defines behavior for the control,
// */
sap.suite.ui.commons.ThreePanelThingViewer.prototype.init = function() {
    var that = this;
    this._rb = sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons");
    this._oNavBar = new sap.suite.ui.commons.VerticalNavigationBar();
    this.setAggregation("navBar",this._oNavBar);

    this._oNavBar.attachSelect(function(oControlEvent) {
        var item = oControlEvent.getParameters().item;
        if (that.fireFacetSelected({id: item.getId(), key: item.getKey(), item: item})) {
            that.setSelectedFacet(item);
        } else {
            oControlEvent.preventDefault();
        }
    });

    this._iSelectedMenuItem = 0;
    this._oMenuButton = new sap.ui.commons.Button({
        id: this.getId() + "-menu-button",
        tooltip: this._rb.getText("THREEPANELTHINGVIEWER_BUTTON_MENU_TOOLTIP"),
        lite: true,
        press: function() {
            that._toggleMenuPopup();
        }
    });
    this._oMenuButton.addStyleClass("sapSuiteTvTitleMb");
    this.fAnyEventHandlerProxy = jQuery.proxy(this.onAnyEvent, this);
};

sap.suite.ui.commons.ThreePanelThingViewer.prototype.exit = function() {
    this._oMenuButton.destroy();
    jQuery.sap.unbindAnyEvent(this.fAnyEventHandlerProxy);
};

sap.suite.ui.commons.ThreePanelThingViewer.prototype.onAfterRendering = function() {
    this._bMenuOpened = false;
    this._updateMenuPopup();
    this._toggleHeaderContent();
};

sap.suite.ui.commons.ThreePanelThingViewer.prototype.selectDefaultFacet = function() {
    this._selectDefault();
    return this;
};

sap.suite.ui.commons.ThreePanelThingViewer.prototype._toggleMenuPopup = function() {
    jQuery.sap.byId(this.getId() + "-menu-popup").toggle();
    this._bMenuOpened = !this._bMenuOpened;

    if (this._bMenuOpened) {
        jQuery.sap.bindAnyEvent(this.fAnyEventHandlerProxy);
        this.getMenuContent()[0].focus();
        this._iSelectedMenuItem = 0;
    } else {
        jQuery.sap.unbindAnyEvent(this.fAnyEventHandlerProxy);
    }
};

sap.suite.ui.commons.ThreePanelThingViewer.prototype._updateMenuPopup = function() {
    var iHeaderWidth = jQuery.sap.byId(this.getId() + "-header").width();
    var oMenuPopup = jQuery.sap.byId(this.getId() + "-menu-popup");
    var sStyle = sap.ui.getCore().getConfiguration().getRTL() ? "right":"left";
    var iSize = this.getMenuContent().length;

    oMenuPopup.css(sStyle, (iHeaderWidth - 22) + "px");
    oMenuPopup.children().each(function (index) {
        var $this = jQuery(this);
        $this.attr("tabindex", "-1");
        $this.attr("role", "menuitem");
        $this.attr("aria-posinset", index+1);
        $this.attr("aria-setsize", iSize);
    });
};

sap.suite.ui.commons.ThreePanelThingViewer.prototype._rerenderFacetContent = function() {
    var $content = jQuery.sap.byId(this.getId() + "-facetContent");
    if ($content.length > 0) {
        var oRm = sap.ui.getCore().createRenderManager();
        sap.suite.ui.commons.ThreePanelThingViewerRenderer.renderFacetContent(oRm, this);
        oRm.flush($content[0]);
        oRm.destroy();
        this._resize = false;
        this._setTriggerValue();
        this._onresize();
    }
};

sap.suite.ui.commons.ThreePanelThingViewer.prototype._rerenderHeader = function() {
	var $content = jQuery.sap.byId(this.getId() + "-header");
	if ($content.length > 0) {
		var oRm = sap.ui.getCore().createRenderManager();
		sap.suite.ui.commons.ThreePanelThingViewerRenderer.renderHeader(oRm, this);
        oRm.flush($content[0]);
        oRm.destroy();
	}
};

sap.suite.ui.commons.ThreePanelThingViewer.prototype._rerenderHeaderContent = function() {
    var $content = jQuery.sap.byId(this.getId() + "-headerContent");
    if ($content.length > 0) {
        var oRm = sap.ui.getCore().createRenderManager();
        sap.suite.ui.commons.ThreePanelThingViewerRenderer.renderHeaderContent(oRm, this);
        oRm.flush($content[0]);
        oRm.destroy();
    }
};

sap.suite.ui.commons.ThreePanelThingViewer.prototype._toggleHeaderContent = function() {
    var oContent = jQuery.sap.byId(this.getId() + "-headerContent");
    if (this.getShowHeader()) {
        oContent.show();
    } else {
        oContent.hide();
    }
};

sap.suite.ui.commons.ThreePanelThingViewer.prototype.onAnyEvent = function(oEvent) {
    if (this._bMenuOpened && (oEvent.type == "mousedown" || oEvent.type == "focusin")) {
        var oSource = oEvent.target;
        var oDomRef = jQuery.sap.domById(this.getId() + "-menu-popup");

        if (!jQuery.sap.containsOrEquals(oDomRef, oSource) || oSource.tagName == "BODY") {
            this._toggleMenuPopup();
        }
    }
};

sap.suite.ui.commons.ThreePanelThingViewer.prototype.onsapescape = function() {
    if (this._bMenuOpened) {
        this._toggleMenuPopup();
        this._oMenuButton.focus();
    }
};

sap.suite.ui.commons.ThreePanelThingViewer.prototype.onsapnext = function(oEvent) {
    if (this._bMenuOpened) {
        var aMenuContent = this.getMenuContent();
        this._iSelectedMenuItem++;

        if (this._iSelectedMenuItem >= aMenuContent.length) {
            this._iSelectedMenuItem = 0;
        }

        aMenuContent[this._iSelectedMenuItem].focus();
        oEvent.preventDefault();
        oEvent.stopPropagation();
    }
};

sap.suite.ui.commons.ThreePanelThingViewer.prototype.onsapprevious = function(oEvent) {
    if (this._bMenuOpened) {
        var aMenuContent = this.getMenuContent();
        this._iSelectedMenuItem--;

        if (this._iSelectedMenuItem < 0) {
            this._iSelectedMenuItem = aMenuContent.length - 1;
        }

        aMenuContent[this._iSelectedMenuItem].focus();
        oEvent.preventDefault();
        oEvent.stopPropagation();
    }
};

sap.suite.ui.commons.ThreePanelThingViewer.prototype.setShowHeader = function(bShowHeader) {
    this.setProperty("showHeader", bShowHeader, true);
    this._toggleHeaderContent();
    return this;
};
