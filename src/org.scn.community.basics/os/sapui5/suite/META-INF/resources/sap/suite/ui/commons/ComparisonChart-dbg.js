/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.ComparisonChart.
jQuery.sap.declare("sap.suite.ui.commons.ComparisonChart");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ComparisonChart.
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
 * <li>{@link #getScale scale} : string</li>
 * <li>{@link #getSize size} : sap.suite.ui.commons.InfoTileSize (default: sap.suite.ui.commons.InfoTileSize.Auto)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getColorPalette colorPalette} : string[] (default: [])</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getData data} : sap.suite.ui.commons.ComparisonData[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.ComparisonChart#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control shows a comparison chart.
 * @extends sap.ui.core.Control
 * @version 1.24.2
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.ComparisonChart
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.ComparisonChart", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"scale" : {type : "string", group : "Misc", defaultValue : null},
		"size" : {type : "sap.suite.ui.commons.InfoTileSize", group : "Misc", defaultValue : sap.suite.ui.commons.InfoTileSize.Auto},
		"width" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null},
		"colorPalette" : {type : "string[]", group : "Misc", defaultValue : []}
	},
	aggregations : {
		"data" : {type : "sap.suite.ui.commons.ComparisonData", multiple : true, singularName : "data"}
	},
	events : {
		"press" : {}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.ComparisonChart with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.ComparisonChart.extend
 * @function
 */

sap.suite.ui.commons.ComparisonChart.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>scale</code>.
 * The scaling suffix.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>scale</code>
 * @public
 * @name sap.suite.ui.commons.ComparisonChart#getScale
 * @function
 */

/**
 * Setter for property <code>scale</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sScale  new value for property <code>scale</code>
 * @return {sap.suite.ui.commons.ComparisonChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ComparisonChart#setScale
 * @function
 */


/**
 * Getter for property <code>size</code>.
 * Updates the size of the chart. If not set then the default size is applied based on the device tile.
 *
 * Default value is <code>Auto</code>
 *
 * @return {sap.suite.ui.commons.InfoTileSize} the value of property <code>size</code>
 * @public
 * @name sap.suite.ui.commons.ComparisonChart#getSize
 * @function
 */

/**
 * Setter for property <code>size</code>.
 *
 * Default value is <code>Auto</code> 
 *
 * @param {sap.suite.ui.commons.InfoTileSize} oSize  new value for property <code>size</code>
 * @return {sap.suite.ui.commons.ComparisonChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ComparisonChart#setSize
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * The width of the chart. If it is not set, the size of the control is defined by the size property.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.suite.ui.commons.ComparisonChart#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.suite.ui.commons.ComparisonChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ComparisonChart#setWidth
 * @function
 */


/**
 * Getter for property <code>colorPalette</code>.
 * The color palette for the chart. If this property is set, semantic colors defined in ComparisonData are ignored. Colors from the palette are assigned to each bar consequentially. When all the palette colors are used, assignment of the colors begins from the first palette color.
 *
 * Default value is <code>[]</code>
 *
 * @return {string[]} the value of property <code>colorPalette</code>
 * @public
 * @name sap.suite.ui.commons.ComparisonChart#getColorPalette
 * @function
 */

/**
 * Setter for property <code>colorPalette</code>.
 *
 * Default value is <code>[]</code> 
 *
 * @param {string[]} aColorPalette  new value for property <code>colorPalette</code>
 * @return {sap.suite.ui.commons.ComparisonChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ComparisonChart#setColorPalette
 * @function
 */


/**
 * Getter for aggregation <code>data</code>.<br/>
 * The comparison chart data.
 * 
 * @return {sap.suite.ui.commons.ComparisonData[]}
 * @public
 * @name sap.suite.ui.commons.ComparisonChart#getData
 * @function
 */


/**
 * Inserts a data into the aggregation named <code>data</code>.
 *
 * @param {sap.suite.ui.commons.ComparisonData}
 *          oData the data to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the data should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the data is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the data is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.ComparisonChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ComparisonChart#insertData
 * @function
 */

/**
 * Adds some data <code>oData</code> 
 * to the aggregation named <code>data</code>.
 *
 * @param {sap.suite.ui.commons.ComparisonData}
 *            oData the data to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.ComparisonChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ComparisonChart#addData
 * @function
 */

/**
 * Removes an data from the aggregation named <code>data</code>.
 *
 * @param {int | string | sap.suite.ui.commons.ComparisonData} vData the data to remove or its index or id
 * @return {sap.suite.ui.commons.ComparisonData} the removed data or null
 * @public
 * @name sap.suite.ui.commons.ComparisonChart#removeData
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>data</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.ComparisonData[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.ComparisonChart#removeAllData
 * @function
 */

/**
 * Checks for the provided <code>sap.suite.ui.commons.ComparisonData</code> in the aggregation named <code>data</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.suite.ui.commons.ComparisonData}
 *            oData the data whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.suite.ui.commons.ComparisonChart#indexOfData
 * @function
 */
	

/**
 * Destroys all the data in the aggregation 
 * named <code>data</code>.
 * @return {sap.suite.ui.commons.ComparisonChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ComparisonChart#destroyData
 * @function
 */


/**
 * The event is fired when the user chooses the comparison chart.
 *
 * @name sap.suite.ui.commons.ComparisonChart#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.suite.ui.commons.ComparisonChart</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ComparisonChart</code>.<br/> itself. 
 *  
 * The event is fired when the user chooses the comparison chart.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ComparisonChart</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.ComparisonChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ComparisonChart#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.suite.ui.commons.ComparisonChart</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ComparisonChart} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ComparisonChart#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ComparisonChart} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.ComparisonChart#firePress
 * @function
 */


// Start of sap/suite/ui/commons/ComparisonChart.js
/*!
 * @copyright@
 */

sap.suite.ui.commons.ComparisonChart.prototype.init = function(){
	this._oRb = sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons");
};

/**
 * Calculates the width in percents of chart bars' elements accordingly with provided chart values.
 *
 * @returns {Array} array of calculated values for each chart bar.
 * @private
 */
sap.suite.ui.commons.ComparisonChart.prototype._calculateChartData = function() {
    var aResult = [];
    var aData = this.getData();
    var iCount = aData.length;
    var iMaxValue = 0;
    var iMinValue = 0;
    var iTotal;
    var iMaxPercent;
    var iMinPercent;
    var i;

    for (i = 0; i < iCount; i++) {
    	var iDataValue = isNaN(aData[i].getValue()) ? 0 : aData[i].getValue() ;
        iMaxValue = Math.max(iMaxValue, iDataValue);
        iMinValue = Math.min(iMinValue, iDataValue);
    }

    iTotal = iMaxValue - iMinValue;
    iMaxPercent = (iTotal==0) ? 0 : Math.round(iMaxValue * 100 / iTotal);

    if (iMaxPercent == 0 && iMaxValue != 0) {
        iMaxPercent = 1;
    } else if (iMaxPercent == 100 && iMinValue != 0) {
        iMaxPercent = 99;
    }

    iMinPercent = 100 - iMaxPercent;

    for (i = 0; i < iCount; i++) {
        var oItem = {};
    	var iDataValue = isNaN(aData[i].getValue()) ? 0 : aData[i].getValue() ;

        oItem.value = (iTotal==0) ? 0 : Math.round(iDataValue * 100 / iTotal);

        if (oItem.value == 0 && iDataValue != 0) {
            oItem.value = (iDataValue > 0) ? 1 : -1;
        } else if (oItem.value == 100) {
            oItem.value = iMaxPercent;
        } else if (oItem.value == -100) {
            oItem.value = -iMinPercent;
        }

        if (oItem.value >= 0) {
            oItem.negativeNoValue = iMinPercent;
            oItem.positiveNoValue = iMaxPercent - oItem.value;
        } else {
            oItem.value = -oItem.value;
            oItem.negativeNoValue = iMinPercent - oItem.value;
            oItem.positiveNoValue = iMaxPercent;
        }

        aResult.push(oItem);
    }

    return aResult;
};

sap.suite.ui.commons.ComparisonChart.prototype.ontap = function(oEvent) {
    if (sap.ui.Device.browser.internet_explorer) {
        this.$().focus();
    }
    this.firePress();
};

sap.suite.ui.commons.ComparisonChart.prototype.onkeydown = function(oEvent) {
    if (oEvent.which == jQuery.sap.KeyCodes.ENTER || oEvent.which == jQuery.sap.KeyCodes.SPACE) {
        this.firePress();
        oEvent.preventDefault();
    }
};

sap.suite.ui.commons.ComparisonChart.prototype.attachEvent = function(sEventId, oData, fnFunction, oListener) {
    sap.ui.core.Control.prototype.attachEvent.call(this, sEventId, oData, fnFunction, oListener);
    
    if (this.hasListeners("press")) {
            this.$().attr("tabindex", 0).attr("role", "button").addClass("sapSuiteUiCommonsPointer");
    }
    
    return this;
};

sap.suite.ui.commons.ComparisonChart.prototype.detachEvent = function(sEventId, fnFunction, oListener) {
    sap.ui.core.Control.prototype.detachEvent.call(this, sEventId, fnFunction, oListener);
    
    if (!this.hasListeners("press")) {
            this.$().removeAttr("tabindex").attr("role", "img").removeClass("sapSuiteUiCommonsPointer");
    }
    return this;
};


sap.suite.ui.commons.ComparisonChart.prototype.getLocalizedColorMeaning = function(sColor) {
	return this._oRb.getText(("SEMANTIC_COLOR_"+sColor).toUpperCase());
};

sap.suite.ui.commons.ComparisonChart.prototype.getAltText = function() {
	var sScale = this.getScale();
	var sAltText = "";
	
	for (var i = 0; i < this.getData().length; i++) {
		var oBar = this.getData()[i];
		var sMeaning = (this.getColorPalette().length) ? "" : this.getLocalizedColorMeaning(oBar.getColor());
		sAltText += ((i==0) ? "" : "\n") + oBar.getTitle() + " " + (oBar.getDisplayValue() ? oBar.getDisplayValue() : oBar.getValue()) + sScale + " " + sMeaning;
	}

	return sAltText;
};

sap.suite.ui.commons.ComparisonChart.prototype.getTooltip_AsString  = function() {
	var oTooltip = this.getTooltip();
	var sTooltip = this.getAltText();
	
	if(typeof oTooltip === "string" || oTooltip instanceof String) {
		if(oTooltip.indexOf("{AltText}") != -1) {
			sTooltip = oTooltip.split("{AltText}").join(sTooltip);
		} else {
			sTooltip = oTooltip;
		}
	}
	return sTooltip;
};
