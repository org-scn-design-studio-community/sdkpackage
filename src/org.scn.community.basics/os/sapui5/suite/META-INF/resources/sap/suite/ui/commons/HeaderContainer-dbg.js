/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.HeaderContainer.
jQuery.sap.declare("sap.suite.ui.commons.HeaderContainer");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new HeaderContainer.
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
 * <li>{@link #getScrollStep scrollStep} : int (default: 300)</li>
 * <li>{@link #getScrollTime scrollTime} : int (default: 500)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.core.Control[]</li></ul>
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
 * Container that provides horizontal layout. Provides horizontal scroll on tablet and phone. On desktop provides scroll left and scroll right buttons. This control supports keyboard navigation. You can use left and right arrow keys to navigate through the inner contents. The Home key puts focus on the first control and the End key puts focus on the last control. Use Enter or Space to choose the control.
 * @extends sap.ui.core.Control
 * @implements sap.m.ObjectHeaderContainer
 * @version 1.24.2
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.HeaderContainer
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.HeaderContainer", { metadata : {

	interfaces : [
		"sap.m.ObjectHeaderContainer"
	],
	library : "sap.suite.ui.commons",
	properties : {
		"scrollStep" : {type : "int", group : "Misc", defaultValue : 300},
		"scrollTime" : {type : "int", group : "Misc", defaultValue : 500}
	},
	aggregations : {
		"scrollContainer" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}, 
		"items" : {type : "sap.ui.core.Control", multiple : true, singularName : "item"}, 
		"buttonPrev" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}, 
		"buttonNext" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.HeaderContainer with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.HeaderContainer.extend
 * @function
 */


/**
 * Getter for property <code>scrollStep</code>.
 * Number of pixels to scroll when the user chooses Next or Previous buttons. Relevant only for desktop.
 *
 * Default value is <code>300</code>
 *
 * @return {int} the value of property <code>scrollStep</code>
 * @public
 * @name sap.suite.ui.commons.HeaderContainer#getScrollStep
 * @function
 */

/**
 * Setter for property <code>scrollStep</code>.
 *
 * Default value is <code>300</code> 
 *
 * @param {int} iScrollStep  new value for property <code>scrollStep</code>
 * @return {sap.suite.ui.commons.HeaderContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.HeaderContainer#setScrollStep
 * @function
 */


/**
 * Getter for property <code>scrollTime</code>.
 * Scroll animation time miliseconds.
 *
 * Default value is <code>500</code>
 *
 * @return {int} the value of property <code>scrollTime</code>
 * @public
 * @name sap.suite.ui.commons.HeaderContainer#getScrollTime
 * @function
 */

/**
 * Setter for property <code>scrollTime</code>.
 *
 * Default value is <code>500</code> 
 *
 * @param {int} iScrollTime  new value for property <code>scrollTime</code>
 * @return {sap.suite.ui.commons.HeaderContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.HeaderContainer#setScrollTime
 * @function
 */


/**
 * Getter for aggregation <code>items</code>.<br/>
 * Items to add to HeaderContainer.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.suite.ui.commons.HeaderContainer#getItems
 * @function
 */


/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.ui.core.Control}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.HeaderContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.HeaderContainer#insertItem
 * @function
 */

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.ui.core.Control}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.HeaderContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.HeaderContainer#addItem
 * @function
 */

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.ui.core.Control} vItem the item to remove or its index or id
 * @return {sap.ui.core.Control} the removed item or null
 * @public
 * @name sap.suite.ui.commons.HeaderContainer#removeItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.HeaderContainer#removeAllItems
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.suite.ui.commons.HeaderContainer#indexOfItem
 * @function
 */
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.suite.ui.commons.HeaderContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.HeaderContainer#destroyItems
 * @function
 */


// Start of sap/suite/ui/commons/HeaderContainer.js
///**
// * This file defines behavior for the control,
// */
jQuery.sap.require("sap.ui.core.IconPool");
jQuery.sap.require("sap.ui.core.Icon");
jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");

