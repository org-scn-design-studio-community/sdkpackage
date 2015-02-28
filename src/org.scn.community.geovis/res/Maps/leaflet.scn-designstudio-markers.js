/**
 * 
 * Design Studio SCN Leaflet Markers Layer - Mike Howles
 * Free for use by whoever.
 * 
 */
(function (window, document, undefined) {
    "use strict";
    /*
     * Assumes that you have already included the Leaflet library.
     */

    L.SCNDesignStudioMarkers = {};

    L.SCNDesignStudioMarkers.version = '2.0.1';

    L.SCNDesignStudioMarkers.Icon = L.Icon.extend({
        options: {
            iconSize: [32, 32],
            iconAnchor:   [16, 32],
            anchorPosition : [.5,.5],
            popupAnchor: [1, -32],
            shadowAnchor: [10, 12],
            shadowSize: [36, 16],
            className: 'designstudio-scn-mapsmarker',
            extraClasses: '',
            icon: 'marker',
            markerColor: 'blue'
        },

        initialize: function (options) {
            options = L.Util.setOptions(this, options);
        },

        createIcon: function () {
        	var markerType = this.options.icon;
        	var icon = document.createElement('canvas');
            var size = L.point(this.options.iconSize);
            if (size) {
	            icon.width  = size.x;
	            icon.height = size.y;
	        }
            var ctx = icon.getContext("2d")
            ctx.scale(size.x/512,size.y/512);
        	switch(markerType){
        		case "marker":
        			this._createMarker(ctx);
        			break;
        		case "circle":
        			this._createCircle(ctx);
        			break;
        		default:
        			this._createMarker(ctx);
        	}
        	
        	/*
            var anchor = L.point(this.options.iconAnchor);
        
	        if (!anchor && size) {
	            anchor = size.divideBy(2, true);
	        }

	        
        	 */
        	icon.className = this.options.className;
	        var anchor = L.point([
	            this.options.iconSize[0] * this.options.anchorPosition[0],
	            this.options.iconSize[1] * this.options.anchorPosition[1]
	        ]);
	        
	        if (anchor) {
	            icon.style.marginLeft = (-anchor.x) + 'px';
	            icon.style.marginTop  = (-anchor.y) + 'px';
	        }

	        
            return icon;
        },
        _createCircle : function(ctx){
        	ctx.save();
        	ctx.moveTo(256,256);
        	ctx.beginPath();
        	ctx.fillStyle = this.options.markerColor;
        	ctx.scale(1, 1);
        	ctx.arc(256, 256, 256, 0, 2 * Math.PI, false);
        	ctx.fill();
        	ctx.stroke();
        },
        
        _createMarker : function(ctx){
    		// Make a shadow
    		ctx.save();
    		ctx.scale(1,.5);
    		var grd = ctx.createRadialGradient(256, 1024, 1, 256, 1024, 200);
    		grd.addColorStop(0,'rgba(128,128,128,.8)');
    		grd.addColorStop(1,'rgba(128,128,128,0)');
    		ctx.moveTo(256,512);
    		ctx.beginPath();
    		ctx.fillStyle = grd;
    		ctx.scale(1, 1);
    		ctx.arc(256, 1024, 200, 0, 2 * Math.PI, false);
    		ctx.fill();
    		ctx.restore();
    		
    		// Marker Base
    		var grd=ctx.createLinearGradient(0,0,0,512);
    		grd.addColorStop(0,this.options.markerColor);
    		grd.addColorStop(1,"#FFFFFF");        		
    		ctx.lineWidth = 15;
    		ctx.strokeStyle = this.options.markerColor;
    		ctx.fillStyle = grd;
    		ctx.lineCap = 'butt';
    		ctx.lineJoin = 'miter';
    		ctx.miterLimit = 4;
    		ctx.save();
    		ctx.beginPath();
    		ctx.moveTo(256,0);
    		ctx.bezierCurveTo(149.969,0,64,85.969,64,192);
    		ctx.bezierCurveTo(64,298.031,224,512,256,512);
    		ctx.bezierCurveTo(288,512,448,298.031,448,192);
    		ctx.bezierCurveTo(448,85.969,362.031,0,256,0);
    		ctx.closePath();
    		ctx.fill();
    		ctx.stroke();
    		
    		// Marker Shield   		
    		var grd=ctx.createLinearGradient(0,0,0,200);
    		grd.addColorStop(0,"#CFCFCF");
    		grd.addColorStop(1,"#FFFFFF");
    		ctx.beginPath();
    		ctx.moveTo(256,320);
    		ctx.fillStyle = grd;
    		ctx.bezierCurveTo(185.406,320,128,262.562,128,192);       		
    		ctx.bezierCurveTo(128,121.43799999999999,185.406,64,256,64);
    		ctx.bezierCurveTo(326.594,64,384,121.438,384,192);
    		ctx.bezierCurveTo(384,262.562,326.594,320,256,320);
    		ctx.closePath();
    		ctx.fill();
    		ctx.stroke();
        },

        createShadow: function () {

        }
    });
        
    L.SCNDesignStudioMarkers.icon = function (options) {
        return new L.SCNDesignStudioMarkers.Icon(options);
    };

}(this, document));



