/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.ProcessFlowConnection.
jQuery.sap.declare("sap.suite.ui.commons.ProcessFlowConnection");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ProcessFlowConnection.
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
 * <li>{@link #getDrawData drawData} : object[]</li>
 * <li>{@link #getZoomLevel zoomLevel} : sap.suite.ui.commons.ProcessFlowZoomLevel (default: sap.suite.ui.commons.ProcessFlowZoomLevel.Two)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
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
 * This control is used inside the ProcessFlow Control to connect process flow node A with process flow node B in respect to the style(s) chosen by the application.
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.ProcessFlowConnection
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.ProcessFlowConnection", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"drawData" : {type : "object[]", group : "Misc", defaultValue : null},
		"zoomLevel" : {type : "sap.suite.ui.commons.ProcessFlowZoomLevel", group : "Misc", defaultValue : sap.suite.ui.commons.ProcessFlowZoomLevel.Two}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.ProcessFlowConnection with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.ProcessFlowConnection.extend
 * @function
 */


/**
 * Getter for property <code>drawData</code>.
 * This is an array of the following attributes for one element:
 * 1. flowLine (string) - A connection definition where the line should be drawn. A string which defines a course of a flow line. A flow line is a connection between nodes in a process flow control. The string can contain the following characters:
 * - "r" for right,
 * - "t" for top,
 * - "l" for left,
 * - "b" for bottom.
 * 2. targetNodeState (ProcessFlowNodeState) - A copy of the target node status. If the target node is created, the line is solid.
 * If the target node is planned, the line is dashed.
 * 3. displayState (ProcessFlowDisplayState) - Display state of the node. This property defines if the node is displayed regularly, highlighted, or dimmed in combination with a selected visual style of the control.
 * 4. hasArrow (boolean) - Indicates if the line has an arrow on the right end.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object[]} the value of property <code>drawData</code>
 * @public
 * @name sap.suite.ui.commons.ProcessFlowConnection#getDrawData
 * @function
 */

/**
 * Setter for property <code>drawData</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object[]} aDrawData  new value for property <code>drawData</code>
 * @return {sap.suite.ui.commons.ProcessFlowConnection} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlowConnection#setDrawData
 * @function
 */


/**
 * Getter for property <code>zoomLevel</code>.
 * This is a current zoom level for the connection. The point of connection to the node is derived from zoom level.
 *
 * Default value is <code>sap.suite.ui.commons.ProcessFlowZoomLevel.Two</code>
 *
 * @return {sap.suite.ui.commons.ProcessFlowZoomLevel} the value of property <code>zoomLevel</code>
 * @public
 * @name sap.suite.ui.commons.ProcessFlowConnection#getZoomLevel
 * @function
 */

/**
 * Setter for property <code>zoomLevel</code>.
 *
 * Default value is <code>sap.suite.ui.commons.ProcessFlowZoomLevel.Two</code> 
 *
 * @param {sap.suite.ui.commons.ProcessFlowZoomLevel} oZoomLevel  new value for property <code>zoomLevel</code>
 * @return {sap.suite.ui.commons.ProcessFlowConnection} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.ProcessFlowConnection#setZoomLevel
 * @function
 */

// Start of sap/suite/ui/commons/ProcessFlowConnection.js
/* resource bundle for the localized strings */
sap.suite.ui.commons.ProcessFlowConnection.prototype._oResBundle = null;

/**
 * This file defines behavior for the control,
 */
sap.suite.ui.commons.ProcessFlowConnection.prototype.init = function(){
  if( !this._oResBundle ) {
    this._oResBundle = sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons");
  }
};

/**
 * Create connection object depends on draw data
 *
 * @private
 * @returns {object} connection
 */
sap.suite.ui.commons.ProcessFlowConnection.prototype._traverseConnectionData = function() { // EXC_SAP_006_1
  var connectionData = this.getDrawData();
  if (!connectionData) {
    return {};
  }

  var line = {draw: false, state:"", display:""};
  var connection = {right: line, top: line, left: line, bottom: line, arrow: false};

  function setLine(myConnectionData, myLineId, inputLine) {
    var myLine = {draw: inputLine.draw, state:inputLine.state, display:inputLine.display};
    if (myConnectionData.flowLine.indexOf(myLineId) >= 0) {
      myLine.draw = true;

      if (myConnectionData.targetNodeState === sap.suite.ui.commons.ProcessFlowNodeState.Neutral ||
        myConnectionData.targetNodeState === sap.suite.ui.commons.ProcessFlowNodeState.Positive ||
        myConnectionData.targetNodeState === sap.suite.ui.commons.ProcessFlowNodeState.Negative) {
        myLine.state = "Created";
      } else if (myConnectionData.targetNodeState === sap.suite.ui.commons.ProcessFlowNodeState.Planned ||
        myConnectionData.targetNodeState === sap.suite.ui.commons.ProcessFlowNodeState.PlannedNegative) {
        // planned state cannot override created state
        if (myLine.state !== "Created") {
          myLine.state = "Planned";
        }
      }

      if (myConnectionData.displayState === sap.suite.ui.commons.ProcessFlowDisplayState.Highlighted ||
        myConnectionData.displayState === sap.suite.ui.commons.ProcessFlowDisplayState.HighlightedFocused) {
        myLine.display = "Highlighted";
      } else if (myConnectionData.displayState === sap.suite.ui.commons.ProcessFlowDisplayState.Regular ||
        myConnectionData.displayState === sap.suite.ui.commons.ProcessFlowDisplayState.RegularFocused) {
        // regular display state cannot override regular display state
        if (myLine.display !== "Highlighted") {
          myLine.display = "Regular";
        }
      } else if (myConnectionData.displayState === sap.suite.ui.commons.ProcessFlowDisplayState.Dimmed ||
        myConnectionData.displayState === sap.suite.ui.commons.ProcessFlowDisplayState.DimmedFocused) {
        // dimmed display state cannot override highlighted and regular display states
        if (myLine.display !== "Highlighted" && myLine.display !== "Regular") {
          myLine.display = "Dimmed";
        }
      }
    }
    return myLine;
  }

  var i;
  for (i = 0; i < connectionData.length; i++) {
    connection.right = setLine(connectionData[i], "r", connection.right);
    connection.top = setLine(connectionData[i], "t", connection.top);
    connection.left = setLine(connectionData[i], "l", connection.left);
    connection.bottom = setLine(connectionData[i], "b", connection.bottom);

    if (connectionData[i].flowLine.indexOf("r") >= 0) {
      if (connectionData[i].hasArrow) {
        connection.arrow = true;
      }
    }
  }

  return connection;
};

/**
 * Adds connection data
 *
 * @public
 * @param {object} singleConnectionData
 * @returns {Array} connectionData
 */
sap.suite.ui.commons.ProcessFlowConnection.prototype.addConnectionData = function( singleConnectionData ) {
  var tempConnectionData = this.getDrawData();
  if( !tempConnectionData ) {
    tempConnectionData = [];
  }
  tempConnectionData.push(singleConnectionData);
  this.setDrawData(tempConnectionData);
  return tempConnectionData;
};

/**
 * Returns ARIA text for current connection object
 *
 * @private
 * @returns {String} The Aria result text for the connection
 */
sap.suite.ui.commons.ProcessFlowConnection.prototype._getAriaText = function() {
  var connection = this._traverseConnectionData();
  var ariaValue = "";
  var withArrowValue = " " + this._oResBundle.getText('PF_CONNECTION_ENDS');
  if (this._isHorizontalLine(connection)) {
    ariaValue = this._oResBundle.getText('PF_CONNECTION_HORIZONTAL_LINE');
    if (connection.arrow) {
      ariaValue += withArrowValue;
    }
  } else if (this._isVerticalLine(connection)) {
    ariaValue = this._oResBundle.getText('PF_CONNECTION_VERTICAL_LINE');
    if (connection.arrow) {
      ariaValue += withArrowValue;
    }
  } else {
    ariaValue = this._oResBundle.getText('PF_CONNECTION_BRANCH');
    if (connection.arrow) {
      ariaValue += withArrowValue;
    }
  }
  return ariaValue;
};

/**
 * Checks if the given connection is a vertical line.
 *
 * @private
 * @param {Object} Connection to retrieve information for vertical line from
 * @returns {Boolean}
 */
sap.suite.ui.commons.ProcessFlowConnection.prototype._isVerticalLine = function(connection) {
  if (connection.hasOwnProperty("left") && !connection.left.draw &&
    connection.hasOwnProperty("right") && !connection.right.draw &&
    connection.hasOwnProperty("top") && connection.top.draw &&
    connection.hasOwnProperty("bottom") && connection.bottom.draw) {
    return true;
  } else {
    return false;
  }
};

/**
 * Checks if the given connection is a horizontal line.
 *
 * @private
 * @param {Object} Connection to retrieve information for horizontal line from
 * @returns {Boolean}
 */
sap.suite.ui.commons.ProcessFlowConnection.prototype._isHorizontalLine = function(connection) {
  if (connection.hasOwnProperty("left") && connection.left.draw &&
      connection.hasOwnProperty("right") && connection.right.draw &&
      connection.hasOwnProperty("top") && !connection.top.draw &&
      connection.hasOwnProperty("bottom") && !connection.bottom.draw) {
    return true;
  } else {
    return false;
  }
};