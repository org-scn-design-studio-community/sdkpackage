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
		var myScriptSuffix = "res/map/";
		var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 		var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 		return ownScriptPath;
	}
		
	return "";
},
/** end of path recognition */

sap.designstudio.sdk.Component.subclass("org.scn.community.basics.Map", function() {
	
	var pImagePrefix = undefined;
	
	this.defaultImage = function (value) {
		if (value === undefined) {
			return defaultImage;
		} else {
			defaultImage = value;
			
			if(value != undefined && value != "")  {
				pImagePrefix = value.substring(0, value.lastIndexOf("/") + 1);	
			}
			
			return this;
		}
	};
	
	this.id = function (value) {
		if (value === undefined) {
			return id;
		} else {
			id = value;
			return this;
		}
	};
	
	this.elementsContent = function (value) {
		if (value === undefined) {
			return elementsContent;
		} else {
			elementsContent = value;
			return this;
		}
	};
	
	this.pan = function (value) {
		if (value === undefined) {
			return pan;
		} else {
			pan = value;
			return this;
		}
	};
	
	this.panAction = function (value) {
		if (value === undefined) {
			return panAction;
		} else {
			panAction = value;
			return this;
		}
	};
	
	this.zoom = function (value) {
		if (value === undefined) {
			return zoom;
		} else {
			zoom = value;
			return this;
		}
	};
	
	this.moveTo = function (value) {
		if (value === undefined) {
			return moveTo;
		} else {
			moveTo = value;
			return this;
		}
	};
	
	this.moveAction = function (value) {
		if (value === undefined) {
			return moveAction;
		} else {
			moveAction = value;
			return this;
		}
	};
	
	this.selectedKey = function (value) {
		if (value === undefined) {
			return selectedKey;
		} else {
			selectedKey = value;
			return this;
		}
	};

	this.init = function() {
		var that = this;
		this._ownScript = _readScriptPath();

		this._oElements = {};
	};
	
	this.afterUpdate = function() {
		var that = this;

		if(!that._afterRender) {
			var innerId = that.id() + "_control";
			
			that._initMap(innerId);
			that._positionElements();
			
			that._afterRender = true;
		}
		
		// for today, always rerender
		var rerender = true;
		var propertiesNow = this._serializeProperites("selectedKey;pressedKey");
		
		if(this._serializedPropertiesAfter != propertiesNow) {
			this._serializedPropertiesAfter = propertiesNow;
			rerender = true;
		}

		if(rerender) {
			var lElementsToRender = this.elementsContent();
			if(lElementsToRender != null && lElementsToRender != undefined && lElementsToRender != ""){
				var lElementsToRenderArray = JSON.parse(lElementsToRender);

				// distribute content
				for (var i = 0; i < lElementsToRenderArray.length; i++) {
					var element = lElementsToRenderArray[i];
					if(this._oElements[element.key] == undefined) {
						var lNewElement = this._createElement(i, element.key, element.text, element.url, element.lat, element.long);
						
						this._oElements[element.key] = lNewElement;
					}
				}
			}
			
			if(that._afterRender) {
				that._positionElements();
			}
		} else {
			
		}
		
		if(this._oldMoveAction != this.moveAction()) {
			this._oldMoveAction = this.moveAction();
			
			var moveTo = this.moveTo();
			var lElement = this._oElements[moveTo];
		
			if(lElement) {
				this._map.setCenterZoom(lElement.location, 14);
			}
		}
		if(this._oldPanAction != this.panAction()) {
			this._oldPanAction = this.panAction();

			if(pan.indexOf("U") > -1) {
				this._map.panUp();
			}
			if(pan.indexOf("D") > -1) {
				this._map.panDown();
			}
			if(pan.indexOf("L") > -1) {
				this._map.panLeft();
			}
			if(pan.indexOf("R") > -1) {
				this._map.panRight();
			}
		}
		
		if(this._oldZoom != this.zoom()) {
			
			if(this._oldZoom < this.zoom())  {
				this._map.zoomOut();
			} else {
				this._map.zoomIn();
			}

			this._oldZoom = this.zoom();
		}
	};
	
	this._positionElements = function () {
		var that = this;
		
		for (lElementKey in this._oElements) {
			var lElement = this._oElements[lElementKey];
			if(lElement._Placed != true) {
				
				var localElement = lElement;
				var localElementKey = lElementKey;
				
				// location
				var location = new MM.Location(localElement.lat, localElement.long);

				// location on screen
				var locationPoint = this._map.locationPoint(location);
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
	
	this._createElement = function (i, key, text, iImageUrl, lat, long) {
		
		// in case starts with http, keep as is 
		if(iImageUrl.indexOf("http") == 0) {
			// no nothing
		} else {
			// in case of repository, add the prefix from repository
			if(iImageUrl != "" && pImagePrefix != undefined && pImagePrefix != ""){
				iImageUrl = pImagePrefix + iImageUrl;
			} else {
				iImageUrl = this._ownScript + "Home.png";
			}
		}
		
		var locationPoint = { 
				"key": key, 
				"text": text, 
				"url": iImageUrl,
				"lat": lat,
				"long": long
			};
		
		return locationPoint;
	};
	
	this._initMap = function (parentId) {
		// var openStreetProvider = 'http://a.tile.stamen.com/terrain/{Z}/{X}/{Y}.png';
		var openStreetProvider = 'http://tile.openstreetmap.org/{Z}/{X}/{Y}.png';
		var openStreetLayer = new MM.TemplatedLayer(openStreetProvider);
		
		var map = new com.modestmaps.Map(parentId, openStreetLayer);
		
		this._map = map;
		
//		var terrainProvider = 'http://a.tile.stamen.com/terrain/{Z}/{X}/{Y}.png';
//		var terrainLayer = new MM.TemplatedLayer(terrainProvider);
//		
//		// Insert a layer at index 0
//		map.insertLayerAt(0, terrainLayer);
		
		var myHostInfo = this.getMyHostInfo();
		
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
		  
	this._serializeProperites = function (excluding){
		if(!this.oComponentProperties) {
			return "";
		}
		
		if(!this.oComponentProperties.content) {
			return "";
		}
		
		var props = this.oComponentProperties.content.control;

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
		serialization = serialization + "W->" + this.oComponentProperties.width;
		serialization = serialization + "H->" + this.oComponentProperties.height;
		// data
		serialization = serialization + "DATA->" + JSON.stringify(this._data);
		serialization = serialization + "METADATA->" + JSON.stringify(this._metadata);

		return serialization;
	};

	
	this.getMyHostInfo = function () {
	    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
	    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

	    xmlhttp.open("GET","http://api.hostip.info/get_json.php?position=true",false);
	    xmlhttp.send();

		if(xmlhttp.readyState == 4) {
			return JSON.parse(xmlhttp.responseText);
		}

	    return false;
	};
	
});
})();