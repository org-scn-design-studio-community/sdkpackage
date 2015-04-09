sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.databound.jpd3hierPropertyPage",  function() {

	var that = this;  // lazy loading
	"use strict";	// use HTML strict mode so that no variable can be used without declaring it !! Fault prevention
	
	this.rendered = false; // gives feedbaack of propertysheet is initialized
	
	// local APS_variables - analog to contribution.xml properties
	this.aps_s_dimHierarchy = ""; // what is the name/value of the dimension that hosts the Hierarchy
	this.aps_s_kfBubbleSize = ""; // what is the name/value of the keyfigure out of the measure dimension that represents the size of the bubbles
	this.aps_s_kfBubbleColor = ""; // what is the name/value of the keyfigure out of the measure dimension that represents the alerterColors of the bubbles

	this._ui_combo_dimHierarchy = null; // Combobox for choosing Hierarchy Dimension
	this._ui_combo_kfBubbleSize = null; // Combobox for choosing Keyfigure Size Name of Measure Dimensions
	this._ui_combo_kfBubbleColor = null; // Combobox for choosing Keyfigure Alerter Color Name of Measure Dimensions
	
	
	this._content = null;
	
	// when component is getting selected the properties of the components are refreshed and visualized
	this.componentSelected = function(){
		this.updateProps();
	};
	
	
	// function refreshes all settings for the component
	this.updateProps = function(){
		// Initialize Comboboxes
		this._ui_combo_dimHierarchy.removeAllItems();
		this._ui_combo_dimHierarchy.setSelectedKey(this.aps_s_dimHierarchy);
		this._ui_combo_kfBubbleSize.removeAllItems();
		this._ui_combo_kfBubbleSize.setSelectedKey(this.aps_s_kfBubbleSize);
		this._ui_combo_kfBubbleColor.removeAllItems();
		this._ui_combo_kfBubbleColor.setSelectedKey(this.aps_s_kfBubbleColor);
		
		// call Methode from actual Javascriptfile d3hier_component.js to get metadatainformations
		var strMetadata = that.callRuntimeHandler("getMetadataAsString");
		
		// Add defaulttext to the combobox
		this._ui_combo_dimHierarchy.addItem(new sap.ui.core.ListItem({
			key : "NONE",
			text: "[Select the Hierarchy Dimension]",
			additionalText : "Mandatory" 
		}));
		this._ui_combo_kfBubbleSize.addItem(new sap.ui.core.ListItem({
			key : "NONE",
			text: "[Select the Keyfigure for the Bubblesize out of the Measure-Dimension]",
			additionalText : "Mandatory" 
		}));
		this._ui_combo_kfBubbleColor.addItem(new sap.ui.core.ListItem({
			key : "NONE",
			text: "[Select the Keyfigure for the AlerterColours out of the Measure-Dimension]",
			additionalText : "Optional" 
		}));
		

		if (strMetadata) {
			this._metadata = jQuery.parseJSON(strMetadata);
			if (this._metadata) {
				for(var i=0;i<this._metadata.dimensions.length;i++){
					var dim = this._metadata.dimensions[i];
					// Befuellen der Hierarchy Dimensionen - aber keine Measures miteinbeziehen
					if (!dim.hasOwnProperty("containsMeasures")) {
						this._ui_combo_dimHierarchy.addItem(new sap.ui.core.ListItem({
							key : dim.key,
							text: dim.text,
							additionalText : dim.key 
						}));
					}
					// Befuellen der Keyfigure Dimension
					if (dim.hasOwnProperty("containsMeasures")) {
						// iterate over all key figures and show values here
						for(var kf=0;kf<dim.members.length;kf++){
							var kfElem = dim.members[kf];
							this._ui_combo_kfBubbleSize.addItem(new sap.ui.core.ListItem({
								key : kfElem.key,
								text: kfElem.text,
								additionalText : kfElem.key 
							}));
							
							this._ui_combo_kfBubbleColor.addItem(new sap.ui.core.ListItem({
								key : kfElem.key,
								text: kfElem.text,
								additionalText : kfElem.key 
							}));
						}
					}
				} // all dimensions have been traversed
			} // check if parse of strMetadata was sucessful and this._metadata is filled coorectly
		} // check if strMetadata is filled
	};
	
	this.init = function() {
		// Choose UI5 Layout and initialize it
		this._content = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		
		// generate comboboxes
		this._ui_combo_dimHierarchy = new sap.ui.commons.ComboBox("ui_combo_Dim_Hierarchy"); // HierarchyDimension
		this._ui_combo_kfBubbleSize = new sap.ui.commons.ComboBox("ui_combo_kfBubbleSize"); // KeyfigureDimension
		this._ui_combo_kfBubbleColor = new sap.ui.commons.ComboBox("ui_combo_kfBubbleColor"); // KeyfigureDimension
		
		// add event listeners
		this._ui_combo_dimHierarchy.attachChange(function(){
			that.aps_s_dimHierarchy = that._ui_combo_dimHierarchy.getSelectedKey();
			that.firePropertiesChanged(["dimHierarchy"]);
		});
		this._ui_combo_kfBubbleSize.attachChange(function(){
			that.aps_s_kfBubbleSize = that._ui_combo_kfBubbleSize.getSelectedKey();
			that.firePropertiesChanged(["kfBubbleSize"]);
		});
		this._ui_combo_kfBubbleColor.attachChange(function(){
			that.aps_s_kfBubbleColor = that._ui_combo_kfBubbleColor.getSelectedKey();
			that.firePropertiesChanged(["kfColBub"]);
		});
		
		// Set Tooltips for UI5 Elements
		this._ui_combo_dimHierarchy.setTooltip("Choose Hierarchy Dimension");
		this._ui_combo_kfBubbleSize.setTooltip("Choose Keyfigure for Balloon Size out of Measure Dimension (mandatory)");
		this._ui_combo_kfBubbleColor.setTooltip("Choose Keyfigure for Alerter Color out of Measure Dimension (optional)");
		
		// enables display of secondary Text / additionalText
		this._ui_combo_dimHierarchy.setDisplaySecondaryValues(true);
		this._ui_combo_kfBubbleSize.setDisplaySecondaryValues(false);
		this._ui_combo_kfBubbleColor.setDisplaySecondaryValues(true);
		
		// Attach UI5 Textelement and place it in front of combobox
		this._content.addContent(new sap.ui.commons.TextView({text : "Hierarchy Dim."}));
		this._content.addContent(this._ui_combo_dimHierarchy);
		this._content.addContent(new sap.ui.commons.TextView({text : "KF bubble size (mand.)"}));
		this._content.addContent(this._ui_combo_kfBubbleSize);
		this._content.addContent(new sap.ui.commons.TextView({text : "KF buble alerter (opt.)"}));
		this._content.addContent(this._ui_combo_kfBubbleColor);
		
		// attach filled content object do div with class content
		this._content.placeAt($("#content"));
		
		// refresh values of the defined elements
		this.updateProps();
		this.rendered = true;
		
	};
	
	
	/****************** Start - getter and setter - Start *********************/
	/* this.name should be the same value as in thecontribution.xml defined as id */
	this.dimHierarchy = function(value){
		if( value === undefined){
			/* getter */
			return this.aps_s_dimHierarchy;
		}else{
			/* setter */
			this.aps_s_dimHierarchy = value;
			// set Dropdownbox to a specified value
			if(that.rendered) that._ui_combo_dimHierarchy.setSelectedKey(value);
			return this;
		}
	};
	
	this.kfBubbleSize = function(value){
		if( value === undefined){
			/* getter */
			return this.aps_s_kfBubbleSize;
		}else{
			/* setter */
			this.aps_s_kfBubbleSize = value;
			// set Dropdownbox to a specified value
			if(that.rendered) that._ui_combo_kfBubbleSize.setSelectedKey(value);
			return this;
		}
	};
	
	this.kfColBub = function(value){
		if( value === undefined){
			/* getter */
			return this.aps_s_kfBubbleColor;
		}else{
			/* setter */
			this.aps_s_kfBubbleColor = value;
			// set Dropdownbox to a specified value
			if(that.rendered) that._ui_combo_kfBubbleColor.setSelectedKey(value);
			return this;
		}
	};
	/******************** End - getter and setter - End ***********************/
	
});