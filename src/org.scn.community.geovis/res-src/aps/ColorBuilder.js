sap.ui.commons.Panel.extend("org.scn.community.aps.ColorBuilder",{
	_pickerColors : "", 
	_pickerAlphas : "",
	_pickerRatios : "",
	_cPickers : [],
	/* 
	 * http://bl.ocks.org/mbostock/5577023
	 * http://colorbrewer2.org/
	 */
	_palettes : [
	{
		label : "SAP Colors",
		palettes : [
		    {
			  	label : "Web Intelligence",
			   	palettes : [
			   	     {label : "Default", scale : ["#008FD3,#99D101,#F39B02,#9FCFEC,#4BA707,#F6D133,#CB4D2C,#CAC7BA"]},
			   	     {label : "Basic", scale : ["#3A6598,#EFA252,#009470,#DD581F,#A22D62,#FECE60,#27758B,#DA7062"]},
			   	     {label : "Spectrum", scale : ["#748CB2,#9CC677,#EACF5E,#F9AD79,#D16A7C,#8873A2,#3A95B3,#B6D949"]}
			    ]
			},{
			   	label : "Design Studio",
			   	palettes : [
			   	     {label : "Charts", scale : ["#748CB2,#9CC677,#EACF5E,#F9AD79,#D16A7C,#8873A2,#3A95B3,#B6D949"]},
			   	]
			},{
			   	label : "Fiori",
			   	palettes : [
			   	     {label : "Accent", scale : ["#F0AB00,#F27020,#AB218E,#004990"]},
			   	     {label : "KPI", scale : ["#00C354,#049DE0,#FE7E37,#CB1918"]}
			   	]
			}
		]
	},{
	    	label : "ColorBrewer",
	    	palettes : [
				{
					label : "Diverging" , 
					palettes : [
						{
							label : "Brown Cyan",
							palettes : [
								{label : "3-class", scale : ["#d8b365","#f5f5f5","#5ab4ac"]},
								{label : "4-class", scale : ["#a6611a","#dfc27d","#80cdc1","#018571"]},
								{label : "5-class", scale : ["#a6611a","#dfc27d","#f5f5f5","#80cdc1","#018571"]},
								{label : "6-class", scale : ["#8c510a","#d8b365","#f6e8c3","#c7eae5","#5ab4ac","#01665e"]},
								{label : "7-class", scale : ["#8c510a","#d8b365","#f6e8c3","#f5f5f5","#c7eae5","#5ab4ac","#01665e"]},
								{label : "8-class", scale : ["#8c510a","#bf812d","#dfc27d","#f6e8c3","#c7eae5","#80cdc1","#35978f","#01665e"]},
								{label : "9-class", scale : ["#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e"]},
								{label : "10-class", scale : ["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"]},
								{label : "11-class", scale : ["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"]}
							]
						},{
							label : "Pink Olive",
							palettes : [
								{label : "3-class", scale : ["#e9a3c9","#f7f7f7","#a1d76a"]},
								{label : "4-class", scale : ["#d01c8b","#f1b6da","#b8e186","#4dac26"]},
								{label : "5-class", scale : ["#d01c8b","#f1b6da","#f7f7f7","#b8e186","#4dac26"]},
								{label : "6-class", scale : ["#c51b7d","#e9a3c9","#fde0ef","#e6f5d0","#a1d76a","#4d9221"]},
								{label : "7-class", scale : ["#c51b7d","#e9a3c9","#fde0ef","#f7f7f7","#e6f5d0","#a1d76a","#4d9221"]},
								{label : "8-class", scale : ["#c51b7d","#de77ae","#f1b6da","#fde0ef","#e6f5d0","#b8e186","#7fbc41","#4d9221"]},
								{label : "9-class", scale : ["#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221"]},
								{label : "10-class", scale : ["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"]},
								{label : "11-class", scale : ["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"]}
							]
						},{
							label : "Purple Green",
							palettes : [
								{label : "3-class", scale : ["#af8dc3","#f7f7f7","#7fbf7b"]},
								{label : "4-class", scale : ["#7b3294","#c2a5cf","#a6dba0","#008837"]},
								{label : "5-class", scale : ["#7b3294","#c2a5cf","#f7f7f7","#a6dba0","#008837"]},
								{label : "6-class", scale : ["#762a83","#af8dc3","#e7d4e8","#d9f0d3","#7fbf7b","#1b7837"]},
								{label : "7-class", scale : ["#762a83","#af8dc3","#e7d4e8","#f7f7f7","#d9f0d3","#7fbf7b","#1b7837"]},
								{label : "8-class", scale : ["#762a83","#9970ab","#c2a5cf","#e7d4e8","#d9f0d3","#a6dba0","#5aae61","#1b7837"]},
								{label : "9-class", scale : ["#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837"]},
								{label : "10-class", scale : ["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"]},
								{label : "11-class", scale : ["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"]}
							]
						},{
			    	    	label : "Purple Orange",
		    	    		palettes : [
			    	    		{label : "3-class", scale : ["#f1a340","#f7f7f7","#998ec3"]},
			    	    		{label : "4-class", scale : ["#e66101","#fdb863","#b2abd2","#5e3c99"]},
			    	    		{label : "5-class", scale : ["#e66101","#fdb863","#f7f7f7","#b2abd2","#5e3c99"]},
			    	    		{label : "6-class", scale : ["#b35806","#f1a340","#fee0b6","#d8daeb","#998ec3","#542788"]},
			    	    		{label : "7-class", scale : ["#b35806","#f1a340","#fee0b6","#f7f7f7","#d8daeb","#998ec3","#542788"]},
			    	    		{label : "8-class", scale : ["#b35806","#e08214","#fdb863","#fee0b6","#d8daeb","#b2abd2","#8073ac","#542788"]},
			    	    		{label : "9-class", scale : ["#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788"]},
			    	    		{label : "10-class", scale : ["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"]},
			    	    		{label : "11-class", scale : ["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"]}
			    	    	]
		    	    	},{
			    	    	label : "Red Blue",
		    	    		palettes : [
			    	    		{label : "3-class", scale : ["#ef8a62","#f7f7f7","#67a9cf"]},
			    	    		{label : "4-class", scale : ["#ca0020","#f4a582","#92c5de","#0571b0"]},
			    	    		{label : "5-class", scale : ["#ca0020","#f4a582","#f7f7f7","#92c5de","#0571b0"]},
			    	    		{label : "6-class", scale : ["#b2182b","#ef8a62","#fddbc7","#d1e5f0","#67a9cf","#2166ac"]},
			    	    		{label : "7-class", scale : ["#b2182b","#ef8a62","#fddbc7","#f7f7f7","#d1e5f0","#67a9cf","#2166ac"]},
			    	    		{label : "8-class", scale : ["#b2182b","#d6604d","#f4a582","#fddbc7","#d1e5f0","#92c5de","#4393c3","#2166ac"]},
			    	    		{label : "9-class", scale : ["#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac"]},
			    	    		{label : "10-class", scale : ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"]},
			    	    		{label : "11-class", scale : ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"]}
			    	    	]
		    	    	},{
			    	    	label : "Red Grey",
		    	    		palettes : [
			    	    		{label : "3-class", scale : ["#ef8a62","#ffffff","#999999"]},
			    	    		{label : "4-class", scale : ["#ca0020","#f4a582","#bababa","#404040"]},
			    	    		{label : "5-class", scale : ["#ca0020","#f4a582","#ffffff","#bababa","#404040"]},
			    	    		{label : "6-class", scale : ["#b2182b","#ef8a62","#fddbc7","#e0e0e0","#999999","#4d4d4d"]},
			    	    		{label : "7-class", scale : ["#b2182b","#ef8a62","#fddbc7","#ffffff","#e0e0e0","#999999","#4d4d4d"]},
			    	    		{label : "8-class", scale : ["#b2182b","#d6604d","#f4a582","#fddbc7","#e0e0e0","#bababa","#878787","#4d4d4d"]},
			    	    		{label : "9-class", scale : ["#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d"]},
			    	    		{label : "10-class", scale : ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"]},
			    	    		{label : "11-class", scale : ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"]}
			    	    	]
		    	    	},{
			    	    	label : "Red Yellow Blue",
		    	    		palettes : [
			    	    		{label : "3-class", scale : ["#fc8d59","#ffffbf","#91bfdb"]},
			    	    		{label : "4-class", scale : ["#d7191c","#fdae61","#abd9e9","#2c7bb6"]},
			    	    		{label : "5-class", scale : ["#d7191c","#fdae61","#ffffbf","#abd9e9","#2c7bb6"]},
			    	    		{label : "6-class", scale : ["#d73027","#fc8d59","#fee090","#e0f3f8","#91bfdb","#4575b4"]},
			    	    		{label : "7-class", scale : ["#d73027","#fc8d59","#fee090","#ffffbf","#e0f3f8","#91bfdb","#4575b4"]},
			    	    		{label : "8-class", scale : ["#d73027","#f46d43","#fdae61","#fee090","#e0f3f8","#abd9e9","#74add1","#4575b4"]},
			    	    		{label : "9-class", scale : ["#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4"]},
			    	    		{label : "10-class", scale : ["#a50026","#d73027","#f46d43","#fdae61","#fee090","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"]},
			    	    		{label : "11-class", scale : ["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"]}
			    	    	]
		    	    	},{
			    	    	label : "Red Yellow Green",
		    	    		palettes : [
			    	    		{label : "3-class", scale : ["#fc8d59","#ffffbf","#91cf60"]},
			    	    		{label : "4-class", scale : ["#d7191c","#fdae61","#a6d96a","#1a9641"]},
			    	    		{label : "5-class", scale : ["#d7191c","#fdae61","#ffffbf","#a6d96a","#1a9641"]},
			    	    		{label : "6-class", scale : ["#d73027","#fc8d59","#fee08b","#d9ef8b","#91cf60","#1a9850"]},
			    	    		{label : "7-class", scale : ["#d73027","#fc8d59","#fee08b","#ffffbf","#d9ef8b","#91cf60","#1a9850"]},
			    	    		{label : "8-class", scale : ["#d73027","#f46d43","#fdae61","#fee08b","#d9ef8b","#a6d96a","#66bd63","#1a9850"]},
			    	    		{label : "9-class", scale : ["#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850"]},
			    	    		{label : "10-class", scale : ["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"]},
			    	    		{label : "11-class", scale : ["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"]}
			    	    	]
		    	    	},{
			    	    	label : "Spectral",
		    	    		palettes : [
			    	    		{label : "3-class", scale : ["#fc8d59","#ffffbf","#99d594"]},
			    	    		{label : "4-class", scale : ["#d7191c","#fdae61","#abdda4","#2b83ba"]},
			    	    		{label : "5-class", scale : ["#d7191c","#fdae61","#ffffbf","#abdda4","#2b83ba"]},
			    	    		{label : "6-class", scale : ["#d53e4f","#fc8d59","#fee08b","#e6f598","#99d594","#3288bd"]},
			    	    		{label : "7-class", scale : ["#d53e4f","#fc8d59","#fee08b","#ffffbf","#e6f598","#99d594","#3288bd"]},
			    	    		{label : "8-class", scale : ["#d53e4f","#f46d43","#fdae61","#fee08b","#e6f598","#abdda4","#66c2a5","#3288bd"]},
			    	    		{label : "9-class", scale : ["#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"]},
			    	    		{label : "10-class", scale : ["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"]},
			    	    		{label : "11-class", scale : ["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"]}
			    	    	]
		    	    	}					            
					]
				},{
	    	    	label : "Multi-Hue" , 
	    	    	palettes : [
			    	    {
			    	    	label : "Blue Green",
			    	    	palettes : [
		   	    	            {label : "3-class", scale : ["#e5f5f9","#99d8c9","#2ca25f"]},
		   	    	            {label : "4-class", scale : ["#edf8fb","#b2e2e2","#66c2a4","#238b45"]},
		   	    	        	{label : "5-class", scale : ["#edf8fb","#b2e2e2","#66c2a4","#2ca25f","#006d2c"]},
		   	    	        	{label : "6-class", scale : ["#edf8fb","#ccece6","#99d8c9","#66c2a4","#2ca25f","#006d2c"]},
		   	    	        	{label : "7-class", scale : ["#edf8fb","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#005824"]},
		   	    	        	{label : "8-class", scale : ["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#005824"]},
		   	    	        	{label : "9-class", scale : ["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"]}
			    	    	]
			    	    },{
			    	    	label : "Blue Purple",
			    	    	palettes : [
			    	    		{label : "3-class", scale : ["#e0ecf4","#9ebcda","#8856a7"]},
			    	    		{label : "4-class", scale : ["#edf8fb","#b3cde3","#8c96c6","#88419d"]},
			    	    		{label : "5-class", scale : ["#edf8fb","#b3cde3","#8c96c6","#8856a7","#810f7c"]},
			    	    		{label : "6-class", scale : ["#edf8fb","#bfd3e6","#9ebcda","#8c96c6","#8856a7","#810f7c"]},
			    	    		{label : "7-class", scale : ["#edf8fb","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#6e016b"]},
			    	    		{label : "8-class", scale : ["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#6e016b"]},
			    	    		{label : "9-class", scale : ["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"]}
			    	    	]
			    	    },{
			    	    	label : "Green Blue",
			    	    	palettes : [
		   	    	            {label : "3-class", scale : ["#e0f3db","#a8ddb5","#43a2ca"]},
		   	    	            {label : "4-class", scale : ["#f0f9e8","#bae4bc","#7bccc4","#2b8cbe"]},
		   	    	        	{label : "5-class", scale : ["#f0f9e8","#bae4bc","#7bccc4","#43a2ca","#0868ac"]},
		   	    	        	{label : "6-class", scale : ["#f0f9e8","#ccebc5","#a8ddb5","#7bccc4","#43a2ca","#0868ac"]},
		   	    	        	{label : "7-class", scale : ["#f0f9e8","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#08589e"]},
		   	    	        	{label : "8-class", scale : ["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#08589e"]},
		   	    	        	{label : "9-class", scale : ["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"]}
			    	    	]
			    	    },{
			    	    	label : "Orange Red",
		    	    		palettes : [
			    	    		{label : "3-class", scale : ["#fee8c8","#fdbb84","#e34a33"]},
			    	    		{label : "4-class", scale : ["#fef0d9","#fdcc8a","#fc8d59","#d7301f"]},
			    	    		{label : "5-class", scale : ["#fef0d9","#fdcc8a","#fc8d59","#e34a33","#b30000"]},
			    	    		{label : "6-class", scale : ["#fef0d9","#fdd49e","#fdbb84","#fc8d59","#e34a33","#b30000"]},
			    	    		{label : "7-class", scale : ["#fef0d9","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#990000"]},
			    	    		{label : "8-class", scale : ["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#990000"]},
			    	    		{label : "9-class", scale : ["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]}
			    	    		]
		    	    	},{
			    	    	label : "Purple Blue",
			    	    	palettes : [
		   	    	            {label : "3-class", scale : ["#ece7f2","#a6bddb","#2b8cbe"]},
		   	    	            {label : "4-class", scale : ["#f1eef6","#bdc9e1","#74a9cf","#0570b0"]},
		   	    	        	{label : "5-class", scale : ["#f1eef6","#bdc9e1","#74a9cf","#2b8cbe","#045a8d"]},
		   	    	        	{label : "6-class", scale : ["#f1eef6","#d0d1e6","#a6bddb","#74a9cf","#2b8cbe","#045a8d"]},
		   	    	        	{label : "7-class", scale : ["#f1eef6","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#034e7b"]},
		   	    	        	{label : "8-class", scale : ["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#034e7b"]},
		   	    	        	{label : "9-class", scale : ["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"]}
			    	    	]
			    	    },{
			    	    	label : "Purple Blue Green",
			    	    	palettes : [
		   	    	            {label : "3-class", scale : ["#ece2f0","#a6bddb","#1c9099"]},
		   	    	            {label : "4-class", scale : ["#f6eff7","#bdc9e1","#67a9cf","#02818a"]},
		   	    	        	{label : "5-class", scale : ["#f6eff7","#bdc9e1","#67a9cf","#1c9099","#016c59"]},
		   	    	        	{label : "6-class", scale : ["#f6eff7","#d0d1e6","#a6bddb","#67a9cf","#1c9099","#016c59"]},
		   	    	        	{label : "7-class", scale : ["#f6eff7","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016450"]},
		   	    	        	{label : "8-class", scale : ["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016450"]},
		   	    	        	{label : "9-class", scale : ["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"]}
			    	    	]
			    	    },{
			    	    	label : "Purple Red",
		    	    		palettes : [
			    	    		{label : "3-class", scale : ["#e7e1ef","#c994c7","#dd1c77"]},
			    	    		{label : "4-class", scale : ["#f1eef6","#d7b5d8","#df65b0","#ce1256"]},
			    	    		{label : "5-class", scale : ["#f1eef6","#d7b5d8","#df65b0","#dd1c77","#980043"]},
			    	    		{label : "6-class", scale : ["#f1eef6","#d4b9da","#c994c7","#df65b0","#dd1c77","#980043"]},
			    	    		{label : "7-class", scale : ["#f1eef6","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#91003f"]},
			    	    		{label : "8-class", scale : ["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#91003f"]},
			    	    		{label : "9-class", scale : ["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"]}
			    	    	]
		    	    	},{
		    	    		label : "Red Purple",
		    	    		palettes : [
			    	    		{label : "3-class", scale : ["#fde0dd","#fa9fb5","#c51b8a"]},
			    	    		{label : "4-class", scale : ["#feebe2","#fbb4b9","#f768a1","#ae017e"]},
			    	    		{label : "5-class", scale : ["#feebe2","#fbb4b9","#f768a1","#c51b8a","#7a0177"]},
			    	    		{label : "6-class", scale : ["#feebe2","#fcc5c0","#fa9fb5","#f768a1","#c51b8a","#7a0177"]},
			    	    		{label : "7-class", scale : ["#feebe2","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177"]},
			    	    		{label : "8-class", scale : ["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177"]},
			    	    		{label : "9-class", scale : ["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"]}
			    	    	]
			    	    },{
			    	    	label : "Yellow Green",
			    	    	palettes : [
		   	    	            {label : "3-class", scale : ["#f7fcb9","#addd8e","#31a354"]},
		   	    	            {label : "4-class", scale : ["#ffffcc","#c2e699","#78c679","#238443"]},
		   	    	        	{label : "5-class", scale : ["#ffffcc","#c2e699","#78c679","#31a354","#006837"]},
		   	    	        	{label : "6-class", scale : ["#ffffcc","#d9f0a3","#addd8e","#78c679","#31a354","#006837"]},
		   	    	        	{label : "7-class", scale : ["#ffffcc","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#005a32"]},
		   	    	        	{label : "8-class", scale : ["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#005a32"]},
		   	    	        	{label : "9-class", scale : ["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"]}
			    	    	]
			    	    },{
			    	    	label : "Yellow Green Blue",
			    	    	palettes : [
		   	    	            {label : "3-class", scale : ["#edf8b1","#7fcdbb","#2c7fb8"]},
		   	    	            {label : "4-class", scale : ["#ffffcc","#a1dab4","#41b6c4","#225ea8"]},
		   	    	        	{label : "5-class", scale : ["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"]},
		   	    	        	{label : "6-class", scale : ["#ffffcc","#c7e9b4","#7fcdbb","#41b6c4","#2c7fb8","#253494"]},
		   	    	        	{label : "7-class", scale : ["#ffffcc","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#0c2c84"]},
		   	    	        	{label : "8-class", scale : ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#0c2c84"]},
		   	    	        	{label : "9-class", scale : ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"]}
			    	    	]
			    	    },{
			    	    	label : "Yellow Orange Brown",
		    	    		palettes : [
			    	    		{label : "3-class", scale : ["#fff7bc","#fec44f","#d95f0e"]},
			    	    		{label : "4-class", scale : ["#ffffd4","#fed98e","#fe9929","#cc4c02"]},
			    	    		{label : "5-class", scale : ["#ffffd4","#fed98e","#fe9929","#d95f0e","#993404"]},
			    	    		{label : "6-class", scale : ["#ffffd4","#fee391","#fec44f","#fe9929","#d95f0e","#993404"]},
			    	    		{label : "7-class", scale : ["#ffffd4","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#8c2d04"]},
			    	    		{label : "8-class", scale : ["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#8c2d04"]},
			    	    		{label : "9-class", scale : ["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"]}
			    	    		]
		    	    	},{
			    	    	label : "Yellow Orange Red",
		    	    		palettes : [
			    	    		{label : "3-class", scale : ["#ffeda0","#feb24c","#f03b20"]},
			    	    		{label : "4-class", scale : ["#ffffb2","#fecc5c","#fd8d3c","#e31a1c"]},
			    	    		{label : "5-class", scale : ["#ffffb2","#fecc5c","#fd8d3c","#f03b20","#bd0026"]},
			    	    		{label : "6-class", scale : ["#ffffb2","#fed976","#feb24c","#fd8d3c","#f03b20","#bd0026"]},
			    	    		{label : "7-class", scale : ["#ffffb2","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026"]},
			    	    		{label : "8-class", scale : ["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026"]},
			    	    		{label : "9-class", scale : ["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"]}
			    	    		]
		    	    	}
		    	    ]
				},{
	    	    	label : "Qualitative" , 
	    	    	palettes : [
	    	    	     {
			    	    	label : "Accent",
		    	    		palettes : [
			    	    		{label : "3-class", scale : ["#7fc97f","#beaed4","#fdc086"]},
			    	    		{label : "4-class", scale : ["#7fc97f","#beaed4","#fdc086","#ffff99"]},
			    	    		{label : "5-class", scale : ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0"]},
			    	    		{label : "6-class", scale : ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f"]},
			    	    		{label : "7-class", scale : ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17"]},
			    	    		{label : "8-class", scale : ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"]}
			    	    		]
		    	    	},{
			    	    	label : "Dark 2",
		    	    		palettes : [
			    	    		{label : "3-class", scale : ["#1b9e77","#d95f02","#7570b3"]},
			    	    		{label : "4-class", scale : ["#1b9e77","#d95f02","#7570b3","#e7298a"]},
			    	    		{label : "5-class", scale : ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e"]},
			    	    		{label : "6-class", scale : ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02"]},
			    	    		{label : "7-class", scale : ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d"]},
			    	    		{label : "8-class", scale : ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"]}
			    	    		]
		    	    	},{
			    	    	label : "Paired",
		    	    		palettes : [
			    	    		{label : "3-class", scale : ["#a6cee3","#1f78b4","#b2df8a"]},
			    	    		{label : "4-class", scale : ["#a6cee3","#1f78b4","#b2df8a","#33a02c"]},
			    	    		{label : "5-class", scale : ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99"]},
			    	    		{label : "6-class", scale : ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c"]},
			    	    		{label : "7-class", scale : ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f"]},
			    	    		{label : "8-class", scale : ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00"]},
			    	    		{label : "9-class", scale : ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6"]},
			    	    		{label : "10-class", scale : ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a"]},
			    	    		{label : "11-class", scale : ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99"]},
			    	    		{label : "12-class", scale : ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"]}
			    	    		]
		    	    	},{
			    	    	label : "Pastel 1",
		    	    		palettes : [
			    	    		{label : "3-class", scale : ["#fbb4ae","#b3cde3","#ccebc5"]},
			    	    		{label : "4-class", scale : ["#fbb4ae","#b3cde3","#ccebc5","#decbe4"]},
			    	    		{label : "5-class", scale : ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6"]},
			    	    		{label : "6-class", scale : ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc"]},
			    	    		{label : "7-class", scale : ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd"]},
			    	    		{label : "8-class", scale : ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec"]},
			    	    		{label : "9-class", scale : ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]}
			    	    		]
		    	    	},{
			    	    	label : "Pastel 2",
		    	    		palettes : [
			    	    		{label : "3-class", scale : ["#b3e2cd","#fdcdac","#cbd5e8"]},
			    	    		{label : "4-class", scale : ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4"]},
			    	    		{label : "5-class", scale : ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9"]},
			    	    		{label : "6-class", scale : ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae"]},
			    	    		{label : "7-class", scale : ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc"]},
			    	    		{label : "8-class", scale : ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"]}
			    	    		]
		    	    	},{
			    	    	label : "Set 1",
		    	    		palettes : [
			    	    		{label : "3-class", scale : ["#e41a1c","#377eb8","#4daf4a"]},
			    	    		{label : "4-class", scale : ["#e41a1c","#377eb8","#4daf4a","#984ea3"]},
			    	    		{label : "5-class", scale : ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00"]},
			    	    		{label : "6-class", scale : ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33"]},
			    	    		{label : "7-class", scale : ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628"]},
			    	    		{label : "8-class", scale : ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf"]},
			    	    		{label : "9-class", scale : ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"]}
			    	    		]
		    	    	},{
			    	    	label : "Set 2",
			    	    		palettes : [
			    	    		{label : "3-class", scale : ["#66c2a5","#fc8d62","#8da0cb"]},
			    	    		{label : "4-class", scale : ["#66c2a5","#fc8d62","#8da0cb","#e78ac3"]},
			    	    		{label : "5-class", scale : ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854"]},
			    	    		{label : "6-class", scale : ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f"]},
			    	    		{label : "7-class", scale : ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494"]},
			    	    		{label : "8-class", scale : ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"]}
			    	    		]
		    	    	},{
			    	    	label : "Set 3",
		    	    		palettes : [
			    	    		{label : "3-class", scale : ["#8dd3c7","#ffffb3","#bebada"]},
			    	    		{label : "4-class", scale : ["#8dd3c7","#ffffb3","#bebada","#fb8072"]},
			    	    		{label : "5-class", scale : ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3"]},
			    	    		{label : "6-class", scale : ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462"]},
			    	    		{label : "7-class", scale : ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69"]},
			    	    		{label : "8-class", scale : ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5"]},
			    	    		{label : "9-class", scale : ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9"]},
			    	    		{label : "10-class", scale : ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd"]},
			    	    		{label : "11-class", scale : ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5"]},
			    	    		{label : "12-class", scale : ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"]}
			    	    	]
		    	    	}
			    	]
	    	    },{
		    		label : "Single-Hue",
		    		palettes : [
						{
							label : "Purples",
							palettes : [
								{label : "3-class", scale : ["#efedf5","#bcbddc","#756bb1"]},
								{label : "4-class", scale : ["#f2f0f7","#cbc9e2","#9e9ac8","#6a51a3"]},
								{label : "5-class", scale : ["#f2f0f7","#cbc9e2","#9e9ac8","#756bb1","#54278f"]},
								{label : "6-class", scale : ["#f2f0f7","#dadaeb","#bcbddc","#9e9ac8","#756bb1","#54278f"]},
								{label : "7-class", scale : ["#f2f0f7","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#4a1486"]},
								{label : "8-class", scale : ["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#4a1486"]},
								{label : "9-class", scale : ["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"]}
								]
						},{
							label : "Blues",
							palettes : [
								{label : "3-class", scale : ["#deebf7","#9ecae1","#3182bd"]},
								{label : "4-class", scale : ["#eff3ff","#bdd7e7","#6baed6","#2171b5"]},
								{label : "5-class", scale : ["#eff3ff","#bdd7e7","#6baed6","#3182bd","#08519c"]},
								{label : "6-class", scale : ["#eff3ff","#c6dbef","#9ecae1","#6baed6","#3182bd","#08519c"]},
								{label : "7-class", scale : ["#eff3ff","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#084594"]},
								{label : "8-class", scale : ["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#084594"]},
								{label : "9-class", scale : ["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"]}
								]
						},{
							label : "Greens",
							palettes : [
								{label : "3-class", scale : ["#e5f5e0","#a1d99b","#31a354"]},
								{label : "4-class", scale : ["#edf8e9","#bae4b3","#74c476","#238b45"]},
								{label : "5-class", scale : ["#edf8e9","#bae4b3","#74c476","#31a354","#006d2c"]},
								{label : "6-class", scale : ["#edf8e9","#c7e9c0","#a1d99b","#74c476","#31a354","#006d2c"]},
								{label : "7-class", scale : ["#edf8e9","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#005a32"]},
								{label : "8-class", scale : ["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#005a32"]},
								{label : "9-class", scale : ["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"]}
								]
						},{
							label : "Oranges",
							palettes : [
								{label : "3-class", scale : ["#fee6ce","#fdae6b","#e6550d"]},
								{label : "4-class", scale : ["#feedde","#fdbe85","#fd8d3c","#d94701"]},
								{label : "5-class", scale : ["#feedde","#fdbe85","#fd8d3c","#e6550d","#a63603"]},
								{label : "6-class", scale : ["#feedde","#fdd0a2","#fdae6b","#fd8d3c","#e6550d","#a63603"]},
								{label : "7-class", scale : ["#feedde","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#8c2d04"]},
								{label : "8-class", scale : ["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#8c2d04"]},
								{label : "9-class", scale : ["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"]}
								]
						},{
							label : "Reds",
							palettes : [
								{label : "3-class", scale : ["#fee0d2","#fc9272","#de2d26"]},
								{label : "4-class", scale : ["#fee5d9","#fcae91","#fb6a4a","#cb181d"]},
								{label : "5-class", scale : ["#fee5d9","#fcae91","#fb6a4a","#de2d26","#a50f15"]},
								{label : "6-class", scale : ["#fee5d9","#fcbba1","#fc9272","#fb6a4a","#de2d26","#a50f15"]},
								{label : "7-class", scale : ["#fee5d9","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#99000d"]},
								{label : "8-class", scale : ["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#99000d"]},
								{label : "9-class", scale : ["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"]}
								]
						},{
							label : "Greys",
							palettes : [
								{label : "3-class", scale : ["#f0f0f0","#bdbdbd","#636363"]},
								{label : "4-class", scale : ["#f7f7f7","#cccccc","#969696","#525252"]},
								{label : "5-class", scale : ["#f7f7f7","#cccccc","#969696","#636363","#252525"]},
								{label : "6-class", scale : ["#f7f7f7","#d9d9d9","#bdbdbd","#969696","#636363","#252525"]},
								{label : "7-class", scale : ["#f7f7f7","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525"]},
								{label : "8-class", scale : ["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525"]},
								{label : "9-class", scale : ["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"]}
								]
						}
		    		]
		    	}
	    	]
	    }
	],
	metadata : {                             
        properties : {
        	colors : {
				type : "string",
				defaultValue : ""
        	},
        	alphas : {
        		type : "string",
        		defaultValue : ""
        	},
        	showAlpha : {
        		type : "boolean",
        		defaultValue : false
        	},
        	showRatios : {
        		type : "boolean",
        		defaultValue : false
        	},
        	propSheet : {}
        },
	    events : {
	    	colorChange : {},
	    	alphaChange : {},
	    	ratioChange : {}
	    }
	 },
	 setShowAlpha : function(b){
		if(b!=this._showAlpha){
			this._showAlpha = b;
			this.renderLines();
		} 
	 },
	 getShowAlpha : function(){
		 return this._showAlpha;
	 },
	 setShowRatios : function(b){
			if(b!=this._showRatios){
				this._showRatios = b;
				this.renderLines();
		} 
	 },
	 getShowRatios : function(){
		 return this._showRatios;
	 },
	 setPropSheet : function(o){
		this._propSheet = o;
	},
	getPropSheet : function(){
		return this._propSheet;
	},
	renderLines: function(){
		var that = this;
		var c = [];
		var alphas = [];
		var ratios = [];
		var stops = [];
		var oldAlphas = this._pickerAlphas;
		var oldRatios = this._pickerRatios;
		if(this._pickerColors.length>0) {
			c = this._pickerColors.split(",");
			if(this._pickerAlphas.length>0) alphas = this._pickerAlphas.split(",");
			if(this._pickerRatios.length>0) ratios = this._pickerRatios.split(",");
			while(alphas.length<c.length) alphas.push(100);
			while(ratios.length<c.length) ratios.push(Math.floor(100/(c.length),0));
			while(ratios.length>c.length) ratios.splice(ratios.length-1,1);
			this._pickerAlphas = alphas.join(",");
			this._pickerRatios = ratios.join(",");
		}
		var stop = 0;
		for(var i=0;i<ratios.length;i++){
			stop = stop + Number(ratios[i]);
			if(stop>100) stop=100;
			stops[i]=stop;
		}
		if(oldAlphas!=this._pickerAlphas) this.fireAlphaChange();
		if(oldRatios!=this._pickerRatios) this.fireRatioChange();
		this._vLayout.destroyContent();
		this._cPickers = [];
		for(var i = 0;i<c.length;i++){
			if(c[i]=="") c[i]=null;		// or #FFFFFF?
			var cp = new org.scn.community.aps.ColorPicker({
				propSheet : this.getPropSheet(),
				width : "100%",
				showAlpha : this._showAlpha,
				showRatio : this._showRatios,
				showMultiOptions : true,
				backgroundColor : c[i],
				alpha : alphas[i]/100,
				ratio : stops[i],
				//ratioMin : (i>0)?stops[i-1]:0, 
				colorChange : function(index){
					return function(oControlEvent){
						var newC = that._pickerColors.split(",");
						newC[index] = this.getBackgroundColor();
						that._pickerColors = newC.join(",");
						that.fireColorChange();
					};
				}(i),
				alphaChange : function(index){
					return function(oControlEvent){
						var newA = that._pickerAlphas.split(",");
						newA[index] = this.getAlpha()*100;
						that._pickerAlphas = newA.join(",");
						that.fireAlphaChange();
					};
				}(i),
				ratioChange : function(index){
					return function(oControlEvent){
						var r = this.getRatio();
						var newA = that._pickerRatios.split(",");
						// Snapshot old ratios
						var oldStops = stops.slice(0);
						oldStops[index]=-1;
						if(r>100) {
							oldStops[index]=-2;	// Force refresh
							r = 100;
						}
						stops[index] = r;
						for(var z=0;z<stops.length;z++){
							var ratio = stops[z];
							if(z>0) {
								ratio = stops[z] - stops[z-1];
							}
							if(ratio<0) {
								stops[z]=stops[z-1];
								oldStops[z] = -2;
								ratio = 0;
								that._cPickers[z].setRatio(stops[z-1]);
							}
							newA[z] = ratio;
						}
						that._pickerRatios = newA.join(",");
						that.fireRatioChange();
						var newStops = stops.slice(0);
						newStops[index] = -1;
						var newString = newStops.join(",");
						var oldString = oldStops.join(",");
						//if(newString!=oldString) that.renderLines();
					};
				}(i)
			});
			this._cPickers.push(cp);
			cp.attachInsertBeforeClicked(function(i){
				return function(){
					var a = [];
					a=that.getColors().split(",");
					a.splice(i, 0, "#EFEFEF");
					that.setColors(a.join(","));	
				};
			}(i));
			cp.attachInsertAfterClicked(function(i){
				return function(){
					var a = [];
					a=that.getColors().split(",");
					a.splice(i+1, 0, "#EFEFEF");
					that.setColors(a.join(","));
				};
			}(i));
			cp.attachRemoveClicked(function(i){
				return function(){
					var cols = that.getColors();
					var rats = that.getRatios();
					var alps = that.getAlphas();
					var a = cols.split(",");
					var b = rats.split(",");
					var c = alps.split(",");
					a.splice(i,1);
					b.splice(i,1);
					c.splice(i,1);
					that.setColors(a.join(","));
					that.setRatios(b.join(","));
					that.setAlphas(c.join(","));
				};
			}(i));
			this._vLayout.addContent(cp);
		}		
	},
	setAlphas : function(s){
		if(this._pickerAlphas!=s){
			this._pickerAlphas = s || "";
			this.renderLines();
			this.fireAlphaChange();
		}
	},
	getAlphas : function(){
		return this._pickerAlphas;
	},
	setRatios : function(s){
		if(this._pickerRatios!=s){
			this._pickerRatios = s || "";
			this.renderLines();
			this.fireRatioChange();
		}
	},
	getRatios : function(){
		return this._pickerRatios;
	},
	setColors : function(s){
		try{
			if(this._pickerColors==s) return;
			this._pickerColors = s || "";
			this.renderLines();
			this.fireColorChange();
		}catch(e){
			alert(e);
		}
	},
	getColors : function(){
		return this._pickerColors;
	},
	makeColorMenu : function(o, menuitem){
		menuitem.setText(o.label);
		if(o.palettes){
			var newMenu = new sap.ui.commons.Menu({});
			menuitem.setSubmenu(newMenu);
			for(var i=0;i<o.palettes.length;i++){
				var newMenuItem = new sap.ui.commons.MenuItem({
					text : o.palettes[i].label
				});
				newMenu.addItem(newMenuItem);
				this.makeColorMenu(o.palettes[i], newMenuItem);
			}
		}
		if(o.scale) {
			menuitem.attachSelect(function(s){return function(oControlEvent){
    			this.setColors(s.join(",").toUpperCase());
    			var ratios = [];
    			if(!o.ratios){
    				var ratio = Math.floor(100/s.length);
        			for(var r=0;r<s.length;r++){
        				ratios.push(ratio);
        			}
    			}else{
    				ratios = o.ratios;
    			}    			
    			this.setRatios(ratios.join(","));
    		};}(o.scale), this);
		}
	},
	init : function(){
		try{
		var that = this;
		sap.ui.commons.Panel.prototype.init.apply(this,arguments);
		var presetMenu = new sap.ui.commons.Menu({
			items :[
		        new sap.ui.commons.MenuItem({
		        	text : "Add a Color",
		        	select : function(){
						that.setColors("#FFFFFF");
					}
		        }),
		        new sap.ui.commons.MenuItem({
		        	text : "Remove All",
		        	select : function(){
						that.setColors("");
						that.setAlphas("");
						that.setRatios("");
					}
		        }),
		        generatedMenuItem
	        ]
		});
		for(var i=0;i<this._palettes.length;i++){
			var generatedMenuItem = new sap.ui.commons.MenuItem({
				text : this._palettes[i].label
			});
			this.makeColorMenu(this._palettes[i], generatedMenuItem);
			presetMenu.addItem(generatedMenuItem);
		}
		this.addButton(new sap.ui.commons.MenuButton({ 
			text : "Options",
			menu : presetMenu
		}));
		this._vLayout = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		this.addContent(this._vLayout);	
		this.renderLines();
		}catch(e){
			alert("Problem with Color Builder Init");
		}
	},
	renderer : {}
});
