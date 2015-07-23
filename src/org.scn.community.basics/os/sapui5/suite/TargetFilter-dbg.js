/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.suite.ui.commons.TargetFilter.
jQuery.sap.declare("sap.suite.ui.commons.TargetFilter");
jQuery.sap.require("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new TargetFilter.
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
 * <li>{@link #getEntitySet entitySet} : string</li>
 * <li>{@link #getMeasureColumnName measureColumnName} : string</li>
 * <li>{@link #getSelectedColumnNames selectedColumnNames} : string[]</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getColumns columns} : sap.suite.ui.commons.TargetFilterColumn[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedColumns selectedColumns} : string | sap.suite.ui.commons.TargetFilterColumn</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.suite.ui.commons.TargetFilter#event:search search} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.suite.ui.commons.TargetFilter#event:filterChange filterChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The filter control for the SmartTable control
 * @extends sap.ui.core.Control
 * @version 1.30.3
 *
 * @constructor
 * @public
 * @experimental Since version 1.29. 
 * API is not yet finished and might change completely.
 * @name sap.suite.ui.commons.TargetFilter
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.suite.ui.commons.TargetFilter", { metadata : {

	library : "sap.suite.ui.commons",
	properties : {
		"entitySet" : {type : "string", group : "Misc", defaultValue : null},
		"measureColumnName" : {type : "string", group : "Misc", defaultValue : null},
		"selectedColumnNames" : {type : "string[]", group : "Misc", defaultValue : null}
	},
	aggregations : {
		"columns" : {type : "sap.suite.ui.commons.TargetFilterColumn", multiple : true, singularName : "column"}, 
		"_dialog" : {type : "sap.m.SelectDialog", multiple : false, visibility : "hidden"}, 
		"_countDisplay" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}, 
		"_quad0" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}, 
		"_quad1" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}, 
		"_quad2" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}, 
		"_quad3" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}
	},
	associations : {
		"selectedColumns" : {type : "sap.suite.ui.commons.TargetFilterColumn", multiple : true, singularName : "selectedColumn"}
	},
	events : {
		"search" : {}, 
		"filterChange" : {}
	}
}});


/**
 * Creates a new subclass of class sap.suite.ui.commons.TargetFilter with name <code>sClassName</code> 
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
 * @name sap.suite.ui.commons.TargetFilter.extend
 * @function
 */

sap.suite.ui.commons.TargetFilter.M_EVENTS = {'search':'search','filterChange':'filterChange'};


/**
 * Getter for property <code>entitySet</code>.
 * Entity set
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>entitySet</code>
 * @public
 * @name sap.suite.ui.commons.TargetFilter#getEntitySet
 * @function
 */

/**
 * Setter for property <code>entitySet</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sEntitySet  new value for property <code>entitySet</code>
 * @return {sap.suite.ui.commons.TargetFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TargetFilter#setEntitySet
 * @function
 */


/**
 * Getter for property <code>measureColumnName</code>.
 * aggregationColumnName
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>measureColumnName</code>
 * @public
 * @name sap.suite.ui.commons.TargetFilter#getMeasureColumnName
 * @function
 */

/**
 * Setter for property <code>measureColumnName</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sMeasureColumnName  new value for property <code>measureColumnName</code>
 * @return {sap.suite.ui.commons.TargetFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TargetFilter#setMeasureColumnName
 * @function
 */


/**
 * Getter for property <code>selectedColumnNames</code>.
 * selected columns
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string[]} the value of property <code>selectedColumnNames</code>
 * @public
 * @name sap.suite.ui.commons.TargetFilter#getSelectedColumnNames
 * @function
 */

/**
 * Setter for property <code>selectedColumnNames</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string[]} aSelectedColumnNames  new value for property <code>selectedColumnNames</code>
 * @return {sap.suite.ui.commons.TargetFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TargetFilter#setSelectedColumnNames
 * @function
 */


/**
 * Getter for aggregation <code>columns</code>.<br/>
 * columns
 * 
 * @return {sap.suite.ui.commons.TargetFilterColumn[]}
 * @public
 * @name sap.suite.ui.commons.TargetFilter#getColumns
 * @function
 */


/**
 * Inserts a column into the aggregation named <code>columns</code>.
 *
 * @param {sap.suite.ui.commons.TargetFilterColumn}
 *          oColumn the column to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the column should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the column is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the column is inserted at 
 *             the last position        
 * @return {sap.suite.ui.commons.TargetFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TargetFilter#insertColumn
 * @function
 */

