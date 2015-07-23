/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.PictureZoomIn.
jQuery.sap.declare("sap.suite.ui.commons.PictureZoomIn");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new PictureZoomIn.
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
 * <li>{@link #getDescription description} : string</li>
 * <li>{@link #getImageSrc imageSrc} : sap.ui.core.URI</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getBusyIndicator busyIndicator} : sap.ui.core.Control</li></ul>
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
 * Shows picture in fullscreen.
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @experimental Since version 1.25. 
 * API is not yet finished and might change completely
 * @name sap.suite.ui.commons.PictureZoomIn
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.PictureZoomIn", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"description" : {type : "string", group : "Misc", defaultValue : null},
		"imageSrc" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null}
	},
	aggregations : {
		"busyIndicator" : {type : "sap.ui.core.Control", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.PictureZoomIn with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.PictureZoomIn.extend
 * @function
 */


/**
 * Getter for property <code>description</code>.
 * Description is shown under image.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>description</code>
 * @public
 * @name sap.suite.ui.commons.PictureZoomIn#getDescription
 * @function
 */

/**
 * Setter for property <code>description</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sDescription  new value for property <code>description</code>
 * @return {sap.suite.ui.commons.PictureZoomIn} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.PictureZoomIn#setDescription
 * @function
 */


/**
 * Getter for property <code>imageSrc</code>.
 * Source for image.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>imageSrc</code>
 * @public
 * @name sap.suite.ui.commons.PictureZoomIn#getImageSrc
 * @function
 */

/**
 * Setter for property <code>imageSrc</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sImageSrc  new value for property <code>imageSrc</code>
 * @return {sap.suite.ui.commons.PictureZoomIn} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.PictureZoomIn#setImageSrc
 * @function
 */


/**
 * Getter for aggregation <code>busyIndicator</code>.<br/>
 * Custom busy indicator.
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.suite.ui.commons.PictureZoomIn#getBusyIndicator
 * @function
 */


/**
 * Setter for the aggregated <code>busyIndicator</code>.
 * @param {sap.ui.core.Control} oBusyIndicator
 * @return {sap.suite.ui.commons.PictureZoomIn} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.PictureZoomIn#setBusyIndicator
 * @function
 */
	

/**
 * Destroys the busyIndicator in the aggregation 
 * named <code>busyIndicator</code>.
 * @return {sap.suite.ui.commons.PictureZoomIn} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.PictureZoomIn#destroyBusyIndicator
 * @function
 */

// Start of sap/suite/ui/commons/PictureZoomIn.js
///**
// * This file defines behavior for the control,
// */
sap.suite.ui.commons.PictureZoomIn.prototype.init = function(){
	var that = this;
	jQuery(window).resize(function (eO) {
		that._calculateImg();
	});
	
	jQuery(document).keyup(function(e) {
	    if (e.keyCode == 27) {
	        that.exit();
	        jQuery.sap.byId(that.getId()).remove();
	    }  	       
	});
	
	jQuery(document).tap(function() {
	    that.exit();
	    jQuery.sap.byId(that.getId()).remove();
	});

	this._oImage = new sap.m.Image(this.getId() + "-image", {
	}).addStyleClass("sapSuiteUiCommonsPictureZoomInImg");
	
	this._oDescription = new sap.m.Text(this.getId() + "-description", {
		textAlign: sap.ui.core.TextAlign.Center
	});
	this._oDescription.addStyleClass("sapSuiteUiCommonsPictureZoomInDesc");
};

sap.suite.ui.commons.PictureZoomIn.prototype.onBeforeRendering = function () {
	this._oImage.setSrc(this.getImageSrc());
	this._oDescription.setText(this.getDescription());
};

sap.suite.ui.commons.PictureZoomIn.prototype._calculateImg = function () {
    var oImg = jQuery.sap.domById(this.getId() + "-image");
    var oDesc = jQuery.sap.byId(this.getId() + "-description");
    if (!oImg) {
        return;
    }
    var oWindow = jQuery.sap.byId(this.getId());
    if (oImg.naturalWidth < oWindow.width() && oImg.naturalHeight < oWindow.height() - oDesc.outerHeight(true)) {
        oImg.style.width = oImg.naturalWidth + "px";
        oImg.style.height = oImg.naturalHeight + "px";
    } else if (oImg.naturalHeight / (oWindow.height() - oDesc.outerHeight(true)) > oImg.naturalWidth / oWindow.width()) {
        oImg.style.height = "" + (98 - oDesc.outerHeight(true) * 100 / oWindow.height()) + "%";
        oImg.style.width = "auto";
    } else {
	oImg.style.width = '96%';
	oImg.style.height = 'auto';
    }

    //recalculate left position of image so it is centered in div.
    var oImage = jQuery.sap.byId(this.getId() + "-image");
    var iWindowWidth = oWindow.width();
    var iImageWidth = oImage.width();
    var iImageHeight = oImage.height();
    if (iWindowWidth >= iImageWidth) {
        oImage.css("left", (iWindowWidth - iImageWidth) /2 );
    }

    //calculate top position for image and description
    var iImageTop = (oWindow.height() - iImageHeight - oDesc.outerHeight(true)) / 2;
    oImage.css("top", iImageTop);
    oDesc.css("top", iImageTop + iImageHeight);
};

sap.suite.ui.commons.PictureZoomIn.prototype.onAfterRendering = function() {
    var that = this;
    var oImage = jQuery.sap.byId(this.getId() + "-image");
    var oBusy = jQuery.sap.byId(this.getId() + "-busy");    // there is a custom busy indicator rendered

    oImage.hide();

    if (oBusy.length) {
        oBusy.show();
    } else {
        this.setBusy(true);
    }

    //subscribe for image load to recalculate positions of image, description.
    oImage.load(function() {
        if (oBusy.length) {
            oBusy.hide();
        } else {
            that.setBusy(false);
        }

        oImage.show();
        that._calculateImg();
    });
};

sap.suite.ui.commons.PictureZoomIn.prototype.exit = function() {
    if (this._oImage) {
        this._oImage.destroy();
    }
    if (this._oDescription) {
        this._oDescription.destroy();
    }
};
