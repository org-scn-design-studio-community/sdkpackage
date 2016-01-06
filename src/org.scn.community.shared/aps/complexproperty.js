/**
 * Complex Property Handler
 */
define([], function () {
	/**
	 * Create UI5 Extension
	 */
	sap.ui.commons.layout.VerticalLayout.extend("org.scn.community.aps.ComplexProperty", {
		renderer : {},
		needsLabel : function () {
			return false;
		},
		metadata : {
			properties : {
				value : {
					type : "object",
					defaultValue : []
				},
				config : {
					type : "object",
					defaultValue : {}
				},
				labelOrientation : {
					type : "String",
					defaultValue : "Horizontal"
				}
			},
			events : {
				valueChange : {}
			}
		},
		setConfig : function (o) {
			sap.ui.core.Control.prototype.setProperty.apply(this, ["config", o]);
			this.generateFields();
			this.updateFields();
			return this;
		},
		getConfig : function () {
			return sap.ui.core.Control.prototype.getProperty.apply(this, ["config"]);
		},
		setLabelOrientation : function (o) {
			sap.ui.core.Control.prototype.setProperty.apply(this, ["labelOrientation", o]);
			this.generateFields();
			this.updateFields();
			return this;
		},
		getLabelOrientation : function () {
			return sap.ui.core.Control.prototype.getProperty.apply(this, ["labelOrientation"]);
		},
		setValue : function (o) {
			sap.ui.core.Control.prototype.setProperty.apply(this, ["value", o]);
			this.updateFields();
			return this;
		},
		getValue : function () {
			return sap.ui.core.Control.prototype.getProperty.apply(this, ["value"]);
		},
		updateFields : function () {
			var o = this.getValue();
			var c = this.getConfig();
			for (var field in o) {
				if (this["cmp_" + field] && this["cmp_" + field]) {
					var that = this
					require(["../../org.scn.community.shared/aps/"+c[field].apsControl],function(field){return function(handler){
						if (handler.serialized) {
							value = JSON.stringify(o[field]);
						} else {
							value = o[field];
						}
						handler.setter.call(that, field, value);
					};}(field));
				}else{
					// alert(field + " not exist yet.");
				}
			}
			// this.apsModel.setData({propertyData: this.getValue()});
			// this.columnTable.setModel(this.apsModel);
			// this.columnTable.bindRows("/propertyData");
		},
		generateFields : function () {
			try{
			this.destroyContent();
			this.components = {};
			var config = this.getConfig();
			for (var property in config) {
				var item = config[property];
				var control;
				var that = this;
				var holder = new sap.ui.commons.layout.VerticalLayout({});
				this.addContent(holder);
				try{
					var failureFunction = function (componentContainer, property, propertyOptions) {
						return function (err) {
							alert("fail" + err);
							// assure there is a control! Make text Area
							that["cmp_" + property] = new sap.ui.commons.TextArea({
									design : sap.ui.core.Design.Monospace,
									rows : 20,
									width : "100%",
									wrapping : sap.ui.core.Wrapping.Off
								});
							that["cmp_" + property].attachChange(function (oControlEvent) {
								var newValue = oControlEvent.getSource().getValue();
								that.props[property].value = newValue;
								if (!that.isTest) {
									that.firePropertiesChanged([property]);
								} else {
									alert("Property: " + property + "\r\nValue:\r\n" + newValue);
								}
							}, this);
							componentContainer.addContent(that.hLabel(propertyOptions.desc || property, that["cmp_" + property]));
						}
					}(holder, property+"", JSON.parse(JSON.stringify(item)));
				}catch(e){
					alert("Problem generating failure function" + e);
				}
				
				var callbackFunction = function(componentContainer, property, propertyOptions) {
					return function (handler) {
						try{
							// Closure to store property name
							var changeHandler = function (property, handler) {
								return function (oControlEvent) {
									var newValue = handler.getter.call(that, property, oControlEvent.getSource());
									if (handler.serialized) {
										if (newValue && newValue != "") {
											newValue = jQuery.parseJSON(newValue);
										} else {
											newValue = null;
										}
									}
									var v = that.getValue();
									v[property] = newValue;
									that.setValue(v);
									that.fireValueChange();
								};
							}(property, handler);
							control = handler.createComponent.call(that, property, propertyOptions, changeHandler);
							that["cmp_" + property] = control;
							var setValue = that.getValue()[property];
							if(handler.serialized){
								try{
									handler.setter.call(that, property, JSON.stringify(that.getValue()[property]));	
								}catch(e){
									alert("Bad JSON serialization for " + property + ":\n\n" + JSON.stringify(that.getValue()[property]) + "\n\n" + e);
								}
								
							}else{
								handler.setter.call(that, property, that.getValue()[property]);	
							}						
							// assure there is a control! Make text Area
							/* TODO
							if (that["cmp_" + property] == undefined) {
								that["cmp_" + property] = new sap.ui.commons.TextArea({
										design : sap.ui.core.Design.Monospace,
										rows : 20,
										width : "100%",
										wrapping : sap.ui.core.Wrapping.Off
									});
								that["cmp_" + property].attachChange(getHandler, that);
							}
							*/
							// Step 3a, if component has afterInit method, call it!
	
							if (that["cmp_" + property].afterInit) {
								that["cmp_" + property].afterInit();
							}
	
							// Step 4, add control to layout
							//etcLayout.addContent(that.hLabel(property,that["cmp_"+property]));
							var useLabel = true;
							if (that["cmp_" + property].needsLabel) {
								useLabel = that["cmp_" + property].needsLabel();
							}
	
							if (useLabel) {
								componentContainer.addContent(that.hLabel(propertyOptions.desc || property, that["cmp_" + property]));
							} else {
								componentContainer.addContent(that["cmp_" + property]);
							}
						}catch(e){
							alert("Error on ComplexProperty handler " + property + " callback:\n\n" + JSON.stringify(propertyOptions) + "\n\n" + e);
						}
					};
				}(holder, property+"", JSON.parse(JSON.stringify(item)));
				require(["../../org.scn.community.shared/aps/"+item.apsControl],callbackFunction,failureFunction);			
			}
			}catch(e){
				alert("Error generating fields\n\n"+e);
			}
		},
		hLabel : function (label, component) {
			var hLayout;
			if(this.getLabelOrientation()=="Horizontal"){
				hLayout = new sap.ui.commons.layout.HorizontalLayout({});
			}else{
				hLayout = new sap.ui.commons.layout.VerticalLayout({});
			}
			hLayout.addContent(new sap.ui.commons.TextView({
				text : label,
				width : "180px"
			}));
			hLayout.addContent(component);
			return hLayout;
		},
		init : function () { },
		renderer : {},
		needsLabel : function () {
			return false;
		}
	});
	return {
		id : "complexproperty",
		serialized : true,
		setter : function (property, value) {
			var newValue = undefined;
			if (value && value != "") {
				newValue = jQuery.parseJSON(value);
			} else {
				// Blank
			}
			this["cmp_" + property].setValue(newValue);
		},
		getter : function (property, control) {
			var arrayValue = control.getValue();
			alert(0);
			newValue = JSON.stringify(arrayValue);
			alert("ci new value: " + newValue);
			return newValue;
		},
		createComponent : function (property, propertyOptions, changeHandler) {
			var component = new org.scn.community.aps.ComplexProperty({
					width : "100%",
					title : new sap.ui.commons.Title({
						text : propertyOptions.desc
					}),
					config : propertyOptions.apsConfig,
					showCollapseIcon : false
				});
			component.attachValueChange(changeHandler, this);
			return component;
		}
	};
});
