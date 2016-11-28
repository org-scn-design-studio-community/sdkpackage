/**
 * Complex Property Handler
 */
define(["./palette","./segmentedbutton","./spinner"], function () {
	/**
	 * Create UI5 Extension
	 */
	new sap.ui.commons.layout.VerticalLayout.extend("org.scn.community.aps.ComplexItem",{
		_config : {
			/* Empty */
		},
		metadata : {
			properties : {
				value : {
					type : "object"
				}
			},
			events : {
				valueChange : {}
			}
		},
		checkLoadState : function(){
			var loaded = true;
			for(var property in this._props){
				if(!this._props[property].loaded) return false;
			}
			return loaded;
		},
		updateProperty : function(value,propertyName) {
			var priorValue = JSON.stringify(this._config[propertyName]);
			if(value===undefined) {
				delete this._config[propertyName];
			}else{
				this._config[propertyName] = value;
			}
			// Suppress chatty APS log warnings
			if(priorValue != JSON.stringify(this._config[propertyName])) this.fireValueChange();
		},
		setValue : function(o){
			this._config = o;
			this.updateComponents();
		},
		getValue : function(){
			return this._config;
		},
		hLabel : function(label,component,tooltip){
			if(component instanceof org.scn.community.aps.ColorBuilder){
				return component;
			}else{
				var hLayout = new sap.ui.commons.layout.HorizontalLayout({})
				hLayout.addContent(new sap.ui.commons.Label({ 
					text : label,
					tooltip : tooltip || label
				}));
				hLayout.addContent(component);	
				return hLayout;			
			}
		},
		createComponents : function(){
			// Override
		},
		modulesLoaded : function(){
			// Override			
		},
		initializeComponents : function(){
			var that = this;
			this.startingValue = JSON.stringify(this.getValue());
			for(var property in this._props){
				this._props[property].container = new sap.ui.commons.layout.VerticalLayout({}); 
				var item = this._props[property];
				if(item.opts){
					// New method
					var failureFunction = function (property, propertyOptions) {
						return function (err) {
							alert("fail" + err);
							// assure there is a control! Make text Area
							if(!that["cmp_" + property]) {
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
							}
							that._props[property].container.addContent(that.hLabel(propertyOptions.desc || property, that["cmp_" + property]));
						}
					}(property+"", JSON.parse(JSON.stringify(item.opts)));
					
					var callbackFunction = function(property, propertyOptions) {
						return function (handler) {
							try{
							// Closure to store property name
							var changeHandler = function (property, handler) {
								that._props[property].handler = handler;
								return function (oControlEvent) {
									var newValue = handler.getter.call(that, property, oControlEvent.getSource());
									var o = newValue;
									if (handler.serialized) {
										if (newValue && newValue != "") {
											o = jQuery.parseJSON(newValue);
										} else {
											o = null;
										}
									}
									var v = that.getValue();
									v[property] = o;
									that.setValue(v);
									that.fireValueChange();
								};
							}(property, handler);
							// Create Component
							if(!that["cmp_" + property]){
								control = handler.createComponent.call(that, property, propertyOptions, changeHandler);
								that["cmp_" + property] = control;
								if(propertyOptions.afterCreate){
									propertyOptions.afterCreate.call(that, control);
								}
							}
							var o = that.getValue();
							var v = undefined;
							if(o===undefined){
								alert("Something is wrong with me.");
							}
							if(o){
								if(o[property] === undefined){
									if(handler.defaultValue !== undefined){
										// v = JSON.parse(JSON.stringify(handler.defaultValue));
										// o[property] = JSON.parse(JSON.stringify(handler.defaultValue));
									}
								}else{
									v = o[property];							
								}
							}
							if(v !== undefined){
								if(handler.serialized){
									handler.setter.call(that, property, JSON.stringify(v));
								}else{
									handler.setter.call(that, property, v);
								}								
							}
							// Step 3a, if component has afterInit method, call it!

							if (that["cmp_" + property].afterInit) {
								that["cmp_" + property].afterInit();
							}

							// Step 4, add control to layout
							var useLabel = true;
							if (that["cmp_" + property].needsLabel) {
								useLabel = that["cmp_" + property].needsLabel();
							}
							if (useLabel) {
								that._props[property].container.addContent(that.hLabel(propertyOptions.desc || property, that["cmp_" + property]));
							} else {
								that._props[property].container.addContent(that["cmp_" + property]);
							}
							}catch(e){
								alert("Error on handler " + property + " callback:\n\n" + e + "\n\n" + newValue);
							}
							that._props[property].loaded = true;
							if(that.checkLoadState()==true){
								that.updateComponents();
								var endValue = JSON.stringify(that.getValue());
								//alert(that.startValue + "\n\n" + endValue);
								//that.fireValueChange();
								that.modulesLoaded();
							};
							
						};
					}(property + "", item.opts/*JSON.parse(JSON.stringify(item.opts))*/);
					if(item.handler){
						callbackFunction(item.handler);
					}else{
						require(["../../org.scn.community.shared/aps/"+item.opts.apsControl],callbackFunction,failureFunction);
					}
				}else{
					alert("No item options for " + property);
				}
			}
		},
		layoutComponents : function(){
			var that = this;
			this.removeAllContent();
			this.fieldLayout.removeAllContent();
			this.addContent(this.fieldLayout);
			try{
				if(this.buttons.length > 0){
					var bar = new sap.ui.commons.layout.HorizontalLayout({});
					this.fieldLayout.addContent(bar);
					for(var i=0;i<this.buttons.length;i++){
						bar.addContent(this.buttons[i]);
					}
				}
				//alert(JSON.stringify(this.layout));
				for(var i=0;i<this.layout.length;i++){
					var property = this.layout[i].comp;
					var item = this._props[property];	// b/w compat
					this.fieldLayout.addContent(item.container);
					/*
					if(!item.tooltip){
						if(this.tooltips && this.tooltips[item.comp]) item.tooltip = this.tooltips[item.comp];
					}
					if(item && item.desc ){
						this.fieldLayout.addContent(this.hLabel(item.desc,this.cmps[item.comp],item.tooltip));
					}*/
				}
			}catch(e){
				alert("Error on layout:\n\n"+e);
			}
			
		},
		init : function(){
			this.fieldLayout = new sap.ui.commons.layout.VerticalLayout({ });
			this.addContent(this.fieldLayout);
			this.sections = {};
			this.cmps = {};
			this.cmpChange = {};
			this.layout = [];
			this.buttons = this.buttons || [];
			this.createComponents();
			this.initializeComponents();
			this.layoutComponents();
		},
		updateComponents : function(){
			if(this.checkLoadState()==true){
				var that = this;
				var o = this.getValue();
				for(var property in this._props){
					var p = this._props[property];
					if(p.handler){
						var handler = p.handler;
						var v = undefined;
						if(o && o[property]){
							v = o[property];
						}else{
							// v = handler.defaultValue;
						}
						if(v !== undefined){
							if(handler.serialized){
								handler.setter.call(this, property, JSON.stringify(v));
							}else{
								handler.setter.call(this, property, v);					
							}						
						}
					}else{
						alert("Warning, no handler found for " + property);
					}
				}				
			}else{
				// Defer
			}
		},
		renderer : {}
	});
});