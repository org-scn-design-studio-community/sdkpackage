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
 * <li>{@link #getScrollTime scrollTime} : int (default: 500)</li>
 * <li>{@link #getShowDividers showDividers} : boolean (default: true)</li>
 * <li>{@link #getView view} : sap.suite.ui.commons.HeaderContainerView (default: sap.suite.ui.commons.HeaderContainerView.Horizontal)</li></ul>
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
 * The container that provides a horizontal layout. It provides a horizontal scroll on the tablet and phone. On the desktop, it provides scroll left and scroll right buttons. This control supports keyboard navigation. You can use left and right arrow keys to navigate through the inner content. The Home key puts focus on the first control and the End key puts focus on the last control. Use Enter or Space to choose the control.
 * @extends sap.ui.core.Control
 * @implements sap.m.ObjectHeaderContainer
 * @version 1.30.3
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
		"scrollTime" : {type : "int", group : "Misc", defaultValue : 500},
		"showDividers" : {type : "boolean", group : "Misc", defaultValue : true},
		"view" : {type : "sap.suite.ui.commons.HeaderContainerView", group : "Misc", defaultValue : sap.suite.ui.commons.HeaderContainerView.Horizontal}
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
 * Scroll animation time in milliseconds.
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
 * Getter for property <code>showDividers</code>.
 * If set to true, shows dividers between scrollable items.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showDividers</code>
 * @public
 * @since 1.25
 * @name sap.suite.ui.commons.HeaderContainer#getShowDividers
 * @function
 */

/**
 * Setter for property <code>showDividers</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowDividers  new value for property <code>showDividers</code>
 * @return {sap.suite.ui.commons.HeaderContainer} <code>this</code> to allow method chaining
 * @public
 * @since 1.25
 * @name sap.suite.ui.commons.HeaderContainer#setShowDividers
 * @function
 */


/**
 * Getter for property <code>view</code>.
 * The view of the HeaderContainer.
 *
 * Default value is <code>Horizontal</code>
 *
 * @return {sap.suite.ui.commons.HeaderContainerView} the value of property <code>view</code>
 * @public
 * @since 1.25
 * @name sap.suite.ui.commons.HeaderContainer#getView
 * @function
 */

/**
 * Setter for property <code>view</code>.
 *
 * Default value is <code>Horizontal</code> 
 *
 * @param {sap.suite.ui.commons.HeaderContainerView} oView  new value for property <code>view</code>
 * @return {sap.suite.ui.commons.HeaderContainer} <code>this</code> to allow method chaining
 * @public
 * @since 1.25
 * @name sap.suite.ui.commons.HeaderContainer#setView
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
   this._iSelectedCell = 0;
   this._bRtl = sap.ui.getCore().getConfiguration().getRTL();
   this._rb = sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons");
   this._oScrollCntr = new sap.m.ScrollContainer(this.getId() + "-scrl-cntnr", {
	   width : "100%",
	   horizontal: !jQuery.device.is.desktop,
	   height: "100%"
   });

   this.setAggregation("scrollContainer", this._oScrollCntr);
   var that = this;

   var iWidth = 0;
   sap.ui.Device.resize.attachHandler(function(oObj){
  	 if(iWidth != oObj.width) {
  		 //that._oScrollCntr.getScrollDelegate().refresh();
  		 iWidth = oObj.width;
  	 }
   });

   if(jQuery.device.is.desktop) {
		this._oArrowPrev = new sap.m.Button( {
			id : this.getId() + "-scrl-prev-button",
//			icon: "sap-icon://navigation-left-arrow", 
//			type:sap.m.ButtonType.Transparent,
			tooltip: this._rb.getText("HEADERCONTAINER_BUTTON_PREV_SECTION"),
			press : function(oE) {
				that._scroll(-that.getScrollStep(), that.getScrollTime());
			}
		});
		this._oArrowPrev.addStyleClass("sapSuiteHdrCntrBtn").addStyleClass("sapSuiteHdrCntrLeft");
		this.setAggregation("buttonPrev", this._oArrowPrev);
		
		this._oArrowNext = new sap.m.Button({
			id : this.getId() + "-scrl-next-button",
//			icon:"sap-icon://navigation-right-arrow", 
//			type:sap.m.ButtonType.Transparent,
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
						var aDomRefs = oFocusObj.find(".sapSuiteHrdrCntrInner").attr("tabindex", "0");
	
						if (!that._oItemNavigation) {
							that._oItemNavigation = new sap.ui.core.delegate.ItemNavigation();
							that.addDelegate(that._oItemNavigation);
							that._oItemNavigation.attachEvent(sap.ui.core.delegate.ItemNavigation.Events.BorderReached, that._handleBorderReached, that);
							that._oItemNavigation.attachEvent(sap.ui.core.delegate.ItemNavigation.Events.AfterFocus, that._handleBorderReached, that);
						}
			
						that._oItemNavigation.setRootDomRef(oFocusRef);
						that._oItemNavigation.setItemDomRefs(aDomRefs);
						that._oItemNavigation.setTabIndex0();
						that._oItemNavigation.setCycling(false);
			   }
			   that._refreshScroll();
		    },
		    
		    onBeforeRendering: function(oObj) {
		    	if (jQuery.device.is.desktop) { 
					jQuery.sap.require("sap.ui.core.delegate.ScrollEnablement");
					that._oScrollCntr._oScroller = new sap.ui.core.delegate.ScrollEnablement(that._oScrollCntr, that._oScrollCntr.getId() + "-scroll", {
						horizontal: true,
						vertical: true,
						zynga: false,
						preventDefault: false,
						nonTouchScrolling: true
					});
		    	}
		    }
	    }); 
   }
   
};

sap.suite.ui.commons.HeaderContainer.prototype._scroll = function(iDelta, iDuration) {
	this.bScrollInProcess = true;
	var that = this;
	setTimeout(function(){
		that.bScrollInProcess = false;
	}, iDuration + 300);
	
	if (this.getView() == "Horizontal") {
		this._hScroll(iDelta, iDuration);
	} else {
		this._vScroll(iDelta, iDuration);
	}

};

sap.suite.ui.commons.HeaderContainer.prototype._vScroll = function(iDelta, iDuration) {
	var oDomRef = jQuery.sap.domById(this.getId() + "-scrl-cntnr");
	var iScrollTop = oDomRef.scrollTop;
	var iScrollTarget = iScrollTop + iDelta;
	this._oScrollCntr.scrollTo(0, iScrollTarget, iDuration);
};

sap.suite.ui.commons.HeaderContainer.prototype._hScroll = function(iDelta, iDuration) {
	var oDomRef = jQuery.sap.domById(this.getId() + "-scrl-cntnr");
	if (!this._bRtl) {
		var iScrollLeft = oDomRef.scrollLeft;
		var iScrollTarget = iScrollLeft + iDelta;
		this._oScrollCntr.scrollTo(iScrollTarget, 0, iDuration);
	}
	else {
		var iScrollTarget = jQuery(oDomRef).scrollRightRTL() + iDelta;
		this._oScrollCntr.scrollTo((iScrollTarget > 0) ? iScrollTarget : 0, 0, iDuration);
	}	
};

sap.suite.ui.commons.HeaderContainer.prototype._checkOverflow = function() {
	if (this.getView() == "Horizontal") {
		this._checkHOverflow();
	} else {
		this._checkVOverflow();
	}
};

sap.suite.ui.commons.HeaderContainer.prototype._checkVOverflow = function() {
	var oBarHead = jQuery.sap.domById(this.getId() + "-scrl-cntnr");
	
	var bScrolling = false;

	if (oBarHead) {
		if (oBarHead.scrollHeight > oBarHead.clientHeight) {
			// scrolling possible
			bScrolling = true;
		}
	}

	this._lastVScrolling = bScrolling;

	if (oBarHead) {
		var iScrollTop = oBarHead.scrollTop;

		// check whether scrolling to the left is possible
		var bScrollBack = false;
		var bScrollForward = false;

		var realHeight = oBarHead.scrollHeight;
		var availableHeight = oBarHead.clientHeight;

		if (Math.abs(realHeight - availableHeight) == 1) { // Avoid rounding issues see CSN 1316630 2013
			realHeight = availableHeight;
		}

		if (iScrollTop > 0) {
			bScrollBack = true;
		}
		if ((realHeight > availableHeight) && (iScrollTop + availableHeight/* + 32*/ < realHeight)) {
			bScrollForward = true;
		}
		
		var oScrl = jQuery.sap.byId(this.getId() + "-scroll-area");
	    if(!bScrollBack) {
	    	jQuery.sap.byId(this._oArrowPrev.getId()).hide();
	    //	oScrl.css("padding-top", "0px");
	    } else {
	    	jQuery.sap.byId(this._oArrowPrev.getId()).show();
	    //	oScrl.css("padding-top", "32px");
	    }	    
	    if(!bScrollForward) {
	    	jQuery.sap.byId(this._oArrowNext.getId()).hide();
	  //  	oScrl.css("padding-bottom", "0px");
	    } else {
	    	jQuery.sap.byId(this._oArrowNext.getId()).show();
	  //  	oScrl.css("padding-bottom", "32px");
	    }
	}
};

