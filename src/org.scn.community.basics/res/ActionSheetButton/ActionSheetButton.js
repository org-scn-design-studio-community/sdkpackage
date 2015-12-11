//%DEFINE-START%
var scn_pkg="org.scn.community.";if(sap.firefly!=undefined){scn_pkg=scn_pkg.replace(".","_");}
define([
	"sap/designstudio/sdk/component",
	"./ActionSheetButtonSpec",
	"../../../"+scn_pkg+"shared/modules/component.core",
	"../../../"+scn_pkg+"shared/modules/component.basics",
	"../../../"+scn_pkg+"basics/os/sapui5/sap_m_loader"
	],
	function(
		Component,
		spec,
		core,
		basics
	) {
//%DEFINE-END%

var myComponentData = spec;

ActionSheetButton = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;

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
		that.setType(sap.m.ButtonType[that.getButtonType()]);
		
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

//%INIT-START%
myComponentData.instance = ActionSheetButton;
jQuery.sap.require("sap.m.Button");
sap.m.Button.extend(myComponentData.fullComponentName, myComponentData.instance);
});