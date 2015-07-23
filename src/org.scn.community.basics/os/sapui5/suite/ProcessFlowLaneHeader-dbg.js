/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.ProcessFlowLaneHeader.
jQuery.sap.declare("sap.suite.ui.commons.ProcessFlowLaneHeader");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ProcessFlowLaneHeader.
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
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getIconSrc iconSrc} : sap.ui.core.URI</li>
 * <li>{@link #getPosition position} : int</li>
 * <li>{@link #getLaneId laneId} : string</li>
 * <li>{@link #getState state} : object</li>
 * <li>{@link #getZoomLevel zoomLevel} : sap.suite.ui.commons.ProcessFlowZoomLevel</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.ProcessFlowLaneHeader#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control gives you an overview of documents/items used in a process flow. The process flow is represented by the doughnut chart sections which are colored according to the documents’ status(es). This control can be used in two different ways. If you use it standalone, an event is fired and can be caught in to display the node map. If you use it with the node/document, it gives you an overview of the documents/items used in the process flow that is represented by the doughnut chart sections.
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.ProcessFlowLaneHeader
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.ProcessFlowLaneHeader", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"text" : {type : "string", group : "Misc", defaultValue : null},
		"iconSrc" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"position" : {type : "int", group : "Misc", defaultValue : null},
		"laneId" : {type : "string", group : "Misc", defaultValue : null},
		"state" : {type : "object", group : "Misc", defaultValue : null},
		"zoomLevel" : {type : "sap.suite.ui.commons.ProcessFlowZoomLevel", group : "Misc", defaultValue : null}
	},
	events : {
		"press" : {}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.ProcessFlowLaneHeader with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.ProcessFlowLaneHeader.extend
 * @function
 */

sap.suite.ui.commons.ProcessFlowLaneHeader.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>text</code>.
 * Text information that is displayed in the control.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.suite.ui.commons.ProcessFlowLaneHeader#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.suite.ui.commons.ProcessFlowLaneHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlowLaneHeader#setText
 * @function
 */


/**
 * Getter for property <code>iconSrc</code>.
 * Icon to be displayed in the middle of the control.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>iconSrc</code>
 * @public
 * @name sap.suite.ui.commons.ProcessFlowLaneHeader#getIconSrc
 * @function
 */

/**
 * Setter for property <code>iconSrc</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIconSrc  new value for property <code>iconSrc</code>
 * @return {sap.suite.ui.commons.ProcessFlowLaneHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlowLaneHeader#setIconSrc
 * @function
 */


/**
 * Getter for property <code>position</code>.
 * Position of the lane in the process flow control. Numbering of the position has to be sequential and needs to start from 0.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>position</code>
 * @public
 * @name sap.suite.ui.commons.ProcessFlowLaneHeader#getPosition
 * @function
 */

/**
 * Setter for property <code>position</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iPosition  new value for property <code>position</code>
 * @return {sap.suite.ui.commons.ProcessFlowLaneHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlowLaneHeader#setPosition
 * @function
 */


/**
 * Getter for property <code>laneId</code>.
 * Internal identification of the header.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>laneId</code>
 * @public
 * @name sap.suite.ui.commons.ProcessFlowLaneHeader#getLaneId
 * @function
 */

/**
 * Setter for property <code>laneId</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sLaneId  new value for property <code>laneId</code>
 * @return {sap.suite.ui.commons.ProcessFlowLaneHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlowLaneHeader#setLaneId
 * @function
 */


/**
 * Getter for property <code>state</code>.
 * Array of the ProcessFlowLaneState. The user can explicitly set an array with the two properties state and value of the state, for example [state:sap.suite.ui.commons.ProcessFlowNodeState.Neutral, value: 20]. Possible states are states are positive, negative, neutral, and planned.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>state</code>
 * @public
 * @name sap.suite.ui.commons.ProcessFlowLaneHeader#getState
 * @function
 */

/**
 * Setter for property <code>state</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oState  new value for property <code>state</code>
 * @return {sap.suite.ui.commons.ProcessFlowLaneHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlowLaneHeader#setState
 * @function
 */


/**
 * Getter for property <code>zoomLevel</code>.
 * Current zoom level for the lane header.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.suite.ui.commons.ProcessFlowZoomLevel} the value of property <code>zoomLevel</code>
 * @public
 * @name sap.suite.ui.commons.ProcessFlowLaneHeader#getZoomLevel
 * @function
 */

/**
 * Setter for property <code>zoomLevel</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.suite.ui.commons.ProcessFlowZoomLevel} oZoomLevel  new value for property <code>zoomLevel</code>
 * @return {sap.suite.ui.commons.ProcessFlowLaneHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlowLaneHeader#setZoomLevel
 * @function
 */


/**
 * This event is fired when the header is clicked.
 *
 * @name sap.suite.ui.commons.ProcessFlowLaneHeader#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.oEvent tbd
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.suite.ui.commons.ProcessFlowLaneHeader</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ProcessFlowLaneHeader</code>.<br/> itself. 
 *  
 * This event is fired when the header is clicked.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ProcessFlowLaneHeader</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.ProcessFlowLaneHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlowLaneHeader#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.suite.ui.commons.ProcessFlowLaneHeader</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ProcessFlowLaneHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlowLaneHeader#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'oEvent' of type <code>object</code> tbd</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ProcessFlowLaneHeader} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.ProcessFlowLaneHeader#firePress
 * @function
 */

// Start of sap/suite/ui/commons/ProcessFlowLaneHeader.js
jQuery.sap.require("sap.ui.core.IconPool");
jQuery.sap.require("sap.m.Image");

/*
 * Resource bundle for the localized strings
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype._oResBundle = null;

/**
 * Process Flow Lane Header controller.
 * @public
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.init = function() { // EXC_JSLINT_021
  this._virtualTableSpan = 1;

  if(!this._oResBundle) {
    this._oResBundle = sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons");
  }
};

sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.onBeforeRendering = function () {
  this.$("lh-icon").off('click', jQuery.proxy(this.ontouchend, this));
  this.$().unbind("click", this.ontouchend);
}

/**
 * Standard method called after the control rendering.
 * @public
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.onAfterRendering = function () {
  var jThis = this.$();
  var $icon = this.$("lh-icon");
  var sClickEvent = 'click';

  if (sap.ui.Device.support.touch) {
    sClickEvent = 'touchend';
  }
  if ($icon.length > 0) {
    $icon.on(sClickEvent, jQuery.proxy(this.ontouchend, this));
  //  $icon.addClass("suiteUiProcessFlowLaneHeaderProcessSymbolIcon");
    $icon.css("cursor", "inherit");
  }

  this.$().bind("click", jQuery.proxy(this.ontouchend, this));

  if (this._isHeaderMode()) {
     jThis.addClass("suiteUiProcessFlowLaneHeaderPointer");
  } else {
    jThis.removeClass("suiteUiProcessFlowLaneHeaderPointer");
  }

  // IE9 and FF long-word break does not works correctly, so allow to break the words anywhere
  if (sap.ui.Device.browser.msie || sap.ui.Device.browser.mozilla) {
    this.$("lh-text").css("word-break", "break-all");
  }

  // insert ellipsis for non-webkit browsers
  if (!this._ellipsisDisabled && !sap.suite.ui.commons.ProcessFlowLaneHeader._hasNativeLineClamp) {
    this._clampText();
  }
};

/**
 * Getter method for the symbol type. Returns the type of the node (variation of Lane header control).
 * For details on the available types see {sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.symbolType}.
 * @returns {String} symbol type to set for the control
 * @since 1.22
 * @private
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.getSymbolType = function () {
  return this._oSymbolType ? this._oSymbolType : sap.suite.ui.commons.ProcessFlowLaneHeader.symbolType.standardType;
};

/**
 * Setter method for the symbol type. Specifies the type of the node to display.
 * For details on the available types see {sap.suite.ui.commons.ProcessFlowLaneHeader.symbolType}.
 * @param {String} oSymbolType symbol type to set for the control
 * @param {Object} oObject the JS object context
 * @since 1.22
 * @private
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype._setSymbolType = function (oSymbolType, oObject) {
  oObject._oSymbolType = oSymbolType;
};

/**
 * Process symbol node factory method - creates a control with a square symbol used at the beginning of the lane header.
 * @param {Boolean} bHeaderMode true if the hand cursor should be displayed above the header
 * @returns {sap.suite.ui.commons.ProcessFlowLaneHeader} a new start symbol node
 * @since 1.22
 * @public
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.createNewStartSymbol = function(bHeaderMode) {
  var oStaticHeader = sap.suite.ui.commons.ProcessFlowLaneHeader
    , oStartSymbol = new sap.suite.ui.commons.ProcessFlowLaneHeader({
      laneId: "processFlowLaneStart"
    })
    ;

  oStartSymbol._setSymbolType(oStaticHeader.symbolType.startSymbol, oStartSymbol);
  oStartSymbol._setHeaderMode(bHeaderMode);
  return oStartSymbol;
};

/**
 * Process symbol node factory method - creates a control with a square symbol used at the end of the lane header.
 * @param {Boolean} bHeaderMode true if the hand cursor should be displayed above the header
 * @returns {sap.suite.ui.commons.ProcessFlowLaneHeader} a new end symbol node
 * @since 1.22
 * @public
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.createNewEndSymbol = function(bHeaderMode) {
  var oStaticHeader = sap.suite.ui.commons.ProcessFlowLaneHeader
    , oEndSymbol = new sap.suite.ui.commons.ProcessFlowLaneHeader({
      laneId: "processFlowLaneEnd"
    })
    ;

  oEndSymbol._setSymbolType(oStaticHeader.symbolType.endSymbol, oEndSymbol);
  oEndSymbol._setHeaderMode(bHeaderMode);
  return oEndSymbol;
};

/**
 * Process symbol node factory method - creates a control with a '>>>' symbol.
 * @param {Boolean} bHeaderMode true if the hand cursor should be displayed above the header
 * @returns {sap.suite.ui.commons.ProcessFlowLaneHeader} a new process symbol node
 * @since 1.22
 * @public
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.createNewProcessSymbol = function(bHeaderMode) {
  var oStaticHeader = sap.suite.ui.commons.ProcessFlowLaneHeader
    , oProcessSymbol = new sap.suite.ui.commons.ProcessFlowLaneHeader({
      laneId: "processFlowLaneProcess", iconSrc: "sap-icon://process"
    })
    ;

  oProcessSymbol._setSymbolType(oStaticHeader.symbolType.processSymbol, oProcessSymbol);
  oProcessSymbol._setHeaderMode(bHeaderMode);
  return oProcessSymbol;
};

/**
 * Symbol type enumeration. Describes the type of the rendered control.
 * @since 1.22
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.symbolType = {
    startSymbol : "startSymbol"
  , endSymbol : "endSymbol"
  , processSymbol : "processSymbol"
  , standardType : "standardType"
};

sap.suite.ui.commons.ProcessFlowLaneHeader._constants = {
    nHalfGapSize : 0.0241 // half gap size in radians (cca. 2 px for full gap) // 5
  , nMinPercentage : 0.025 // 1/40, was nHalfGapSize / Math.PI (percentage equal to the size of the gap) = 0.0077
  , nRingThickness : 5
  , nRingInnerRadius : 24
  , nPositionX : 32
  , nPositionY : 32
  , nOuterCircleRadius : 32
  , sOuterCircleStrokeColor : "OuterCircleStrikeColor"//used implicitly to set CSS class
  , nOuterCircleStrokeWidth: 1
  , sSectorPositiveColor : "suiteUiCommonsProcessFlowHeaderPositiveColor" // CSS class
  , sSectorNegativeColor : "suiteUiCommonsProcessFlowHeaderNegativeColor" // CSS class
  , sSectorNeutralColor : "suiteUiCommonsProcessFlowHeaderNeutralColor" // CSS class
  , sSectorPlannedColor : "suiteUiCommonsProcessFlowHeaderPlannedColor" // CSS class
  , sEllipsis : '...'
  , nEllipsisLength : 3
};

/**
 * Method clamps the values provided in the input array to 0 in case of values lower than nMinValue.
 * The method modifies the input array to one with non-negative values.
 * @param {number[]} aPerc array of values to clamp (array of numbers)
 * @param {number} nMinValue minimal value which is still not clamped to nClampToValue
 * @param {number} nClampToValue value set to aPerc[i] in case aPerc[i] < nMinValue
 * @return {Boolean} true if at least 1 value was clamped
 * @since 1.22
 * @private
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype._clampValues = function(aPerc, nMinValue, nClampToValue) {
  var i = aPerc.length - 1
    , bClamped = false
    , v
   ;

  while (i >= 0) {
    v = aPerc[i];
    if (v < nMinValue) {
      aPerc[i] = nClampToValue;
      bClamped = true;
    }
    i--;
  }

  return bClamped;
};

/**
 * Method re-scales the values in input array aPerc so their sum equals to 1.
 * The method modifies the input array to a rescaled one.
 * In case all the input values in aPerc are 0, the array is left unchanged.
 * All the values between (0, nMinPercentage> are set to nMinPercentage and the rest is rescaled accounting this change.
 * @param {number[]} aPerc array of values to re-scale (array of numbers)
 * @param {number} nMinPercentage the minimal percentage to consider (lower values will be rounded up to this value)
 * @since 1.22
 * @private
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype._rescaleToUnit = function(aPerc, nMinPercentage) {
  var s
    , i
    , n
    , m
    , v
    , f
    ;

  // if undefined, null or 0 nMinPercentage
  if (!nMinPercentage) {
    nMinPercentage = 0;
  }

  i = aPerc.length - 1;
  s = 0;
  n = m = 0;

  while (i >= 0) {
    v = aPerc[i];
    if (v > 0) {
      if (v <= nMinPercentage) {
        m++;
      } else {
        s += aPerc[i];
      }
      n++;
    }
    i--;
  }

  s -= (n - m) * nMinPercentage;
  f = (1 - n * nMinPercentage) / s;

  i = aPerc.length - 1;
  while (i >= 0) {
    v = aPerc[i];
    if (v > 0) {
      aPerc[i] =  (v <= nMinPercentage) ? nMinPercentage : ((v - nMinPercentage) * f + nMinPercentage);
    }
    i--;
  }
};

/**
 * Method retrieves the number of gaps to be put on the donut chart given the input percentages.
 * Zero percentages are ignored. For the case of 1 value there is no gap to be displayed.
 * @param {number[]} aPerc array of input percentages (array of doubles)
 * @return {number} nGaps number of gaps
 * @since 1.22
 * @private
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype._countGaps = function(aPerc) {
  var i = aPerc.length - 1
   ,  nGaps = 0
   ;

  while (i >= 0) {
    if (aPerc[i] > 0) {
      nGaps++;
    }
    i--;
  }

  if (nGaps === 1) {
    nGaps = 0;
  }

  return nGaps;
};

/**
 * Method re-scales the values in aPerc array by the provided factor.
 * The method modifies the aPerc array to the rescaled one.
 * @param {number[]} aPerc array of values to re-scale
 * @param {number} nFactor the scaling factor
 * @since 1.22
 * @private
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype._rescaleByFactor = function(aPerc, nFactor) {
  var i = aPerc.length - 1;

  while (i >= 0) {
    aPerc[i]  *= nFactor;
    i--;
  }
};

/**
 * Map of donut sector positions to the sector colors.
 * @private
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype._colorMap = [
    sap.suite.ui.commons.ProcessFlowLaneHeader._constants.sSectorPositiveColor
  , sap.suite.ui.commons.ProcessFlowLaneHeader._constants.sSectorNegativeColor
  , sap.suite.ui.commons.ProcessFlowLaneHeader._constants.sSectorPlannedColor
  , sap.suite.ui.commons.ProcessFlowLaneHeader._constants.sSectorNeutralColor
];

/**
 * Calculation of the donut sector angle start/end definitions along with their colors.
 * @param {number[]} aPerc input percentage array (should sum up to 1)
 * @param {number} nFullGap angle for the sector gap (in radians)
 * @returns {aDefinitions[]} aDefinitions
 * @since 1.22
 * @private
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype._calculateSectorRangeDefinitions = function(aPerc, nFullGap) {
  var aDefinitions = []
    , b = -Math.PI/2
    , e
    , m = aPerc.length
    , i = 0
    ;

  while (i < m) {
    if (aPerc[i] > 0) {
      e = b + 2 * Math.PI * aPerc[i];
      aDefinitions.push({start: b, end: e, color: this._colorMap[i]});
      b = e + nFullGap;
    }
    i++;
  }

  return aDefinitions;
};

/**
 * Helper method for donut sector color selection.
 * @param {number[]} aPerc array of input percentages
 * @return {String} color selection
 * @since 1.22
 * @private
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype._selectColor = function(aPerc) {
  var sColor;

  if (aPerc[0]) {
    sColor = sap.suite.ui.commons.ProcessFlowLaneHeader._constants.sSectorPositiveColor;
  } else if (aPerc[1]) {
    sColor = sap.suite.ui.commons.ProcessFlowLaneHeader._constants.sSectorNegativeColor;
  } else if (aPerc[2]) {
    sColor = sap.suite.ui.commons.ProcessFlowLaneHeader._constants.sSectorPlannedColor;
  } else {
    sColor = sap.suite.ui.commons.ProcessFlowLaneHeader._constants.sSectorNeutralColor;
  }

  return sColor;
};

/**
 * Method renders the donut sectors of the control. The method reads the "amounts" property and sets the amount
 * percentages into the donut segments accordingly.
 * @param {sap.ui.core.RenderManager} oRm the render manager into which the control will be rendered
 * @since 1.22
 * @private
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype._renderDonutPercentages = function(oRm) { // EXC_SAP_006_1
  var aStateAmounts = this.getState()
      , nGaps = 0
      , aSectorDefs
      , aPerc = [0, 0, 0, 0]
      , nScaleFactor
      , sColor
      , nHalfGap = sap.suite.ui.commons.ProcessFlowLaneHeader._constants.nHalfGapSize
      , nRadiusInner = sap.suite.ui.commons.ProcessFlowLaneHeader._constants.nRingInnerRadius
      , nRingThickness = sap.suite.ui.commons.ProcessFlowLaneHeader._constants.nRingThickness
      , nRadiusOuter = sap.suite.ui.commons.ProcessFlowLaneHeader._constants.nRingInnerRadius + nRingThickness
      , sOuterCircleStrokeColor = sap.suite.ui.commons.ProcessFlowLaneHeader._constants.sOuterCircleStrokeColor
      , nOuterCircleStrokeWidth = sap.suite.ui.commons.ProcessFlowLaneHeader._constants.nOuterCircleStrokeWidth
      , nOuterCircleRadius = sap.suite.ui.commons.ProcessFlowLaneHeader._constants.nOuterCircleRadius
      , nPositionX = sap.suite.ui.commons.ProcessFlowLaneHeader._constants.nPositionX
      , nPositionY = sap.suite.ui.commons.ProcessFlowLaneHeader._constants.nPositionY
      , nMinPercentage = sap.suite.ui.commons.ProcessFlowLaneHeader._constants.nMinPercentage
      ;

  if (aStateAmounts &&
    Object.prototype.toString.call(aStateAmounts) === '[object Array]' &&
    (aStateAmounts.length > 0)) {
    aStateAmounts.forEach(function(oStateAmount) {
      switch (oStateAmount.state) {
        case sap.suite.ui.commons.ProcessFlowNodeState.Positive:
          aPerc[0] = oStateAmount.value;
        break;
        case sap.suite.ui.commons.ProcessFlowNodeState.Negative:
          aPerc[1] = oStateAmount.value;
        break;
        case sap.suite.ui.commons.ProcessFlowNodeState.Planned:
          aPerc[2] = oStateAmount.value;
        break;
        case sap.suite.ui.commons.ProcessFlowNodeState.Neutral: // EXC_JSHINT_016
        default: // EXC_JSLINT_073
          aPerc[3] = oStateAmount.value;
      }
    });

    this._clampValues(aPerc, 0, 0);

    this._rescaleToUnit(aPerc);
    this._rescaleToUnit(aPerc, nMinPercentage);

    nGaps = this._countGaps(aPerc);

    nScaleFactor = (1 - nGaps * nHalfGap/Math.PI); // adjust the percentages for the gaps
    this._rescaleByFactor(aPerc, nScaleFactor);

    this._renderCircle(oRm, sOuterCircleStrokeColor, nOuterCircleStrokeWidth,
      nPositionX, nPositionY, nOuterCircleRadius);

    if (nGaps > 0) {
      aSectorDefs = this._calculateSectorRangeDefinitions(aPerc, 2 * nHalfGap);
      this._renderDonutSectors(oRm, aSectorDefs, nPositionX, nPositionY, nRadiusInner, nRadiusOuter);
    } else {
      sColor = this._selectColor(aPerc);
      this._renderCircle(oRm, sColor, nRingThickness, nPositionX, nPositionY,
        nRadiusInner + nRingThickness/2);
    }
  } else {
    this._renderCircle(oRm, sOuterCircleStrokeColor, nOuterCircleStrokeWidth,
      nPositionX, nPositionY, nOuterCircleRadius);
  }
};

/**
 * Method renders the white circle around the donut segments.
 * @param {sap.ui.core.RenderManager} oRm the render manager into which the control will be rendered
 * @param {String} sColor background color of the circle
 * @param {String} sStrokeColor the stroke color of the circle
 * @param {number} nStrokeWidth circle stroke width in pixels
 * @param {number} nPositionX coordinate x of the middle of circle in pixels
 * @param {number} nPositionY coordinate y of the middle of circle in pixels
 * @param {number} nRadius radius in pixels
 * @since 1.22
 * @private
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype._renderCircle =
  function (oRm, sStrokeColor, nStrokeWidth, nPositionX, nPositionY, nRadius) { // EXC_JSHINT_034
  oRm.write("<circle");
  oRm.writeAttribute("id", this.getId() + "-donut-circle");
  if (sStrokeColor != "OuterCircleStrikeColor"){
    oRm.writeAttribute("class", "suiteUiCommonsProcessFlowHeaderIconFill " + sStrokeColor);
  }
  else{
    oRm.writeAttribute("class", "suiteUiCommonsProcessFlowHeaderIconFill");
  }
  oRm.writeAttribute("stroke-width", nStrokeWidth);
  oRm.writeAttribute("cx", nPositionX);
  oRm.writeAttribute("cy", nPositionY);
  oRm.writeAttribute("r", nRadius);
  oRm.write("></circle>"); // div element for the outer circle
};

/**
 * Method renders all the donut sector paths.
 * @param {sap.ui.core.RenderManager} oRm the render manager into which the control will be rendered
 * @param {{begin:number, end:number, color:String}[]} aSectorDefs array of donut sector definitions
 * @param {number} nPositionX coordinate x of the center of sector in pixels
 * @param {number} nPositionY coordinate y of the center of sector in pixels
 * @param {number} nRadiusInner inner radius in pixels
 * @param {number} nRadiusOuter outer radius in pixels
 * @since 1.22
 * @private
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype._renderDonutSectors =
  function (oRm, aSectorDefs, nPositionX, nPositionY, nRadiusInner, nRadiusOuter) { // EXC_JSHINT_034
  var i = 0
    , nDefLength = aSectorDefs.length
    , oSector
    , sPath
    ;

  while (i < nDefLength) {
    oSector = aSectorDefs[i];
    sPath = this._getDonutSectorPath(nPositionX, nPositionY, oSector.start, oSector.end, nRadiusInner, nRadiusOuter);
    oRm.write("<path");
    oRm.writeAttribute("id", this.getId() + "-donut-segment-" + i);
    oRm.writeAttribute("d", sPath);
    oRm.writeAttribute("class", oSector.color);
    oRm.writeAttribute("opacity", "1");
    oRm.write("></path>");
    i++;
  }
};

/**
 * Helper method returning SVG path data for a single donut sector.
 * @param {number} nPositionX coordinate x of the center of sector in pixels
 * @param {number} nPositionY coordinate y of the center of sector in pixels
 * @param {number} nStartAngle start angle in radians (rotating right - resp. negative amount of real angle)
 * @param {number} nEndAngle end angle
 * @param {number} nRadiusInner inner radius in pixels
 * @param {number} nRadiusOuter outer radius in pixels
 * @returns {string} string definition of the SVG path put into the "d" attribute of the svg "path" element.
 * @since 1.22
 * @private
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype._getDonutSectorPath =
    function (nPositionX, nPositionY, nStartAngle, nEndAngle, nRadiusInner, nRadiusOuter) { // EXC_JSHINT_034
    var nOuter = 0  /* outer angle flag */
      , p1, p2, p3, p4
      , d
      , cs, ce, ss, se
      ;

    if ((nEndAngle - nStartAngle) % (Math.PI * 2) > Math.PI) {
      nOuter = 1;
    }

    cs = Math.cos(nStartAngle);
    ce = Math.cos(nEndAngle);
    ss = Math.sin(nStartAngle);
    se = Math.sin(nEndAngle);

    p1 = (nPositionX + nRadiusInner * cs).toFixed(3) + ',' + (nPositionY + nRadiusInner * ss).toFixed(3);
    p2 = (nPositionX + nRadiusOuter * cs).toFixed(3) + ',' + (nPositionY + nRadiusOuter * ss).toFixed(3);
    p3 = (nPositionX + nRadiusOuter * ce).toFixed(3) + ',' + (nPositionY + nRadiusOuter * se).toFixed(3);
    p4 = (nPositionX + nRadiusInner * ce).toFixed(3) + ',' + (nPositionY + nRadiusInner * se).toFixed(3);
    d = "M" + p1 +
      "L" + p2 +
      "A" + nRadiusOuter + ',' + nRadiusOuter + " 0 " + nOuter + " 1 " + p3 +
      "L" + p4 +
      "A" + nRadiusInner + ',' + nRadiusInner + " 0 " + nOuter + " 0 " + p1 +
      "z";

    return d;
 };

 /**
  * Gets the image control for the Header, creating it if it does not already exist.
  *
  * If the control is already created and the value of sSrc has changed then the old control will be destroyed
  * and a new control returned.
  *
  * @param {String} sId The icon control id
  * @param {sap.ui.core.URI} sSrc The URI of the image
  * @returns {sap.ui.core.Control}
  * @since 1.22
  * @private
  */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype._getImage = function(sId, sSrc) {
  this._destroyImage();

  if (this._oImageControl) {
    this._oImageControl.setSrc(sSrc);
  } else {
    this._oImageControl = sap.ui.core.IconPool.createControlByURI(sSrc, sap.m.Image);
    this._oImageControl.sId = sId;
    this._oImageControl.setParent(this, null, true);
  }

  return this._oImageControl;
};

/**
 * Function is called when exiting the control, clean up.
 * @private
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.exit = function() {
  this._destroyImage();
  this.$().unbind("click", this.ontouchend);
};

/**
 * Resource cleanup for the control icon.
 * @since 1.22
 * @private
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype._destroyImage = function() {
  if (this._oImageControl) {
    this._oImageControl.destroy();
  }

  this._oImageControl = null;
};

/**
 * Press event handler for control click.
 * @param {sap.ui.base.Event} oEvent
 * @since 1.22
 * @private
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype.ontouchend = function(oEvent) {
  if (oEvent && !oEvent.isDefaultPrevented()) {
    oEvent.preventDefault();
  }
  if (this) {
    this.firePress(this);
  }
  if (oEvent && !oEvent.isPropagationStopped()) {
    oEvent.stopPropagation();
  }
  if (oEvent && !oEvent.isImmediatePropagationStopped()) {
    oEvent.stopImmediatePropagation();
  }
};

/**
 * Header mode setter. Header mode is true when a hand cursor should be displayed above the control.
 * @param {Boolean} bHeaderMode true if in header mode
 * @since 1.22
 * @private
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype._setHeaderMode = function(bHeaderMode) {
  this._bHeaderMode = bHeaderMode;
};

/**
 * Header mode getter. Header mode is true when a hand cursor should be displayed above the control.
 * @returns {boolean} true if the control is in header mode, false otherwise
 * @since 1.22
 * @private
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype._isHeaderMode = function() {
  return this._bHeaderMode;
};

/**
 * Clamps the wrapping text to _constants.nMaxTextLines lines and appends ellipsis ('...' if needed).
 * @since 1.22
 * @private
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype._clampText = function() { // EXC_SAP_006_1
  var $text = this.$("lh-text").length ? this.$("lh-text") : null
    , sText = this.getText()
    , sLastText = ""
    , sEllipsis = sap.suite.ui.commons.ProcessFlowLaneHeader._constants.sEllipsis
    , iEllipsisLength = sap.suite.ui.commons.ProcessFlowLaneHeader._constants.nEllipsisLength
    , iStartPos = iEllipsisLength + 1
    , iMidPos
    , iEndPos = sText.length
    , iMaxHeight
    , bVisibility
    ;

  if ($text) {
    iMaxHeight = parseInt($text.css("height").slice(0, -2), 10); // i.e. parse number from "32px"

    // we expect that less than ellipsis length number of characters never needs to be clamped

    // if text overflow - clamping is needed
    if ($text[0].scrollHeight > iMaxHeight) {

      // save the visibility state and hide the text
      bVisibility = $text.css("visibility");
      $text.css("visibility", "hidden");

      // search by bisection to find the position of ellipsis
      sLastText = sText;
      do {

        // check the middle position and update text
        iMidPos = (iStartPos + iEndPos) >> 1;

        $text.textContent = sText.slice(0, iMidPos - iEllipsisLength) + sEllipsis;
        // check for text overflow
        if ($text.scrollHeight > iMaxHeight) {
          iEndPos = iMidPos;
        } else {
          iStartPos = iMidPos;
          sLastText = $text.textContent;
        }
      } while(iEndPos - iStartPos > 1);

      // reset to the original visibility state
      $text.css("visibility", bVisibility);
    }

    // set the last valid solution in case of overflow
    if ($text.scrollHeight > iMaxHeight) {
      $text.textContent = sLastText;
    }
  }
};

/**
 * Defines whether browser supports native line clamp or not
 *
 * @returns {Boolean}
 * @private
 * @readonly
 * @since 1.22
 * @static
 */
sap.suite.ui.commons.ProcessFlowLaneHeader._hasNativeLineClamp = (function() {
  return document.documentElement.style.webkitLineClamp !== undefined;
}());

/**
 * Enable/disable ellipsis support for non-webkit browsers (for the case where there is no native ellipsis support).
 * It is recommended to disable the ellipsis support in case the control is inserted
 * into a container of variable width as the ellipsis position is not updated automatically.
 * By default the ellipsis support is enabled.
 *
 * @param {Boolean} bSupportEnabled false if the ellipsis support is to be disabled
 * @since 1.22
 * @public
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.enableEllipsisSupportForText = function (bSupportEnabled) {
  this._ellipsisDisabled = !bSupportEnabled;
};

/**
 * Setter for the virtual table span in PF node element count.
 *
 * @param {number} [iElements] number of PF node elements which will be under this header control
 * @since 1.23
 * @see sap.suite.ui.commons.sap.suite.ui.commons.ProcessFlowLaneHeader._setVirtualTableSpan
 * @private
 */
sap.suite.ui.commons.ProcessFlowLaneHeader._setVirtualTableSpan = function (iElements) {
  this._virtualTableSpan = iElements;
};

/**
 * Getter for the virtual table span in object count. The value is used by the PF renderer to set a colspan for 2*iElements+1 lanes to fit this lane header control.
 * By default is set to 1;
 *
 * @returns {number} number of PF node elements which will be under this header control
 * @since 1.23
 * @private
 */
sap.suite.ui.commons.ProcessFlowLaneHeader._getVirtualTableSpan = function () {
  return this._virtualTableSpan;
};

/**
 * Returns ARIA text for current lane header object.
 * @returns {String} message for screen reader
 * @private
 */
sap.suite.ui.commons.ProcessFlowLaneHeader.prototype._getAriaText = function() {
  var ariaText = "";
  var oStatuses = this.getState();
  if (oStatuses){
    var statusValues = [];
    for (var i in oStatuses){
      statusValues.push(oStatuses[i].value);
    }

    // Needed to rescale the values to percentage
    this._clampValues(statusValues, 0, 0);
    this._rescaleToUnit(statusValues);

    ariaText = this._oResBundle.getText('PF_ARIA_STATUS');
    for(var j in oStatuses){
      if (oStatuses[j].value != 0){
        var valueText = " " + Math.round(statusValues[j] * 100) + "% " + oStatuses[j].state + ",";
        ariaText = ariaText.concat(valueText);
      }
    }
    // Removes the last character which is a ','
    ariaText = ariaText.slice(0, -1);
  }
  return ariaText;
};