sap.suite.ui.commons.HeaderContainer.prototype._checkHOverflow = function() {
	var oBarHead = jQuery.sap.domById(this.getId() + "-scrl-cntnr");
	var oBarHeadContainer = jQuery.sap.byId(this.getId() + "-scroll-area");
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
		if (this._bRtl) {
			var iScrollLeftRTL = jQuery(oBarHead).scrollLeftRTL();
			if (iScrollLeftRTL > (sap.ui.Device.browser.internet_explorer ? 1 : 0)) {
				bScrollForward = true;
			}
		} else {
			if (iScrollLeft > 0) {
				bScrollBack = true;
			}
		}
			
		var fnRightMarginCalc = function() {
			var iPadding = parseFloat(oBarHeadContainer.css("padding-right"));
			return sap.ui.Device.browser.internet_explorer ? iPadding+1 : iPadding;
		};
			
		if (realWidth > availableWidth) {
			if (this._bRtl) { 
				if (jQuery(oBarHead).scrollRightRTL() > 0) {
					bScrollBack = true;
				} 
			} else {
				if (Math.abs(iScrollLeft + availableWidth - realWidth) > fnRightMarginCalc()) {
					bScrollForward = true;
				}
			}
		}

		var oScrl = jQuery.sap.byId(this.getId() + "-scroll-area");
		var oOldScrollBack = this._oArrowPrev.$().is(":visible");
		var oScrlDelegate =  this._oScrollCntr.getScrollDelegate();
		var bRefresh = false;
	    if(oOldScrollBack && !bScrollBack) {
	    	jQuery.sap.byId(this._oArrowPrev.getId()).hide();
	 //   	oScrl.css(this._bRtl ? "padding-right" : "padding-left", "0rem");
			//oScrlDelegate.refresh();
	    	bRefresh = true;
	    } 
	    if (!oOldScrollBack && bScrollBack){
	    	jQuery.sap.byId(this._oArrowPrev.getId()).show();
	    //	oScrl.css(this._bRtl ? "padding-right" : "padding-left", "2rem");
			//oScrlDelegate.refresh();
	    	bRefresh = true;
	    }

		var oOldScrollForward = this._oArrowNext.$().is(":visible");
	    if(oOldScrollForward && !bScrollForward) {
	    	jQuery.sap.byId(this._oArrowNext.getId()).hide();
//	    	oScrl.css(this._bRtl ? "padding-left" : "padding-right", "0rem");
			//oScrlDelegate.refresh();
	    	bRefresh = true;
	    } 
	    if (!oOldScrollForward && bScrollForward) {
	    	jQuery.sap.byId(this._oArrowNext.getId()).show();
//	    	oScrl.css(this._bRtl ? "padding-left" : "padding-right", "2rem");
			//oScrlDelegate.refresh();
	    	bRefresh = true;
	    }

	    if(bRefresh) {
	    	this._refreshScroll();
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
	var oResult =  this._oScrollCntr.addContent(oItem.addStyleClass("sapSuiteHrdrCntrInner"), bSuppressInvalidate);
	return oResult;
};

sap.suite.ui.commons.HeaderContainer.prototype.insertItem = function(oItem, iIndex, bSuppressInvalidate) {
	var oResult = this._oScrollCntr.insertContent(oItem.addStyleClass("sapSuiteHrdrCntrInner"), iIndex, bSuppressInvalidate);
	return oResult;
};

sap.suite.ui.commons.HeaderContainer.prototype._callMethodInManagedObject = function(sFunctionName, sAggregationName){
    var that = this;
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
		this._oArrowPrev.setIcon(this.getView() == "Horizontal" ? "sap-icon://navigation-left-arrow" : "sap-icon://navigation-up-arrow");
		this._oArrowNext.setIcon(this.getView() == "Horizontal" ? "sap-icon://navigation-right-arrow" : "sap-icon://navigation-down-arrow");
		this.$().unbind("click", this.handleSwipe);
	}
};

