/*
 * Spinner Control
 */
sap.ui.commons.layout.VerticalLayout.extend("org.scn.community.aps.GeoLookup",{
	metadata : {                             
        properties : {
        	value : ""
        },
	    events : {
	    	valueChange : {}
	    }
	 },
	 setValue : function(s){
		this._value = s;
		this.renderComp();
	 },
	 getValue : function(){
		 return this._value;
	 },
	 renderComp : function(){
		if(this._value){
			this._latlngBox.setValue(this._value);
		}
	 },
	init : function(){
		var that = this;
		//alert("!");
		//this.setWidths(["50px","auto","auto"]);
		this._row1 = new sap.ui.commons.layout.HorizontalLayout();
		this._row2 = new sap.ui.commons.layout.HorizontalLayout();
		this._lookupBox = new sap.ui.commons.TextField({
			width : "150px"/*,
			change : function(oControlEvent){
				if(that._value!= this.getValue()){
					that._value = this.getValue();
					that.fireValueChange();
				}
			}*/
		});
		this._latlngBox = new sap.ui.commons.TextField({
			width : "150px"/*,
			change : function(oControlEvent){
				if(that._value!= this.getValue()){
					that._value = this.getValue();
					that.fireValueChange();
				}
			}*/
		});
		this._lookupButton = new sap.ui.commons.Button({
			text : "Lookup",
			press : function(oControlEvent){
				L.mapbox.accessToken = "token_goes_here";
				var geocoder = L.mapbox.geocoder("mapbox.places-v1");
	    		var location = that._lookupBox.getValue();
	    		geocoder.query(location, function(t){
	    			return function(err,data){
	    				if(data && data.results && data.results.features){
	    					that._oldValue = that.getValue();
	    					that._tp.destroyContent();
	    					that._tp.destroyButtons();
	    					
	    					var myModel = new sap.ui.model.json.JSONModel();
	    					myModel.setData({
	    						features: data.results.features
	    						//headers : headers
	    					});
	    					var featureTable = new sap.ui.table.Table({
	    						width : "100%",
	    						//title : "Choose Location",
	    						selectionMode: sap.ui.table.SelectionMode.Single,
	    						noDataText : "No locations found",
	    						rowSelectionChange : function(features){
	    							return function(oControlEvent){
	    								var selectedFeature = features[oControlEvent.getParameter("rowIndex")];
	    								that._value = String(selectedFeature.center);
	    		    					that._latlngBox.setValue(that._value);
	    		    					that.fireValueChange();
	    							};
	    						}(data.results.features),
	    						visibleRowCount : 5,
	    						navigationMode : sap.ui.table.NavigationMode.Scrollbar
	    					});
	    					featureTable.setModel(myModel);
	    					featureTable.bindRows("/features");
	    					var uiCol = new sap.ui.table.Column({
	    						label: new sap.ui.commons.Label({text : "Location"}),
	    						template: new sap.ui.commons.TextView({}).bindProperty("text", "place_name")
	    					});
	    					featureTable.addColumn(uiCol);
	    					that._tp.addContent(featureTable);
	    					
	    					that._tp.addButton(new sap.ui.commons.Button({
	    						text : "Ok",
	    						press : function(oControlEvent){
	    							that._tp.close(false);
	    							that._tp.fireClose();
	    						}
	    					}));
	    					that._tp.addButton(new sap.ui.commons.Button({
	    						text : "Cancel",
	    						press : function(oControlEvent){
	    							that.setValue(that._oldValue);
	    							that._tp.close(false);
	    							that._tp.fireClose();
	    						}
	    					}));
	    					that._tp.open(
	    						sap.ui.core.Popup.Dock.EndTop,
	    						sap.ui.core.Popup.Dock.BeginBottom
	    					);
	    					
	    					//var bestResult = data.results.features[0];
	    					//alert(data.results.features.length+"\n\n" + JSON.stringify(bestResult));
	    					//alert(JSON.stringify(bestResult2));
	    					
	    				}else{
	    					alert("No results found for your search criteria.");
	    				}
	    				
	    				
	    				if(data.lbounds){
	    		    		//that._map.fitBounds(data.lbounds);
	    		    	}else if(data.latlng){
	    		    		//that._map.setView([data.latlng[0],data.latlng[1]],13);
	    		    	}
	    			};
	    		}(this));
			}
		});
		this._tp =  new sap.ui.ux3.ToolPopup({
			modal : true,
			opener : this._lookupButton,
			close : function(oControlEvent){
				this.destroyContent();
				this.destroyButtons();
			}
		});
		this._row1.addContent(this._lookupBox);
		this._row1.addContent(this._lookupButton);
		this._row2.addContent(this._latlngBox);
		this.addContent(this._row1);
		this.addContent(this._row2);
	},
	renderer : {}
});
