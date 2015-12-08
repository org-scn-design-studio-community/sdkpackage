sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.databound.MultiLevelDropDownPropertyPage",  function() {

	var that = this;
	
	this._selChar 			= "";
	this._content 			= "";
	this._metadata 			= {};
	this._selMesure			= "";
	this._colorClass		= "";
	this._replaceNotAssign	= "";
	
	this.comboSelMesure 	= "";
	this.comboSelChar 		= "";
	
	this.inputRepNotAssign	= "";
	
	var selKeyfigStruc		= "";
	
	this.componentSelected = function(){
		this.updateProps();
	};

	this.init = function() {
		// Init
		
		this._content = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});

//		--- Sel Char --
		this.comboSelChar = new sap.ui.commons.ComboBox("comboSelChar");
		
		this.comboSelChar.attachChange(function(){
			that.selChar(that.comboSelChar.getSelectedKey());
			that.firePropertiesChanged(["selChar"]);
		});
		
		this.comboSelChar.setTooltip("Select the Dropdown characteristic");
		
		this.comboSelChar.setDisplaySecondaryValues(true);

		this._content.addContent(new sap.ui.commons.TextView({text : "Select the Dropdown characteristic"}));
		this._content.addContent(this.comboSelChar);
		
		//---- MESURE ----
		this.comboSelMesure = new sap.ui.commons.ComboBox("comboSelMesure");
		
		this.comboSelMesure.attachChange(function(){
			that.selMesure(that.comboSelMesure.getSelectedKey());
			that.firePropertiesChanged(["selMesure"]);
		});
		
		this.comboSelMesure.setTooltip("Select a Mesure");
		
		this.comboSelMesure.setDisplaySecondaryValues(true);

		this._content.addContent(new sap.ui.commons.TextView({text : "Select a Mesure"}));
		this._content.addContent(this.comboSelMesure);
		
		// ----- Not assigned node text replacement  -----
		this.inputRepNotAssign = new sap.ui.commons.TextField("inputRepNotAssign");
		this.inputRepNotAssign.attachChange(function(){
			that.notAssignedText(that.inputRepNotAssign.getValue());
			that.firePropertiesChanged(["notAssignedText"]);
		});
		
		this._content.addContent(new sap.ui.commons.TextView({text : "Replace text for the Not Assigned node"}));
		this._content.addContent(this.inputRepNotAssign);
		
		// ----- JSON Color coding -----
		this._content.addContent(new sap.ui.commons.TextView({text : "JSON Color Range"}));
		this.textAreaColorClass = new sap.ui.commons.TextArea("textAreaColorClass");
		this.textAreaColorClass.setCols(40);
		this.textAreaColorClass.setRows(20);
		
		this.textAreaColorClass.attachChange(function(){
			that.colorClass(that.textAreaColorClass.getValue());
			that.firePropertiesChanged(["colorClass"]);
		});
		
		this._content.addContent(this.textAreaColorClass);
		
		this._content.placeAt($("#content"));
	
		this.updateProps();
	};
	
	this.updateProps = function(){

		this.comboSelChar.removeAllItems();
		this.comboSelMesure.removeAllItems();
		
		var apsCharList = jQuery.parseJSON(this.callRuntimeHandler("getApsCharList"));

		for(var i=0;i<apsCharList.length;i++){

			this.comboSelChar.addItem(new sap.ui.core.ListItem({
				key : apsCharList[i].key,
				text: apsCharList[i].text,
				additionalText : apsCharList[i].key 
			}));
		}
		
		var apsMesureList = jQuery.parseJSON(this.callRuntimeHandler("getApsMesureList"));

		for(var i=0;i<apsMesureList.length;i++){

			this.comboSelMesure.addItem(new sap.ui.core.ListItem({
				key : apsMesureList[i].key,
				text: apsMesureList[i].text,
				additionalText : apsMesureList[i].key 
			}));
		}
		
		this.comboSelMesure.setSelectedKey(this._selMesure);
		this.comboSelChar.setSelectedKey(this._selChar);
	}
	
	
	this.selChar = function(value){
		if( value === undefined){
			return this._selChar;
		}else{
			this._selChar = value;
			that.comboSelChar.setSelectedKey(value);
			return this;
		}
	};
	
	this.selMesure = function(value){
		if( value === undefined){
			return this._selMesure;
		}else{
			this._selMesure = value;
			that.comboSelMesure.setSelectedKey(value);
			return this;
		}
	};
	

	/* SDK-Provided Metadata Property
	 * Cannot use default getter/setter, since we can return dummy data when no Datasource is bound
	 */
	this.metadata = function(value) {
		try{
			if (value === undefined) {
				return this._metadata;	
			} else {
				this._metadata = value;
				return this;
			}
		}catch(e){
			alert(e);
		}
	};
	
	this.colorClass = function(value){
		if(value===undefined){
			return this._colorClass;
		}else{
			this._colorClass = value;
			that.textAreaColorClass.setValue(value);
			return this;
		}
	};
	
	this.replaceNotAssigned = function(value){
		if(value===undefined){
			return this._replaceNotAssign;
		}else{
			this._replaceNotAssign = value;
			that.inputRepNotAssign.setValue(value);
			return this;
		}
	};
	
	this.getMetadataAsString = function() {
		return JSON.stringify(this.metadata());
	};
	
});