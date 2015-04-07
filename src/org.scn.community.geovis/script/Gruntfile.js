module.exports = function(grunt) {
    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),       
        // Concatenation Task
        concat: {
            // Configuration for concatenating files goes here.
        	options : {
        		separator : ";\n\n\n\n"		// Add some whitespace
        	},
        	// Concatenate all APS UI5 Property Sheet Components together
        	apsExtensions : {
        		src : [
        		       "../res-src/aps/GeoCache.js",
        		       "../res-src/aps/GeoLookup.js",
        		       "../res-src/aps/GeoLookupLocal.js",
        		       "../res-src/aps/GeoHierarchy.js",
        		       "../res-src/aps/GeoLayers.js",
        		       "../res-src/aps/TileJSON.js",
        		       "../res-src/aps/MarkerLayer.js",
        		       "../res-src/aps/ClusterLayer.js",
        		       "../res-src/aps/HeatLayer.js",
        		       "../res-src/aps/PolyLayer.js",
        		       "../res-src/aps/ColorBuilder.js",
        		       "../res-src/aps/ColorPicker.js",
        		       "../res-src/aps/Spinner.js",
        		       "../res-src/aps/TextFieldMask.js",
        		],
        		dest : "../res/Maps/aps/extensions.js"
        	},
        	// Concatenate all Design Studio Component Files together
        	component : {
        		src : [
        		      "../res-src/shared/license.js",
        			  "../res-src/component/component.js",
        			  "../os/lz-string-1.3.3-min.js",
        			  "../os/dateFormat.js"
	        	],
	        	dest : "../res/Maps/Maps.js"
        	},
        	// Shared by Component and APS - Store in APS folder for access by both servlets
        	shared : {
        		src :  [
        		       "../res-src/shared/license.js",
        			   "../os/lz-string-1.3.3-min.js",
        			   "../res-src/shared/org_scn_geocode_base.js",
        			   "../res-src/shared/org_scn_geocode_local.js",
        			   "../res-src/shared/org_scn_geocode_mapbox.js",
        			   "../res-src/shared/org_scn_geocode_esri.js"
        	    ],
	        	dest : "../res/Maps/aps/shared.js"
        	}
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat' /*,'uglify' */]);
    

};