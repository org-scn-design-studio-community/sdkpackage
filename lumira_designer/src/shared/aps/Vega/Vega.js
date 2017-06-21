try{
	sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.lumiradesigner.VegaPropertyPage", function () {
		var that = this;
		// Port later
		this.specData = "";
		this.spec = function(v){
			if(v===undefined){
				return this.specData;
			}else{
				this.specData = v;
				// this.editor.setValue(v);
				return this;
			}
		};
		
		// Component Property Metadata.
		this.properties = {
			description : {
				title : "Description",
				tooltip : "A text description of the visualization."
			},
			dataSpec : {
				title : "Data",
				tooltip : "Data Operations"
			},
			background : {
				title : "Background Color",
				tooltip : "The background color of the entire view (defaults to transparent)."
			},
			autosize : {
				title : "Autosize",
				tooltip : "Sets how the visualization size should be determined."
			},
			padding : {
				title : "Padding",
				tooltip : "The padding in pixels to add around the visualization.",
				// serialize : true
			},
			config : {
				title : "Config",
				tooltip : "Configuration settings with default values for marks, axes and legends.",
				//serialize : true
			},
			signals : {
				title : "Signals",
				tooltip : "	Signals are dynamic variables that parameterize a visualization.",
				// serialize : true
			},
			scales : {
				title : "Scales",
				tooltip : "Scales map data values (numbers, dates, categories, etc) to visual values (pixels, colors, sizes).",
				// serialize : true
			},
			projections : {
				title : "Projections",
				tooltip : "Cartographic projections map (longitude, latitude) pairs to projected (x, y) coordinates.",
				// serialize : true
			},
			axes : {
				title : "Axes",
				tooltip : "Coordinate axes visualize spatial scale mappings.",
				// serialize : true
			},
			legends : {
				title : "Legends",
				tooltip : "Legends visualize scale mappings for visual values such as color, shape and size.",
				// serialize : true
			},
			marks : {
				title : "Marks",
				tooltip : "Graphical marks visually encode data using geometric primitives such as rectangles, lines, and plotting symbols.",
				// serialize : true
			}
		}
		var that = this;
		// Property Sheet Model
		this.model = new sap.ui.model.json.JSONModel();
		this.model.setData({ });
		
		for(property in this.properties){
			this.model.setProperty("/" + property, {});
			this.model.setProperty("/" + property + "/title", this.properties[property].title || property);		
			this[property] = function(property){
				return function(s){
					if(s===undefined){
						if(this.properties[property].serialize){
							return JSON.stringify(this.model.getProperty("/" + property + "/value"));
						}else{
							return this.model.getProperty("/" + property + "/value");							
						}
					}else{
						if(this.properties[property].serialize){
							try{
								this.model.setProperty("/" + property + "/value", JSON.parse(s));								
							}catch(e){
								alert("An error occured while parsing property '" + property + ".\n\n" + "Value passed:\n\n" + s + "Error:\n\n" + e);
							}
						}else{
							this.model.setProperty("/" +  property + "/value", s);
						}
						return this;
					}
				};
			}(property);
		}
		this.getDatasets = function(){
			try{
				this.flatDatasets = JSON.parse(this.callRuntimeHandler("getDatasets"));
				for(var i=1;i<=10;i++){
					if(this.flatDatasets && this.flatDatasets["dataset" + i]){
						this.datasets["dataset" + i].setProperty("/", this.flatDatasets["dataset" + i]);
					}else{
						this.datasets["dataset" + i].setProperty("/", null);
					}
					
				}				
			}catch(e){
				alert("Problem retrieving JSON of datasets.\n\n" + e);
			}
		}
		this.changeHandler = function(instance){
			that.spec(instance.getValue());
			that.firePropertiesChanged(["spec"]);
		};
		this.componentSelected = function(){
			this.getDatasets();
		};
		this.init = function(){
			var that = this;
			var binding = new sap.ui.model.Binding(this.model, "/", this.model.getContext("/"));
			binding.attachChange(function(oEvent){
				var s = oEvent.getSource().getModel().getJSON();
				if(s && s!= ""){
					var changes = [];
					var o = JSON.parse(s);
					for(var f in o){
						var propvalue = JSON.stringify(o[f]);
						if(that.properties[f].oldValue != undefined && that.properties[f].oldValue != propvalue){
							changes.push(f);						
						}
						that.properties[f].oldValue = propvalue;
					}
					if(changes.length>0) {
						that.firePropertiesChanged(changes);
					}
				}
			});
			this.datasets = {};
			for(var i=1;i<=10;i++){
				var m = new sap.ui.model.json.JSONModel();
				m.setData({});
				// Stash models
				this.datasets["dataset" + i] = m;
				sap.ui.getCore().setModel(m,"dataset" + i);
			}
			this.getDatasets();
		};
	});
	// Make it so
	var propertyPage = new org.scn.community.lumiradesigner.VegaPropertyPage();
	sap.ui.getCore().attachInit(function() {
		try{
			propertyPage.shell = new sap.m.Shell({
				title : "Property Page",
				app: new sap.ui.core.ComponentContainer({
					height : "100%",
					name : "PropertyPage",
					propagateModel : true
				})
			});
			propertyPage.shell.setModel(propertyPage.model);
			sap.ui.getCore().setModel(propertyPage.model);
			var navStateModel = new sap.ui.model.json.JSONModel();
			navStateModel.setData({
			tabs : [
				{
					text : "Config",
					selected : true
				},{
					text : "Data",
					selected : false
				},{
					text : "Appearance",
					selected : false
				},{
					text : "Scales",
					selected : false
				},{
					text : "Axes",
					selected : false
				},{
					text : "Marks",
					selected : false
				},{
					text : "Legends",
					selected : false
				},{
					text : "Signals",
					selected : false
				}
			]});
			sap.ui.getCore().setModel(navStateModel, "navState");
			propertyPage.shell.placeAt("content");
		}catch(e){
			alert("Shell Error:\n\n" + e);
		}
	});

}catch(e){
	alert("Error starting Propery Page:\n\n" + e);
}