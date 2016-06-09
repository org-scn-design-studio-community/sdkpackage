/**
 * Feature Layer
 */
define(["./complexitem"], function () {
	/**
	 * Create UI5 Extension
	 */
	org.scn.community.aps.ComplexItem.extend("org.scn.community.aps.WMSLayer", {
		needsLabel : function () {
			return false;
		},
		metadata : {},
		/*
		 * Overrides parent
		 */
		hLabel : function (label, component, tt) {
			if (component instanceof org.scn.community.aps.ColorBuilder) {
				return component;
			} else {
				var hLayout = new sap.ui.commons.layout.HorizontalLayout({})
					//hLayout.addStyleClass("MeasureSelectorLayout");
					hLayout.addContent(new sap.ui.commons.Label({
						text : label,
						tooltip : tt,
						width : "100px"
					}));
				hLayout.addContent(component);
				return hLayout;
			}
		},
		_config : {},
		setValue : function (value) {
			var deltas = [];
			var oldValues = [];
			for (var i = 0; i < deltas.length; i++) {
				oldValues.push(this.getValue()[deltas[i]]);
			}
			org.scn.community.aps.ComplexItem.prototype.setValue.apply(this, arguments);
			var changed = false;
			for (var i = 0; i < deltas.length; i++) {
				if (oldValues[i] != this.getValue()[deltas[i]])
					changed = true;
			}
			if (changed) {
				this.makeLayout();
				this.layoutComponents();
			}
		},
		modulesLoaded : function(){
			this.makeLayout();
			this.layoutComponents();
		},
		baseUrlChanged : function(){
			var that = this;
			var v = this.getValue();
			if(v && v.baseUrl && v.baseUrl != ""){
				this["cmp_capabilities"].setBusy(true);
				$.ajax({
					url : v.baseUrl + "?SERVICE=WMS&REQUEST=GetCapabilities"
				})
				.done(function(){return function(data){
					that["cmp_capabilities"].setBusy(false);
					if(data && data.getElementsByTagName){
						var caps = [];
						var layerNodes = data.getElementsByTagName("Layer");
						for(var i=0;i<layerNodes.length;i++){
							var name = layerNodes[i].getElementsByTagName("Name")[0].textContent;
							var title = layerNodes[i].getElementsByTagName("Title")[0].textContent;
							var newCapability = {
								use : false,
								name : name,
								title : title
							};
							try{
								var styles = [];
								var aStyles = [];
								for(var c=0;c<layerNodes[i].childNodes.length;c++){
									var node = layerNodes[i].childNodes[c];
									if(node.nodeName=="Style") aStyles.push(node);
								}
								if(aStyles.length>0){
									for(var s=0;s<aStyles.length;s++){
										var style = aStyles[s];
										var styleName = style.getElementsByTagName("Name")[0].textContent;
										var styleTitle = style.getElementsByTagName("Title")[0].textContent;
										var selected = false;
										if(s==0) selected = true;
										var styleObj = {
											selected : selected,
											text : styleTitle,
											key : styleName
										};
										styles.push(styleObj);
									}
								}
							}catch(e){
								alert("Problem parsing available styles:\n\n"+e);
							}
							if(styles.length==0){
								newCapability.style = "";
								caps.push(newCapability);
							}else{
								for(var s=0;s<styles.length;s++){
									var newCapability2 = JSON.parse(JSON.stringify(newCapability));
									newCapability2.style = styles[s].key;
									caps.push(newCapability2);
								}
							}
						}
						// Reconcile matches
						if(v.capabilities){
							for(var i=0;i<v.capabilities.length;i++){
								for(var j=0;j<caps.length;j++){
									
								}
							}
						}
						v.capabilities = caps;
						that.setValue(v);
						that.fireValueChange();
						//alert(layerNodes[0].getElementsByTagName("Name")[0]);
					}else{
						alert("No layers found.");
					}
				};}())
				.fail(function(config){return function(xhr, textStatus, errorThrown ){
					that["cmp_capabilities"].setBusy(false);
					alert("Could not load\n\n"+errorThrown);
				};}());
			}
		},
		createComponents : function () {
			var that = this;
			
			this._props = {
				baseUrl : {
					opts : {
						desc : "Base URL",
						apsControl : "text-presets",
						presetsIndex : "os/wms/presets.json",
						changeHandler : function(){that.baseUrlChanged.call(that);}
					}
				},
				opacity : {
					opts : {
						desc : "Opacity (0.0 - 1.0)",
						apsControl : "text"
					}
				},
				capabilities : {
					opts : {
						desc : "Capabilities",
						apsControl : "complexcollection",
						noAdd : true,
						apsConfig : {
							use : {
								desc : "Use",
								defaultValue : false,
								apsControl : "checkbox"
							},
							name : {
								desc : "Name",
								defaultValue : "Name",
								apsControl : "label"
							},
							title : {
								desc : "Title",
								defaultValue : "Title",
								apsControl : "label"
							},
							style : {
								desc : "Style",
								defaultValue : "",
								apsControl : "text"
							}
						}
					}
				}
			};
		},
		makeLayout : function () {
			this.layout = [];
			this.layout.push({
				comp : "baseUrl"
			});
			this.layout.push({
				comp : "opacity"
			});
			this.layout.push({
				comp : "capabilities"
			});
		},
		
		renderer : {}
	});
	return {
		id : "wmslayer",
		defaultValue : {
			baseUrl :"http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi",
			opacity : "1.0",
			capabilities : [],
			layers : "nexrad-n0r-900913",
	    	format : "image/png",
	    	transparent : true,
	    	attribution: "Weather data © 2012 IEM Nexrad"
		},
		serialized : true,
		setter : function (property, value) {
			var newValue = jQuery.parseJSON(value);
			this["cmp_" + property].setValue(newValue);
		},
		getter : function (property, control) {
			var arrayValue = control.getValue();
			newValue = JSON.stringify(arrayValue);
			return newValue;
		},
		createComponent : function (property, propertyOptions, changeHandler) {
			var component = new org.scn.community.aps.WMSLayer({
				width : "100%",
				title : new sap.ui.commons.Title({
					text : propertyOptions.desc
				}),
				showCollapseIcon : false
			});
			component.attachValueChange(changeHandler, this);
			return component;
		}
	};
});