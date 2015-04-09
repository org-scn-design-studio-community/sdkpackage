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
 * Geocoder Utilities Base Class
 */
function org_scn_geocode_base(options){
	this.mode = "component";
	this.resourcePrefix = "";
	this.geoCache = {};
	// Compare two 1-D arrays
	this.arraysIdentical = function(a, b) {
	    var i = a.length;
	    if (i != b.length) return false;
	    while (i--) {
	        if (a[i] !== b[i]) return false;
	    }
	    return true;
	};
	// Convert Dimension Index to Dimension Key
	this.indexDimension = function(idx, metadata){
		if(idx==-1) return null;	// user to be -1
		if(!metadata) return null;
		if(metadata.dimensions.length>=idx) return metadata.dimensions[idx].key;
		return null;
	};
	// Convert Dimension Key to Dimension Index
	this.dimensionIndex = function(key, metadata){
		if(key=="NONE") return null;	// used to be -1
		if(!metadata) return null;
		for(var i=0;i<metadata.dimensions.length;i++){
			if(metadata.dimensions[i].key==key) return i;
		}
		return null;
	};
	// Convert a given Dimension's Member Key to Dimension Index
	this.memberIndex = function(key, dimId, metadata){
		if(!metadata) return null;
		var dim = metadata.dimensions[dimId];
		for(var i=0;i<dim.members.length;i++){
			if(dim.members[i].key==key) return i;
		}
		return null;
	};
	this.issueCallback = function(options,payload){
		if(options.callback) {
			if(!options.scope) options.scope = this;
			options.callback.apply(options.scope,[payload,options.conf]);
		}
	}
}
/**
 * Override
 * @param options
 */
org_scn_geocode_base.prototype.getLatLngs = function(options){
	// Override
	this.issueCallback(options,{
		solved : [],
		unsolved :[]
	})
};;



/**
 * Local Geocoder Utility
 */
function org_scn_geocode_local(options){
	org_scn_geocode_base.call(this,options);
}
org_scn_geocode_local.prototype = new org_scn_geocode_base();
org_scn_geocode_local.prototype.loadRegionLookup = function(){
	try{
    	if(!this.regionLookup){
			var geoDB = $.ajax({
	    		async : false,
	    		url : this.resourcePrefix + "res/geo/regionlookup.json"
	    	});
	    	this.regionLookup = jQuery.parseJSON(geoDB.responseText);
		}
	}catch(e){
		alert("Error during region reverse lookup:\n\n" + e);
	}
}

org_scn_geocode_local.prototype.loadCityLookup = function(){
	try{
		if(!this.cityLookup){
			var geoDB = $.ajax({
	    		async : false,
	    		url : this.resourcePrefix + "res/geo/citylookup.json"
	    	});
	    	this.cityLookup = jQuery.parseJSON(geoDB.responseText);
		}
	}catch(e){
		alert("Error during city reverse lookup:\n\n" + e);
	}
};

