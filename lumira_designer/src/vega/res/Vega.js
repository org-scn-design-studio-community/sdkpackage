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
define(["d3", "vg", "./../../org.scn.community.lumiradesigner.shared/os/scn/component.databound", "sap/designstudio/sdk/component"],function(d3, vg, databound, Component){
	Component.subclass("org.scn.community.lumiradesigner.vega.Vega", function(){
		this.props = {
			schema : { },
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
				console.log("JSON stringy is empty.");
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
				// spec = JSON.parse(this.spec());
				// delete spec.data;
				spec["$schema"] = this.schema();
				spec.description = this.description();
				spec.autosize = this.autosize(); 
				spec.padding = this.parse(this.padding());
				spec.axes = this.parse(this.axes());
				spec.scales = this.parse(this.scales());
				spec.marks = this.parse(this.marks());
				spec.legends = this.parse(this.legends());
				spec.signals = this.parse(this.signals());
			}catch(e){
				this.$().html("Spec JSON is empty or incorrect.");
				return;
			}
			var json = databound.json(this.data());
			spec.data = [
				{ 
					name : "table",
					values : json
				}
			];
			
			var paddingLeft = (spec.padding && spec.padding.left!=undefined)?spec.padding.left:0;
			var paddingRight = (spec.right && spec.padding.right!=undefined)?spec.padding.right:0;
			var paddingTop = (spec.padding && spec.padding.top!=undefined)?spec.padding.top:0;
			var paddingBottom = (spec.right && spec.padding.bottom!=undefined)?spec.padding.bottom:0;
			
			width = width - paddingLeft - paddingRight;
			height = height - paddingTop - paddingBottom;
			
			spec.width = width;
			spec.height = height;
			
			console.log(spec);
			try{
				vg.parse.spec(spec, function(chart){
					try{
						var view = chart({
							el : "#" + id,
							renderer : "svg"
						});
						view.update();					
					}catch(e){
						that.$().html("Error while updating view:" + e);
					}
				});
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