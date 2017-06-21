var sharedPath = sap.zen.createStaticSdkMimeUrl("org.scn.community.lumiradesigner.shared", "");
// zen/mimes/sdk_include/org.scn.community.lumiradesigner.shared/

requirejs.config({
	paths : {
		vg : "../" + sharedPath + "os/vega/vega.min"
	},
	shim : {
		vg : {deps : ["d3"]}
	}
});
define(["d3", "vg", "./../../org.scn.community.lumiradesigner.shared/os/scn/component.databound", "sap/designstudio/sdk/component"],function(d3, vega, databound, Component){
	Component.subclass("org.scn.community.lumiradesigner.vega.Vega", function(){
		this.props = {
			schema : { },
			dataSpec : { },
			description : { },
			padding : { },
			autosize : { },
			data : { },
			spec : { },
			config : { },
			axes : { },
			scales : { },
			marks : { },
			legends : { },
			signals : { }
		};
		/*
		 * Create the aforementioned getter/setter and attach to 'this'.
		 */
		for(var property in this.props){
			this[property] = function(property){
				return function(value){
					if(value===undefined){
						return this.props[property].value;
					}else{
						this.props[property].value = value;
						this.props[property].changed = true;
						if(this.props[property].onChange) {
							this.props[property].onChange.call(this,this.props[property].value);
						}
						return this;
					}
				};
			}(property);
		}
		this.parse = function(s){
			if(s==null || s===undefined || s == ""){
				console.log("JSON string is empty.");
				return null;
			}else{
				try{
					return JSON.parse(s);
				}catch(e){
					console.log("Error parsing JSON string:\n\n" + s);
					return null;
				}
			}
			return null;
		},
		this.afterUpdate = function(){
			this.$().empty();
			var that = this;
			var id = this.$().attr("id");
			var width = this.$().innerWidth();
			var height = this.$().innerHeight();			
			var spec = {};
			try{
				var json = databound.json(this.data());
				var flat = databound.flatten(this.data());
				// spec = JSON.parse(this.spec());
				// delete spec.data;
				spec["$schema"] = this.schema();
				spec.description = this.description();
				spec.autosize = this.autosize(); 
				spec.padding = this.padding() || 0;
				spec.axes = this.parse(this.axes());
				spec.scales = this.parse(this.scales());
				spec.marks = this.parse(this.marks());
				spec.legends = this.parse(this.legends());
				spec.signals = this.parse(this.signals());
				spec.data = this.parse(this.dataSpec());
				
				var strSpec = JSON.stringify(spec);
				// Replace relative row header placeholders
				strSpec = strSpec.replace(/{rowheader-position-(.*?)}/g, function(a,b){
					var ret = "category";
					var columnIndex = parseInt(b);
					if(flat.dimensionHeadersKeys.length>=columnIndex) ret = flat.dimensionHeadersKeys[columnIndex];
					return ret;
				});
				// Replace relative column placeholders
				strSpec = strSpec.replace(/{measure-position-(.*?)}/g, function(a,b){
					if(flat && flat.columnHeaders){
						var ret = flat.columnHeaders[0];
						var columnIndex = parseInt(b);
						if(flat.columnHeaders.length>=columnIndex) ret = flat.columnHeaders[columnIndex];
					}else{
						ret = null;
					}
					return ret;
				});
				spec = JSON.parse(strSpec);
				for(var i=0;i<spec.data.length;i++){
					spec.data[i].values = json;	//temporary.  change to multisource soon
				}
			}catch(e){
				this.$().html("Spec JSON is empty or incorrect.<br/><br/>" + e);
				return;
			}
			
			width = width - parseInt(spec.padding) * 2;
			height = height - parseInt(spec.padding) * 2;
			
			spec.width = width;
			spec.height = height;
			
			console.log(spec);
			console.log(JSON.stringify(spec));
			try{
				var view = new vega.View(vega.parse(spec))
				  .renderer("svg") 		 // set renderer (canvas or svg)
				  .initialize( "#" + id) // initialize view within parent DOM container
				  .hover()          	 // enable hover encode set processing
				  .run();                // run the dataflow and render the view
			}catch(e){
				that.$().html("Error while parsing spec:" + e);
			}
			
		};
		this.measureSize = function(that){
			var currentWidth = that.$().outerWidth();
			var currentHeight = that.$().outerHeight();
			if(currentWidth != that._previousWidth || currentHeight != that._previousHeight){
				this.afterUpdate();
			}else{
				// Sizes are the same.  Don't redraw, but poll again after an interval.
			}
			that._previousWidth = currentWidth;
			that._previousHeight = currentHeight;
			that._poller = window.setTimeout(function(){
				that.measureSize(that)
			},250);
		};
		this.init = function(){
			var that = this;
			this.poller = window.setTimeout(function(){
				that.measureSize(that)
			}, 250);
		};
		this.getDatasets = function(){
    		try{
    			var o = {};
    			for(var d=0;d<10;d++){
    				try{
    					var f = databound.flatten(this.properties["dataset"+(d+1)],{
    						ignoreExpandedNodes : true,
    						ignoreResults : true,
    						useMockData : false,
    						swapAxes : false,
    						dimensionSeparator : ","
    					});
    					var all = [{
    						key : "#",
    						text : "(Unassigned)"
    					}];
    					var dimensions = [{
    						key : "#",
    						text : "(Unassigned)"
    					}];
    					for(var i=0;i<f.dimensionHeadersKeys.length;i++){
    						dimensions.push({
    							key : f.dimensionHeadersKeys[i],
    							text : f.dimensionHeaders[i]
    						});
    						all.push({
    							key : f.dimensionHeadersKeys[i],
    							text : f.dimensionHeaders[i]
    						});
    					}
    					var measures = [{
    						key : "#",
    						text : "(Unassigned)"
    					}];
    					for(var i=0;i<f.columnHeadersKeys.length;i++){
    						measures.push({
    							key : f.columnHeadersKeys[i],
    							text : f.columnHeaders[i]
    						});
    						all.push({
    							key : f.columnHeadersKeys[i],
    							text : f.columnHeaders[i]
    						});
    					}
    					o["dataset"+(d+1)] = {
    						dimensions : dimensions,
    						measures : measures,
    						all : all
    					}
    				}catch(e){
    					o["dataset"+(d+1)] = null;
    				}
    				
    			}
    			return JSON.stringify(o);		
    		}catch(e){
    			alert("Problem return multi-data source metadata to APS");
    		}
    	 };
	});
});