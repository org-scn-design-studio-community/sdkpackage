/**
 * Map Visualization Class for use in databound D3 (V3) Visualizations.
 */
define(["./VizBase",
        "../../../org.scn.community.basics/os/d3v3/topojson.v1",
        "../../os/d3v3/d3.geo.projection",
        "../../os/d3v3/d3-tip"
        ], function(VizBase,topojson,d3geo,d3tip) {
	VizMap.prototype = VizBase;
	VizMap.constructor = VizMap;
	function VizMap(options){
		var that = this;
		var properties = {
			mapData : { 
				value : "",
				opts : {
					apsControl : "mapdownload",
					desc : "Map Data",
					cat : "Mapping-Map Data"
				},
				onChange : function(value){
					var j = {};
					try{
						if(value!=""){
							j = jQuery.parseJSON(value);
						}
						this._mapJSON = this.processMapData(j);
					}catch(e){
						this._mapJSON = {};
						//throw "Error with Map Data.\n\n" + e;
					}
				}
			},
			defaultFillColor :  { 
				value : "#E5EADE",
				opts : {
					desc : "Default Land Color",
					cat : "Cosmetics-Colors",
					apsControl : "color"	
				}
			},
			backgroundColor :  { 
				value : "",
				opts : {
					desc : "Background Color",
					cat : "Cosmetics-Colors",
					apsControl : "color"	
				}
			},
			globeColor :  { 
				value : "",
				opts : {
					desc : "Globe Color",
					cat : "Cosmetics-Colors",
					apsControl : "color"	
				}
			},
			graticuleColor :  { 
				value : "",
				opts : {
					desc : "Graticule Color",
					cat : "Cosmetics-Colors",
					apsControl : "color"	
				}
			},
			graticuleThickness :  { 
				value : .5,
				opts : {
					desc : "Graticule Thickness (px)",
					cat : "Cosmetics-Plot",
					apsControl : "spinner"	
				}
			},
			labelProperty : { 
				value : "NAME_1",
				opts : {
					desc : "Label Attribute",
					cat : "Mapping",
					apsControl : "text"
				}
			},
			globeOn : { 
				value : false,
				opts : {
					desc : "Show Globe",
					cat : "Cosmetics",
					apsControl : "checkbox"	
				}
			},
			graticuleOn : { 
				value : true,
				opts : {
					desc : "Show Graticule",
					cat : "Cosmetics",
					apsControl : "checkbox"	
				}
			},
			projection : { 
				value : "Mercator",
				opts : {
					apsControl : "combobox",
					desc : "Projection Method",
					cat : "Mapping",
					options : [
						{ key : 'Mercator', text : 'Mercator'},
						{ key : 'Albers USA', text : 'Albers USA'},
						{ key : 'Orthographic', text : 'Orthographic'},
						{ key : 'Equirectangular', text : 'Equirectangular'},
						
						{ key : 'Aitoff', text : 'Aitoff'},
						{ key : 'Albers', text : 'Albers'},
						{ key : 'August', text : 'August'},
						{ key : 'Baker', text : 'Baker'},
						{ key : 'Boggs', text : 'Boggs'},
						{ key : 'Bonne', text : 'Bonne'},
						{ key : 'Bromley', text : 'Bromley'},
						{ key : 'Collignon', text : 'Collignon'},
						{ key : 'Craster Parabolic', text : 'Craster Parabolic'},
						{ key : 'Eckert I', text : 'Eckert I'},
						{ key : 'Eckert II', text : 'Eckert II'},
						{ key : 'Eckert III', text : 'Eckert III'},
						{ key : 'Eckert IV', text : 'Eckert IV'},
						{ key : 'Eckert V', text : 'Eckert V'},
						{ key : 'Eckert VI', text : 'Eckert VI'},
						{ key : 'Eisenlohr', text : 'Eisenlohr'},
						{ key : 'Equirectangular (Plate Carrée)', text : 'Equirectangular (Plate Carrée)'},
						{ key : 'Hammer', text : 'Hammer'},
						{ key : 'Hill', text : 'Hill'},
						{ key : 'Goode Homolosine', text : 'Goode Homolosine'},
						{ key : 'Kavrayskiy VII', text : 'Kavrayskiy VII'},
						{ key : 'Lambert cylindrical equal-area', text : 'Lambert cylindrical equal-area'},
						{ key : 'Lagrange', text : 'Lagrange'},
						{ key : 'Larrivée', text : 'Larrivée'},
						{ key : 'Laskowski', text : 'Laskowski'},
						{ key : 'Loximuthal', text : 'Loximuthal'},
						{ key : 'Miller', text : 'Miller'},
						{ key : 'McBryde–Thomas Flat-Polar Parabolic', text : 'McBryde–Thomas Flat-Polar Parabolic'},
						{ key : 'McBryde–Thomas Flat-Polar Quartic', text : 'McBryde–Thomas Flat-Polar Quartic'},
						{ key : 'McBryde–Thomas Flat-Polar Sinusoidal', text : 'McBryde–Thomas Flat-Polar Sinusoidal'},
						{ key : 'Mollweide', text : 'Mollweide'},
						{ key : 'Natural Earth', text : 'Natural Earth'},
						{ key : 'Nell–Hammer', text : 'Nell–Hammer'},
						{ key : 'Polyconic', text : 'Polyconic'},
						{ key : 'Robinson', text : 'Robinson'},
						{ key : 'Sinusoidal', text : 'Sinusoidal'},
						{ key : 'Sinu-Mollweide', text : 'Sinu-Mollweide'},
						{ key : 'van der Grinten', text : 'van der Grinten'},
						{ key : 'van der Grinten IV', text : 'van der Grinten IV'},
						{ key : 'Wagner IV', text : 'Wagner IV'},
						{ key : 'Wagner VI', text : 'Wagner VI'},
						{ key : 'Wagner VII', text : 'Wagner VII'},
						{ key : 'Winkel Tripel', text : 'Winkel Tripel'}
					]
				}
			},
			yaw : { 
				value : 0,
				opts : {
					desc : "Yaw (0-360)",
					cat : "Mapping",
					apsControl : "spinner"	
				}
			},
			pitch : { 
				value : 0,
				opts : {
					desc : "Pitch (0-360)",
					cat : "Mapping",
					apsControl : "spinner"	
				}
			},
			roll : { 
				value : 0,
				opts : {
					desc : "Roll (0-360)",
					cat : "Mapping",
					apsControl : "spinner"	
				}
			}
		};
		for(var prop in options) properties[prop] = options[prop]; //consider flipping
		VizBase.call(this,properties);
		this.projections = {
	    	    "Albers USA": d3.geo.albersUsa(),
	    	    "Mercator": d3.geo.mercator().scale(490 / 2 / Math.PI),
	    	    "Equirectangular": d3.geo.equirectangular(),
	    	    "Orthographic": d3.geo.orthographic(),
		    	   
	    	    "Aitoff": d3.geo.aitoff(),
	            "Albers": d3.geo.albers().scale(145).parallels([20, 50]),
	            "August": d3.geo.august().scale(60),
	            "Baker": d3.geo.baker().scale(100),
	            "Boggs": d3.geo.boggs(),
	            "Bonne": d3.geo.bonne().scale(120),
	            "Bromley": d3.geo.bromley(),
	            "Collignon": d3.geo.collignon().scale(93),
	            "Craster Parabolic": d3.geo.craster(),
	            "Eckert I": d3.geo.eckert1().scale(165),
	            "Eckert II": d3.geo.eckert2().scale(165),
	            "Eckert III": d3.geo.eckert3().scale(180),
	            "Eckert IV": d3.geo.eckert4().scale(180),
	            "Eckert V": d3.geo.eckert5().scale(170),
	            "Eckert VI": d3.geo.eckert6().scale(170),
	            "Eisenlohr": d3.geo.eisenlohr().scale(60),
	            "Hammer": d3.geo.hammer().scale(165),
	            "Hill": d3.geo.hill(),
	            "Goode Homolosine": d3.geo.homolosine(),
	            "Kavrayskiy VII": d3.geo.kavrayskiy7(),
	            "Lambert cylindrical equal-area": d3.geo.cylindricalEqualArea(),
	            "Lagrange": d3.geo.lagrange().scale(120),
	            "Larrivée": d3.geo.larrivee().scale(95),
	            "Laskowski": d3.geo.laskowski().scale(120),
	            "Loximuthal": d3.geo.loximuthal(),
	            "Miller": d3.geo.miller().scale(100),
	            "McBryde–Thomas Flat-Polar Parabolic": d3.geo.mtFlatPolarParabolic(),
	            "McBryde–Thomas Flat-Polar Quartic": d3.geo.mtFlatPolarQuartic(),
	            "McBryde–Thomas Flat-Polar Sinusoidal": d3.geo.mtFlatPolarSinusoidal(),
	            "Mollweide": d3.geo.mollweide().scale(165),
	            "Natural Earth": d3.geo.naturalEarth(),
	            "Nell–Hammer": d3.geo.nellHammer(),
	            "Polyconic": d3.geo.polyconic().scale(100),
	            "Robinson": d3.geo.robinson(),
	            "Sinusoidal": d3.geo.sinusoidal(),
	            "Sinu-Mollweide": d3.geo.sinuMollweide(),
	            "van der Grinten": d3.geo.vanDerGrinten().scale(75),
	            "van der Grinten IV": d3.geo.vanDerGrinten4().scale(120),
	            "Wagner IV": d3.geo.wagner4(),
	            "Wagner VI": d3.geo.wagner6(),
	            "Wagner VII": d3.geo.wagner7(),
	            "Winkel Tripel": d3.geo.winkel3()
		     	};
		this.d3tip = d3tip;
		this.componentInfo.title = "Topojson Map";
		this.componentInfo.description = "A Map built with D3 an TopoJSON";
		this.componentInfo.icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgVJREFUeNqcU01vEkEYfmZmF+JWsECTViyQaGs9eNCYaPTkD/DimYNnEo8eOfsT7JkDP8CDv8GLMWliNWqKTSm0gHZBY6W78+E7Q9iCPclmdjP7zvs879czrNFovAJQw2LPtqe1rlWr1YXQzWaz5iml3M+L16eQv2Nwj2HYayFX3AAYLcboBeSPjyhX1pHxzzA2KTx/XITFJgTC5zBpAUYEnPY8JRzQfu6ttBF5XZTXPHBmoBmngxkCYwzEJQ9MUDTO4QUe/CXfZZASCjdXR+iMJQrLlCHZODcOM5fBqN+CUdqeQqQ9jAYtF30z26d9B5kACHvfHAFsAmv3JwRSSse2cuMWoA2sR3jwBfnKFnyK/vT6EJf9a2jttbGxue7KshwWY7EJQSn7E0ozDKKM60GQVnhS+oB8MMbn4694u/ce+3EegjKsFMq4c/XhOQGg8Cj3Bpn0EpaDK3hnTnB36whGR9hpf8LR8DgZndIaByeHRIBzgjM5xu7hrnMIUgFOQ0n/BfR/DSCVvDB/a/unBI3u/neYGadO2L0A7JCPdeJCwNyeIdBaIV/MUle1E06vHWK1lJsDT202iOBiksmUQGkqI5KIaSy2y+M4xp8omiOYtXESUlKCExINVpuJOGhR80ht2swRzNoM05OGToUU+Fk8e/Dyvy5SokS6jdv1en3h6/xXgAEArt0tznrHscwAAAAASUVORK5CYII=";
		/**
		 * Not using yet.
		 */
		this.projectionTween = function(projection0, projection1) {
			return function(d) {
				var t = 0;
				
				var projection = d3.geo.projection(project)
					.scale(1)
					.translate([that.dimensions.plotWidth / 2, that.dimensions.plotHeight / 2]);
	
				var path = d3.geo.path().projection(projection);   				
	
				function project(λ, φ) {
					λ *= 180 / Math.PI, φ *= 180 / Math.PI;
					var p0 = projection0([λ, φ]), p1 = projection1([λ, φ]);
					return [(1 - t) * p0[0] + t * p1[0], (1 - t) * -p0[1] + t * -p1[1]];
				}					
	
				return function(_) {
					t = _;
					return path(d);
				};
			};
		};
		/**
		 * Convert any TopoJSON data into GeoJSON
		 */
		this.processMapData = function(mapData) {
		    var obj;
		    var returnObject = mapData;		// Assume GeoJSON
		    if (mapData && mapData.type && mapData.type.toLowerCase() === 'topology' && typeof topojson != 'undefined') {
		    	// Use first object found if object not defined
		        for (var o in mapData.objects) {
		          if (mapData.objects.hasOwnProperty(o)) {
		            obj = mapData.objects[o];
		            break;
		          }
		        }
		      returnObject = topojson.feature(mapData, obj);
		    }
		    return returnObject;
		};
		var parentPreReq = this.preReqCheck;
		this.preReqCheck = function(){
			// Map component is tolerant of no data.  Override method.
			//var status = parentPreReq.apply(this);
			//if(!status.success) return status;
			var status = {
				success : true
			};
			if(!this._mapJSON || !this._mapJSON.features) status = {
				success : false,
				reason : "No Map Data set.  Open Additional Properties Sheet to download a map!"
			};
			return status;
		};
		/**
		 * Init
		 */
		var parentInit = this.init;
		this.init = function(){
			parentInit.call(this);
			this.$().addClass("Map");
			this.container = d3.select("#"+this.$().attr("id"));
			this.tooltip = this.container.append("div").attr("class", "tooltip hidden");
			this.shadowPathGroup = this.shadowPlotArea.append('g')
				.attr('class', 'path-group');
			this.shadowLabelGroup = this.shadowPlotArea.append('g')
				.attr('class', 'label-group');
			// Globe Layer
			this.globePath = this.plotLayer.append('path')
				.datum({ type: 'Sphere' })
				.attr('class', 'globe');
			// Graticule Layer
			this.graticule = d3.geo.graticule();
	        this.graticulePath = this.plotLayer.append('path')
	        	.datum(this.graticule)
	        	.attr('class', 'graticule');
	        this.proj = this.projections[this.projection()] || this.projections["Mercator"];
	        this.projPath = d3.geo.path().projection(this.proj);
			this.pathGroup = this.plotLayer.append('g')
				.attr('class', 'path-group');
			this.labelGroup = this.plotLayer.append('g')
				.attr('class', 'label-group');
		}
		this.featureFill = function(d) {
			return that.defaultFillColor();
		};
		var parentUpdatePlot = this.updatePlot;
		/**
		 * Update Projection
		 */
		this.updateProjection = function(){
			try{
			// Determine Center of Map
	    	this.centroid = d3.geo.centroid(this._mapJSON);
	    	/*
	    	// Center Feature Logic - TODO.
			var centerFeature = null;
	    	for(var i=0;i<this._mapJSON.features.length;i++){
	    		var f = this._mapJSON.features[i];
	    		if(f.properties && f.properties[this.featureProperty()] && f.properties[this.featureProperty()]==this.centerFeature()){
	    			centerFeature = f;
	    		}
	    	}
	    	this.centroid = d3.geo.centroid(centerFeature);
	    	*/
	    	// Select a projection
	    	this.proj = this.projections[this.projection()] || this.projections["Mercator"];
	    	this.proj.scale(1).translate([0,0]);
			
			// Create path
	    	this.projPath.projection(this.proj);
	    	/*
	    	 * My head hurts.
	    	this.pathGroup.selectAll("path")
	    		.transition().duration(this.ms())
	    		.attrTween("d",this.projectionTween(this.proj, this.proj = this.proj = this.projections[this.projection()] || this.projections["Mercator"]));
	    	*/          	
			// Compute the projection bounds of a feature of interest
	    	var b = this.projPath.bounds(this._mapJSON);
	    	// Projection scale (NOT geometric scale on plot zoom)
	    	var s = .95 / Math.max((b[1][0] - b[0][0]) / this.dimensions.plotWidth, (b[1][1] - b[0][1]) / this.dimensions.plotHeight);
	    	// Projection translation (NOT translation on plot for zoom)
	    	var t = [
	    	    ((this.dimensions.plotWidth - s * (b[1][0] + b[0][0])) / 2), 
		    	((this.dimensions.plotHeight - s * (b[1][1] + b[0][1])) / 2)
			];
	    	this.proj.scale(s).translate(t);
	    	// Center if projection supports
	    	if(typeof this.proj.center === "function"){
	    		//if(centerFeature) 
	    		//this.proj.center(this.centroid);
	    	}
	    	// Rotate if projection supports
	    	if (typeof this.proj.rotate === "function") {
	    	    this.proj.rotate([this.yaw(),this.pitch(),this.roll()]);
	    	}
	    	// If Orthographic, clip at 90 degrees so we don't see the back of the globe.
	    	if(this.projection()=="Orthographic") this.proj.clipAngle(90);
	    	return this;
			}catch(e){
				alert("Error updating projection:\n\n"+e);
			}
		}
		/**
		 * Update Features
		 */
		this.updatePlot = function(){
			var that = this;
			try{
			parentUpdatePlot.call(this);
			// Horizontal Scale/Legend
			this.plotArea
	    		.transition().duration(this.ms())
				.attr("transform", "translate("+this.dimensions.plotLeft+","+this.dimensions.plotTop+")");
			this.clipRect
				//.transition().duration(this.ms())
				.attr("width", this.dimensions.plotWidth)
				.attr("height", this.dimensions.plotHeight);
			this.updateProjection();
			// Data
			var that = this;
			var labels = this.labelGroup.selectAll('text').data(this._mapJSON.features);
			var features = this.pathGroup.selectAll('path').data(this._mapJSON.features);
			var newFeatures = features.enter().append("path")
			.attr("class","path");
			
			var newLabels = labels.enter().append("text")
				.attr('class', function(d) { return "subunit-label " + d.properties[that.labelProperty()]; })
				.attr("pointer-events", "none")
				.attr("transform", function(d) { return "translate(" + that.projPath.centroid(d) + ")"; })
				.attr("dy", ".35em")
				.text(function(d) { return d.properties[that.labelProperty()]; });
			// Update graticule
			this.graticulePath
				.transition().duration(this.ms())
				.style("stroke",this.graticuleColor())
				.attr('opacity', function(){ if(that.graticuleOn()){
					return 1;
				}else{
					return 0;
				}})
	    		.attr('d', this.projPath);
			// Update globe
			this.globePath
				.transition().duration(this.ms())
				.style("fill",this.globeColor())
				.attr('opacity', function(){ if(that.globeOn()){
					return 1;
				}else{
					return 0;
				}})
				.attr('d', this.projPath);
			this.pathGroup.selectAll("path")
				.transition().duration(this.ms())
				.attr("class",function(d){return "path";})
				.attr("id",function(d,i){return that.$().attr("id")+"_feature_" + i;})
				.attr("d",this.projPath)
				.attr("opacity",this.plotAlpha()/100)
				.attr("fill", this.featureFill);
			labels
				.attr('class', function(d) { return "subunit-label " + d.properties[that.labelProperty()]; })
				.attr("transform", function(d) { return "translate(" + that.projPath.centroid(d) + ")"; })
				.text(function(d) { return d.properties[that.labelProperty()]; });
		
			
			/*
			this.labelGroup.selectAll("text")
				.on('mouseover', this.doTooltip);
			*/
			// Exit
			 features.exit().remove();
			 labels.exit().remove();
			 this.adjustPlotZoom();
			// Enter
			
			
			}catch(e){
				alert("Error updating plot:\n\n"+e);
			}
			
			return this;
		}
		this.adjustPlotZoom = function(){
			try{
			// Scale and translate plot
			this.plotLayer.attr("transform","translate(" + this.zoomTranslate + ") scale(" + this.zoomScale + ")");
			this.shadowPlotArea.attr("transform","translate(" + this.zoomTranslate + ") scale(" + this.zoomScale + ")");
			// Precomputation for measuring bounding boxes of features for label visibility
			// Note: Only setting attributes that influence size and position for speed purposes
			var _features = this.shadowPathGroup.selectAll('path').data(this._mapJSON.features);
			var _labels = this.shadowLabelGroup.selectAll('text').data(this._mapJSON.features);
			_features.enter()
				.append("path").attr("class","path");
			_features
				.attr("id",function(d,i){return that.$().attr("id")+"_shadowfeature_" + i;})
				.attr("d",this.projPath);
			_labels.enter().append("text")
				.attr('class', function(d) { return "subunit-label " + d.properties[that.labelProperty()]; })
				.attr("dy", ".35em")
				.attr("transform", function(d) { return "translate(" + that.projPath.centroid(d) + ")"; })
				.text(function(d) { return d.properties[that.labelProperty()]; });
			_labels
				.style("font-size", (this.chartValueSize() / this.zoomScale) + "px")
				.attr('class', function(d) { return "subunit-label " + d.properties[that.labelProperty()]; })
				.attr("id",function(d,i){return that.$().attr("id")+"_shadowlabel_" + i;})
				.attr("transform", function(d) { return "translate(" + that.projPath.centroid(d) + ")"; })
				.text(function(d) { return d.properties[that.labelProperty()]; });
			_features.exit().remove();
			_labels.exit().remove();
			// Update features
			
			this.graticulePath.style("stroke-width", this.graticuleThickness() / this.zoomScale);
			this.globePath.style("stroke-width", this.plotThickness() / this.zoomScale);
			this.pathGroup.selectAll("path").style("stroke-width", this.plotThickness() / this.zoomScale)
			this.labelGroup.selectAll("text")
				.style("font-size", (this.chartValueSize() / this.zoomScale) + "px")
				// Get from shadow copy that's already updated.
				.transition().duration(this.ms())
				.attr("transform", function(d) { return "translate(" + that.projPath.centroid(d) + ")"; })
				.attr("opacity", function(d, i){
					if(!that.showValues()) return 0;
					try{
					var mapShape = that.shadowPathGroup.select(".path#" + that.$().attr("id")+"_shadowfeature_" + i );
					var labelShape = that.shadowLabelGroup.select("#" + that.$().attr("id")+"_shadowlabel_" + i );
					if(mapShape.empty() || labelShape.empty()){
						return 0;
						// noop
					}else{
						var w = labelShape[0][0].getBBox().width;
						var fw = mapShape[0][0].getBBox().width;
						if(w/fw < that.chartValueWidthThreshold()/100) {
							return 1;
						}								
					}
					return 0;
					}catch(e){
						alert("Problem determining label visibility on " + i);
					}
				});
			
			}catch(e){
				alert("Problem on zoom adjust\n\n" + e);
			}
		}
	};
	return VizMap;
});