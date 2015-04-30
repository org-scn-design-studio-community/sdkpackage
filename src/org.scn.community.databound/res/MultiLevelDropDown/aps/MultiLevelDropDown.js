sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.databound.MultiLevelDropDownPropertyPage",  function() {

	var that = this;
	
	this._selChar 			= "";
	this._content 			= "";
	this._metadata 			= {};
	this._selWeight			= "";
	this._colorClass		= "";
	
	this.comboSelWeight 	= "";
	this.comboSelChar 		= "";
	
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
		
//		--- Weight --
		this.comboSelWeight = new sap.ui.commons.ComboBox("comboSelWeight");
		
		this.comboSelWeight.attachChange(function(){
			that.selWeight(that.comboSelWeight.getSelectedKey());
			that.firePropertiesChanged(["selWeight"]);
		});
		
		this.comboSelWeight.setTooltip("Select the weight KF");
		
		this.comboSelWeight.setDisplaySecondaryValues(true);

		this._content.addContent(new sap.ui.commons.TextView({text : "Select Weight"}));
		this._content.addContent(this.comboSelWeight);
		
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
	
	this.updateProps = function(value){
		var compMeta = this.callRuntimeHandler("getDimensions");
		var dims = jQuery.parseJSON(compMeta);
		
		this.comboSelChar.removeAllItems();
		this.comboSelChar.setSelectedKey(this._selChar);
		
		this.comboSelWeight.removeAllItems();
		this.comboSelWeight.setSelectedKey(this._selWeight);
		
		selKeyfigStruc = "";
		
		var dims = jQuery.parseJSON(compMeta);
		for(var i=0;i<dims.length;i++){
			var dim = dims[i];
			
			if (dim.hasOwnProperty('containsMeasures')) {
				
				selKeyfigStruc = dim.key;
				this.callRuntimeHandler("setKeyFigStrucName", selKeyfigStruc);
				
				for(var j=0 ; j<dim.members.length ; j++){
					var member = dim.members[j];
					
					this.comboSelWeight.addItem(new sap.ui.core.ListItem({
						key : member.key,
						text: member.text,
						additionalText : member.key 
					}));
				}
			} else {
				this.comboSelChar.addItem(new sap.ui.core.ListItem({
					key : dim.key,
					text: dim.text,
					additionalText : dim.key 
				}));
			}
		}
	}
	
	
	this.selChar = function(value){
		//alert("Prop.selChar()");
		if( value === undefined){
			return this._selChar;
		}else{
			this._selChar = value;
			that.comboSelChar.setSelectedKey(value);
			return this;
		}
	};
	
	this.selWeight = function(value){
		//alert("Prop.selChar()");
		if( value === undefined){
			return this._selWeight;
		}else{
			this._selWeight = value;
			that.comboSelWeight.setSelectedKey(value);
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
	
	this.getMetadataAsString = function() {
		return JSON.stringify(this.metadata());
	};
});