/**
 * Adds some column <code>oColumn</code> 
 * to the aggregation named <code>columns</code>.
 *
 * @param {sap.suite.ui.commons.TargetFilterColumn}
 *            oColumn the column to add; if empty, nothing is inserted
 * @return {sap.suite.ui.commons.TargetFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TargetFilter#addColumn
 * @function
 */

/**
 * Removes an column from the aggregation named <code>columns</code>.
 *
 * @param {int | string | sap.suite.ui.commons.TargetFilterColumn} vColumn the column to remove or its index or id
 * @return {sap.suite.ui.commons.TargetFilterColumn} the removed column or null
 * @public
 * @name sap.suite.ui.commons.TargetFilter#removeColumn
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>columns</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.suite.ui.commons.TargetFilterColumn[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.TargetFilter#removeAllColumns
 * @function
 */

/**
 * Checks for the provided <code>sap.suite.ui.commons.TargetFilterColumn</code> in the aggregation named <code>columns</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.suite.ui.commons.TargetFilterColumn}
 *            oColumn the column whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.suite.ui.commons.TargetFilter#indexOfColumn
 * @function
 */
	

/**
 * Destroys all the columns in the aggregation 
 * named <code>columns</code>.
 * @return {sap.suite.ui.commons.TargetFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TargetFilter#destroyColumns
 * @function
 */


/**
 * doc
 * 
 * @return {string[]}
 * @public
 * @name sap.suite.ui.commons.TargetFilter#getSelectedColumns
 * @function
 */

	
/**
 *
 * @param {string | sap.suite.ui.commons.TargetFilterColumn} vSelectedColumn
 *    Id of a selectedColumn which becomes an additional target of this <code>selectedColumns</code> association.
 *    Alternatively, a selectedColumn instance may be given. 
 * @return {sap.suite.ui.commons.TargetFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TargetFilter#addSelectedColumn
 * @function
 */

/**
 * @param {int | string | sap.suite.ui.commons.TargetFilterColumn} vSelectedColumn the selectedColumn to remove or its index or id
 * @return {string} the id of the removed selectedColumn or null
 * @public
 * @name sap.suite.ui.commons.TargetFilter#removeSelectedColumn
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.suite.ui.commons.TargetFilter#removeAllSelectedColumns
 * @function
 */

	
/**
 * This event is fired if the button 'Search' is executed.
 *
 * @name sap.suite.ui.commons.TargetFilter#search
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'search' event of this <code>sap.suite.ui.commons.TargetFilter</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.TargetFilter</code>.<br/> itself. 
 *  
 * This event is fired if the button 'Search' is executed.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.TargetFilter</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.TargetFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TargetFilter#attachSearch
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'search' event of this <code>sap.suite.ui.commons.TargetFilter</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.TargetFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TargetFilter#detachSearch
 * @function
 */

/**
 * Fire event search to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.TargetFilter} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.TargetFilter#fireSearch
 * @function
 */


/**
 * Event fired when the filter criteria has changed.
 *
 * @name sap.suite.ui.commons.TargetFilter#filterChange
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'filterChange' event of this <code>sap.suite.ui.commons.TargetFilter</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.suite.ui.commons.TargetFilter</code>.<br/> itself. 
 *  
 * Event fired when the filter criteria has changed.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.commons.TargetFilter</code>.<br/> itself.
 *
 * @return {sap.suite.ui.commons.TargetFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TargetFilter#attachFilterChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'filterChange' event of this <code>sap.suite.ui.commons.TargetFilter</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.suite.ui.commons.TargetFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.suite.ui.commons.TargetFilter#detachFilterChange
 * @function
 */

/**
 * Fire event filterChange to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.suite.ui.commons.TargetFilter} <code>this</code> to allow method chaining
 * @protected
 * @name sap.suite.ui.commons.TargetFilter#fireFilterChange
 * @function
 */

// Start of sap/suite/ui/commons/TargetFilter.js
///**
// * This file defines behavior for the control,
// */
sap.m.ComboBox.extend("sap.suite.ui.commons.TargetFilterComboBox", {
	metadata : {
		properties : {
			popoverPlacement : {
				type : "sap.m.PlacementType",
				group : "Misc",
				defaultValue : sap.m.PlacementType.Bottom
			}
		}
	},

	_createPopover : function() {
		var oPicker = new sap.m.Popover({
			showHeader : false,
			placement : this.getPopoverPlacement(),
			offsetX : 0,
			offsetY : 0,
			initialFocus : this,
			bounce : false
		});
		oPicker.addStyleClass("TFComboBox");

		this._decoratePopover(oPicker);
		return oPicker;
	},
	
	renderer : function(oRm, oControl) {
		sap.m.ComboBoxRenderer.render.apply(this, arguments);
	}
});

