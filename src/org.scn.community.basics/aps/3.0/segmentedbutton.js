/**
 * Segmented Button Handler
 */
define([],function(){
	sap.ui.commons.SegmentedButton.extend("org.scn.community.aps.SegmentedButton",{
		metadata : {                             
	        properties : {
	        	selectedKey : {
					type : "string"
	        	}
	        },
	        events : {
		    	keyChange : {}
		    }
		},
		setSelectedKey : function(s){
			this._selectedKey = s;
			var b = this.getButtons();
			var button;
			for(var i=0;i<b.length;i++){
				var btn = b[i];
				if(btn.data("key")==s){
					button = btn; 
				}
			}
			if(button != undefined) {
				this.setSelectedButton(button.getId());
			}		
		},
		getSelectedKey : function(){
			return this._selectedKey;
		},
	    handleSelect : function(oControlEvent) {
	    	//alert(oControlEvent.getSource().getCustomData().length);
	    	var buttonId = oControlEvent.getSource().getSelectedButton();
	    	var btn = sap.ui.getCore().byId(buttonId);
	    	var key = btn.data("key");
	    	this.setSelectedKey(key);
	    	this.fireKeyChange();
	    },
	    init : function(){
	    	sap.ui.commons.SegmentedButton.prototype.init.apply(this,arguments);
	    	this.attachSelect(this.handleSelect,this);
	    },
		renderer : {}
	});
	return {
		id : "segmentedbutton",
		setter : function(property, value){
			this["cmp_"+property].setSelectedKey(value);
		},
		getter : function(property, control){
			return control.getSelectedKey();
		},
		createComponent : function(property, propertyOptions, changeHandler){
			var component = new org.scn.community.aps.SegmentedButton({});
			if(propertyOptions.options && propertyOptions.options.length>0){
				for(var i=0;i<propertyOptions.options.length;i++){
					var option = propertyOptions.options[i];
					var btnConfig = {};
					if(option.text) btnConfig.text = option.text;
					if(option.icon) btnConfig.icon = option.icon;
					if(option.tooltip) btnConfig.icon = option.tooltip;
					component.addButton(new sap.ui.commons.Button(btnConfig).data("key",option.key));
				}
			}
			component.attachKeyChange(changeHandler,this);
			return component;
		}
	};
});
