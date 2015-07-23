/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.FeedTile.
jQuery.sap.declare("sap.suite.ui.commons.FeedTile");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new FeedTile.
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
 * <li>{@link #getDisplayDuration displayDuration} : int (default: 5)</li>
 * <li>{@link #getDisplayArticleImage displayArticleImage} : boolean (default: true)</li>
 * <li>{@link #getSource source} : string</li>
 * <li>{@link #getDefaultImages defaultImages} : sap.ui.core.URI[]</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.suite.ui.commons.FeedItem[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.FeedTile#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control displays news feeds.
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @deprecated Since version 1.25. 
 * This control has been deprecated in favor of new sap.suite.ui.commons.GenericTile.
 * @name sap.suite.ui.commons.FeedTile
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.FeedTile", { metadata : {

	deprecated : true,
	library : "sap.suite.ui.commons",
	properties : {
		"displayDuration" : {type : "int", group : "Misc", defaultValue : 5},
		"displayArticleImage" : {type : "boolean", group : "Behavior", defaultValue : true},
		"source" : {type : "string", group : "Misc", defaultValue : null},
		"defaultImages" : {type : "sap.ui.core.URI[]", group : "Misc", defaultValue : null}
	},
	aggregations : {
		"items" : {type : "sap.suite.ui.commons.FeedItem", multiple : true, singularName : "item"}
	},
	events : {
		"press" : {}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.FeedTile with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.FeedTile.extend
 * @function
 */

sap.suite.ui.commons.FeedTile.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>displayDuration</code>.
 * The length of time in seconds the control displays each feed item. Default value is 5 seconds.
 *
 * Default value is <code>5</code>
 *
 * @return {int} the value of property <code>displayDuration</code>
 * @public
 * @name sap.suite.ui.commons.FeedTile#getDisplayDuration
 * @function
 */

/**
 * Setter for property <code>displayDuration</code>.
 *
 * Default value is <code>5</code> 
 *
 * @param {int} iDisplayDuration  new value for property <code>displayDuration</code>
 * @return {sap.suite.ui.commons.FeedTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FeedTile#setDisplayDuration
 * @function
 */


/**
 * Getter for property <code>displayArticleImage</code>.
 * To display article Image or not. If it is true, the article Image will be displayed based on precedence. If it is false, the default image will be displayed.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>displayArticleImage</code>
 * @public
 * @name sap.suite.ui.commons.FeedTile#getDisplayArticleImage
 * @function
 */

/**
 * Setter for property <code>displayArticleImage</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bDisplayArticleImage  new value for property <code>displayArticleImage</code>
 * @return {sap.suite.ui.commons.FeedTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FeedTile#setDisplayArticleImage
 * @function
 */


/**
 * Getter for property <code>source</code>.
 * The source of the feed item.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>source</code>
 * @public
 * @name sap.suite.ui.commons.FeedTile#getSource
 * @function
 */

/**
 * Setter for property <code>source</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSource  new value for property <code>source</code>
 * @return {sap.suite.ui.commons.FeedTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FeedTile#setSource
 * @function
 */


/**
 * Getter for property <code>defaultImages</code>.
 * A list of default images that is cycled by the control when no image is available for a feed item or when no feed items exist. After a random image is displayed first time, control cycles through this list of images.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI[]} the value of property <code>defaultImages</code>
 * @public
 * @name sap.suite.ui.commons.FeedTile#getDefaultImages
 * @function
 */

/**
 * Setter for property <code>defaultImages</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI[]} aDefaultImages  new value for property <code>defaultImages</code>
 * @return {sap.suite.ui.commons.FeedTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FeedTile#setDefaultImages
 * @function
 */


/**
 * Getter for aggregation <code>items</code>.<br/>
 * The feed items the control cycles through.
 * 
 * @return {sap.suite.ui.commons.FeedItem[]}
 * @public
 * @name sap.suite.ui.commons.FeedTile#getItems
 * @function
 */


/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.suite.ui.commons.FeedItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.FeedTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FeedTile#insertItem
 * @function
 */

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.suite.ui.commons.FeedItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.FeedTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FeedTile#addItem
 * @function
 */

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.suite.ui.commons.FeedItem} vItem the item to remove or its index or id
 * @return {sap.suite.ui.commons.FeedItem} the removed item or null
 * @public
 * @name sap.suite.ui.commons.FeedTile#removeItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.FeedItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.FeedTile#removeAllItems
 * @function
 */

/**
 * Checks for the provided <code>sap.suite.ui.commons.FeedItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.suite.ui.commons.FeedItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.suite.ui.commons.FeedTile#indexOfItem
 * @function
 */
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.suite.ui.commons.FeedTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FeedTile#destroyItems
 * @function
 */


/**
 * The event fired when the user clicks on the control.
 *
 * @name sap.suite.ui.commons.FeedTile#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.suite.ui.commons.FeedTile</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.FeedTile</code>.<br/> itself. 
 *  
 * The event fired when the user clicks on the control.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.FeedTile</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.FeedTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FeedTile#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.suite.ui.commons.FeedTile</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.FeedTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.FeedTile#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.FeedTile} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.FeedTile#firePress
 * @function
 */

// Start of sap/suite/ui/commons/FeedTile.js
///**
// * This file defines behavior for the control,
// */

(function() {

	/**
	 * Initialize the control.
	 * 
	 * @private
	 */
	sap.suite.ui.commons.FeedTile.prototype.init = function() {

		this._currentItemIndex = 0;
		this._stagedModel = null;
		this._defaultImageIndex = -1;
	};

	/**
	 * This function is called when displayDuration expires to cycle to the next FeedItem in the list.
	 * 
	 * @private
	 */
	sap.suite.ui.commons.FeedTile.prototype.cycle = function() {

		// If the staged model is not null then update the control with the new model
		// and adjust the current item index if necessary.
		if (this._stagedModel) {
			jQuery.sap.log.debug("FeedTile: Updating news tile with new model");
			this.setModel(this._stagedModel);
			this._stagedModel = null;

			var numItems = this.getItems().length;
			if (this._currentItemIndex >= numItems) {
				this._currentItemIndex = 0;
			}
			return;
		}

		var items = this.getItems();
		this._currentItemIndex = (this._currentItemIndex + 1) % items.length;

		var $oToFeed = jQuery("#" + this.getId() + "-next-feedTileImage");
		var $oFromFeed = jQuery("#" + this.getId() + "-feedTileImage");

		var oFeedTile = this;
		if (jQuery.support.cssTransitions) {
			$oToFeed.addClass("sapSuiteFTItemRight").removeClass('sapSuiteFTItemHidden');
			$oFromFeed.addClass('sapSuiteFTItemCenter');
			setTimeout(function() {

				var bOneTransitionFinished = false;
				var fAfterTransition = null; // make Eclipse aware that this variable is defined
				fAfterTransition = function() {

					jQuery(this).unbind("webkitTransitionEnd transitionend");
					if (!bOneTransitionFinished) {
						// the first one of both transitions finished
						bOneTransitionFinished = true;
					} else {
						// the second transition now also finished => clean up the style classes
						$oToFeed.removeClass("sapSuiteFTItemSliding");
						$oFromFeed.removeClass("sapSuiteFTItemSliding").addClass("sapSuiteFTItemHidden").removeClass("sapSuiteFTItemLeft").addClass("sapSuiteFTItemRight");

						$oFromFeed.detach();
						$oToFeed.after($oFromFeed);

						oFeedTile.flipIds($oToFeed, $oFromFeed);

						setTimeout(function() {

							oFeedTile.setNextItemValues(oFeedTile);
						}, 100);
						oFeedTile._timeoutId = setTimeout(function() {

							oFeedTile.cycle();
						}, oFeedTile.getDisplayDuration() * 1000);
					}
				};

				$oFromFeed.bind("webkitTransitionEnd transitionend", fAfterTransition);
				$oToFeed.bind("webkitTransitionEnd transitionend", fAfterTransition);

				$oFromFeed.addClass('sapSuiteFTItemSliding').removeClass('sapSuiteFTItemCenter').addClass('sapSuiteFTItemLeft');
				$oToFeed.addClass('sapSuiteFTItemSliding').removeClass('sapSuiteFTItemRight').addClass('sapSuiteFTItemCenter');
			}, 60); // this value has been found by testing on actual devices; with "10" there are frequent "no-animation" issues, with "100" there are none, with "50" there are
					// very few
		} else {
			$oToFeed.css("left", "100%");
			$oToFeed.removeClass("sapSuiteFTItemHidden");

			$oToFeed.animate({
				left : "0%"
			}, 400);

			$oFromFeed.animate({
				left : "-100%"
			}, 400, function() {

				$oFromFeed.addClass("sapSuiteFTItemHidden");
				$oFromFeed.css("left", "0");
				oFeedTile.flipIds($oToFeed, $oFromFeed);

				setTimeout(function() {

					oFeedTile.setNextItemValues(oFeedTile);
				}, 100);
				oFeedTile._timeoutId = setTimeout(function() {

					oFeedTile.cycle();
				}, oFeedTile.getDisplayDuration() * 1000);
			});
		}

	};

	/**
	 * This function is called after the FeedTile is rendered
	 * 
	 * @private
	 */
	sap.suite.ui.commons.FeedTile.prototype.onAfterRendering = function() {

		var displayDuration = this.getDisplayDuration() * 1000;
		var that = this;

		if (this.getItems().length > 1) {
			if (typeof this._timeoutId === "number") {
				clearTimeout(this._timeoutId);
				delete this._timeoutId;
			}
			this._timeoutId = setTimeout(function() {

				that.cycle();
			}, displayDuration);
		}

	};

	/**
	 * Fire press event.
	 * 
	 * @private
	 */
	sap.suite.ui.commons.FeedTile.prototype.onclick = function(oEvent) {

		//always fire the event
		var currentItem = this.getCurrentItem();
		var id = "";
		
		if (currentItem && currentItem.getId()) {
			id = currentItem.getId();
		}
		
		this.firePress({
			itemId : id
		});
		
	};

	/**
	 * Get the currently rendered FeedItem.
	 * 
	 * @private
	 */
	sap.suite.ui.commons.FeedTile.prototype.getCurrentItem = function() {

		var items = this.getItems();
		if (items.length) {
			return items[this._currentItemIndex];
		}
	};

	/**
	 * Get the next rendered FeedItem.
	 * 
	 * @private
	 */
	sap.suite.ui.commons.FeedTile.prototype.getNextItem = function() {

		var items = this.getItems();
		if (items.length && items.length > 1) {
			return items[(this._currentItemIndex + 1) % items.length];
		}
	};

	/**
	 * Get the next rendered FeedItem.
	 * 
	 * @private
	 */
	sap.suite.ui.commons.FeedTile.prototype.setNextItemValues = function() {

		var oNextItem = this.getNextItem();
		var id = this.getId();

		var oBackgroundImage = oNextItem.getImage();
		if (!oBackgroundImage || !this.getDisplayArticleImage()) {
			oBackgroundImage = this.getDefaultImage();
		}

		jQuery("#" + id + "-next-feedTileImage").css("background-image", "url(" + jQuery.sap.encodeCSS(oBackgroundImage) + ")");
		jQuery("#" + id + "-next-feedTileTitle").html(jQuery.sap.encodeHTML(oNextItem.getTitle()));
		jQuery("#" + id + "-next-feedTileSource").html(jQuery.sap.encodeHTML(oNextItem.getSource()));
		jQuery("#" + id + "-next-feedTileAge").html(jQuery.sap.encodeHTML(sap.suite.ui.commons.util.FeedItemUtils.calculateFeedItemAge(oNextItem.getPublicationDate())));
	};

	/**
	 * Flip ids of feedTileImage, feedTileText, feedTileTitle, feedTileSource, feedTileAge.
	 * 
	 * @private
	 */
	sap.suite.ui.commons.FeedTile.prototype.flipIds = function($oToFeed, $oFromFeed) {

		var id = this.getId();
		$oFromFeed.attr("id", id + "-next-feedTileImage");
		$oFromFeed.find("#" + id + "-feedTileText").attr("id", id + "-next-feedTileText");
		$oFromFeed.find("#" + id + "-feedTileTitle").attr("id", id + "-next-feedTileTitle");
		$oFromFeed.find("#" + id + "-feedTileSource").attr("id", id + "-next-feedTileSource");
		$oFromFeed.find("#" + id + "-feedTileAge").attr("id", id + "-next-feedTileAge");

		$oToFeed.attr("id", id + "-feedTileImage");
		$oToFeed.find("#" + id + "-next-feedTileText").attr("id", id + "-feedTileText");
		$oToFeed.find("#" + id + "-next-feedTileTitle").attr("id", id + "-feedTileTitle");
		$oToFeed.find("#" + id + "-next-feedTileSource").attr("id", id + "-feedTileSource");
		$oToFeed.find("#" + id + "-next-feedTileAge").attr("id", id + "-feedTileAge");
	};

	/**
	 * Set displayDuration property for the control
	 * 
	 * @param iDisplayDuration
	 *            {int}
	 * @public
	 */
	sap.suite.ui.commons.FeedTile.prototype.setDisplayDuration = function(iDisplayDuration) {

		if (iDisplayDuration < 3) {

			iDisplayDuration = 3;
			jQuery.sap.log.error("FeedTile: displayDuration should be equal or more than 3 seconds.");
		}
		this.setProperty("displayDuration", iDisplayDuration);
	};


	/**
	 * Set a new model of feed items, such as when a feed aggregator has collected the latest feed items. This model is staged (not immediately set on the control) to avoid
	 * re-rendering before the currently displayed article is faded out. Therefore a smooth transition between the display of feed items is always maintained.
	 * 
	 * @param oModel
	 *            Model of new feed items.
	 * @public
	 */
	sap.suite.ui.commons.FeedTile.prototype.stageModel = function(oModel) {

		this._stagedModel = oModel;
	};
	
	/**
	 * This function gets the image to display from the list of default images. If it is the first time, it gets a random image. Next times, it cycles through
	 * the list.
	 * 
	 * @private
	 */
	sap.suite.ui.commons.FeedTile.prototype.getDefaultImage = function() {

		var oDefaultImage = "";
		var oDefaultImages = this.getDefaultImages();
 
		if (oDefaultImages && oDefaultImages.length > 0) {
			var iLength = oDefaultImages.length;
			if (this._defaultImageIndex === -1) { //this is first time, select random image
		
				var iRandom = Math.floor(Math.random() * iLength); 
				this._defaultImageIndex = iRandom;
				oDefaultImage = oDefaultImages[iRandom];
			} else { //this is not the first time, get the next image from list
				var iIndex = (this._defaultImageIndex + 1) >= iLength ? 0 : this._defaultImageIndex + 1;
				this._defaultImageIndex = iIndex;
				oDefaultImage = oDefaultImages[iIndex];
			} 
		}
		
		return oDefaultImage; 
	};
	
	/**
	 * Validate the array of URI first and then set the defaultImages property
	 * 
	 * @param oDefaultImages
	 *            {object[]}
	 * @public
	 */
	sap.suite.ui.commons.FeedTile.prototype.setDefaultImages = function(oDefaultImages) {

		if (oDefaultImages && oDefaultImages.length > 0) {
		
			var oValidDefaultImages = [];
			var oDefaultImage = null;
			for (var i = 0; i < oDefaultImages.length; i++) {
				oDefaultImage = oDefaultImages[i];
				var validUrl = jQuery.sap.validateUrl(oDefaultImage);
				 
				if (validUrl) {
					oValidDefaultImages.push(oDefaultImage);
				} else {
					jQuery.sap.log.error("Invalid Url:'" + oDefaultImage);
				}
			}
				
			if (oValidDefaultImages.length <= 0) {
				jQuery.sap.log.error("Default Images are not set because supplied Urls are invalid");
			} else {
				this.setProperty("defaultImages", oValidDefaultImages);
			}
		}
	};

}());
