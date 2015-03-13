var org_scn_community_databound = org_scn_community_databound || {};
org_scn_community_databound.centralDataStorage = org_scn_community_databound.centralDataStorage || {}; 

(function(){


	
var ResultSetInfo = function () {

/*AUTO PROPERTIES - START*/

    this.data = function(value) { if (value === undefined) { return this._data; } else { this._data = value; return this; } };
	    		
/*AUTO PROPERTIES - END*/

    var that = this;
	
	this.init = function() {
		// nothing to do
	};
	
	this.afterUpdate = function() {
		if(!that._afterRender) {
			// Get the context of the canvas element we want to select
			var $ = document; // shortcut
			that._jqThis = that.$();
			
			that._canvas = document.createElement('canvas');
			that._canvas.id = that._jqThis[0].id + "_canvas";
			that._canvas.className = "org-scn-NiceChart-Canvas";
			that._canvas.style.position = 'absolute';
			that._canvas.style.top = '0';
			that._canvas.style.height =  that._jqThis.outerHeight() + 'px';
			
			that._jqThis[0].appendChild(that._canvas);

			that.onPropertyChanged();
			
			that._ctx = that._canvas.getContext("2d");
			
			that._afterRender = true;
		}

		var afterPrepare = function () {
			that.onPropertyChanged();
			
			var dataSourceInfo = {};
			dataSourceInfo.plainData = that._data;
			dataSourceInfo.flatData = that._flatData;
			
			org_scn_community_databound.centralDataStorage[that.oComponentProperties.id] = dataSourceInfo;
		}
		
		that.getPreparedData(afterPrepare);
	};
	
	this.onPropertyChanged = function () {
	}
	
	this.getPreparedData = function (afterPrepare) {
		var data = {};
		
		var flatData = {};
		
		if(org_scn_community_databound.hasData(that._data)) {
			var options = org_scn_community_databound.initializeOptions();
			options.ignoreResults = true;
			flatData = org_scn_community_databound.flatten(that._data, options);
			org_scn_community_databound.toRowTable(flatData,options);

			this.processData(flatData, afterPrepare);
			return;
		} else {
			flatData = org_scn_community_databound.getSampleDataFlat(pathInfo, this.processData, afterPrepare);
			org_scn_community_databound.toRowTable(flatData, options);
			
			this.processData(flatData, afterPrepare);
			return;
		}
	};
	
	this.processData = function (flatData, afterPrepare) {
		that._flatData = flatData;
		afterPrepare();
	};
	
};

define(["databoundresultsetinfo"], function(databoundresultsetinfo){
	org_scn_community_components.databound.ResultSetInfo = ResultSetInfo;
	return ResultSetInfo;
});

}).call(this);