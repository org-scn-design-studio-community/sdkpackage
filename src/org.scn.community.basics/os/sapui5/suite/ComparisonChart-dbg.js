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
 * <li>{@link #getView view} : sap.suite.ui.commons.ComparisonChartView (default: sap.suite.ui.commons.ComparisonChartView.Normal)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getColorPalette colorPalette} : string[] (default: [])</li>
 * <li>{@link #getShrinkable shrinkable} : boolean (default: false)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li></ul>
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
 * @version 1.30.3
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
		"view" : {type : "sap.suite.ui.commons.ComparisonChartView", group : "Appearance", defaultValue : sap.suite.ui.commons.ComparisonChartView.Normal},
		"width" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null},
		"colorPalette" : {type : "string[]", group : "Misc", defaultValue : []},
		"shrinkable" : {type : "boolean", group : "Misc", defaultValue : false},
		"height" : {type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : null}
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
 * Getter for property <code>view</code>.
 * The view of the chart. If not set, the Normal view is used by default.
 *
 * Default value is <code>Normal</code>
 *
 * @return {sap.suite.ui.commons.ComparisonChartView} the value of property <code>view</code>
 * @public
 * @since 1.25
 * @name sap.suite.ui.commons.ComparisonChart#getView
 * @function
 */

/**
 * Setter for property <code>view</code>.
 *
 * Default value is <code>Normal</code> 
 *
 * @param {sap.suite.ui.commons.ComparisonChartView} oView  new value for property <code>view</code>
 * @return {sap.suite.ui.commons.ComparisonChart} <code>this</code> to allow method chaining
 * @public
 * @since 1.25
 * @name sap.suite.ui.commons.ComparisonChart#setView
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
 * @since 1.22
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
 * @since 1.22
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
 * @since 1.24
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
 * @since 1.24
 * @name sap.suite.ui.commons.ComparisonChart#setColorPalette
 * @function
 */


/**
 * Getter for property <code>shrinkable</code>.
 * If it is set to true, the height of the control is defined by its content.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>shrinkable</code>
 * @public
 * @since 1.25
 * @name sap.suite.ui.commons.ComparisonChart#getShrinkable
 * @function
 */

/**
 * Setter for property <code>shrinkable</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShrinkable  new value for property <code>shrinkable</code>
 * @return {sap.suite.ui.commons.ComparisonChart} <code>this</code> to allow method chaining
 * @public
 * @since 1.25
 * @name sap.suite.ui.commons.ComparisonChart#setShrinkable
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * Height of the chart.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @since 1.25
 * @name sap.suite.ui.commons.ComparisonChart#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.suite.ui.commons.ComparisonChart} <code>this</code> to allow method chaining
 * @public
 * @since 1.25
 * @name sap.suite.ui.commons.ComparisonChart#setHeight
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
	this.setTooltip("{AltText}");
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

sap.suite.ui.commons.ComparisonChart.prototype.attachEvent = function(sEventId, oData, fnFunction, oListener) {
    sap.ui.core.Control.prototype.attachEvent.call(this, sEventId, oData, fnFunction, oListener);
    
    if (this.hasListeners("press")) {
            this.$().attr("tabindex", 0).addClass("sapSuiteUiCommonsPointer");
    }
    
    return this;
};

sap.suite.ui.commons.ComparisonChart.prototype.detachEvent = function(sEventId, fnFunction, oListener) {
    sap.ui.core.Control.prototype.detachEvent.call(this, sEventId, fnFunction, oListener);
    
    if (!this.hasListeners("press")) {
            this.$().removeAttr("tabindex").removeClass("sapSuiteUiCommonsPointer");
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
		sTooltip = oTooltip.split("{AltText}").join(sTooltip).split("((AltText))").join(sTooltip);
		return sTooltip;
	}
	return oTooltip ? oTooltip : "";
};

sap.suite.ui.commons.ComparisonChart.prototype._adjustBars = function() {
	var iHeight = parseFloat(this.$().css("height"));
	var iBarCount = this.getData().length;
	var aBarContainers = this.$().find(".sapSuiteCmpChartItem");
	var iMinH = parseFloat(aBarContainers.css("min-height"));
	var iMaxH = parseFloat(aBarContainers.css("max-height"));
	var iBarContHeight;
	
	if(iBarCount != 0) {
		iBarContHeight = iHeight/iBarCount;

		if(iBarContHeight>iMaxH) {
			iBarContHeight = iMaxH;
		} else if(iBarContHeight<iMinH) {
			iBarContHeight = iMinH;
		}
		
		aBarContainers.css("height", iBarContHeight);
		
		if(this.getView() === "Wide" ) {
			var iChartBarHeight = iBarContHeight*79/42;
			this.$().find(".sapSuiteCmpChartBar>div").css("height",iChartBarHeight + "%");
			
		} else if(this.getView() === "Normal") {
			var iChartBarHeight = iBarContHeight - 19;
			this.$().find(".sapSuiteCmpChartBar>div").css("height",iChartBarHeight);
		}

		var iChartsHeightDelta = (iHeight - iBarContHeight * iBarCount)/2;
		if(iChartsHeightDelta > 0) {
			jQuery(aBarContainers[0]).css("margin-top", iChartsHeightDelta + 7 + "px");
		}
	}
};

sap.suite.ui.commons.ComparisonChart.prototype.onAfterRendering = function() {
	if(this.getHeight() != "") {
		var that = this;
		sap.ui.Device.media.attachHandler(function(){
			that._adjustBars();
		});
		this._adjustBars();
	}
	
};

sap.suite.ui.commons.ComparisonChart.prototype._getBarAltText = function(iBarIndex) {
		var sScale = this.getScale();
		var oBar = this.getData()[iBarIndex];
		var sMeaning = (this.getColorPalette().length) ? "" : this.getLocalizedColorMeaning(oBar.getColor());
		return oBar.getTitle() + " " + (oBar.getDisplayValue() ? oBar.getDisplayValue() : oBar.getValue()) + sScale + " " + sMeaning;
};

sap.suite.ui.commons.ComparisonChart.prototype.onsaptabnext = function(oEvent) {
	var oLast = this.$().find(":focusable").last();	// last tabstop in the control
	if (oLast) {
		this._bIgnoreFocusEvt = true;
		oLast.get(0).focus(); 
	}
};

sap.suite.ui.commons.ComparisonChart.prototype.onsaptabprevious = function(oEvent) {
	if (oEvent.target.id != oEvent.currentTarget.id) {
		var oFirst = this.$().find(":focusable").first();	// first tabstop in the control
		if (oFirst) {
			oFirst.get(0).focus(); 
		}
	}
};


sap.suite.ui.commons.ComparisonChart.prototype.ontap = function(oEvent) {
	if (!this.fireBarPress(oEvent)) {
	    if (sap.ui.Device.browser.internet_explorer) {
	        this.$().focus();
	    }
	    this.firePress();
    }
};

sap.suite.ui.commons.ComparisonChart.prototype.onkeydown = function(oEvent) {
	switch (oEvent.keyCode) {
		case jQuery.sap.KeyCodes.SPACE:
			oEvent.preventDefault();
			break;
			
		case jQuery.sap.KeyCodes.ARROW_LEFT:
		case jQuery.sap.KeyCodes.ARROW_UP:
			var oFocusables = this.$().find(":focusable");	// all tabstops in the control
			var iThis = oFocusables.index(oEvent.target);  // focused element index
			if (oFocusables.length > 0) {
				oFocusables.eq(iThis - 1).get(0).focus();	// previous tab stop element
				oEvent.preventDefault();
				oEvent.stopPropagation();
			}
			break;

		case jQuery.sap.KeyCodes.ARROW_DOWN:
		case jQuery.sap.KeyCodes.ARROW_RIGHT:
			var oFocusables = this.$().find(":focusable");	// all tabstops in the control
			var iThis = oFocusables.index(oEvent.target);  // focused element index
			if (oFocusables.length > 0) {
				oFocusables.eq((iThis + 1 < oFocusables.length) ? iThis + 1 : 0).get(0).focus();	// next tab stop element
				oEvent.preventDefault();
				oEvent.stopPropagation();
			}
			break;
	}
};

sap.suite.ui.commons.ComparisonChart.prototype.onkeyup = function(oEvent) {
    if (oEvent.which == jQuery.sap.KeyCodes.ENTER || oEvent.which == jQuery.sap.KeyCodes.SPACE) {
    	if (! this.fireBarPress(oEvent)) {
	        this.firePress();
	        oEvent.preventDefault();
        }
    }
};

sap.suite.ui.commons.ComparisonChart.prototype.fireBarPress = function(oEvent) {
	var oFocused = this.$().find(":focus").get(0);
	if (oFocused) {
		var iIndex = this.$().find(".sapSuiteCmpChartBar").index(jQuery(oFocused));
		var oComparisonData = this.getData()[iIndex];
		if (oComparisonData) {
			oComparisonData.firePress();
			oEvent.preventDefault();
			oEvent.stopPropagation();
			return true;
		}
	}
	return false;
};


sap.suite.ui.commons.ComparisonChart.prototype.setBarPressable = function(iBarIndex, bPressable) {
	if (bPressable) {
		var sBarAltText = this._getBarAltText(iBarIndex);
		jQuery.sap.byId(this.getId() + "-chart-item-bar-" + iBarIndex).addClass("sapSuiteUiCommonsPointer").attr("tabindex", 0).attr("title", sBarAltText).attr("role", "presentation").attr("aria-label", sBarAltText);
	} else {
        jQuery.sap.byId(this.getId() + "-chart-item-bar-" + iBarIndex).removeAttr("tabindex").removeClass("sapSuiteUiCommonsPointer").removeAttr("title").removeAttr("role").removeAttr("aria-label");
	}
};

sap.suite.ui.commons.ComparisonChart.prototype.onfocusin = function(oEvent) {
	if (this._bIgnoreFocusEvt) {
		this._bIgnoreFocusEvt = false;
		return;
	}
	if (this.getId()+"-hidden" == oEvent.target.id) {
		this.$().focus();
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}
};




