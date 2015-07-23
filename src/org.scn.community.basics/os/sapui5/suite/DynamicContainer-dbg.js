/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.DynamicContainer.
jQuery.sap.declare("sap.suite.ui.commons.DynamicContainer");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new DynamicContainer.
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
 * <li>{@link #getDisplayTime displayTime} : int (default: 5000)</li>
 * <li>{@link #getTransitionTime transitionTime} : int (default: 500)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTiles tiles} : sap.suite.ui.commons.GenericTile[]</li></ul>
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
 * The control that displays multiple GenericTile controls as changing slides.
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.DynamicContainer
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.DynamicContainer", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"displayTime" : {type : "int", group : "Appearance", defaultValue : 5000},
		"transitionTime" : {type : "int", group : "Appearance", defaultValue : 500}
	},
	aggregations : {
		"tiles" : {type : "sap.suite.ui.commons.GenericTile", multiple : true, singularName : "tile"}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.DynamicContainer with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.DynamicContainer.extend
 * @function
 */


/**
 * Getter for property <code>displayTime</code>.
 * The time of the slide display in milliseconds.
 *
 * Default value is <code>5000</code>
 *
 * @return {int} the value of property <code>displayTime</code>
 * @public
 * @name sap.suite.ui.commons.DynamicContainer#getDisplayTime
 * @function
 */

/**
 * Setter for property <code>displayTime</code>.
 *
 * Default value is <code>5000</code> 
 *
 * @param {int} iDisplayTime  new value for property <code>displayTime</code>
 * @return {sap.suite.ui.commons.DynamicContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DynamicContainer#setDisplayTime
 * @function
 */


/**
 * Getter for property <code>transitionTime</code>.
 * The time of the slide changing in milliseconds.
 *
 * Default value is <code>500</code>
 *
 * @return {int} the value of property <code>transitionTime</code>
 * @public
 * @name sap.suite.ui.commons.DynamicContainer#getTransitionTime
 * @function
 */

/**
 * Setter for property <code>transitionTime</code>.
 *
 * Default value is <code>500</code> 
 *
 * @param {int} iTransitionTime  new value for property <code>transitionTime</code>
 * @return {sap.suite.ui.commons.DynamicContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DynamicContainer#setTransitionTime
 * @function
 */


/**
 * Getter for aggregation <code>tiles</code>.<br/>
 * The set of Generic Tiles to be shown in the control.
 * 
 * @return {sap.suite.ui.commons.GenericTile[]}
 * @public
 * @name sap.suite.ui.commons.DynamicContainer#getTiles
 * @function
 */


/**
 * Inserts a tile into the aggregation named <code>tiles</code>.
 *
 * @param {sap.suite.ui.commons.GenericTile}
 *          oTile the tile to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the tile should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the tile is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the tile is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.DynamicContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DynamicContainer#insertTile
 * @function
 */

/**
 * Adds some tile <code>oTile</code> 
 * to the aggregation named <code>tiles</code>.
 *
 * @param {sap.suite.ui.commons.GenericTile}
 *            oTile the tile to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.DynamicContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DynamicContainer#addTile
 * @function
 */

/**
 * Removes an tile from the aggregation named <code>tiles</code>.
 *
 * @param {int | string | sap.suite.ui.commons.GenericTile} vTile the tile to remove or its index or id
 * @return {sap.suite.ui.commons.GenericTile} the removed tile or null
 * @public
 * @name sap.suite.ui.commons.DynamicContainer#removeTile
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>tiles</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.GenericTile[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.DynamicContainer#removeAllTiles
 * @function
 */

/**
 * Checks for the provided <code>sap.suite.ui.commons.GenericTile</code> in the aggregation named <code>tiles</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.suite.ui.commons.GenericTile}
 *            oTile the tile whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.suite.ui.commons.DynamicContainer#indexOfTile
 * @function
 */
	

/**
 * Destroys all the tiles in the aggregation 
 * named <code>tiles</code>.
 * @return {sap.suite.ui.commons.DynamicContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.DynamicContainer#destroyTiles
 * @function
 */

// Start of sap/suite/ui/commons/DynamicContainer.js
sap.suite.ui.commons.DynamicContainer.prototype.init = function() {
	this._oDelegate = {
		onAfterRendering: function(oEvent) {
			oEvent.srcControl.$().removeAttr("tabindex");
		}
	};
};

sap.suite.ui.commons.DynamicContainer.prototype.onAfterRendering = function() {
	var iTilesCount = this.getTiles().length;
	this._bAnimationPause = false;
	this._iCurrAnimationTime = 0;
	
	if (iTilesCount) {
		this._scrollToNextTile();
		if (iTilesCount > 1) {
			this._startAnimation();
		}
	}
};

sap.suite.ui.commons.DynamicContainer.prototype._toggleAnimation = function() {
	if (this.getTiles().length > 1) {
		if (this._bAnimationPause) {
			this._startAnimation();
		} else {
			this._stopAnimation();
		}
	}

	this._bAnimationPause = !this._bAnimationPause;
};

sap.suite.ui.commons.DynamicContainer.prototype._stopAnimation = function() {
	this._iCurrAnimationTime += Date.now() - this._iStartTime;
	
	clearTimeout(this._sTimerId);

	if (this._iCurrentTile != undefined) {
		var oWrapperTo = jQuery.sap.byId(this.getId() + "-wrapper-" + this._iCurrentTile);
		oWrapperTo.stop();
	}
	
	if (this._iPrvTile != undefined) {
		var oWrapperFrom = jQuery.sap.byId(this.getId() + "-wrapper-" + this._iPrvTile);
		oWrapperFrom.stop();
	}
};

sap.suite.ui.commons.DynamicContainer.prototype.onBeforeRendering = function() {
	this._stopAnimation();
	
	this._sWidth = this._sHeight = undefined;
	this._iCurrentTile = this._iPrvTile = undefined;
};

sap.suite.ui.commons.DynamicContainer.prototype._startAnimation = function() {
	var iDisplayTime = this.getDisplayTime() - this._iCurrAnimationTime;
	var that = this;
	
	clearTimeout(this._sTimerId);
	
	this._sTimerId = setTimeout(function() {
		that._scrollToNextTile();
	}, iDisplayTime);
	
	this._iStartTime = Date.now();
};

sap.suite.ui.commons.DynamicContainer.prototype.exit = function() {
	this._stopAnimation();
};

sap.suite.ui.commons.DynamicContainer.prototype._scrollToNextTile = function(bPause) {
	var iTransitionTime = this._iCurrAnimationTime - this.getDisplayTime();
	iTransitionTime = this.getTransitionTime() - (iTransitionTime > 0 ? iTransitionTime : 0);
	var bFirstAnimaion = iTransitionTime == this.getTransitionTime();
	
	if (bFirstAnimaion) {
		var iNxtTile = this._getNextTileIndex(this._iCurrentTile);
		
		this._iPrvTile = this._iCurrentTile;
		this._iCurrentTile = iNxtTile;
	}
	
	var oWrapperTo = jQuery.sap.byId(this.getId() + "-wrapper-" + this._iCurrentTile);
		
	var bDoAnimate = this._iPrvTile != undefined;
	
	var sDir = sap.ui.getCore().getConfiguration().getRTL() ? "right" : "left";
	if (bDoAnimate) {
		var oWrapperFrom = jQuery.sap.byId(this.getId() + "-wrapper-" + this._iPrvTile);
		var sWidthFrom = oWrapperFrom.css("width");
		
		var fWidthTo= parseFloat(oWrapperTo.css("width"));
		var fWidthFrom = parseFloat(sWidthFrom);
		var bChangeSizeBefore = fWidthFrom < fWidthTo;
		
		if (bChangeSizeBefore) {
			this._changeSizeTo(this._iCurrentTile);
		}
		
		if (bFirstAnimaion) {
			oWrapperTo.css(sDir, sWidthFrom);
		}
		
		var oDir = {};
		oDir[sDir] = "-" + sWidthFrom;
	
		var that = this;
		oWrapperFrom.animate(oDir, {
			duration: iTransitionTime,
			done: function() {
				if (!bChangeSizeBefore) {
					that._changeSizeTo(that._iCurrentTile);
				}
				oWrapperFrom.css(sDir, "");
			}
		});		
		oDir[sDir] = "0px";

		oWrapperTo.animate(oDir, {
			duration: iTransitionTime,
			done: function() {
				that._iCurrAnimationTime = 0;
				if(!bPause) {
					that._startAnimation();	
				}
			}
		});
	} else {
		this._changeSizeTo(this._iCurrentTile);
		oWrapperTo.css(sDir, "0px");
	}
	this._setAriaDescriptor();
};
/*
sap.suite.ui.commons.DynamicContainer.prototype._scrollToPrevTile = function(bPause) {
	var iTransitionTime = this._iCurrAnimationTime - this.getDisplayTime();
	iTransitionTime = this.getTransitionTime() - (iTransitionTime > 0 ? iTransitionTime : 0);
	var bFirstAnimaion = iTransitionTime == this.getTransitionTime();
	
	if (bFirstAnimaion) {
		var iNxtTile = this._getPrevTileIndex(this._iCurrentTile);
		
		this._iPrvTile = this._iCurrentTile;
		this._iCurrentTile = iNxtTile;
	}
	
	var oWrapperTo = jQuery.sap.byId(this.getId() + "-wrapper-" + this._iCurrentTile);
		
	var bDoAnimate = this._iPrvTile != undefined;
	
	var sDir = sap.ui.getCore().getConfiguration().getRTL() ? "right" : "left";
	if (bDoAnimate) {
		var oWrapperFrom = jQuery.sap.byId(this.getId() + "-wrapper-" + this._iPrvTile);
		var sWidthFrom = oWrapperFrom.css("width");
		var sWidthTo = oWrapperTo.css("width");
		
		var fWidthTo= parseFloat(sWidthTo);
		var fWidthFrom = parseFloat(sWidthFrom);
		var bChangeSizeBefore = fWidthFrom < fWidthTo;
		
		if (bChangeSizeBefore) {
			this._changeSizeTo(this._iCurrentTile);
		}
		
		if (bFirstAnimaion) {
			oWrapperTo.css(sDir, "-" + sWidthTo);
		}
		
		var that = this;

		var oDir = {};

		oDir[sDir] = "0px";		
		oWrapperTo.animate(oDir, {
			duration: iTransitionTime,
			done: function() {
				that._iCurrAnimationTime = 0;
				if(!bPause) {
					that._startAnimation();	
				}
			}
		});
	
		oDir[sDir] = sWidthTo;
		oWrapperFrom.animate(oDir, {
			duration: iTransitionTime,
			done: function() {
				if (!bChangeSizeBefore) {
					that._changeSizeTo(that._iCurrentTile);
				}
				oWrapperFrom.css(sDir, "");
			}
		});		

	} else {
		this._changeSizeTo(this._iCurrentTile);
		oWrapperTo.css(sDir, "0px");
	}
	this._setAriaDescriptor();
};
*/
sap.suite.ui.commons.DynamicContainer.prototype._setAriaDescriptor = function() {
	this.$().attr("aria-label", this.getTiles()[this._iCurrentTile].getAltText().replace(/\s/g, " "));
};

sap.suite.ui.commons.DynamicContainer.prototype._changeSizeTo = function(iNxtTile) {
	var oNxtTile = this.getTiles()[iNxtTile];
	if (this._sFrameType) {
		this.$().removeClass(this._sFrameType);
	}
	
	if (this._sSize) {
		this.$().removeClass(this._sSize);
	}
	this.$().addClass(oNxtTile.getFrameType()).addClass(oNxtTile.getSize());

	this._sFrameType = oNxtTile.getFrameType();
	this._sSize = oNxtTile.getSize();
};

sap.suite.ui.commons.DynamicContainer.prototype._getNextTileIndex = function(iIndex) {
	if (iIndex + 1 < this.getTiles().length) {
		return iIndex + 1;
	}
	
	return 0;
};

sap.suite.ui.commons.DynamicContainer.prototype._getPrevTileIndex = function(iIndex) {
	if (iIndex - 1 >= 0) {
		return iIndex - 1;
	}
	
	return this.getTiles().length-1;
};

sap.suite.ui.commons.DynamicContainer.prototype.ontouchstart = function (oEvent) {
    this.addStyleClass("sapSuiteDCHvr");
};

sap.suite.ui.commons.DynamicContainer.prototype.ontouchend = function (oEvent) {
    this.removeStyleClass("sapSuiteDCHvr");
};

sap.suite.ui.commons.GenericTile.prototype.ontouchcancel = function (oEvent) {
    this.removeStyleClass("sapSuiteDCHvr");
};

sap.suite.ui.commons.DynamicContainer.prototype.insertAggregation = function(sAggregationName, oObject, iIndex, bSuppressInvalidate) {
	if (sAggregationName === "tiles") {
		oObject.addDelegate(this._oDelegate);
		oObject.attachEvent = function(sEventId, oData, fnFunction, oListener) {
			sap.ui.core.Control.prototype.attachEvent.call(oObject, sEventId, oData, fnFunction, oListener);
		};
	}
	return sap.ui.core.Control.prototype.insertAggregation.call(this, sAggregationName, oObject, iIndex, bSuppressInvalidate);
};

sap.suite.ui.commons.DynamicContainer.prototype.addAggregation = function(sAggregationName, oObject, bSuppressInvalidate) {
	if (sAggregationName === "tiles") {
		oObject.addDelegate(this._oDelegate);
		oObject.attachEvent = function(sEventId, oData, fnFunction, oListener) {
			sap.ui.core.Control.prototype.attachEvent.call(oObject, sEventId, oData, fnFunction, oListener);
		};
	}
    return sap.ui.core.Control.prototype.addAggregation.call(this, sAggregationName, oObject, bSuppressInvalidate);
};

sap.suite.ui.commons.DynamicContainer.prototype.removeAggregation = function(sAggregationName, vObject, bSuppressInvalidate) {
	var oObject = sap.ui.core.Control.prototype.removeAggregation.call(this, sAggregationName, vObject, bSuppressInvalidate);
	if (sAggregationName === "tiles") {
		oObject.removeDelegate(this._oDelegate);
		delete oObject.attachEvent;
	}
    return oObject;
};

sap.suite.ui.commons.DynamicContainer.prototype.removeAllAggregation = function(sAggregationName, bSuppressInvalidate) {
	var aObjects = sap.ui.core.Control.prototype.removeAllAggregation.call(this, sAggregationName, bSuppressInvalidate);
	
	if (sAggregationName === "tiles") {
		for (var i = 0; i < aObjects.length; i++) {
			aObjects[i].removeDelegate(this._oDelegate);
			delete aObjects[i].attachEvent;
		}
	}
    return aObjects;
};

sap.suite.ui.commons.DynamicContainer.prototype.onkeydown = function(oEvent) {
    if (oEvent.which == jQuery.sap.KeyCodes.ENTER) {
        this.getTiles()[this._iCurrentTile].firePress();
    } /*else if (oEvent.which == jQuery.sap.KeyCodes.SPACE) {
    	this._toggleAnimation();
    	oEvent.preventDefault();
    } else if(oEvent.which == jQuery.sap.KeyCodes.P && this._bAnimationPause) {
    	this._scrollToPrevTile(true);
    } else if (oEvent.which == jQuery.sap.KeyCodes.N && this._bAnimationPause) {
    	this._scrollToNextTile(true);
    }*/
};

sap.suite.ui.commons.DynamicContainer.prototype.onmouseup = function(oEvent) {
	this.removeStyleClass("sapSuiteDCHvr");
	if(jQuery.device.is.desktop) {
    	if(this._bPreventEndEvent) {
    		this._bPreventEndEvent = false;
    		oEvent.preventDefault();
    		return;
    	}
    	this.getTiles()[this._iCurrentTile].firePress();
	}
};

sap.suite.ui.commons.DynamicContainer.prototype.onmousedown = function (oEvent) {
    this.addStyleClass("sapSuiteDCHvr");
};