/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.SplitButton.
jQuery.sap.declare("sap.suite.ui.commons.SplitButton");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new SplitButton.
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
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getLite lite} : boolean (default: false)</li>
 * <li>{@link #getStyle style} : sap.ui.commons.ButtonStyle (default: sap.ui.commons.ButtonStyle.Default)</li>
 * <li>{@link #getStyled styled} : boolean (default: true)</li>
 * <li>{@link #getIconFirst iconFirst} : boolean (default: true)</li>
 * <li>{@link #getText text} : string (default: '')</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI (default: '')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getMenu menu} : sap.ui.commons.Menu</li></ul>
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
 * The Split Button Control is a composite control that consists of a default-action Button and a Menu Button control.
 * The default-action button control represents a simple push button. It is used for initiating actions, such as save or print. It can contain some text, an icon, or both; the order of the two can be configured. The action initiated by this button is considered to be the default action for the control, and it must be one of the selections defined in the Menu Button menu.
 * The Menu Button control is a button that opens a menu upon user's click. MenuButton is a composition of the Menu control and the Button control and thus inheriting all features. When a menu item is selected by the user, MenuButton throws an event called itemSelected. The event transfers the itemId of the selected item. As an alternative, the button press event can be used which has a similar behavior.
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @name sap.suite.ui.commons.SplitButton
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.SplitButton", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"visible" : {type : "boolean", group : "Misc", defaultValue : true},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"lite" : {type : "boolean", group : "Appearance", defaultValue : false},
		"style" : {type : "sap.ui.commons.ButtonStyle", group : "Appearance", defaultValue : sap.ui.commons.ButtonStyle.Default},
		"styled" : {type : "boolean", group : "Appearance", defaultValue : true},
		"iconFirst" : {type : "boolean", group : "Appearance", defaultValue : true},
		"text" : {type : "string", group : "Appearance", defaultValue : ''},
		"icon" : {type : "sap.ui.core.URI", group : "Appearance", defaultValue : ''}
	},
	aggregations : {
		"menu" : {type : "sap.ui.commons.Menu", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.SplitButton with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.SplitButton.extend
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible split buttons are not rendered
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.suite.ui.commons.SplitButton#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.suite.ui.commons.SplitButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.SplitButton#setVisible
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * Boolean property to enable the control (default is true). Buttons that are disabled have other colors than enabled ones, depending on custom settings.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.suite.ui.commons.SplitButton#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.suite.ui.commons.SplitButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.SplitButton#setEnabled
 * @function
 */


/**
 * Getter for property <code>lite</code>.
 * The split button is rendered as lite split button.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>lite</code>
 * @public
 * @name sap.suite.ui.commons.SplitButton#getLite
 * @function
 */

/**
 * Setter for property <code>lite</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bLite  new value for property <code>lite</code>
 * @return {sap.suite.ui.commons.SplitButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.SplitButton#setLite
 * @function
 */


/**
 * Getter for property <code>style</code>.
 * Style of the control (e.g. emphasized, accept)
 *
 * Default value is <code>sap.ui.commons.ButtonStyle.Default</code>
 *
 * @return {sap.ui.commons.ButtonStyle} the value of property <code>style</code>
 * @public
 * @name sap.suite.ui.commons.SplitButton#getStyle
 * @function
 */

/**
 * Setter for property <code>style</code>.
 *
 * Default value is <code>sap.ui.commons.ButtonStyle.Default</code> 
 *
 * @param {sap.ui.commons.ButtonStyle} oStyle  new value for property <code>style</code>
 * @return {sap.suite.ui.commons.SplitButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.SplitButton#setStyle
 * @function
 */


/**
 * Getter for property <code>styled</code>.
 * Indicatied if the button is styled. If not it is rendered as native HTML-button. In this case a custom styling can be added usig addStyleClass.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>styled</code>
 * @public
 * @name sap.suite.ui.commons.SplitButton#getStyled
 * @function
 */

/**
 * Setter for property <code>styled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bStyled  new value for property <code>styled</code>
 * @return {sap.suite.ui.commons.SplitButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.SplitButton#setStyled
 * @function
 */


/**
 * Getter for property <code>iconFirst</code>.
 * If set to true (default), the display sequence is 1. icon 2. control text .
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>iconFirst</code>
 * @public
 * @name sap.suite.ui.commons.SplitButton#getIconFirst
 * @function
 */

/**
 * Setter for property <code>iconFirst</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bIconFirst  new value for property <code>iconFirst</code>
 * @return {sap.suite.ui.commons.SplitButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.SplitButton#setIconFirst
 * @function
 */


/**
 * Getter for property <code>text</code>.
 * Text to be displayed for the action button.
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.suite.ui.commons.SplitButton#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.suite.ui.commons.SplitButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.SplitButton#setText
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * Icon to be displayed as graphical element within the action button.
 *
 * Default value is <code>''</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.suite.ui.commons.SplitButton#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.suite.ui.commons.SplitButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.SplitButton#setIcon
 * @function
 */


/**
 * Getter for aggregation <code>menu</code>.<br/>
 * Menu that shall be opened when the menu part of the button is clicked
 * 
 * @return {sap.ui.commons.Menu}
 * @public
 * @name sap.suite.ui.commons.SplitButton#getMenu
 * @function
 */


/**
 * Setter for the aggregated <code>menu</code>.
 * @param {sap.ui.commons.Menu} oMenu
 * @return {sap.suite.ui.commons.SplitButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.SplitButton#setMenu
 * @function
 */
	

/**
 * Destroys the menu in the aggregation 
 * named <code>menu</code>.
 * @return {sap.suite.ui.commons.SplitButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.SplitButton#destroyMenu
 * @function
 */

// Start of sap/suite/ui/commons/SplitButton.js
jQuery.sap.require("sap.ui.commons.Button");
jQuery.sap.require("sap.ui.commons.MenuButton");
jQuery.sap.require("sap.ui.commons.MenuItem");

(function() {

    /**
     * Checks that oMenuItem is in oMenu.
     * 
     * @param oMenu
     *                {sap.ui.commons.Menu}
     * @param oMenuItem
     *                {sap.ui.commons.MenuItem}
     * @return true if the oMenuItem exists in the menu, false otherwise
     * @private
     */
    function existingMenuItem(oMenu, oMenuItem) {

        if (!oMenuItem || !oMenu || oMenu.getItems().length === 0) {
            return false;
        }

        if (oMenu.indexOfItem(oMenuItem) >= 0) {
            return true;
        }

        var aItems = oMenu.getItems();
        var oSubmenu = null;

        for ( var i = 0; i < aItems.length; i++) {
            oSubmenu = aItems[i].getSubmenu();
            if (existingMenuItem(oSubmenu, oMenuItem)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Interceptor method for menu item <code>setVisible()</code> method. Resets the menu is this menu item is not visible.
     * 
     * @param oSplitButton
     *                {sap.suite.ui.commons.SplitButton} the SplitButton control
     * @return {sap.ui.commons.MenuItem} the SplitButton menu item
     * @private
     */
    function menuItemSetVisibleInterceptor(oSplitButton) {

        return function() {

            sap.ui.commons.MenuItem.prototype.setVisible.apply(oSplitButton._oMenuItem, arguments);

            if (!oSplitButton._oMenuItem.getVisible()) {
                oSplitButton.setMenu(oSplitButton._oMenuButton.getMenu());
            }
            return oSplitButton._oMenuItem;
        };
    }

    /**
     * Interceptor method for menu item <code>setIcon()</code> method. Updates default action button icon as well if it is not set.
     * 
     * @param oSplitButton
     *                {sap.suite.ui.commons.SplitButton} the SplitButton control
     * @return {sap.ui.commons.MenuItem} the SplitButton menu item
     * @private
     */
    function menuItemSetIconInterceptor(oSplitButton) {

        return function() {

            sap.ui.commons.MenuItem.prototype.setIcon.apply(oSplitButton._oMenuItem, arguments);
            if (!oSplitButton.getIcon()) {
                oSplitButton._oDefaultActionButton.setIcon(oSplitButton._oMenuItem.getIcon());
            }
            return oSplitButton._oMenuItem;
        };
    }

    /**
     * Interceptor method for menu item <code>setTooltip()</code> method. Updates default action button tooltip as well.
     * 
     * @param oSplitButton
     *                {sap.suite.ui.commons.SplitButton}the SplitButton control
     * @return {sap.ui.commons.MenuItem} the SplitButton menu item
     * @private
     */
    function menuItemSetTooltipInterceptor(oSplitButton) {

        return function() {

            sap.ui.commons.MenuItem.prototype.setTooltip.apply(oSplitButton._oMenuItem, arguments);
            oSplitButton._oDefaultActionButton.setTooltip(oSplitButton._oMenuItem.getTooltip());
            return oSplitButton._oMenuItem;
        };
    }

    /**
     * Interceptor method for menu item <code>setTooltip()</code> method. Updates default action button text as well if it is not set.
     * 
     * @param oSplitButton
     *                {sap.suite.ui.commons.SplitButton}the SplitButton control
     * @return {sap.ui.commons.MenuItem} the SplitButton menu item
     * @private
     */
    var menuItemSetTextInterceptor = function(oSplitButton) {

        return function() {

            sap.ui.commons.MenuItem.prototype.setText.apply(oSplitButton._oMenuItem, arguments);
            if (!oSplitButton.getText()) {
                oSplitButton._oDefaultActionButton.setText(oSplitButton._oMenuItem.getText());
            }
            return oSplitButton._oMenuItem;
        };
    };

    /**
     * Interceptor method for menu item <code>setEnabled()</code> method. Updates default action button as well with new property value if the control is enabled.
     * 
     * @param oSplitButton
     *                {sap.suite.ui.commons.SplitButton}the SplitButton control
     * @return {sap.ui.commons.MenuItem} the SplitButton menu item
     * @private
     */
    var menuItemSetEnabledInterceptor = function(oSplitButton) {

        return function() {

            sap.ui.commons.MenuItem.prototype.setEnabled.apply(oSplitButton._oMenuItem, arguments);
            if (oSplitButton.getEnabled()) {
                oSplitButton._oDefaultActionButton.setEnabled(oSplitButton._oMenuItem.getEnabled());
            }
            return oSplitButton._oMenuItem;
        };
    };

    /**
     * Does the setup when the SplitButton is created.
     * 
     * @private
     */
    sap.suite.ui.commons.SplitButton.prototype.init = function() {

        this._oDefaultActionButton = new sap.ui.commons.Button(this.getId() + "-defaultActionButton");
        var that = this;
        // when default button is clicked and _menuItem is set then the event
        // will be fired
        this._oDefaultActionButton.attachPress(function() {

            if (that._oMenuItem) {
                that._oMenuItem.fireSelect();
            }
        });

        this._oMenuButton = new sap.ui.commons.MenuButton(this.getId() + "-menuButton");
        this._oMenuButton.addStyleClass("sapSuiteUiCommonsSplitButton-menuButton");
        if (this.getMenu()) {
            this._oMenuButton.setMenu(this.getMenu());
        }
    };

    /**
     * Cleans up the SplitButton instance before destruction.
     * 
     * @private
     */
    sap.suite.ui.commons.SplitButton.prototype.exit = function() {

        this.destroyAggregation("menu", true);
        this._oDefaultActionButton.destroy();
        this._oDefaultActionButton = null;
        this._oMenuButton.destroy();
        this._oMenuButton = null;
    };

    /**
     * Set the menu to the button and set menu item for the action button. The menu item for action button must exist in the menu. If it doesn't exist the first menu item is set by
     * default.
     * 
     * @param oMenu
     *                {sap.ui.commons.Menu}
     * @param oMenuItem
     *                {sap.ui.commons.MenuItem}
     * @return {sap.suite.ui.commons.SplitButton} <code>this</code> to allow method chaining
     * @public
     */
    sap.suite.ui.commons.SplitButton.prototype.setMenu = function(oMenu, oMenuItem) {

        var that = this;
        this._oMenuButton.setMenu(oMenu);

        if (existingMenuItem(oMenu, oMenuItem) && oMenuItem.getVisible()) {
            this._oMenuItem = oMenuItem;
        } else {
            // set first menu item by default
            if (oMenu && oMenu.getItems()) {
                var firstMenuItem = oMenu.getItems()[0];
                if (firstMenuItem && firstMenuItem.getVisible()) {
                    this._oMenuItem = firstMenuItem;
                } else {
                    this._oMenuItem = null;
                }
            }
        }

        if (this._oMenuItem) {
            if (!this.getText()) {
                this._oDefaultActionButton.setText(this._oMenuItem.getText() || null);
            }
            if (!this.getIcon()) {
                this._oDefaultActionButton.setIcon(this._oMenuItem.getIcon() || null);
            }
            if (this.getEnabled()) {
                this._oDefaultActionButton.setEnabled(this._oMenuItem.getEnabled());
            }

            this._oDefaultActionButton.setTooltip(this._oMenuItem.getTooltip() || null);

            this._oMenuItem.setTooltip = menuItemSetTooltipInterceptor(that);
            this._oMenuItem.setText = menuItemSetTextInterceptor(that);
            this._oMenuItem.setIcon = menuItemSetIconInterceptor(that);
            this._oMenuItem.setEnabled = menuItemSetEnabledInterceptor(that);
            this._oMenuItem.setVisible = menuItemSetVisibleInterceptor(that);
        }

        return this;
    };

    /**
     * Return the menu.
     * 
     * @return {sap.ui.commons.Menu}
     * @public
     */
    sap.suite.ui.commons.SplitButton.prototype.getMenu = function() {

        return this._oMenuButton.getMenu();
    };

    /**
     * Destroy the menu.
     * 
     * @return {sap.ui.commons.Menu}
     * @public
     */
    sap.suite.ui.commons.SplitButton.prototype.destroyMenu = function() {

        this._oMenuButton.destroyMenu();
        return this;
    };

    /**
     * set enabled property for the control
     * 
     * @param bEnabled
     *                {boolean}
     * @public
     */
    sap.suite.ui.commons.SplitButton.prototype.setEnabled = function(bEnabled) {

        this._oDefaultActionButton.setEnabled(bEnabled);
        this._oMenuButton.setEnabled(bEnabled);
        this.setProperty("enabled", bEnabled);
    };

    /**
     * set lite property for the control
     * 
     * @param bLite
     *                {boolean}
     * @public
     */
    sap.suite.ui.commons.SplitButton.prototype.setLite = function(bLite) {

        this._oDefaultActionButton.setLite(bLite);
        this._oMenuButton.setLite(bLite);
        this.setProperty("lite", bLite);
    };

    /**
     * set style for the control
     * 
     * @param oStyle
     *                {sap.ui.commons.ButtonStyle}
     * @public
     */
    sap.suite.ui.commons.SplitButton.prototype.setStyle = function(oStyle) {

        this._oDefaultActionButton.setStyle(oStyle);
        this._oMenuButton.setStyle(oStyle);
        this.setProperty("style", oStyle);
    };

    /**
     * set if the control is styled or not
     * 
     * @param bStyled
     *                {boolean}
     * @public
     */
    sap.suite.ui.commons.SplitButton.prototype.setStyled = function(bStyled) {

        this._oDefaultActionButton.setStyled(bStyled);
        this._oMenuButton.setStyled(bStyled);
        this.setProperty("styled", bStyled);
    };

    /**
     * set if the icon for the action button be displayed before or after text
     * 
     * @param bIconFirst
     *                {boolean}
     * @public
     */
    sap.suite.ui.commons.SplitButton.prototype.setIconFirst = function(bIconFirst) {

        this._oDefaultActionButton.setIconFirst(bIconFirst);
        this.setProperty("iconFirst", bIconFirst);
    };

    /**
     * set icon (image) to be displayed in action button
     * 
     * @param sIcon
     *                {sap.ui.core.URI}
     * @public
     */
    sap.suite.ui.commons.SplitButton.prototype.setIcon = function(sIcon) {

        this._oDefaultActionButton.setIcon(sIcon);
        this.setProperty("icon", sIcon);
    };

    /**
     * set text for the action button
     * 
     * @param sText
     *                {string}
     * @public
     */
    sap.suite.ui.commons.SplitButton.prototype.setText = function(sText) {

        this._oDefaultActionButton.setText(sText);
        this.setProperty("text", sText);
    };

}());
