//%DEFINE-START%
var scn_pkg="org.scn.community.";if(sap.firefly!=undefined){scn_pkg=scn_pkg.replace(".","_");}
define([
	"sap/designstudio/sdk/component",
	"./ActivityViewerSpec",
	"../../../"+scn_pkg+"shared/modules/component.core",
	"../../../"+scn_pkg+"shared/modules/component.basics",
	"../../../"+scn_pkg+"basics/os/d3/d3",
	"../../../"+scn_pkg+"basics/os/d3-plug/gantt-chart-d3v2",
	"../../../"+scn_pkg+"basics/os/date/DateFormat"
	],
	function(
		Component,
		spec,
		core,
		basics
	) {
//%DEFINE-END%

var myComponentData = spec;

ActivityViewer = function () {
	
	var that = this;
	that.r = 1;
	
	this.init = function() {
		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		this.dummyData();
		
		this._oContentPlaced = false;
		this._gantt = undefined;
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
	};

	this.dummyData = function () {

		this.tasks = [
		{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"T Job","status":"RUNNING"},
		{"startDate":new Date("Sun Dec 09 04:56:32 EST 2012"),"endDate":new Date("Sun Dec 09 06:35:47 EST 2012"),"taskName":"A Job","status":"RUNNING"},
		{"startDate":new Date("Sun Dec 09 06:29:53 EST 2012"),"endDate":new Date("Sun Dec 09 06:34:04 EST 2012"),"taskName":"D Job","status":"RUNNING"},
		{"startDate":new Date("Sun Dec 09 04:02:45 EST 2012"),"endDate":new Date("Sun Dec 09 04:48:56 EST 2012"),"taskName":"N Job","status":"RUNNING"},
		{"startDate":new Date("Sun Dec 09 03:00:03 EST 2012"),"endDate":new Date("Sun Dec 09 03:09:51 EST 2012"),"taskName":"D Job","status":"SUCCEEDED"},
		{"startDate":new Date("Sun Dec 09 01:21:00 EST 2012"),"endDate":new Date("Sun Dec 09 02:51:42 EST 2012"),"taskName":"P Job","status":"SUCCEEDED"},
		{"startDate":new Date("Sun Dec 09 01:08:42 EST 2012"),"endDate":new Date("Sun Dec 09 01:33:42 EST 2012"),"taskName":"N Job","status":"FAILED"},
		{"startDate":new Date("Sat Dec 08 23:12:24 EST 2012"),"endDate":new Date("Sun Dec 9 12:26:13 EST 2012"),"taskName":"A Job","status":"SUCCEEDED"},
		{"startDate":new Date("Sun Dec 09 00:27:15 EST 2012"),"endDate":new Date("Sun Dec 09 00:54:56 EST 2012"),"taskName":"T Job","status":"SUCCEEDED"},
		{"startDate":new Date("Sun Dec 09 00:29:48 EST 2012"),"endDate":new Date("Sun Dec 09 00:44:50 EST 2012"),"taskName":"D Job","status":"SUCCEEDED"},
		{"startDate":new Date("Sun Dec 09 07:39:21 EST 2012"),"endDate":new Date("Sun Dec 09 07:43:22 EST 2012"),"taskName":"P Job","status":"RUNNING"},
		{"startDate":new Date("Sun Dec 09 08:27:35 EST 2012"),"endDate":new Date("Sun Dec 09 08:58:43 EST 2012"),"taskName":"T Job","status":"SUCCEEDED"},
		{"startDate":new Date("Sun Dec 09 08:40:11 EST 2012"),"endDate":new Date("Sun Dec 09 08:46:35 EST 2012"),"taskName":"A Job","status":"SUCCEEDED"},
		{"startDate":new Date("Sun Dec 09 12:27:15 EST 2012"),"endDate":new Date("Sun Dec 09 19:28:16 EST 2012"),"taskName":"T Job","status":"SUCCEEDED"},
		{"startDate":new Date("Sat Dec 08 23:12:24 EST 2012"),"endDate":new Date("Sun Dec 10 00:26:13 EST 2012"),"taskName":"A Job","status":"KILLED"},
		{"startDate":new Date("Sat Dec 09 03:12:24 EST 2012"),"endDate":new Date("Sun Dec 09 05:26:13 EST 2012"),"taskName":"T Job","status":"KILLED"},
		{"startDate":new Date("Sat Dec 09 03:12:24 EST 2012"),"endDate":new Date("Sun Dec 09 05:26:13 EST 2012"),"taskName":"N Job","status":"KILLED"},
		{"startDate":new Date("Sat Dec 09 03:12:24 EST 2012"),"endDate":new Date("Sun Dec 09 05:26:13 EST 2012"),"taskName":"D Job","status":"KILLED"},
		{"startDate":new Date("Sat Dec 09 03:12:24 EST 2012"),"endDate":new Date("Sun Dec 09 05:26:13 EST 2012"),"taskName":"A Job","status":"KILLED"}];
		
		this.taskStatus = {
		    "SUCCEEDED" : "bar",
		    "FAILED" : "bar-failed",
		    "RUNNING" : "bar-running",
		    "KILLED" : "bar-killed"
		};
		
		this.taskNames = [ "D Job", "P Job", "A Job", "N Job", "T Job" ];    // this array determines the order of the tasks
		this.timeFormat = "%d.%m.%y";                         // Label format at the x-axis
	};

	this.afterUpdate = function() {
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
		var owner = that.$();
		that.margin = {
		     top : 20,
		     right : 40,
		     bottom : 40,
		     left : 120
		};
		
		org_scn_community_basics.determineOwnSize(that);
		
		if(!that._gantt) {
			that._gantt = new d3plug.gantt(that._containerWidth, that._containerHeight, that.margin);
			that._gantt.clickListener = that;
		} else {
			that._gantt.width(that._containerWidth-that.margin.left-that.margin.right-5);
			that._gantt.height(that._containerHeight-that.margin.top-that.margin.bottom-5);
		}

		this.readRealData();
		
		that._gantt.taskTypes(that.taskNames);
		that._gantt.taskStatus(that.taskStatus);
		that._gantt.tickFormat(that.timeFormat);
		
		that._gantt.margin(that.margin);
		
		if(!that._oContentPlaced) {
			that._innerId = that.oControlProperties.id;
			that._gantt.draw(that._innerId, that.tasks);

			org_scn_community_basics.resizeContentAbsoluteLayout(that, that._gantt, that.onResize);
		} else {
			that._gantt.redraw(that.tasks);
		}
		
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
	};
	
	this.onResize = function(width, height) {
		if(width == that._gantt.width() && height == that._gantt.height()) {
			return;
		}

		if(width > 0){
			if(width > that.margin.left+that.margin.right+5) {
				that._gantt.width(width-that.margin.left-that.margin.right-5);	
			} else {
				that._gantt.width(0);
			}
		}
			
		if(height > 0) {
			if(height > that.margin.top+that.margin.bottom+5) {
				that._gantt.height(height-that.margin.top-that.margin.bottom-5);
			} else {
				that._gantt.height(0);	
			}
		}

		that._gantt.redraw(that.tasks);
	};
	
	this.readRealData = function() {
		var activities = that.getActivities();
		var categories = that.getCategories();
		var states = that.getStates();

		activities = JSON.parse(activities);
		categories = JSON.parse(categories);
		states = JSON.parse(states);
		
		if(activities.length == 0 || categories.length == 0 || states.length == 0) {
			return;
		}
		
		that.taskNames = [];
		that.hashCategories = {};
		for (var catI in categories) {
			var cat = categories[catI];
			
			that.hashCategories[cat.key] = cat;
			if(cat.visible != false) {
				that.taskNames.push(cat.text);
			}
		}

		that.taskStatus = {};
		for (var staI in states) {
			var sta = states[staI];

			that.taskStatus[sta.key] = sta.style;
		}
		
		that.r++;
		that.tasks = [];
		for (var actI in activities) {
			var act = activities[actI];

			if(that.hashCategories[act.category] == undefined) {
				that.hashCategories[act.category] = {
					key: act.category,
					text: "Unknown"
				};
				that.taskNames.push(that.hashCategories[act.category].text);
			}
			
			if(that.hashCategories[act.category].visible != false) {
				var actO = {};
				actO.taskName = that.hashCategories[act.category].text;
				actO.taskDesc = act.text;
				actO.startDate = that.makeDate(act.startDate);
				actO.endDate = that.makeDate(act.endDate);
				
				if(that.taskStatus[act.state] == undefined) {
					that.taskStatus[act.state] = act.state;
				}
				
				actO.status = act.state;
				actO.key = act.key;
				actO.r = that.r;

				that.tasks.push(actO);
			}
		}
	};

	this.makeDate = function (inputDate) {
		var date = org_scn_community_basics.getDateValue (inputDate);
		return date;
	};
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/
	this.processOnClick = function (event) {
		var target = event.target;
		var attributes = target.attributes;

		var key = undefined;
		for (var aI in attributes) {
			var aO = attributes[aI];

			if(aO.localName == "key") {
				key = aO.nodeValue;
				break;
			}			
		}

		that.setSelectedKey(key);
				
		that.firePropertiesChangedAndEvent(["selectedKey"], "onSelectionChanged");
	};
	
    org_scn_community_component_Core(this, myComponentData);

	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

//%INIT-START%
myComponentData.instance = ActivityViewer;
Component.subclass(myComponentData.fullComponentName, myComponentData.instance);


});