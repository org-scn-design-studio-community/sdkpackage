/**
 * CodeMirror Handler
 */
require.config({
	paths : {
		cm : "../../os/codemirror",
		cmxml : "../../os/codemirror/mode/xml/xml",
		cmjs : "../../os/codemirror/mode/javascript/javascript",
		cmhtml : "../../os/codemirror/mode/htmlmixed/htmlmixed",
		cmcss : "../../os/codemirror/mode/css/css",
		cmmb : "../../os/codemirror/addon/edit/matchbrackets",
	},
	shim : {
		"cm" : {
			exports : "CodeMirror"
		},
		"cmxml" :{ deps : ["cm"] },
		"cmjs" :{ deps : ["cm"] },
		"cmhtml" :{ deps : ["cm"] },
		"cmcss" :{ deps : ["cm"] },
		"cmmb" :{ deps : ["cm"] }
	}
});

define(["css!cm/lib/codemirror.css",
	    "css!cm/theme/eclipse.css",
	    "cm/lib/codemirror",
        "cm/mode/xml/xml",
        "cm/mode/htmlmixed/htmlmixed",
        "cm/mode/javascript/javascript",
        "cm/mode/css/css",
        "cm/addon/edit/matchbrackets"
        ], function (css,css2,CodeMirror) {
	/**
	 * Create UI5 Extension
	 */
	sap.ui.commons.Panel.extend("org.scn.community.aps.CodeMirror", {
		needsLabel : function () {
			return false;
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
			if (this.editor)
				this.editor.setValue(s);
			//var incoming = JSON.stringify(a);
			//var original = JSON.stringify(this.getValue());
			//if(incoming != original){
			//if(this.ht) this.ht.loadData(a);
			//}
			return this;
		},
		afterRenderHandler : function (oControlEvent) {
			var that = this;
			var myId = this.htmlArea.getId();
			var container = $("#" + myId);
			var opts = this.getOptions();
			this.editor = CodeMirror(function (e) {
					//container.css({overflowX : "hide"});
					container.get(0).appendChild(e);
				}, this.getOptions());
			this.editor.setValue(this.getValue());
			this.editor.on("blur", function (e) {
				that.updateCode();
			});
		},
		presetsLoadComplete : function (data) {
			this.addButton(this.presetButton);
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
		makePresetMenu : function (o, menuitem, rootConfig) {
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
			if (o.url) {
				var presetURL = o.url;
				if (o.type != "external")
					presetURL = "../../os/rapidprototyping-presets/" + this.getPresets() + "/" + presetURL;
				if (rootConfig.indexUrl)
					presetURL = rootConfig.indexUrl + presetURL;
				menuitem.attachSelect(function (presetURL, config) {
					return function (oControlEvent) {
						try {
							$.ajax({
								//async : false,
								url : presetURL + "?r=" + Math.random(),
								headers : config.headers
							}).done(function (data) {
								that.setValue(data);
								that.fireValueChange();
							})
							.fail(function (presetURL) {
								return function (xhr, textStatus, errorThrown) {
									alert("An error occured while trying to download the preset.\n\n" + errorThrown + presetURL);
								};
							}
								(presetURL));
						} catch (e) {
							alert(e);
							throw ("Error loading preset:\n\nFile:" + presetURL + "\n\n" + e);
						}

					};
				}
					(presetURL, rootConfig), this);
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
					url : "../../os/rapidprototyping-presets/" + this.getPresets() + "/index.json?r=" + Math.random(),
					context : this
				})
				.done(this.presetsLoadComplete)
				.fail(function (xhr, textStatus, error) {
					//alert(error);
					/*alert("Problem occured when loading maps menu." + error)*/
				});
			} catch (e) {
				alert(e);
				throw ("Error loading presets index:\n\n" + e);
			}
			return this;
		},
		init : function () {
			var that = this;
			sap.ui.commons.Panel.prototype.init.apply(this, arguments);
			this.presetMenu = new sap.ui.commons.Menu({
					items : []
				});
			this.presetButton = new sap.ui.commons.MenuButton({
					text : "Presets...",
					menu : this.presetMenu
				});
			this.htmlArea = new sap.ui.core.HTML({
					preferDOM : false,
					width : "100%",
					height : "500px",
					content : "<div></div>"
				});
			this.applyButton = new sap.ui.commons.Button({
					text : "Apply Changes"
				});
			this.addButton(this.applyButton);
			this.htmlArea.attachAfterRendering(this.afterRenderHandler, this);
			this.applyButton.attachPress(function (oControlEvent) {
				this.updateCode()
			}, this);
			this.addContent(this.htmlArea);
		}
	});
	return {
		id : "codemirror",
		setter : function (property, value) {
			this["cmp_" + property].setValue(value);
		},
		getter : function (property, control) {
			return control.getValue();
		},
		createComponent : function (property, propertyOptions, changeHandler) {
			var component = new org.scn.community.aps.CodeMirror({
					width : "100%",
					height : "500px",
					options : propertyOptions.apsConfig,
					showCollapseIcon : false,
					presets : propertyOptions.presets,
					text : propertyOptions.desc
				});
			component.attachValueChange(changeHandler, this);
			return component;
		}
	};
});