sap.m.Link.extend("sap.suite.ui.commons.TargetFilterLink", {
	metadata : {
		properties : {
			count : {
				type : "sap.ui.core/int"
			}
		}
	},

	renderer : function(oRm, oControl) {
		sap.m.LinkRenderer.render.apply(this, arguments);
	}
});

sap.ui.core.Control.extend(
				"sap.suite.ui.commons.TargetFilterLinksCloud",
				{
					metadata : {
						properties : {
							index : {
								type : "sap.ui.core/int"
							}
						},
						aggregations : {
							links : {
								cardinality : "0..n",
								type : "sap.suite.ui.commons.TargetFilterLink"
							}
						}
					},

					_setFontSizes : function(aLinks) {
						var aLabelSizes = [ "Largest", "Large", "Medium", "Small", "Smallest" ];
						var aOccurrencies = jQuery.unique(aLinks.map(function(o) {	return o.getCount(); })); // Unique values of occurrence
						switch (aOccurrencies.length) {
						case 1:
							for (var iLine = 0; iLine < aLinks.length; iLine++) {
								aLinks[iLine].addStyleClass(aLabelSizes[2]);
							}

							break; // for a single occurrence value - use font in the middle
						case 2:
							for (var iLine = 0; iLine < aLinks.length; iLine++) {
								if (aOccurrencies[0] == aLinks[iLine]
										.getCount()) {
									aLinks[iLine].addStyleClass(aLabelSizes[1]);
								} else {
									aLinks[iLine].addStyleClass(aLabelSizes[3]);
								}
							}
							break;
						default:
							var iOccMin = Math.min.apply(null, aOccurrencies);
							var iOccMax = Math.max.apply(null, aOccurrencies);
							for (var iLine = 0; iLine < aLinks.length; iLine++) {
								var iSize = Math.floor(4.99	* (iOccMax - aLinks[iLine].getCount()) / (iOccMax - iOccMin));
								aLinks[iLine].addStyleClass(aLabelSizes[iSize]); // Apply label sizes (0..4) by occurrence
							}
						}
					},

					renderer : function(oRm, oControl) {
						var oTfQuadrant = oControl.getParent();
						var aLinks = oControl.getLinks();
						oRm.write("<div");
						oRm.writeControlData(oControl);
						oRm.addClass("sapSuiteUiTFLinksCloud");
						oRm.writeClasses();
						oRm.write(">");
						oControl._setFontSizes(aLinks);
						for (var i = 0; i < aLinks.length; i++) {
							if (!oTfQuadrant._oFilters[aLinks[i].getText()]) {
								aLinks[i].addStyleClass("Unselected");
							}
							oRm.renderControl(aLinks[i]);
						}
						oRm.write("</div>");
					},
					
					updateDirtyFlag: function() {
						var oTfQuadrant = this.getParent();
						if (Object.getOwnPropertyNames(oTfQuadrant._oFilters).length) {
							this.$().addClass("Dirty");
						} else {
							this.$().removeClass("Dirty");
						}
					},

					onAfterRendering : function() {
						this.drawCloudCircle();
						this.updateDirtyFlag();
					},
					
					calculateBgSquare : function() {
						var iSquare = 0;
						for (var i = 0; i < this._bgArea.length; i++) {
							var iWidth = this._bgArea[i].width;
							iSquare += (iWidth > 0) ? iWidth : 0;
						}
						return iSquare;
					},
					
					calculateLinesSquare : function(oLines) {
						var iSquare = 0;
						oLines.each(function() {
							var oLine = jQuery(this);
							iSquare += (1 + parseInt(oLine.outerWidth(true)) * parseInt(oLine.outerHeight(true)));
						});
						return iSquare;
					},

					drawCloudCircle : function() {
						var iOuterCircleRadius = parseInt(jQuery(".sapSuiteUiTFOuterCircle").outerWidth(true) / 2) - 3;
						var iCentralCircleRadius = parseInt(jQuery(".sapSuiteUiTFCentralCircle").outerWidth(true) / 2) + 3;
						var iVisibleHeight = parseInt(jQuery(".sapSuiteUiTFOuterCont").outerHeight(true) / 2);
						var bIsPhone = jQuery("html").hasClass("sapUiMedia-Std-Phone");
						var iBoxHeight = parseInt(jQuery(".sapSuiteUiTFParCont").outerHeight(true));
						var iBoxWidth = 90;
						if (bIsPhone) {
							iVisibleHeight = 200;
							iBoxWidth = 200;
						}
						this.initQuadArea(iOuterCircleRadius - 16,	iVisibleHeight - 16, iCentralCircleRadius + 16,	iBoxHeight + 16, iBoxWidth + 16, 16);
						var that = this;
						var iQuad = this.getIndex();
						var aPlaced;
						var oLines = jQuery(".sapSuiteUiTFLine.Quad"+ iQuad);
						if (oLines.length != 0) {
							var oLinkOthers = jQuery(".sapSuiteUiTFOthersLine.Quad" + iQuad);
							var bLinkOthers = oLinkOthers.length !== 0;
	
							var iBgSquare = this.calculateBgSquare();
							var iLinesSquare = this.calculateLinesSquare(oLines);
							var fSquareFactor = iBgSquare / iLinesSquare; 
	
							var iQuadrantAttempts = 3;
							do {
								aPlaced = [];
								if (bLinkOthers) {
									// pre-place line "+ N other"
									if (iQuad <= 1) { // place at minimal possible Y coordinates
										var aPlacements = that.findPlacements(parseInt(oLinkOthers.outerWidth(true)), parseInt(oLinkOthers.outerHeight(true)));
										aPlaced.push(that.placeLine(oLinkOthers, aPlacements[0], iQuad, true, iOuterCircleRadius));
									} else { // place at maximal possible Y coordinates
										var aPlacements = that.findPlacements(parseInt(oLinkOthers.outerWidth(true)), parseInt(oLinkOthers.outerHeight(true)));
										aPlaced.push(that.placeLine(oLinkOthers, aPlacements[aPlacements.length - 1], iQuad, true, iOuterCircleRadius));
									}
								}
								var bVisible = true;
								oLines.each(function() {
									var oLine = jQuery(this);
									if (!bVisible) {
										oLine.addClass("Hidden");
										return;
									}
										
									var iRealLineWidth = parseInt(oLine.outerWidth(true)) + 1;
									if (fSquareFactor < .9) { // Need to do narrowing of the keywords
									//if (iQuadrantAttempts == 0) { // Last attempt - allow narrowing the keywords
										var bPlaced = false;
										var bFirstLoop = true;
										var iLineWidth = iRealLineWidth;
										do {
											var aPlacements = that.findPlacements(iLineWidth, parseInt(oLine.outerHeight(true)));
											var iAttempts = Math.min(aPlacements.length, 10);
											while (iAttempts-- > 0) { // try to randomly place the keyword
												var oPlacementAttempt = that.placeLine(oLine, aPlacements[Math.floor(Math.random() * aPlacements.length)],	1 + iQuad,	false,	iOuterCircleRadius);
												if (!that.isIntersecting(oPlacementAttempt,	aPlaced)) {
													aPlaced.push(oPlacementAttempt);
													bPlaced = true;
													break;
												}
											}
											if (!bPlaced && bFirstLoop) {
												iLineWidth -= parseInt(iLineWidth * fSquareFactor);  // to speed up, on the first loop we diminish size depending on square factor.
											}
											bFirstLoop = false;
										} while (!bPlaced && (iLineWidth --) > parseInt(oLine.css("min-width"))); // if there is no place for the line - try narrowing the line
										if (!bPlaced) { // If failed to place next line - hide this line and all the next lines in quadrant
											bVisible = false;
										}
										if (!bVisible) {
											oLine.addClass("Hidden");
										}
									} else { // Try to place keyword without narrowing
										var aPlacements = that.findPlacements(iRealLineWidth, parseInt(oLine.outerHeight(true)));
										var iAttempts = Math.min(aPlacements.length, 10);
										while (iAttempts-- > 0) { // try to randomly place the keyword
											var oPlacementAttempt = that.placeLine(oLine, aPlacements[Math.floor(Math.random() * aPlacements.length)], 1 + iQuad, false, iOuterCircleRadius);
											if (!that.isIntersecting(oPlacementAttempt, aPlaced)) {
												aPlaced.push(oPlacementAttempt);
												break;
											}
										}
									}
							});
							} while (oLines.length + (bLinkOthers ? 1 : 0) > aPlaced.length	&& iQuadrantAttempts-- > 0); // if we haven't found the way to place all keywords - try again iQuadrantAttempts times
							for (var iPl = 0; iPl < aPlaced.length; iPl++) { // do actual placement
								var oPlaced = aPlaced[iPl].line;
								oPlaced.css("top", "" + aPlaced[iPl].y1 + "px");
								oPlaced.css("left", "" + aPlaced[iPl].x1 + "px");
								oPlaced.outerWidth("" + aPlaced[iPl].lineWidth + "px");
							}
						}
					},

					isIntersecting : function(oPl, aPlaced) {
						for (var i = 0; i < aPlaced.length; i++) {
							if (Math.max(0, Math.min(oPl.x2, aPlaced[i].x2)	- Math.max(oPl.x1, aPlaced[i].x1)) * Math.max(0, Math.min(oPl.y2, aPlaced[i].y2) - Math.max(oPl.y1, aPlaced[i].y1)) > 0) {
								return true;
							}
						}
						return false;
					},

					initQuadArea : function(iOuterRadius, iVisibleHeight,
							iInnerRadius, iBoxHeight, iBoxWidth, iAxisMargin) {
						var bIsPhone = jQuery("html").hasClass(
								"sapUiMedia-Std-Phone");
						this._bgArea = new Array(iVisibleHeight);
						for (var i = 0; i <= iVisibleHeight; i++) { // limit available space with outer radius and visible height
							this._bgArea[i] = {
								start : iAxisMargin,
								width : parseInt(Math.sqrt(iOuterRadius	* iOuterRadius - i * i))
							};
							if (i <= iInnerRadius) { // limit available space with inner circle
								this._bgArea[i].start = parseInt(Math.sqrt(iInnerRadius * iInnerRadius - i * i));
								this._bgArea[i].width -= this._bgArea[i].start;
							}
							if (i <= iAxisMargin) { // prohibit placing lines near the axis
								this._bgArea[i].width = 0;
							}
							if (i <= iBoxHeight) { // limit available space with combo box
								this._bgArea[i].width -= iBoxWidth;
							} else { // limit available width with visible width on phone layout
								if (bIsPhone) {
									this._bgArea[i].width = Math.min(this._bgArea[i].width, 160);
								}
							}
						}
					},

					findPlacements : function(iWidth, iHeight) {
						var aPlacements = [];
						var iBgHeight = this._bgArea.length; // number of lines in bg area
						for (var i = 0; i <= iBgHeight - iHeight; i++) { // loop through possible start Y
							var iMaxStart = 0;
							var iMinBgWidth = this._bgArea[i].width;
							var bCanBePlaced = true;
							for (var j = i; j < i + iHeight; j++) { // see if it can be placed
								var iBgLine = this._bgArea[j];
								if (iWidth > iBgLine.width) {
									bCanBePlaced = false;
									break;
								}
								if (iBgLine.start > iMaxStart) {
									iMaxStart = iBgLine.start;
								}
								if (iBgLine.width < iMinBgWidth) {
									iMinBgWidth = iBgLine.width;
								}
							}
							if (bCanBePlaced) {
								aPlacements.push({
									x : iMaxStart,
									y : i,
									lineWidth : iWidth,
									availableWidth : iMinBgWidth
								});
							}
						}
						return aPlacements;
					},

					placeLine : function(oLine, oPlacement, iQuad, bCentered, iRadius) {
						var iXshift = Math.floor((oPlacement.availableWidth - oPlacement.lineWidth)	* (bCentered ? .5 : Math.random()));
						var iX = oPlacement.x + iXshift; // place randomly in available horizontal space
						var iY = oPlacement.y;
						if (iQuad == 4) {
							iX = iRadius + iX;
							iY = iRadius + iY;
						} else if (iQuad == 1) {
							iX = iRadius + iX;
							iY = iRadius - iY - oLine.outerHeight(true);
						} else if (iQuad == 2) {
							iX = iRadius - iX - oPlacement.lineWidth;
							iY = iRadius - iY - oLine.outerHeight(true);
						} else {
							iX = iRadius - iX - oPlacement.lineWidth;
							iY = iRadius + iY;
						}
						return {
							x1 : iX,
							x2 : iX + oPlacement.lineWidth,
							y1 : iY,
							y2 : iY + oLine.outerHeight(true),
							lineWidth : oPlacement.lineWidth,
							line : oLine
						};
					}
				});

