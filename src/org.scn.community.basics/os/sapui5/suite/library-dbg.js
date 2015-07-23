/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

/**
 * Initialization Code and shared classes of library sap.suite.ui.commons (1.30.3)
 */
jQuery.sap.declare("sap.suite.ui.commons.library");
jQuery.sap.require("sap.ui.core.Core");
/**
 * SAP UI library: sap.suite.ui.commons
 *
 * @namespace
 * @name sap.suite.ui.commons
 * @public
 */


// library dependencies
jQuery.sap.require("sap.ui.core.library");

// delegate further initialization of this library to the Core
sap.ui.getCore().initLibrary({
	name : "sap.suite.ui.commons",
	dependencies : ["sap.ui.core"],
	types: [
		"sap.suite.ui.commons.BulletChartMode",
		"sap.suite.ui.commons.CommonBackground",
		"sap.suite.ui.commons.ComparisonChartView",
		"sap.suite.ui.commons.DeviationIndicator",
		"sap.suite.ui.commons.FacetOverviewHeight",
		"sap.suite.ui.commons.FrameType",
		"sap.suite.ui.commons.HeaderContainerView",
		"sap.suite.ui.commons.InfoTileSize",
		"sap.suite.ui.commons.InfoTileTextColor",
		"sap.suite.ui.commons.InfoTileValueColor",
		"sap.suite.ui.commons.LoadState",
		"sap.suite.ui.commons.MicroAreaChartView",
		"sap.suite.ui.commons.ProcessFlowDisplayState",
		"sap.suite.ui.commons.ProcessFlowLaneState",
		"sap.suite.ui.commons.ProcessFlowNodeState",
		"sap.suite.ui.commons.ProcessFlowZoomLevel",
		"sap.suite.ui.commons.SelectionState",
		"sap.suite.ui.commons.ThingGroupDesign",
		"sap.suite.ui.commons.TimelineAlignment",
		"sap.suite.ui.commons.TimelineAxisOrientation",
		"sap.suite.ui.commons.TimelineItemPosition",
		"sap.suite.ui.commons.ValueStatus"
	],
	interfaces: [],
	controls: [
		"sap.suite.ui.commons.BulletChart",
		"sap.suite.ui.commons.BusinessCard",
		"sap.suite.ui.commons.ChartContainer",
		"sap.suite.ui.commons.ChartContainerContent",
		"sap.suite.ui.commons.ChartTile",
		"sap.suite.ui.commons.ColumnMicroChart",
		"sap.suite.ui.commons.ComparisonChart",
		"sap.suite.ui.commons.DateRangeScroller",
		"sap.suite.ui.commons.DateRangeSlider",
		"sap.suite.ui.commons.DateRangeSliderInternal",
		"sap.suite.ui.commons.DeltaMicroChart",
		"sap.suite.ui.commons.DynamicContainer",
		"sap.suite.ui.commons.FacetOverview",
		"sap.suite.ui.commons.FeedItemHeader",
		"sap.suite.ui.commons.FeedTile",
		"sap.suite.ui.commons.GenericTile",
		"sap.suite.ui.commons.GenericTile2X2",
		"sap.suite.ui.commons.HarveyBallMicroChart",
		"sap.suite.ui.commons.HeaderCell",
		"sap.suite.ui.commons.HeaderContainer",
		"sap.suite.ui.commons.InfoTile",
		"sap.suite.ui.commons.JamContent",
		"sap.suite.ui.commons.KpiTile",
		"sap.suite.ui.commons.LaunchTile",
		"sap.suite.ui.commons.LinkActionSheet",
		"sap.suite.ui.commons.MicroAreaChart",
		"sap.suite.ui.commons.MonitoringContent",
		"sap.suite.ui.commons.MonitoringTile",
		"sap.suite.ui.commons.NewsContent",
		"sap.suite.ui.commons.NoteTaker",
		"sap.suite.ui.commons.NoteTakerCard",
		"sap.suite.ui.commons.NoteTakerFeeder",
		"sap.suite.ui.commons.NumericContent",
		"sap.suite.ui.commons.NumericTile",
		"sap.suite.ui.commons.PictureZoomIn",
		"sap.suite.ui.commons.ProcessFlow",
		"sap.suite.ui.commons.ProcessFlowConnection",
		"sap.suite.ui.commons.ProcessFlowLaneHeader",
		"sap.suite.ui.commons.ProcessFlowNode",
		"sap.suite.ui.commons.RepeaterViewConfiguration",
		"sap.suite.ui.commons.SplitButton",
		"sap.suite.ui.commons.TargetFilter",
		"sap.suite.ui.commons.ThingCollection",
		"sap.suite.ui.commons.ThreePanelThingInspector",
		"sap.suite.ui.commons.ThreePanelThingViewer",
		"sap.suite.ui.commons.TileContent",
		"sap.suite.ui.commons.TileContent2X2",
		"sap.suite.ui.commons.Timeline",
		"sap.suite.ui.commons.TimelineFilterListItem",
		"sap.suite.ui.commons.TimelineItem",
		"sap.suite.ui.commons.UnifiedThingGroup",
		"sap.suite.ui.commons.UnifiedThingInspector",
		"sap.suite.ui.commons.VerticalNavigationBar",
		"sap.suite.ui.commons.ViewRepeater"
	],
	elements: [
		"sap.suite.ui.commons.BulletChartData",
		"sap.suite.ui.commons.ColumnData",
		"sap.suite.ui.commons.ColumnMicroChartLabel",
		"sap.suite.ui.commons.ComparisonData",
		"sap.suite.ui.commons.CountingNavigationItem",
		"sap.suite.ui.commons.FeedItem",
		"sap.suite.ui.commons.HarveyBallMicroChartItem",
		"sap.suite.ui.commons.HeaderCellItem",
		"sap.suite.ui.commons.MicroAreaChartItem",
		"sap.suite.ui.commons.MicroAreaChartLabel",
		"sap.suite.ui.commons.MicroAreaChartPoint",
		"sap.suite.ui.commons.TargetFilterColumn"
	],
	version: "1.30.3"
});

