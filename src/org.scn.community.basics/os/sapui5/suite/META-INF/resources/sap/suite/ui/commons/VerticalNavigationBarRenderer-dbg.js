/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.VerticalNavigationBarRenderer");
jQuery.sap.require("sap.ui.ux3.NavigationBarRenderer");
jQuery.sap.require("sap.ui.core.Renderer");

/**
 * @class VerticalNavigationBar renderer. 
 * @static
 */
sap.suite.ui.commons.VerticalNavigationBarRenderer =sap.ui.core.Renderer.extend(sap.ui.ux3.NavigationBarRenderer); 


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.suite.ui.commons.VerticalNavigationBarRenderer.render = function(oRm, oControl){ 
    if (!oControl.getVisible()) {            // return immediately if control is invisible
        return;
    }

    // write the HTML into the render manager
    oRm.write("<nav");
    oRm.writeControlData(oControl);
    oRm.writeAttribute("role", "navigation");
    oRm.addClass("sapSuiteTvNavBar");
    oRm.addClass("sapUiUx3NavBarUpperCase");
    oRm.writeClasses();
    oRm.write(">");
        oRm.write("<ul");
        oRm.writeAttribute("id", oControl.getId() + "-list");
        oRm.writeAttribute("role", "menubar");
        oRm.addClass("sapSuiteTvNavBarList");
        oRm.writeClasses();
        oRm.write(">");
            this.getItemsHtml(oRm, oControl);
        oRm.write("</ul>");
    oRm.write("</nav>");
};

sap.suite.ui.commons.VerticalNavigationBarRenderer.getItemsHtml = function(oRm, oControl) {
    var aItems = oControl.getItems();
    var bNeedToGetInstances = false;

    if (!aItems || aItems.length == 0) {            // use the association instead, if the aggregation is empty
        aItems = oControl.getAssociatedItems();
        bNeedToGetInstances = true;                 // avoid type checks in the loop
    }

    var iNoOfItems = aItems.length;
    var selectedItemId = oControl.getSelectedItem();

    for (var i = 0; i < iNoOfItems; i++) {
        var oItem = bNeedToGetInstances ? sap.ui.getCore().byId(aItems[i]) : aItems[i];

        if (oItem.getVisible()) {
            var bIsSelected = (oItem.getId() == selectedItemId);
            var iCharsInQty = -1;

            if (oItem.getQuantity && oItem.getQuantity()) {
                iCharsInQty = oItem.getQuantity().length;
                if (iCharsInQty > 0) iCharsInQty += 2;
            }

            oRm.write("<li");
            oRm.addClass("sapSuiteTvNavBarItem");
            if (bIsSelected) {
                oRm.addClass("sapUiUx3NavBarItemSel");
            }
            oRm.writeClasses();
            oRm.write(">");
                oRm.write("<a");                              // onclick='this.parentNode.onclick(event);'
                oRm.writeAttribute("id", oItem.getId());
                oRm.writeAttributeEscaped("href", oItem.getHref() || "javascript:void(0);");
                oRm.writeAttribute("aria-setsize", iNoOfItems);
                oRm.writeAttribute("aria-posinset", i + 1);
                oRm.writeAttribute("aria-checked", bIsSelected ? "true" : "false");
                oRm.writeAttribute("role", "menuitemradio");
                
                oRm.addClass("sapSuiteTvNavBarItemLink");
                oRm.writeClasses();
                oRm.write(">");

                    oRm.write("<span");
                    oRm.addClass("sapSuiteTvNavBarItemName");
                    oRm.writeClasses();
                    //externalized to allow skipping in inherited classes
                    this._addQuantityMargin(oRm, oControl, iCharsInQty);
                    oRm.write(">");
                        oRm.writeEscaped(oItem.getText());
                    oRm.write("</span>");

                    if (iCharsInQty > 0) {
                        oRm.write("<span");
                        oRm.addClass("sapSuiteTvNavBarItemQty");
                        oRm.writeClasses();
                        oRm.write(">");
                        oRm.write(" (").writeEscaped(oItem.getQuantity()).write(")");
                        oRm.write("</span>");
                    }

                oRm.write("</a>");

            oRm.write("</li>");
        }
    }

    oRm.write("<span");
    oRm.writeAttribute("id", oControl.getId() + "-arrow");
    oRm.writeAttribute("style", "display:none;");
    oRm.write("></span>");
};

sap.suite.ui.commons.VerticalNavigationBarRenderer._addQuantityMargin = function(oRm, oControl, iCharsInQty) {
    if (iCharsInQty > 0) {
        var sMarginStyle = "margin-right:-"+(1+iCharsInQty*0.6)+"em; padding-right:"+(1+iCharsInQty*0.6)+"em";
        oRm.writeAttribute("style", sMarginStyle);
    }
};
