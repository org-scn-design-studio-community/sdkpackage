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
			data : { },
			spec : { }
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
		this.afterUpdate = function(){
			var id = this.$().attr("id");
			var width = this.$().innerWidth();
			var height = this.$().innerHeight();			
			var spec;
			try{
				 spec = JSON.parse(this.spec());
				 delete spec.data;
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
			
			vg.parse.spec(spec, function(chart){
				var view = chart({
					el : "#" + id
				});
				view.update();
			});
		};
		this.measureSize = function(that){
			var currentWidth = that.$().outerWidth();
			var currentHeight = that.$().outerHeight();
			if(currentWidth != that._previousWidth || currentHeight != that._previousHeight){
				this.afterUpdate();
			}else{
				// Sizes are the same.  Don't redraw, but poll again after an interval.
			}
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
	});
});