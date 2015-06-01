
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
(function() {
/** code for recognition of script path */
var myScript = $("script:last")[0].src;
var ownComponentName = "org.scn.community.databound.tagCloud";
var _readScriptPath = function () {
	var scriptInfo = org_scn_community_basics.readOwnScriptAccess(myScript, ownComponentName);
	return scriptInfo.myScriptPath;
};
/** end of path recognition */

sap.designstudio.sdk.Component.subclass("org.scn.community.databound.tagCloud", function() {

	var that = this;
	"use strict";
	
	this._poller = null;
	this._pollInterval = 250;
	this._previousWidth = -1;
	this._previousHeight = -1;
	
	var svg,
		tagIndex,
		tagMember,
		tags,
		container,
		wordScale = d3.scale.log().range([3, 30]),
		wordColor = "gray";

	/* Autogenerate setter/getter and their default values for the following properties. */
	this.autoProperties = {
			savedData: null,
			tagFont: "Impact",
			tagRotation: "None",
			dimTag: null,
			measureSize: null,
			measureColor: null,
			selectedNode : ""
		};
	
	/* Create the aforementioned getter/setter and attach to 'this'. */
	for(var property in this.autoProperties){
		this[property] = function(property){
			return function(value){
				try{
					if(value===undefined){
						return this.autoProperties[property];
					}else{
						this.autoProperties[property] = value;
						return this;
					}
				}catch(e){
					alert(e);
				}
			};
		}(property);
	}

	
	this.detectSize = function(that){
		var currentWidth = that.$().innerWidth();
		var currentHeight = that.$().innerHeight();
		if(currentWidth != that._previousWidth || currentHeight != that._previousHeight){
			// If width or height has changed since the last calculation, redraw.
			/* Debug alert:
			alert("Resize detected.\n\nOld:" + that._previousWidth + " x " + that._previousHeight + 
					"\n\nNew:" + currentWidth + " x " + currentHeight);
			*/
			that._previousHeight = currentHeight;
			that._previousWidth = currentWidth;	
			this.drawCloud();
		}else{
			// Sizes are the same.  Don't redraw, but poll again after an interval.
			that._poller = window.setTimeout(function(){that.detectSize(that)},that._pollInterval);	
		}
	};
	
    this.init = function() {
    	container = this.$();
        svg = initSvg(container);
        this._ownScript = _readScriptPath();
        };

    this.afterUpdate = function() {
        	
    	if (that.dimTag() && that.measureSize()) {
            //Find the index by key value of the tag dimension specified at design time
            var word_data = that.savedData();
            tag1Index = dimensionIndexByKey(that.dimTag(), word_data);
            tagMember = word_data.dimensions[tag1Index].members;
            tags = [];
            var wordFont = fontLookup(that.tagFont());
            tagMember.forEach(function(member, i) {
            	if (that.measureColor().data) {wordColor = that.measureColor().data[i]}
            	var tag = {
            			"key": member.key,
            			"text": member.text,
            			"frequency": that.measureSize().data[i],
            			"color": getColor(wordColor),
            			"tagFont" : wordFont,
            			"tagRotation" : that.tagRotation()
            	};
            	tags.push(tag);
            });
          
          this.drawCloud();
          
    		}
    	};
    
    this.drawCloud = function() {
    	
    	var width = that.$().innerWidth();
		var height = that.$().innerHeight(); 
		
		d3.layout.cloud().size([width, height])
	  	  .timeInterval(10)
	      .words(tags)
	      .padding(2)
	      //.rotate(function(d) { return d.text.length > 5 ? 0 : 90; })
	      .rotate(function(d) {
	    	  if (d.tagRotation === "90 degrees") { return d.text.length > 5 ? 0 : 90}
	    	  else if (d.tagRotation === "Random") { return d.text.length > 5 ? 0 : ~~(Math.random() * 5) * 30 - 60}
	    	  else { return 0 }
	    	  ;})
	      .text(function(d) { return d.key; })
	      .font(function(d) { return d.tagFont; })
	      .fontSize(function(d) { return wordScale(+d.frequency); })
	      .on("end", draw)
	      .start();
	}
   
    
    function draw(words) {
    	
        words.forEach(function(d) {
        	d.id = d.key; // set the ID dynamically ... otherwise there are errors getting the right element
        });
        
        var svgWidth = that.$().innerWidth();
        var svgHeight = that.$().innerHeight();
        
    	var tagNodes = svg.attr("width", svgWidth)
    	.attr("height", svgHeight);
    		
    	var tagGroup = tagNodes.select("g");
        if(tagGroup.empty()) tagGroup = svg.append("g");
        //tagGroup.selectAll("text").remove();
        
    	var tagEnter = tagGroup.attr("transform", "translate(" + (svgWidth/2) + "," + (svgHeight/2) + ")")
    	.selectAll("text")
    	.data(words)
    	.enter().append("text")
    	.attr("class", "wordcloud")
        .style("font-size", function(d) { return wordScale(d.frequency) + "px"; })
        .style("font-family", function(d) { return d.tagFont; })
        .style("fill", function(d, i) { return d.color; })
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
            return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; })
        .on("click", function(d) { click(d); });
    	
    	this._poller = window.setTimeout(function(){that.detectSize(that)},that._pollInterval);
    	
    }
        	
    //Start helper functions
    
    function initSvg($container) {
    	
    	$container.empty();
    	
    	var svg = getSvg($container);
    	
        function getSvg($container) {
        	return d3.select($container[0]).append("svg")
        	}
        return svg;
    }
        
    function dimensionIndexByKey(key, data){
		if(key=="NONE") return -1;
		if(!data) return null;
		for(var i=0;i<data.dimensions.length;i++){
			if(data.dimensions[i].key==key) return i;
		}
		return null;
	};
	
	function getColor(colorValue){
		
		if (colorValue !== "") {
		var colorScale = d3.scale.linear()
	    	.domain([-2, 0, 2])
	    	.range(["red", "#5D6770", "green"]);
	
		var color = colorScale(colorValue);
		return color;
		}
		return "gray";
	};
	
	function fontLookup(fontName){
		if (fontName) {
		if (fontName === "Lato Bold") return "latobold";
		return fontName;
		}
	};
    
    // Set clicked tag and fire properties change
    function click(d) {
  	// set text of selected node 
		that.selectedNode(d.key);
	// fire event so this change is also available via BIAL
		that.firePropertiesChangedAndEvent(["selectedNode"], "onclick");
      
      	}
});
})();
