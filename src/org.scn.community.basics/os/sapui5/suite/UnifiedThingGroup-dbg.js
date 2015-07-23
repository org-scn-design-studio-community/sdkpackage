/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.UnifiedThingGroup.
jQuery.sap.declare("sap.suite.ui.commons.UnifiedThingGroup");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new UnifiedThingGroup.
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
 * <li>{@link #getDescription description} : string</li>
 * <li>{@link #getDesign design} : sap.suite.ui.commons.ThingGroupDesign (default: sap.suite.ui.commons.ThingGroupDesign.ZeroIndent)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control</li></ul>
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
 * This control is used in UnifiedThingInspector to display the facet header information.
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.UnifiedThingGroup
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.UnifiedThingGroup", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"description" : {type : "string", group : "Misc", defaultValue : null},
		"design" : {type : "sap.suite.ui.commons.ThingGroupDesign", group : "Misc", defaultValue : sap.suite.ui.commons.ThingGroupDesign.ZeroIndent}
	},
	aggregations : {
		"content" : {type : "sap.ui.core.Control", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.UnifiedThingGroup with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.UnifiedThingGroup.extend
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * The title of the group.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.suite.ui.commons.UnifiedThingGroup#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.suite.ui.commons.UnifiedThingGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingGroup#setTitle
 * @function
 */


/**
 * Getter for property <code>description</code>.
 * The description of the group.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>description</code>
 * @public
 * @name sap.suite.ui.commons.UnifiedThingGroup#getDescription
 * @function
 */

/**
 * Setter for property <code>description</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sDescription  new value for property <code>description</code>
 * @return {sap.suite.ui.commons.UnifiedThingGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingGroup#setDescription
 * @function
 */


/**
 * Getter for property <code>design</code>.
 * Defines how the control is rendered.
 *
 * Default value is <code>ZeroIndent</code>
 *
 * @return {sap.suite.ui.commons.ThingGroupDesign} the value of property <code>design</code>
 * @public
 * @name sap.suite.ui.commons.UnifiedThingGroup#getDesign
 * @function
 */

/**
 * Setter for property <code>design</code>.
 *
 * Default value is <code>ZeroIndent</code> 
 *
 * @param {sap.suite.ui.commons.ThingGroupDesign} oDesign  new value for property <code>design</code>
 * @return {sap.suite.ui.commons.UnifiedThingGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingGroup#setDesign
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * The content of the group.
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.suite.ui.commons.UnifiedThingGroup#getContent
 * @function
 */


/**
 * Setter for the aggregated <code>content</code>.
 * @param {sap.ui.core.Control} oContent
 * @return {sap.suite.ui.commons.UnifiedThingGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingGroup#setContent
 * @function
 */
	

/**
 * Destroys the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.suite.ui.commons.UnifiedThingGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.UnifiedThingGroup#destroyContent
 * @function
 */

// Start of sap/suite/ui/commons/UnifiedThingGroup.js
///**
// * This file defines behavior for the control,
// */
//sap.suite.ui.commons.UnifiedThingGroup.prototype.init = function(){
//   // do something for initialization...
//};
