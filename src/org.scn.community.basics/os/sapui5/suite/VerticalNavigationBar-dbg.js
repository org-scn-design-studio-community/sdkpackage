/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.VerticalNavigationBar.
jQuery.sap.declare("sap.suite.ui.commons.VerticalNavigationBar");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.ux3.NavigationBar");


/**
 * Constructor for a new VerticalNavigationBar.
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
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.ux3.NavigationBar#constructor sap.ui.ux3.NavigationBar}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control extends the sap.ui.ux3.NavigationBar and allows you to display navigation items vertically. The navigation list can contain sap.ui.ux3.NavigationItem or sap.suite.ui.commons.CountingNavigationItem controls.
 * @extends sap.ui.ux3.NavigationBar
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.VerticalNavigationBar
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.ux3.NavigationBar.extend("sap.suite.ui.commons.VerticalNavigationBar", { metadata : {

	library : "sap.suite.ui.commons"
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.VerticalNavigationBar with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.VerticalNavigationBar.extend
 * @function
 */

// Start of sap/suite/ui/commons/VerticalNavigationBar.js
///**
// * This file defines behavior for the control,
// */
//sap.suite.ui.commons.VerticalNavigationBar.prototype.init = function(){
//   // do something for initialization...
//};

sap.suite.ui.commons.VerticalNavigationBar.prototype._handleActivation = function(oEvent) {
    // add forwarding to parent since IE doesn't support 'pointer-events:none;'
    if (oEvent.target.tagName == "SPAN") {
        oEvent.target = oEvent.target.parentElement;
    }
    sap.ui.ux3.NavigationBar.prototype._handleActivation.call(this, oEvent);
};

sap.suite.ui.commons.VerticalNavigationBar.prototype.onAfterRendering = function() {
	sap.ui.ux3.NavigationBar.prototype.onAfterRendering.apply(this);
	
	if (!this._oBarItemsMap) {
		this._oBarItemsMap = {};
	}

	var that = this;
	
	jQuery(".sapSuiteTvNavBarItemLink").mousemove(function() {
        that._showTooltip(jQuery(this).attr("id"));
    }).mouseleave(function(oEvent) {
        that._hideTooltip(jQuery(this).attr("id"));
    });
};

sap.suite.ui.commons.VerticalNavigationBar.prototype.exit = function() {
	this._oBarItemsMap = null;
	sap.ui.ux3.NavigationBar.prototype.exit.apply(this);
};

sap.suite.ui.commons.VerticalNavigationBar.prototype._handleScroll = function() {
};

sap.suite.ui.commons.VerticalNavigationBar.prototype._showTooltip = function(sTargetId) {
    var oItem = this._oBarItemsMap[sTargetId];
    if (!oItem) {
    	oItem = sap.ui.getCore().byId(sTargetId);
    	
    	if (oItem) {
	    	this._oBarItemsMap[sTargetId] = oItem;
	    	
	        var oTooltip = new sap.ui.commons.RichTooltip({
	            text : oItem.getTooltip_AsString() || oItem.getText()
	        });
	
	        oTooltip.addStyleClass("sapSuiteTvNavBarItemTltp");

	        oTooltip._currentControl = oItem;
	        oItem.addDelegate(oTooltip);
	        oItem.setAggregation("tooltip", oTooltip, true);
    	}
    }
    
    if (oItem && !oItem.doOpen) {
    	oItem.doOpen = true;
        oItem.openTimer = setTimeout(function() {
                oItem.getTooltip().openPopup(oItem);
                
                oItem.closeTimer = setTimeout(function() {
                    oItem.getTooltip().closePopup();
                    oItem.doOpen = false;
                }, 10000);
        }, 2000);
    }
};

sap.suite.ui.commons.VerticalNavigationBar.prototype._hideTooltip = function(sTargetId) {
    var oItem = this._oBarItemsMap[sTargetId];
    if (oItem) {
    	oItem.doOpen = false;
    	clearTimeout(oItem.openTimer);
    	clearTimeout(oItem.closeTimer);
        oItem.getTooltip().closePopup();
    }
};