/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.FacetOverview.
jQuery.sap.declare("sap.suite.ui.commons.FacetOverview");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new FacetOverview.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getQuantity quantity} : int (default: -1)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 'auto')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '10rem')</li>
 * <li>{@link #getRowSpan rowSpan} : int (default: 1)</li>
 * <li>{@link #getHeightType heightType} : sap.suite.ui.commons.FacetOverviewHeight (default: sap.suite.ui.commons.FacetOverviewHeight.None)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.FacetOverview#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.FacetOverview#event:heightChange heightChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control is used in UnifiedThingInspector to display the preview of the facet content.
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.FacetOverview
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.FacetOverview", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"quantity" : {type : "int", group : "Misc", defaultValue : -1},
		"width" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : 'auto'},
		"height" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : '10rem', deprecated: true},
		"rowSpan" : {type : "int", group : "Misc", defaultValue : 1, deprecated: true},
		"heightType" : {type : "sap.suite.ui.commons.FacetOverviewHeight", group : "Misc", defaultValue : sap.suite.ui.commons.FacetOverviewHeight.None}
	},
	aggregations : {
		"content" : {type : "sap.ui.core.Control", multiple : false}
	},
	events : {
		"press" : {}, 
		"heightChange" : {}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.FacetOverview with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.FacetOverview.extend
 * @function
 */

sap.suite.ui.commons.FacetOverview.M_EVENTS = {'press':'press','heightChange':'heightChange'};


/**
 * Getter for property <code>title</code>.
 * This property is shown in the upper left part of control.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.suite.ui.commons.FacetOverview#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.FacetOverview} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FacetOverview#setTitle
 * @function
 */


/**
 * Getter for property <code>quantity</code>.
 * Displays a label with the number of items in the right part of the control.
 *
 * Default value is <code>-1</code>
 *
 * @return {int} the value of property <code>quantity</code>
 * @public
 * @name sap.suite.ui.commons.FacetOverview#getQuantity
 * @function
 */

/**
 * Setter for property <code>quantity</code>.
 *
 * Default value is <code>-1</code> 
 *
 * @param {int} iQuantity  new value for property <code>quantity</code>
 * @return {sap.suite.ui.commons.FacetOverview} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FacetOverview#setQuantity
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Defines the width of the control. By default, the value is empty and the control inhertis the size from its content.
 *
 * Default value is <code>auto</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.suite.ui.commons.FacetOverview#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>auto</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.suite.ui.commons.FacetOverview} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FacetOverview#setWidth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * Defines the height of the control only if the heightType prperty is set to None. Must be set in rems for the correct work in the UnifiedThingInspector.
 *
 * Default value is <code>10rem</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @deprecated Since version 1.17.1. 
 * This property was replaced by heightType property.
 * @name sap.suite.ui.commons.FacetOverview#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>10rem</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.suite.ui.commons.FacetOverview} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.17.1. 
 * This property was replaced by heightType property.
 * @name sap.suite.ui.commons.FacetOverview#setHeight
 * @function
 */


/**
 * Getter for property <code>rowSpan</code>.
 * Defines the number of rows that the control represents in an external layout.
 *
 * Default value is <code>1</code>
 *
 * @return {int} the value of property <code>rowSpan</code>
 * @public
 * @deprecated Since version 1.17.1. 
 * It is not used any more for the laoyut calculations in UnifiedThingInspector.
 * @name sap.suite.ui.commons.FacetOverview#getRowSpan
 * @function
 */

/**
 * Setter for property <code>rowSpan</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {int} iRowSpan  new value for property <code>rowSpan</code>
 * @return {sap.suite.ui.commons.FacetOverview} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.17.1. 
 * It is not used any more for the laoyut calculations in UnifiedThingInspector.
 * @name sap.suite.ui.commons.FacetOverview#setRowSpan
 * @function
 */


/**
 * Getter for property <code>heightType</code>.
 * Indicates the height of the control in the predifened values. If set to None, then the height is defined by the depricated height property.
 *
 * Default value is <code>None</code>
 *
 * @return {sap.suite.ui.commons.FacetOverviewHeight} the value of property <code>heightType</code>
 * @public
 * @name sap.suite.ui.commons.FacetOverview#getHeightType
 * @function
 */

/**
 * Setter for property <code>heightType</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {sap.suite.ui.commons.FacetOverviewHeight} oHeightType  new value for property <code>heightType</code>
 * @return {sap.suite.ui.commons.FacetOverview} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FacetOverview#setHeightType
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * The content that appears in the left part of the control.
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.suite.ui.commons.FacetOverview#getContent
 * @function
 */


/**
 * Setter for the aggregated <code>content</code>.
 * @param {sap.ui.core.Control} oContent
 * @return {sap.suite.ui.commons.FacetOverview} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FacetOverview#setContent
 * @function
 */
	

/**
 * Destroys the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.suite.ui.commons.FacetOverview} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FacetOverview#destroyContent
 * @function
 */


/**
 * The event is fired when the user chooses the control. Provides an event with parameter id, the ID of the chosen control.
 *
 * @name sap.suite.ui.commons.FacetOverview#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id The control ID.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.suite.ui.commons.FacetOverview</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.FacetOverview</code>.<br/> itself. 
 *  
 * The event is fired when the user chooses the control. Provides an event with parameter id, the ID of the chosen control.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.FacetOverview</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.FacetOverview} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FacetOverview#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.suite.ui.commons.FacetOverview</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.FacetOverview} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FacetOverview#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> The control ID.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.FacetOverview} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.FacetOverview#firePress
 * @function
 */


/**
 * This event is fired when a new value to the heightType or height property is set.
 *
 * @name sap.suite.ui.commons.FacetOverview#heightChange
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'heightChange' event of this <code>sap.suite.ui.commons.FacetOverview</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.FacetOverview</code>.<br/> itself. 
 *  
 * This event is fired when a new value to the heightType or height property is set.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.FacetOverview</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.FacetOverview} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FacetOverview#attachHeightChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'heightChange' event of this <code>sap.suite.ui.commons.FacetOverview</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.FacetOverview} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FacetOverview#detachHeightChange
 * @function
 */

/**
 * Fire event heightChange to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.FacetOverview} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.FacetOverview#fireHeightChange
 * @function
 */

// Start of sap/suite/ui/commons/FacetOverview.js
jQuery.sap.require("sap.ui.core.IconPool");

/**
 * This file defines behavior for the control,
 */
sap.suite.ui.commons.FacetOverview.prototype.init = function(){
	var that = this;
	this._rb = sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons");
	
	if (jQuery.device.is.desktop) {
		this._oHoverIcon = sap.ui.core.IconPool.createControlByURI({
			id: this.getId() + "-hover-icon-img",
			src: "sap-icon://slim-arrow-right"
		});
	} else {
		//Listen to orientation change to recalculate max-width value for title and qty fields.
		//sap.ui.core.ResizeHandler.register is not called on orientation change. It works only on desktops.
        sap.ui.Device.orientation.attachHandler(function (oE) {
                that._updateTitleMaxWidth(oE);
        });
	}
	
	this._oNoDataLabel = new sap.m.Label(this.getId() + "-no-content",{
		text : this._rb.getText("FACETOVERVIEW_NO_ITEMS_TEXT")
	});

};

sap.suite.ui.commons.FacetOverview.prototype.exit = function(){
	var that = this;
	if (this._oHoverIcon) {
		this._oHoverIcon.destroy();
	}
	
	sap.ui.core.ResizeHandler.deregister(this._sTitleResizeHandlerId);

	sap.ui.Device.orientation.detachHandler(function () {
        that._updateTitleMaxWidth();
    });

	this._oNoDataLabel.destroy();
};

sap.suite.ui.commons.FacetOverview.prototype._updateTitleMaxWidth = function(oE) {
	this._handleTitleResize();
};

sap.suite.ui.commons.FacetOverview.prototype._handleTitleResize = function() {
	var iTitleWidth = jQuery.sap.byId(this.getId() +  "-title").width();
	if (this._iTitleWidth != iTitleWidth) {
		var iTitleTextMaxWidth = iTitleWidth 
			- jQuery.sap.byId(this.getId() + "-qty").outerWidth()
			- 15;// width of the icon is always stable
		jQuery.sap.byId(this.getId() +  "-title-text").css("max-width", iTitleTextMaxWidth);
		this._iTitleWidth = iTitleWidth;
	}
};

sap.suite.ui.commons.FacetOverview.prototype.onAfterRendering = function () {
	//Listen for size changes only on desktop. Resize handler is not called on phones when changing orientation.
	if (jQuery.device.is.desktop) {
		if (this._sTitleResizeHandlerId) {
			sap.ui.core.ResizeHandler.deregister(this._sTitleResizeHandlerId);
		}
		var oTitle = jQuery.sap.domById(this.getId() + "-title");
		this._sTitleResizeHandlerId = sap.ui.core.ResizeHandler.register(oTitle,  jQuery.proxy(this._handleTitleResize, this));
	}
	
	this._handleTitleResize();
	
	if (jQuery.device.is.desktop) {
		var that = this;
		this.$()[0].addEventListener("focusin", function(oEvent) {
			that.$().find("[data-tabindex]").attr("tabindex", function() {
				return this.getAttribute("data-tabindex");
			});
		}, true);
		this.onsapfocusleave();
	}
};

sap.suite.ui.commons.FacetOverview.prototype.onclick = function(oEvent) {
    if (oEvent.srcControl.getMetadata().getName() != "sap.m.Link") {
		this.firePress({
			id: this.getId()
		});
    }
};

sap.suite.ui.commons.FacetOverview.prototype.onkeydown = function(oEvent) {
	if (oEvent.which == jQuery.sap.KeyCodes.ENTER) {
		this.onclick(oEvent);
	}
};

sap.suite.ui.commons.FacetOverview.prototype.onsapfocusleave = function(oEvent) {
	if (jQuery.device.is.desktop) {
		this.$().find("[data-tabindex]").removeAttr("data-tabindex");
		this.$().find("[tabindex]").attr("data-tabindex", function() {
			return this.getAttribute("tabindex");
		}).attr("tabindex", "-1");
	}
};

sap.suite.ui.commons.FacetOverview.prototype.onsaptouchstart = function (oEvent) {
    if (this.hasListeners("press")) {
        if (oEvent.srcControl.getMetadata().getName() != "sap.m.Link") {
            this.addStyleClass("sapSuiteFovSelected");
        }
    }
};

sap.suite.ui.commons.FacetOverview.prototype.onsaptouchend = function (oEvent) {
    if (this.hasListeners("press")) {
    	this.removeStyleClass("sapSuiteFovSelected");
    }
};

sap.suite.ui.commons.FacetOverview.prototype.ontouchmove = function (oEvent) {
    if (this.hasListeners("press")) {
    	this.removeStyleClass("sapSuiteFovSelected");
    }
};

//ontouchstart/ontouchend are generated on iOS devices. onsaptouchstart/end is not fired on them.
sap.suite.ui.commons.FacetOverview.prototype.ontouchstart = function (oEvent) {
    if (this.hasListeners("press")) {
        if (oEvent.srcControl.getMetadata().getName() != "sap.m.Link") {
            this.addStyleClass("sapSuiteFovSelected");
        }
    }
};

sap.suite.ui.commons.FacetOverview.prototype.ontouchend = function (oEvent) {
    if (this.hasListeners("press")) {
    	this.removeStyleClass("sapSuiteFovSelected");
    }
};

sap.suite.ui.commons.FacetOverview.prototype.ontouchmove = function (oEvent) {
    if (this.hasStyleClass("sapSuiteFovSelected")) {
    	this.removeStyleClass("sapSuiteFovSelected");
    }
};

sap.suite.ui.commons.FacetOverview.prototype.getHeight = function(){
	switch (this.getHeightType()) {
		case sap.suite.ui.commons.FacetOverviewHeight.XS:
			return "4rem";
		case sap.suite.ui.commons.FacetOverviewHeight.S:
			return "6rem";
		case sap.suite.ui.commons.FacetOverviewHeight.M:
			return "10rem";
		case sap.suite.ui.commons.FacetOverviewHeight.L:
			return "14rem";
		case sap.suite.ui.commons.FacetOverviewHeight.XL:
			return "21rem";
		case sap.suite.ui.commons.FacetOverviewHeight.XXL:
			return "32rem";
		case sap.suite.ui.commons.FacetOverviewHeight.Auto:
			return "auto";
		case sap.suite.ui.commons.FacetOverviewHeight.None:
		default:
			return this.getProperty("height");
	}
};

sap.suite.ui.commons.FacetOverview.prototype.setHeight = function(sHeight) {
	this.setProperty("height", sHeight);
	this.fireHeightChange();
    return this;
};

sap.suite.ui.commons.FacetOverview.prototype.setHeightType = function(eHeightType) {
	this.setProperty("heightType", eHeightType);
	this.fireHeightChange();
    return this;
};