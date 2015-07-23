/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.ViewRepeater.
jQuery.sap.declare("sap.suite.ui.commons.ViewRepeater");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.commons.RowRepeater");


/**
 * Constructor for a new ViewRepeater.
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
 * <li>{@link #getItemMinWidth itemMinWidth} : int</li>
 * <li>{@link #getResponsive responsive} : boolean (default: false)</li>
 * <li>{@link #getDefaultViewIndex defaultViewIndex} : int (default: 0)</li>
 * <li>{@link #getShowSearchField showSearchField} : boolean (default: true)</li>
 * <li>{@link #getShowViews showViews} : boolean (default: true)</li>
 * <li>{@link #getExternal external} : boolean (default: false)</li>
 * <li>{@link #getItemHeight itemHeight} : int</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '100%')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getViews views} : sap.suite.ui.commons.RepeaterViewConfiguration[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getExternalRepresentation externalRepresentation} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.ViewRepeater#event:search search} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.ViewRepeater#event:changeView changeView} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.commons.RowRepeater#constructor sap.ui.commons.RowRepeater}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control extends the sap.ui.commons.RowRepeater control providing an ability to change data representation by switching between a number of views. The data can be displayed not only in rows but also in tiles that are adjusted to fill the entire horizontal space in a row.
 * @extends sap.ui.commons.RowRepeater
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.ViewRepeater
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.commons.RowRepeater.extend("sap.suite.ui.commons.ViewRepeater", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"itemMinWidth" : {type : "int", group : "Misc", defaultValue : null},
		"responsive" : {type : "boolean", group : "Misc", defaultValue : false},
		"defaultViewIndex" : {type : "int", group : "Misc", defaultValue : 0},
		"showSearchField" : {type : "boolean", group : "Misc", defaultValue : true},
		"showViews" : {type : "boolean", group : "Misc", defaultValue : true},
		"external" : {type : "boolean", group : "Misc", defaultValue : false},
		"itemHeight" : {type : "int", group : "Misc", defaultValue : null},
		"height" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : '100%'}
	},
	aggregations : {
		"views" : {type : "sap.suite.ui.commons.RepeaterViewConfiguration", multiple : true, singularName : "view"}
	},
	associations : {
		"externalRepresentation" : {type : "sap.ui.core.Control", multiple : false}
	},
	events : {
		"search" : {}, 
		"changeView" : {}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.ViewRepeater with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.ViewRepeater.extend
 * @function
 */

sap.suite.ui.commons.ViewRepeater.M_EVENTS = {'search':'search','changeView':'changeView'};


/**
 * Getter for property <code>itemMinWidth</code>.
 * The minimal width of the tile for the current view. Only applicable if "responsive" property is set to true.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>itemMinWidth</code>
 * @public
 * @name sap.suite.ui.commons.ViewRepeater#getItemMinWidth
 * @function
 */

/**
 * Setter for property <code>itemMinWidth</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iItemMinWidth  new value for property <code>itemMinWidth</code>
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ViewRepeater#setItemMinWidth
 * @function
 */


/**
 * Getter for property <code>responsive</code>.
 * This parameter indicates whether the content is shown in rows or tiles. If false, the content is shown in rows just like in core sap.ui.commons.RowRepeater. If true, the content is shown in tiles (similar to sap.ui.ux3.DataSet control) that have minimal width defined by the "itemMinWidth" property. The number of columns depends on the parent control's width. If you resize the control, the number of columns may change respectively so that the content tiles can fill the entire space of a row.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>responsive</code>
 * @public
 * @name sap.suite.ui.commons.ViewRepeater#getResponsive
 * @function
 */

/**
 * Setter for property <code>responsive</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bResponsive  new value for property <code>responsive</code>
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ViewRepeater#setResponsive
 * @function
 */


