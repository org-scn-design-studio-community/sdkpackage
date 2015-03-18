/**
 * Copyright 2014 SCN Community Contributors
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
 * 
 */

/**
 * World time display designed by Martin Pankraz 
 * 
 */
sap.designstudio.sdk.Component.subclass("org.scn.community.basics.WorldTime", function() {
	var offset = null;
	var time_only = false;
	var update_interval = null;
	var $div = null;
	
	/**
	 * @desc First function called during SAP Design Studio Plugin Lifecycle
	 * @memberOf init
	 */
	this.init = function(){
		
	}
	/**
	 * @function beforeUpdate
	 */
	this.beforeUpdate = function(){};
	
	/**
	 * @function afterUpdate
	 */
	this.afterUpdate = function(){
		if($div === null){
			var identifier = "convista_time_container_"+makeid();
			this.$().append('<div id="'+identifier+'">'+calcTime(offset)+'</div>');
			$div = document.getElementById(identifier);
			setInterval(function(){
				$div.innerHTML = calcTime(offset);
			}
			, update_interval);
		}
	}
	
	/**
	 * @function componentDeleted
	 */
	this.componentDeleted = function(){};
	
	// function to calculate local time
	// in a different city
	// given the city's UTC offset
	/**
	 * @function to calculate local time given the UTC offset
	 */
	function calcTime(offset) {
		
		var result = null;

	    // create Date object for current location
	    d = new Date();
	    
	    // convert to msec
	    // add local time zone offset 
	    // get UTC time in msec
	    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
	    
	    // create new Date object for different city
	    // using supplied offset
	    nd = new Date(utc + (3600000*offset));
	    
	    // return time as a string
	    if(time_only){
	    	result = nd.toLocaleTimeString();
	    }else{
	    	result = nd.toLocaleString();
	    }
	    return result;

	}
	/**
	 * @function generate a random id to distinguish several instances of this component in the same dashboard
	 */
	function makeid()
	{
	    var text = "";
	    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	    for( var i=0; i < 5; i++ )
	        text += possible.charAt(Math.floor(Math.random() * possible.length));

	    return text;
	}
	
	this.utcoffset = function(value) {
		if (value === undefined) {
			return offset;
		} else {
			offset = value;
			return this;
		}
	};
	
	this.showtimeonly = function(value) {
		if (value === undefined) {
			return time_only;
		} else {
			time_only = value;
			return this;
		}
	};
	
	this.interval = function(value) {
		if (value === undefined) {
			return update_interval;
		} else {
			update_interval = value;
			return this;
		}
	};
	
});