/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.suite.ui.commons.BulletChartMode.
jQuery.sap.declare("sap.suite.ui.commons.BulletChartMode");
/**
 * @class Enumeration of possible BulletChart display modes.
 *
 * @version 1.30.3
 * @static
 * @public
 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.BulletChartMode = {

	/**
	 * Displays the Actual value.
	 * @public
	 */
	Actual : "Actual",

	/**
	 * Displays delta between the Actual and Threshold values.
	 * @public
	 */
	Delta : "Delta"

};
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.suite.ui.commons.CommonBackground.
jQuery.sap.declare("sap.suite.ui.commons.CommonBackground");
/**
 * @class Enumeration of possible theme specific background colors.
 *
 * @version 1.30.3
 * @static
 * @public
 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.CommonBackground = {

	/**
	 * The lightest background color.
	 * @public
	 */
	Lightest : "Lightest",

	/**
	 * Extra light background color.
	 * @public
	 */
	ExtraLight : "ExtraLight",

	/**
	 * Light background color.
	 * @public
	 */
	Light : "Light",

	/**
	 * Medium light background color.
	 * @public
	 */
	MediumLight : "MediumLight",

	/**
	 * Medium background color.
	 * @public
	 */
	Medium : "Medium",

	/**
	 * Dark background color.
	 * @public
	 */
	Dark : "Dark",

	/**
	 * Extra dark background color.
	 * @public
	 */
	ExtraDark : "ExtraDark",

	/**
	 * The darkest background color.
	 * @public
	 */
	Darkest : "Darkest"

};
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.suite.ui.commons.ComparisonChartView.
jQuery.sap.declare("sap.suite.ui.commons.ComparisonChartView");
/**
 * @class The view of the ComparisonChart.
 *
 * @version 1.30.3
 * @static
 * @public
 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.ComparisonChartView = {

	/**
	 * Titles and values are displayed above the bars.
	 * @public
	 */
	Normal : "Normal",

	/**
	 * Titles and values are displayed in the same line with the bars.
	 * @public
	 */
	Wide : "Wide"

};
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.suite.ui.commons.DeviationIndicator.
jQuery.sap.declare("sap.suite.ui.commons.DeviationIndicator");
/**
 * @class The marker for the deviation trend.
 *
 * @version 1.30.3
 * @static
 * @public
 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.DeviationIndicator = {

	/**
	 * The actual value is more than the target value.
	 * @public
	 */
	Up : "Up",

	/**
	 * The actual value is less than the target value.
	 * @public
	 */
	Down : "Down",

	/**
	 * No value.
	 * @public
	 */
	None : "None"

};
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.suite.ui.commons.FacetOverviewHeight.
jQuery.sap.declare("sap.suite.ui.commons.FacetOverviewHeight");
/**
 * @class Enumeration of possible FacetOverview height settings.
 *
 * @version 1.30.3
 * @static
 * @public
 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.FacetOverviewHeight = {

	/**
	 * Extra small height
	 * @public
	 */
	XS : "XS",

	/**
	 * Small height
	 * @public
	 */
	S : "S",

	/**
	 * Medium height
	 * @public
	 */
	M : "M",

	/**
	 * Large height
	 * @public
	 */
	L : "L",

	/**
	 * Extra Large height
	 * @public
	 */
	XL : "XL",

	/**
	 * Extra extra large height
	 * @public
	 */
	XXL : "XXL",

	/**
	 * Content based height
	 * @public
	 */
	Auto : "Auto",

	/**
	 * No value. The height of the control is defined by depricated height property.
	 * @public
	 */
	None : "None"

};
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.suite.ui.commons.FrameType.
jQuery.sap.declare("sap.suite.ui.commons.FrameType");
/**
 * @class Enumeration of possible frame types.
 *
 * @version 1.30.3
 * @static
 * @public
 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.FrameType = {

	/**
	 * The 1x1 frame type.
	 * @public
	 */
	OneByOne : "OneByOne",

	/**
	 * The 2x1 frame type.
	 * @public
	 */
	TwoByOne : "TwoByOne",

	/**
	 * The 2/3 frame type.
	 * @public
	 */
	TwoThirds : "TwoThirds",

	/**
	 * The Auto frame type that adjusts the size of the control to the content.
	 * @public
	 */
	Auto : "Auto"

};
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.suite.ui.commons.HeaderContainerView.
jQuery.sap.declare("sap.suite.ui.commons.HeaderContainerView");
/**
 * @class The list of possible HeaderContainer views.
 *
 * @version 1.30.3
 * @static
 * @public
 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.HeaderContainerView = {

	/**
	 * The horizontal orientation of the control.
	 * @public
	 */
	Horizontal : "Horizontal",

	/**
	 * The vertical orientation of the control.
	 * @public
	 */
	Vertical : "Vertical"

};
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.suite.ui.commons.InfoTileSize.
jQuery.sap.declare("sap.suite.ui.commons.InfoTileSize");
/**
 * @class Enumeration of possible PointTile size settings.
 *
 * @version 1.30.3
 * @static
 * @public
 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.InfoTileSize = {

	/**
	 * Extra small size.
	 * @public
	 */
	XS : "XS",

	/**
	 * Small size.
	 * @public
	 */
	S : "S",

	/**
	 * Medium size.
	 * @public
	 */
	M : "M",

	/**
	 * Large size.
	 * @public
	 */
	L : "L",

	/**
	 * The size of the tile depends on the device it is running on. It is large on desktop, medium on tablet and small on phone.
	 * @public
	 */
	Auto : "Auto"

};
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.suite.ui.commons.InfoTileTextColor.
jQuery.sap.declare("sap.suite.ui.commons.InfoTileTextColor");
/**
 * @class Enumeration of possible InfoTile text color settings.
 *
 * @version 1.30.3
 * @static
 * @public
 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.InfoTileTextColor = {

	/**
	 * Positive InfoTile text color.
	 * @public
	 */
	Positive : "Positive",

	/**
	 * Critical InfoTile text color.
	 * @public
	 */
	Critical : "Critical",

	/**
	 * Negative InfoTile text color.
	 * @public
	 */
	Negative : "Negative"

};
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.suite.ui.commons.InfoTileValueColor.
jQuery.sap.declare("sap.suite.ui.commons.InfoTileValueColor");
/**
 * @class Enumeration of possible InfoTile value color settings.
 *
 * @version 1.30.3
 * @static
 * @public
 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.InfoTileValueColor = {

	/**
	 * Neutral InfoTile value color.
	 * @public
	 */
	Neutral : "Neutral",

	/**
	 * Good InfoTile value color.
	 * @public
	 */
	Good : "Good",

	/**
	 * Critical InfoTile value color.
	 * @public
	 */
	Critical : "Critical",

	/**
	 * Error InfoTile value color.
	 * @public
	 */
	Error : "Error"

};
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.suite.ui.commons.LoadState.
jQuery.sap.declare("sap.suite.ui.commons.LoadState");
/**
 * @class Enumeration of possible load states for LoadableView.
 *
 * @version 1.30.3
 * @static
 * @public
 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.LoadState = {

	/**
	 * LoadableView is loading the control.
	 * @public
	 */
	Loading : "Loading",

	/**
	 * LoadableView has loaded the control.
	 * @public
	 */
	Loaded : "Loaded",

	/**
	 * LoadableView failed to load the control.
	 * @public
	 */
	Failed : "Failed",

	/**
	 * LoadableView disabled to load the control.
	 * @public
	 */
	Disabled : "Disabled"

};
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.suite.ui.commons.MicroAreaChartView.
jQuery.sap.declare("sap.suite.ui.commons.MicroAreaChartView");
/**
 * @class The list of possible MicroAreaChart views.
 *
 * @version 1.30.3
 * @static
 * @public
 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.MicroAreaChartView = {

	/**
	 * The view with labels on the top and bottom.
	 * @public
	 */
	Normal : "Normal",

	/**
	 * The view with labels on the left and right.
	 * @public
	 */
	Wide : "Wide"

};
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.suite.ui.commons.ProcessFlowDisplayState.
jQuery.sap.declare("sap.suite.ui.commons.ProcessFlowDisplayState");
/**
 * @class The ProcessFlow calculates the ProcessFlowDisplayState based on the 'focused' and ?highlighted? properties of each node.
 *
 * @version 1.30.3
 * @static
 * @public
 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.ProcessFlowDisplayState = {

	/**
	 * The control is in the regular display state
	 * @public
	 */
	Regular : "Regular",

	/**
	 * The control is in the combination of regular and focused display state
	 * @public
	 */
	RegularFocused : "RegularFocused",

	/**
	 * The control is in highlighted display state
	 * @public
	 */
	Highlighted : "Highlighted",

	/**
	 * The control is in the combination of highlighted and focused display state
	 * @public
	 */
	HighlightedFocused : "HighlightedFocused",

	/**
	 * The control is in the dimmed state
	 * @public
	 */
	Dimmed : "Dimmed",

	/**
	 * The control is in the combination of dimmed and focused display state
	 * @public
	 */
	DimmedFocused : "DimmedFocused"

};
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.suite.ui.commons.ProcessFlowLaneState.
jQuery.sap.declare("sap.suite.ui.commons.ProcessFlowLaneState");
/**
 * @class This type is used in the ?state? property of the ProcessFlowLaneHeader. For example, as an app developer you have the option to set explicitly the status of the lane header outside of the control coding if the lanes are displayed without documents.
 * If the complete process flow is displayed (that is, if the lane header is displayed with documents underneath), the given state values of the lane header are ignored and will be calculated in the ProcessFlow according to the current state of the documents.
 *
 * @version 1.30.3
 * @static
 * @public
 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.ProcessFlowLaneState = {

	/**
	 * In the ?state? array , the total sum of all values needs to be 100%.
	 * @public
	 */
	value : "value",

	/**
	 * The ?state? property is associated with the given value. The possible states are: positive, negative, neutral, and planned.
	 * @public
	 */
	state : "state"

};
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.suite.ui.commons.ProcessFlowNodeState.
jQuery.sap.declare("sap.suite.ui.commons.ProcessFlowNodeState");
/**
 * @class Describes the state info connected to the content displayed in the Process Flow Node body. Also Process Flow Lane Header uses this enumeration for the chart
 *
 * @version 1.30.3
 * @static
 * @public
 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.ProcessFlowNodeState = {

	/**
	 * Positive status for a Created document: document is done, finished, solved
	 * @public
	 */
	Positive : "Positive",

	/**
	 * Negative status for a Created document: a document has an issue
	 * @public
	 */
	Negative : "Negative",

	/**
	 * Planned status for a document: a document is planned
	 * @public
	 */
	Planned : "Planned",

	/**
	 * Neutral status for a Created document: document is in progress
	 * @public
	 */
	Neutral : "Neutral",

	/**
	 * Planned document has an issue
	 * @public
	 */
	PlannedNegative : "PlannedNegative"

};
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.suite.ui.commons.ProcessFlowZoomLevel.
jQuery.sap.declare("sap.suite.ui.commons.ProcessFlowZoomLevel");
/**
 * @class The zoom level defines level of details for the node and how much space the process flow requires.
 *
 * @version 1.30.3
 * @static
 * @public
 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.ProcessFlowZoomLevel = {

	/**
	 * The full details with normal font size.
	 * @public
	 */
	One : "One",

	/**
	 * The full detail view of the node but with smaller font size.
	 * @public
	 */
	Two : "Two",

	/**
	 * The details are the icon, title text and no additional texts.
	 * @public
	 */
	Three : "Three",

	/**
	 * Zoom level for least details - only icon is displayed.
	 * @public
	 */
	Four : "Four"

};
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.suite.ui.commons.SelectionState.
jQuery.sap.declare("sap.suite.ui.commons.SelectionState");
/**
 * @class SelectionState
 *
 * @version 1.30.3
 * @static
 * @public
 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.SelectionState = {

	/**
	 * [Enter description for newValue]
	 * @public
	 */
	Selected : "Selected",

	/**
	 * [Enter description for newValue]
	 * @public
	 */
	NotSelected : "NotSelected",

	/**
	 * [Enter description for newValue]
	 * @public
	 */
	Semantic : "Semantic"

};
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.suite.ui.commons.ThingGroupDesign.
jQuery.sap.declare("sap.suite.ui.commons.ThingGroupDesign");
/**
 * @class Defines the way how UnifiedThingGroup control is rendered.
 *
 * @version 1.30.3
 * @static
 * @public
 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.ThingGroupDesign = {

	/**
	 * In this design there is no indentation between header and content of the group.
	 * @public
	 */
	ZeroIndent : "ZeroIndent",

	/**
	 * In this design there is indentation between header and content of the group.
	 * @public
	 */
	TopIndent : "TopIndent"

};
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.suite.ui.commons.TimelineAlignment.
jQuery.sap.declare("sap.suite.ui.commons.TimelineAlignment");
/**
 * @class Where to align items with respect to the time line.
 *
 * @version 1.30.3
 * @static
 * @public
 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.TimelineAlignment = {

	/**
	 * Right
	 * @public
	 */
	Right : "Right"

};
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.suite.ui.commons.TimelineAxisOrientation.
jQuery.sap.declare("sap.suite.ui.commons.TimelineAxisOrientation");
/**
 * @class Timeline Axis Orientation
 *
 * @version 1.30.3
 * @static
 * @public
 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.TimelineAxisOrientation = {

	/**
	 * Vertical Orientation
	 * @public
	 */
	Vertical : "Vertical",

	/**
	 * Horizontal Orientation
	 * @public
	 */
	Horizontal : "Horizontal"

};
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.suite.ui.commons.TimelineItemPosition.
jQuery.sap.declare("sap.suite.ui.commons.TimelineItemPosition");
/**
 * @class Position of TimelineItem
 *
 * @version 1.30.3
 * @static
 * @public
 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.TimelineItemPosition = {

	/**
	 * [Enter description for newValue]
	 * @public
	 */
	Top : "Top",

	/**
	 * [Enter description for newValue]
	 * @public
	 */
	Bottom : "Bottom",

	/**
	 * [Enter description for newValue]
	 * @public
	 */
	Middle : "Middle"

};
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.suite.ui.commons.ValueStatus.
jQuery.sap.declare("sap.suite.ui.commons.ValueStatus");
/**
 * @class Marker for the key value status.
 *
 * @version 1.30.3
 * @static
 * @public
 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
 */
sap.suite.ui.commons.ValueStatus = {

	/**
	 * Good value.
	 * @public
	 */
	Good : "Good",

	/**
	 * Positive value.
	 * @public
	 */
	Neutral : "Neutral",

	/**
	 * Critical value.
	 * @public
	 */
	Critical : "Critical",

	/**
	 * Bad value.
	 * @public
	 */
	Bad : "Bad"

};
