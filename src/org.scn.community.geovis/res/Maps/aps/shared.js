/**
 * Copyright 2014 - 2015 SCN Community Contributors
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
 */;



var LZString={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_f:String.fromCharCode,compressToBase64:function(e){if(e==null)return"";var t="";var n,r,i,s,o,u,a;var f=0;e=LZString.compress(e);while(f<e.length*2){if(f%2==0){n=e.charCodeAt(f/2)>>8;r=e.charCodeAt(f/2)&255;if(f/2+1<e.length)i=e.charCodeAt(f/2+1)>>8;else i=NaN}else{n=e.charCodeAt((f-1)/2)&255;if((f+1)/2<e.length){r=e.charCodeAt((f+1)/2)>>8;i=e.charCodeAt((f+1)/2)&255}else r=i=NaN}f+=3;s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+LZString._keyStr.charAt(s)+LZString._keyStr.charAt(o)+LZString._keyStr.charAt(u)+LZString._keyStr.charAt(a)}return t},decompressFromBase64:function(e){if(e==null)return"";var t="",n=0,r,i,s,o,u,a,f,l,c=0,h=LZString._f;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(c<e.length){u=LZString._keyStr.indexOf(e.charAt(c++));a=LZString._keyStr.indexOf(e.charAt(c++));f=LZString._keyStr.indexOf(e.charAt(c++));l=LZString._keyStr.indexOf(e.charAt(c++));i=u<<2|a>>4;s=(a&15)<<4|f>>2;o=(f&3)<<6|l;if(n%2==0){r=i<<8;if(f!=64){t+=h(r|s)}if(l!=64){r=o<<8}}else{t=t+h(r|i);if(f!=64){r=s<<8}if(l!=64){t+=h(r|o)}}n+=3}return LZString.decompress(t)},compressToUTF16:function(e){if(e==null)return"";var t="",n,r,i,s=0,o=LZString._f;e=LZString.compress(e);for(n=0;n<e.length;n++){r=e.charCodeAt(n);switch(s++){case 0:t+=o((r>>1)+32);i=(r&1)<<14;break;case 1:t+=o(i+(r>>2)+32);i=(r&3)<<13;break;case 2:t+=o(i+(r>>3)+32);i=(r&7)<<12;break;case 3:t+=o(i+(r>>4)+32);i=(r&15)<<11;break;case 4:t+=o(i+(r>>5)+32);i=(r&31)<<10;break;case 5:t+=o(i+(r>>6)+32);i=(r&63)<<9;break;case 6:t+=o(i+(r>>7)+32);i=(r&127)<<8;break;case 7:t+=o(i+(r>>8)+32);i=(r&255)<<7;break;case 8:t+=o(i+(r>>9)+32);i=(r&511)<<6;break;case 9:t+=o(i+(r>>10)+32);i=(r&1023)<<5;break;case 10:t+=o(i+(r>>11)+32);i=(r&2047)<<4;break;case 11:t+=o(i+(r>>12)+32);i=(r&4095)<<3;break;case 12:t+=o(i+(r>>13)+32);i=(r&8191)<<2;break;case 13:t+=o(i+(r>>14)+32);i=(r&16383)<<1;break;case 14:t+=o(i+(r>>15)+32,(r&32767)+32);s=0;break}}return t+o(i+32)},decompressFromUTF16:function(e){if(e==null)return"";var t="",n,r,i=0,s=0,o=LZString._f;while(s<e.length){r=e.charCodeAt(s)-32;switch(i++){case 0:n=r<<1;break;case 1:t+=o(n|r>>14);n=(r&16383)<<2;break;case 2:t+=o(n|r>>13);n=(r&8191)<<3;break;case 3:t+=o(n|r>>12);n=(r&4095)<<4;break;case 4:t+=o(n|r>>11);n=(r&2047)<<5;break;case 5:t+=o(n|r>>10);n=(r&1023)<<6;break;case 6:t+=o(n|r>>9);n=(r&511)<<7;break;case 7:t+=o(n|r>>8);n=(r&255)<<8;break;case 8:t+=o(n|r>>7);n=(r&127)<<9;break;case 9:t+=o(n|r>>6);n=(r&63)<<10;break;case 10:t+=o(n|r>>5);n=(r&31)<<11;break;case 11:t+=o(n|r>>4);n=(r&15)<<12;break;case 12:t+=o(n|r>>3);n=(r&7)<<13;break;case 13:t+=o(n|r>>2);n=(r&3)<<14;break;case 14:t+=o(n|r>>1);n=(r&1)<<15;break;case 15:t+=o(n|r);i=0;break}s++}return LZString.decompress(t)},compress:function(e){if(e==null)return"";var t,n,r={},i={},s="",o="",u="",a=2,f=3,l=2,c="",h=0,p=0,d,v=LZString._f;for(d=0;d<e.length;d+=1){s=e.charAt(d);if(!Object.prototype.hasOwnProperty.call(r,s)){r[s]=f++;i[s]=true}o=u+s;if(Object.prototype.hasOwnProperty.call(r,o)){u=o}else{if(Object.prototype.hasOwnProperty.call(i,u)){if(u.charCodeAt(0)<256){for(t=0;t<l;t++){h=h<<1;if(p==15){p=0;c+=v(h);h=0}else{p++}}n=u.charCodeAt(0);for(t=0;t<8;t++){h=h<<1|n&1;if(p==15){p=0;c+=v(h);h=0}else{p++}n=n>>1}}else{n=1;for(t=0;t<l;t++){h=h<<1|n;if(p==15){p=0;c+=v(h);h=0}else{p++}n=0}n=u.charCodeAt(0);for(t=0;t<16;t++){h=h<<1|n&1;if(p==15){p=0;c+=v(h);h=0}else{p++}n=n>>1}}a--;if(a==0){a=Math.pow(2,l);l++}delete i[u]}else{n=r[u];for(t=0;t<l;t++){h=h<<1|n&1;if(p==15){p=0;c+=v(h);h=0}else{p++}n=n>>1}}a--;if(a==0){a=Math.pow(2,l);l++}r[o]=f++;u=String(s)}}if(u!==""){if(Object.prototype.hasOwnProperty.call(i,u)){if(u.charCodeAt(0)<256){for(t=0;t<l;t++){h=h<<1;if(p==15){p=0;c+=v(h);h=0}else{p++}}n=u.charCodeAt(0);for(t=0;t<8;t++){h=h<<1|n&1;if(p==15){p=0;c+=v(h);h=0}else{p++}n=n>>1}}else{n=1;for(t=0;t<l;t++){h=h<<1|n;if(p==15){p=0;c+=v(h);h=0}else{p++}n=0}n=u.charCodeAt(0);for(t=0;t<16;t++){h=h<<1|n&1;if(p==15){p=0;c+=v(h);h=0}else{p++}n=n>>1}}a--;if(a==0){a=Math.pow(2,l);l++}delete i[u]}else{n=r[u];for(t=0;t<l;t++){h=h<<1|n&1;if(p==15){p=0;c+=v(h);h=0}else{p++}n=n>>1}}a--;if(a==0){a=Math.pow(2,l);l++}}n=2;for(t=0;t<l;t++){h=h<<1|n&1;if(p==15){p=0;c+=v(h);h=0}else{p++}n=n>>1}while(true){h=h<<1;if(p==15){c+=v(h);break}else p++}return c},decompress:function(e){if(e==null)return"";if(e=="")return null;var t=[],n,r=4,i=4,s=3,o="",u="",a,f,l,c,h,p,d,v=LZString._f,m={string:e,val:e.charCodeAt(0),position:32768,index:1};for(a=0;a<3;a+=1){t[a]=a}l=0;h=Math.pow(2,2);p=1;while(p!=h){c=m.val&m.position;m.position>>=1;if(m.position==0){m.position=32768;m.val=m.string.charCodeAt(m.index++)}l|=(c>0?1:0)*p;p<<=1}switch(n=l){case 0:l=0;h=Math.pow(2,8);p=1;while(p!=h){c=m.val&m.position;m.position>>=1;if(m.position==0){m.position=32768;m.val=m.string.charCodeAt(m.index++)}l|=(c>0?1:0)*p;p<<=1}d=v(l);break;case 1:l=0;h=Math.pow(2,16);p=1;while(p!=h){c=m.val&m.position;m.position>>=1;if(m.position==0){m.position=32768;m.val=m.string.charCodeAt(m.index++)}l|=(c>0?1:0)*p;p<<=1}d=v(l);break;case 2:return""}t[3]=d;f=u=d;while(true){if(m.index>m.string.length){return""}l=0;h=Math.pow(2,s);p=1;while(p!=h){c=m.val&m.position;m.position>>=1;if(m.position==0){m.position=32768;m.val=m.string.charCodeAt(m.index++)}l|=(c>0?1:0)*p;p<<=1}switch(d=l){case 0:l=0;h=Math.pow(2,8);p=1;while(p!=h){c=m.val&m.position;m.position>>=1;if(m.position==0){m.position=32768;m.val=m.string.charCodeAt(m.index++)}l|=(c>0?1:0)*p;p<<=1}t[i++]=v(l);d=i-1;r--;break;case 1:l=0;h=Math.pow(2,16);p=1;while(p!=h){c=m.val&m.position;m.position>>=1;if(m.position==0){m.position=32768;m.val=m.string.charCodeAt(m.index++)}l|=(c>0?1:0)*p;p<<=1}t[i++]=v(l);d=i-1;r--;break;case 2:return u}if(r==0){r=Math.pow(2,s);s++}if(t[d]){o=t[d]}else{if(d===i){o=f+f.charAt(0)}else{return null}}u+=o;t[i++]=f+o.charAt(0);r--;f=o;if(r==0){r=Math.pow(2,s);s++}}}};if(typeof module!=="undefined"&&module!=null){module.exports=LZString}
;



