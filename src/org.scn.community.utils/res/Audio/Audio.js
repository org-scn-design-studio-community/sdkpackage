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
 * 
 * This component uses howler.js: https://github.com/goldfire/howler.js
 * 
 */
 
//%DEFINE-START%
var scn_pkg="org.scn.community.";if(sap.firefly!=undefined){scn_pkg=scn_pkg.replace(".","_");}
define([
	"sap/designstudio/sdk/component",
	"../../../"+scn_pkg+"shared/modules/component.core",
	"../../../"+scn_pkg+"shared/modules/component.basics",
	"../../../"+scn_pkg+"utils/os/audio/howler",
	],
	function(
		Component,
		core,
		basics,
		howler
	) {
//%DEFINE-END%

var myComponentData = {};
myComponentData.fullComponentName = "org.scn.community.utils.Audio";

AudioObj = function () {

	var that = this;
	
	that.init = function() {
		// define root component
		that._soundInit = false;
	};
	
	that.initAsync = function (owner) {
		var that = owner;
	};

	that.afterUpdate = function() {
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
		if(!that._soundInit){
			that._mySound = new Howl({
				  src: that.sound(),
				  volume: that.volume(),
				  loop: false,
				  onend: function() {
				    that.fireEvent("onFinish");
				  },
				  onstop: function() {
					that.fireEvent("onStop");
				  }
			});	
			that._soundInit = true;
		}
		
		if(that._play !== ""){
			that._mySound.play();
			that.play("");
			that.firePropertiesChanged(["play"]);
		}
		if(that._stop !== ""){
			that._mySound.stop();
			that.stop("");
			that.firePropertiesChanged(["stop"]);
		}
		/* COMPONENT SPECIFIC CODE - END(afterDesignStudioUpdate)*/
	};
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/
	
	that.play = function (value) {
		if (value === undefined) {
			return that._play;
		} else {
			that._play = value;
			return this;
		}
	};
	
	that.stop = function (value) {
		if (value === undefined) {
			return that._stop;
		} else {
			that._stop = value;
			return this;
		}
	};
	
	that.sound = function (value) {
		if (value === undefined) {
			return that._sound;
		} else {
			that._sound = value;
			return this;
		}
	};
	
	that.volume = function (value) {
		if (value === undefined) {
			return that._volume;
		} else {
			that._volume = value;
			return this;
		}
	};
	
	
	/* COMPONENT SPECIFIC CODE - END METHODS*/
	
	return that;
};

myComponentData.instance = AudioObj;
Component.subclass(myComponentData.fullComponentName, myComponentData.instance);

});