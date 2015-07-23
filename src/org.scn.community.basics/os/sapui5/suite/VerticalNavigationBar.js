/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.VerticalNavigationBar");jQuery.sap.require("sap.suite.ui.commons.library");jQuery.sap.require("sap.ui.ux3.NavigationBar");sap.ui.ux3.NavigationBar.extend("sap.suite.ui.commons.VerticalNavigationBar",{metadata:{library:"sap.suite.ui.commons"}});
sap.suite.ui.commons.VerticalNavigationBar.prototype._handleActivation=function(e){if(e.target.tagName=="SPAN"){e.target=e.target.parentElement;}sap.ui.ux3.NavigationBar.prototype._handleActivation.call(this,e);};
sap.suite.ui.commons.VerticalNavigationBar.prototype.onAfterRendering=function(){sap.ui.ux3.NavigationBar.prototype.onAfterRendering.apply(this);if(!this._oBarItemsMap){this._oBarItemsMap={};}var t=this;jQuery(".sapSuiteTvNavBarItemLink").mousemove(function(){t._showTooltip(jQuery(this).attr("id"));}).mouseleave(function(e){t._hideTooltip(jQuery(this).attr("id"));});};
sap.suite.ui.commons.VerticalNavigationBar.prototype.exit=function(){this._oBarItemsMap=null;sap.ui.ux3.NavigationBar.prototype.exit.apply(this);};
sap.suite.ui.commons.VerticalNavigationBar.prototype._handleScroll=function(){};
sap.suite.ui.commons.VerticalNavigationBar.prototype._showTooltip=function(t){var i=this._oBarItemsMap[t];if(!i){i=sap.ui.getCore().byId(t);if(i){this._oBarItemsMap[t]=i;var T=new sap.ui.commons.RichTooltip({text:i.getTooltip_AsString()||i.getText()});T.addStyleClass("sapSuiteTvNavBarItemTltp");T._currentControl=i;i.addDelegate(T);i.setAggregation("tooltip",T,true);}}if(i&&!i.doOpen){i.doOpen=true;i.openTimer=setTimeout(function(){i.getTooltip().openPopup(i);i.closeTimer=setTimeout(function(){i.getTooltip().closePopup();i.doOpen=false;},10000);},2000);}};
sap.suite.ui.commons.VerticalNavigationBar.prototype._hideTooltip=function(t){var i=this._oBarItemsMap[t];if(i){i.doOpen=false;clearTimeout(i.openTimer);clearTimeout(i.closeTimer);i.getTooltip().closePopup();}};
