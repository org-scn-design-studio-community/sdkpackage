/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.ThreePanelThingInspector");jQuery.sap.require("sap.suite.ui.commons.library");jQuery.sap.require("sap.ui.ux3.ThingInspector");sap.ui.ux3.ThingInspector.extend("sap.suite.ui.commons.ThreePanelThingInspector",{metadata:{library:"sap.suite.ui.commons",properties:{"showHeader":{type:"boolean",group:"Misc",defaultValue:true},"logo":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"sidebarWidth":{type:"sap.ui.core.CSSSize",group:"Misc",defaultValue:'224px'}},aggregations:{"menuContent":{type:"sap.ui.commons.Link",multiple:true,singularName:"menuContent"}}}});jQuery.sap.require("sap.ui.ux3.ThingInspector");
sap.suite.ui.commons.ThreePanelThingInspector.prototype.init=function(){sap.ui.ux3.ThingInspector.prototype.init.apply(this);var t=this;this._oThingViewer.destroy();this._oThingViewer=new sap.suite.ui.commons.ThreePanelThingViewer(this.getId()+"-thingViewer");this.setAggregation("thingViewer",this._oThingViewer);this._oThingViewer.attachFacetSelected(function(e){var i=e.getParameters().item;if(t.fireFacetSelected({id:i.getId(),key:i.getKey(),item:i})){t.setSelectedFacet(i);}else{e.preventDefault();}});};
sap.suite.ui.commons.ThreePanelThingInspector.prototype.setShowHeader=function(s){this._oThingViewer.setShowHeader(s);return this;};
sap.suite.ui.commons.ThreePanelThingInspector.prototype.getShowHeader=function(){this._oThingViewer.getShowHeader();};
sap.suite.ui.commons.ThreePanelThingInspector.prototype.setLogo=function(u){this._oThingViewer.setLogo(u);return this;};
sap.suite.ui.commons.ThreePanelThingInspector.prototype.getLogo=function(){this._oThingViewer.getLogo();};
sap.suite.ui.commons.ThreePanelThingInspector.prototype.getSidebarWidth=function(){this._oThingViewer.getSidebarWidth();};
sap.suite.ui.commons.ThreePanelThingInspector.prototype.setSidebarWidth=function(w){this._oThingViewer.setSidebarWidth(w);return this;};
sap.suite.ui.commons.ThreePanelThingInspector.prototype.addMenuContent=function(c){this._oThingViewer.addMenuContent(c);return this;};
sap.suite.ui.commons.ThreePanelThingInspector.prototype.insertMenuContent=function(c,i){this._oThingViewer.insertMenuContent(c,i);return this;};
sap.suite.ui.commons.ThreePanelThingInspector.prototype.getMenuContent=function(){return this._oThingViewer.getMenuContent();};
sap.suite.ui.commons.ThreePanelThingInspector.prototype.removeMenuContent=function(c){return this._oThingViewer.removeMenuContent(c);};
sap.suite.ui.commons.ThreePanelThingInspector.prototype.removeAllMenuContent=function(){return this._oThingViewer.removeAllMenuContent();};
sap.suite.ui.commons.ThreePanelThingInspector.prototype.indexOfMenuContent=function(c){return this._oThingViewer.indexOfMenuContent(c);};
sap.suite.ui.commons.ThreePanelThingInspector.prototype.destroyMenuContent=function(){this._oThingViewer.destroyMenuContent();return this;};
