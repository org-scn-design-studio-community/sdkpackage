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
	"./ListSelectorSpec",
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

    ListSelector = function() {

        var that = this;

        that.init = function() {
            // define root component

            org_scn_community_basics.fillDummyDataInit(that, that.initAsync);
        };

        that.initAsync = function(owner) {
            var that = owner;
            org_scn_community_component_Core(that, myComponentData);

            /* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
            that.$().addClass("superList");
            that.redraw(that);

            /* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
        };

        that.afterUpdate = function() {
            /* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/

            // org_scn_community_basics.resizeContentAbsoluteLayout(that, that._oRoot, that.onResize);

            org_scn_community_basics.fillDummyData(that, that.processData, that.afterPrepare);
        };

        /* COMPONENT SPECIFIC CODE - START METHODS*/

        that.processData = function(flatData, afterPrepare, owner) {
            var that = owner;

            // processing on data
            that.afterPrepare(that);
        };

        that.afterPrepare = function(owner) {
            var that = owner;

            // visualization on processed data

            // Determine if a redraw is needed
            that.redraw(that);
            
            // Unselect if necessary
            if (that.getLabelUnselect()) {
                that.resetSelection();
            }
        };

        that.onResize = function(width, height, parent) {
            // in case special resize code is required
        };

        that.resetSelection = function(owner) {
            var that = owner;
            for (var i = 0; i < list[0].children.length; i++) {
                var child = list[0].children[i];
                child.className = '';
            }
        };

        that.redraw = function(owner) {
            var that = owner;

            that.$().empty();
            list = $("<ul/>");
            var t = [];
            var ids = [];
            var vis = [];
            
            if (that.getTitles()) t = JSON.parse(that.getTitles());
            
            if (that.getSpriteIDs()) ids = that.getSpriteIDs().split(",");
            if (that.getVisibilities()) vis = that.getVisibilities().split(",");
            while (ids.length < t.length) ids.push(undefined);
            while (vis.length < t.length) vis.push(undefined);
            for (var i = 0; i < t.length; i++) {
                var newItem = $("<li/>").css({
                    textAlign: that.getTextAlign().toLowerCase(),
                    verticalAlign: that.getVerticalAlign().toLowerCase()
                });

                if(t[i].text == undefined) {
                        t[i].text = t[i].key;
                }
                
                newItem.click(function(element) {
                    return function() {
                    	newItem.addClass("selected");
                        
                        that.setLabelClicked(element.text);
                        that.setKeyClicked(element.key);

                        //make sure unselect function is reseted
                        that.setLabelUnselect(false);
                        that.firePropertiesChangedAndEvent(["keyClicked", "labelClicked", "labelUnselect"], "onclick");
                    };
                }(t[i]));

                // if (that.getButtonClass()) newItem.addClass(that.getButtonClass());
                if (that.getLabelClicked() == t[i].text && !that.getLabelUnselect()) {
                    newItem.addClass("selected");
                }
                if (that.getFixedWidth() != -1) {
                    newItem.css({
                        width: that.getFixedWidth()
                    });
                }
                if (that.getSpriteSheet() != "") {
                    var icon = $("<DIV/>")
                        .addClass("icon")
                        .css({
                            background: "url('" + that.getSpriteSheet() + "')",
                            display: "inline-block",
                            verticalAlign: that.getVerticalAlign()
                        });
                    if (that.getIconWidth()) {
                        var col;
                        var spriteIndex = i;
                        if (ids[i]) spriteIndex = ids[i];
                        var rowOffset = 0;
                        var rowHeight = that.getIconHeight() || 0;
                        if (that.getSpriteSheetPerRow() && that.getSpriteSheetPerRow() != 0) {
                            if (spriteIndex >= that.getSpriteSheetPerRow()) {
                                col = spriteIndex % that.getSpriteSheetPerRow();
                                //alert(col);
                                rowOffset = Math.floor(spriteIndex / that.getSpriteSheetPerRow());
                            } else {
                                col = spriteIndex;
                            }
                        }
                        icon.css({
                            backgroundPositionX: -1 * (parseInt(that.getIconWidth()) * col) + "px",
                            width: parseInt(that.getIconWidth())
                        });
                        if (rowOffset) {
                            icon.css({
                                backgroundPositionY: -1 * (rowOffset * that.getIconHeight())
                            });
                        }
                    }
                    if (that.getIconHeight()) {
                        icon.css({
                            height: parseInt(that.getIconHeight())
                        });
                    }
                }
                var buttonLabel = $("<SPAN>" + t[i].text + "</SPAN>")
                    .addClass("label")
                    .css({
                        verticalAlign: that.getVerticalAlign()
                    });



                switch (that.getLabelPlacement()) {
                    case "After":
                        {
                            newItem.append(icon);
                            if (that.getLabelOrientation() == "Vertical") newItem.append("<br/>");
                            newItem.append(buttonLabel);
                            break;
                        }
                    case "Before":
                        {
                            newItem.append(buttonLabel);
                            if (that.getLabelOrientation() == "Vertical") newItem.append("<br/>");
                            newItem.append(icon);
                            break;
                        }
                }
                if (vis[i] != "H") list.append(newItem);
            }
            that.$().append(list);
        };
        /* COMPONENT SPECIFIC CODE - END METHODS*/
        return that;
    };
//%INIT-START%
myComponentData.instance = ListSelector;
Component.subclass(myComponentData.fullComponentName, myComponentData.instance);


});