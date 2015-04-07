/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.ChartContainer.
jQuery.sap.declare("sap.suite.ui.commons.ChartContainer");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ChartContainer.
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
 * <li>{@link #getShowPersonalization showPersonalization} : boolean (default: false)</li>
 * <li>{@link #getShowFullScreen showFullScreen} : boolean (default: false)</li>
 * <li>{@link #getFullScreen fullScreen} : boolean (default: false)</li>
 * <li>{@link #getShowLegend showLegend} : boolean (default: true)</li>
 * <li>{@link #getTitle title} : string (default: '')</li>
 * <li>{@link #getSelectorGroupLabel selectorGroupLabel} : string</li>
 * <li>{@link #getAutoAdjustHeight autoAdjustHeight} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getDimensionSelectors dimensionSelectors} : sap.m.Select[]</li>
 * <li>{@link #getContent content} <strong>(default aggregation)</strong> : sap.suite.ui.commons.ChartContainerContent[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.ChartContainer#event:personalizationPress personalizationPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.ChartContainer#event:contentChange contentChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * ToolBar used for displaying one chart amongst several and provide additional features:
 * - multiple select boxes for selecting dimensions
 * - fullscreen toggle
 * - personalization icon
 * - showLegend toggle
 * @extends sap.ui.core.Control
 * @version 1.24.2
 *
 * @constructor
 * @public
 * @experimental Since version 1.23. 
 * The ChartContainer will be productized soon.
 * @name sap.suite.ui.commons.ChartContainer
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.ChartContainer", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"showPersonalization" : {type : "boolean", group : "Misc", defaultValue : false},
		"showFullScreen" : {type : "boolean", group : "Misc", defaultValue : false},
		"fullScreen" : {type : "boolean", group : "Misc", defaultValue : false},
		"showLegend" : {type : "boolean", group : "Misc", defaultValue : true},
		"title" : {type : "string", group : "Misc", defaultValue : ''},
		"selectorGroupLabel" : {type : "string", group : "Misc", defaultValue : null},
		"autoAdjustHeight" : {type : "boolean", group : "Misc", defaultValue : false}
	},
	defaultAggregation : "content",
	aggregations : {
		"dimensionSelectors" : {type : "sap.m.Select", multiple : true, singularName : "dimensionSelector"}, 
		"content" : {type : "sap.suite.ui.commons.ChartContainerContent", multiple : true, singularName : "content"}, 
		"toolBar" : {type : "sap.m.Toolbar", multiple : false, visibility : "hidden"}
	},
	events : {
		"personalizationPress" : {}, 
		"contentChange" : {}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.ChartContainer with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.ChartContainer.extend
 * @function
 */

sap.suite.ui.commons.ChartContainer.M_EVENTS = {'personalizationPress':'personalizationPress','contentChange':'contentChange'};


/**
 * Getter for property <code>showPersonalization</code>.
 * Display or not the personalization icon into the ChartContainer
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showPersonalization</code>
 * @public
 * @name sap.suite.ui.commons.ChartContainer#getShowPersonalization
 * @function
 */

/**
 * Setter for property <code>showPersonalization</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowPersonalization  new value for property <code>showPersonalization</code>
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#setShowPersonalization
 * @function
 */


/**
 * Getter for property <code>showFullScreen</code>.
 * Display or not the full screen icon into the ChartContainer
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showFullScreen</code>
 * @public
 * @name sap.suite.ui.commons.ChartContainer#getShowFullScreen
 * @function
 */

/**
 * Setter for property <code>showFullScreen</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowFullScreen  new value for property <code>showFullScreen</code>
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#setShowFullScreen
 * @function
 */


/**
 * Getter for property <code>fullScreen</code>.
 * Display the chart and the toolbar in full screen or normal mode
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>fullScreen</code>
 * @public
 * @name sap.suite.ui.commons.ChartContainer#getFullScreen
 * @function
 */

/**
 * Setter for property <code>fullScreen</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bFullScreen  new value for property <code>fullScreen</code>
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#setFullScreen
 * @function
 */


/**
 * Getter for property <code>showLegend</code>.
 * Display or not the legend on the contained charts.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showLegend</code>
 * @public
 * @name sap.suite.ui.commons.ChartContainer#getShowLegend
 * @function
 */

/**
 * Setter for property <code>showLegend</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowLegend  new value for property <code>showLegend</code>
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#setShowLegend
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * The string to display instead of the select boxes if there are no dimensions to display
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.suite.ui.commons.ChartContainer#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#setTitle
 * @function
 */


/**
 * Getter for property <code>selectorGroupLabel</code>.
 * Custom Label for Selectors Group.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>selectorGroupLabel</code>
 * @public
 * @name sap.suite.ui.commons.ChartContainer#getSelectorGroupLabel
 * @function
 */

/**
 * Setter for property <code>selectorGroupLabel</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSelectorGroupLabel  new value for property <code>selectorGroupLabel</code>
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#setSelectorGroupLabel
 * @function
 */


/**
 * Getter for property <code>autoAdjustHeight</code>.
 * Adjust the height of the Chart to the available space.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>autoAdjustHeight</code>
 * @public
 * @name sap.suite.ui.commons.ChartContainer#getAutoAdjustHeight
 * @function
 */

/**
 * Setter for property <code>autoAdjustHeight</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bAutoAdjustHeight  new value for property <code>autoAdjustHeight</code>
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#setAutoAdjustHeight
 * @function
 */


/**
 * Getter for aggregation <code>dimensionSelectors</code>.<br/>
 * Dimension Selects.
 * 
 * @return {sap.m.Select[]}
 * @public
 * @name sap.suite.ui.commons.ChartContainer#getDimensionSelectors
 * @function
 */


/**
 * Inserts a dimensionSelector into the aggregation named <code>dimensionSelectors</code>.
 *
 * @param {sap.m.Select}
 *          oDimensionSelector the dimensionSelector to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the dimensionSelector should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the dimensionSelector is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the dimensionSelector is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#insertDimensionSelector
 * @function
 */

/**
 * Adds some dimensionSelector <code>oDimensionSelector</code> 
 * to the aggregation named <code>dimensionSelectors</code>.
 *
 * @param {sap.m.Select}
 *            oDimensionSelector the dimensionSelector to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#addDimensionSelector
 * @function
 */

/**
 * Removes an dimensionSelector from the aggregation named <code>dimensionSelectors</code>.
 *
 * @param {int | string | sap.m.Select} vDimensionSelector the dimensionSelector to remove or its index or id
 * @return {sap.m.Select} the removed dimensionSelector or null
 * @public
 * @name sap.suite.ui.commons.ChartContainer#removeDimensionSelector
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>dimensionSelectors</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.Select[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.ChartContainer#removeAllDimensionSelectors
 * @function
 */

/**
 * Checks for the provided <code>sap.m.Select</code> in the aggregation named <code>dimensionSelectors</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.m.Select}
 *            oDimensionSelector the dimensionSelector whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.suite.ui.commons.ChartContainer#indexOfDimensionSelector
 * @function
 */
	

/**
 * Destroys all the dimensionSelectors in the aggregation 
 * named <code>dimensionSelectors</code>.
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#destroyDimensionSelectors
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * CharToolBar Content aggregation. Only vizFrame, sap.m.Table and sap.ui.table.Table can be embedded.
 * 
 * <strong>Note</strong>: this is the default aggregation for ChartContainer.
 * @return {sap.suite.ui.commons.ChartContainerContent[]}
 * @public
 * @name sap.suite.ui.commons.ChartContainer#getContent
 * @function
 */


/**
 * Inserts a content into the aggregation named <code>content</code>.
 *
 * @param {sap.suite.ui.commons.ChartContainerContent}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.suite.ui.commons.ChartContainerContent}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.suite.ui.commons.ChartContainerContent} vContent the content to remove or its index or id
 * @return {sap.suite.ui.commons.ChartContainerContent} the removed content or null
 * @public
 * @name sap.suite.ui.commons.ChartContainer#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.ChartContainerContent[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.ChartContainer#removeAllContent
 * @function
 */

/**
 * Checks for the provided <code>sap.suite.ui.commons.ChartContainerContent</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.suite.ui.commons.ChartContainerContent}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.suite.ui.commons.ChartContainer#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#destroyContent
 * @function
 */


/**
 * Event fired when a user clicks on the personalization icon
 *
 * @name sap.suite.ui.commons.ChartContainer#personalizationPress
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'personalizationPress' event of this <code>sap.suite.ui.commons.ChartContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ChartContainer</code>.<br/> itself. 
 *  
 * Event fired when a user clicks on the personalization icon
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ChartContainer</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#attachPersonalizationPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'personalizationPress' event of this <code>sap.suite.ui.commons.ChartContainer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#detachPersonalizationPress
 * @function
 */

/**
 * Fire event personalizationPress to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.ChartContainer#firePersonalizationPress
 * @function
 */


/**
 * Event fired when user change the Content displayed.
 *
 * @name sap.suite.ui.commons.ChartContainer#contentChange
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.selectedItemId Id of the Item selected.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'contentChange' event of this <code>sap.suite.ui.commons.ChartContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ChartContainer</code>.<br/> itself. 
 *  
 * Event fired when user change the Content displayed.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ChartContainer</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#attachContentChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'contentChange' event of this <code>sap.suite.ui.commons.ChartContainer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ChartContainer#detachContentChange
 * @function
 */

/**
 * Fire event contentChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'selectedItemId' of type <code>string</code> Id of the Item selected.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ChartContainer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.ChartContainer#fireContentChange
 * @function
 */


// Start of sap/suite/ui/commons/ChartContainer.js
jQuery.sap.declare("sap.suite.ui.commons.ChartContainer");
jQuery.sap.require("sap.m.Popover");
jQuery.sap.require("sap.m.Button");
//jQuery.sap.require("sap.m.Bar");
jQuery.sap.require("sap.m.Select");
jQuery.sap.require("sap.m.Dialog");
jQuery.sap.require("sap.ui.core.ResizeHandler");
jQuery.sap.require("sap.ui.Device");
sap.ui.getCore().loadLibrary("sap.viz");

sap.suite.ui.commons.ChartContainer.prototype.init = function() {

	this._aChartIcons = [];
	this._selectedChart = null;
	this._dimSelectorsAll = [];
	var oLocale = sap.ui.getCore().getConfiguration().getLanguage();
	this.resBundle = sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons", oLocale);

	//Right side..
	this._oFullScreenButton = new sap.m.Button({
		icon : "sap-icon://full-screen",
		type : sap.m.ButtonType.Transparent,
		tooltip : this.resBundle.getText("CHARTCONTAINER_FULLSCREEN"),
		press : jQuery.proxy(this.toggleFullScreen, this)
	});

	this._oPopup = new sap.ui.core.Popup({
		modal : true,
		shadow : false,
		autoClose : false
	});
	this._oPopup._applyPosition = function(oPostion) {
		var $Ref = this._$();
		$Ref.css({
			left : "0px",
			top : "0px",
			right : "0px",
			bottom : "0px"
		});
	};

	this._oShowLegendButton = new sap.m.Button({
		icon : "sap-icon://menu",
		type : sap.m.ButtonType.Transparent,
		tooltip : this.resBundle.getText("CHARTCONTAINER_LEGEND"),
		press : jQuery.proxy(this._onLegendButtonPress, this)
	});

	this._oShowAllChartButton = new sap.m.Button({
		type : sap.m.ButtonType.Transparent,
		press : jQuery.proxy(this._onShowAllChartPress, this)
	});

	this._oPhonePopoverButton = new sap.m.Button({
		icon : "sap-icon://overflow",
		type : sap.m.ButtonType.Transparent,
		press : jQuery.proxy(this._onPhonePopoverPress, this)
	});

	this._oPersonalizationButton = new sap.m.Button({
		icon : "sap-icon://person-placeholder",
		type : sap.m.ButtonType.Transparent,
		tooltip : this.resBundle.getText("CHARTCONTAINER_PERSONALIZE"),
		press : jQuery.proxy(this._oPersonalizationPress, this)
	});
	this._oActiveChartButton = null;

	this._oAllChartList = new sap.m.List({
		mode : sap.m.ListMode.SingleSelectMaster,
		showSeparators : sap.m.ListSeparators.None,
		includeItemInSelection : true,
		width : "20em",
		select : jQuery.proxy(function(oEvent) {
			var sChartId = oEvent.getParameter("listItem").getCustomData()[0].getValue();
			this._switchChart(sChartId);
		}, this)
	});

	this._oAllIconsList = new sap.m.List({
		mode : sap.m.ListMode.SingleSelectMaster,
		showSeparators : sap.m.ListSeparators.None,
		includeItemInSelection : true,
		width : "20em",
		select : jQuery.proxy(function(oEvent) {
			var customData = oEvent.getParameter("listItem").getCustomData()[0];//[0].getValue();
			// do a getKey here and match and then do.. or pass the customData object to a function..
			this._switchFunctionPhone(customData);
		}, this)
	});

	this._oShowAllChartPopover = new sap.m.ResponsivePopover({
		placement : sap.m.PlacementType.Bottom,
		showHeader : false,
		content : [this._oAllChartList]
	});

	this._oPhonePopover = new sap.m.ResponsivePopover({
		placement : sap.m.PlacementType.Bottom,
		showHeader : false,
		content : [this._oAllIconsList]
	});

	this._oSelectedChart = null;

	// Left side...
	this._oChartTitle = new sap.m.Label();
	// this._oViewBy = new sap.m.Link({
	this._oViewBy = new sap.m.Button({
		text : this.resBundle.getText("CHARTCONTAINER_VIEWBY"),
		type : sap.m.ButtonType.Transparent,
		press : jQuery.proxy(this._showViewByPopover, this)
	//		press : function(oEvent) {
	//			this._ViewByPopover.openBy(oEvent.getSource());
	//		}	
	});
	this._oViewByPopover = new sap.m.ResponsivePopover(this.getId() + "-viewby_popover", {
		title : this.resBundle.getText("CHARTCONTAINER_VIEWBY"),
		placement : sap.m.PlacementType.Bottom,
		contentHeight : "15rem",
		contentWidth : "15rem"
	});

	this._oToolBar = new sap.m.Toolbar({
		active : true,
		design : sap.m.ToolbarDesign.Solid,
		content : [new sap.m.ToolbarSpacer()]
	/// contents are set at onBeforeRendering.
	});
	this.setAggregation("toolBar", this._oToolBar);

	this._currentRangeName = sap.ui.Device.media.getCurrentRange(sap.ui.Device.media.RANGESETS.SAP_STANDARD).name;
	sap.ui.Device.media.attachHandler(this._handleMediaChange, this, sap.ui.Device.media.RANGESETS.SAP_STANDARD);

};

sap.suite.ui.commons.ChartContainer.prototype.toggleFullScreen = function() {
	var fullScreen = this.getProperty("fullScreen");
	if (fullScreen) {
		this.closeFullScreen();
		this.setProperty("fullScreen", false);
	} else {
		this.openFullScreen(this, true);
		this.setProperty("fullScreen", true);
	}
	var sIcon = (fullScreen ? "sap-icon://full-screen" : "sap-icon://exit-full-screen");
	this._oFullScreenButton.setIcon(sIcon);
};

sap.suite.ui.commons.ChartContainer.prototype.openFullScreen = function(oContent, bNeedsScroll) {
	if ((bNeedsScroll != null) && (bNeedsScroll == true)) {
		this._oScrollEnablement = new sap.ui.core.delegate.ScrollEnablement(oContent, oContent.getId() + "-wrapper", {
			horizontal : true,
			vertical : true
		});
	}
	this.$content = oContent.$();
	if (this.$content) {

		// var domContent = oContent.getDomRef();
		//this.$parentNode = this.$content.parent();
		this.$tempNode = jQuery("<div></div>"); // id='" + this.$content.attr("id")+"-overlay"+ "'
		this.$content.before(this.$tempNode);

		this._$overlay = jQuery("<div id='" + jQuery.sap.uid() + "'></div>");
		this._$overlay.addClass("sapCaUiOverlay");
		this._$overlay.append(this.$content);
		this._oPopup.setContent(this._$overlay);
	} else {
		jQuery.sap.log.warn("Overlay: content does not exist or contains more than one child");
	}

	this._oPopup.open(200);

};

sap.suite.ui.commons.ChartContainer.prototype.closeFullScreen = function() {
	if (this._oScrollEnablement != null) {
		this._oScrollEnablement.destroy();
		this._oScrollEnablement = null;
	}
	this.$tempNode.replaceWith(this.$content);
	this._oPopup.close(200);
	this._$overlay.remove();
};

sap.suite.ui.commons.ChartContainer.prototype.onAfterRendering = function(oEvent) {
	var that = this;
	if (this.getAutoAdjustHeight()) {
		jQuery.sap.delayedCall(100, this, function() {
			that._performHeightChanges();
		});
	}
};

sap.suite.ui.commons.ChartContainer.prototype._performHeightChanges = function() {
	var jThis = this.$();
	var _chartContainerHeight = jThis.height() - 10;
	var _toolBarHeight = jThis.find('.sapSuiteUiCommonsChartContainerToolBarArea').children()[0].clientHeight;

	var innerChart = this.getSelectedChart().getContent();
	if (innerChart.setHeight()) {
		innerChart.setHeight((_chartContainerHeight - _toolBarHeight) + "px");
	}
};

sap.suite.ui.commons.ChartContainer.prototype.onBeforeRendering = function(oEvent) {
  this._adjustDisplay(oEvent);
};

sap.suite.ui.commons.ChartContainer.prototype._onLegendButtonPress = function(oEvent) {
	this.setShowLegend(!this.getShowLegend());
};

sap.suite.ui.commons.ChartContainer.prototype._onShowAllChartPress = function(oEvent) {
	this._oShowAllChartPopover.openBy(this._oShowAllChartButton);
};

sap.suite.ui.commons.ChartContainer.prototype._onPhonePopoverPress = function(oEvent) {
	this._oPhonePopover.openBy(this._oPhonePopoverButton);
};

sap.suite.ui.commons.ChartContainer.prototype._oPersonalizationPress = function(oEvent) {
	this.firePersonalizationPress();
};

sap.suite.ui.commons.ChartContainer.prototype._switchChart = function(sChartId) {
	var oRelatedButton = null;
	for (var i = 0; !oRelatedButton && i < this._aChartIcons.length; i++) {
		if (this._aChartIcons[i].getCustomData()[0].getValue() === sChartId) {
			oRelatedButton = this._aChartIcons[i];
		}
	}
	if (oRelatedButton) {
		if (this._oActiveChartButton) {
			this._oActiveChartButton.removeStyleClass("activeButton");
		}
		this._oActiveChartButton = oRelatedButton;
		this._oActiveChartButton.addStyleClass("activeButton");
	}

	var oChart = this._findChartById(sChartId);

	this.setSelectedChart(oChart);
	if (this._oShowAllChartPopover.isOpen()) {
		this._oShowAllChartPopover.close();
	}
	this.fireContentChange({
		selectedItemId : sChartId
	}); // fire the change event with id of the newly selected item..
	this.rerender();//invalidate();
};

sap.suite.ui.commons.ChartContainer.prototype._switchFunctionPhone = function(customData) {
	var oFunction = customData.getKey();
	var oValue = customData.getValue();
	if (oFunction === 'chartId') {
		this._switchChart(oValue);
	} else if (oFunction === 'function') {
		//perform the function
		if (oValue === 'legend') {
			this._onLegendButtonPress();
		} else if (oValue === 'personalization') {
			this._oPersonalizationPress();
		} else if (oValue === 'fullscreen') {
			this.toggleFullScreen();
		}
	}
	//close the phone popup..
	if (this._oPhonePopover.isOpen()) {
		this._oPhonePopover.close();
	}
};

sap.suite.ui.commons.ChartContainer.prototype.setTitle = function(sValue) {
	this._oChartTitle.setText(sValue);
	this.setProperty("title", sValue);
};

sap.suite.ui.commons.ChartContainer.prototype.setShowLegend = function(bValue) {
	this.setProperty("showLegend", bValue);

	//propagate to all charts
	var aContents = this.getAggregation("content");

	if (aContents) {
		for (var i = 0; i < aContents.length; i++) {
			var innerChart = aContents[i].getContent();
			if (innerChart.setVizProperties) {
				//innerChart.setShowLegend(bValue);
				innerChart.setVizProperties({
					legend : {
						visible : bValue
					}
				});
				jQuery.sap.log.info("ChartContainer: propagate showLegend to chart id " + innerChart.getId());
			} else {
				jQuery.sap.log.info("ChartContainer: chart id " + innerChart.getId()
						+ " is missing the setVizProperties property");
			}
		}
	}
};

sap.suite.ui.commons.ChartContainer.prototype.addDimensionSelector = function(oObject) {
	this.addAggregation("dimensionSelectors", oObject);
	this._dimSelectorsAll.push(oObject);
};

sap.suite.ui.commons.ChartContainer.prototype.addContent = function(oObject) {
	this._onAddingChart(oObject);
};
sap.suite.ui.commons.ChartContainer.prototype.insertContent = function(oObject, iIndex) {
	this._onAddingChart(oObject);
};

sap.suite.ui.commons.ChartContainer.prototype._onAddingChart = function(oObject) {
	var innerChart = oObject.getContent();
	if (innerChart.setVizProperties) {
		innerChart.setVizProperties({
			legend : {
				visible : this.getShowLegend()
			}
		});
	}
	if (innerChart.setWidth) {
		innerChart.setWidth("100%");
	}
	this.addAggregation("content", oObject);
	var oButtonIcon = new sap.m.Button({
		icon : oObject.getIcon(),
		type : sap.m.ButtonType.Transparent,
		tooltip : oObject.getTitle(),
		customData : [new sap.ui.core.CustomData({
			key : 'chartId',
			value : innerChart.getId()
		})],
		press : jQuery.proxy(function(oEvent) {
			var sChartId = oEvent.getSource().getCustomData()[0].getValue();
			this._switchChart(sChartId);
		}, this)
	});
	this._aChartIcons.push(oButtonIcon);

	var oShowAllItem = new sap.m.StandardListItem({
		icon : oButtonIcon.getIcon(),
		title : oObject.getTitle(),
		customData : [new sap.ui.core.CustomData({
			key : 'chartId',
			value : innerChart.getId()
		})]
	});
	this._oAllChartList.addItem(oShowAllItem);

	//the first added chart is the selected and active one
	if (this.getAggregation("content").length == 1) {
		this._oAllChartList.setSelectedItem(oShowAllItem);
		this.setSelectedChart(oObject);
		this._oActiveChartButton = oButtonIcon;
	}
};

sap.suite.ui.commons.ChartContainer.prototype.setSelectedChart = function(oObject) {
	//show/hide the showLegend buttons
	var oChart = oObject.getContent();
	this._oChartTitle.setText(oObject.getTitle());
	var bShowChart = (oChart instanceof sap.viz.ui5.controls.VizFrame); //hide legend icon if table, show if chart
	this._oShowLegendButton.setVisible(bShowChart);
	this._oShowAllChartButton.setIcon(oObject.getIcon());
	this._oShowAllChartButton.setTooltip(oObject.getTitle());
	this._oSelectedChart = oObject;
};

sap.suite.ui.commons.ChartContainer.prototype.getSelectedChart = function() {
	return this._oSelectedChart;
};

sap.suite.ui.commons.ChartContainer.prototype._findChartById = function(sId) {
	var oObject = null;
	var aObjects = this.getAggregation("content");
	if (aObjects) {
		for (var i = 0; !oObject && i < aObjects.length; i++) {
			if (aObjects[i].getContent().getId() === sId) {
				oObject = aObjects[i];
			}
		}
	}
	return oObject;
};

sap.suite.ui.commons.ChartContainer.prototype._preparePhonePopup = function() {
	this._oAllIconsList.removeAllItems();
	var oIconsItems = this._oAllChartList.getItems();
	for (var i = 0; i < oIconsItems.length; i++) {
		var chartId = oIconsItems[i].getCustomData()[0].getValue();
		var oShowAllIconsItem = new sap.m.StandardListItem({
			icon : oIconsItems[i].getIcon(),
			title : oIconsItems[i].getTitle(),
			customData : [new sap.ui.core.CustomData({
				key : 'chartId',
				value : chartId
			})]
		});
		this._oAllIconsList.addItem(oShowAllIconsItem);
	}
	if (this._oShowLegendButton.getVisible()) {
		var oPhoneLegendItem = new sap.m.StandardListItem({
			icon : this._oShowLegendButton.getIcon(),
			title : this.resBundle.getText("CHARTCONTAINER_LEGEND"),
			customData : [new sap.ui.core.CustomData({
				key : 'function',
				value : 'legend'
			})]
		});
		this._oAllIconsList.addItem(oPhoneLegendItem);
	}

	var oPhonePersonalizationItem = new sap.m.StandardListItem({
		icon : this._oPersonalizationButton.getIcon(),
		title : this.resBundle.getText("CHARTCONTAINER_PERSONALIZE"),
		customData : [new sap.ui.core.CustomData({
			key : 'function',
			value : 'personalization'
		})]
	});
	this._oAllIconsList.addItem(oPhonePersonalizationItem);
	var oPhoneFullscreenItem = new sap.m.StandardListItem({
		icon : this._oFullScreenButton.getIcon(),
		title : this.resBundle.getText("CHARTCONTAINER_FULLSCREEN"),
		customData : [new sap.ui.core.CustomData({
			key : 'function',
			value : 'fullscreen'
		})]
	});
	this._oAllIconsList.addItem(oPhoneFullscreenItem);
};

sap.suite.ui.commons.ChartContainer.prototype._adjustIconsDisplay = function(oEvent) {
	var isPhone = sap.ui.Device.system.phone;
	//var isTab = sap.ui.Device.system.tablet;
	//var isDesktop = sap.ui.Device.system.desktop;

	if (!isPhone) { // same behavior for Tablet/Desktop wrt icons.
		if (this._aChartIcons.length > 3) {
			//show only allChart icon
			this._oToolBar.addContent(this._oShowAllChartButton);
		} else {
			for (var iChart = 0; iChart < this._aChartIcons.length; iChart++) {
				this._oToolBar.addContent(this._aChartIcons[iChart]);
			}
		}
		this._oToolBar.addContent(this._oShowLegendButton);
		if (this.getShowPersonalization()) {
			this._oToolBar.addContent(this._oPersonalizationButton);
		}
		if (this.getShowFullScreen()) {
			this._oToolBar.addContent(this._oFullScreenButton);
		}
	} else {
		// add the phone popover
		this._preparePhonePopup();
		this._oToolBar.addContent(this._oPhonePopoverButton);
		// icon for ... is: horizontal-grip or overflow 
	}
};

sap.suite.ui.commons.ChartContainer.prototype._adjustSelectorDisplay = function(oEvent) {
	var dimensionSelectors = this._dimSelectorsAll;//this.getDimensionSelectors();
	if (dimensionSelectors.length == 0) {
		this._oViewBy.setVisible(false);
		this._oChartTitle.setVisible(true);
		this._oToolBar.addContent(this._oChartTitle);
	} else {
		this._oChartTitle.setVisible(false);
		if (dimensionSelectors.length == 1) {
			this._oViewBy.setVisible(false);
			this._oToolBar.insertContent(dimensionSelectors[0], 0);
		} else {
			if ((this._currentRangeName === 'Phone') || (this._currentRangeName === 'Tablet')
					|| ((this._currentRangeName === 'Desktop') && (dimensionSelectors.length > 3))) {
				this._oViewBy.setVisible(true);
				this._oToolBar.addContent(this._oViewBy);
				this._oViewByPopover.removeAllContent();
				for (var i = 0; i < dimensionSelectors.length; i++) {
					dimensionSelectors[i].setWidth("100%");
					dimensionSelectors[i].setAutoAdjustWidth(false);
					this._oViewByPopover.addContent(dimensionSelectors[i]);
				}
			} else {
				this._oViewBy.setVisible(false);
				for (var i = 0; i < dimensionSelectors.length; i++) {
					dimensionSelectors[i].setAutoAdjustWidth(true);
					this._oToolBar.insertContent(dimensionSelectors[i], i);
				}
			}
		}
	}

};

sap.suite.ui.commons.ChartContainer.prototype._showViewByPopover = function(oEvent) {
	this._oViewByPopover.openBy(this._oViewBy);
};

sap.suite.ui.commons.ChartContainer.prototype._adjustDisplay = function(oEvent) {
	this._oToolBar.removeAllContent();
	this._adjustSelectorDisplay(oEvent);
	this._oToolBar.addContent(new sap.m.ToolbarSpacer());
	this._adjustIconsDisplay(oEvent);
};

sap.suite.ui.commons.ChartContainer.prototype.setSelectorGroupLabel = function(selectorGroupLabel) {
	this.setProperty("selectorGroupLabel", selectorGroupLabel, true);
	this._oViewBy.setText(selectorGroupLabel);
};

sap.suite.ui.commons.ChartContainer.prototype._handleMediaChange = function(oEvent) {
	this._currentRangeName = sap.ui.Device.media.getCurrentRange(sap.ui.Device.media.RANGESETS.SAP_STANDARD).name;
	this._adjustDisplay(oEvent);
};

sap.suite.ui.commons.ChartContainer.prototype.exit = function() {
	sap.ui.Device.media.detachHandler(this._handleMediaChange, this, sap.ui.Device.media.RANGESETS.SAP_STANDARD);
	if (this._oFullScreenButton) {
		this._oFullScreenButton.destroy();
		this._oFullScreenButton = undefined;
	}
	if (this._oPopup) {
		this._oPopup.destroy();
		this._oPopup = undefined;
	}
	if (this._oShowLegendButton) {
		this._oShowLegendButton.destroy();
		this._oShowLegendButton = undefined;
	}
	if (this._oShowAllChartButton) {
		this._oShowAllChartButton.destroy();
		this._oShowAllChartButton = undefined;
	}
	if (this._oPhonePopoverButton) {
		this._oPhonePopoverButton.destroy();
		this._oPhonePopoverButton = undefined;
	}
	if (this._oPersonalizationButton) {
		this._oPersonalizationButton.destroy();
		this._oPersonalizationButton = undefined;
	}
	if (this._oActiveChartButton) {
		this._oActiveChartButton.destroy();
		this._oActiveChartButton = undefined;
	}
	if (this._oAllChartList) {
		this._oAllChartList.destroy();
		this._oAllChartList = undefined;
	}
	if (this._oAllIconsList) {
		this._oAllIconsList.destroy();
		this._oAllIconsList = undefined;
	}
	if (this._oShowAllChartPopover) {
		this._oShowAllChartPopover.destroy();
		this._oShowAllChartPopover = undefined;
	}
	if (this._oPhonePopover) {
		this._oPhonePopover.destroy();
		this._oPhonePopover = undefined;
	}
	if (this._oSelectedChart) {
		this._oSelectedChart.destroy();
		this._oSelectedChart = undefined;
	}
	if (this._oViewBy) {
		this._oViewBy.destroy();
		this._oViewBy = undefined;
	}
	if (this._oViewByPopover) {
		this._oViewByPopover.destroy();
		this._oViewByPopover = undefined;
	}
	if (this._oToolBar) {
		this._oToolBar.destroy();
		this._oToolBar = undefined;
	}
};
