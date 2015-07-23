/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.RepeaterViewConfiguration.
jQuery.sap.declare("sap.suite.ui.commons.RepeaterViewConfiguration");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new RepeaterViewConfiguration.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getIconHovered iconHovered} : sap.ui.core.URI</li>
 * <li>{@link #getPath path} : string</li>
 * <li>{@link #getItemMinWidth itemMinWidth} : int (default: -1)</li>
 * <li>{@link #getNumberOfTiles numberOfTiles} : int (default: -1)</li>
 * <li>{@link #getResponsive responsive} : any (default: false)</li>
 * <li>{@link #getExternal external} : boolean (default: false)</li>
 * <li>{@link #getIconSelected iconSelected} : sap.ui.core.URI</li>
 * <li>{@link #getItemHeight itemHeight} : int</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTemplate template} : sap.ui.core.Control</li>
 * <li>{@link #getExternalRepresentation externalRepresentation} : sap.ui.core.Control</li></ul>
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
 * A configuration control defining how the content of the sap.suite.ui.commons.ViewRepeater control is displayed and what data is bound.
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.RepeaterViewConfiguration
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.RepeaterViewConfiguration", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"icon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"iconHovered" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"path" : {type : "string", group : "Misc", defaultValue : null},
		"itemMinWidth" : {type : "int", group : "Misc", defaultValue : -1},
		"numberOfTiles" : {type : "int", group : "Misc", defaultValue : -1},
		"responsive" : {type : "any", group : "Misc", defaultValue : false},
		"external" : {type : "boolean", group : "Misc", defaultValue : false},
		"iconSelected" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"itemHeight" : {type : "int", group : "Misc", defaultValue : null}
	},
	aggregations : {
		"template" : {type : "sap.ui.core.Control", multiple : false}, 
		"externalRepresentation" : {type : "sap.ui.core.Control", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.RepeaterViewConfiguration with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.RepeaterViewConfiguration.extend
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * The title of the view to be displayed in sap.suite.ui.commons.ViewRepeater view selector. If neither this nor "icon" property are defined, the default title "View ##" will be shown, where ## is an index number of the view in View Repeater starting from 1.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.suite.ui.commons.RepeaterViewConfiguration#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.RepeaterViewConfiguration#setTitle
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * A path to the icon representing this view in sap.suite.ui.commons.ViewRepeater view selector.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.suite.ui.commons.RepeaterViewConfiguration#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.RepeaterViewConfiguration#setIcon
 * @function
 */


/**
 * Getter for property <code>iconHovered</code>.
 * A path to the icon representing this view in sap.suite.ui.commons.ViewRepeater view selector when the regular icon is hovered.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>iconHovered</code>
 * @public
 * @name sap.suite.ui.commons.RepeaterViewConfiguration#getIconHovered
 * @function
 */

/**
 * Setter for property <code>iconHovered</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIconHovered  new value for property <code>iconHovered</code>
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.RepeaterViewConfiguration#setIconHovered
 * @function
 */


/**
 * Getter for property <code>path</code>.
 * A path used for rows/titles data binding.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>path</code>
 * @public
 * @name sap.suite.ui.commons.RepeaterViewConfiguration#getPath
 * @function
 */

/**
 * Setter for property <code>path</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sPath  new value for property <code>path</code>
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.RepeaterViewConfiguration#setPath
 * @function
 */


/**
 * Getter for property <code>itemMinWidth</code>.
 * The minimal width of the tile in this view. Only applicable if "responsive" property is set to true.
 *
 * Default value is <code>-1</code>
 *
 * @return {int} the value of property <code>itemMinWidth</code>
 * @public
 * @name sap.suite.ui.commons.RepeaterViewConfiguration#getItemMinWidth
 * @function
 */

/**
 * Setter for property <code>itemMinWidth</code>.
 *
 * Default value is <code>-1</code> 
 *
 * @param {int} iItemMinWidth  new value for property <code>itemMinWidth</code>
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.RepeaterViewConfiguration#setItemMinWidth
 * @function
 */


/**
 * Getter for property <code>numberOfTiles</code>.
 * The number of tiles/rows that will be shown on a single page in this view.
 *
 * Default value is <code>-1</code>
 *
 * @return {int} the value of property <code>numberOfTiles</code>
 * @public
 * @name sap.suite.ui.commons.RepeaterViewConfiguration#getNumberOfTiles
 * @function
 */

/**
 * Setter for property <code>numberOfTiles</code>.
 *
 * Default value is <code>-1</code> 
 *
 * @param {int} iNumberOfTiles  new value for property <code>numberOfTiles</code>
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.RepeaterViewConfiguration#setNumberOfTiles
 * @function
 */


/**
 * Getter for property <code>responsive</code>.
 * This parameter indicates whether the content is shown in rows or tiles. If false, the content is shown in rows just like in core sap.ui.commons.RowRepeater. If true, the content is shown in tiles (similar to sap.ui.ux3.DataSet control) that have minimal width defined by the "itemMinWidth" property. The number of columns depends on the parent control's width. If you resize the control, the number of columns may change respectively so that the content tiles can fill the entire space of a row.
 *
 * Default value is <code>false</code>
 *
 * @return {any} the value of property <code>responsive</code>
 * @public
 * @name sap.suite.ui.commons.RepeaterViewConfiguration#getResponsive
 * @function
 */

/**
 * Setter for property <code>responsive</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {any} oResponsive  new value for property <code>responsive</code>
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.RepeaterViewConfiguration#setResponsive
 * @function
 */


/**
 * Getter for property <code>external</code>.
 * Indicates if the external representation of this view is rendered instead of the row repeater's own content.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>external</code>
 * @public
 * @name sap.suite.ui.commons.RepeaterViewConfiguration#getExternal
 * @function
 */

/**
 * Setter for property <code>external</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bExternal  new value for property <code>external</code>
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.RepeaterViewConfiguration#setExternal
 * @function
 */


/**
 * Getter for property <code>iconSelected</code>.
 * A path to the icon representing this view in sap.suite.ui.commons.ViewRepeater view selector when the regular icon is selected.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>iconSelected</code>
 * @public
 * @name sap.suite.ui.commons.RepeaterViewConfiguration#getIconSelected
 * @function
 */

/**
 * Setter for property <code>iconSelected</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIconSelected  new value for property <code>iconSelected</code>
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.RepeaterViewConfiguration#setIconSelected
 * @function
 */


/**
 * Getter for property <code>itemHeight</code>.
 * The height of the tile in this view in pixels. Only applicable if the responsive property is set to true. This value is used for calculating the number of tile rows.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>itemHeight</code>
 * @public
 * @name sap.suite.ui.commons.RepeaterViewConfiguration#getItemHeight
 * @function
 */

/**
 * Setter for property <code>itemHeight</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iItemHeight  new value for property <code>itemHeight</code>
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.RepeaterViewConfiguration#setItemHeight
 * @function
 */


/**
 * Getter for aggregation <code>template</code>.<br/>
 * The control used as a template while displaying rows/tiles in this view. It should not have fixed width wider than defined by the "itemMinWidth" property, otherwise some content may appear cropped.
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.suite.ui.commons.RepeaterViewConfiguration#getTemplate
 * @function
 */


/**
 * Setter for the aggregated <code>template</code>.
 * @param {sap.ui.core.Control} oTemplate
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.RepeaterViewConfiguration#setTemplate
 * @function
 */
	

/**
 * Destroys the template in the aggregation 
 * named <code>template</code>.
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.RepeaterViewConfiguration#destroyTemplate
 * @function
 */


/**
 * Getter for aggregation <code>externalRepresentation</code>.<br/>
 * The control to be rendered instead of sap.suite.ui.commons.ViewRepeater's own content. Only used if the "external" property is set to true. This allows you to create custom views, for example, Table views. The sap.suite.ui.commons.ViewRepeater control will share its model with this control if the control does not have its own model.
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.suite.ui.commons.RepeaterViewConfiguration#getExternalRepresentation
 * @function
 */


/**
 * Setter for the aggregated <code>externalRepresentation</code>.
 * @param {sap.ui.core.Control} oExternalRepresentation
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.RepeaterViewConfiguration#setExternalRepresentation
 * @function
 */
	

/**
 * Destroys the externalRepresentation in the aggregation 
 * named <code>externalRepresentation</code>.
 * @return {sap.suite.ui.commons.RepeaterViewConfiguration} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.RepeaterViewConfiguration#destroyExternalRepresentation
 * @function
 */

// Start of sap/suite/ui/commons/RepeaterViewConfiguration.js
