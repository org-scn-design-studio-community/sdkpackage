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
define(["./../../../org.scn.community.shared/os/viz-modules/VizCoreDatabound",
        "./../../../org.scn.community.shared/os/lz-string/lz-string",
        "sap/designstudio/sdk/component"], function(VizCoreDatabound,LZString,Component) {
	var ownComponentName = "org.scn.community.utils.DataIterator";
	DataIterator.prototype = VizCoreDatabound;
	function DataIterator() {
		VizCoreDatabound.call(this, {
			flat : {
				noAps : true,
				opts : {
					cat : "General",
					desc : "Loopback Data"
				}
			},flatLength : {
				noAps : true,
				opts : {
					cat : "General",
					desc : "Loopback Data Length"
				}
			},compressedLength : {
				noAps : true,
				opts : {
					cat : "General",
					desc : "Compressed Loopback Length"
				}
			},compressionTime : {
				noAps : true,
				opts : {
					cat : "General",
					desc : "Time (ms) it took to compress string"
				}
			},encodedLength : {
				noAps : true,
				opts : {
					cat : "General",
					desc : "URLEncoded Loopback Length"
				}
			},safetyBelt : {
				opts : {
					cat : "General",
					desc : "Safety Belt size for Loopback Data (Max = 200,000)",
					apsControl : "spinner"
				}
			},waitTime : {
				opts : {
					cat : "General",
					desc : "Wait Time after Data Source change (ms)",
					apsControl : "spinner"
				}
			},includeFormattedValues : {
				opts : {
					cat : "General",
					desc : "Include Formatted Values",
					apsControl : "checkbox"
				}
			}
		});
		this.componentInfo.title = "Data Iterator";
		this.componentInfo.author = "Mike Howles";
    	this.componentInfo.description = "Iterate easily over rows";
    	this.componentInfo.icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAk5JREFUeNpsU8tu00AUPeNXQh7NA6qKBAqBDYI1LBBCYlMWCJAQZVMWgMQHAN9B+gFIwAKQUNkA6oYlQkgQaIElBBBSiRqwnYfTh+143DuT2CQRk5zYc+ecO/eezLAwDMEYw4Ol58fp/Q7hPCGF/wzibRJeEu5en79Yk1rx8/DZi1u6rlfLpX0o5PLITmUh4hNiOF0HrU4bvxtr8H3/9rXLFxY1scg5rx49ckwS+0EAu9UGwsnt5Re5qZzE6ueVKk0XFbEmdqvsLyGfyyJhaFQWF2lpYRxiTXAqs6W4QlkBUxS8q31AqVzCnmIRmUxKEiKSKF98eptbsCwb3+p10rCRBEQIQ4b19T9E6MAwDCQTCaR3pcAph+tuYdv14Pdd0Tsi4/8lIChUhaapEqqqyDkntTJ8FzEeqsIvBDyQFcUJWra13La756and6NYKKKQz0vRKELywHF6sG0bpmWS2d5ynEDXDXfhyjy+1n8QoYW1RoMq0aCruuy1T2X7QZ9aSuLwoYM4O3cGT54uuXGCdCZzqbbyCeXyXlQOzNJ80kQBBb2NgYkfV79ITZxAtMODEI1GE6bZhi5MNMjEFJnIBya6ngfPH5gYiOBwKAM9k65G/arDZxBwerIxLySPsfhfUKJMHDwmRFDY+DzaBCPHXCb49fN71bQsdHuOLFFTNWniGCjm0VrH6aJp/pUaWf3wUMws3Lg5d+LkqauZ7NRpiidDcRnC8ctEY7vndF+/f/vm0eP7916RtslGTlWaMCPuy2hrE0O41yE0CRtCuyPAACZBGVgAMt/bAAAAAElFTkSuQmCC";
    	this.componentInfo.topics.splice(1, 0, {
			title : "Data Iterator License",
			content : '<a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAPCAIAAAD8q9/YAAABqklEQVRIx+WWMU8CMRTH3wewxRvZoGp0IpJOhDhwdMP1JhLHY3DSwU4kxAHYMIGlX+Gc1MXA4AQhpPEb8BX6FWq05Dyhd3Ju573ccGnea+/3/u+9K0AOTefGvoEfn4Lo07nuAMBwOLSGMcYwxhMxNs6r91XhsJAJXe3AEzHGGMfRhsynZ6fGf/o27fV6GQauX9TL5XJybUgpAaB91TYhS7lsXbayCowwMvJKKQkhAMAYU0oxxgCAECKlNCJXaTWs6tHDyDoXtg/7+W5djEZZnRNOSfC3A3fvuwAwm8201oQQz/O01vzLHMdRSgkhgiAwiwijsKrni7l1962XuA/azY41WXE5SucfBb69uwEAKaVSKjq3PM+jlEarmnOOMTZRL6/Pi9UiIfdWGeMg41Kzu+euvAkip1CYMeb7vlGYcy6E2CiMUiickHtrGf+q2FbsHxX+7GG06eEgCBzHAQDf98MeppSu12utdbPZrJxX9uzh/YH37+G4MZEauFavlUqlHE3piRgjdDAYDBKAXdc9Pjn6J//hcHT1+30rbcNtFIvFbN+08nWXzpV9AD9ivwErgn5oAAAAAElFTkSuQmCC" /></a>' +
			'<br /><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Advanced Data Table</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Mike Howles</span> is licensed under a <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" target="_blank" href="http://github.com/org-scn-design-studio-community/sdkpackage/tree/master/src/org.scn.community.utils/res/DataIterator" rel="dct:source">sdkpackage repository on Github</a>.'
		});
    	this.onFlatten2 = function(){
    		//this.flat(JSON.stringify(this.flatData));
    		var safetyBelt = this.safetyBelt();
    		var waitTime = this.waitTime();
    		if(isNaN(safetyBelt)) safetyBelt = 190000;
    		if(isNaN(waitTime)) waitTime = 100;
    		if(waitTime <= 0) waitTime = 100;
    		if(safetyBelt > 200000) safetyBelt = 200000;
    		var start = Date.now();
    		var d = JSON.parse(JSON.stringify(this.data()));
    		if(this.includeFormattedValues()==false) {
    			delete d.formattedData;
    		}
    		// delete d.axis_columns;
    		// delete d.axis_rows;
    		var stream = JSON.stringify(d);									// Raw String
    		var encoded = encodeURIComponent(stream);						// URL Encoded bloat version
    		var payload = LZString.compressToEncodedURIComponent(stream);	// LZString Compressed
    		//var payload = LZString.compress(stream);						// LZString Compressed, will not URIEncode, can't use.
    		
    		var finish = Date.now();
    		var compressionTime = finish - start;
    		var cr = payload.length / stream.length;
    		//alert(payload.length + "\n\n" + payload);
    		//alert(compress.length + "\n\n" + compress);
    		if(payload.length<190000){
    			this.flat(payload);
    			this.encodedLength(encoded.length);
    			this.flatLength(stream.length);
    			this.compressionTime(compressionTime);
    			this.compressedLength(payload.length);
        		this.firePropertiesChanged(["flat","flatLength","encodedLength","compressionTime","compressedLength"]);
        		this.fireEvent("onDataChange");    			
    		}else{
    			this.flatLength(stream.length);
    			this.encodedLength(encoded.length);
    			this.compressedLength(payload.length);
    			this.compressionTime(compressionTime);
    			this.firePropertiesChanged(["flatLength","encodedLength","compressionTime","compressedLength"]);
    			this.fireEvent("onOverflow");
    			// alert("Data Iterator Safety Belt triggered for your safety.  Data payload must be under 190KB.  Contact your BI Application developer, or use less data.");
    		}
    		/*
    		if (this.interval_id !== undefined) {
                clearInterval(this.interval_id);
            }*/
    	};
    	this.onFlatten = function(){
    		var that = this;
    		/*if (that.interval_id !== undefined) {
                clearInterval(that.interval_id);
            }
    		that.interval_id =*/ 
   			setTimeout(function(){that.onFlatten2();},this.waitTime());
    	};		
	}
	DataIterator.prototype.constructor = DataIterator;
	Component.subclass(ownComponentName, DataIterator);
});