/**
 * Getter for property <code>defaultViewIndex</code>.
 * The index of the default view starting from 0. The view is selected on the initial rendering of the control. If the index is greater than the total quantity of the views, the last view is selected.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>defaultViewIndex</code>
 * @public
 * @name sap.suite.ui.commons.ViewRepeater#getDefaultViewIndex
 * @function
 */

/**
 * Setter for property <code>defaultViewIndex</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iDefaultViewIndex  new value for property <code>defaultViewIndex</code>
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ViewRepeater#setDefaultViewIndex
 * @function
 */


/**
 * Getter for property <code>showSearchField</code>.
 * Indicates if the search field panel is shown.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showSearchField</code>
 * @public
 * @name sap.suite.ui.commons.ViewRepeater#getShowSearchField
 * @function
 */

/**
 * Setter for property <code>showSearchField</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowSearchField  new value for property <code>showSearchField</code>
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ViewRepeater#setShowSearchField
 * @function
 */


/**
 * Getter for property <code>showViews</code>.
 * Indicates if the view selector panel is shown.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showViews</code>
 * @public
 * @name sap.suite.ui.commons.ViewRepeater#getShowViews
 * @function
 */

/**
 * Setter for property <code>showViews</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowViews  new value for property <code>showViews</code>
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ViewRepeater#setShowViews
 * @function
 */


/**
 * Getter for property <code>external</code>.
 * Indicates if the external representation of the current view is rendered.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>external</code>
 * @public
 * @name sap.suite.ui.commons.ViewRepeater#getExternal
 * @function
 */

/**
 * Setter for property <code>external</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bExternal  new value for property <code>external</code>
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ViewRepeater#setExternal
 * @function
 */


/**
 * Getter for property <code>itemHeight</code>.
 * The height of the tile in the current view in pixels. Only applicable if the responsive property is set to true. This value is used for calculating the number of tile rows.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>itemHeight</code>
 * @public
 * @name sap.suite.ui.commons.ViewRepeater#getItemHeight
 * @function
 */

/**
 * Setter for property <code>itemHeight</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iItemHeight  new value for property <code>itemHeight</code>
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ViewRepeater#setItemHeight
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * The height of the control. Only applicable if the responsive property is set to true.
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.suite.ui.commons.ViewRepeater#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ViewRepeater#setHeight
 * @function
 */


/**
 * Getter for aggregation <code>views</code>.<br/>
 * The list of views for the data representation.
 * 
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration[]}
 * @public
 * @name sap.suite.ui.commons.ViewRepeater#getViews
 * @function
 */


/**
 * Inserts a view into the aggregation named <code>views</code>.
 *
 * @param {sap.suite.ui.commons.RepeaterViewConfiguration}
 *          oView the view to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the view should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the view is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the view is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ViewRepeater#insertView
 * @function
 */

/**
 * Adds some view <code>oView</code> 
 * to the aggregation named <code>views</code>.
 *
 * @param {sap.suite.ui.commons.RepeaterViewConfiguration}
 *            oView the view to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ViewRepeater#addView
 * @function
 */

/**
 * Removes an view from the aggregation named <code>views</code>.
 *
 * @param {int | string | sap.suite.ui.commons.RepeaterViewConfiguration} vView the view to remove or its index or id
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} the removed view or null
 * @public
 * @name sap.suite.ui.commons.ViewRepeater#removeView
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>views</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.ViewRepeater#removeAllViews
 * @function
 */

/**
 * Checks for the provided <code>sap.suite.ui.commons.RepeaterViewConfiguration</code> in the aggregation named <code>views</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.suite.ui.commons.RepeaterViewConfiguration}
 *            oView the view whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.suite.ui.commons.ViewRepeater#indexOfView
 * @function
 */
	

/**
 * Destroys all the views in the aggregation 
 * named <code>views</code>.
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ViewRepeater#destroyViews
 * @function
 */


/**
 * The control to be rendered instead of the repeater's own content.
 *
 * @return {string} Id of the element which is the current target of the <code>externalRepresentation</code> association, or null
 * @public
 * @name sap.suite.ui.commons.ViewRepeater#getExternalRepresentation
 * @function
 */

