/**
 * Base Databound Class
 */
define(["./VizCore","./../../modules/component.databound"], function(VizCore, org_scn_community_databound) {
	VizCoreDatabound.prototype = VizCore;
	VizCoreDatabound.constructor = VizCoreDatabound;
	function VizCoreDatabound(options){
		this.flatData = null;
		this.flattenedData = {};
		this.org_scn_community_databound = org_scn_community_databound;
		/*
		 * Old databound logic
		 */
		this.flattenData = function (value, options) {
			// Make a copy so we don't mess with references
			this.flatData = null;
			try{
				this.flatData = org_scn_community_databound.flatten(this.data(),{
					ignoreExpandedNodes : this.ignoreExpandedNodes(),
					ignoreResults : this.ignoreTotals(),
					useMockData : this.useMockData(),
					swapAxes : this.swapAxes()
				});
				// Add event trigger logic - Mike Howles - 02/08/2016
				if(this.onFlatten) {
					// Better way than throttling with setTimeout - Mike Howles 02/24/2016
					if(this._sPriorFlatData != JSON.stringify(this.flatData)) this.onFlatten();
				}
				this._sPriorFlatData = JSON.stringify(this.flatData)
			}catch(e){
				// alert("Problem flattening data:\n\n"+e);
			}
		};
		/*
		 * Enhanced logic for multiple properties that can be databound using property binding
		 * Mike Howles - 01/08/2016
		 */
		this.flatten = function (property, propertyConfig, value, options) {
			// Make a copy so we don't mess with references
			this.flattenedData[property] = null;
			var config = this.parse(this[propertyConfig]());
			if(!config) config = {
				ignoreExpandedNodes : true,
				ignoreResults : true,
				useMockData : true,
				swapAxes : false
			};
			try{
				this.flattenedData[property] = org_scn_community_databound.flatten(this[property](),{
					ignoreExpandedNodes : config.ignoreExpandedNodes,
					ignoreResults : config.ignoreTotals,
					useMockData : config.useMockData,
					swapAxes : config.swapAxes
				});	
				alert(JSON.stringify(this[property]()));
				alert(JSON.stringify(this.flattenedData[property]));
			}catch(e){
				// alert("Problem flattening data:\n\n"+e);
			}
		};
		var that = this;
		var properties = {
			data : {
				value : null,
				onChange : this.flattenData,
				opts : {
					desc : "Data",
					cat : "Data",
					tooltip : "Data from datasource",
					value : null,
					apsControl : "dataselection"
				}
			},
			ignoreTotals : {
				value : true,
				onChange : this.flattenData,
				opts : {
					desc : "Ignore Totals",
					cat : "Data",
					tooltip : "Whether to ignore totals",
					apsControl : "checkbox"	
				}
			},
			ignoreExpandedNodes : {
				value : true,
				onChange : this.flattenData,
				opts : {
					desc : "Ignore Expanded Hierarchy Nodes",
					cat : "Data",
					tooltip : "Whether to ignore expanded hierarchy nodes",
					apsControl : "checkbox"	
				}
			},
			swapAxes : {
				value : false,
				onChange : this.flattenData,
				opts : {
					desc : "Swap Axes",
					cat : "Data",
					tooltip : "Whether to swap axes",
					apsControl : "checkbox"
				}
			},
			useMockData : {
				value : false,
				onChange : this.flattenData,
				opts : {
					desc : "Use Mock Data when no datasource",
					cat : "Data",
					tooltip : "Use Mock Data when no datasource",
					apsControl : "checkbox"
				}
			}
		};
		for(var prop in options) properties[prop] = options[prop];
		VizCore.call(this,properties);
		this.componentInfo.title = "Databound Component";
		this.componentInfo.icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAk5JREFUeNpsU8tu00AUPeNXQh7NA6qKBAqBDYI1LBBCYlMWCJAQZVMWgMQHAN9B+gFIwAKQUNkA6oYlQkgQaIElBBBSiRqwnYfTh+143DuT2CQRk5zYc+ecO/eezLAwDMEYw4Ol58fp/Q7hPCGF/wzibRJeEu5en79Yk1rx8/DZi1u6rlfLpX0o5PLITmUh4hNiOF0HrU4bvxtr8H3/9rXLFxY1scg5rx49ckwS+0EAu9UGwsnt5Re5qZzE6ueVKk0XFbEmdqvsLyGfyyJhaFQWF2lpYRxiTXAqs6W4QlkBUxS8q31AqVzCnmIRmUxKEiKSKF98eptbsCwb3+p10rCRBEQIQ4b19T9E6MAwDCQTCaR3pcAph+tuYdv14Pdd0Tsi4/8lIChUhaapEqqqyDkntTJ8FzEeqsIvBDyQFcUJWra13La756and6NYKKKQz0vRKELywHF6sG0bpmWS2d5ynEDXDXfhyjy+1n8QoYW1RoMq0aCruuy1T2X7QZ9aSuLwoYM4O3cGT54uuXGCdCZzqbbyCeXyXlQOzNJ80kQBBb2NgYkfV79ITZxAtMODEI1GE6bZhi5MNMjEFJnIBya6ngfPH5gYiOBwKAM9k65G/arDZxBwerIxLySPsfhfUKJMHDwmRFDY+DzaBCPHXCb49fN71bQsdHuOLFFTNWniGCjm0VrH6aJp/pUaWf3wUMws3Lg5d+LkqauZ7NRpiidDcRnC8ctEY7vndF+/f/vm0eP7916RtslGTlWaMCPuy2hrE0O41yE0CRtCuyPAACZBGVgAMt/bAAAAAElFTkSuQmCC";
		this.componentInfo.author = "Mike Howles";
		this.componentInfo.description = "Description";
		this.componentInfo.topics.push({
			title : "Data Binding",
			content : "This component supports databinding.  Data typically comes from a BW, HANA or UNX source.  SDK Data Sources are also supported.  Properties include:<br/><ul>"+
			"<li>Ignore Totals - Allows you to ignore sub-totals/totals in your Data Source.</li>"+
			"<li>Ignore Expanded Nodes - Allows you to ignore hierarchy nodes that are expanded as this usually distorts visual results.</li>"+
			"<li>Use Mock Data - Allows you to preview visualization content when no Data Source is yet assigned.</li>"+
			"<li>Swap Axes - Interpret Rows as Columns, and Columns as Rows.</li>"+
			"</ul>"
		});
		this.componentInfo.supportsFlatData = true;
		/**
		 * Relays Data Source Metadata over to Additional Properties Sheet.
		 */
		this.getAPSMetaData = function(){
			try{
				return JSON.stringify({
	    			msg : "Success",
	    			data : this.data()
	    		});	
			}catch(e){
				var errMsg = "Component error in getAPSMetaData:\n\n" + e;
	    		return JSON.stringify({
	    			msg : errMsg,
	    			data : {}
	    		})
				alert(errMsg);
			}
		}
		/**
		 * Relays Flattened Data to Additional Properties Sheet.
		 */
		this.getAPSFlatData = function(){
			try{
				return JSON.stringify({
	    			msg : "Success",
	    			data : this.flatData
	    		});
	    	}catch(e){
	    		var errMsg = "Problem returning flattened data to APS.\n\n" + e;
	    		return JSON.stringify({
	    			msg : errMsg,
	    			data : {}
	    		})
				alert(errMsg);
			}
		}
		/**
		 * Determine column name 01/08/2016 - Mike
		 */
		this.determineColumnName = function(columnObj){
			if(!columnObj) return null;
			if(columnObj.columnType == "measure") return this.determineMeasureName(columnObj.measure);
			if(columnObj.columnType == "dimension") return this.determineDimensionName(columnObj.dimension);
			return "Unknown type: " + columnObj.columnType;
		}
		/**
		 * Determine column index 01/08/2016 - Mike
		 */
		this.determineColumnIndex = function(columnObj){
			if(!columnObj) return null;
			if(columnObj.columnType == "measure") return this.determineMeasureIndex(columnObj.measure);
			if(columnObj.columnType == "dimension") return this.determineDimensionIndex(columnObj.dimension);
			return null;
		}
		/**
		 * Determine dimension name 01/08/2016 - Mike
		 */
		this.determineDimensionName = function(dimensionObj){
			if(typeof dimensionObj === "string") return dimensionObj;
			var fieldName = "UNKNOWN";
			if(!dimensionObj) return null;
			if(dimensionObj.fieldType=="unassigned"){
				fieldName = null;
			}
			if(dimensionObj.fieldType=="name"){
				fieldName = dimensionObj.fieldName;
			}
			if(dimensionObj.fieldType=="position"){
				if(this.flatData && this.flatData.dimensionHeadersKeys){
					var fieldPosition = dimensionObj.fieldPosition;
					if(this.flatData.dimensionHeadersKeys.length>=fieldPosition-1){
						fieldName = this.flatData.dimensionHeadersKeys[fieldPosition];
					}
				}
			}
			return fieldName;
		}
		/**
		 * Determine Field Name
		 */
		this.determineMeasureName = function(measureObj){
			if(typeof measureObj === "string") return measureObj;
			var fieldName = "UNKNOWN";
			if(!measureObj) return null;
			if(measureObj.fieldType=="unassigned"){
				fieldName = null;
			}
			if(measureObj.fieldType=="name"){
				fieldName = measureObj.fieldName;
			}
			if(measureObj.fieldType=="position"){
				if(this.flatData && this.flatData.columnHeadersKeys){
					var fieldPosition = measureObj.fieldPosition;
					if(this.flatData.columnHeadersKeys.length>=fieldPosition-1){
						fieldName = this.flatData.columnHeadersKeys[fieldPosition];
					}
				}
			}
			return fieldName;
		}
		/**
		 * Determine Field Index
		 */
		this.determineMeasureIndex = function(measureObj){
			if(typeof measureObj === "string") return -1;
			var fieldIndex = -1;
			if(!measureObj) return -1;
			if(measureObj.fieldType=="unassigned"){
				fieldIndex = -1;
			}
			if(measureObj.fieldType=="position"){
				if(this.flatData.columnHeadersKeys.length>measureObj.fieldPosition) fieldIndex = measureObj.fieldPosition;
			}

			if(measureObj.fieldType=="name"){
				if(this.flatData && this.flatData.columnHeadersKeys){
					var fieldIndex = -1;
					if(this.flatData.columnHeadersKeys){
						for(var i = 0; i<this.flatData.columnHeadersKeys.length;i++){
							if(this.flatData.columnHeadersKeys[i]==measureObj.fieldName) fieldIndex = i;
						}
					}
				}
			}
			return fieldIndex;
		}
		/**
		 * Determine Field Index
		 */
		this.determineDimensionIndex = function(dimensionObj){
			if(typeof dimensionObj === "string") return -1;
			var fieldIndex = -1;
			if(!dimensionObj) return -1;
			if(dimensionObj.fieldType=="unassigned"){
				fieldIndex = -1;
			}
			if(dimensionObj.fieldType=="position"){
				if(this.flatData.dimensionHeadersKeys.length>dimensionObj.fieldPosition) fieldIndex = dimensionObj.fieldPosition;
			}
			if(dimensionObj.fieldType=="name"){
				if(this.flatData && this.flatData.dimensionHeadersKeys){
					var fieldIndex = -1;
					if(this.flatData.columnHeadersKeys){
						for(var i = 0; i<this.flatData.dimensionHeadersKeys.length;i++){
							if(this.flatData.dimensionHeadersKeys[i]==dimensionObj.fieldName) fieldIndex = i;
						}
					}
				}
			}
			return fieldIndex;
		}
		var parentInit = this.init;
		this.init = function(){
			parentInit.apply(this);
			this.$().addClass("Databound");
		}
	}
	return VizCoreDatabound;
});