sap.suite.ui.commons.HeaderContainer.prototype.init = function(){
   this._bRtl = sap.ui.getCore().getConfiguration().getRTL();
   this._rb = sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons");
   this._oScrollCntr = new sap.m.ScrollContainer(this.getId() + "-scrl-cntnr", {
	   width : "100%",
	   horizontal: !jQuery.device.is.desktop
   });

   this.setAggregation("scrollContainer", this._oScrollCntr);
   
   var that = this;
   
   if(jQuery.device.is.desktop) {
		this._oArrowPrev = new sap.m.Button( {
			id : this.getId() + "-scrl-prev-button",
			icon:"sap-icon://navigation-left-arrow", 
			type:sap.m.ButtonType.Transparent,
			tooltip: this._rb.getText("HEADERCONTAINER_BUTTON_PREV_SECTION"),
			press : function(oE) {
				that._scroll(-that.getScrollStep(), that.getScrollTime());
			}
		});
		this._oArrowPrev.addStyleClass("sapSuiteHdrCntrBtn").addStyleClass("sapSuiteHdrCntrLeft");
		this.setAggregation("buttonPrev", this._oArrowPrev);
		
		this._oArrowNext = new sap.m.Button({
			id : this.getId() + "-scrl-next-button",
			icon:"sap-icon://navigation-right-arrow", 
			type:sap.m.ButtonType.Transparent,
			tooltip: this._rb.getText("HEADERCONTAINER_BUTTON_NEXT_SECTION"),
			press : function(oE) {
				that._scroll(that.getScrollStep(), that.getScrollTime());
			}
		});
		
		this._oArrowNext.addStyleClass("sapSuiteHdrCntrBtn").addStyleClass("sapSuiteHdrCntrRight");
		this.setAggregation("buttonNext", this._oArrowNext);
		
	    this._oScrollCntr.addDelegate({
		    onAfterRendering:function(oObj) {
		 	   if(jQuery.device.is.desktop) {
	 				var oFocusRef = jQuery.sap.domById(that.getId() + "-scrl-cntnr-scroll");
					var oFocusObj = jQuery.sap.byId(that.getId() + "-scrl-cntnr-scroll");
					var aDomRefs = oFocusObj.find("[tabindex=0]");

					if (!that._oItemNavigation) {
						that._oItemNavigation = new sap.ui.core.delegate.ItemNavigation();
						that.addDelegate(that._oItemNavigation);
						that._oItemNavigation.attachEvent(sap.ui.core.delegate.ItemNavigation.Events.BorderReached, that._handleBorderReached, that);
						that._oItemNavigation.attachEvent(sap.ui.core.delegate.ItemNavigation.Events.AfterFocus, that._handleBorderReached, that);
					}
		
					that._oItemNavigation.setRootDomRef(oFocusRef);
					that._oItemNavigation.setItemDomRefs(aDomRefs);
					that._oItemNavigation.setCycling(false);					   
			    }
		    },
		    
		    onBeforeRendering: function(oObj) {
		    	if (jQuery.device.is.desktop) { 
					jQuery.sap.require("sap.ui.core.delegate.ScrollEnablement");
					that._oScrollCntr._oScroller = new sap.ui.core.delegate.ScrollEnablement(that._oScrollCntr, that._oScrollCntr.getId() + "-scroll", {
						horizontal: true,
						vertical: false,
						zynga: true,
						preventDefault: false,
						nonTouchScrolling: "scrollbar"
					});
		    	}
		    }
	    });
   }

};

sap.suite.ui.commons.HeaderContainer.prototype._scroll = function(iDelta, iDuration) {
	var oDomRef = jQuery.sap.domById(this.getId() + "-scrl-cntnr");
	var iScrollLeft = oDomRef.scrollLeft;
	if (!sap.ui.Device.browser.internet_explorer && this._bRtl) {
		iDelta = -iDelta;
	} // RTL lives in the negative space
	var iScrollTarget = iScrollLeft + iDelta;
	this._oScrollCntr.scrollTo(iScrollTarget, 0, iDuration);
};

