/**
 * SCN Markers - Not for reuse in commercial products.
 * 
 */
define(["d3","leaflet"], function(d3,L){
    "use strict";

    L.SCNMarkers = {};

    L.SCNMarkers.version = '2.0.2';

    L.SCNMarkers.Icon = L.Icon.extend({
        options: {
            //iconSize: [35, 45],
            //iconAnchor:   [17, 42],
        	iconSize :[32,32],
        	//iconAnchor : [16,32],
        	anchorPosition : [.5, .5],
            popupAnchor : [1, -32],
            shadowAnchor : [10, 12],
            shadowSize: [36, 16],
            shield : "marker",
            className : 'designstudio-scn-mapsmarker',
            prefix: 'glyphicon',
            spinClass: 'fa-spin',
            extraClasses: '',
            icon: 'circle',
            shieldColor : "#006699",
            iconColor: 'white'
        },

        initialize: function (options) {
            options = L.Util.setOptions(this, options);
        },

        createShield : function () {
			var markerType = this.options.shield;
			var icon = document.createElement('canvas');
			var size = L.point(this.options.iconSize);
			if (size) {
				icon.width = size.x;
				icon.height = size.y;
			}
			var ctx = icon.getContext("2d");
			ctx.scale(size.x / 512, size.y / 512);
			switch (markerType) {
				case "marker":
					this.options.anchorPosition = [.5,1];
					this._createMarker(ctx);
					break;
				case "circle":
					this.options.anchorPosition = [.5,.5];
					this._createCircle(ctx);
					break;
				default:
					this._createMarker(ctx);
			}

			icon.className = this.options.className;
			return icon;
		},
        
        createIcon: function () {
            var div = document.createElement('div'),
                options = this.options;

            if (options.bgPos) {
                div.style.backgroundPosition =(-options.bgPos.x) + 'px ' + (-options.bgPos.y) + 'px';
            }

            this._setIconStyles(div);
            div.appendChild(this.createShield());
            if (options.icon) {
            	var i = document.createElement("div");
            	i.innerHTML = this._createInner();
            	i.style.position = "absolute";
            	i.style.top = (options.iconSize[1] * .1) + "px";
            	//i.style.left = "10px";
            	i.style.width = "100%";
            	i.style.textAlign = "center";
            	div.appendChild(i);
            }
            return div;
        },

        _createInner: function() {
            var iconClass, iconSpinClass = "", iconColorClass = "", iconColorStyle = "", options = this.options;

            if(options.icon.slice(0,options.prefix.length+1) === options.prefix + "-") {
                iconClass = options.icon;
            } else {
                iconClass = options.prefix + "-" + options.icon;
            }

            if(options.spin && typeof options.spinClass === "string") {
                iconSpinClass = options.spinClass;
            }

            if(options.iconColor) {
                if(options.iconColor === 'white' || options.iconColor === 'black') {
                    iconColorClass = "icon-" + options.iconColor;
                } else {
                    iconColorStyle = "style='color: " + options.iconColor + "' ";
                }
            }

            return "<i style='font-size:"+ parseInt(options.iconSize[1] * .5) +"px;'" + iconColorStyle + "class='" + options.extraClasses + " " + options.prefix + " " + iconClass + " " + iconSpinClass + " " + iconColorClass + "'></i>";
        },

        _setIconStyles: function (img) {
            var options = this.options,
                size = L.point(options.iconSize),
                anchor;

            anchor = L.point(options.iconAnchor);

            if (!anchor && size) {
                anchor = size.divideBy(2, true);
            }

            img.className = options.className;

            var anchor = L.point([
  				this.options.iconSize[0] * this.options.anchorPosition[0],
  				this.options.iconSize[1] * this.options.anchorPosition[1]
  			]);
  			if (anchor) {
  				img.style.marginLeft = (-anchor.x) + 'px';
  				img.style.marginTop = (-anchor.y) + 'px';
  			}
            /*
            if (anchor) {
                img.style.marginLeft = (-anchor.x) + 'px';
                img.style.marginTop  = (-anchor.y) + 'px';
            }
             */
            if (size) {
                img.style.width  = size.x + 'px';
                img.style.height = size.y + 'px';
            }
        },

        createShadow: function () {
            
      },
        _createCircle : function (ctx) {
			ctx.save();
			ctx.moveTo(256, 256);
			ctx.beginPath();
			ctx.fillStyle = this.options.shieldColor;
			ctx.scale(1, 1);
			ctx.arc(256, 256, 256, 0, 2 * Math.PI, false);
			ctx.fill();
			ctx.stroke();
		},

		_createMarker : function (ctx) {
			// Make a shadow
			ctx.save();
			ctx.scale(1, .5);
			var grd = ctx.createRadialGradient(256, 1024, 1, 256, 1024, 200);
			grd.addColorStop(0, 'rgba(128,128,128,.8)');
			grd.addColorStop(1, 'rgba(128,128,128,0)');
			ctx.moveTo(256, 512);
			ctx.beginPath();
			ctx.fillStyle = grd;
			ctx.scale(1, 1);
			ctx.arc(256, 1024, 200, 0, 2 * Math.PI, false);
			ctx.fill();
			ctx.restore();

			// Marker Base
			var grd = ctx.createLinearGradient(0, 0, 0, 512);
			grd.addColorStop(0, this.options.shieldColor);
			grd.addColorStop(1, this.options.shieldColor);
			ctx.lineWidth = 15;
			ctx.strokeStyle = d3.hsl(this.options.shieldColor).darker();
			ctx.fillStyle = grd;
			ctx.lineCap = 'butt';
			ctx.lineJoin = 'miter';
			ctx.miterLimit = 4;
			ctx.save();
			ctx.beginPath();
			ctx.moveTo(256, 0);
			ctx.bezierCurveTo(149.969, 0, 64, 85.969, 64, 192);
			ctx.bezierCurveTo(64, 298.031, 224, 512, 256, 512);
			ctx.bezierCurveTo(288, 512, 448, 298.031, 448, 192);
			ctx.bezierCurveTo(448, 85.969, 362.031, 0, 256, 0);
			ctx.closePath();
			ctx.fill();
			ctx.stroke();
		},

    });
        
    L.SCNMarkers.icon = function (options) {
        return new L.SCNMarkers.Icon(options);
    };

//}(this, document));
});



