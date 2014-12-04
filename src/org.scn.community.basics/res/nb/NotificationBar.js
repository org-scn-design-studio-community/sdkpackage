/**
 * Copyright 2014 Scn Community Contributors
 * 
 * Original Source Code Location:
 *  https://github.com/sap-design-studio-free-addons/sdk-package
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

(function() {
/** code for recognition of script path */
var myScript = $("script:last")[0].src;
_readScriptPath = function () {
	if(myScript) {
		var myScriptSuffix = "res/nb/";
		var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 		var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 		return ownScriptPath;
	}
		
	return "";
},
/** end of path recognition */

jQuery.sap.require("sap.ui.ux3.NotificationBar");

sap.ui.ux3.NotificationBar.extend("org.scn.community.basics.NotificationBar", {

	metadata: {
        properties: {
              "width": {type: "string"},
              "height": {type: "string"},
              "leftMargin": {type: "string"},
              "rightMargin": {type: "string"},
              "topMargin": {type: "string"},
              "bottomMargin": {type: "string"}
        }
	},
	
	setCategories : function(value) {
		if(this._Categories == value) {
			return;
		} else {
			this._Categories = value;
		}
	},

	getCategories : function() {
		return this._Categories;
	},
	
	setNotifications : function(value) {
		if(this._Notifications == value) {
			return;
		} else {
			this._Notifications = value;
		}
	},

	getNotifications : function() {
		return this._Notifications;
	},
	
	setDefaultImage : function(value) {
		if(this._DefaultImage == value) {
			return;
		} else {
			this._DefaultImage = value;
			this._pImagePrefix = value.substring(0, value.lastIndexOf("/") + 1);			
		}
	},

	getDefaultImage : function() {
		return this._DefaultImage;
	},
	
	setConnectToCommonMessages : function(value) {
		if(this._ConnectToCommonMessages == value) {
			return;
		} else {
			this._ConnectToCommonMessages = value;
		}
	},

	getConnectToCommonMessages : function() {
		return this._ConnectToCommonMessages;
	},
	
	setSplitNotificationsByPriority : function(value) {
		if(this._SplitNotificationsByPriority == value) {
			return;
		} else {
			this._SplitNotificationsByPriority = value;
		}
	},

	getSplitNotificationsByPriority : function() {
		return this._SplitNotificationsByPriority;
	},
	
	setShowOnNewNotifications : function(value) {
		if(this._ShowOnNewNotifications == value) {
			return;
		} else {
			this._ShowOnNewNotifications = value;
		}
	},

	getShowOnNewNotifications : function() {
		return this._ShowOnNewNotifications;
	},
	
	setDeleteNotificationOnClick : function(value) {
		if(this._DeleteNotificationOnClick == value) {
			return;
		} else {
			this._DeleteNotificationOnClick = value;
		}
	},

	getDeleteNotificationOnClick : function() {
		return this._DeleteNotificationOnClick;
	},
	
	setRemoveAllOnMinimize : function(value) {
		if(this._RemoveAllOnMinimize == value) {
			return;
		} else {
			this._RemoveAllOnMinimize = value;
		}
	},

	getRemoveAllOnMinimize : function() {
		return this._RemoveAllOnMinimize;
	},
	
	/* END OF SETTERS / GETTERS */
	
	renderer: {},

	initDesignStudio : function() {
		this._oNotificationBar = this;
		var that = this._oNotificationBar;
		
		this._ownScript = _readScriptPath();
		
		this._pAccessPath = this._ownScript;
		
		this._oCommonNotifier = new sap.ui.ux3.Notifier({
			title : "Common Notifications",
			icon: this._pAccessPath + "scat_public.png"
		});
		
		this._oPrivateNotifier = new sap.ui.ux3.Notifier({
			title : "Private Notifications",
			icon : this._pAccessPath + "scat_private.png"
		});
		
		this._oErrorNotifier = new sap.ui.ux3.Notifier({
			title : "Eror Notifications",
			icon : this._pAccessPath + "s_error.png"
		});

		this._oWarningNotifier = new sap.ui.ux3.Notifier({
			title : "Warning Notifications",
			icon : this._pAccessPath + "s_warning.png"
		});

		this._oInfoNotifier = new sap.ui.ux3.Notifier({
			title : "Information Notifications",
			icon : this._pAccessPath + "s_info.png"
		});

		this.__notifiersInitialized = false;
		
		this._oClickListener = function (oEvent) {
			var oNotification = oEvent.getParameter("Notification");
			var oNotifier = oEvent.getParameter("notifier");
			
			if(that.DeleteNotificationOnClick) {
				oNotifier.removeNotification(oNotification);			
			}
		};
		
		this._oResizeListener = function (oEvent) {
			var bShow = oEvent.getParameter("status");
			
			if (bShow == "Min" && this._RemoveAllOnMinimize) {
				this._oErrorNotifier.destroyMessages();
				this._oErrorNotifier.removeAllMessages();
				this._oWarningNotifier.destroyMessages();
				this._oWarningNotifier.removeAllMessages();
				this._oInfoNotifier.destroyMessages();
				this._oInfoNotifier.removeAllMessages();
				this._oPrivateNotifier.destroyMessages();
				this._oPrivateNotifier.removeAllMessages();
				this._oCommonNotifier.destroyMessages();
				this._oCommonNotifier.removeAllMessages();
				
				for(item in this._oWCustomCategoryNotifier) { 
					this._oWCustomCategoryNotifier[item].destroyMessages();
					this._oWCustomCategoryNotifier[item].removeAllMessages();
				}
			}
		};
		
		this._oCommonNotifier.attachMessageSelected(this._oClickListener);
		this._oPrivateNotifier.attachMessageSelected(this._oClickListener);
		this._oErrorNotifier.attachMessageSelected(this._oClickListener);
		this._oWarningNotifier.attachMessageSelected(this._oClickListener);
		this._oInfoNotifier.attachMessageSelected(this._oClickListener);
		
		// initilize on Min Status * 1.0.1
		that.setVisibleStatus(sap.ui.ux3.NotificationBarStatus.Min);
	},
	
	afterDesignStudioUpdate : function() {
		var that = this._oNotificationBar;
		
		// reset new Notifications flag
		this._pNewNotificationsAvailable = false;
		
		// 
		if(!this.__notifiersInitialized) {
			if(this._SplitNotificationsByPriority) {
				that.addNotifier(this._oErrorNotifier);
				that.addNotifier(this._oWarningNotifier);
				that.addNotifier(this._oInfoNotifier);
			} else {
				that.addNotifier(this._oCommonNotifier);
				that.addNotifier(this._oPrivateNotifier);
			}

			that.attachResize(this._oResizeListener);
			
			this.__notifiersInitialized = true;
		}
		
		// resize fix, not active yet
		var tryToFixResize = false;
		if(tryToFixResize) {
			this.oComponentProperties.height = "40";
			this.oComponentProperties.width = "auto";
			this.oComponentProperties.rightmargin = "0";
			this.oComponentProperties.leftmargin = "0";
			this.oComponentProperties.bottommargin = "0";
			this.oComponentProperties.topmargin = "auto";
			
			this.setHeight("40");
			this.setWidth("auto");
			this.setRightMargin("0");
			this.setLeftMargin("0");
			this.setBottomMargin("0");
			this.setTopMargin("auto");
			
			this.fireDesignStudioPropertiesChanged(["width", "height", "topMargin", "bottomMargin", "leftMargin", "rightMargin"]);
		}
		
		if(!this._oWCustomCategoryNotifier) {
			this._oWCustomCategoryNotifier = new Array();
		}
		
		// read local created new Notifications
		var newCategories = this._Categories;
		if((newCategories != undefined || newCategories != undefined) && newCategories != "" && newCategories != "<delete>"){
			var CategoriesArray = JSON.parse(newCategories);
			
			for (var i = 0; i < CategoriesArray.length; i++) {
				var key = CategoriesArray[i].key;
				var text = CategoriesArray[i].text;
				var image = CategoriesArray[i].image;
				
				// in case image is not given, use standard image
				if(image == "")  {
					icon = this._pAccessPath + "scat_private.png";
				} else {
					icon = this._pImagePrefix + image;
				}
				
				if(!this._oWCustomCategoryNotifier[key]) {
					this._oWCustomCategoryNotifier[key] = new sap.ui.ux3.Notifier({
						title : text,
						icon : icon
					});
					
					that.addNotifier(this._oWCustomCategoryNotifier[key]);
				}
			}
			
			// clean up
			this._Categories = "<delete>";
			
			// fire event to rerender
			this.fireDesignStudioPropertiesChanged(["categories"]);
		}
		
		// read local created new Notifications
		var newNotifications = this._Notifications;
		if((newNotifications != undefined || newNotifications != undefined) && newNotifications != "" && newNotifications != "<delete>"){
			var NotificationsArray = JSON.parse(newNotifications);

			if(NotificationsArray.length > 0) {
				this._pNewNotificationsAvailable = true;
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
					categoryNotifier = this._oWCustomCategoryNotifier[category];
				}

				switch (NotificationsArray[i].level) {
					case "SUCCESS":
						oNotification.setLevel(sap.ui.core.MessageType.Success);
						oNotification.setIcon(this._pAccessPath + "s_success.png");
						if(!categoryNotifier) potentialPriorityNotifier = this._oInfoNotifier;
						break;
					case "INFO":
						oNotification.setLevel(sap.ui.core.MessageType.Information);
						oNotification.setIcon(this._pAccessPath + "s_info.png");
						if(!categoryNotifier) potentialPriorityNotifier = this._oInfoNotifier;
						break;
					case "WARNING":
						oNotification.setLevel(sap.ui.core.MessageType.Warning);
						oNotification.setIcon(this._pAccessPath + "s_warning.png");
						if(!categoryNotifier) potentialPriorityNotifier = this._oWarningNotifier;
						break;
					case "ERROR":
					default:
						oNotification.setLevel(sap.ui.core.MessageType.Error);
						oNotification.setIcon(this._pAccessPath + "s_error.png");
						if(!categoryNotifier) potentialPriorityNotifier = this._oErrorNotifier;
						break;
				}
				
				if(categoryNotifier) {
					categoryNotifier.addMessage(oNotification);
				} else {
					if(!this._SplitNotificationsByPriority) {
						this._oPrivateNotifier.addMessage(oNotification);
					} else {
						potentialPriorityNotifier.addMessage(oNotification);
					}
					
				}
			}

			// clean up
			this._Notifications = "<delete>";
			
			// fire event to rerender
			this.fireDesignStudioPropertiesChanged(["notifications"]);
		}
		
		if(!this._pInitilized) {
			if(this._ConnectToCommonMessages) {
				// register to normal handler
				this.registerToMessageHandler();
			}
			
			this._pInitilized = true;
		}
		
		if(this._ShowOnNewNotifications && this._pNewNotificationsAvailable) {
			that.setVisibleStatus(sap.ui.ux3.NotificationBarStatus.Default);
		}
	},
	
	/* ACCESS TO MESSAGE HANDLER (not an official SDK API) */
	
	registerToMessageHandler : function () {
		var that = this._oNotificationBar;
		
		this._oMessageBarHandler = sap.zen.Dispatcher.instance.getHandlers("messageview")[0];
		if (this._oMessageBarHandler) {
			this._oMessageBarHandler.setMessagePosition = function (oComponentProperties) {
				
				oComponentProperties.width = "0";
				oComponentProperties.height = "0";
				oComponentProperties.topmargin = "-200";
				oComponentProperties.leftmargin = "-200";
				oComponentProperties.bottommargin = "auto";
				oComponentProperties.rightmargin = "auto";
				
				that.fillInAllCommonMessages();
			};
		}
	},
	
	fillInAllCommonMessages : function (){
		var that = this._oNotificationBar;
		
		// pass the official Messages from MessageHandler Model
		var MessagesModel= sap.zen.MessageViewHandler.JSMessageHandler.oDataModel;
		
		if(MessagesModel) {
			var dataObject = MessagesModel.oDataObject;
			if(dataObject) {
				
				var MessageData = dataObject.data;
				if(MessageData) {

					if(MessageData.length > 0) {
						this._pNewNotificationsAvailable = true;
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
							oNotification.setIcon(this._pAccessPath + "s_success.png");
							potentialPriorityNotifier = this._oInfoNotifier;
						} else if(level == "INFO") {
							oNotification.setLevel(sap.ui.core.MessageType.Information);
							oNotification.setIcon(this._pAccessPath + "s_info.png");
							potentialPriorityNotifier = this._oInfoNotifier;
						} else if(level == "WARNING") {
							oNotification.setLevel(sap.ui.core.MessageType.Warning);
							oNotification.setIcon(this._pAccessPath + "s_warning.png");
							potentialPriorityNotifier = this._oWarningNotifier;
						} else if(level == "ERROR") {
							oNotification.setLevel(sap.ui.core.MessageType.Error);
							oNotification.setIcon(this._pAccessPath + "s_error.png");
							potentialPriorityNotifier = this._oErrorNotifier;
						} else {
							oNotification.setLevel(sap.ui.core.MessageType.Error);
							oNotification.setIcon(this._pAccessPath + "s_error.png");
						}
						
						if(!this._SplitNotificationsByPriority) {
							this._oCommonNotifier.addMessage(oNotification);
						} else {
							potentialPriorityNotifier.addMessage(oNotification);
						}
					}
				}
			}
			
			MessagesModel.removeAll();
		}
		
		if(this._ShowOnNewNotifications && this._pNewNotificationsAvailable) {
			that.setVisibleStatus(sap.ui.ux3.NotificationBarStatus.Default);
		}
	}
});
})();