sap.suite.ui.commons.HeaderContainer.prototype._checkOverflow = function() {
	var oBarHead = jQuery.sap.domById(this.getId() + "-scrl-cntnr");
	
	var bScrolling = false;

	if (oBarHead) {
		if (oBarHead.scrollWidth > oBarHead.clientWidth) {
			// scrolling possible
			bScrolling = true;
		}
	}

	this._lastScrolling = bScrolling;

	if (oBarHead) {
		var iScrollLeft = oBarHead.scrollLeft;

		// check whether scrolling to the left is possible
		var bScrollBack = false;
		var bScrollForward = false;

		var realWidth = oBarHead.scrollWidth;
		var availableWidth = oBarHead.clientWidth;

		if (Math.abs(realWidth - availableWidth) == 1) { // Avoid rounding issues see CSN 1316630 2013
			realWidth = availableWidth;
		}

		if (!this._bRtl) { // normal LTR mode
			if (iScrollLeft > 0) {
				bScrollBack = true;
			}
			if ((realWidth > availableWidth) && (iScrollLeft + availableWidth < realWidth)) {
				bScrollForward = true;
			}

		} else { // RTL mode
			var $List = jQuery(oBarHead);
			if ($List.scrollLeftRTL() > 0) {
				bScrollForward = true;
			}
			if ($List.scrollRightRTL() > 0) {
				bScrollBack = true;
			}
		}
		var oScrl = jQuery.sap.byId(this.getId() + "-scroll-area");
	    if(!bScrollBack) {
	    	jQuery.sap.byId(this._oArrowPrev.getId()).hide();
	    	oScrl.css(this._bRtl ? "padding-right" : "padding-left", "0rem");
	    } else {
	    	jQuery.sap.byId(this._oArrowPrev.getId()).show();
	    	oScrl.css(this._bRtl ? "padding-right" : "padding-left", "2rem");
	    }
	    
	    if(!bScrollForward) {
	    	jQuery.sap.byId(this._oArrowNext.getId()).hide();
	    	oScrl.css(this._bRtl ? "padding-left" : "padding-right", "0rem");
	    } else {
	    	jQuery.sap.byId(this._oArrowNext.getId()).show();
	    	oScrl.css(this._bRtl ? "padding-left" : "padding-right", "2rem");
	    }
	}
};

sap.suite.ui.commons.HeaderContainer.prototype._handleBorderReached = function(oObj){
	var iIndex = oObj.getParameter("index");
	if(iIndex == 0) {
		this._scroll(-this.getScrollStep(), this.getScrollTime());
	} else if(iIndex == this.getItems().length - 1){
		this._scroll(this.getScrollStep(), this.getScrollTime());
	}
};

sap.suite.ui.commons.HeaderContainer.prototype.addItem = function(oItem, bSuppressInvalidate) {
	return this._oScrollCntr.addContent(oItem.addStyleClass("sapSuiteHrdrCntrInner"), bSuppressInvalidate);
};

sap.suite.ui.commons.HeaderContainer.prototype.insertItem = function(oItem, iIndex, bSuppressInvalidate) {
	return this._oScrollCntr.insertContent(oItem.addStyleClass("sapSuiteHrdrCntrInner"), iIndex, bSuppressInvalidate);
};

sap.suite.ui.commons.HeaderContainer.prototype._callMethodInManagedObject = function(sFunctionName, sAggregationName){
    var args = Array.prototype.slice.call(arguments);
    if(sAggregationName === "items"){
        args[1] = "content";
        return this._oScrollCntr[sFunctionName].apply(this._oScrollCntr, args.slice(1));
    } else {
        return sap.ui.base.ManagedObject.prototype[sFunctionName].apply(this, args.slice(1));
    }
    
};

