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
	"./MapSpec",
	"../../../"+scn_pkg+"shared/modules/component.core",
	"../../../"+scn_pkg+"shared/modules/component.basics",
	"../../../"+scn_pkg+"basics/os/mm/mm",
	"../../../"+scn_pkg+"basics/os/mm/mm-follower"
	],
	function(
		Component,
		spec,
		core,
		basics
	) {
//%DEFINE-END%

var myComponentData = spec;

Map = function () {

	var that = this;
	
	that.init = function() {
		// define root component

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	};
	
	that.initAsync = function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);
	
		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		// that.addStyleClass("scn-pack-?");
		that._oElements = [];
			
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
	};

	that.afterUpdate = function() {
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/

		// org_scn_community_basics.resizeContentAbsoluteLayout(that, that._oRoot, that.onResize);

		org_scn_community_basics.fillDummyData(that, that.processData, that.afterPrepare);
	};
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/

	that.processData = function (flatData, afterPrepare, owner) {
		var that = owner;
		
		// processing on data
		that.afterPrepare(that);
	};

	that.afterPrepare = function (owner) {
		try{
		var that = owner;
			
		// visualization on processed data
		if(!that._afterRender) {
			that._initMap(owner);
			that._positionElements(owner);
			
			that._afterRender = true;
		}
		
		// for today, always rerender
		var rerender = true;
		var propertiesNow = that._serializeProperites(owner, "selectedKey;pressedKey");
		
		if(that._serializedPropertiesAfter != propertiesNow) {
			that._serializedPropertiesAfter = propertiesNow;
			rerender = true;
		}

		if(rerender) {
			var lElementsToRender = that.getElementsContent();
			if(lElementsToRender != null && lElementsToRender != undefined && lElementsToRender != ""){
				var lElementsToRenderArray = JSON.parse(lElementsToRender);

				// distribute content
				for (var i = 0; i < lElementsToRenderArray.length; i++) {
					var element = lElementsToRenderArray[i];
					if(that._oElements[element.key] == undefined) {
						var lNewElement = that._createElement(that, i, element.key, element.text, element.url, element.lat, element.long);
						
						that._oElements[element.key] = lNewElement;
					}
				}
			}
			
			if(that._afterRender) {
				that._positionElements(that);
			}
		} else {
			
		}
		
		if(that._oldMoveAction != that.moveAction()) {
			that._oldMoveAction = that.moveAction();
			
			var moveTo = that.moveTo();
			var lElement = that._oElements[moveTo];
		
			if(lElement) {
				that._map.setCenterZoom(lElement.location, 14);
			}
		}
		if(that._oldPanAction != that.panAction()) {
			that._oldPanAction = that.panAction();

			var pan = that.getPan();
			if(pan.indexOf("U") > -1) {
				that._map.panUp();
			}
			if(pan.indexOf("D") > -1) {
				that._map.panDown();
			}
			if(pan.indexOf("L") > -1) {
				that._map.panLeft();
			}
			if(pan.indexOf("R") > -1) {
				that._map.panRight();
			}
		}
		
		var zoom = that.getZoom();
		if(that._oldZoom != zoom) {
			
			if(that._oldZoom < zoom)  {
				that._map.zoomOut();
			} else {
				that._map.zoomIn();
			}

			that._oldZoom = zoom;
		}
		} catch(e) {
			alert("e: " + e.stack);
		}
	};

	that.onResize = function (width, height, parent) {
		// in case special resize code is required
	};

	that._positionElements = function (owner) {
		var that = owner;
		
		for (lElementKey in that._oElements) {
			var lElement = that._oElements[lElementKey];
			if(lElement._Placed != true) {
				
				var localElement = lElement;
				var localElementKey = lElementKey;
				
				// location
				var location = new MM.Location(localElement.lat, localElement.long);

				// location on screen
				var locationPoint = that._map.locationPoint(location);
				localElement.location = location;
				localElement.locationPoint = locationPoint;
				
				var onClickHandler = function () {
					that.selectedKey(localElementKey);
					
					that.firePropertiesChanged(["selectedKey"]);
					that.fireEvent("onSelectionChanged");
				};
				
				var requestForPicture = new XMLHttpRequest();
				
				var finalUrl = undefined;
				
				// just a check if there is some picture at all
				if(localElement.url != undefined && localElement.url != "") {
					requestForPicture.open("GET", localElement.url, true);
					requestForPicture.send();
				} else {
					finalUrl = that._ownScript + "Home.png";
					
					localElement.follower = new MM.Follower(that._map, localElement.location, 
							"<b>" + localElement.text + "</b> <br><br>Latitude: " + localElement.lat + "<br>Longitude: " + localElement.long + "", 
							finalUrl, 
							onClickHandler);
					
					localElement._Placed = true;
				}
				
				if(finalUrl === undefined) {
			        requestForPicture.onreadystatechange = function() {
						// check status and react
						if (requestForPicture.readyState == 4){
							var imageToLoad = undefined;
							
							// sometimes it gets 200 without content
							if(requestForPicture.status == 404 || !requestForPicture.responseURL || requestForPicture.responseURL == "" || !requestForPicture.response || requestForPicture.response == "") {
								imageToLoad = that._ownScript + "Home.png";
							} else {
								imageToLoad = localElement.url;
							};
							
							localElement.follower = new MM.Follower(that._map, localElement.location, 
									"<b>" + localElement.text + "</b> <br><br>Latitude: " + localElement.lat + "<br>Longitude: " + localElement.long + "", 
									imageToLoad, 
									onClickHandler);
							
							localElement._Placed = true;
						};
					};
				};
			} else {
				// need to code update?
			}
		}
	};
	
	that._createElement = function (owner, i, key, text, iImageUrl, lat, long) {
		var that = owner;

		if(text == undefined) {text = "";}
		if(iImageUrl == undefined) {iImageUrl = "";}
		if(lat == undefined) {lat = 0.0;}
		if(long == undefined) {long = 0.0;}
		
		iImageUrl = org_scn_community_basics.getRepositoryImageUrlPrefix(that, that.getDefaultImage(), iImageUrl, "Home.png");	

		var locationPoint = { 
				"key": key, 
				"text": text, 
				"url": iImageUrl,
				"lat": lat,
				"long": long
			};
		
		return locationPoint;
	};
	
	that._initMap = function (owner) {
		var that = owner;

		that._jqThis = that.$();
		that._ownid = that._jqThis[0].id
		
		var openStreetProvider = that.getMapUrl();
		var openStreetLayer = new MM.TemplatedLayer(openStreetProvider);
		
		var map = new com.modestmaps.Map(that._ownid, openStreetLayer);
		
		that._map = map;
		
//		var terrainProvider = 'http://a.tile.stamen.com/terrain/{Z}/{X}/{Y}.png';
//		var terrainLayer = new MM.TemplatedLayer(terrainProvider);
//		
//		// Insert a layer at index 0
//		map.insertLayerAt(0, terrainLayer);
		
		var myHostInfo = that.getMyHostInfo();
		
		if(myHostInfo) {
			map.setCenterZoom(new MM.Location(parseFloat(myHostInfo.lat), parseFloat(myHostInfo.lng)), 10);
		}
		
		var canvas = document.createElement('canvas');
		canvas.style.position = 'absolute';
		canvas.style.left = '0';
		canvas.style.top = '0';
		canvas.width = map.dimensions.x;
		canvas.height = map.dimensions.y;
		map.parent.appendChild(canvas);
		
		map.addCallback('resized', function() {
			canvas.width = map.dimensions.x;
			canvas.height = map.dimensions.y;
		});
	};
		  
	that._serializeProperites = function (owner, excluding){
		var that = owner;

		if(!that.oComponentProperties) {
			return "";
		}
		
		if(!that.oComponentProperties.content) {
			return "";
		}
		
		var props = that.oComponentProperties.content.control;

		if(excluding == undefined) {
			excluding = "";
		}

		var serialization = "";
		for (var key in props) {
		  if (props.hasOwnProperty(key) && excluding.indexOf(key) == -1) {
			  serialization = serialization + key + "->" + props[key] + ";";
		  }
		}
		
		// size
		serialization = serialization + "W->" + that.oComponentProperties.width;
		serialization = serialization + "H->" + that.oComponentProperties.height;
		// data
		serialization = serialization + "DATA->" + JSON.stringify(that._data);
		serialization = serialization + "METADATA->" + JSON.stringify(that._metadata);

		return serialization;
	};

	
	that.getMyHostInfo = function () {
	    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
	    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

	    xmlhttp.open("GET","http://api.hostip.info/get_json.php?position=true",false);
	    try{
	    	xmlhttp.send();
	    } catch (e) {
		    return false;
	    }
	    
		if(xmlhttp.readyState == 4) {
			return JSON.parse(xmlhttp.responseText);
		}

	    return false;
	};

	/* COMPONENT SPECIFIC CODE - END METHODS*/
	return that;
};

//%INIT-START%
myComponentData.instance = Map;
Component.subclass(myComponentData.fullComponentName, myComponentData.instance);


});