sap.ui.core.Control.extend("sap.suite.ui.commons.TargetFilterQuadrant", {
	metadata: {
		properties : {
			index : {type : "sap.ui.core/int"}
		},
		aggregations: {
			linkClouds : {cardinality : "0..n", type : "sap.suite.ui.commons.TargetFilterLinksCloud"}
		}
	 },
	 
	 init: function() {
		var that = this;
		 
		this._oFilterCb = new sap.suite.ui.commons.TargetFilterComboBox(this.getId() + "-cb", {
			selectionChange : function() {
				that.setColumn(this.getSelectedKey(), true);
			},
		});
		
		this._oValueHelpBtn = new sap.m.Button(this.getId() + "-btn", {
			icon : "sap-icon://value-help",
			press : function() {
				that.fnShowValueHelper();
			}
		});
		
		this.addLinkCloud(new sap.suite.ui.commons.TargetFilterLinksCloud(this.getId() + "-links"));
	 },

	setProperty : function(sPropertyName, iValue, bSuppressInvalidate) {
		sap.ui.core.Element.prototype.setProperty.apply(this, arguments);
		if (sPropertyName === "index") {
			if (iValue == 0 || iValue == 1) {
				this._oFilterCb.setPopoverPlacement(sap.m.PlacementType.VerticalPreferedTop)
					.addStyleClass("sapSuiteTFCBTop");
			} else {
				this._oFilterCb.setPopoverPlacement(sap.m.PlacementType.VerticalPreferedBottom);
			}
			
			if (iValue == 0 || iValue == 3) {
				this._oFilterCb.addStyleClass("sapSuiteTFCBArrowBeforeVal");
			}
			
			this.getLinkClouds()[0].setIndex(iValue);
		}
	},
	
	setColumn: function(sColumnId, bDontUpdateFilter) {
		this._oColumn = sap.ui.getCore().byId(sColumnId);
		
		if (this._oColumn) {
			this._oFilters = {};
			
			if (!bDontUpdateFilter) {
				this._oFilterCb.setSelectedKey(sColumnId);
			}
			
			var oTf = this.getParent();
			var that = this;
			var oRowTmpl = new sap.suite.ui.commons.TargetFilterLink({
				text : "{" + this._oColumn.getName() + "}",
				count : "{" + oTf.getMeasureColumnName() + "}",
				press : function(oEvent) {
//					oTf._oSelLst.addItem(new sap.m.StandardListItem({
//						title : this.getText()
//					}));
					if (that._oFilters[this.getText()]) {
						delete that._oFilters[this.getText()];
						this.$().addClass("Unselected");
					} else {
						that._oFilters[this.getText()] = new sap.ui.model.Filter(that._oColumn.getName(),
							sap.ui.model.FilterOperator.EQ, this.getText());
							
						this.$().removeClass("Unselected");
					}
					that.getLinkClouds()[0].updateDirtyFlag();
				}
			});
			oRowTmpl.addStyleClass("sapSuiteUiTFLine");
			oRowTmpl.addStyleClass("Quad" + this.getIndex());
		
			this.getLinkClouds()[0].bindAggregation("links", {
				path : "/" + oTf.getEntitySet(),
				parameters : {
					select : this._oColumn.getName() + "," + oTf.getMeasureColumnName()
				},
				template : oRowTmpl,
				length : 25,
				sorter : [ new sap.ui.model.Sorter(oTf.getMeasureColumnName(), true),
						new sap.ui.model.Sorter(this._oColumn.getName(), false) ]
			});
		} else {
			this.getLinkClouds()[0].removeAllLinks();
		}
	},
	
	fnShowValueHelper: function() {
		var oTf = this.getParent();
		
		var oItem = new sap.m.StandardListItem({
			title : "{" + this._oColumn.getName() + "}",
			description : {
				path : oTf.getMeasureColumnName(),
				formatter : function(iNum) {
					return "Entries " + iNum
				}
			},
		// selected: "{selected}"
		});
	
		oTf._oSelectDialog.bindAggregation("items", {
			path : "/" + oTf.getEntitySet(),
			parameters : {
				select : this._oColumn.getName() + "," + oTf.getMeasureColumnName()
			},
			sorter : [ new sap.ui.model.Sorter(oTf.getMeasureColumnName(), true),
					new sap.ui.model.Sorter(this._oColumn.getName(), false) ],
			template : oItem
		});
	
		oTf._oSelectDialog._oColumn = this._oColumn;
		oTf._oSelectDialog.setTitle(this._oColumn.getTitle()),
		oTf._oSelectDialog.open();
	},
	
	rebindColumns: function() {
		var oTf = this.getParent();
		this._oFilterCb.removeAllItems();

		for (var i = 0; i < oTf.getColumns().length; i++) {
			var oColumn = oTf.getColumns()[i];

			var oItem = new sap.ui.core.Item({
				key : oColumn.getId(),
				text : oColumn.getTitle()
			});
			this._oFilterCb.addItem(oItem);
		}

		if (oTf.getSelectedColumns() && oTf.getSelectedColumns()[this.getIndex()]) {
			this.setColumn(oTf.getSelectedColumns()[this.getIndex()]);
		} else if (oTf.getColumns()[this.getIndex()]) {
			this.setColumn(oTf.getColumns()[this.getIndex()].getId());
		} else {
			this.setColumn();
		}
	},
	
	 exit: function() {
		 this._oFilterCb.destroy();
		 this._oValueHelpBtn.destroy();
	 },
	 
	renderer : function(oRm, oControl) {
		oRm.write("<div");
		oRm.writeControlData(oControl);
		oRm.addClass("sapSuiteUiTFQuadrant");
		oRm.addClass("Quad" + oControl.getIndex());
		oRm.writeClasses();
			oRm.write(">");
			 oRm.write("<div");
			 oRm.addClass("sapSuiteUiTFParCont");
			 oRm.addClass("Quad" + oControl.getIndex());
			 oRm.writeClasses();
			 oRm.write(">");
			 	oRm.renderControl(oControl._oFilterCb);
			 oRm.write("</div>");

			 oRm.write("<div");
			 oRm.addClass("sapSuiteUiTFValHel");
			 oRm.addClass("Quad" + oControl.getIndex());
			 oRm.writeClasses();
			 oRm.write(">");
			 	oRm.renderControl(oControl._oValueHelpBtn);
			 oRm.write("</div>");
			 
			 oRm.renderControl(oControl.getLinkClouds()[0]);
		oRm.write("</div>");
	}
 });

