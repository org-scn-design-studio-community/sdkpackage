/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.ThreePanelThingInspector.
jQuery.sap.declare("sap.suite.ui.commons.ThreePanelThingInspector");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.ux3.ThingInspector");


/**
 * Constructor for a new ThreePanelThingInspector.
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
 * <li>{@link #getShowHeader showHeader} : boolean (default: true)</li>
 * <li>{@link #getLogo logo} : sap.ui.core.URI</li>
 * <li>{@link #getSidebarWidth sidebarWidth} : sap.ui.core.CSSSize (default: '224px')</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.ux3.ThingInspector#constructor sap.ui.ux3.ThingInspector}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control extends the sap.ui.ux3.ThingInspector control. It displays the sap.suite.ui.commons.ThreePanelThingViewer control in the sap.ui.ux3.Overlay control.
 * @extends sap.ui.ux3.ThingInspector
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.ThreePanelThingInspector
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.ux3.ThingInspector.extend("sap.suite.ui.commons.ThreePanelThingInspector", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"showHeader" : {type : "boolean", group : "Misc", defaultValue : true},
		"logo" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"sidebarWidth" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : '224px'}
	},
	aggregations : {
		"menuContent" : {type : "sap.ui.commons.Link", multiple : true, singularName : "menuContent"}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.ThreePanelThingInspector with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.ThreePanelThingInspector.extend
 * @function
 */


/**
 * Getter for property <code>showHeader</code>.
 * Shows or hides a middle panel of the ThingViewer named Header that contains general information.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showHeader</code>
 * @public
 * @name sap.suite.ui.commons.ThreePanelThingInspector#getShowHeader
 * @function
 */

/**
 * Setter for property <code>showHeader</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowHeader  new value for property <code>showHeader</code>
 * @return {sap.suite.ui.commons.ThreePanelThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ThreePanelThingInspector#setShowHeader
 * @function
 */


/**
 * Getter for property <code>logo</code>.
 * A URL of the source of the ThingViewer's key visual image.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>logo</code>
 * @public
 * @name sap.suite.ui.commons.ThreePanelThingInspector#getLogo
 * @function
 */

/**
 * Setter for property <code>logo</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sLogo  new value for property <code>logo</code>
 * @return {sap.suite.ui.commons.ThreePanelThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ThreePanelThingInspector#setLogo
 * @function
 */


/**
 * Getter for property <code>sidebarWidth</code>.
 * The width of the ThingViewer's navigation panel.
 *
 * Default value is <code>224px</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>sidebarWidth</code>
 * @public
 * @name sap.suite.ui.commons.ThreePanelThingInspector#getSidebarWidth
 * @function
 */

/**
 * Setter for property <code>sidebarWidth</code>.
 *
 * Default value is <code>224px</code> 
 *
 * @param {sap.ui.core.CSSSize} sSidebarWidth  new value for property <code>sidebarWidth</code>
 * @return {sap.suite.ui.commons.ThreePanelThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ThreePanelThingInspector#setSidebarWidth
 * @function
 */


/**
 * Getter for aggregation <code>menuContent</code>.<br/>
 * The items of the ThingViewer's Action Menu.
 * 
 * @return {sap.ui.commons.Link[]}
 * @public
 * @name sap.suite.ui.commons.ThreePanelThingInspector#getMenuContent
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
 * @return {sap.suite.ui.commons.ThreePanelThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ThreePanelThingInspector#insertMenuContent
 * @function
 */

/**
 * Adds some menuContent <code>oMenuContent</code> 
 * to the aggregation named <code>menuContent</code>.
 *
 * @param {sap.ui.commons.Link}
 *            oMenuContent the menuContent to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.ThreePanelThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ThreePanelThingInspector#addMenuContent
 * @function
 */

/**
 * Removes an menuContent from the aggregation named <code>menuContent</code>.
 *
 * @param {int | string | sap.ui.commons.Link} vMenuContent the menuContent to remove or its index or id
 * @return {sap.ui.commons.Link} the removed menuContent or null
 * @public
 * @name sap.suite.ui.commons.ThreePanelThingInspector#removeMenuContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>menuContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.Link[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.ThreePanelThingInspector#removeAllMenuContent
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
 * @name sap.suite.ui.commons.ThreePanelThingInspector#indexOfMenuContent
 * @function
 */
	

/**
 * Destroys all the menuContent in the aggregation 
 * named <code>menuContent</code>.
 * @return {sap.suite.ui.commons.ThreePanelThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ThreePanelThingInspector#destroyMenuContent
 * @function
 */

// Start of sap/suite/ui/commons/ThreePanelThingInspector.js
jQuery.sap.require("sap.ui.ux3.ThingInspector");

sap.suite.ui.commons.ThreePanelThingInspector.prototype.init = function() {
    sap.ui.ux3.ThingInspector.prototype.init.apply(this);

    var that = this;
    this._oThingViewer.destroy();
    this._oThingViewer = new sap.suite.ui.commons.ThreePanelThingViewer(this.getId() + "-thingViewer");
    this.setAggregation("thingViewer", this._oThingViewer);

    this._oThingViewer.attachFacetSelected(function(oEvent) {
        var oItem = oEvent.getParameters().item;

        if (that.fireFacetSelected({ id: oItem.getId(), key: oItem.getKey(), item: oItem })) {
            that.setSelectedFacet(oItem);
        } else {
            oEvent.preventDefault();
        }
    });
};

sap.suite.ui.commons.ThreePanelThingInspector.prototype.setShowHeader = function(showHeader) {
    this._oThingViewer.setShowHeader(showHeader);
    return this;
};

sap.suite.ui.commons.ThreePanelThingInspector.prototype.getShowHeader = function() {
    this._oThingViewer.getShowHeader();
};

sap.suite.ui.commons.ThreePanelThingInspector.prototype.setLogo = function(oUri) {
    this._oThingViewer.setLogo(oUri);
    return this;
};

sap.suite.ui.commons.ThreePanelThingInspector.prototype.getLogo = function() {
    this._oThingViewer.getLogo();
};

sap.suite.ui.commons.ThreePanelThingInspector.prototype.getSidebarWidth = function() {
    this._oThingViewer.getSidebarWidth();
};

sap.suite.ui.commons.ThreePanelThingInspector.prototype.setSidebarWidth = function(oWidth) {
    this._oThingViewer.setSidebarWidth(oWidth);
    return this;
};

sap.suite.ui.commons.ThreePanelThingInspector.prototype.addMenuContent = function(oContent) {
    this._oThingViewer.addMenuContent(oContent);
    return this;
};

sap.suite.ui.commons.ThreePanelThingInspector.prototype.insertMenuContent = function(oContent, iIndex) {
    this._oThingViewer.insertMenuContent(oContent, iIndex);
    return this;
};

sap.suite.ui.commons.ThreePanelThingInspector.prototype.getMenuContent = function() {
    return this._oThingViewer.getMenuContent();
};

sap.suite.ui.commons.ThreePanelThingInspector.prototype.removeMenuContent = function(oContent) {
    return this._oThingViewer.removeMenuContent(oContent);
};

sap.suite.ui.commons.ThreePanelThingInspector.prototype.removeAllMenuContent = function() {
    return this._oThingViewer.removeAllMenuContent();
};

sap.suite.ui.commons.ThreePanelThingInspector.prototype.indexOfMenuContent = function(oContent) {
    return this._oThingViewer.indexOfMenuContent(oContent);
};

sap.suite.ui.commons.ThreePanelThingInspector.prototype.destroyMenuContent = function() {
    this._oThingViewer.destroyMenuContent();
    return this;
};
