/**
 * Test with presets Handler
 */
var sharedPath = "../../org.scn.community.shared/os/"

define([], function () {
	/**
	 * Create UI5 Extension
	 */
	sap.ui.commons.layout.HorizontalLayout.extend("org.scn.community.aps.TextInputPresets", {
		needsLabel : function () {
			return true;
		},
		metadata : {
			properties : {
				"presets" : {
					type : "string",
					defaultValue : null
				},
				"options" : {
					type : "object",
					defaultValue : {}
				},
				"value" : {
					type : "string",
					defaultValue : ""
				}
			},
			events : {
				valueChange : {}
			}
		},
		renderer : {},
		setValue : function (s) {
			sap.ui.core.Control.prototype.setProperty.apply(this, ["value", s]);
			if (this.text) this.text.setValue(s);
			return this;
		},
		makePresetMenu : function (o, menuitem, rootConfig) {
			try{
			var that = this;
			menuitem.setText(o.label);
			if (o.presets) {
				var newMenu = new sap.ui.commons.Menu({});
				menuitem.setSubmenu(newMenu);
				for (var i = 0; i < o.presets.length; i++) {
					var newMenuItem = new sap.ui.commons.MenuItem({
						text : o.presets[i].label
					});
					newMenu.addItem(newMenuItem);
					this.makePresetMenu(o.presets[i], newMenuItem, rootConfig);
				}
			}
			if (o.value) {
				menuitem.attachSelect(function (v){ return function(oControlEvent){
					this.setValue(v);
					this.text.setValue(v);
					this.fireValueChange();
				};
				}(o.value), this);
			}
			}catch(e){
				alert(e);
			}
		},
		presetsLoadComplete : function (data) {
			try {
				this.presets = data;
				for (var i = 0; i < this.presets.length; i++) {
					var generatedMenuItem = new sap.ui.commons.MenuItem({
							text : this.presets[i].label
						});
					this.makePresetMenu(this.presets[i], generatedMenuItem, this.presets[i]);
					this.presetMenu.addItem(generatedMenuItem);
				}
			} catch (e) {
				alert(e);
			}
		},
		updateCode : function () {
			this.setValue(this.editor.getValue());
			this.fireValueChange();
		},
		setPresets : function (s) {
			sap.ui.core.Control.prototype.setProperty.apply(this, ["presets", s]);
			try {
				$.ajax({
					url : "../../org.scn.community.shared/" + this.getPresets() + "?r=" + Math.random(),
					context : this
				})
				.done(this.presetsLoadComplete)
				.fail(function (xhr, textStatus, error) {
					//alert(error);
					/*alert("Problem occured when loading presets menu." + error)*/
				});
			} catch (e) {
				alert(e);
				throw ("Error loading presets index:\n\n" + e);
			}
			return this;
		},
		textChangeHandler : function(oControlEvent){
			this.setValue(oControlEvent.getSource().getValue());
			this.fireValueChange();
		},
		init : function () {
			var that = this;
			this.presetMenu = new sap.ui.commons.Menu({
				items : []
			});
			this.presetButton = new sap.ui.commons.MenuButton({
				text : "Presets...",
				menu : this.presetMenu
			});
			this.text = new sap.ui.commons.TextField({});
			this.text.attachChange(this.textChangeHandler,this);
			this.addContent(this.text);
			this.addContent(this.presetButton);
		}
	});
	return {
		id : "text-presets",
		setter : function (property, value) {
			this["cmp_" + property].setValue(value);
		},
		getter : function (property, control) {
			return control.getValue();
		},
		createComponent : function (property, propertyOptions, changeHandler) {
			var component = new org.scn.community.aps.TextInputPresets({
				options : propertyOptions.apsConfig,
				presets : propertyOptions.presetsIndex
			});
			component.attachValueChange(changeHandler, this);
			return component;
		}
	};
});