sap.ui.core.Control.extend("sap.suite.ui.commons.TargetFilterCountDisplay", {
	metadata : {
		aggregations : {
			counts : {
				cardinality : "0..n",
				type : "sap.suite.ui.commons.TargetFilterCount"
			}
		}
	},

	renderer : function(oRm, oControl) {
		oRm.write("<div");
		oRm.writeControlData(oControl);
		oRm.addClass("sapSuiteUiTFCentralLabel");
		oRm.writeClasses();
		oRm.write(">");
		if (oControl.getCounts().length) {
			oRm.write(oControl.getCounts()[0].getCount());
		}
		oRm.write("</div>");
	}
});

sap.ui.core.Element.extend("sap.suite.ui.commons.TargetFilterCount", {
	metadata : {
		properties : {
			count : {
				type : "sap.ui.core/int"
			}
		},
		events : {
			countUpdated : {}
		}
	},

	setProperty : function(sPropertyName, oValue, bSuppressInvalidate) {
		sap.ui.core.Element.prototype.setProperty.apply(this, arguments);
		if (sPropertyName === "count") {
			this.fireCountUpdated({});
		}
	}
});

sap.suite.ui.commons.TargetFilter.prototype.init = function() {
	sap.ui.Device.media.attachHandler(this.rerender, this,
			sap.ui.Device.media.RANGESETS.SAP_STANDARD);

	var that = this;
	
	this._aQudrants = [];
	for (var i = 0; i < 4; i++) {
		var oQuad = new sap.suite.ui.commons.TargetFilterQuadrant(this.getId() + "-quad" + i, {index: i});
		this._aQudrants.push(oQuad);
		this.setAggregation("_quad" + i, oQuad);
	}	

	this._oSearchBtn = new sap.m.Button(this.getId() + "-search", {
		icon : "sap-icon://initiative",
		press : function() {
		}
	}).addStyleClass("sapSuiteUiTFSearchBtn");

	this._oSettingsBtn = new sap.m.Button(this.getId()
			+ "-master-settings-button", {
		icon : "sap-icon://action-settings"
	});

	this._oSearchFieldLbl = new sap.m.Label(this.getId()
			+ "-search-field-label", {
		text : "Search other keyword",
		labelFor : this.getId() + "-search-field"
	});

	this._oSearchField = new sap.m.SearchField(this.getId() + "-search-field");

	this._oSelLstLbl = new sap.m.Label(this.getId() + "-selection-list-label",
			{
				text : "Your selection",
				labelFor : this.getId() + "-selection-list"
			});

	this._oSelLst = new sap.m.List(this.getId() + "-selection-list", {
		mode : "Delete",
		"delete" : this.fnHandleDelete,
		enableBusyIndicator : true,
		showSeparators : "None",
		growing : true
	});

	this._oScrollCont = new sap.m.ScrollContainer(this.getId() + "-scrl-cntnr",
			{
				width : "14.5rem",
				horizontal : false,
				vertical : true,
				height : "17rem",
				content : this._oSelLst
			});
	this._oShowSelLbl = new sap.m.Link(this.getId() + "-show-selected-label")
			.addStyleClass("sapSuiteUiTFShowSelLbl");

	this._oShowSelBox = new sap.m.HBox(this.getId() + "-selection-box", {
		items : [ this._oShowSelLbl, this._oSearchBtn ]
	}).addStyleClass("sapSuiteUiTFShowSelBox");

	this._oRightPanel = new sap.m.VBox(this.getId() + "-right-panel", {
		items : [ this._oSearchFieldLbl, this._oSearchField, this._oSelLstLbl,
				this._oScrollCont, this._oShowSelBox ]
	});

	this._oSelectDialog = new sap.m.SelectDialog({
		multiSelect : true,
		liveChange : function(oEvent) {
			var aFilters = [];
			var sSearchValue = oEvent.getParameter("value");
			var itemsBinding = oEvent.getParameter("itemsBinding");

			if (sSearchValue !== undefined && sSearchValue.length) {
				aFilters.push(new sap.ui.model.Filter(this._oColumn.getName(),
						sap.ui.model.FilterOperator.EQ, sSearchValue));
			}
			itemsBinding.filter(aFilters);
		}
	});
	this.setAggregation("_dialog", this._oSelectDialog);
	
	this._oCountDisplay = new sap.suite.ui.commons.TargetFilterCountDisplay();
	this.setAggregation("_countDisplay", this._oCountDisplay);
};

