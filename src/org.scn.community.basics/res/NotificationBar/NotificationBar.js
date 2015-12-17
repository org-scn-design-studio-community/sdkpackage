/**
 * Copyright 2014 Scn Community Contributors
 * 
 * Original Source Code Location:
 *  https://github.com/org-scn-design-studio-community/sdkpackage/
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); 
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at 
 *  
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  
 * Unless required by applicable law or agreed to in writing, software 
 * distributed under the License is distributed on an "AS IS" BASIS, 
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
 * See the License for the specific language governing permissions and 
 * limitations under the License. 
 */
 
 //%DEFINE-START%
var scn_pkg="org.scn.community.";if(sap.firefly!=undefined){scn_pkg=scn_pkg.replace(".","_");}
define([
	"sap/designstudio/sdk/component",
	"./NotificationBarSpec",
	"../../../"+scn_pkg+"shared/modules/component.core",
	"../../../"+scn_pkg+"shared/modules/component.basics"
	
	],
	function(
		Component,
		spec,
		core,
		basics
	) {
//%DEFINE-END%

var myComponentData = spec;

NotificationBar = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);

		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		that._pAccessPath = org_scn_community_basics.getRepositoryImageUrlPrefix(that, that.getDefaultImage(), "", "");
		
		that._oCommonNotifier = new sap.ui.ux3.Notifier({
			title : "Common Notifications",
			icon: that._pAccessPath + "scat_public.png"
		});
		
		that._oPrivateNotifier = new sap.ui.ux3.Notifier({
			title : "Private Notifications",
			icon : that._pAccessPath + "scat_private.png"
		});
		
		that._oErrorNotifier = new sap.ui.ux3.Notifier({
			title : "Eror Notifications",
			icon : that._pAccessPath + "s_error.png"
		});

		that._oWarningNotifier = new sap.ui.ux3.Notifier({
			title : "Warning Notifications",
			icon : that._pAccessPath + "s_warning.png"
		});

		that._oInfoNotifier = new sap.ui.ux3.Notifier({
			title : "Information Notifications",
			icon : that._pAccessPath + "s_info.png"
		});

		that.__notifiersInitialized = false;
		
		that._oClickListener = function (oEvent) {
			var oNotification = oEvent.getParameter("message");
			var oNotifier = oEvent.getParameter("notifier");
			
			if(that.getDeleteNotificationOnClick()) {
				oNotifier.removeMessage(oNotification);	
				//close popup upfront to prevent callout errors on last message delete
				oNotifier._oCallout.closePopup();
			}
		};
		
		that._oResizeListener = function (oEvent) {
			var bShow = oEvent.getParameter("status");
			
			if (bShow == "Min" && that._RemoveAllOnMinimize) {
				that._oErrorNotifier.destroyMessages();
				that._oErrorNotifier.removeAllMessages();
				that._oWarningNotifier.destroyMessages();
				that._oWarningNotifier.removeAllMessages();
				that._oInfoNotifier.destroyMessages();
				that._oInfoNotifier.removeAllMessages();
				that._oPrivateNotifier.destroyMessages();
				that._oPrivateNotifier.removeAllMessages();
				that._oCommonNotifier.destroyMessages();
				that._oCommonNotifier.removeAllMessages();
				
				for(item in that._oWCustomCategoryNotifier) { 
					that._oWCustomCategoryNotifier[item].destroyMessages();
					that._oWCustomCategoryNotifier[item].removeAllMessages();
				}
			}
		};
		
		that._oCommonNotifier.attachMessageSelected(that._oClickListener);
		that._oPrivateNotifier.attachMessageSelected(that._oClickListener);
		that._oErrorNotifier.attachMessageSelected(that._oClickListener);
		that._oWarningNotifier.attachMessageSelected(that._oClickListener);
		that._oInfoNotifier.attachMessageSelected(that._oClickListener);
		
		// initilize on Min Status * 1.0.1
		that.setVisibleStatus(sap.ui.ux3.NotificationBarStatus.Min);
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
		
		// that.onAfterRendering = function () {
			// org_scn_community_basics.resizeContentAbsoluteLayout(that, that._oRoot, that.onResize);
		// }
	},
	
	afterDesignStudioUpdate: function() {
		var that = this;
		
		org_scn_community_basics.fillDummyData(that, that.processData, that.afterPrepare);
	},
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/
	processData: function (flatData, afterPrepare, owner) {
		var that = owner;

		// processing on data
		that.afterPrepare(that);
	},

	afterPrepare: function (owner) {
		var that = owner;
			
		// visualization on processed data
		// reset new Notifications flag
		that._pNewNotificationsAvailable = false;
		
		// 
		if(!that.__notifiersInitialized) {
			if(that.getSplitNotificationsByPriority()) {
				that.addNotifier(that._oErrorNotifier);
				that.addNotifier(that._oWarningNotifier);
				that.addNotifier(that._oInfoNotifier);
			} else {
				that.addNotifier(that._oCommonNotifier);
				that.addNotifier(that._oPrivateNotifier);
			}

			that.attachResize(that._oResizeListener);
			
			that.__notifiersInitialized = true;
		}
		
		// resize fix, not active yet
		var tryToFixResize = false;
		if(tryToFixResize) {
			that.oComponentProperties.height = "40";
			that.oComponentProperties.width = "auto";
			that.oComponentProperties.rightmargin = "0";
			that.oComponentProperties.leftmargin = "0";
			that.oComponentProperties.bottommargin = "0";
			that.oComponentProperties.topmargin = "auto";
			
			that.setHeight("40");
			that.setWidth("auto");
			that.setRightMargin("0");
			that.setLeftMargin("0");
			that.setBottomMargin("0");
			that.setTopMargin("auto");
			
			that.fireDesignStudioPropertiesChanged(["width", "height", "topMargin", "bottomMargin", "leftMargin", "rightMargin"]);
		}
		
		if(!that._oWCustomCategoryNotifier) {
			that._oWCustomCategoryNotifier = new Array();
		}
		
		// read local created new Notifications
		var newCategories = that.getCategories();
		if((newCategories != undefined || newCategories != undefined) && newCategories != "" && newCategories != "<delete>"){
			var CategoriesArray = JSON.parse(newCategories);
			
			for (var i = 0; i < CategoriesArray.length; i++) {
				var key = CategoriesArray[i].key;
				var text = CategoriesArray[i].text;
				var image = CategoriesArray[i].image;
				
				// in case image is not given, use standard image
				if(image == undefined || image == "")  {
					icon = that._pAccessPath + "scat_private.png";
				} else {
					icon = that._pImagePrefix + image;
				}
				
				if(!that._oWCustomCategoryNotifier[key]) {
					that._oWCustomCategoryNotifier[key] = new sap.ui.ux3.Notifier({
						title : text,
						icon : icon
					});
					
					that.addNotifier(that._oWCustomCategoryNotifier[key]);
				}
			}
			
			// clean up
			that.setCategories("<delete>");
			
			// fire event to rerender
			that.fireDesignStudioPropertiesChanged(["categories"]);
		}
		
		// read local created new Notifications
		var newNotifications = that.getNotifications();
		if((newNotifications != undefined || newNotifications != undefined) && newNotifications != "" && newNotifications != "<delete>"){
			var NotificationsArray = JSON.parse(newNotifications);

			if(NotificationsArray.length > 0) {
				that._pNewNotificationsAvailable = true;
			}
			
			for (var i = 0; i < NotificationsArray.length; i++) {
				
				var time = new Date();
				var now = time.toLocaleDateString() + ", " + time.toLocaleTimeString();

				var category = NotificationsArray[i].category;
				var text = NotificationsArray[i].text;
				
				if(NotificationsArray[i].key != undefined && NotificationsArray[i].key != "") {
					text = text + " [" + NotificationsArray[i].key + "]";
				}
				
				//if(NotificationsArray[i].category != undefined && NotificationsArray[i].category != "") {
				//	text = NotificationsArray[i].category + ": " + text;
				//}

				var oNotification = new sap.ui.core.Message({
					text : text,
					timestamp : now
				});

				var potentialPriorityNotifier = undefined;
				var categoryNotifier = undefined;
				
				if(category != undefined && category != "") {
					categoryNotifier = that._oWCustomCategoryNotifier[category];
				}

				switch (NotificationsArray[i].level) {
					case "SUCCESS":
						oNotification.setLevel(sap.ui.core.MessageType.Success);
						oNotification.setIcon(that._pAccessPath + "s_success.png");
						if(!categoryNotifier) potentialPriorityNotifier = that._oInfoNotifier;
						break;
					case "INFO":
						oNotification.setLevel(sap.ui.core.MessageType.Information);
						oNotification.setIcon(that._pAccessPath + "s_info.png");
						if(!categoryNotifier) potentialPriorityNotifier = that._oInfoNotifier;
						break;
					case "WARNING":
						oNotification.setLevel(sap.ui.core.MessageType.Warning);
						oNotification.setIcon(that._pAccessPath + "s_warning.png");
						if(!categoryNotifier) potentialPriorityNotifier = that._oWarningNotifier;
						break;
					case "ERROR":
					default:
						oNotification.setLevel(sap.ui.core.MessageType.Error);
						oNotification.setIcon(that._pAccessPath + "s_error.png");
						if(!categoryNotifier) potentialPriorityNotifier = that._oErrorNotifier;
						break;
				}
				
				if(categoryNotifier) {
					categoryNotifier.addMessage(oNotification);
				} else {
					if(!that.getSplitNotificationsByPriority()) {
						that._oPrivateNotifier.addMessage(oNotification);
					} else {
						potentialPriorityNotifier.addMessage(oNotification);
					}
					
				}
			}

			// clean up
			that.setNotifications("<delete>");
			
			// fire event to rerender
			that.fireDesignStudioPropertiesChanged(["notifications"]);
		}
		
		if(!that._pInitilized) {
			if(that.getConnectToCommonMessages()) {
				// register to normal handler
				that.registerToMessageHandler(that);
			}
			
			that._pInitilized = true;
		}
		
		if(that.getShowOnNewNotifications() && that._pNewNotificationsAvailable) {
			that.setVisibleStatus(sap.ui.ux3.NotificationBarStatus.Default);
		}
		//minimize bar on bial script call
		if(that.getMinimize() !== ""){
			that.setVisibleStatus(sap.ui.ux3.NotificationBarStatus.Min);
			//reset function caller
			that.setMinimize("");
			that.fireDesignStudioPropertiesChanged(["minimize"]);
		}
	},
	
	onResize: function(width, height, parent) {
		// in case special resize code is required
	},
	
	/* ACCESS TO MESSAGE HANDLER (not an official SDK API) */
	
	registerToMessageHandler : function (owner) {
		var that = owner;
		
		that._oMessageBarHandler = sap.zen.Dispatcher.instance.getHandlers("messageview")[0];
		if (that._oMessageBarHandler) {
			that._oMessageBarHandler.setMessagePosition = function (oComponentProperties) {
				
				oComponentProperties.width = "0";
				oComponentProperties.height = "0";
				oComponentProperties.topmargin = "-200";
				oComponentProperties.leftmargin = "-200";
				oComponentProperties.bottommargin = "auto";
				oComponentProperties.rightmargin = "auto";
				
				that.fillInAllCommonMessages(that);
			};
		}
	},
	
	fillInAllCommonMessages : function (owner){
		var that = owner;
		
		// pass the official Messages from MessageHandler Model
		var MessagesModel= sap.zen.MessageViewHandler.JSMessageHandler.oDataModel;
		
		if(MessagesModel) {
			var dataObject = MessagesModel.oDataObject;
			if(dataObject) {
				
				var MessageData = dataObject.data;
				if(MessageData) {

					if(MessageData.length > 0) {
						that._pNewNotificationsAvailable = true;
					}
					
					for (var i = 0; i < MessageData.length; i++) {
						// var id = NotificationData[i].Notification.id;
						var short = MessageData[i].message.short_text;
						var long = MessageData[i].message.long_text;
						var level = MessageData[i].message.level;
						
						var time = new Date();
						var now = time.toLocaleDateString() + ", " + time.toLocaleTimeString();
						
						var text = short;
						
						if(long != undefined && long != "") {
							text = text + " - " + long;
						}
						
						var oNotification = new sap.ui.core.Message({
							text : text,
							timestamp : now
						});
						
						var potentialPriorityNotifier = undefined;
						
						if(level == "SUCCESS") {
							oNotification.setLevel(sap.ui.core.MessageType.Success);
							oNotification.setIcon(that._pAccessPath + "s_success.png");
							potentialPriorityNotifier = that._oInfoNotifier;
						} else if(level == "INFO") {
							oNotification.setLevel(sap.ui.core.MessageType.Information);
							oNotification.setIcon(that._pAccessPath + "s_info.png");
							potentialPriorityNotifier = that._oInfoNotifier;
						} else if(level == "WARNING") {
							oNotification.setLevel(sap.ui.core.MessageType.Warning);
							oNotification.setIcon(that._pAccessPath + "s_warning.png");
							potentialPriorityNotifier = that._oWarningNotifier;
						} else if(level == "ERROR") {
							oNotification.setLevel(sap.ui.core.MessageType.Error);
							oNotification.setIcon(that._pAccessPath + "s_error.png");
							potentialPriorityNotifier = that._oErrorNotifier;
						} else {
							oNotification.setLevel(sap.ui.core.MessageType.Error);
							oNotification.setIcon(that._pAccessPath + "s_error.png");
						}
						
						if(!that.getSplitNotificationsByPriority()) {
							that._oCommonNotifier.addMessage(oNotification);
						} else {
							potentialPriorityNotifier.addMessage(oNotification);
						}
					}
				}
			}
			
			MessagesModel.removeAll();
		}
		
		if(that.getShowOnNewNotifications() && that._pNewNotificationsAvailable) {
			that.setVisibleStatus(sap.ui.ux3.NotificationBarStatus.Default);
		}
	}
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

//%INIT-START%
myComponentData.instance = NotificationBar;
jQuery.sap.require("sap.ui.ux3.NotificationBar");
sap.ui.ux3.NotificationBar.extend(myComponentData.fullComponentName, myComponentData.instance);
});