sap.suite.ui.commons.HeaderContainer.prototype.onBeforeRendering = function() {
	if (jQuery.device.is.desktop) {
		sap.ui.getCore().attachIntervalTimer(this._checkOverflow, this); // proxy() is needed for the additional parameters, not for "this"
	}
	
	if (jQuery.device.is.desktop) {
		this.$().unbind("click", this.handleSwipe);	
	}
};

sap.suite.ui.commons.HeaderContainer.prototype.onAfterRendering = function() {
	jQuery.sap.byId(this.getId() + "-scrl-next-button").attr("tabindex","-1");
	jQuery.sap.byId(this.getId() + "-scrl-prev-button").attr("tabindex","-1");
	if (jQuery.device.is.desktop) { 
		this.$().bind("swipe", jQuery.proxy(this.handleSwipe, this));		
	}
};

sap.suite.ui.commons.HeaderContainer.prototype.handleSwipe = function(oE) {
	oE.preventDefault();
	oE.stopPropagation();
	this._isDragEvent = true;
};

sap.suite.ui.commons.HeaderContainer.prototype.exit = function() {
	if (this._oItemNavigation) {
		this.removeDelegate(this._oItemNavigation);
		this._oItemNavigation.destroy();
	}
};

sap.suite.ui.commons.HeaderContainer.prototype.onclick = function(oE) {
	if(this._isDragEvent) {
		oE.preventDefault();
		oE.stopPropagation();
		this._isDragEvent = false;
	}
};

///**************************************************************
// * START - forward aggregation related methods to the inner aggregation
// **************************************************************/
sap.suite.ui.commons.HeaderContainer.prototype.validateAggregation = function(sAggregationName, oObject, bMultiple){
    return this._callMethodInManagedObject("validateAggregation", sAggregationName, oObject, bMultiple);
};

sap.suite.ui.commons.HeaderContainer.prototype.getAggregation = function(sAggregationName, oObject, bSuppressInvalidate){
    return this._callMethodInManagedObject("getAggregation", sAggregationName, oObject, bSuppressInvalidate);
};

sap.suite.ui.commons.HeaderContainer.prototype.setAggregation = function(sAggregationName, oObject, bSuppressInvalidate){
    this._callMethodInManagedObject("setAggregation", sAggregationName, oObject, bSuppressInvalidate);
    return this;
};

sap.suite.ui.commons.HeaderContainer.prototype.indexOfAggregation = function(sAggregationName, oObject){
    return this._callMethodInManagedObject("indexOfAggregation", sAggregationName, oObject);
};

sap.suite.ui.commons.HeaderContainer.prototype.insertAggregation = function(sAggregationName, oObject, iIndex, bSuppressInvalidate){
    this._callMethodInManagedObject("insertAggregation", sAggregationName, oObject, iIndex, bSuppressInvalidate);
    return this;
};

sap.suite.ui.commons.HeaderContainer.prototype.addAggregation = function(sAggregationName, oObject, bSuppressInvalidate){
    this._callMethodInManagedObject("addAggregation", sAggregationName, oObject, bSuppressInvalidate);
    return this;
};

sap.suite.ui.commons.HeaderContainer.prototype.removeAggregation = function(sAggregationName, oObject, bSuppressInvalidate){
    return this._callMethodInManagedObject("removeAggregation", sAggregationName, oObject, bSuppressInvalidate);
};

sap.suite.ui.commons.HeaderContainer.prototype.removeAllAggregation = function(sAggregationName, bSuppressInvalidate){
    return this._callMethodInManagedObject("removeAllAggregation", sAggregationName, bSuppressInvalidate);
};

sap.suite.ui.commons.HeaderContainer.prototype.destroyAggregation = function(sAggregationName, bSuppressInvalidate){
    this._callMethodInManagedObject("destroyAggregation", sAggregationName, bSuppressInvalidate);
    return this;
};
