/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.UnifiedThingInspector.
jQuery.sap.declare("sap.suite.ui.commons.UnifiedThingInspector");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new UnifiedThingInspector.
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
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getDescription description} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getTransactionsVisible transactionsVisible} : boolean (default: false)</li>
 * <li>{@link #getActionsVisible actionsVisible} : boolean (default: false)</li>
 * <li>{@link #getDestroyPageOnBack destroyPageOnBack} : boolean (default: true)</li>
 * <li>{@link #getConfigurationVisible configurationVisible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getFacets facets} : sap.suite.ui.commons.FacetOverview[]</li>
 * <li>{@link #getFacetContent facetContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getKpis kpis} : sap.suite.ui.commons.KpiTile[]</li>
 * <li>{@link #getTransactions transactions} : sap.ui.core.Control[]</li>
 * <li>{@link #getActions actions} : sap.m.Button[]</li>
 * <li>{@link #getPages pages} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.UnifiedThingInspector#event:backAction backAction} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.UnifiedThingInspector#event:transactionsButtonPress transactionsButtonPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.UnifiedThingInspector#event:actionsButtonPress actionsButtonPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.UnifiedThingInspector#event:configurationButtonPress configurationButtonPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.UnifiedThingInspector#event:navigate navigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.UnifiedThingInspector#event:afterNavigate afterNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control provides an ability to display a thing (for example, object factsheet) on the desktop, tablet, and phone devices in a Fiori style.
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.UnifiedThingInspector", { metadata : {

	publicMethods : [
		// methods
		"getSelectedFacet", "navigateToDetailWithContent", "navigateToDetail", "navigateToPage", "navigateToPageId"
	],
	library : "sap.suite.ui.commons",
	properties : {
		"height" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : '100%'},
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"name" : {type : "string", group : "Misc", defaultValue : null},
		"description" : {type : "string", group : "Misc", defaultValue : null},
		"icon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"transactionsVisible" : {type : "boolean", group : "Misc", defaultValue : false},
		"actionsVisible" : {type : "boolean", group : "Misc", defaultValue : false},
		"destroyPageOnBack" : {type : "boolean", group : "Misc", defaultValue : true},
		"configurationVisible" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	aggregations : {
		"facets" : {type : "sap.suite.ui.commons.FacetOverview", multiple : true, singularName : "facet"}, 
		"facetContent" : {type : "sap.ui.core.Control", multiple : true, singularName : "facetContent"}, 
		"navContainer" : {type : "sap.m.NavContainer", multiple : false, visibility : "hidden"}, 
		"kpis" : {type : "sap.suite.ui.commons.KpiTile", multiple : true, singularName : "kpi"}, 
		"transactions" : {type : "sap.ui.core.Control", multiple : true, singularName : "transaction", deprecated: true}, 
		"actions" : {type : "sap.m.Button", multiple : true, singularName : "action", deprecated: true}, 
		"pages" : {type : "sap.ui.core.Control", multiple : true, singularName : "page"}, 
		"objectHeader" : {type : "sap.m.ObjectHeader", multiple : false, visibility : "hidden"}
	},
	events : {
		"backAction" : {}, 
		"transactionsButtonPress" : {allowPreventDefault : true}, 
		"actionsButtonPress" : {allowPreventDefault : true}, 
		"configurationButtonPress" : {}, 
		"navigate" : {allowPreventDefault : true}, 
		"afterNavigate" : {}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.UnifiedThingInspector with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.UnifiedThingInspector.extend
 * @function
 */

sap.suite.ui.commons.UnifiedThingInspector.M_EVENTS = {'backAction':'backAction','transactionsButtonPress':'transactionsButtonPress','actionsButtonPress':'actionsButtonPress','configurationButtonPress':'configurationButtonPress','navigate':'navigate','afterNavigate':'afterNavigate'};


/**
 * Getter for property <code>height</code>.
 * The height of the control.
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#setHeight
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * The title of the thing.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#setTitle
 * @function
 */


/**
 * Getter for property <code>name</code>.
 * The name of the thing.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>name</code>
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#getName
 * @function
 */

/**
 * Setter for property <code>name</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#setName
 * @function
 */


/**
 * Getter for property <code>description</code>.
 * The description of the thing.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>description</code>
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#getDescription
 * @function
 */

/**
 * Setter for property <code>description</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sDescription  new value for property <code>description</code>
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#setDescription
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * The icon to be displayed as a graphical element within the header. This can be an image or an icon from the icon font.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#setIcon
 * @function
 */


/**
 * Getter for property <code>transactionsVisible</code>.
 * If set to true, the Transaction button appears.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>transactionsVisible</code>
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#getTransactionsVisible
 * @function
 */

/**
 * Setter for property <code>transactionsVisible</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bTransactionsVisible  new value for property <code>transactionsVisible</code>
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#setTransactionsVisible
 * @function
 */


/**
 * Getter for property <code>actionsVisible</code>.
 * If set to true, the Actions button appears.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>actionsVisible</code>
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#getActionsVisible
 * @function
 */

/**
 * Setter for property <code>actionsVisible</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bActionsVisible  new value for property <code>actionsVisible</code>
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#setActionsVisible
 * @function
 */


/**
 * Getter for property <code>destroyPageOnBack</code>.
 * If set to true, destroys a page when the user chooses the Back button to leave this page.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>destroyPageOnBack</code>
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#getDestroyPageOnBack
 * @function
 */

/**
 * Setter for property <code>destroyPageOnBack</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bDestroyPageOnBack  new value for property <code>destroyPageOnBack</code>
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#setDestroyPageOnBack
 * @function
 */


/**
 * Getter for property <code>configurationVisible</code>.
 * If set to true, the Configuration button appears.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>configurationVisible</code>
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#getConfigurationVisible
 * @function
 */

/**
 * Setter for property <code>configurationVisible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bConfigurationVisible  new value for property <code>configurationVisible</code>
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#setConfigurationVisible
 * @function
 */


/**
 * Getter for aggregation <code>facets</code>.<br/>
 * The list of the sap.suite.ui.commons.FacetOverview objects.
 * 
 * @return {sap.suite.ui.commons.FacetOverview[]}
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#getFacets
 * @function
 */


/**
 * Inserts a facet into the aggregation named <code>facets</code>.
 *
 * @param {sap.suite.ui.commons.FacetOverview}
 *          oFacet the facet to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the facet should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the facet is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the facet is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#insertFacet
 * @function
 */

/**
 * Adds some facet <code>oFacet</code> 
 * to the aggregation named <code>facets</code>.
 *
 * @param {sap.suite.ui.commons.FacetOverview}
 *            oFacet the facet to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#addFacet
 * @function
 */

/**
 * Removes an facet from the aggregation named <code>facets</code>.
 *
 * @param {int | string | sap.suite.ui.commons.FacetOverview} vFacet the facet to remove or its index or id
 * @return {sap.suite.ui.commons.FacetOverview} the removed facet or null
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#removeFacet
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>facets</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.FacetOverview[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#removeAllFacets
 * @function
 */

/**
 * Checks for the provided <code>sap.suite.ui.commons.FacetOverview</code> in the aggregation named <code>facets</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.suite.ui.commons.FacetOverview}
 *            oFacet the facet whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#indexOfFacet
 * @function
 */
	

/**
 * Destroys all the facets in the aggregation 
 * named <code>facets</code>.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#destroyFacets
 * @function
 */


/**
 * Getter for aggregation <code>facetContent</code>.<br/>
 * The content that appears on the detail page of the UnifiedThingInspector.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#getFacetContent
 * @function
 */


/**
 * Inserts a facetContent into the aggregation named <code>facetContent</code>.
 *
 * @param {sap.ui.core.Control}
 *          oFacetContent the facetContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the facetContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the facetContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the facetContent is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#insertFacetContent
 * @function
 */

/**
 * Adds some facetContent <code>oFacetContent</code> 
 * to the aggregation named <code>facetContent</code>.
 *
 * @param {sap.ui.core.Control}
 *            oFacetContent the facetContent to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#addFacetContent
 * @function
 */

/**
 * Removes an facetContent from the aggregation named <code>facetContent</code>.
 *
 * @param {int | string | sap.ui.core.Control} vFacetContent the facetContent to remove or its index or id
 * @return {sap.ui.core.Control} the removed facetContent or null
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#removeFacetContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>facetContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#removeAllFacetContent
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>facetContent</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oFacetContent the facetContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#indexOfFacetContent
 * @function
 */
	

/**
 * Destroys all the facetContent in the aggregation 
 * named <code>facetContent</code>.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#destroyFacetContent
 * @function
 */


/**
 * Getter for aggregation <code>kpis</code>.<br/>
 * A set of the KPI tiles to be shown in the header. Currently only 3 tiles from the list are displayed on the desktop and tablet. On the phone, all tiles are displayed in a swipeable container.
 * 
 * @return {sap.suite.ui.commons.KpiTile[]}
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#getKpis
 * @function
 */


/**
 * Inserts a kpi into the aggregation named <code>kpis</code>.
 *
 * @param {sap.suite.ui.commons.KpiTile}
 *          oKpi the kpi to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the kpi should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the kpi is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the kpi is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#insertKpi
 * @function
 */

/**
 * Adds some kpi <code>oKpi</code> 
 * to the aggregation named <code>kpis</code>.
 *
 * @param {sap.suite.ui.commons.KpiTile}
 *            oKpi the kpi to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#addKpi
 * @function
 */

/**
 * Removes an kpi from the aggregation named <code>kpis</code>.
 *
 * @param {int | string | sap.suite.ui.commons.KpiTile} vKpi the kpi to remove or its index or id
 * @return {sap.suite.ui.commons.KpiTile} the removed kpi or null
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#removeKpi
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>kpis</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.KpiTile[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#removeAllKpis
 * @function
 */

/**
 * Checks for the provided <code>sap.suite.ui.commons.KpiTile</code> in the aggregation named <code>kpis</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.suite.ui.commons.KpiTile}
 *            oKpi the kpi whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#indexOfKpi
 * @function
 */
	

/**
 * Destroys all the kpis in the aggregation 
 * named <code>kpis</code>.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#destroyKpis
 * @function
 */


/**
 * Getter for aggregation <code>transactions</code>.<br/>
 * Menu items for transaction popup.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @deprecated Since version 1.18.2. 
 * Deprecated due to the incorrect work with data binding. Open the popup in the transactionsButtonPress event handler instead.
 * @name sap.suite.ui.commons.UnifiedThingInspector#getTransactions
 * @function
 */


/**
 * Inserts a transaction into the aggregation named <code>transactions</code>.
 *
 * @param {sap.ui.core.Control}
 *          oTransaction the transaction to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the transaction should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the transaction is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the transaction is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.18.2. 
 * Deprecated due to the incorrect work with data binding. Open the popup in the transactionsButtonPress event handler instead.
 * @name sap.suite.ui.commons.UnifiedThingInspector#insertTransaction
 * @function
 */

/**
 * Adds some transaction <code>oTransaction</code> 
 * to the aggregation named <code>transactions</code>.
 *
 * @param {sap.ui.core.Control}
 *            oTransaction the transaction to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.18.2. 
 * Deprecated due to the incorrect work with data binding. Open the popup in the transactionsButtonPress event handler instead.
 * @name sap.suite.ui.commons.UnifiedThingInspector#addTransaction
 * @function
 */

/**
 * Removes an transaction from the aggregation named <code>transactions</code>.
 *
 * @param {int | string | sap.ui.core.Control} vTransaction the transaction to remove or its index or id
 * @return {sap.ui.core.Control} the removed transaction or null
 * @public
 * @deprecated Since version 1.18.2. 
 * Deprecated due to the incorrect work with data binding. Open the popup in the transactionsButtonPress event handler instead.
 * @name sap.suite.ui.commons.UnifiedThingInspector#removeTransaction
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>transactions</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @deprecated Since version 1.18.2. 
 * Deprecated due to the incorrect work with data binding. Open the popup in the transactionsButtonPress event handler instead.
 * @name sap.suite.ui.commons.UnifiedThingInspector#removeAllTransactions
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>transactions</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oTransaction the transaction whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @deprecated Since version 1.18.2. 
 * Deprecated due to the incorrect work with data binding. Open the popup in the transactionsButtonPress event handler instead.
 * @name sap.suite.ui.commons.UnifiedThingInspector#indexOfTransaction
 * @function
 */
	

/**
 * Destroys all the transactions in the aggregation 
 * named <code>transactions</code>.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.18.2. 
 * Deprecated due to the incorrect work with data binding. Open the popup in the transactionsButtonPress event handler instead.
 * @name sap.suite.ui.commons.UnifiedThingInspector#destroyTransactions
 * @function
 */


/**
 * Getter for aggregation <code>actions</code>.<br/>
 * Action sheet controls.
 * 
 * @return {sap.m.Button[]}
 * @public
 * @deprecated Since version 1.18.2. 
 * Deprecated due to the incorrect work with data binding. Open the popup in the actionsButtonPress event handler instead.
 * @name sap.suite.ui.commons.UnifiedThingInspector#getActions
 * @function
 */


/**
 * Inserts a action into the aggregation named <code>actions</code>.
 *
 * @param {sap.m.Button}
 *          oAction the action to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the action should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the action is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.18.2. 
 * Deprecated due to the incorrect work with data binding. Open the popup in the actionsButtonPress event handler instead.
 * @name sap.suite.ui.commons.UnifiedThingInspector#insertAction
 * @function
 */

/**
 * Adds some action <code>oAction</code> 
 * to the aggregation named <code>actions</code>.
 *
 * @param {sap.m.Button}
 *            oAction the action to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.18.2. 
 * Deprecated due to the incorrect work with data binding. Open the popup in the actionsButtonPress event handler instead.
 * @name sap.suite.ui.commons.UnifiedThingInspector#addAction
 * @function
 */

/**
 * Removes an action from the aggregation named <code>actions</code>.
 *
 * @param {int | string | sap.m.Button} vAction the action to remove or its index or id
 * @return {sap.m.Button} the removed action or null
 * @public
 * @deprecated Since version 1.18.2. 
 * Deprecated due to the incorrect work with data binding. Open the popup in the actionsButtonPress event handler instead.
 * @name sap.suite.ui.commons.UnifiedThingInspector#removeAction
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>actions</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.Button[]} an array of the removed elements (might be empty)
 * @public
 * @deprecated Since version 1.18.2. 
 * Deprecated due to the incorrect work with data binding. Open the popup in the actionsButtonPress event handler instead.
 * @name sap.suite.ui.commons.UnifiedThingInspector#removeAllActions
 * @function
 */

/**
 * Checks for the provided <code>sap.m.Button</code> in the aggregation named <code>actions</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.m.Button}
 *            oAction the action whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @deprecated Since version 1.18.2. 
 * Deprecated due to the incorrect work with data binding. Open the popup in the actionsButtonPress event handler instead.
 * @name sap.suite.ui.commons.UnifiedThingInspector#indexOfAction
 * @function
 */
	

/**
 * Destroys all the actions in the aggregation 
 * named <code>actions</code>.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.18.2. 
 * Deprecated due to the incorrect work with data binding. Open the popup in the actionsButtonPress event handler instead.
 * @name sap.suite.ui.commons.UnifiedThingInspector#destroyActions
 * @function
 */


/**
 * Getter for aggregation <code>pages</code>.<br/>
 * Contains pages except for Master and Detail.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#getPages
 * @function
 */


/**
 * Inserts a page into the aggregation named <code>pages</code>.
 *
 * @param {sap.ui.core.Control}
 *          oPage the page to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the page should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the page is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the page is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#insertPage
 * @function
 */

/**
 * Adds some page <code>oPage</code> 
 * to the aggregation named <code>pages</code>.
 *
 * @param {sap.ui.core.Control}
 *            oPage the page to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#addPage
 * @function
 */

/**
 * Removes an page from the aggregation named <code>pages</code>.
 *
 * @param {int | string | sap.ui.core.Control} vPage the page to remove or its index or id
 * @return {sap.ui.core.Control} the removed page or null
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#removePage
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>pages</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#removeAllPages
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>pages</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oPage the page whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#indexOfPage
 * @function
 */
	

/**
 * Destroys all the pages in the aggregation 
 * named <code>pages</code>.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#destroyPages
 * @function
 */


/**
 * The event is fired when the user chooses the Back button.
 *
 * @name sap.suite.ui.commons.UnifiedThingInspector#backAction
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'backAction' event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/> itself. 
 *  
 * The event is fired when the user chooses the Back button.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#attachBackAction
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'backAction' event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#detachBackAction
 * @function
 */

/**
 * Fire event backAction to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.UnifiedThingInspector#fireBackAction
 * @function
 */


/**
 * The event is fired when the user chooses the Transactions button.
 *
 * @name sap.suite.ui.commons.UnifiedThingInspector#transactionsButtonPress
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.caller The object that initiated the event.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'transactionsButtonPress' event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/> itself. 
 *  
 * The event is fired when the user chooses the Transactions button.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#attachTransactionsButtonPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'transactionsButtonPress' event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#detachTransactionsButtonPress
 * @function
 */

/**
 * Fire event transactionsButtonPress to attached listeners.
 *
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'caller' of type <code>object</code> The object that initiated the event.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * @name sap.suite.ui.commons.UnifiedThingInspector#fireTransactionsButtonPress
 * @function
 */


/**
 * The event is fired when the user chooses the Actions button.
 *
 * @name sap.suite.ui.commons.UnifiedThingInspector#actionsButtonPress
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.caller The object that initiated the event.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'actionsButtonPress' event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/> itself. 
 *  
 * The event is fired when the user chooses the Actions button.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#attachActionsButtonPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'actionsButtonPress' event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#detachActionsButtonPress
 * @function
 */

/**
 * Fire event actionsButtonPress to attached listeners.
 *
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'caller' of type <code>object</code> The object that initiated the event.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * @name sap.suite.ui.commons.UnifiedThingInspector#fireActionsButtonPress
 * @function
 */


/**
 * The event is fired when the user chooses the Configuration button.
 *
 * @name sap.suite.ui.commons.UnifiedThingInspector#configurationButtonPress
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.caller The object that initiated the event.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'configurationButtonPress' event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/> itself. 
 *  
 * The event is fired when the user chooses the Configuration button.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#attachConfigurationButtonPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'configurationButtonPress' event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#detachConfigurationButtonPress
 * @function
 */

/**
 * Fire event configurationButtonPress to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'caller' of type <code>object</code> The object that initiated the event.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.UnifiedThingInspector#fireConfigurationButtonPress
 * @function
 */


/**
 * The event is fired when navigation between two pages has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation.
 * This event is propogated from the inner NavContainer. The event can also return internal Master and Detail pages.
 *
 * @name sap.suite.ui.commons.UnifiedThingInspector#navigate
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page that was shown before the current navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page that was shown before the current navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page that will be shown after the current navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page that will be shown after the current navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Whether the "to" page (more precisely: a control with the ID of the page that is currently navigated to) has not been shown/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Whether this is a forward navigation, triggered by "to()".
 * @param {boolean} oControlEvent.getParameters.isBack Whether this is a back navigation, triggered by "back()".
 * @param {boolean} oControlEvent.getParameters.isBackToTop Whether this is a navigation to the root page, triggered by "backToTop()".
 * @param {boolean} oControlEvent.getParameters.isBackToPage Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {string} oControlEvent.getParameters.direction How the navigation was triggered, possible values are: "to", "back", and "backToTop".
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'navigate' event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/> itself. 
 *  
 * The event is fired when navigation between two pages has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation.
 * This event is propogated from the inner NavContainer. The event can also return internal Master and Detail pages.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#attachNavigate
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'navigate' event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#detachNavigate
 * @function
 */

/**
 * Fire event navigate to attached listeners.
 *
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'from' of type <code>sap.ui.core.Control</code> The page that was shown before the current navigation.</li>
 * <li>'fromId' of type <code>string</code> The ID of the page that was shown before the current navigation.</li>
 * <li>'to' of type <code>sap.ui.core.Control</code> The page that will be shown after the current navigation.</li>
 * <li>'toId' of type <code>string</code> The ID of the page that will be shown after the current navigation.</li>
 * <li>'firstTime' of type <code>boolean</code> Whether the "to" page (more precisely: a control with the ID of the page that is currently navigated to) has not been shown/navigated to before.</li>
 * <li>'isTo' of type <code>boolean</code> Whether this is a forward navigation, triggered by "to()".</li>
 * <li>'isBack' of type <code>boolean</code> Whether this is a back navigation, triggered by "back()".</li>
 * <li>'isBackToTop' of type <code>boolean</code> Whether this is a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'isBackToPage' of type <code>boolean</code> Whether this was a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'direction' of type <code>string</code> How the navigation was triggered, possible values are: "to", "back", and "backToTop".</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * @name sap.suite.ui.commons.UnifiedThingInspector#fireNavigate
 * @function
 */


/**
 * The event is fired when navigation between two pages has completed. In case of animated transitions this event is fired with some delay after the "navigate" event.
 * This event is propogated from the inner NavContainer. The event can also return internal Master and Detail pages.
 *
 * @name sap.suite.ui.commons.UnifiedThingInspector#afterNavigate
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page that had been shown before navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page that had been shown before navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page that is now shown after navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page that is now shown after navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Whether the "to" page (more precisely: a control with the ID of the page that has been navigated to) had not been shown/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Whether was a forward navigation, triggered by "to()".
 * @param {boolean} oControlEvent.getParameters.isBack Whether this was a back navigation, triggered by "back()".
 * @param {boolean} oControlEvent.getParameters.isBackToTop Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {boolean} oControlEvent.getParameters.isBackToPage Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {string} oControlEvent.getParameters.direction How the navigation was triggered, possible values are: "to", "back", and "backToTop".
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'afterNavigate' event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/> itself. 
 *  
 * The event is fired when navigation between two pages has completed. In case of animated transitions this event is fired with some delay after the "navigate" event.
 * This event is propogated from the inner NavContainer. The event can also return internal Master and Detail pages.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#attachAfterNavigate
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'afterNavigate' event of this <code>sap.suite.ui.commons.UnifiedThingInspector</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingInspector#detachAfterNavigate
 * @function
 */

/**
 * Fire event afterNavigate to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'from' of type <code>sap.ui.core.Control</code> The page that had been shown before navigation.</li>
 * <li>'fromId' of type <code>string</code> The ID of the page that had been shown before navigation.</li>
 * <li>'to' of type <code>sap.ui.core.Control</code> The page that is now shown after navigation.</li>
 * <li>'toId' of type <code>string</code> The ID of the page that is now shown after navigation.</li>
 * <li>'firstTime' of type <code>boolean</code> Whether the "to" page (more precisely: a control with the ID of the page that has been navigated to) had not been shown/navigated to before.</li>
 * <li>'isTo' of type <code>boolean</code> Whether was a forward navigation, triggered by "to()".</li>
 * <li>'isBack' of type <code>boolean</code> Whether this was a back navigation, triggered by "back()".</li>
 * <li>'isBackToTop' of type <code>boolean</code> Whether this was a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'isBackToPage' of type <code>boolean</code> Whether this was a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'direction' of type <code>string</code> How the navigation was triggered, possible values are: "to", "back", and "backToTop".</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.UnifiedThingInspector} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.UnifiedThingInspector#fireAfterNavigate
 * @function
 */


/**
 * Returns a currently selected facet.
 *
 * @name sap.suite.ui.commons.UnifiedThingInspector#getSelectedFacet
 * @function
 * @type sap.suite.ui.commons.FacetOverview
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


/**
 * Navigates to the Detail page.
 *
 * @name sap.suite.ui.commons.UnifiedThingInspector#navigateToDetailWithContent
 * @function
 * @param {object} oAFacetData
 *         Contains content for the detail page to which the control must navigate.
 * @type sap.suite.ui.commons.UnifiedThingInspector
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


/**
 * The control that shows the Detail page that is already set. This method can be used instead of navigateToDetailWithContent when the content is already set by addFacetContent.
 *
 * @name sap.suite.ui.commons.UnifiedThingInspector#navigateToDetail
 * @function
 * @type sap.suite.ui.commons.UnifiedThingInspector
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


/**
 * The method that adds any sap.m.Page to the aggregated NavContainer.
 *
 * @name sap.suite.ui.commons.UnifiedThingInspector#navigateToPage
 * @function
 * @param {sap.m.Page} oOPage
 *         The sap.m.Page instance that is added to NavContainer of UnifiedThingInspector.
 * @param {boolean} bAddDefaultFooter
 *         If set to true, the default page footer is added from UnifiedThingInspector.
 * @type sap.suite.ui.commons.UnifiedThingInspector
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


/**
 * The method that navigates to sap.m.Page.
 *
 * @name sap.suite.ui.commons.UnifiedThingInspector#navigateToPageId
 * @function
 * @param {string} sSId
 *         The ID of sap.m.Page instance where the user navigates to.
 * @type sap.suite.ui.commons.UnifiedThingInspector
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */

// Start of sap/suite/ui/commons/UnifiedThingInspector.js
jQuery.sap.require("sap.m.NavContainer");
jQuery.sap.require("sap.ui.layout.Grid");
jQuery.sap.require("sap.ui.core.IconPool");

sap.suite.ui.commons.UnifiedThingInspector.prototype.init = function(){
	this._altKey = false; // flag for MAC - it shows whether the Alt key is pressed
    var that = this;
    this._rb = sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons");
    /*this boolean is used to determine if animation of transition to detail page has been finished.
    if true - animation is still happening and control does not allow to navigate to another detail page (in navigateToDetail()).
    */
    this._bDetailPageIsTransitioning = false;
    
    this._oNavContainer = new sap.m.NavContainer(this.getId() + "-nav-container", {
        navigate: function (oEvent) {
            that._bDetailPageIsTransitioning = true;
            that.fireNavigate(oEvent);
        },
        afterNavigate: function (oEvent) {
            that._bDetailPageIsTransitioning = false;
            
            if (that.getDestroyPageOnBack()) {
	            var oPage = oEvent.getParameter("from");
	            var iIndex = that._oNavContainer.indexOfPage(oPage);
	            
	            if (iIndex > 1 && oEvent.getParameter("isBack")) {
	            	oPage.destroy(true);
	            }
            }
            
            that.fireAfterNavigate(oEvent);
        }
    });
    this.setAggregation("navContainer", this._oNavContainer);

    this._oActionSheet = new sap.m.ActionSheet(this.getId() + "-action-sheet", {
        showCancelButton: true,
        placement: sap.m.PlacementType.Top
    });

    this._oTransactionSheet = new sap.suite.ui.commons.LinkActionSheet(this.getId() + "-transaction-sheet", {
        showCancelButton: true,
        placement: sap.m.PlacementType.Top,
        itemPress: function(oEvent){
        	var oItem = oEvent.getParameter("item");
        	if (oItem.getMetadata().getName() == "sap.m.Link" && oItem._bEnterWasPressed) {
        		that._bDontOpenTransactions = true;
        	}
        }
    });

    this._oKpiScrollCont = new sap.m.ScrollContainer(this.getId() + "-kpi-scroll-container", {
        width : "100%",
        horizontal : this.isPhone()
    });
    
    this._oKpiScrollCont.addStyleClass("sapSuiteUtiKpiBox");

    this._oFacetsGrid = new sap.ui.layout.Grid(this.getId() + "-facets-grid", {
        defaultSpan: "L6 M12 S12",
        hSpacing: 1,
        vSpacing: 1,
        width: "auto"
    });
    this._oFacetsGrid.addStyleClass("sapSuiteUtiFacetGrid");
    this._oFacetsGrid.addDelegate({
		onAfterRendering: function(oEvent) {
			oEvent.srcControl.$().attr("role", "list");
		}
    });
    
    this._oHeader = this._createHeaderObject(this.getId() + "-header");
    this._oHeader.getObjectHeader()._titleText.setMaxLines(2);

    this._oHeaderGrid = new sap.ui.layout.Grid(this.getId() + "-header-grid", {
        hSpacing: 0,
        vSpacing: 0,
        content: [
            this._oHeader,
            this._oKpiScrollCont
        ]
    });

    this._oMasterPage = new sap.m.Page(this.getId() + "-master-page", {
        content: [this._oHeaderGrid, this._oFacetsGrid],
        showNavButton: true,
        footer: new sap.m.Bar(this.getId() + "-master-footer", {
            contentRight: [
                new sap.m.Button(this.getId() + "-master-action-button", {
                    icon : "sap-icon://action",
                    tooltip : that._rb.getText("UNIFIEDTHINGINSPECTOR_FOOTER_BUTTON_ACTIONS"),
                    press : function () {
                        var object = {};
                        object.caller = this;
                        if (that.fireActionsButtonPress(object)) {
	                        if (that._oActionSheet.getButtons().length) {
	                        	that._oActionSheet.openBy(this);
	                        } else {
	                        	jQuery.sap.log.info("The are no actions for displaying");
	                        }
                        }
                    }
                })
            ]
        }),
        navButtonPress: function () {
            that.fireBackAction();
        }
    });

    this._oMasterPage.getFooter().insertContentRight(
        new sap.m.Button(this.getId() + "-master-transaction-button", {
            text: that._rb.getText("UNIFIEDTHINGINSPECTOR_FOOTER_BUTTON_OPENWITH") + "...",
            tooltip : that._rb.getText("UNIFIEDTHINGINSPECTOR_FOOTER_BUTTON_TRANSACTIONS_TOOLTIP"),
            press : function () {
            	if (!that._bDontOpenTransactions) {
                	var object = {};
                	object.caller = this;
                	if (that.fireTransactionsButtonPress(object)) {
                		if (that._oTransactionSheet.getItems().length) {
                			that._oTransactionSheet.openBy(this);
                		} else {
                			jQuery.sap.log.info("The are no transactions for displaying");
                		}
                	}
            	} else {
            		that._bDontOpenTransactions = false;
            	}

            }
        }),
        0
    );

    this._oDetailPage = new sap.m.Page(this.getId() + "-detail-page", {
        showNavButton: true,
        footer: new sap.m.Bar(this.getId() + "-detail-footer", {
            contentRight: [
                new sap.m.Button(this.getId() + "-detail-action-button", {
                    icon : "sap-icon://action",
                    tooltip : that._rb.getText("UNIFIEDTHINGINSPECTOR_FOOTER_BUTTON_ACTIONS"),
                    press : function () {
                        var object = {};
                        object.caller = this;
                        if (that.fireActionsButtonPress(object)) {
	                        if (that._oActionSheet.getButtons().length) {
	                        	that._oActionSheet.openBy(this);
	                        } else {
	                        	jQuery.sap.log.info("The are no actions for displaying");
	                        }
                        }
                    }
                })
            ]
        }),
        navButtonPress: function () {
            that._navigateToMaster();
        }
    });

    this._oDetailPage.getFooter().insertContentRight(
        new sap.m.Button(this.getId() + "-detail-transaction-button", {
            text: that._rb.getText("UNIFIEDTHINGINSPECTOR_FOOTER_BUTTON_OPENWITH") + "...",
            tooltip : that._rb.getText("UNIFIEDTHINGINSPECTOR_FOOTER_BUTTON_TRANSACTIONS_TOOLTIP"),
            press : function () {
                    var object = {};
                    object.caller = this;
                	if (that.fireTransactionsButtonPress(object)) {
                		if (that._oTransactionSheet.getItems().length) {
                			that._oTransactionSheet.openBy(this);
                		} else {
                			jQuery.sap.log.info("The are no transactions for displaying");
                		}
                	}
            }
        }),
        0
    );

    this._oNavContainer.addPage(this._oMasterPage);
    this._oNavContainer.addPage(this._oDetailPage);
    
    if(!jQuery.device.is.desktop) {
        sap.ui.Device.orientation.attachHandler(function (oE) {
	        that._updateHeaderLayoutData(oE);
	        that._adjustFacetLayout();
        });
    }

    this.setModel = function (oModel, sName){
        sap.suite.ui.commons.UnifiedThingInspector.prototype.setModel.apply(this, arguments);
        this._oActionSheet.setModel(oModel, sName);
        this._oTransactionSheet.setModel(oModel, sName);
        return this;
    };
    
    this._bindedAdjustFacetLayout = this._adjustFacetLayout.bind(this);
  
	this._oDelegate = {
		onclick: function(oEvent) {
			that.$().find(".sapSuiteFov").removeAttr("tabindex");
			var oFo = jQuery(oEvent.currentTarget);
			oFo.attr("tabindex", 0);
			jQuery.sap.focus(oFo);
		},
		onAfterRendering: function(oEvent) {
			that._adjustFacetLayout();
			if (that._sCurrentFoId == oEvent.srcControl.getId()) {
				oEvent.srcControl.$().attr("tabindex", 0);
			}
		},
		onkeydown: function(oEvent) {
			var oFo = oEvent.srcControl.$();
			
			var fnMove = function(oNewFo) {
				if (oNewFo.length) {
					oNewFo.attr("tabindex", 0);
					jQuery.sap.focus(oNewFo.get(0));
					oFo.removeAttr("tabindex");
					that._sCurrentFoId = oNewFo.attr("id");
				}
			};
			
			var fnMoveArr = function(oSite) {
				var oNewFo = that.$().find((oSite.row != undefined ? "[data-row=" + oSite.row + "]" : "")
					+ (oSite.col != undefined ? "[data-col=" + oSite.col + "]" : "")
					+ (oSite.f != undefined ? "[data-f=" + oSite.f + "]" : ""));
				fnMove(oNewFo);
			};
			
			var sRow = oFo.attr("data-row");
			var sCol = oFo.attr("data-col");
			var sF = oFo.attr("data-f");
			
			var bRtl = sap.ui.getCore().getConfiguration().getRTL();
			var iArrowLeft = bRtl ? jQuery.sap.KeyCodes.ARROW_RIGHT : jQuery.sap.KeyCodes.ARROW_LEFT;
			var iArrowRight = bRtl ? jQuery.sap.KeyCodes.ARROW_LEFT : jQuery.sap.KeyCodes.ARROW_RIGHT;
			
			switch(oEvent.which) {
				case jQuery.sap.KeyCodes.ARROW_UP:
					fnMoveArr({row: parseInt(sRow) - 1, col: sCol});
					oEvent.preventDefault();
					break;
				case jQuery.sap.KeyCodes.ARROW_DOWN:
					fnMoveArr({row: parseInt(sRow) + 1, col: sCol});
					oEvent.preventDefault();
					break;
				case iArrowLeft:
					if (iArrowRight == that._prevKey && !oFo.is(that._prevFo)) {
						fnMove(that._prevFo);
					} else {
						fnMoveArr({col: parseInt(sCol) - 1, f: sF});
					}
					oEvent.preventDefault();
					break;
				case iArrowRight:
					if (iArrowLeft == that._prevKey && !oFo.is(that._prevFo)) {
						fnMove(that._prevFo);
					} else {
						fnMoveArr({col: parseInt(sCol) + 1, f: sF});
					}
					oEvent.preventDefault();
					break;
				case jQuery.sap.KeyCodes.HOME:
					fnMove(that.$().find("[data-home]"));
					oEvent.preventDefault();
					break;
				case jQuery.sap.KeyCodes.END:
					fnMove(that.$().find("[data-end]"));
					oEvent.preventDefault();
			}
			
			that._prevKey = oEvent.which;
			that._prevFo = oFo;
		}
	};
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.exit = function () {
    var that = this;
    this._oActionSheet.destroy();
    this._oTransactionSheet.destroy();

    sap.ui.Device.orientation.detachHandler(function () {
        that._updateHeaderLayoutData();
    });
    
    sap.ui.core.ResizeHandler.deregister(this._sTitleResizeHandlerId);
};

sap.suite.ui.commons.UnifiedThingInspector.prototype._updateHeaderLayoutData = function (oE) {
    var sContainerWidth = "";
    var oScrollContainer = jQuery.sap.byId(this.getId() + "-kpi-scroll-container-scroll");
    var sSCClass = this.getScrollClass();
    
    if (jQuery.device.is.tablet && !oE.landscape) {
       sContainerWidth = "100%";
       oScrollContainer.addClass(sSCClass);
    } else {
    	oScrollContainer.removeClass(sSCClass);
    }
    
    oScrollContainer.css("width", sContainerWidth);
};

sap.suite.ui.commons.UnifiedThingInspector.prototype._adjustFacetLayout = function() {	
	var iFacetsLength = this.getFacets().length;
    if (iFacetsLength > 0) {
    	this.getFacets()[0].$().attr("data-home", true);
    	this.getFacets()[iFacetsLength - 1].$().attr("data-end", true);
    }
	
	if (this.$().outerWidth(true) >= 1024 || this._oFacetsGrid.$().hasClass("sapUiRespGridMedia-Std-Desktop")) {
		this._adjustTwoColumnFacetLayout();
	} else {
		this._adjustOneColumnFacetLayout();
	}
};

sap.suite.ui.commons.UnifiedThingInspector.prototype._adjustOneColumnFacetLayout = function() {
	var iFacetsLength = this.getFacets().length;

	for (var i = 0; i < iFacetsLength; i++) {
		this.getFacets()[i].$().attr("data-row", i).attr("data-col", 0)
		.parent().css("margin-top", "").removeClass("sapSuiteUtiFacetLeft");
	}
};

sap.suite.ui.commons.UnifiedThingInspector.prototype._adjustTwoColumnFacetLayout = function() {
	this._adjustOneColumnFacetLayout();
    
    //Correct layout to avoid issues with gaps between cards
    var aFacets = this.getFacets();
    var fFacetBalance = 0;
    
    var iLRow = 0, iRRow = 0, iF = -1;
    
    var iFacetsLength = aFacets.length;
    
    for (var i = 0; i < iFacetsLength; i++) {
    	var fHeight = parseFloat(aFacets[i].$().css("height"));
    	
        if (fFacetBalance > 0) {
        	fFacetBalance -= fHeight + parseFloat(aFacets[i].$().parent().css("margin-bottom"));
        	aFacets[i].$().attr("data-row", iRRow).attr("data-col", 1).attr("data-f", iF);
        	iRRow += 1;
        } else {
        	if (fFacetBalance < 0) {
        		aFacets[i].$().parent().css("margin-top", fFacetBalance + "px");
        	} else {
        		aFacets[i].$().parent().addClass("sapSuiteUtiFacetLeft");
        	}
        	
        	fFacetBalance += fHeight + parseFloat(aFacets[i].$().parent().css("margin-bottom"));
        	iF += 1;
        	aFacets[i].$().attr("data-row", iLRow).attr("data-col", 0).attr("data-f", iF);
        	iLRow += 1;
        }
    }
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.onAfterRendering = function() {
	if(this._sTitleResizeHandlerId) {
		sap.ui.core.ResizeHandler.deregister(this._sTitleResizeHandlerId);
	}
	
    var oHeader = jQuery.sap.domById(this.getId() + "-header");
    if (oHeader) {
    	this._sTitleResizeHandlerId = sap.ui.core.ResizeHandler.register(oHeader,  jQuery.proxy(this._handleResize, this));
    	this._handleResize();
    }
    
    if(jQuery.device.is.tablet && jQuery.device.is.portrait) {
        jQuery.sap.byId(this.getId() + "-kpi-scroll-container-scroll").css("width", "100%").addClass(this.getScrollClass());
    }
    
    var iFacetsLength = this.getFacets().length;
    for (var i = 0; i < iFacetsLength; i++) {
    	this.getFacets()[i].addDelegate(this._oDelegate);
    }
    
    var aCurrentFo = jQuery.sap.byId(this._sCurrentFoId);
    if (aCurrentFo.length == 0) {
    	aCurrentFo = this.$().find("[data-home]");
    	this._sCurrentFoId = aCurrentFo.attr("id");
    }
    aCurrentFo.attr("tabindex", 0);
};

sap.suite.ui.commons.UnifiedThingInspector.prototype._handleResize = function() {
	this._adjustFacetLayout();
};

sap.suite.ui.commons.UnifiedThingInspector.prototype._getFontSize = function(iCont, iWidth) {
	var nSize = iWidth/(iCont*0.5);
	if(nSize > 28) {
		return 28;
	} else if(nSize < 20) {
		return 20;
	} else {
		return nSize;	
	}
	
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.onBeforeRendering = function() {
    var that=this;
    if (this.getConfigurationVisible()) {
        if (this._oMasterPage.getFooter().getContentLeft().length == 0) {
            this._oMasterPage.getFooter().addContentLeft(new sap.m.Button(this.getId() + "-master-settings-button", {
                icon : "sap-icon://action-settings",
                tooltip : that._rb.getText("UNIFIEDTHINGINSPECTOR_FOOTER_BUTTON_SETTINGS_TOOLTIP"),
                press : function () {
                    var object = {};
                    object.caller = this;
                    that.fireConfigurationButtonPress(object);
                }
            }), true);
        }
        
        if (this._oDetailPage.getFooter().getContentLeft().length == 0) {
            this._oDetailPage.getFooter().addContentLeft(new sap.m.Button(this.getId() + "-detail-settings-button", {
                icon : "sap-icon://action-settings",
                tooltip : that._rb.getText("UNIFIEDTHINGINSPECTOR_FOOTER_BUTTON_SETTINGS_TOOLTIP"),
                press : function () {
                    var object = {};
                    object.caller = this;
                    that.fireConfigurationButtonPress(object);
                }
            }), true);
        }
    } else {
        this._oMasterPage.getFooter().removeAllContentLeft(true);
        this._oDetailPage.getFooter().removeAllContentLeft(true);
    }

    sap.ui.getCore().byId(this.getId() + "-master-action-button").setVisible(this.getActionsVisible());
    sap.ui.getCore().byId(this.getId() + "-detail-action-button").setVisible(this.getActionsVisible());

    sap.ui.getCore().byId(this.getId() + "-master-transaction-button").setVisible(this.getTransactionsVisible());
    sap.ui.getCore().byId(this.getId() + "-detail-transaction-button").setVisible(this.getTransactionsVisible());

    //If there are no KPIs - do not show scroll container at all.
    //This fixes issue when there are no KPIs but on phone we have two rows in header.
    this._oKpiScrollCont.setVisible(!!this.getKpis().length);
    
    //If there is less than 3 tiles - pass specific class flag
    if (this.getKpis().length < 3) {
        this._oKpiScrollCont.addStyleClass("sapSuiteUtiKpiLT3");
    }
    
    this._fitKpiTiles();
};

sap.suite.ui.commons.UnifiedThingInspector.prototype._fitKpiTiles = function() {
	var sHeaderSpan;
    var sKpiCntSpan;
    var iKpiLength = this.getKpis().length;

    switch (iKpiLength) {
        case 0:
            sHeaderSpan = "L12 M12 S12";
            sKpiCntSpan = "L12 M12 S12";
            break;
        case 1:
            sHeaderSpan = "L9 M12 S12";
            sKpiCntSpan = "L3 M12 S12";
            break;
        case 2:
            sHeaderSpan = "L7 M12 S12";
            sKpiCntSpan = "L5 M12 S12";
            break;
        default:
            sHeaderSpan = "L6 M12 S12";
            sKpiCntSpan = "L6 M12 S12";
    }

    this._oHeader.setLayoutData(new sap.ui.layout.GridData({span: sHeaderSpan}));
    this._oKpiScrollCont.setLayoutData(new sap.ui.layout.GridData({span: sKpiCntSpan}));
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.isPhone = function() {
    return jQuery.device.is.phone || jQuery.device.is.iphone;
};

// overridden properties setters
sap.suite.ui.commons.UnifiedThingInspector.prototype.setTitle = function(sTitle) {
    this.setProperty("title", sTitle, true);
    this._oMasterPage.setTitle(sTitle);
    this._oDetailPage.setTitle(sTitle);
    return this;
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.setName = function(sName) {
	this._oHeader.setName(sName);
    return this;
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.setDescription = function(sDescription) {
	this._oHeader.setDescription(sDescription);
    return this;
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.getName = function() {
	return this._oHeader.getName();
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.getDescription = function() {
	return this._oHeader.getDescription();
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.setIcon = function(sIcon) {
    this._oHeader.setIcon(sIcon);
    this.setProperty("icon", sIcon, true);
    return this;
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.getScrollClass = function() {
	var iKpiCount = this.getKpis().length;
	var sScrollClass = "";
	if (iKpiCount == 1) {
		sScrollClass = "sapSuiteUtiScOne";
	} else if (iKpiCount == 2) {
		sScrollClass = "sapSuiteUtiScTwo";
	} else if (iKpiCount > 2) {
		sScrollClass = "sapSuiteUtiScThree";
	}
	
	return sScrollClass;
};

sap.suite.ui.commons.UnifiedThingInspector.prototype._navigateToMaster = function() {
    this._oNavContainer.back();
};

/*Method should be called when user selects some facet. Developer should supply this method with content for detail page.
Method checks if there is any other already happening transition to detail page. E.g. user double clicked facet. If page is 
still transitioning - we cancel newly added navigation.
*/
sap.suite.ui.commons.UnifiedThingInspector.prototype.navigateToDetailWithContent = function(aFacetData) {
	
    if (!this._bDetailPageIsTransitioning) {
        this.removeAllFacetContent();
        if (jQuery.isArray(aFacetData)) {
            for (var i = 0; i < aFacetData.length; i++) {
                this.addFacetContent(aFacetData[i]);
            }
        } else {
            this.addFacetContent(aFacetData);
        }
        this._oNavContainer.to(this._oDetailPage.getId());
        this._oDetailPage.scrollTo(0);
    }
    return this;
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.navigateToDetail = function() {
    this._oNavContainer.to(this._oDetailPage.getId());
    return this;
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.navigateToPage = function(oPage, addDefaultFooter) {
    var that = this;
    oPage.attachNavButtonPress(function(oEvent){
            that._oNavContainer.back();     
    });
    
    if(addDefaultFooter == undefined || addDefaultFooter) {
            var oFooter = this._oMasterPage.getFooter().clone();
            oPage.setFooter(oFooter);               
    }

    this._oNavContainer.addPage(oPage);
    this._oNavContainer.to(oPage.getId());
    return this;
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.navigateToPageById = function(sId) {
    this._oNavContainer.to(sId);
    return this;
};

/***** Actions aggregation overridden methods *****/

sap.suite.ui.commons.UnifiedThingInspector.prototype.removeFacet = function(oFacet, bSuppressInvalidate) {
	oFacet.removeDelegate(this._oDelegate);
    return this.removeAggregation("facets", oFacet, bSuppressInvalidate);
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.removeAllFacets = function(bSuppressInvalidate) {
	for (var i = 0; i < this.getFacets().length; i++) {
		this.getFacets()[i].removeDelegate(this._oDelegate);
	}
	
    return this.removeAllAggregation("facets", bSuppressInvalidate);
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.getActions = function() {
    return this._oActionSheet.getButtons();
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.insertAction = function(oAction, iIndex) {
    this._oActionSheet.insertButton(oAction, iIndex);
    return this;
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.addAction = function(oAction) {
    this._oActionSheet.addButton(oAction);
    return this;
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.removeAction = function(vAction) {
    return this._oActionSheet.removeButton(vAction);
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.removeAllActions = function() {
    return this._oActionSheet.removeAllButtons();
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.indexOfAction = function(oAction) {
    return this._oActionSheet.indexOfButton(oAction);
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.destroyActions = function() {
    this._oActionSheet.destroyButtons();
    return this;
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.getTransactions = function() {
    return this._oTransactionSheet.getItems();
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.addTransaction = function(oTransaction) {
	this._oTransactionSheet.addItem(oTransaction);
	return this;
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.insertTransaction = function(oTransaction, iIndex) { 
	this._oTransactionSheet.insertItem(oTransaction, iIndex);
    return this;
}; 

sap.suite.ui.commons.UnifiedThingInspector.prototype.removeTransaction = function(oTransaction) { 
	return this._oTransactionSheet.removeItem(oTransaction);
}; 

sap.suite.ui.commons.UnifiedThingInspector.prototype.removeAllTransactions = function() { 
	return this._oTransactionSheet.removeAllItems();
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.indexOfTransaction = function(oTransaction) {
    return this._oTransactionSheet.indexOfItem(oTransaction);
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.destroyTransactions = function() {
    this._oTransactionSheet.destroyItems();
    return this;
};

/**************************************************************
 * AGGREGATION FORWARDING inspired by Split Container
 **************************************************************/

sap.suite.ui.commons.UnifiedThingInspector.prototype._callMethodInManagedObject = function(sFunctionName, sAggregationName){
    var args = Array.prototype.slice.call(arguments);
    if(sAggregationName === "facets"){
        args[1] = "content";
        return this._oFacetsGrid[sFunctionName].apply(this._oFacetsGrid, args.slice(1));
    }else if(sAggregationName === "kpis"){
        args[1] = "content";
        return this._oKpiScrollCont[sFunctionName].apply(this._oKpiScrollCont, args.slice(1));
    }else if(sAggregationName === "facetContent"){
        args[1] = "content";
        return this._oDetailPage[sFunctionName].apply(this._oDetailPage, args.slice(1));
    }else {
        return sap.ui.base.ManagedObject.prototype[sFunctionName].apply(this, args.slice(1));
    }
};


/**************************************************************
 * START - forward aggregation related methods to the inner aggregation
 **************************************************************/
sap.suite.ui.commons.UnifiedThingInspector.prototype.validateAggregation = function(sAggregationName, oObject, bMultiple){
    return this._callMethodInManagedObject("validateAggregation", sAggregationName, oObject, bMultiple);
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.setAggregation = function(sAggregationName, oObject, bSuppressInvalidate){
    this._callMethodInManagedObject("setAggregation", sAggregationName, oObject, bSuppressInvalidate);
    return this;
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.getAggregation = function(sAggregationName, oDefaultForCreation){
    return this._callMethodInManagedObject("getAggregation", sAggregationName, oDefaultForCreation);
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.indexOfAggregation = function(sAggregationName, oObject){
    return this._callMethodInManagedObject("indexOfAggregation", sAggregationName, oObject);
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.insertAggregation = function(sAggregationName, oObject, iIndex, bSuppressInvalidate){
    this._callMethodInManagedObject("insertAggregation", sAggregationName, oObject, iIndex, bSuppressInvalidate);
    return this;
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.addAggregation = function(sAggregationName, oObject, bSuppressInvalidate){
    this._callMethodInManagedObject("addAggregation", sAggregationName, oObject, bSuppressInvalidate);
    return this;
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.removeAggregation = function(sAggregationName, oObject, bSuppressInvalidate){
    return this._callMethodInManagedObject("removeAggregation", sAggregationName, oObject, bSuppressInvalidate);
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.removeAllAggregation = function(sAggregationName, bSuppressInvalidate){
    return this._callMethodInManagedObject("removeAllAggregation", sAggregationName, bSuppressInvalidate);
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.destroyAggregation = function(sAggregationName, bSuppressInvalidate){
    this._callMethodInManagedObject("destroyAggregation", sAggregationName, bSuppressInvalidate);
    return this;
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.getPages = function() {
    return this._oNavContainer.getPages().slice(2);
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.insertPage = function(oPage, iIndex, bSuppressInvalidate) {
    this._oNavContainer.insertPage(oPage, iIndex + 2, bSuppressInvalidate);
    return this;
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.addPage = function(oPage, bSuppressInvalidate) {
    this._oNavContainer.addPage(oPage, bSuppressInvalidate);
    return this;
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.removePage = function(oPage, bSuppressInvalidate) {
    return this._oNavContainer.removePage(oPage, bSuppressInvalidate);
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.removeAllPages = function(bSuppressInvalidate) {
	var aPages = this.getPages();
	
	for (var i = aPages.length - 1; i >= 0; i--) {
		this._oNavContainer.removePage(aPages[i], bSuppressInvalidate);
	}
    return aPages;
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.indexOfPage = function(oPage) {
	var i = this._oNavContainer.indexOfPage(oPage);
    return i > 1 ? i - 2 : -1;
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.destroyPages = function(bSuppressInvalidate) {
	var aPages = this.getPages();
	
	for (var i = aPages.length - 1; i >= 0; i--) {
		aPages[i].destroy(bSuppressInvalidate);
	}
    return this;
};


/**************************************************************
 * END - forward aggregation related methods to the inner aggregation
 **************************************************************/

sap.suite.ui.commons.UnifiedThingInspector.prototype._createHeaderObject = function(sId) {
//    var that = this;
    sap.ui.core.Control.extend("sap.suite.ui.commons.UnifiedThingInspector.Header", {
        metadata: {
            properties: {
                name: "string",
                description: "string",
                icon: "sap.ui.core.URI"
            },
            aggregations: {
            	"objectHeader" : {type : "sap.m.ObjectHeader", multiple : false}
            }
        },
        init : function() {
            this._oObjectHeader = new sap.m.ObjectHeader (this.getId() + "-object-header", { condensed: true });
            this.setAggregation("objectHeader", this._oObjectHeader);
        },
        setDescription : function(sDesc) {
        	this._oObjectHeader.removeAllAttributes();
        	this._oObjectHeader.addAttribute(new sap.m.ObjectAttribute({ text: sDesc }));
        },
        setName : function(sName) {
        	this._oObjectHeader.setTitle(sName);
        },
        getDescription : function() {
        	if(this._oObjectHeader.getAttributes().length == 1) {
        		return this._oObjectHeader.getAttributes()[0].getText();
        	} else {
        		return "";
        	}
        },
        getName : function() {
        	return this._oObjectHeader.getTitle();
        },
        setIcon: function(sIcon) {
            var bValueChanged = !jQuery.sap.equal(this.getIcon(), sIcon);

            if (bValueChanged) {
                if (this._oIcon) {
                    this._oIcon.destroy();
                    this._oIcon = undefined;
                }

                if (sIcon) {
                    this._oIcon = sap.ui.core.IconPool.createControlByURI( {
                        id: this.getId() + "-icon-image",
                        src: sIcon
                    }, sap.m.Image);

                    this._oIcon.addStyleClass("sapSuiteUtiHeaderIconImage");

                    if (this._oIcon instanceof sap.ui.core.Icon) {
                        this._oIcon.setSize("64px");
                    }
                }
            }

            return this.setProperty("icon", sIcon);
        },
        exit: function() {
            if (this._oIcon) {
                this._oIcon.destroy();
            }
        },
        renderer: function(oRm, oControl) {
            oRm.write("<div");
            oRm.writeControlData(oControl);
            oRm.addClass("sapSuiteUtiHeader");
            oRm.writeClasses();
            oRm.write(">");

            if (oControl._oIcon) {
                oRm.write("<div");
                oRm.writeAttribute("id", oControl.getId() + "-icon");
                oRm.addClass("sapSuiteUtiHeaderIcon");
                oRm.writeClasses();
                oRm.write(">");
                    oRm.renderControl(oControl._oIcon);
                oRm.write("</div>");
            }
                oRm.write("<div");
                oRm.writeAttribute("id", oControl.getId() + "-content");
                if (oControl._oIcon) {
                    oRm.addClass("sapSuiteUtiHeaderContentWithIcon");
                } else {
                    oRm.addClass("sapSuiteUtiHeaderContent");
                }
                oRm.writeClasses();
                oRm.write(">");
                oRm.renderControl(oControl.getObjectHeader());
                oRm.write("</div>");
            oRm.write("</div>");
        }
    });

    return new sap.suite.ui.commons.UnifiedThingInspector.Header(sId);
};

sap.suite.ui.commons.UnifiedThingInspector.prototype._isMasterPage = function() {
	return -1 != this._oNavContainer.getCurrentPage().getId().indexOf("-master-page");
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.onkeydown = function(oEvent) {
	switch (oEvent.keyCode) {
		case jQuery.sap.KeyCodes.S:
			if ((this._altKey || oEvent.altKey) && this.getConfigurationVisible()) {
				this.$().find("button[id*='-settings-button']:visible").focus();
				oEvent.stopPropagation();
			}
			break;
		case jQuery.sap.KeyCodes.O:
			if ((this._altKey || oEvent.altKey) && this.getTransactionsVisible()) {
				this.$().find("button[id*='-transaction-button']:visible").focus();
				oEvent.stopPropagation();
			}
			break;
		case jQuery.sap.KeyCodes.K:
			if ((this._altKey || oEvent.altKey) && this.getActionsVisible()) {
				this.$().find("button[id*='-action-button']:visible").focus();
				oEvent.stopPropagation();
			}
			break;
		case jQuery.sap.KeyCodes.ALT:
			this._altKey = true;
	}
};

sap.suite.ui.commons.UnifiedThingInspector.prototype.onkeyup = function(oEvent) {
	if (jQuery.sap.KeyCodes.ALT == oEvent.keyCode) {
		this._altKey = false;
	}
};
