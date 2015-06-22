(function(){

var myComponentData = org_scn_community_require.knownComponents.basics.ActionSheetButton;

ActionSheetButton = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;
		org_scn_community_component_Core(that, myComponentData);

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		jQuery.sap.require("sap.m.Button");
		jQuery.sap.require("sap.m.ActionSheet");

		that.attachPress(that.dsClick,that);
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
	},
	
	afterDesignStudioUpdate: function() {
		var that = this;
		
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/

		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
	},
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/
	listSelect : function(o,oControlEvent){
		var that = this;
		
		if(that._popover){
			that._popover.close();
		}
		that.setSelectedItem(o.text);
		that.setSelectedKey(o.key);
		that.fireDesignStudioPropertiesChangedAndEvent(["selectedItem","selectedKey"], "onPopoverSelect");
	},
	dsClick : function(oControlEvent){
		var that = this;
		
		if(that._popover) that._popover.destroy();
		that._popover = new sap.m.ActionSheet({
			title : that.getText(),
			placement : that.getPlacement()
		});
		
		var items = JSON.parse(that.getItems());
		
		for(var i=0;i<items.length;i++){
			var item = items[i];
			var actionButton = new sap.m.Button({
				text : item.text,
			    //type : sap.m.ListType.Active,
			    icon : item.icon
			});
			// Event Handler
			var clickHandler = function(o,as){
				return function(oControlEvent){
					as.close();
					that.listSelect(o,oControlEvent);};
				}({
					key : item.key,
					text : item.text
				},that._popover);
			
			actionButton.attachPress(clickHandler,that);
			that._popover.addButton(actionButton);
		};
		that._popover.openBy(that);
	},
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

define([myComponentData.requireName], function(basicsactionsheetbutton){
	myComponentData.instance = ActionSheetButton;
	return myComponentData.instance;
});

}).call(this);