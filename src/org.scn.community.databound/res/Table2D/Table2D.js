(function() {
	 var myScript = $("script:last")[0].src;
	 var ownComponentName = "org.scn.community.databound.Table2D";
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
			d3 :		pathInfo.mainSDKPath + "org.scn.community.databound/os/d3v3/d3.min",
			d3tip :		pathInfo.mainSDKPath + "org.scn.community.databound/os/d3v3/d3-tip"
		 }
	 });
	 sdkReqs(["require","d3","d3tip"], function(require,d3,d3tip) {
		 var tip = d3tip()
		 	.attr('class', 'd3-tip')
		 	.html(function(d) { 
		 		var html = "<span>";
		 		var sep = "";
		 		html += d.value;
		 		html+="</span>";
		 		return html;
		 	})
		 	.offset([-12, 0]);
		 /**
		 * 2-D Table
		 */
		 Table2D.prototype = org_scn_community_databound_Base;
		 Table2D.prototype.constructor = Table2D;
		 Table2D.prototype.toString = function(){
	    	 return ownComponentName;
	     }
	     function Table2D() {
	    	 var that = this;
	    	 // Call super
	    	 org_scn_community_databound_Base.call(this,{
	    		/*
	    		 * concatenateDimensions
	    		 * rowClicked
	    		 */
	    		selectedRow : { 
	    			value : "",
	    			opts : {
	    				desc : "Data",
	    				cat : "Data",
	    				tooltip : "Selected Value",
	    				noAps : true
	    			}
	    		}
	    	 });

			/**
			 * Fires after property change.
			 */
			this.afterUpdate = function() {
				try{
				var vals = [];
				if(this.flatData && this.flatData.formattedValues && this.flatData.formattedValues.length > 0) {
					vals = this.flatData.formattedValues.slice();
				}else if(this.flatData && this.flatData.values && this.flatData.values.length > 0){
					vals = this.flatData.values.slice();
				}else{
					// Something happened.
					this.flatData = {
						columnHeaders : ["No Data"],
						rowHeaders : ["No Data"],
						values : [[0]],
						formattedValues : [["0 data"]]
					};
					vals = this.flatData.formattedValues.slice();
				}
				//this.firePropertiesChanged(["stringData"]);
				// Splice in row header label
				for(var i=0;i<vals.length;i++){
					if(this.flatData.rowHeaders.length>=i)
					vals[i].splice(0,0,this.flatData.rowHeaders[i]);
				}
				// Create Column Headers
				var colHeaders = this.thead.selectAll(".col-header")
					.data(this.flatData.columnHeaders)
					.text(function(d){return d});
				
				colHeaders.enter()
					.append("th")
					.attr("class","header col-header")
					.html(function(d){return d});
				
				colHeaders.exit().remove();
				// Create Rows and Row Headers
				var rows = this.tbody.selectAll(".row")
					.data(vals);
				// Create Rows
				rows.enter()
					.append("tr")
					.classed("row",true)
					.classed("row-secondary", function(d,i){return ((i+1)/2 == Math.floor((i+1)/2));})
					.on("click", this.rowClicked);
				
				rows.exit().remove();
				
				// Create Row Cells
				var rowCells = rows.selectAll(".cell")
					.data(function(d,i){return d;})
					.text(function(d,i,pI){ return d;});
				
				rowCells.enter()
					.append("td")
					.classed("cell",true)
					.classed("row-header", function(d,i){return i==0;})
					.text(function(d,i,pI){ return d;});
				
				rowCells.exit().remove();

				}catch(e){
					alert(e);
				}
			};
			var parentInit = this.init;
	    	this.init = function(){
	    		parentInit.call(this);
	    		this.$().addClass("Table2D");
	    		this.$().css({"overflow" : "hidden"});
	    		this.table = d3.select("#"+this.$().attr("id")).append("table");
	    		this.thead = this.table.append("thead").append("tr");
	    		this.thead.append("th").classed("header top-left",true);
				this.tbody = this.table.append("tbody");
	    	}
	    	this.rowClicked = function(i){
	    		// alert(i);
	    	};
	     }
		sap.designstudio.sdk.Component.subclass(ownComponentName, Table2D);	// End of SDK
		sap.zen.Dispatcher.instance.resumeDispatching();
	 });//End of Require Callback 	
})();// End of closure