/**
 * The control to be rendered instead of the repeater's own content.
 *
 * @param {string | sap.ui.core.Control} vExternalRepresentation 
 *    Id of an element which becomes the new target of this <code>externalRepresentation</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ViewRepeater#setExternalRepresentation
 * @function
 */


	
/**
 * This event is fired when the user performs a search.
 *
 * @name sap.suite.ui.commons.ViewRepeater#search
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.query The search query.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'search' event of this <code>sap.suite.ui.commons.ViewRepeater</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ViewRepeater</code>.<br/> itself. 
 *  
 * This event is fired when the user performs a search.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ViewRepeater</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ViewRepeater#attachSearch
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'search' event of this <code>sap.suite.ui.commons.ViewRepeater</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ViewRepeater#detachSearch
 * @function
 */

/**
 * Fire event search to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'query' of type <code>string</code> The search query.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.ViewRepeater#fireSearch
 * @function
 */


/**
 * This event is fired when a user switches between views.
 *
 * @name sap.suite.ui.commons.ViewRepeater#changeView
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.oldViewIndex Contains an index of the previous view in the Views aggregation.
 * @param {int} oControlEvent.getParameters.newViewIndex Contains an index of the new view in the Views aggregation.
 * @param {string} oControlEvent.getParameters.filterId Contains an ID of the filter in the Filters aggregation.
 * @param {string} oControlEvent.getParameters.sorterId Contains an ID of the sorter in the Sorters aggregation.
 * @param {int} oControlEvent.getParameters.page Contains a page number.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'changeView' event of this <code>sap.suite.ui.commons.ViewRepeater</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.ViewRepeater</code>.<br/> itself. 
 *  
 * This event is fired when a user switches between views.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.ViewRepeater</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ViewRepeater#attachChangeView
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'changeView' event of this <code>sap.suite.ui.commons.ViewRepeater</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ViewRepeater#detachChangeView
 * @function
 */

/**
 * Fire event changeView to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'oldViewIndex' of type <code>int</code> Contains an index of the previous view in the Views aggregation.</li>
 * <li>'newViewIndex' of type <code>int</code> Contains an index of the new view in the Views aggregation.</li>
 * <li>'filterId' of type <code>string</code> Contains an ID of the filter in the Filters aggregation.</li>
 * <li>'sorterId' of type <code>string</code> Contains an ID of the sorter in the Sorters aggregation.</li>
 * <li>'page' of type <code>int</code> Contains a page number.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.ViewRepeater} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.ViewRepeater#fireChangeView
 * @function
 */

// Start of sap/suite/ui/commons/ViewRepeater.js
///**
// * This file defines behavior for the control,
// */

sap.suite.ui.commons.ViewRepeater.prototype.init = function() {
    var that = this;

    this._rb = sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons");

    this.addStyleClass("suiteUiVr");
    
    sap.ui.commons.RowRepeater.prototype.init.call(this);

    this._oSegBtn = new sap.ui.commons.SegmentedButton({
        id: this.getId()+"-segBtn"
    });
    this._repopulateViewSelector();

    this._oSearchField = new sap.ui.commons.SearchField({
        id: this.getId()+"-searchFld",
        enableFilterMode: true,
        enableListSuggest: false,
        search: function(oEvent) {
            that.fireSearch({query: oEvent.getParameter("query")});
        }
    });
    
    this.attachFilter(function(oEvent) {
    	this._currentFilterId = oEvent.getParameter("filterId");
    });
    
    this.attachSort(function(oEvent) {
    	this._currentSorterId = oEvent.getParameter("sorterId");
    });
    
};

sap.suite.ui.commons.ViewRepeater.prototype.setDefaultViewIndex = function(value) {
    this.setProperty("defaultViewIndex", value);
    this._selectDefaultView();
    return this;
};

