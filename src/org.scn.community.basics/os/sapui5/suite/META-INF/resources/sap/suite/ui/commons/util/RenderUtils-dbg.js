/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.suite.ui.commons.util.RenderUtils");

jQuery.sap.require("sap.ui.base.Object");

sap.suite.ui.commons.util.RenderingHelper = function(oRenderManager) {
    this._rm = oRenderManager;
};
sap.suite.ui.commons.util.RenderingHelper.prototype = jQuery.sap.newObject(sap.ui.base.Object.prototype);

/**
 * Returns render manager, throw {Error} if undefined.
 */
sap.suite.ui.commons.util.RenderingHelper.prototype._getRenderManager = function() {
    if (!(this._rm)) {
        throw new Error("Render manager not defined");
    }
    return this._rm;
};

/**
 * Writes complete opening tag with name sTagName.
 * @param {String} sTagName The name for the tag.
 * @param {Object} [oTag] Object which contains tag's classes and attributes.
 */
sap.suite.ui.commons.util.RenderingHelper.prototype.writeOpeningTag = function(sTagName, oTag) {
    oTag = oTag || {};

    // Get manager
    var rm = this._getRenderManager();
    var attrName;

    // Write tag name
    rm.write("<");
    rm.writeEscaped(sTagName);

    // Write CSS classes
    if (oTag.classes) {
        for (var i = 0; i < oTag.classes.length; i++) {
            rm.addClass(oTag.classes[i]);
        }
        rm.writeClasses();
    }

    // Write attributes
    if (oTag.attributes) {
        for (attrName in oTag.attributes) {
            rm.writeAttribute(attrName, oTag.attributes[attrName]);
        }
    }

    // Write escaped attributes
    if (oTag.escapedAttributes) {
        for (attrName in oTag.escapedAttributes) {
            rm.writeAttributeEscaped(attrName, oTag.escapedAttributes[attrName]);
        }
    }

    rm.write(">");
};

/**
 * Writes complete opening tag with name sTagName.
 * @param {String} sTagName The name for the tag.
 */
sap.suite.ui.commons.util.RenderingHelper.prototype.writeClosingTag = function(sTagName) {
    // Get manager
    var rm = this._getRenderManager();

    // Write tag name
    rm.write("</");
    rm.writeEscaped(sTagName);
    rm.write(">");
};
