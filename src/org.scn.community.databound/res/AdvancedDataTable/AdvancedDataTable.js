(function() {
	 var myScript = $("script:last")[0].src;
	 var ownComponentName = "org.scn.community.databound.AdvancedDataTable";
	 var _readScriptPath = function () {
		 var scriptInfo = org_scn_community_basics.readOwnScriptAccess(myScript, ownComponentName);
		 return scriptInfo;
	 };
	 /** end of recognition of script path */
	 /** RequireJS Config **/
	 var pathInfo = _readScriptPath();
	 sap.zen.Dispatcher.instance.pauseDispatching();
	 var sdkReqs = require.config({
		 context : "sdk",
		 paths: { 
			 // 'jquery' : pathInfo.mainSDKPath + "org.scn.community.databound/os/jquery-datatables/js/jquery",
			 // 'datatables' : pathInfo.mainSDKPath + "org.scn.community.databound/os/jquery-datatables/js/jquery.dataTables",
		 },
		 urlArgs: "v=" + org_scn_community_require.jsVersion,
	 });
	 sdkReqs(["require"], function(require) {
		 /**
		 * AdvancedDataTable
		 */
		 AdvancedDataTable.prototype = org_scn_community_databound_Base;
		 AdvancedDataTable.prototype.constructor = AdvancedDataTable;
		 AdvancedDataTable.prototype.toString = function(){
	    	 return ownComponentName;
	     }
	     function AdvancedDataTable() {
	    	 var that = this;
	    	 // Call super
	    	 org_scn_community_databound_Base.call(this,{
	    		/*
	    		 * concatenateDimensions
	    		 * rowClicked
	    		 */
	    		 displayLength : { 
	    			opts : {
	    				desc : "Rows per Page",
	    				cat : "Behavior",
	    				tooltip : "Rows per Page",
	    				apsControl : "spinner"
	    			}
	    		},
	    		selectedRow : { 
	    			value : "",
	    			opts : {
	    				desc : "Data",
	    				cat : "Data",
	    				tooltip : "Selected Value",
	    				noAps : true
	    			}
	    		},paging : { 
	    			opts : {
	    				desc : "Enable Pagination",
	    				cat : "Behavior",
	    				tooltip : "Enable Pagination",
	    				apsControl : "checkbox"
	    			}
	    		},pagingType : {
	    			opts : {
	    				apsControl : "combobox",
	    				desc : "Paginaton Type",
	    				cat : "Behavior",
	    				options : [
	    					{ key : 'simple', text : 'Simple'},
	    					{ key : 'simple_numbers', text : 'Simple Numbers'},
	    					{ key : 'full', text : 'Full'},
	    					{ key : 'full_numbers', text : 'Full Numbers'}
	    				]
	    			}
	    		},ordering : { 
	    			opts : {
	    				desc : "Enable Sorting",
	    				cat : "Behavior",
	    				tooltip : "Enable Sorting",
	    				apsControl : "checkbox"
	    			}
	    		},searching : { 
	    			opts : {
	    				desc : "Enable Searching",
	    				cat : "Behavior",
	    				tooltip : "Enable Searching",
	    				apsControl : "checkbox"
	    			}
	    		},info : { 
	    			opts : {
	    				desc : "Enable Info",
	    				cat : "Behavior",
	    				tooltip : "Enable Info",
	    				apsControl : "checkbox"
	    			}
	    		},formatting : { 
	    			value : "",
	    			opts : {
	    				desc : "Formatting Rules",
	    				cat : "Formatting",
	    				tooltip : "Conditional Formatting Rules",
	    				apsControl : "formatting"
	    			}
	    		}
	    	 });
	    	 this.componentInfo.title = "Advanced Data Table";
		    	this.componentInfo.description = "TBD";
		    	this.componentInfo.icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAFmSURBVDhPpZA7SwNBFIXnf/ggiK2Vf2DAv+ADROMUYmdjpQgSSBMfhWCCQQlYBXygloJNmoRoVBR8IBbiLzAiqDFrjufObsi6Zo3ohY+5e+bew5lVarwENXYENVqEGiHDeagM3FO+m2kyKzuyK03mHig9AkVy/sTBFeD6GTgtu0jv1844s/tAzdBERYu44kVPFjAHQPqEF2mgaxvo3HLp2qHGBHLWte49ajaBREuRpMcqiRag2hJk3mMBqmPRPetaO/u+fTfBJRP0bgITh8D6BQ0GCwjWze2d1zVqKbUWYtCf90Ya1cxgNpFs8gS+Xw0V7EIrZuLLIQkG8qg4NVSqjsX5qNkFOa32Tng/Ncf/9KOBDzGQ87Xi4OWtavvJ6TgNNnL4hsl9iRpGLBajAYelNBclQfa4bA2CJQvB+reBsQb+6HV++QTXICSB/wcKshDUjPEMZEnn/mqgGTnCxg+1iNYt0UbjE3akCrn/ESejAAAAAElFTkSuQmCC";
		    	this.componentInfo.topics.push({
		    		title : "Advanced Data Table",
		    		content : "TBD"
		    	});

			/**
			 * Fires after property change.
			 */
			this.afterUpdate = function() {
				try{
					this.$().empty();
					var options = {
						displayLength : this.displayLength(),
						paging : this.paging(),
						pagingType : this.pagingType(),
						ordering : this.ordering(),
						searching : this.searching(),
						info : this.info()
					};
					
					var table = "<table id='" + this.$().attr("id") + "_table' class='display'>"+
					"<thead><tr>";
					// Dimensions
					for(var i=0;i<this.flatData.dimensionHeaders.length;i++){
						table += "<th>" + this.flatData.dimensionHeaders[i] + "</th>"; 
					}
					// Columns (Concatenated)
					for(var i=0;i<this.flatData.columnHeaders.length;i++){
						table += "<th>" + this.flatData.columnHeaders[i] + "</th>"; 
					}
					table +="</tr></thead>";
					// Rows
					table +="<tbody>";
					for(var i=0;i<this.flatData.values.length;i++){
						table += "<tr>";
						var rowHeader2D = this.flatData.rowHeaders2D[i];
						var dataRow = this.flatData.values[i];
						for(var j=0;j<rowHeader2D.length;j++){
							table +="<td>" + rowHeader2D[j];
						}
						for(var j=0;j<dataRow.length;j++){
							table +="<td>" + dataRow[j];
						}
						table+="</tr>"; 
					}
					table+="</tbody></table>";
					this.$().html(table);
					$("#" + this.$().attr("id") + "_table").DataTable(options);
				}catch(e){
					alert(e);
				}
			};
			var parentInit = this.init;
	    	this.init = function(){
	    		parentInit.call(this);
	    		this.$().addClass("AdvancedDataTable");
	    		this.$().css({"overflow" : "hidden"});
	    	}
	    	this.rowClicked = function(i){
	    		// alert(i);
	    	};
	     }
		sap.designstudio.sdk.Component.subclass(ownComponentName, AdvancedDataTable);	// End of SDK
		sap.zen.Dispatcher.instance.resumeDispatching();
	 });//End of Require Callback 	
})();// End of closure