sap.suite.ui.commons.ViewRepeater.prototype._selectDefaultView = function() {
    var iView = this.getDefaultViewIndex();
    if (iView === this._currentViewIndex) return;
    var aViews = this.getViews() || [];
    if ( aViews.length > 0) {
        if (iView >= aViews.length) iView = aViews.length-1;
        this.selectView(iView);
        var sDefViewBtnId = this.getId()+"-"+aViews[iView].getId()+"-triggerBtn";
        this._oSegBtn.setSelectedButton(sDefViewBtnId);
    }
};

sap.suite.ui.commons.ViewRepeater.prototype._repopulateViewSelector = function() {
    var that = this;

    var result = that._oSegBtn.removeAllAggregation("buttons", true);
    jQuery.each(result, function(i, oButton) {
        oButton.destroy();
    });

    var aViews = this.getViews() || [];
    for (var i=0; i<aViews.length; i++) {
        var oView = aViews[i];

        if (oView.getExternal() === true) {
            var oExtRepr = oView.getExternalRepresentation();
            if (!oExtRepr.getModel()) {
                oExtRepr.setModel(this.getModel());
            }
        }

        var oViewButton = new sap.ui.commons.Button({
            id: this.getId() + "-" + oView.getId() + "-triggerBtn",
            text: oView.getTitle() || ( oView.getIcon() ? undefined : this._rb.getText("VIEWREPEATER_TAB_DEFAULT_NAME", [(i+1)]) ),
            icon: oView.getIcon(),
            iconHovered: oView.getIconHovered(),
            iconSelected: oView.getIconSelected(),
            tooltip: oView.getTooltip(),
            lite: true
        });
        // this would overwrite button press
        that._oSegBtn.addButton(oViewButton);
        // restore needed button press

        //call selector passing view itself
        oViewButton.attachPress(oView, function(ev, oViewData) {
            that.selectView(oViewData);
            //rerendering is needed because in Chrome there is a bug in rendering of the last button
            that._oSegBtn.rerender();
        });

    }

    this._selectDefaultView();
};

sap.suite.ui.commons.ViewRepeater.prototype.setModel = function(oModel, sName) {
    sap.ui.base.ManagedObject.prototype.setModel.call(this, oModel, sName);
    this._repopulateViewSelector();
    return this;
};

sap.suite.ui.commons.ViewRepeater.prototype.addView = function(oRowRepeaterView) {
    this.addAggregation("views", oRowRepeaterView);
    this._repopulateViewSelector();
    
    return this;
};

sap.suite.ui.commons.ViewRepeater.prototype.removeAllViews = function() {
    var result = this.removeAllAggregation("views");
    this._repopulateViewSelector();
    return result;
};

sap.suite.ui.commons.ViewRepeater.prototype.insertView = function(oView, iIndex) {
	this.insertAggregation("views", oView, iIndex);
	this._repopulateViewSelector();
	
	return this;
};
    
sap.suite.ui.commons.ViewRepeater.prototype.removeView = function(oView) {
	var result = this.removeAggregation("views", oView);
	this._repopulateViewSelector();
	return result;
};
    