sap.suite.ui.commons.HeaderContainer.prototype.onAfterRendering = function() {
	jQuery.sap.byId(this.getId() + "-scrl-next-button").attr("tabindex","-1");
	jQuery.sap.byId(this.getId() + "-scrl-prev-button").attr("tabindex","-1");
	if (jQuery.device.is.desktop) { 
		this.$().bind("swipe", jQuery.proxy(this.handleSwipe, this));
    }
	
	if (this._sScrollResizeHandlerId) {
		sap.ui.core.ResizeHandler.deregister(this._sScrollResizeHandlerId);
	}
	
    var oScroll = jQuery.sap.domById(this.getId());
    this._sScrollResizeHandlerId = sap.ui.core.ResizeHandler.register(oScroll,  jQuery.proxy(this._refreshScroll, this));
};

sap.suite.ui.commons.HeaderContainer.prototype._refreshScroll = function() {
//	if(!this.bScrollInProcess) {
//		this._oScrollCntr.getScrollDelegate().refresh();		
//	}
	var oHc = this.$();
	var iRealHeight = jQuery.sap.domById(this.getId() + "-scrl-cntnr").scrollHeight;
	var iAvailHeight = oHc.height();
	
	if (iRealHeight > iAvailHeight) {
		oHc.css("height", "100%");
	} else {
		oHc.css("height", "");
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

sap.suite.ui.commons.HeaderContainer.prototype.setView = function(oObj) {
  this.setProperty("view", oObj);
	if(oObj == sap.suite.ui.commons.HeaderContainerView.Horizontal && !jQuery.device.is.desktop) {
		this._oScrollCntr.setHorizontal(true);
		this._oScrollCntr.setVertical(false);
	} else if(!jQuery.device.is.desktop) {
		this._oScrollCntr.setHorizontal(false);
		this._oScrollCntr.setVertical(true);
	}
	return this;
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

sap.suite.ui.commons.HeaderContainer.prototype._getParentCell = function(oDomElement) {
	return jQuery(oDomElement).parents(".sapSuiteHrdrCntrInner").andSelf(".sapSuiteHrdrCntrInner").get(0);
};

sap.suite.ui.commons.HeaderContainer.prototype.onsaptabnext = function(oEvent) {
	this._iSelectedCell = this._oItemNavigation.getFocusedIndex();
	var oFocusables = this.$().find(":focusable");	// all tabstops in the control
	var iThis = oFocusables.index(oEvent.target);  // focused element index
	var oNext = oFocusables.eq(iThis + 1).get(0);	// next tab stop element
	var oFromCell = this._getParentCell(oEvent.target);
	var oToCell = (typeof oNext != 'undefined') ? this._getParentCell(oNext) : undefined;
	if ((typeof oFromCell != 'undefined') && (typeof oToCell != 'undefined') && oFromCell.id != oToCell.id) { // attempt to jump to other cell
		var oLastInnerTab = oFocusables.last().get(0);
		if (typeof oLastInnerTab != 'undefined') {
			oLastInnerTab.focus();
		}
	}
};

sap.suite.ui.commons.HeaderContainer.prototype.onfocusin = function(oEvent) {
	var oInnerTabs = this.$().find(":focusable").map(function() { return this.id; });;
	if (oEvent.relatedTarget != undefined && (this === oEvent.relatedTarget || jQuery.inArray(oEvent.relatedTarget.id, oInnerTabs) >= 0)) {
		return; // we only process here tab propagation from outside
	}
	var oCurrent = oEvent.target;
	var oCurrentCell = this._getParentCell(oEvent.target);
	var aCells = this._oItemNavigation.getItemDomRefs().get();
	var oCurrentCellIndex = aCells.indexOf(oCurrentCell);
	if (oCurrentCellIndex != this._iSelectedCell) { // cell correction needed
		if (oCurrentCellIndex == aCells.length - 1 && oCurrent != oCurrentCell) { //this means reverse tab direction
			if (aCells[this._iSelectedCell]) {
				var oLastInCell = jQuery(aCells[this._iSelectedCell]).find(":focusable").last().get(0);	// last tabstop in the cell
				if (typeof oLastInCell != 'undefined') {
					oLastInCell.focus();
					return;
				}
			}
		}
		if (aCells[this._iSelectedCell]) {
			aCells[this._iSelectedCell].focus();
		}
	}
};

sap.suite.ui.commons.HeaderContainer.prototype.onsaptabprevious = function(oEvent) {
	var oFocusables = this.$().find(":focusable");	// all tabstops in the control
	var iThis = oFocusables.index(oEvent.target);  // focused element index
	var oPrev = oFocusables.eq(iThis - 1).get(0);	// previous tab stop element
	var oFromCell = this._getParentCell(oEvent.target);
	this._iSelectedCell = this._oItemNavigation.getFocusedIndex();
	var oToCell = (typeof oPrev != 'undefined') ? this._getParentCell(oPrev) : undefined;
	if (typeof oPrev != 'undefined' && typeof oToCell != 'undefined' && oToCell.id == oPrev.id) { // previous step goes to cell
		oEvent.preventDefault();
		oEvent.stopPropagation();
		oToCell.tabindex=0;
		oToCell.focus();
	} else if (typeof oToCell == 'undefined' || oFromCell && oFromCell.id != oToCell.id) { // attempt to jump outside or to other cell
		var sTabIndex = this.$().attr("tabindex");	// save tabindex
		this.$().attr("tabindex", "0");	
		this.$().focus();							// set focus before the control
		if (typeof sTabIndex == 'undefined') {		// restore tabindex
			this.$().removeAttr("tabindex");
		} else {
			this.$().attr("tabindex", sTabIndex);
		}
	}
};
