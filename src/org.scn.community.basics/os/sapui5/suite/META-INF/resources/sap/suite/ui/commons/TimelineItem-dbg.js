/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.TimelineItem.
jQuery.sap.declare("sap.suite.ui.commons.TimelineItem");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new TimelineItem.
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
 * <li>{@link #getDateTime dateTime} : any</li>
 * <li>{@link #getUserName userName} : string</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getIcon icon} : string</li>
 * <li>{@link #getFilterValue filterValue} : string</li>
 * <li>{@link #getUserNameClickable userNameClickable} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getEmbeddedControl embeddedControl} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.TimelineItem#event:userNameClicked userNameClicked} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * TimelineItem
 * @extends sap.ui.core.Control
 * @version 1.24.2
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.TimelineItem
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.TimelineItem", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"dateTime" : {type : "any", group : "Misc", defaultValue : null},
		"userName" : {type : "string", group : "Misc", defaultValue : null},
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"text" : {type : "string", group : "Misc", defaultValue : null},
		"icon" : {type : "string", group : "Misc", defaultValue : null},
		"filterValue" : {type : "string", group : "Misc", defaultValue : null},
		"userNameClickable" : {type : "boolean", group : "Misc", defaultValue : false}
	},
	aggregations : {
		"embeddedControl" : {type : "sap.ui.core.Control", multiple : false}
	},
	events : {
		"userNameClicked" : {}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.TimelineItem with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.TimelineItem.extend
 * @function
 */

sap.suite.ui.commons.TimelineItem.M_EVENTS = {'userNameClicked':'userNameClicked'};


/**
 * Getter for property <code>dateTime</code>.
 * Datetime value of Timeline item
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {any} the value of property <code>dateTime</code>
 * @public
 * @name sap.suite.ui.commons.TimelineItem#getDateTime
 * @function
 */

/**
 * Setter for property <code>dateTime</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oDateTime  new value for property <code>dateTime</code>
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#setDateTime
 * @function
 */


/**
 * Getter for property <code>userName</code>.
 * User name shown in the title
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>userName</code>
 * @public
 * @name sap.suite.ui.commons.TimelineItem#getUserName
 * @function
 */

/**
 * Setter for property <code>userName</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sUserName  new value for property <code>userName</code>
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#setUserName
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * Text shown in the title after user name
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.suite.ui.commons.TimelineItem#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#setTitle
 * @function
 */


/**
 * Getter for property <code>text</code>.
 * Text shown inside the item
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.suite.ui.commons.TimelineItem#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#setText
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * Icon for this item
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>icon</code>
 * @public
 * @name sap.suite.ui.commons.TimelineItem#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sIcon  new value for property <code>icon</code>
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#setIcon
 * @function
 */


/**
 * Getter for property <code>filterValue</code>.
 * Text for filter value
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>filterValue</code>
 * @public
 * @name sap.suite.ui.commons.TimelineItem#getFilterValue
 * @function
 */

/**
 * Setter for property <code>filterValue</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFilterValue  new value for property <code>filterValue</code>
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#setFilterValue
 * @function
 */


/**
 * Getter for property <code>userNameClickable</code>.
 * Make user name as a clickable to raise userNameClicked event
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>userNameClickable</code>
 * @public
 * @name sap.suite.ui.commons.TimelineItem#getUserNameClickable
 * @function
 */

/**
 * Setter for property <code>userNameClickable</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bUserNameClickable  new value for property <code>userNameClickable</code>
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#setUserNameClickable
 * @function
 */


/**
 * Getter for aggregation <code>embeddedControl</code>.<br/>
 * Embed other control in timeline item, such as a button or a check box, etc.
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.suite.ui.commons.TimelineItem#getEmbeddedControl
 * @function
 */


/**
 * Setter for the aggregated <code>embeddedControl</code>.
 * @param {sap.ui.core.Control} oEmbeddedControl
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#setEmbeddedControl
 * @function
 */
	

/**
 * Destroys the embeddedControl in the aggregation 
 * named <code>embeddedControl</code>.
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#destroyEmbeddedControl
 * @function
 */


/**
 * Fire when user name in the item header is clicked
 *
 * @name sap.suite.ui.commons.TimelineItem#userNameClicked
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'userNameClicked' event of this <code>sap.suite.ui.commons.TimelineItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.TimelineItem</code>.<br/> itself. 
 *  
 * Fire when user name in the item header is clicked
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.TimelineItem</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#attachUserNameClicked
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'userNameClicked' event of this <code>sap.suite.ui.commons.TimelineItem</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TimelineItem#detachUserNameClicked
 * @function
 */

/**
 * Fire event userNameClicked to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.TimelineItem} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.TimelineItem#fireUserNameClicked
 * @function
 */


// Start of sap/suite/ui/commons/TimelineItem.js
///**
// * This file defines behavior for the control,
// */

jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.IconPool");
jQuery.sap.require("sap.ui.core.format.DateFormat");

sap.suite.ui.commons.TimelineItem.prototype.init = function() {
	var oLocale = sap.ui.getCore().getConfiguration().getLanguage();
  this.resBundle = sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons", oLocale);
  //initialize _showIcons prop.
  this._showIcons = false;
};

sap.suite.ui.commons.TimelineItem.prototype._formatDateValue = function(iDate) {
// Check different input type for Date
	var oDate;
	if (iDate instanceof Date) {
		oDate = iDate;
	} else if (typeof iDate === "string") {
	// handle format /Date(milliseconds)/
	  if (iDate.indexOf("Date") != -1) {
	  	var iTime = iDate.substring(iDate.indexOf("(") + 1, iDate.indexOf(")"));
	  	oDate = new Date(parseInt(iTime));
		}
	}	else {
		oDate = new Date(parseInt(iDate));
	}
	var returnedDate = "";
//	var u = false;
	var diff = 0, t, T = new Date();
/*	var cyear = u ? T.getUTCFullYear() : T.getFullYear();
	var cmonth = u ? T.getUTCMonth() : T.getMonth();
	var cday = u ? T.getUTCDate() : T.getDate();
	var tyear = u ? oDate.getUTCFullYear() : oDate.getFullYear();
	var tmonth = u ? oDate.getUTCMonth() : oDate.getMonth();
	var tday = u ? oDate.getUTCDate() : oDate.getDate();*/
	var cyear = T.getFullYear();
	var cmonth = T.getMonth();
	var cday = T.getDate();
	var tyear = oDate.getFullYear();
	var tmonth = oDate.getMonth();
	var tday = oDate.getDate();
	var cdate = Date.UTC(cyear, cmonth, cday);
	var tdate = Date.UTC(tyear, tmonth, tday);
	t = cdate.valueOf() - tdate.valueOf();
	diff = Math.floor(t / (24 * 60 * 60 * 1000));
	var dateFormat = sap.ui.core.format.DateFormat.getDateInstance({style: "short"});
  var timeFormat = sap.ui.core.format.DateFormat.getTimeInstance({style: "short"});

	if (diff == 0) {
		returnedDate = this.resBundle.getText('TIMELINE_TODAY');
	} else if (diff == 1) {
		returnedDate = this.resBundle.getText('TIMELINE_YESTERDAY');
	} else if (diff > 1){
		returnedDate = dateFormat.format(oDate);
	} else {
		return oDate.toString();
	}
	returnedDate += " " + this.resBundle.getText('TIMELINE_AT') + " " + timeFormat.format(oDate);
	return returnedDate;
};
      
      
sap.suite.ui.commons.TimelineItem.prototype._getImageControl = function() {
	var sIconSrc = this.getIcon() ? this.getIcon() : "activity-items";
	var sImgId = this.getId()+ '-icon';
	var mProperties = {src : sIconSrc};
	var aCssClasses = [ 'sapSuiteUiCommonsTimelineItemIcon' ];
	
	this._oImageControl = sap.m.ImageHelper.getImageControl(sImgId,
			this._oImageControl, this, mProperties, aCssClasses);

	return this._oImageControl;
};      


sap.suite.ui.commons.TimelineItem.prototype._isOfTypeTimelineItem = function() {
return true;
};

sap.suite.ui.commons.TimelineItem.prototype.setLayout = function(position, alignment){
	this._position = position;
	this._alignment = alignment;
};

/*sap.suite.ui.commons.TimelineItem.prototype.onclick = function(oEvent) {
	var sourceId = oEvent.target.id;
	if (sourceId === this.getId() + "-username") {
		this.fireUserNameClicked();
		}
};*/

sap.suite.ui.commons.TimelineItem.prototype.setUserNameClickable = function(userNameClickable) {
	this.setProperty("userNameClickable", userNameClickable, true);
	if (!this._userNameLink) {
		var that = this;
		this._userNameLink = new sap.m.Link({
		text : this.getUserName(),
		press : function(oEvent) {that.fireUserNameClicked();}});	
	}
};

sap.suite.ui.commons.TimelineItem.prototype.onBeforeRendering = function() {
  if (this.getUserNameClickable() && (!this._userNameLink)) {
		var that = this;
		this._userNameLink = new sap.m.Link({
		text : this.getUserName(),
		press : function(oEvent) {that.fireUserNameClicked();}});	
	}
};

sap.suite.ui.commons.TimelineItem.prototype.exit = function() {
	if (this._oImageControl) {
		this._oImageControl.destroy();
		this._oImageControl = undefined;
	}
	if (this._userNameLink) {
		this._userNameLink.destroy();
		this._userNameLink = undefined;
	}
};

      