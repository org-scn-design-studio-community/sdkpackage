(function(){

var myComponentData = org_scn_community_require.knownComponents.basics.ActivityViewer;

ActivityViewer = function () {

	var that = this;
	
	this.init = function() {
		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		this.dummyData();
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
	};

	that.dummyData = function () {

		that.tasks = [
		{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"T Job","status":"RUNNING"},
		{"startDate":new Date("Sun Dec 09 04:56:32 EST 2012"),"endDate":new Date("Sun Dec 09 06:35:47 EST 2012"),"taskName":"A Job","status":"RUNNING"},
		{"startDate":new Date("Sun Dec 09 06:29:53 EST 2012"),"endDate":new Date("Sun Dec 09 06:34:04 EST 2012"),"taskName":"D Job","status":"RUNNING"},
		{"startDate":new Date("Sun Dec 09 05:35:21 EST 2012"),"endDate":new Date("Sun Dec 09 06:21:22 EST 2012"),"taskName":"P Job","status":"RUNNING"},
		{"startDate":new Date("Sun Dec 09 05:00:06 EST 2012"),"endDate":new Date("Sun Dec 09 05:05:07 EST 2012"),"taskName":"D Job","status":"RUNNING"},
		{"startDate":new Date("Sun Dec 09 03:46:59 EST 2012"),"endDate":new Date("Sun Dec 09 04:54:19 EST 2012"),"taskName":"P Job","status":"RUNNING"},
		{"startDate":new Date("Sun Dec 09 04:02:45 EST 2012"),"endDate":new Date("Sun Dec 09 04:48:56 EST 2012"),"taskName":"N Job","status":"RUNNING"},
		{"startDate":new Date("Sun Dec 09 03:27:35 EST 2012"),"endDate":new Date("Sun Dec 09 03:58:43 EST 2012"),"taskName":"T Job","status":"SUCCEEDED"},
		{"startDate":new Date("Sun Dec 09 01:40:11 EST 2012"),"endDate":new Date("Sun Dec 09 03:26:35 EST 2012"),"taskName":"A Job","status":"SUCCEEDED"},
		{"startDate":new Date("Sun Dec 09 03:00:03 EST 2012"),"endDate":new Date("Sun Dec 09 03:09:51 EST 2012"),"taskName":"D Job","status":"SUCCEEDED"},
		{"startDate":new Date("Sun Dec 09 01:21:00 EST 2012"),"endDate":new Date("Sun Dec 09 02:51:42 EST 2012"),"taskName":"P Job","status":"SUCCEEDED"},
		{"startDate":new Date("Sun Dec 09 01:08:42 EST 2012"),"endDate":new Date("Sun Dec 09 01:33:42 EST 2012"),"taskName":"N Job","status":"FAILED"},
		{"startDate":new Date("Sat Dec 08 23:12:24 EST 2012"),"endDate":new Date("Sun Dec 9 12:26:13 EST 2012"),"taskName":"A Job","status":"SUCCEEDED"},
		{"startDate":new Date("Sun Dec 09 00:27:15 EST 2012"),"endDate":new Date("Sun Dec 09 00:54:56 EST 2012"),"taskName":"T Job","status":"SUCCEEDED"},
		{"startDate":new Date("Sun Dec 09 00:29:48 EST 2012"),"endDate":new Date("Sun Dec 09 00:44:50 EST 2012"),"taskName":"D Job","status":"SUCCEEDED"},
		{"startDate":new Date("Sun Dec 09 07:39:21 EST 2012"),"endDate":new Date("Sun Dec 09 07:43:22 EST 2012"),"taskName":"P Job","status":"RUNNING"},
		{"startDate":new Date("Sun Dec 09 07:00:06 EST 2012"),"endDate":new Date("Sun Dec 09 07:05:07 EST 2012"),"taskName":"D Job","status":"RUNNING"},
		{"startDate":new Date("Sun Dec 09 08:46:59 EST 2012"),"endDate":new Date("Sun Dec 09 09:54:19 EST 2012"),"taskName":"P Job","status":"RUNNING"},
		{"startDate":new Date("Sun Dec 09 09:02:45 EST 2012"),"endDate":new Date("Sun Dec 09 09:48:56 EST 2012"),"taskName":"N Job","status":"RUNNING"},
		{"startDate":new Date("Sun Dec 09 08:27:35 EST 2012"),"endDate":new Date("Sun Dec 09 08:58:43 EST 2012"),"taskName":"T Job","status":"SUCCEEDED"},
		{"startDate":new Date("Sun Dec 09 08:40:11 EST 2012"),"endDate":new Date("Sun Dec 09 08:46:35 EST 2012"),"taskName":"A Job","status":"SUCCEEDED"},
		{"startDate":new Date("Sun Dec 09 08:00:03 EST 2012"),"endDate":new Date("Sun Dec 09 08:09:51 EST 2012"),"taskName":"D Job","status":"SUCCEEDED"},
		{"startDate":new Date("Sun Dec 09 10:21:00 EST 2012"),"endDate":new Date("Sun Dec 09 10:51:42 EST 2012"),"taskName":"P Job","status":"SUCCEEDED"},
		{"startDate":new Date("Sun Dec 09 11:08:42 EST 2012"),"endDate":new Date("Sun Dec 09 11:33:42 EST 2012"),"taskName":"N Job","status":"FAILED"},
		{"startDate":new Date("Sun Dec 09 12:27:15 EST 2012"),"endDate":new Date("Sun Dec 09 19:28:16 EST 2012"),"taskName":"T Job","status":"SUCCEEDED"},
		{"startDate":new Date("Sat Dec 08 23:12:24 EST 2012"),"endDate":new Date("Sun Dec 10 00:26:13 EST 2012"),"taskName":"A Job","status":"KILLED"},
		{"startDate":new Date("Sat Dec 08 23:12:24 EST 2012"),"endDate":new Date("Sun Dec 09 02:26:13 EST 2012"),"taskName":"N Job","status":"KILLED"},
		{"startDate":new Date("Sat Dec 08 23:12:24 EST 2012"),"endDate":new Date("Sun Dec 09 02:26:13 EST 2012"),"taskName":"T Job","status":"KILLED"},
		{"startDate":new Date("Sat Dec 09 03:12:24 EST 2012"),"endDate":new Date("Sun Dec 09 05:26:13 EST 2012"),"taskName":"T Job","status":"KILLED"},
		{"startDate":new Date("Sat Dec 09 03:12:24 EST 2012"),"endDate":new Date("Sun Dec 09 05:26:13 EST 2012"),"taskName":"T Job","status":"KILLED"},
		{"startDate":new Date("Sat Dec 09 03:12:24 EST 2012"),"endDate":new Date("Sun Dec 09 05:26:13 EST 2012"),"taskName":"T Job","status":"KILLED"},
		{"startDate":new Date("Sat Dec 09 03:12:24 EST 2012"),"endDate":new Date("Sun Dec 09 05:26:13 EST 2012"),"taskName":"T Job","status":"KILLED"},
		{"startDate":new Date("Sat Dec 09 03:12:24 EST 2012"),"endDate":new Date("Sun Dec 09 05:26:13 EST 2012"),"taskName":"N Job","status":"KILLED"},
		{"startDate":new Date("Sat Dec 09 03:12:24 EST 2012"),"endDate":new Date("Sun Dec 09 05:26:13 EST 2012"),"taskName":"D Job","status":"KILLED"},
		{"startDate":new Date("Sat Dec 09 03:12:24 EST 2012"),"endDate":new Date("Sun Dec 09 05:26:13 EST 2012"),"taskName":"A Job","status":"KILLED"}];
		
		that.taskStatus = {
		    "SUCCEEDED" : "bar",
		    "FAILED" : "bar-failed",
		    "RUNNING" : "bar-running",
		    "KILLED" : "bar-killed"
		};
		
		that.taskNames = [ "D Job", "P Job", "A Job", "N Job", "T Job" ];    // this array determines the order of the tasks
		that.timeFormat = "%d.%m.%y";                         // Label format at the x-axis
	};

	this.afterUpdate = function() {
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/

		var owner = that.$();
		var margin = {
		     top : 20,
		     right : 40,
		     bottom : 40,
		     left : 120
		};
		
		if(!that._gantt) {
			org_scn_community_basics.determineOwnSize(that);
			
			that._gantt = d3plug.gantt(that._containerWidth, that._containerHeight, margin);
		}

		this.readRealData();
		
		that._gantt.taskTypes(that.taskNames);
		that._gantt.taskStatus(that.taskStatus);
		that._gantt.tickFormat(that.timeFormat);
		
		that._gantt.margin(margin);
		
		if(!that._drawn) {
			var innerId = that.oControlProperties.id;
			that._gantt.draw(innerId, that.tasks);

			var callback = function(width, height) {
				if(width > 0){
					that._gantt.width(width-margin.left-margin.right-5);
				}
					
				if(height > 0) {
					that._gantt.height(height-margin.top-margin.bottom-5);
				}

				that._gantt.redraw(that.tasks);
			}

			org_scn_community_basics.resizeContentAbsoluteLayout (that, that._gantt, callback);
			that._drawn = true;
		} else {
			that._gantt.redraw(that.tasks);
		}
		
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
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
		
		that.tasks = [];
		for (var actI in activities) {
			var act = activities[actI];

			if(that.hashCategories[act.category] == undefined) {
				that.hashCategories[act.category] = {
					key: act.category,
					text: "Unknown" + act.category
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

				that.tasks.push(actO);
			}
		}
	};

	this.makeDate = function (inputDate) {
		var date = org_scn_community_basics.getDateValue (inputDate);
		return date;
	};
	

	/* COMPONENT SPECIFIC CODE - START METHODS*/

	/* COMPONENT SPECIFIC CODE - END METHODS*/

	org_scn_community_component_Core(that, myComponentData);
	
	return that;
};

define([myComponentData.requireName], function(basicsactivityviewer){
	myComponentData.instance = ActivityViewer;
	return myComponentData.instance;
});

}).call(this);