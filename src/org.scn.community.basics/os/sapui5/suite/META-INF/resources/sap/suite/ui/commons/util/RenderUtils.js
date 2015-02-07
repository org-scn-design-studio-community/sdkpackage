/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.util.RenderUtils");jQuery.sap.require("sap.ui.base.Object");
sap.suite.ui.commons.util.RenderingHelper=function(r){this._rm=r};
sap.suite.ui.commons.util.RenderingHelper.prototype=jQuery.sap.newObject(sap.ui.base.Object.prototype);
sap.suite.ui.commons.util.RenderingHelper.prototype._getRenderManager=function(){if(!(this._rm)){throw new Error("Render manager not defined")}return this._rm};
sap.suite.ui.commons.util.RenderingHelper.prototype.writeOpeningTag=function(t,T){T=T||{};var r=this._getRenderManager();var a;r.write("<");r.writeEscaped(t);if(T.classes){for(var i=0;i<T.classes.length;i++){r.addClass(T.classes[i])}r.writeClasses()}if(T.attributes){for(a in T.attributes){r.writeAttribute(a,T.attributes[a])}}if(T.escapedAttributes){for(a in T.escapedAttributes){r.writeAttributeEscaped(a,T.escapedAttributes[a])}}r.write(">")};
sap.suite.ui.commons.util.RenderingHelper.prototype.writeClosingTag=function(t){var r=this._getRenderManager();r.write("</");r.writeEscaped(t);r.write(">")};
