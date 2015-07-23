/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.MicroAreaChartItem.
jQuery.sap.declare("sap.suite.ui.commons.MicroAreaChartItem");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new MicroAreaChartItem.
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
 * <li>{@link #getColor color} : sap.suite.ui.commons.InfoTileValueColor (default: sap.suite.ui.commons.InfoTileValueColor.Neutral)</li>
 * <li>{@link #getTitle title} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getPoints points} : sap.suite.ui.commons.MicroAreaChartPoint[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The configuration of the graphic element on the chart.
 * @extends sap.ui.core.Element
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.MicroAreaChartItem
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Element.extend("sap.suite.ui.commons.MicroAreaChartItem", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"color" : {type : "sap.suite.ui.commons.InfoTileValueColor", group : "Misc", defaultValue : sap.suite.ui.commons.InfoTileValueColor.Neutral},
		"title" : {type : "string", group : "Misc", defaultValue : null}
	},
	aggregations : {
		"points" : {type : "sap.suite.ui.commons.MicroAreaChartPoint", multiple : true, singularName : "point", bindable : "bindable"}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.MicroAreaChartItem with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.MicroAreaChartItem.extend
 * @function
 */


/**
 * Getter for property <code>color</code>.
 * The graphic element color.
 *
 * Default value is <code>Neutral</code>
 *
 * @return {sap.suite.ui.commons.InfoTileValueColor} the value of property <code>color</code>
 * @public
 * @name sap.suite.ui.commons.MicroAreaChartItem#getColor
 * @function
 */

/**
 * Setter for property <code>color</code>.
 *
 * Default value is <code>Neutral</code> 
 *
 * @param {sap.suite.ui.commons.InfoTileValueColor} oColor  new value for property <code>color</code>
 * @return {sap.suite.ui.commons.MicroAreaChartItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChartItem#setColor
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * The line title.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @since 1.29
 * @name sap.suite.ui.commons.MicroAreaChartItem#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.MicroAreaChartItem} <code>this</code> to allow method chaining
 * @public
 * @since 1.29
 * @name sap.suite.ui.commons.MicroAreaChartItem#setTitle
 * @function
 */


/**
 * Getter for aggregation <code>points</code>.<br/>
 * The set of points for this graphic element.
 * 
 * @return {sap.suite.ui.commons.MicroAreaChartPoint[]}
 * @public
 * @name sap.suite.ui.commons.MicroAreaChartItem#getPoints
 * @function
 */


/**
 * Inserts a point into the aggregation named <code>points</code>.
 *
 * @param {sap.suite.ui.commons.MicroAreaChartPoint}
 *          oPoint the point to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the point should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the point is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the point is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.MicroAreaChartItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChartItem#insertPoint
 * @function
 */

/**
 * Adds some point <code>oPoint</code> 
 * to the aggregation named <code>points</code>.
 *
 * @param {sap.suite.ui.commons.MicroAreaChartPoint}
 *            oPoint the point to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.MicroAreaChartItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChartItem#addPoint
 * @function
 */

/**
 * Removes an point from the aggregation named <code>points</code>.
 *
 * @param {int | string | sap.suite.ui.commons.MicroAreaChartPoint} vPoint the point to remove or its index or id
 * @return {sap.suite.ui.commons.MicroAreaChartPoint} the removed point or null
 * @public
 * @name sap.suite.ui.commons.MicroAreaChartItem#removePoint
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>points</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.MicroAreaChartPoint[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.MicroAreaChartItem#removeAllPoints
 * @function
 */

/**
 * Checks for the provided <code>sap.suite.ui.commons.MicroAreaChartPoint</code> in the aggregation named <code>points</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.suite.ui.commons.MicroAreaChartPoint}
 *            oPoint the point whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.suite.ui.commons.MicroAreaChartItem#indexOfPoint
 * @function
 */
	

/**
 * Destroys all the points in the aggregation 
 * named <code>points</code>.
 * @return {sap.suite.ui.commons.MicroAreaChartItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChartItem#destroyPoints
 * @function
 */


/**
 * Binder for aggregation <code>points</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.suite.ui.commons.MicroAreaChartItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChartItem#bindPoints
 * @function
 */

/**
 * Unbinder for aggregation <code>points</code>.
 *
 * @return {sap.suite.ui.commons.MicroAreaChartItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.MicroAreaChartItem#unbindPoints
 * @function
 */

// Start of sap/suite/ui/commons/MicroAreaChartItem.js
///**
// * This file defines behavior for the control,
// */
//sap.suite.ui.commons.MicroAreaChartItem.prototype.init = function(){
//   // do something for initialization...
//};
