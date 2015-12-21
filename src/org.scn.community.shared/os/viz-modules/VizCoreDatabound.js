/**
 * Base Databound Class
 */
define(["./VizCore","./../../modules/component.databound"], function(VizCore, org_scn_community_databound) {
	VizCoreDatabound.prototype = VizCore;
	VizCoreDatabound.constructor = VizCoreDatabound;
	function VizCoreDatabound(options){
		this.flatData = null;
		this.org_scn_community_databound = org_scn_community_databound;
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
		var parentInit = this.init;
		this.init = function(){
			parentInit.apply(this);
			this.$().addClass("Databound");
		}
	}
	return VizCoreDatabound;
});
