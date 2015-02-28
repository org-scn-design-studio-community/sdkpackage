/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
 
jQuery.sap.declare("sap.suite.ui.commons.LinkActionSheetRenderer");
jQuery.sap.require("sap.m.ActionSheetRenderer");
jQuery.sap.require("sap.ui.core.Renderer");

/**
 * @class LinkActionSheet renderer. 
 * @static
 */
sap.suite.ui.commons.LinkActionSheetRenderer = sap.ui.core.Renderer.extend(sap.m.ActionSheetRenderer);


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.LinkActionSheetRenderer.render = function(oRm, oControl){ 
    var aActionItems = oControl.getItems(), i, bMixedButtons=false;
        
    for(i = 0 ; i < aActionItems.length ; i++) {
        if(aActionItems[i].getIcon && aActionItems[i].getIcon()){
            bMixedButtons = true;
            break;
        }
    }
        
    // write the HTML into the render manager
    oRm.write("<div");
    oRm.writeControlData(oControl);
    oRm.addClass("sapMActionSheet");
    oRm.addClass("sapUILinkActionSheet");
    if(bMixedButtons){
        oRm.addClass("sapMActionSheetMixedButtons");
    }
    oRm.writeClasses();
        
    var sTooltip = oControl.getTooltip_AsString();
    if (sTooltip) {
        oRm.writeAttributeEscaped("title", sTooltip);
    }
        
    oRm.write(">");
        
    for(i = 0 ; i < aActionItems.length ; i++){
        if (aActionItems[i].getType) { // if this is a button
            var oButton = aActionItems[i];
            oButton.addStyleClass("sapMActionSheetButton");
            oButton.addStyleClass("sapUILinkActionSheetButton");
            oRm.renderControl(oButton);
        } else if (aActionItems[i].getHref) { // if this is a link
            oRm.renderControl(aActionItems[i].addStyleClass("sapUILinkActionSheetLink"));
        }
    }
         
    if((jQuery.device.is.iphone || (sap.m.Dialog._bOneDesign && jQuery.device.is.phone)) && oControl.getShowCancelButton()){
        oRm.renderControl(oControl._getCancelButton());
    }
        
    oRm.write("</div>");
};