//TODO write correct jsdoc
//the method switch view to selected one
// vView can be the instance of RowRepeaterView or its index in the views aggregation
sap.suite.ui.commons.ViewRepeater.prototype.selectView = function(vView) {
    var oView, iViewIndex = 0;
    switch (typeof vView) {
        case "number": {
            oView = this.getViews()[vView];
            iViewIndex = vView;
            break;
        }
        case "object": {
        	var iViewsNumber = this.getViews().length;
        	
            for (var i = 0; i < iViewsNumber; i++) {
            	if (vView.getId() === this.getViews()[i].getId()) {
            		oView = vView;
            		iViewIndex = i;
            		break;
            	}
            }
        }
    }
    if (!oView) {
    	return;
    }

    //set Responsive
    var bResponsive = oView.getResponsive();
    if (typeof bResponsive == "boolean") {
        this.setResponsive(bResponsive);
    }
    //set Item Min Width
    var iItemMinWidth = oView.getItemMinWidth();
    if (typeof iItemMinWidth == "number" &&
        iItemMinWidth > 0 &&
        iItemMinWidth != this.setItemMinWidth()) {
        this.setItemMinWidth(iItemMinWidth);
    }
    
    var iItemHeight = oView.getItemHeight();
    if (iItemHeight != this.getItemHeight() && iItemHeight > 0) {
    	this.setItemHeight(iItemHeight);
    }
    
    //set Number Of Tiles
    if (oView.getNumberOfTiles() > 0 &&
    		oView.getNumberOfTiles() != this.setNumberOfRows()) {
    	this.setNumberOfRows(oView.getNumberOfTiles());
    	
    }
    
    //set External flag
    var bExternal = oView.getExternal();
    if (bExternal === true) {
        this.setExternal(true);
        this.setExternalRepresentation( oView.getExternalRepresentation() );
    } else {
        this.setExternal(false);
        this.setExternalRepresentation(null);
    }

    var iCurrentPage = this.getCurrentPage();

    //bind Template
    var sPath = oView.getPath();
    var oTemplate = oView.getTemplate();
    if (sPath && oTemplate) {
        this.bindRows(sPath, oTemplate);

        this._applyFilter(this._currentFilterId);
        this._applySorter(this._currentSorterId);
    }

    if (this._currentViewIndex || iViewIndex != this._currentViewIndex) {
    	this.fireChangeView({
    		newViewIndex: iViewIndex,
    		oldViewIndex: this._currentViewIndex,
    		filterId: this._currentFilterId,
    		sorterId: this._currentSorterId,
    		page: iCurrentPage
    	});
    }

    this._currentViewIndex = iViewIndex;

    this._oView = oView;
};

sap.suite.ui.commons.ViewRepeater.prototype._applyFilter = function(sFilterId, oListBinding) {
    if (sFilterId) {
        if (!oListBinding) {
        	oListBinding = this.getBinding("rows");
        }
        
    	var aFilters = this.getFilters();
    	var i = aFilters.length;
    	
	    for (var n = 0; n < i; n++) {
			if(aFilters[n].getId() === sFilterId) {
				var oFilter = aFilters[n];
				break;
			}
		}
		if (oFilter) {
			oListBinding.filter(oFilter.getFilters());
		}
    }	
};

sap.suite.ui.commons.ViewRepeater.prototype._applySorter = function(sSorterId, oListBinding) {
    if (sSorterId) {
        if (!oListBinding) {
        	oListBinding = this.getBinding("rows");
        }
        
    	var aSorters = this.getSorters();
    	var i = aSorters.length;
    	
	    for (var n = 0; n < i; n++) {
			if(aSorters[n].getId() === sSorterId) {
				var oSorter = aSorters[n];
				break;
			}
		}
		if (oSorter) {
			oListBinding.sort(oSorter.getSorter());
		}
    }	
};

sap.suite.ui.commons.ViewRepeater.prototype.onBeforeRendering = function() {
    if (this.getResponsive() && this.getShowMoreSteps() == 0) {
    	if (!this._bInit) {
	    	this.setNumberOfRows(0);
    	}
    } else if (this._oView && this._oView.getNumberOfTiles() > 0 &&
        		this._oView.getNumberOfTiles() != this.getNumberOfRows()
        		&& !this.getResponsive()) {
        	this.setNumberOfRows(this._oView.getNumberOfTiles());
    }
    this._bInit = false;
};