sap.suite.ui.commons.TargetFilter.prototype._bindModel = function() {
	if (this._bBindModel) {
		this._bBindModel = false;


		for (var i = 0; i < this._aQudrants.length; i++) {
			this._aQudrants[i].rebindColumns();
		}
		
		var that = this;
		this._oCountDisplay.bindAggregation("counts", {
			path : "/" + this.getEntitySet(),
			parameters : {
				select : this.getMeasureColumnName()
			},
			length : 1,
			template : new sap.suite.ui.commons.TargetFilterCount({
				count : "{" + this.getMeasureColumnName() + "}",
				countUpdated: function() {
					that._oShowSelLbl.setText("Show selected " + this.getCount());
				}
			})
		});
	}
};

sap.suite.ui.commons.TargetFilter.prototype._callMethodInManagedObject = function(
		sFunctionName, sEntityName) {
	if (sEntityName === "columns" || sEntityName === "entitySet"
			|| sEntityName === "measureColumnName") {
		this._bBindModel = true;
	}
	var args = Array.prototype.slice.call(arguments);
	return sap.ui.core.Control.prototype[sFunctionName].apply(this, args
			.slice(1));
};

sap.suite.ui.commons.TargetFilter.prototype.setProperty = function(sProp,
		oValue, bSuppressInvalidate) {
	this._callMethodInManagedObject("setProperty", sProp, oValue,
			bSuppressInvalidate);
	return this;
};