/**
 * Global Functions for work with components
 */
var org_scn_community_geovis = org_scn_community_geovis || {
	mode : "component",				// This will be set to aps if loaded by APS servlet
	resourcePrefix : "",
	loadCityLookup : function(){
    	try{
    		if(!this.cityLookup){
				var geoDB = $.ajax({
		    		async : false,
		    		url : this.resourcePrefix + "res/Maps/geo/citylookup.json"
		    	});
		    	this.cityLookup = jQuery.parseJSON(geoDB.responseText);
			}
		}catch(e){
			alert("Error during city reverse lookup:\n\n" + e);
		}
		
    },
    loadRegionLookup : function(){
    	try{
	    	if(!this.regionLookup){
				var geoDB = $.ajax({
		    		async : false,
		    		url : this.resourcePrefix + "res/Maps/geo/regionlookup.json"
		    	});
		    	this.regionLookup = jQuery.parseJSON(geoDB.responseText);
			}
    	}catch(e){
    		alert("Error during region reverse lookup:\n\n" + e);
    	}
    },
	// Compare two 1-D arrays
	arraysIdentical : function(a, b) {
	    var i = a.length;
	    if (i != b.length) return false;
	    while (i--) {
	        if (a[i] !== b[i]) return false;
	    }
	    return true;
	},
	// Convert Dimension Index to Dimension Key
	indexDimension : function(idx, metadata){
		if(idx==-1) return null;	// user to be -1
		if(!metadata) return null;
		if(metadata.dimensions.length>=idx) return metadata.dimensions[idx].key;
		return null;
	},
	// Convert Dimension Key to Dimension Index
	dimensionIndex : function(key, metadata){
		if(key=="NONE") return null;	// used to be -1
		if(!metadata) return null;
		for(var i=0;i<metadata.dimensions.length;i++){
			if(metadata.dimensions[i].key==key) return i;
		}
		return null;
	},
	// Convert a given Dimension's Member Key to Dimension Index
	memberIndex : function(key, dimId, metadata){
		if(!metadata) return null;
		var dim = metadata.dimensions[dimId];
		for(var i=0;i<dim.members.length;i++){
			if(dim.members[i].key==key) return i;
		}
		return null;
	},
	getLatLngs : function(options){
		var solved = [];
		var unsolved = [];
		var metadata = options.metadata;
		var results = options.results;
		var callback = options.callback;
		if(!metadata || !results){
			if(!callback) throw "No callback specified";
			callback({
				solved : [],
				unresolved : []
			});
		}
		var distincts = [];
		var tuples = results.tuples;
		
		// Establish Geodimensional indices
		var geoIndexAddress = this.dimensionIndex(options.geoDimAddress, metadata);
		var geoIndexCity = this.dimensionIndex(options.geoDimCity, metadata);
		var geoIndexZip = this.dimensionIndex(options.geoDimZip, metadata);
		var geoIndexRegion = this.dimensionIndex(options.geoDimRegion, metadata);
		var geoIndexCountry = this.dimensionIndex(options.geoDimCountry, metadata);
		
		// Build geo-candidate tuple
		for(var row=0;row<tuples.length;row++){
			var currentTuple = tuples[row];
			var tupleCandidate = [];
			for(var col=0;col<currentTuple.length;col++){
				var key=-1;		// Non-geo key
				if(col==geoIndexAddress || 
					col == geoIndexCity ||
					col == geoIndexZip ||
					col == geoIndexRegion ||
					col == geoIndexCountry) {
						key = currentTuple[col];
					}
				tupleCandidate.push(key);
			}
			// See if geo-candidate is a new one
			var isDistinct = true;
			for(var d=0;d<distincts.length;d++){
				if(this.arraysIdentical(distincts[d],tupleCandidate)) isDistinct = false;
			}
			if(isDistinct) distincts.push(tupleCandidate.slice());
		}
		if(!this.locationsJSON){
	    	var geoDB = $.ajax({
	    		async : false,
	    		url : this.resourcePrefix + "res/Maps/geo/world.json"
	    	});
	    	var worldJSON = jQuery.parseJSON(geoDB.responseText);
	    	this.locationsJSON = {};
	    	for(var country in worldJSON){
	    		this.locationsJSON[country] = {
	    			loaded : false,
	    			l : worldJSON[country],
	    			r : {}
	    		};
	    	}
	    	//this.locationsJSON = jQuery.parseJSON(geoDB.responseText);
    	}
		for(var i=0;i<distincts.length;i++){
			var value = undefined, address = undefined, city=undefined, region=undefined, zip=undefined, country=undefined, title=undefined, color=undefined;
			var tuple = distincts[i];
			for(var j=0;j<tuple.length;j++){
				var tupleDim = metadata.dimensions[j];
				if(tuple[j]!=-1) value = tupleDim.members[tuple[j]].key;
				if(j==geoIndexAddress) address = value.toLowerCase();
				if(j==geoIndexCity) city = value.toLowerCase().replace(/[;#\/]/g,"");
				if(j==geoIndexZip) zip = value.toLowerCase();
				if(j==geoIndexRegion) region = value.toLowerCase().replace(/[;#\/]/g,"");
				if(j==geoIndexCountry) country = value.toLowerCase().replace(/[;#\/]/g,"");
			}
			if(zip){
				var za = zip.split("-");
				zip=za[0];
			}
			var resolved = true;
			var unsolvedReason = "";
			// Local Lat/Lng
			var latlng = [];
			if(city && !country && !region){	// Unresolvable
				this.loadCityLookup();
				var c = this.cityLookup[city];
				// Take first one because who knows?
				if(c){
					if(c.length>1) resolved = false;
					region = c[0].r.toLowerCase();
					country = c[0].cy.toLowerCase();
				}
				
			}
			if(city && country && !region){		// Resolvable
				this.loadCityLookup();
				var c = this.cityLookup[city];
				if(c){
					for(var j=0;j<c.length;j++){
						if(c[j].cy.toLowerCase()==country) {
							region = c[j].r.toLowerCase();
						}
					}
				}
				
			}
			if(city && !country && region){		// Resolvable
				this.loadCityLookup();
				var c = this.cityLookup[city];
				if(c) {
					for(var j=0;j<c.length;j++){
						if(c[j].r.toLowerCase()==region) {
							country = c[j].cy.toLowerCase();
						}
					}
				}					
			}
			if(region && !country && !city){	// Unresolveable
				this.loadRegionLookup();
				var c = this.regionLookup[region];
				if(c && c.length>0) {
					if(c.length>1) resolved = false;
					unsolvedReason = "Multiple countries possible for this region."
					country = c[0].toLowerCase();
				}
			}

			// Walk the lat/lng hierarchy
			if(country && this.locationsJSON[country]){
				if(!this.locationsJSON[country].loaded){	// On Demand Loading
					var countryDB = $.ajax({
			    		async : false,
			    		url : this.resourcePrefix + "res/Maps/geo/world/" + country + ".json"
			    	});
			    	var countryJSON = jQuery.parseJSON(countryDB.responseText);
			    	for(var region in countryJSON){
			    		this.locationsJSON[country].r[region] = {
			    			loaded : false,
			    			l : countryJSON[region],
			    			c : {}
			    		};
			    	}
			    	this.locationsJSON[country].loaded = true;
				}
				latlng = this.locationsJSON[country].l;
				if(region){					// Region Specified?
					if(this.locationsJSON[country].r[region]){
						if(!this.locationsJSON[country].r[region].loaded){	// On Demand Loading
							var regionDB = $.ajax({
					    		async : false,
					    		url : this.resourcePrefix + "res/Maps/geo/world/" + country + "/" + region +".json"
					    	});
							this.locationsJSON[country].r[region] = jQuery.parseJSON(regionDB.responseText);
							this.locationsJSON[country].r[region].loaded = true;
						}
						latlng = this.locationsJSON[country].r[region].l;
						if(city) {			// City Specified?
							if(this.locationsJSON[country].r[region].c[city]){
								latlng = this.locationsJSON[country].r[region].c[city].l;
								if(zip){	// ZIP Specified?
									if(this.locationsJSON[country].r[region].c[city].z[zip]){
										latlng = this.locationsJSON[country].r[region].c[city].z[zip];
									}else{
										resolved = false;
										unsolvedReason = "ZIP not found.";
									}
								}
							}else{
								resolved = false;
								unsolvedReason = "City not found.";
							}
						}
					}else{
						resolved = false;
						unsolvedReason = "Region not found.";
					}
				} 
			}
			if(resolved) {
				solved.push({
					tuple : tuple.slice(),
					city : city,
					region : region,
					country : country,
					zip : zip,
					address : address,
					latlng : latlng
				});
			}else{
				unsolved.push({
					tuple : tuple.slice(),
					reason : unsolvedReason,
					latlng : latlng
				});
			}
				
		}
		options.callback({
			distincts : distincts,
			solved : solved,
			unsolved : unsolved
		});
	}
};;



/**
 * Component Property/Metadata Configuration for APS and Component
 */
var ComponentProperties = function(opts){
	var componentRef = opts.componentRef;	// Component side
	var propSheet = opts.propSheet;			// APS side
	/*
	 * Category APS layout - Probably kill this.
	 */
	var categories = {
		basics : {
			label : "Basics",
			icon : "",
			children : [
			   {
				   label : "Basics",
				   props : ["mapTitle","tileJSON","zoomControl","defaultLocation","zoom"]
			   }
			]
		},
		hier : {
			label : "Geohierarchies",
			icon : "",
			children : [
			  {
			     label : "Geohierarchies",
			     props : ["geoHierarchy"]
			  }
			]
		},
		geo : {
			label : "Layers",
			icon : "",
			children : [
			  {
			     label : "Layers",
			     props : ["layerConfig"]
			  }
			]
		},
		geoCoding : {
			label : "Geocoding",
			icon : "",
			children : [
			     {
			    	 label : "Cache",
			    	 props : ["geoCodeCache"]
			     }
			]
		}
	};
	var properties = {
		mapTitle : {
			label : "Title",
			tooltip : "Title of the map.",
			charts : ["All"],
			afterChange : function(){},
			afterSetAPS : function(newValue){},
			component : "apsTextInput"
		},
		tileJSON : {
			label : "Tileset Configuration",
			tooltip : "Tileset Configuration",
			charts : ["All"],
			afterChange : function(){},
			afterSetAPS : function(newValue){},
			component : "apsTileJSON"
		},
		zoomControl : {
			label : "Show Zoom Control",
			tooltip : "Whether to show Zoom Control",
			component : "apsCheckBox"
		},
		defaultLocation : {
			label : "Default Location",
			tooltip : "Default location of the map.",
			afterChange : function(){},
			afterSetAPS : function(newValue){},
			component : "apsGeoLookupLocal"
		},
		zoom : {
			label : "Zoom Level (0-22)",
			tooltip : "Default Zoom Level",
			component : "apsSlider",
			componentOptions : {
				min : 0,
				max : 22
			}
		},
		layerConfig : {
			label : "Layers",
			tooltip : "Map Layers",
			dsOnly : true,
			component : "apsGeoLayers",
			type : "configuration",
			afterChange : function(){
				
			},
			afterSetAPS : function(){
				
			}
		},
		geoHierarchy : {
			label : "Geohierarchies",
			tooltip : "Maintain Geohierarchies",
			dsOnly : true,
			component : "apsGeoHierarchy",
			type : "configuration",
			afterChange : function(){
				
			},
			afterSetAPS : function(newValue){
				propSheet._properties.layerConfig.component.setHierarchies(jQuery.parseJSON(newValue));
			}
		},
		geoCodeCache : {
			label : "Geocoder Cache",
			component : "apsGeoCache",
			noSetterGetter : true
		},
	};
	var propertyInstances = {};
	for (var propertyConfig in properties){
		var config = properties[propertyConfig];
		config.propertyName = propertyConfig;
		config.propSheet = opts.propSheet;
		propertyInstances[propertyConfig] = new DesignStudioProperty(config);
		if(propSheet){	// Property Sheet Design time - Create setters and getters
			if(!propertyInstances[propertyConfig].noPropertySheet){
				propSheet[propertyConfig] = function(propertyConfig){
					return function(value){
						if(value===undefined){
							/*
							 * Design Studio Getter
							 */
							var v = null;
							if(propSheet._properties[propertyConfig].value == null){
								if(propSheet._properties[propertyConfig].nullHandler) {
									v = propSheet._properties[propertyConfig].nullHandler();
								}
							}else{
								v = propSheet._properties[propertyConfig].value;
							}
							return v;
						}else{
							/*
							 * Design Studio Setter
							 */
							if(propSheet._properties[propertyConfig].value!=value){
									// Step 1 - Property Sheet DS Proxy sets the value.  Store the new value.
								try{	
									propSheet._properties[propertyConfig].value = value;
									// Step 2 - Update Property Sheet Component
								}catch(e){
									alert("An error happened while trying to set property " + propertyConfig + "\n\n" + e);
								}
								try{
									propSheet._properties[propertyConfig].updateComponent(value);
									// Step 3 - Any post-property change logic
								}catch(e){
									alert("An error happened while trying to update component for property " + propertyConfig + "\n\n" + e);
								}
								if(propSheet._properties[propertyConfig].afterSetAPS) 
									try{ 
										propSheet._properties[propertyConfig].afterSetAPS(value);
									}catch(e){
										alert("An error occured after Property Sheet set on property" + propertyConfig + ":\n\n"+e); 
									}
								
							}
							// Final Step - Return self for required methodchaining.
							return propSheet;
						}
					};
				}(propertyConfig);
			}
		}		
	}
	return {
		properties : propertyInstances,
		categories : categories
	};
};;



/**
 * Properties Utility Class
**/
var propUtility = function(propConfig, componentRef){
	var that = this;
	this.toString = function(){
		return "Design Studio Property Utility Class - Private Scope";
	};
	this._properties = propConfig;
	/*
	 * Create the aforementioned getter/setter and attach to 'this'.
	 */
	var obj = {
		props : this._properties,
		toString : function(){
			return "Design Studio Property Utility Class";
		},
		resetAll : function(){
			for(var prop in that._properties){
				that._properties[prop].changed = false;
			}
		}
	};
	for(var property in this._properties){
		this._properties[property].changed = false;

		// Return full-fledged object (Non-DS setter/getter version)
		obj[property] = function(property){
			return function(value){	// not using value yet
				var r = that._properties[property];
				// Enhance object config
				r.reset = function(){
					that._properties[property].changed = false;
				};
				return r;
			};
		}(property);
		// Check if we should ignore special properties like onclick events
		if(!this._properties[property].noSetterGetter){
			// Attach setter/getter function for SDK DIV handler
			componentRef[property] = function(property){
				return function(value){
					if(value===undefined){
						//var v = null;
						var v;
						if(that._properties[property].value == null){
							if(that._properties[property].nullHandler) v = that._properties[property].nullHandler();
						}else{
							v = that._properties[property].value;
						}
						return v;
					}else{
						var oldVal = JSON.stringify(that._properties[property].value);
						var newVal = JSON.stringify(value);
						if(oldVal != newVal){
							that._properties[property].oldValue = that._properties[property].value;
							that._properties[property].value = value;
							that._properties[property].changed = true;
							if(that._properties[property].afterChange){
								that._properties[property].afterChange();
							}
						}
						return componentRef;
					}
				};
			}(property);
		}
	}
	return obj;
}
/**
 * Design Studio Property Handler Factory for Additional Properties Sheet
 */
var DesignStudioProperty = function(opts){
	try{
		var propSheet = opts.propSheet;		// If we are on the component side, this will be null.
		var propertyInstances = {};
		if(propSheet != undefined) propertyInstances = propSheet._properties;
		/*
		 * Property Sheet Component Factories - Only used on APS side
		 */
		var dsGeoCache = function(componentOptions) {
			var that = this;
			return new org.scn.community.aps.GeoCache({
				tooltip: this.tooltip,
				text : "Geocoder Cache",
				showCollapseIcon : false,
				//width: '100%',
				valueChange : function(oControlEvent){
					var v = String(this.getValue());
					propSheet[that.propertyName](v);
					try{
						propSheet.firePropertiesChanged([that.propertyName]);
					}catch(e){
						alert(e);
					}
					if(propertyInstances[that.propertyName].afterSet) propertyInstances[that.propertyName].afterSet();
				}
			});
		};
		var dsTileJSON = function(componentOptions) {
			var that = this;
			return new org.scn.community.aps.TileJSON({
				tooltip: this.tooltip,
				text : "Tile Provider",
				showCollapseIcon : false,
				width: '100%',
				valueChange : function(oControlEvent){
					var v = String(this.getValue());
					propSheet[that.propertyName](v);
					try{
						propSheet.firePropertiesChanged([that.propertyName]);
					}catch(e){
						alert(e);
					}
					if(propertyInstances[that.propertyName].afterSet) propertyInstances[that.propertyName].afterSet();
				}
			});
		};
		var dsGeoLookup = function(componentOptions) {
			var that = this;
			return new org.scn.community.aps.GeoLookup({
				tooltip: this.tooltip,
				valueChange : function(oControlEvent){
					var v = String(this.getValue());
					propSheet[that.propertyName](v);
					try{
						propSheet.firePropertiesChanged([that.propertyName]);
					}catch(e){
						alert(e);
					}
					
					if(propertyInstances[that.propertyName].afterSet) propertyInstances[that.propertyName].afterSet();
				}
			});
		};
		var dsGeoLookupLocal = function(componentOptions) {
			var that = this;
			return new org.scn.community.aps.GeoLookupLocal({
				tooltip: this.tooltip,
				//height : "300px",
				text : "Map Position",
				showCollapseIcon : false,
				valueChange : function(oControlEvent){
					var v = String(this.getValue());
					propSheet[that.propertyName](v);
					try{
						propSheet.firePropertiesChanged([that.propertyName]);
					}catch(e){
						alert(e);
					}
					
					if(propertyInstances[that.propertyName].afterSet) propertyInstances[that.propertyName].afterSet();
				}
			});
		};
		var dsGeoLayers = function(componentOptions) {
			var that = this;
			return new org.scn.community.aps.GeoLayers({
				tooltip: this.tooltip,
				//width: '100%',
				valueChange : function(oControlEvent){
					var v = String(this.getValue());
					propSheet[that.propertyName](v);
					propSheet.firePropertiesChanged([that.propertyName]);
					//if(propertyInstances[that.propertyName].afterSet) propertyInstances[that.propertyName].afterSet(); BAD
					if(propSheet._properties[that.propertyName].afterSet) propSheet._properties[that.propertyName].afterSet();
				}
			});
		};
		var dsGeoHierarchy = function(componentOptions) {
			var that = this;
			return new org.scn.community.aps.GeoHierarchy({
				tooltip: this.tooltip,
				propSheet : propSheet,
				//width: '100%',
				valueChange : function(oControlEvent){
					var v = String(this.getValue());
					propSheet[that.propertyName](v);
					propSheet.firePropertiesChanged([that.propertyName]);
					//if(propertyInstances[that.propertyName].afterSet) propertyInstances[that.propertyName].afterSet(); BAD
					if(propSheet._properties[that.propertyName].afterSet) propSheet._properties[that.propertyName].afterSet();
				}
			});
		};
		// Standard Button
		var dsButton = function(componentOptions){
			var that = this;
			return new sap.ui.commons.Button({
				text : this.label || this.propertyName,
				tooltip : this.tooltip,
				press : function(){
					if(componentOptions && componentOptions.press) componentOptions.press();
					if(propertyInstances[that.propertyName].afterSet) propertyInstances[that.propertyName].afterSet();
				}
			});
		};
		// Standard Text Input Factory
		var dsTextInput = function(componentOptions){
			var that = this;
			return new sap.ui.commons.TextField({
			tooltip : this.tooltip,
			value : that.value,
			change : function(){
				if(this.getValue()!=propSheet[that.propertyName]()){
					propSheet[that.propertyName](this.getValue());
					propSheet.firePropertiesChanged([that.propertyName]);
					if(propertyInstances[that.propertyName].afterSet) propertyInstances[that.propertyName].afterSet();
				}
			}
		});};
		// Standard Text Box Factory
		var dsTextBox = function(componentOptions){
			var that = this;
			return new sap.ui.commons.TextArea({
			tooltip : this.tooltip,
			design : sap.ui.core.Design.Monospace,
			width : "100%",
			value : that.value,
			rows : 5,
			wrapping : sap.ui.core.Wrapping.Off,
			change : function(){
				if(this.getValue()!=propSheet[that.propertyName]()){
					propSheet[that.propertyName](this.getValue());
					propSheet.firePropertiesChanged([that.propertyName]);
					if(propSheet._properties[that.propertyName].afterSet) propSheet._properties[that.propertyName].afterSet();
				}
			}
		});};
		// Standard Checkbox Factory
		var dsCheckBox = function(componentOptions){
			var that = this;
			return new sap.ui.commons.CheckBox({
				//text : this.label,
				tooltip : this.tooltip,
				change : function(){
					if(this.getChecked()!=propSheet[that.propertyName]()){
						propSheet[that.propertyName](this.getChecked());
						propSheet.firePropertiesChanged([that.propertyName]);
						// Be sure to use constructed object, not the configuration.
						if(propertyInstances[that.propertyName].afterSet) propertyInstances[that.propertyName].afterSet();
					}
				}
			});
		};
		// Custom ColorPicker Factory
		var dsColorPicker = function(componentOptions){
			var that = this;
			return new org.scn.community.aps.ColorPicker({
				tooltip: this.tooltip,
				propSheet : propSheet,
				showAlpha : componentOptions.showAlpha || false,
				showRatio : componentOptions.showRatio || false,
				colorChange : function(oControlEvent){
					propSheet[that.propertyName](this.getBackgroundColor());
					propSheet.firePropertiesChanged([that.propertyName]);
					if(propertyInstances && propertyInstances[that.propertyName].afterSet) propertyInstances[that.propertyName].afterSet();
				},
				alphaChange : function(oControlEvent){
					if(that.alphaProperty) {
						propSheet[that.alphaProperty](Math.ceil(this.getAlpha() * 100),0);
						propSheet.firePropertiesChanged([that.alphaProperty]);
					}else{
						alert("Warning: Alpha changed but no alpha property name set!");
					}
				},
				ratioChange : function(oControlEvent){
					if(that.ratioProperty) {
						propSheet[that.ratioProperty](this.getRatio());
						propSheet.firePropertiesChanged([that.ratioProperty]);
					}else{
						alert("Warning: Ratio changed but no alpha property name set!");
					}
				}
			});
		};	
		// Custom Color Builder Factory
		var dsColorBuilder = function(componentOptions){
			var that = this;
			try{
			var cb = new org.scn.community.aps.ColorBuilder({
				width : "100%",
				title : new sap.ui.commons.Title({
					text: this.label
				}),
				tooltip: this.tooltip,
				showCollapseIcon : false,
				propSheet : propSheet,
				showAlpha : componentOptions.showAlpha || false,
				showRatios : componentOptions.showRatios || false,
				colorChange : function(oControlEvent){
					propSheet[that.propertyName](this.getColors());
					propSheet.firePropertiesChanged([that.propertyName]);
					if(propertyInstances && propertyInstances[that.propertyName].afterSet) propertyInstances[that.propertyName].afterSet();
				},
				alphaChange : function(oControlEvent){
					if(that.alphaProperty){
						propSheet[that.alphaProperty](this.getAlphas());
						propSheet.firePropertiesChanged([that.alphaProperty]);
					}
				},
				ratioChange : function(oControlEvent){
					if(that.ratioProperty){
						propSheet[that.ratioProperty](this.getRatios());
						propSheet.firePropertiesChanged([that.ratioProperty]);
					}
				}
			});
			}catch(e){

			}
			return cb;
		};	
		
		// Standard ComboBox Factory
		var dsComboBox = function(componentOptions){
			var that = this;
			var cbo = new sap.ui.commons.ComboBox({
				tooltip : this.tooltip,
				displaySecondaryValues : true,
				change : function(){
					propSheet[that.propertyName](this.getSelectedKey());
					propSheet.firePropertiesChanged([that.propertyName]);			
					if(propertyInstances[that.propertyName].afterSet) propertyInstances[that.propertyName].afterSet();
				}
			});
			if(componentOptions && componentOptions.items){
				var items = componentOptions.items;
				for(var i=0;i<items.length;i++){
					cbo.addItem(new sap.ui.core.ListItem({
						key : items[i].key,
						text: items[i].text,
						additionalText : items[i].text 
					}));
				}
			}
			return cbo;
		};
		
		var dsSlider = function(componentOptions) {
			var that = this;
			return new org.scn.community.aps.Spinner({
				tooltip: this.tooltip,
				min : componentOptions.min || 0,
				max : componentOptions.max || 100,
				valueChange : function(oControlEvent){
					propSheet[that.propertyName](this.getValue());
					propSheet.firePropertiesChanged([that.propertyName]);
					if(propertyInstances[that.propertyName].afterSet) propertyInstances[that.propertyName].afterSet();
				}
			});
		};	
		
		
		switch(opts.component){
			case "apsTextInput":
				opts.factory = dsTextInput;
				break;
			case "apsTextBox":
				opts.factory = dsTextBox;
				break;
			case "apsButton":
				opts.factory = dsButton;
				break;
			case "apsSwitch":
				opts.factory = dsCheckBox;
				break;
			case "apsCheckBox":
				opts.factory = dsCheckBox;
				break;
			case "apsColorPicker":
				opts.factory = dsColorPicker;
				break;
			case "apsColorBuilder":
				opts.factory = dsColorBuilder;
				break;
			case "apsComboBox":
				opts.factory = dsComboBox;
				break;
			case "apsSlider":
				opts.factory = dsSlider;
				break;
			case "apsGeoCache":
				opts.factory = dsGeoCache;
				break;
			case "apsGeoHierarchy":
				opts.factory = dsGeoHierarchy;
				break;
			case "apsTileJSON":
				opts.factory = dsTileJSON;
				break;
			case "apsGeoLookup":
				opts.factory = dsGeoLookup;
				break;
			case "apsGeoLookupLocal":
				opts.factory = dsGeoLookupLocal;
				break;
			case "apsGeoLayers":
				opts.factory = dsGeoLayers;
				break;
			default:
				opts.factory = null;
				break;
		}
		
		var returnObj = {
			componentType : opts.component,
			propertyName : opts.propertyName,
			serialize : opts.serialize,
			serializer : opts.serializer,
			reqs : opts.reqs || null,
			type : opts.type,
			value : opts.value || null,
			tooltip : opts.tooltip || "",
			dsOnly : opts.dsOnly || false,
			afterSet : opts.afterSet || function(v){ },
			afterSetAPS : opts.afterSetAPS,
			afterChange : opts.afterChange || function(v){ },
			label : opts.label || opts.propertyName		
		};
		if(propSheet){		// Property Sheet-specific
			try{
				returnObj.component = (opts.factory)?opts.factory(opts.componentOptions||{}):null;	
			}catch(e){

			}
			
			returnObj.updateComponent = function(v){
				if(opts.component=="apsInvisible") {
					if(opts.afterSetAPS) opts.afterSetAPS(v);
				}
				if(opts.component=="apsTextInput") this.component.setValue(v);
				if(opts.component=="apsTextBox") this.component.setValue(v);
				if(opts.component=="apsSwitch") this.component.setSelected(v);
				if(opts.component=="apsCheckBox") this.component.setChecked(v);
				if(opts.component=="apsColorPicker") this.component.setBackgroundColor(v);
				if(opts.component=="apsColorBuilder") this.component.setColors(v);
				if(opts.component=="apsComboBox") this.component.setSelectedKey(v);
				if(opts.component=="apsSlider") this.component.setValue(parseFloat(v));
				if(opts.component=="apsGeoCache") this.component.setValue(v);
				if(opts.component=="apsTileJSON") this.component.setValue(v);
				if(opts.component=="apsGeoLookup") this.component.setValue(v);
				if(opts.component=="apsGeoLookupLocal") this.component.setValue(v);
				if(opts.component=="apsGeoLayers") this.component.setValue(v);
				if(opts.component=="apsGeoHierarchy") this.component.setValue(v);
				if(opts.component=="apsColorRanges") this.component.setColorRanges(v);
				if(opts.component=="apsButton") this.component.setTooltip(v);
			};
		}
		return returnObj;
	}catch(e){
		
	}
};