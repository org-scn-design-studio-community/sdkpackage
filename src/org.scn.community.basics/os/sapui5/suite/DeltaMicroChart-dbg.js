/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.DeltaMicroChart.
jQuery.sap.declare("sap.suite.ui.commons.DeltaMicroChart");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new DeltaMicroChart.
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
 * <li>{@link #getValue1 value1} : float</li>
 * <li>{@link #getValue2 value2} : float</li>
 * <li>{@link #getTitle1 title1} : string</li>
 * <li>{@link #getTitle2 title2} : string</li>
 * <li>{@link #getDisplayValue1 displayValue1} : string</li>
 * <li>{@link #getDisplayValue2 displayValue2} : string</li>
 * <li>{@link #getDeltaDisplayValue deltaDisplayValue} : string</li>
 * <li>{@link #getColor color} : sap.suite.ui.commons.InfoTileValueColor (default: sap.suite.ui.commons.InfoTileValueColor.Neutral)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getSize size} : sap.suite.ui.commons.InfoTileSize (default: sap.suite.ui.commons.InfoTileSize.Auto)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.DeltaMicroChart#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control displays a delta of two values as a chart.
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.DeltaMicroChart
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.DeltaMicroChart", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"value1" : {type : "float", group : "Misc", defaultValue : null},
		"value2" : {type : "float", group : "Misc", defaultValue : null},
		"title1" : {type : "string", group : "Misc", defaultValue : null},
		"title2" : {type : "string", group : "Misc", defaultValue : null},
		"displayValue1" : {type : "string", group : "Misc", defaultValue : null},
		"displayValue2" : {type : "string", group : "Misc", defaultValue : null},
		"deltaDisplayValue" : {type : "string", group : "Misc", defaultValue : null},
		"color" : {type : "sap.suite.ui.commons.InfoTileValueColor", group : "Misc", defaultValue : sap.suite.ui.commons.InfoTileValueColor.Neutral},
		"width" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null},
		"size" : {type : "sap.suite.ui.commons.InfoTileSize", group : "Misc", defaultValue : sap.suite.ui.commons.InfoTileSize.Auto}
	},
	events : {
		"press" : {}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.DeltaMicroChart with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.DeltaMicroChart.extend
 * @function
 */

sap.suite.ui.commons.DeltaMicroChart.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>value1</code>.
 * The first value for delta calculation.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {float} the value of property <code>value1</code>
 * @public
 * @name sap.suite.ui.commons.DeltaMicroChart#getValue1
 * @function
 */

/**
 * Setter for property <code>value1</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {float} fValue1  new value for property <code>value1</code>
 * @return {sap.suite.ui.commons.DeltaMicroChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DeltaMicroChart#setValue1
 * @function
 */


/**
 * Getter for property <code>value2</code>.
 * The second value for delta calculation.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {float} the value of property <code>value2</code>
 * @public
 * @name sap.suite.ui.commons.DeltaMicroChart#getValue2
 * @function
 */

/**
 * Setter for property <code>value2</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {float} fValue2  new value for property <code>value2</code>
 * @return {sap.suite.ui.commons.DeltaMicroChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DeltaMicroChart#setValue2
 * @function
 */


/**
 * Getter for property <code>title1</code>.
 * The first value title.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title1</code>
 * @public
 * @name sap.suite.ui.commons.DeltaMicroChart#getTitle1
 * @function
 */

/**
 * Setter for property <code>title1</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle1  new value for property <code>title1</code>
 * @return {sap.suite.ui.commons.DeltaMicroChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DeltaMicroChart#setTitle1
 * @function
 */


/**
 * Getter for property <code>title2</code>.
 * The second value title.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title2</code>
 * @public
 * @name sap.suite.ui.commons.DeltaMicroChart#getTitle2
 * @function
 */

/**
 * Setter for property <code>title2</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle2  new value for property <code>title2</code>
 * @return {sap.suite.ui.commons.DeltaMicroChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DeltaMicroChart#setTitle2
 * @function
 */


/**
 * Getter for property <code>displayValue1</code>.
 * If this property is set, it is rendered instead of value1.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>displayValue1</code>
 * @public
 * @name sap.suite.ui.commons.DeltaMicroChart#getDisplayValue1
 * @function
 */

/**
 * Setter for property <code>displayValue1</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sDisplayValue1  new value for property <code>displayValue1</code>
 * @return {sap.suite.ui.commons.DeltaMicroChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DeltaMicroChart#setDisplayValue1
 * @function
 */


/**
 * Getter for property <code>displayValue2</code>.
 * If this property is set, it is rendered instead of value2.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>displayValue2</code>
 * @public
 * @name sap.suite.ui.commons.DeltaMicroChart#getDisplayValue2
 * @function
 */

/**
 * Setter for property <code>displayValue2</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sDisplayValue2  new value for property <code>displayValue2</code>
 * @return {sap.suite.ui.commons.DeltaMicroChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DeltaMicroChart#setDisplayValue2
 * @function
 */


/**
 * Getter for property <code>deltaDisplayValue</code>.
 * If this property is set, it is rendered instead of a calculated delta.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>deltaDisplayValue</code>
 * @public
 * @name sap.suite.ui.commons.DeltaMicroChart#getDeltaDisplayValue
 * @function
 */

/**
 * Setter for property <code>deltaDisplayValue</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sDeltaDisplayValue  new value for property <code>deltaDisplayValue</code>
 * @return {sap.suite.ui.commons.DeltaMicroChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DeltaMicroChart#setDeltaDisplayValue
 * @function
 */


/**
 * Getter for property <code>color</code>.
 * The semantic color of the delta value.
 *
 * Default value is <code>Neutral</code>
 *
 * @return {sap.suite.ui.commons.InfoTileValueColor} the value of property <code>color</code>
 * @public
 * @name sap.suite.ui.commons.DeltaMicroChart#getColor
 * @function
 */

/**
 * Setter for property <code>color</code>.
 *
 * Default value is <code>Neutral</code> 
 *
 * @param {sap.suite.ui.commons.InfoTileValueColor} oColor  new value for property <code>color</code>
 * @return {sap.suite.ui.commons.DeltaMicroChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DeltaMicroChart#setColor
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * The width of the chart.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.suite.ui.commons.DeltaMicroChart#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.suite.ui.commons.DeltaMicroChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DeltaMicroChart#setWidth
 * @function
 */


/**
 * Getter for property <code>size</code>.
 * The size of the chart. If is not set, the default size is applied based on the device type.
 *
 * Default value is <code>Auto</code>
 *
 * @return {sap.suite.ui.commons.InfoTileSize} the value of property <code>size</code>
 * @public
 * @name sap.suite.ui.commons.DeltaMicroChart#getSize
 * @function
 */

/**
 * Setter for property <code>size</code>.
 *
 * Default value is <code>Auto</code> 
 *
 * @param {sap.suite.ui.commons.InfoTileSize} oSize  new value for property <code>size</code>
 * @return {sap.suite.ui.commons.DeltaMicroChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DeltaMicroChart#setSize
 * @function
 */


/**
 * The event is fired when the user chooses the delta micro chart.
 *
 * @name sap.suite.ui.commons.DeltaMicroChart#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.suite.ui.commons.DeltaMicroChart</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.DeltaMicroChart</code>.<br/> itself. 
 *  
 * The event is fired when the user chooses the delta micro chart.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.DeltaMicroChart</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.DeltaMicroChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DeltaMicroChart#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.suite.ui.commons.DeltaMicroChart</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.DeltaMicroChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DeltaMicroChart#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.DeltaMicroChart} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.DeltaMicroChart#firePress
 * @function
 */

// Start of sap/suite/ui/commons/DeltaMicroChart.js
///**
// * This file defines behavior for the control,
// */
sap.suite.ui.commons.DeltaMicroChart.prototype.init = function(){
	this._oRb = sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons");
	this.setTooltip("{AltText}");
};

sap.suite.ui.commons.DeltaMicroChart.prototype._calcChartData = function() {
	var fVal1 = this.getValue1();
	var fVal2 = this.getValue2();
	
	var fMin = Math.min(fVal1, fVal2, 0);
	var fMax = Math.max(fVal1, fVal2, 0);
	var fTotal = fMax - fMin;
	
	function calcPercent(fVal) {
		return (fTotal == 0 ?  0 : Math.abs(fVal) / fTotal * 100).toFixed(2);
	};
		
	var oConf = {};
	var fDelta = fVal1 - fVal2;
	
	oConf.delta = {
		left: fMax == 0,
		width: calcPercent(fDelta),
		isFirstStripeUp: fVal1 < fVal2,
		isMax: (fVal1 < 0 && fVal2 >= 0) || (fVal1 >= 0 && fVal2 < 0),
		isZero: fVal1 == 0 && fVal2 == 0,
		isEqual: fDelta == 0
	};
	
	oConf.bar1 = {
		left: fVal2 >= 0,
		width: calcPercent(fVal1),
		isSmaller: Math.abs(fVal1) < Math.abs(fVal2)
	};
	
	oConf.bar2 = {
		left: fVal1 >= 0,
		width: calcPercent(fVal2),
		isSmaller: Math.abs(fVal2) < Math.abs(fVal1)
	};

	return oConf;
};

sap.suite.ui.commons.DeltaMicroChart.prototype.getLocalizedColorMeaning = function(sColor) {
	return this._oRb.getText(("SEMANTIC_COLOR_"+sColor).toUpperCase());
};

/**
 * Calculates the number of digits after the decimal point.
 *
 * @param {float} fValue float value
 * @returns int number of digits after the decimal point in fValue.
 * @private
 */
sap.suite.ui.commons.DeltaMicroChart.prototype._digitsAfterDecimalPoint = function(fValue) {
	var sAfter = (""+fValue).match(/[.,](\d+)/g);
	return (sAfter) ? (""+sAfter).length - 1 : 0;
};


sap.suite.ui.commons.DeltaMicroChart.prototype.getAltText = function() {
    var sDv1 = this.getDisplayValue1();
    var sDv2 = this.getDisplayValue2();
    var sDdv = this.getDeltaDisplayValue();
	var fVal1 = this.getValue1();
	var fVal2 = this.getValue2();
	var sAdv1ToShow = sDv1 ? sDv1 : "" + fVal1;
	var sAdv2ToShow = sDv2 ? sDv2 : "" + fVal2;
	var sAddvToShow = sDdv ? sDdv : "" + Math.abs(fVal1 - fVal2).toFixed(Math.max(this._digitsAfterDecimalPoint(fVal1), this._digitsAfterDecimalPoint(fVal2)));
	var sMeaning = this.getLocalizedColorMeaning(this.getColor());
	
	return this.getTitle1() + " " + sAdv1ToShow + "\n" + this.getTitle2() + " " + sAdv2ToShow + "\n" +  this._oRb.getText("DELTAMICROCHART_DELTA_TOOLTIP", [sAddvToShow, sMeaning]);
};

sap.suite.ui.commons.DeltaMicroChart.prototype.getTooltip_AsString  = function() {
	var oTooltip = this.getTooltip();
	var sTooltip = this.getAltText();
	
	if(typeof oTooltip === "string" || oTooltip instanceof String) {
		sTooltip = oTooltip.split("{AltText}").join(sTooltip).split("((AltText))").join(sTooltip);
		return sTooltip;
	}
	return oTooltip ? oTooltip : "";
};

sap.suite.ui.commons.DeltaMicroChart.prototype._isCalcSupported = function() {
	return "11px" == jQuery.sap.byId(this.getId() + "-calc").css("max-width");
};

sap.suite.ui.commons.DeltaMicroChart.prototype._isRoundingSupported = function() {
	return 4 == jQuery.sap.byId(this.getId() + "-calc1").width();
};

sap.suite.ui.commons.DeltaMicroChart.prototype.onBeforeRendering = function() {
	this._oChartData = this._calcChartData();
};

sap.suite.ui.commons.DeltaMicroChart.prototype.onAfterRendering = function() {
	this._bCalc = this._isCalcSupported();
	this._bRounding = this._isRoundingSupported();
	
	if (!this._bCalc || !this._bRounding) {
		if (this._sResizeHandlerId) {
			sap.ui.core.ResizeHandler.deregister(this._sResizeHandlerId);
		}
		
	    var oChart = jQuery.sap.domById(this.getId() + "-dmc-chart");
	    this._sResizeHandlerId = sap.ui.core.ResizeHandler.register(oChart,  jQuery.proxy(this._adjust, this));
	    
	    if (!this._bCalc) {
	    	this._adjustCalc();
	    }
	    
	    if (!this._bRounding) {
	    	this._adjustRound();
	    }
	}
};

sap.suite.ui.commons.DeltaMicroChart.prototype._adjust = function() {
    if (!this._bCalc) {
    	this._adjustCalc();
    }
    
    if (!this._bRounding) {
    	this._adjustRound();
    }
};

sap.suite.ui.commons.DeltaMicroChart.prototype._adjustRound = function() {
	var iChartWidth = jQuery.sap.byId(this.getId() + "-dmc-chart").width();
	var iDeltaWidth = Math.round(iChartWidth * this._oChartData.delta.width / 100);
	
	jQuery.sap.byId(this.getId() + "-dmc-bar-delta").width(iDeltaWidth);
	
	if (this._oChartData.bar1.isSmaller && !this._oChartData.delta.isMax) {
		jQuery.sap.byId(this.getId() + "-dmc-bar1").width(iChartWidth - iDeltaWidth);
	}
	
	if (this._oChartData.bar2.isSmaller && !this._oChartData.delta.isMax) {
		jQuery.sap.byId(this.getId() + "-dmc-bar2").width(iChartWidth - iDeltaWidth);
	}
};

sap.suite.ui.commons.DeltaMicroChart.prototype._adjustCalc = function() {
	var iChartWidth = jQuery.sap.byId(this.getId() + "-dmc-chart").width();
	
	function adjustBar(oBar) {
		oBar.css("max-width", iChartWidth - parseInt(oBar.css("max-width")) + "px");
	};
	
	adjustBar(jQuery.sap.byId(this.getId() + "-dmc-bar1"));
	adjustBar(jQuery.sap.byId(this.getId() + "-dmc-bar2"));
	adjustBar(jQuery.sap.byId(this.getId() + "-dmc-bar-delta"));
};

sap.suite.ui.commons.DeltaMicroChart.prototype.attachEvent = function(sEventId, oData, fnFunction, oListener) {
	sap.ui.core.Control.prototype.attachEvent.call(this, sEventId, oData, fnFunction, oListener);
	if (this.hasListeners("press")) {
		this.$().attr("tabindex", 0).addClass("sapSuiteUiCommonsPointer");
	}
	return this;
};

sap.suite.ui.commons.DeltaMicroChart.prototype.detachEvent = function(sEventId, fnFunction, oListener) {
	sap.ui.core.Control.prototype.detachEvent.call(this, sEventId, fnFunction, oListener);
	if (!this.hasListeners("press")) {
		this.$().removeAttr("tabindex").removeClass("sapSuiteUiCommonsPointer");
	}
	return this;
}; 

 sap.suite.ui.commons.DeltaMicroChart.prototype.ontap = function(oEvent) {
     if (sap.ui.Device.browser.internet_explorer) {
         this.$().focus();
     }
     this.firePress();
};

sap.suite.ui.commons.DeltaMicroChart.prototype.onkeydown = function(oEvent) {
    if (oEvent.which == jQuery.sap.KeyCodes.SPACE) {
        oEvent.preventDefault();
    }
};

sap.suite.ui.commons.DeltaMicroChart.prototype.onkeyup = function(oEvent) {
    if (oEvent.which == jQuery.sap.KeyCodes.ENTER || oEvent.which == jQuery.sap.KeyCodes.SPACE) {
        this.firePress();
        oEvent.preventDefault();
    }
};