sap.suite.ui.commons.ViewRepeater.prototype._updateBodyPosition = function() {
	var iViewSwHeight = jQuery("#" + this.getId() + ">div.suiteUiVrViewSwHolder").outerHeight();
	var iPtbHeight = jQuery("#" + this.getId() + ">div.sapUiRrPtb").outerHeight();
	var iStbHeight = jQuery("#" + this.getId() + ">div.sapUiRrStb").outerHeight();
	var iFtrHeight = jQuery("#" + this.getId() + ">div.sapUiRrFtr").outerHeight();
	
	var oBody = jQuery.sap.byId(this.getId() + "-body");
	oBody.css("top", iViewSwHeight + iPtbHeight + iStbHeight + 3);
	oBody.css("bottom", iFtrHeight);
};

sap.suite.ui.commons.ViewRepeater.prototype.onAfterRendering = function() {
	this._computeWidths(true);

	sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
	if (this.getResponsive()) {
		if (this.getShowMoreSteps() == 0) {
			jQuery("#" + this.getId() + ">div.sapUiRrFtr").hide();
		}
		
		jQuery.sap.delayedCall(100, this, function () {
			this._sResizeListenerId = sap.ui.core.ResizeHandler.register(jQuery.sap.domById(this.getId() + "-body"),  jQuery.proxy(this._handleResize, this));
			
			if (this.getShowMoreSteps() == 0) {
				this._updateBodyPosition();
			}
		});
	}
};

sap.suite.ui.commons.ViewRepeater.prototype._handleResize = function () {
    if(!this.getDomRef()){
        return;
    }

    this._computeWidths();
    
    if (this.getResponsive() && this.getShowMoreSteps() == 0) {
		var oBody = jQuery.sap.byId(this.getId() + "-body");
		var iBodyHeight = oBody.height();
		
		var iNumberOfTilesInRow = this._itemsPerRow;
		//+3px for the spaces between tiles
		var iNumberOfRows = Math.floor(iBodyHeight / (this.getItemHeight() + 3));
		
		var iNumberOfTiles = iNumberOfRows * iNumberOfTilesInRow;
		if (iNumberOfTiles != this.getNumberOfRows()) {
			this._bInit = true;
			this.setNumberOfRows(iNumberOfTiles);
		} else {
			jQuery("#" + this.getId() + ">div.sapUiRrFtr").show();
		}
    }
};

sap.suite.ui.commons.ViewRepeater.prototype._computeWidths = function (bInitial) {
    var oThis = this;       // UI5 object
    var $This = this.$();   // DOM object
    var iItemMinWidth = oThis.getItemMinWidth();

    var iNumberOfCols =
        (this.getResponsive()===true) ? Math.floor($This.width()/iItemMinWidth) : 1;
    var iPercentWidth = Math.floor(100/iNumberOfCols);

    // since one percent includes several pixels
    // rounding error may cause an overflow above the actual width of control
    if($This.width()*iPercentWidth/100 < iItemMinWidth){
        iNumberOfCols--;
        iPercentWidth = Math.floor(100/iNumberOfCols);
    }

    if (bInitial || oThis._height != $This.height() || oThis._itemsPerRow != iNumberOfCols) {
        jQuery("#"+this.getId()+" .sapUiRrBody").css("width", "100%");

        var iOrphanedPercents = 100-(iNumberOfCols*iPercentWidth);
        var w;

        jQuery("#"+this.getId()+" .sapUiRrBody li").each( function(index) {
            //distribute orphaned percents along the row
            w = iPercentWidth;
            if (index % iNumberOfCols < iOrphanedPercents) w++;
            jQuery(this).css("width", w+"%");
            jQuery(this).css("margin", "0");
        });

        oThis._height = $This.height();
        oThis._itemsPerRow = iNumberOfCols;
        oThis._percentWidth = iPercentWidth;
    }

};