org_scn_geocode_local.prototype.getLatLngs = function(options){
	var solved = [];
	var unsolved = [];
	var metadata = options.metadata;
	var results = options.results;
	var callback = options.callback;
	if(!metadata || !results){
		// callback(results, conf)
		//if(!callback) throw "No callback specified";
		/*
		callback({
			solved : [],
			unresolved : []
		},options.conf);
		*/
	}
	var distincts = [];
	var tuples = results.tuples;
	
	// Establish Geodimensional indices
	var geoIndexAddress = this.dimensionIndex(options.geoDimAddress, metadata);
	var geoIndexCity = this.dimensionIndex(options.geoDimCity, metadata);
	var geoIndexZip = this.dimensionIndex(options.geoDimZip, metadata);
	var geoIndexRegion = this.dimensionIndex(options.geoDimRegion, metadata);
	var geoIndexCountry = this.dimensionIndex(options.geoDimCountry, metadata);	
	if(!this.locationsJSON){
    	var geoDB = $.ajax({
    		async : false,
    		url : this.resourcePrefix + "res/geo/world.json"
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
	
	// Shallow Copy 2D array
	for(var row=0;row<tuples.length;row++){
		distincts.push(tuples[row].slice());
	}
	// Let's loop through distincts and retrieve lat/lng
	for(var i=0;i<distincts.length;i++){
		var value = undefined, address = undefined, city=undefined, region=undefined, zip=undefined, country=undefined, title=undefined, color=undefined;
		/*
		 * Hard-coded Country/Region Data entry handling here.
		 */
		if(!geoIndexCountry && (options.manualCountry && options.manualCountry != "guess")) country = options.manualCountry;
		if(!geoIndexRegion && (options.manualRegion && options.manualRegion != "guess")) region = options.manualRegion;
		
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
		if(zip){	// Strip long ZIPs.  Not supported.
			var za = zip.split("-");
			zip=za[0];
		}
		var resolved = true;
		var unsolvedReason = "";
		// Local Lat/Lng
		var latlng = [];
		/*
		 * BEGIN of incomplete geodata handling.
		 */
		var lookupReason = "";
		if(city && !country && !region){
			lookupReason = "Need to try a desperate reverse lookup.  No country and no region supplied.";
			this.loadCityLookup();
			var c = this.cityLookup[city];
			if(c){
				if(c.length>1) resolved = false; // Only flag as resolved if there was one hit.
				unsolvedReason = "Multiple cities by this name.  Try supplying a Country and Region";
				region = c[0].r.toLowerCase();
				country = c[0].cy.toLowerCase();
			}
			
		}
		if(city && country && !region){
			lookupReason = "Need to try a reverse lookup.  But no region was supplied.";
			this.loadCityLookup();
			var c = this.cityLookup[city];
			if(c){
				// Country was supplied, let's see if it was found in reverse lookup.
				for(var j=0;j<c.length;j++){
					if(c[j].cy.toLowerCase()==country) {
						region = c[j].r.toLowerCase();
					}
				}
			}
			
		}
		if(city && !country && region){
			lookupReason = "Need to try a reverse lookup.  But no country was supplied.";
			this.loadCityLookup();
			var c = this.cityLookup[city];
			if(c) {
				// Region was supplied, let's see if it was found in reverse lookup.
				var regionfound = false;
				for(var j=0;j<c.length;j++){
					if(c[j].r.toLowerCase()==region) {
						country = c[j].cy.toLowerCase();
						regionfound = true;
					}
				}
				if(!regionfound){
					unsolvedReason = city + " in " + region + " not in DB.";
					resolved = false;
				}
			}else{
				// No city found by given name.  Fall back to region but mark as unsolved.
				unsolvedReason = "City not found.";
				resolved = false;
			}			
		}
		if(region && !country && !city){
			lookupReason = "Need to try a reverse region lookup.  No country and no city was supplied.";
			this.loadRegionLookup();
			var c = this.regionLookup[region];
			if(c && c.length>0) {
				if(c.length>1) resolved = false;	// Only flag as resolved if there was one hit.
				unsolvedReason = "Multiple countries possible for this region.  Please supply a country.";
				country = c[0].toLowerCase();
			}
		}
		//if(lookupReason)alert(lookupReason);
		/*
		 * END OF incomplete data handling.
		 */
		var locationKey = "";
		var sep = "";
		if(country) {
			locationKey+=sep + country;
			sep = "_";
		}
		if(region) {
			locationKey+=sep + region;
			sep = "_";
		}
		if(city) {
			locationKey+=sep + city;
			sep = "_";
		}
		if(zip) {
			locationKey+=sep + zip;
			sep = "_";
		}
		var geoCode = {};
		if(this.geoCache[locationKey]){
			// Check cache first
			geoCode = this.geoCache[locationKey];
		}else{
			// Walk the lat/lng hierarchy if we were able to figure out a country.
			if(country && this.locationsJSON[country]){
				if(!this.locationsJSON[country].loaded){	// On Demand Loading
					var countryDB = $.ajax({
			    		async : false,
			    		url : this.resourcePrefix + "res/geo/world/" + country + ".json"
			    	});
			    	var countryJSON = jQuery.parseJSON(countryDB.responseText);
			    	for(var rgn in countryJSON){
			    		this.locationsJSON[country].r[rgn] = {
			    			loaded : false,
			    			l : countryJSON[rgn],
			    			c : {}
			    		};
			    	}
			    	this.locationsJSON[country].loaded = true;
				}
				latlng = this.locationsJSON[country].l;
				if(region){	// Region Specified?
					if(this.locationsJSON[country].r[region]){
						if(!this.locationsJSON[country].r[region].loaded){	// On Demand Loading
							try{
								// Try to load once, and flag as loaded.
								this.locationsJSON[country].r[region].loaded = true;
								var regionDB = $.ajax({
						    		async : false,
						    		url : this.resourcePrefix + "res/geo/world/" + country + "/" + region +".json"
						    	});
								this.locationsJSON[country].r[region] = jQuery.parseJSON(regionDB.responseText);
							}catch(e){
								this.locationsJSON[country].r[region] = {};
							}
							
							
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
								}else{
									if (latlng.length == 0){
										// Sometimes lat/lng not populated at city level.  Steal from last ZIP Code entry, if any.
										var zips = null;
										zips = this.locationsJSON[country].r[region].c[city].z;
										if(zips){
											for(var z in zips) latlng = zips[z].slice();	// Take the last one, whatever.
										}
									}
								}
							}else{
								resolved = false;
								unsolvedReason = "City not found for:." +country+region+city;
							}
						}
					}else{
						resolved = false;
						unsolvedReason = "Region not found.";
					}
				} 
			}
			geoCode = {
				tuple : tuple.slice(),
				locationKey : locationKey,
				city : city,
				region : region,
				country : country,
				zip : zip,
				address : address,
				latlng : latlng,
				solved : resolved,
				reason : unsolvedReason
			};
			this.geoCache[locationKey] = geoCode;
		}
		if(geoCode.solved) {
			solved.push(geoCode);
		}else{
			unsolved.push(geoCode);
		}
	}
	// This is a sync callback so fire back right away
	this.issueCallback(options,{
		distincts : distincts,
		solved : solved,
		unsolved : unsolved
	},options.conf);
};;



/**
 * Mapbox Geocoder Adapter
 */
function org_scn_geocode_mapbox(options){
	org_scn_geocode_base.call(this,options);
}
org_scn_geocode_mapbox.prototype = new org_scn_geocode_base();
org_scn_geocode_mapbox.prototype.batchSize = 20;
org_scn_geocode_mapbox.prototype.apiKey = "";
org_scn_geocode_mapbox.prototype.getLatLngs = function(options){
	var solved = [];
	var unsolved = [];
	var metadata = options.metadata;
	var results = options.results;
	var callback = options.callback;
	if(!metadata || !results){
		// callback(results, conf)
		//if(!callback) throw "No callback specified";
		/*
		callback({
			solved : [],
			unresolved : []
		},options.conf);
		*/
	}
	var distincts = [];
	var tuples = results.tuples;
	var lookupqueue = [];
	
	// Establish Geodimensional indices
	var geoIndexAddress = this.dimensionIndex(options.geoDimAddress, metadata);
	var geoIndexCity = this.dimensionIndex(options.geoDimCity, metadata);
	var geoIndexZip = this.dimensionIndex(options.geoDimZip, metadata);
	var geoIndexRegion = this.dimensionIndex(options.geoDimRegion, metadata);
	var geoIndexCountry = this.dimensionIndex(options.geoDimCountry, metadata);	
	
	// Mapbox logic
	for(var i=0;i<tuples.length;i++){
		var value = undefined, address = undefined, city=undefined, region=undefined, zip=undefined, country=undefined, title=undefined, color=undefined;
		var tuple = tuples[i];
		var addr = "";
		
		for(var j=0;j<tuple.length;j++){
			var tupleDim = metadata.dimensions[j];
			if(tuple[j]!=-1) value = tupleDim.members[tuple[j]].key;
			if(j==geoIndexAddress) address = value;
			if(j==geoIndexCity) city = value;
			if(j==geoIndexZip) zip = value;
			if(j==geoIndexRegion) region = value;
			if(j==geoIndexCountry) country = value;
		}				
		var locbuilder = [];
		if(address) locbuilder.push(address);
		if(city) locbuilder.push(city);
		if(region) locbuilder.push(region);
		if(zip) locbuilder.push(zip);
		if(country) locbuilder.push(country);
		var locationstring = locbuilder.join(" ");
		if(!this.geoCache[locationstring]){
			this.geoCache[locationstring] = {
				location : locationstring,
				locationKey : locationstring,
				loaded : false,
				tuples : [],
				city : city,
				region : region,
				country : country,
				zip : zip,
				address : address,
				geoCoderResults : {}
			}
			lookupqueue.push(this.geoCache[locationstring]);
		}
		var locationentry = this.geoCache[locationstring];
		locationentry.tuples.push(tuple.slice());
		locationentry.tuple = tuple.slice();			// b/w compat
		
	}
	if(this.ajaxLookup) this.ajaxLookup.abort();
	if(!options.scope) options.scope = this;
	this.lookupLocations(lookupqueue,[],options);
},
org_scn_geocode_mapbox.prototype.lookupLocations = function(queue,lookups,getLatLngOptions){
	if(queue.length==0){
		for(var i=0;i<lookups.length;i++){
			if(lookups[i].geoCoderResults.features && lookups[i].geoCoderResults.features.length > 0){
				lookups[i].latlng = [	// Mapbox Geocoder flips these.  No idea why.
				  lookups[i].geoCoderResults.features[0].center[1],
				  lookups[i].geoCoderResults.features[0].center[0]
				];
			}
			lookups[i].solved = true;
		}
		try{
			this.issueCallback(getLatLngOptions,{
				distincts : [],
				solved : lookups,
				unsolved : []
			});
		}catch(e){
			alert("Error in Mapbox lookup callback:\n\n" + e);
		}
		return;
	}
	// Key from https://www.mapbox.com/developers/api/geocoding/
	var access_token = "pk.eyJ1IjoibWFwYm94IiwiYSI6IlhHVkZmaW8ifQ.hAMX5hSW-QnTeRCMAy9A8Q";
	if(this.apiKey) access_token = this.apiKey;
	
	var size = this.batchSize;
	if(queue.length < size) size = queue.length;
	var batch = queue.splice(0,size);
	var chunk = [];
	for(var i=0;i<batch.length;i++){
		chunk.push(batch[i].location);
		batch[i].loaded = true;
	}
	var url = "http://api.tiles.mapbox.com/v4/geocode/mapbox.places-permanent/"+chunk.join(";")+".json?access_token=" + access_token;
	//alert(batch.length + " entries would have been looked up to GIS Provider.\n\n" + url);
	this.ajaxLookup = $.ajax({
		url : url,
		complete : function(t,opts){
			return function(xhr, textStatus){
				if(textStatus=="success"){
					var jsonstring = xhr.responseText;
					try{
						var geoCoderResults = jQuery.parseJSON(jsonstring);
						for(var i=0;i<geoCoderResults.length;i++){
							opts.batch[i].geoCoderResults = geoCoderResults[i];
							opts.lookups.push(opts.batch[i]);
						}
						t.lookupLocations(opts.queue,opts.lookups,getLatLngOptions);
					}catch(e){
						alert("Error occured attempting to parse Mapbox Results:\n\n" + e);
					}
				}else{
					alert ("Failure to retrieve geocoder entries.\n\n" + url);
				}
			};
		}(this,{
			batch : batch,
			queue : queue,
			lookups : lookups
		}),
		error : function (xhr, textStatus, errorThrown){
			alert(textStatus+"\n\n"+errorThrown+"\n\n"+url);
		}
	});
};
;



/**
 * ESRI ArcGIS Geocoder Adapter
 */
function org_scn_geocode_esri(options){
	org_scn_geocode_base.call(this,options);
}
org_scn_geocode_esri.prototype = new org_scn_geocode_base();
org_scn_geocode_esri.prototype.batchSize = 20;
org_scn_geocode_esri.prototype.apiKey = "";
org_scn_geocode_esri.prototype.getLatLngs = function(options){
	alert("Not implemented yet.");
};
