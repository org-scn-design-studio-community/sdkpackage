sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.databound.MultiLevelDropDownPropertyPage",  function() {

	var that = this;
	
	this._selChar 		= "";
	this.comboSelChar 	= "";
	this._content 		= "";
	this._metadata 		= {};
	
	this.componentSelected = function(){
		this.updateProps();
	};

	this.init = function() {
		// Init
		
		this._content = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});

		this.comboSelChar = new sap.ui.commons.ComboBox("comboSelChar");
		
		this.comboSelChar.attachChange(function(){
			that._selChar = that.comboSelChar.getSelectedKey();
			that.firePropertiesChanged(["selChar"]);
		});
		
		this.comboSelChar.setTooltip("Select the Dropdown characteristic");
		
		this.comboSelChar.setDisplaySecondaryValues(true);

		this._content.addContent(new sap.ui.commons.TextView({text : "Source characteristic"}));
		this._content.addContent(this.comboSelChar);
		
		this._content.placeAt($("#content"));
		this.updateProps();
	};
	
	this.updateProps = function(value){
		this.comboSelChar.removeAllItems();
		this.comboSelChar.setSelectedKey(this._selChar);
		
		var compMeta = this.callRuntimeHandler("getDimensions");
		
		var dims = jQuery.parseJSON(compMeta);
		for(var i=0;i<dims.length;i++){
			var dim = dims[i];
			
			this.comboSelChar.addItem(new sap.ui.core.ListItem({
				key : dim.key,
				text: dim.text,
				additionalText : dim.key 
			}));
		}
	}
	
	this.selChar = function(value){
		if( value === undefined){
			return this._selChar;
		} else {
			this._selChar = value;
			that.comboSelChar.setSelectedKey(value);
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
	
	this.getMetadataAsString = function() {
		return JSON.stringify(this.metadata());
	};
});