sap.suite.ui.commons.ViewRepeater.prototype.startPagingAnimation = function() {
	sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
	
    // local variables
    var oCore = sap.ui.getCore(),
        oRenderManager = oCore.getRenderManager(),
        sId = this.getId(),
        iPageFrom = this.iPreviousPage,
        iPageTo = this.getCurrentPage(),
        iNumberOfRows = this.getNumberOfRows(),
        iStartIndex = (iPageTo-1) * iNumberOfRows,
        aRows = this.getRows(),
        iCurrentVisibleRows = this._getRowCount()>iNumberOfRows*iPageTo ? iNumberOfRows : this._getRowCount()-iNumberOfRows*(iPageTo-1),
        iLastPage = Math.ceil( this._getRowCount()/iNumberOfRows ),
        n, i, w,
        oBinding = this.getBinding("rows");

    // DOM elements
    var oDomCurrentLI,
        oJQDomULFrom = jQuery(jQuery.sap.domById(sId+"-page_"+iPageFrom)),
        oDomBodyDIV = jQuery.sap.domById(sId+"-body"),
        oJQDomBodyDIV = jQuery(oDomBodyDIV);

    // fix the height on the body DIV to allow an animated height change
    oJQDomBodyDIV.css("height",oJQDomBodyDIV.outerHeight());

    // create UL for new page
    var sDirection;
    if(sap.ui.getCore() && sap.ui.getCore().getConfiguration() && sap.ui.getCore().getConfiguration().getRTL()) {
        sDirection = (iPageTo<iPageFrom) ? "left" : "right";
    }else{
        sDirection = (iPageTo<iPageFrom) ? "right" : "left";
    }

    // load the required contexts
    if (oBinding) {
        // update the rows aggregation
        this._bSecondPage = !this._bSecondPage;
        this.updateRows(true);
        aRows = this.getRows();
        iStartIndex = (this._bSecondPage ? 1 : 0) * iNumberOfRows;
    }

    // create the rows where we navigate to in the DOM
    var sStyleString = "\"top:-" + oJQDomULFrom.outerHeight(true) + "px;" + sDirection + ":" + oJQDomULFrom.outerWidth(true) + "px;\"";
    jQuery("<ul id=\"" + sId + "-page_" + iPageTo + "\" class=\"sapUiRrPage\" style=" + sStyleString + "/>").appendTo(oDomBodyDIV);
    var oDomULTo = oDomBodyDIV.lastChild;
    var oJQDomULTo = jQuery(oDomULTo);
    var iOrphanedPercents = 100-(this._itemsPerRow*this._percentWidth);
    for( n=iStartIndex, i=0; n<iStartIndex+iCurrentVisibleRows; n++, i++ ) {
        //distribute orphaned percents along the row
        w = this._percentWidth;
        if (i % this._itemsPerRow < iOrphanedPercents) w++;
        jQuery("<li id=\"" + sId + "-row_" + n + "\" style=\"width:"+w+"%\" class=\"sapUiRrRow\"/>").appendTo(oDomULTo);
        oDomCurrentLI =  oDomULTo.lastChild;
        oRenderManager.render(aRows[n], oDomCurrentLI);
    }

    // animate the paging effect
    if(sDirection==="right") {
        oJQDomULFrom.animate({right:-oJQDomULFrom.outerWidth(true)},"slow");
        oJQDomULTo.animate({right:0},"slow");
    } else {
        oJQDomULFrom.animate({left:-oJQDomULFrom.outerWidth(true)},"slow");
        oJQDomULTo.animate({left:0},"slow");
    }

    // animate the height change if number of displayed rows changes
    oJQDomBodyDIV.animate({height:oJQDomULTo.outerHeight(true)},"slow",jQuery.proxy(this.endPagingAnimation,this));
};

sap.suite.ui.commons.ViewRepeater.prototype.endPagingAnimation = function() {
	sap.ui.commons.RowRepeater.prototype.endPagingAnimation.call(this);
	this._sResizeListenerId = sap.ui.core.ResizeHandler.register(jQuery.sap.domById(this.getId() + "-body"),  jQuery.proxy(this._handleResize, this));
};

sap.suite.ui.commons.ViewRepeater.prototype.exit = function() {
	this._oSegBtn.destroy();
	this._oSearchField.destroy();
	sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
};