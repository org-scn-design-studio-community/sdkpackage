/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.HeaderCell.
jQuery.sap.declare("sap.suite.ui.commons.HeaderCell");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new HeaderCell.
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
 * <li>{@link #getHeigth heigth} : sap.ui.core.CSSSize (default: '100px')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '106px')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getWest west} : sap.suite.ui.commons.HeaderCellItem</li>
 * <li>{@link #getNorth north} : sap.suite.ui.commons.HeaderCellItem</li>
 * <li>{@link #getEast east} : sap.suite.ui.commons.HeaderCellItem</li>
 * <li>{@link #getSouth south} : sap.suite.ui.commons.HeaderCellItem</li></ul>
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
 * This control contains 4 cells (West, North, East, South). It can display one or more controls in different layouts. Each aggregation must contain only one instance of HeaderCellItem.
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.HeaderCell
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.HeaderCell", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"heigth" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : '100px', deprecated: true},
		"height" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : '106px'}
	},
	aggregations : {
		"west" : {type : "sap.suite.ui.commons.HeaderCellItem", multiple : false}, 
		"north" : {type : "sap.suite.ui.commons.HeaderCellItem", multiple : false}, 
		"east" : {type : "sap.suite.ui.commons.HeaderCellItem", multiple : false}, 
		"south" : {type : "sap.suite.ui.commons.HeaderCellItem", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.HeaderCell with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.HeaderCell.extend
 * @function
 */


/**
 * Getter for property <code>heigth</code>.
 * Height of the HeaderCell control.
 *
 * Default value is <code>100px</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>heigth</code>
 * @public
 * @deprecated Since version 1.20.2. 
 * Wrong property name
 * @name sap.suite.ui.commons.HeaderCell#getHeigth
 * @function
 */

/**
 * Setter for property <code>heigth</code>.
 *
 * Default value is <code>100px</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeigth  new value for property <code>heigth</code>
 * @return {sap.suite.ui.commons.HeaderCell} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.20.2. 
 * Wrong property name
 * @name sap.suite.ui.commons.HeaderCell#setHeigth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * Height of the HeaderCell control.
 *
 * Default value is <code>106px</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.suite.ui.commons.HeaderCell#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>106px</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.suite.ui.commons.HeaderCell} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.HeaderCell#setHeight
 * @function
 */


/**
 * Getter for aggregation <code>west</code>.<br/>
 * Objecth that contains control to render in west area of the HeaderCell.
 * 
 * @return {sap.suite.ui.commons.HeaderCellItem}
 * @public
 * @name sap.suite.ui.commons.HeaderCell#getWest
 * @function
 */


/**
 * Setter for the aggregated <code>west</code>.
 * @param {sap.suite.ui.commons.HeaderCellItem} oWest
 * @return {sap.suite.ui.commons.HeaderCell} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.HeaderCell#setWest
 * @function
 */
	

/**
 * Destroys the west in the aggregation 
 * named <code>west</code>.
 * @return {sap.suite.ui.commons.HeaderCell} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.HeaderCell#destroyWest
 * @function
 */


/**
 * Getter for aggregation <code>north</code>.<br/>
 * Objecth that contains control to render in north area of the HeaderCell.
 * 
 * @return {sap.suite.ui.commons.HeaderCellItem}
 * @public
 * @name sap.suite.ui.commons.HeaderCell#getNorth
 * @function
 */


/**
 * Setter for the aggregated <code>north</code>.
 * @param {sap.suite.ui.commons.HeaderCellItem} oNorth
 * @return {sap.suite.ui.commons.HeaderCell} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.HeaderCell#setNorth
 * @function
 */
	

/**
 * Destroys the north in the aggregation 
 * named <code>north</code>.
 * @return {sap.suite.ui.commons.HeaderCell} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.HeaderCell#destroyNorth
 * @function
 */


/**
 * Getter for aggregation <code>east</code>.<br/>
 * Objecth that contains control to render in east area of the HeaderCell.
 * 
 * @return {sap.suite.ui.commons.HeaderCellItem}
 * @public
 * @name sap.suite.ui.commons.HeaderCell#getEast
 * @function
 */


/**
 * Setter for the aggregated <code>east</code>.
 * @param {sap.suite.ui.commons.HeaderCellItem} oEast
 * @return {sap.suite.ui.commons.HeaderCell} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.HeaderCell#setEast
 * @function
 */
	

/**
 * Destroys the east in the aggregation 
 * named <code>east</code>.
 * @return {sap.suite.ui.commons.HeaderCell} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.HeaderCell#destroyEast
 * @function
 */


/**
 * Getter for aggregation <code>south</code>.<br/>
 * Objecth that contains control to render in south area of the HeaderCell.
 * 
 * @return {sap.suite.ui.commons.HeaderCellItem}
 * @public
 * @name sap.suite.ui.commons.HeaderCell#getSouth
 * @function
 */


/**
 * Setter for the aggregated <code>south</code>.
 * @param {sap.suite.ui.commons.HeaderCellItem} oSouth
 * @return {sap.suite.ui.commons.HeaderCell} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.HeaderCell#setSouth
 * @function
 */
	

/**
 * Destroys the south in the aggregation 
 * named <code>south</code>.
 * @return {sap.suite.ui.commons.HeaderCell} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.HeaderCell#destroySouth
 * @function
 */

// Start of sap/suite/ui/commons/HeaderCell.js
///**
// * This file defines behavior for the control,
// */
//sap.suite.ui.commons.HeaderCell.prototype.init = function(){
//
//
//};