sap.suite.ui.commons.TargetFilter.prototype.insertAggregation = function(
		sAggregationName, oObject, iIndex, bSuppressInvalidate) {
	this._callMethodInManagedObject("insertAggregation", sAggregationName,
			oObject, iIndex, bSuppressInvalidate);
	return this;
};

sap.suite.ui.commons.TargetFilter.prototype.addAggregation = function(
		sAggregationName, oObject, bSuppressInvalidate) {
	this._callMethodInManagedObject("addAggregation", sAggregationName,
			oObject, bSuppressInvalidate);
	return this;
};

sap.suite.ui.commons.TargetFilter.prototype.removeAggregation = function(
		sAggregationName, oObject, bSuppressInvalidate) {
	return this._callMethodInManagedObject("removeAggregation",
			sAggregationName, oObject, bSuppressInvalidate);
};

sap.suite.ui.commons.TargetFilter.prototype.removeAllAggregation = function(
		sAggregationName, bSuppressInvalidate) {
	return this._callMethodInManagedObject("removeAllAggregation",
			sAggregationName, bSuppressInvalidate);
};

sap.suite.ui.commons.TargetFilter.prototype.destroyAggregation = function(
		sAggregationName, bSuppressInvalidate) {
	this._callMethodInManagedObject("destroyAggregation", sAggregationName,
			bSuppressInvalidate);
	return this;
};

sap.suite.ui.commons.TargetFilter.prototype.fnHandleDelete = function(oEvent) {
	var oList = oEvent.getSource();
	// after deletion put the focus back to the list
	oList.attachEventOnce("updateFinished", oList.focus, oList);
	oList.removeItem(oEvent.getParameter("listItem"));
	oList.rerender();
};

sap.suite.ui.commons.TargetFilter.prototype.onBeforeRendering = function() {
	this._bindModel();
};

sap.suite.ui.commons.TargetFilter.prototype.exit = function() {
	sap.ui.Device.media.detachHandler(this.rerender, this,
			sap.ui.Device.media.RANGESETS.SAP_STANDARD);
	this._oSearchBtn.destroy();
	this._oSettingsBtn.destroy();
	this._oSearchFieldLbl.destroy();
	this._oSearchField.destroy();
	this._oSelLstLbl.destroy();
	this._oSelLst.destroy();
	this._oScrollCont.destroy();
	this._oShowSelLbl.destroy();
	this._oShowSelBox.destroy();
	this._oRightPanel.destroy();
};