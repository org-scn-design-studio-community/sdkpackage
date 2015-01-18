sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.datasource.BYODataPropertyPage",  function() {
	var that = this;
	var _data = [];
	var _dataString = "";
	this._tileConfig = []; 
	this._selectedIndex = -1;
	this.componentSelected = function(){
		this.updateProps();
	};
	this.updateProps = function(){
		this.dataContents.setValue(this.data());
	};
	this.dataContentsChanged = function(){
		var d = this.dataContents.getValue();
		_data = [];
		_dataString = d.replace(/\|/g,"\n");
		var sd = _dataString.split("\n");
		for(var i=0;i<sd.length;i++){
			_data.push(sd[i].split(","));
		}
		this.firePropertiesChanged(["data"]);
	};
	this.init = function(){
		// Init
		this._content = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		this.dataLabel = new sap.ui.commons.TextView({text : "Data (CSV)"});
		this.dataContents = new sap.ui.commons.TextArea({
			value : this.data(),
			design : sap.ui.core.Design.Monospace,
			rows : 10,
			width : "100%",
			wrapping : sap.ui.core.Wrapping.Off
		});
		this.dataContents.attachChange(this.dataContentsChanged, this);
		this._content.addContent(this.dataLabel);
		this._content.addContent(this.dataContents);
		this._content.placeAt($("#content"));
		
		this.updateProps();
	};
	this.data = function(s){
		if(s===undefined){
			var d = [];
			for(var i=0;i<_data.length;i++){
				var r = _data[i].join(",");
				d.push(r);
			}
			return d.join("\n");
		}else{
			_data = [];
			_dataString = s.replace(/\|/g,"\n");
			var sd = _dataString.split("\n");
			for(var i=0;i<sd.length;i++){
				_data.push(sd[i].split(","));
			}
			this.updateProps();
			return this;
		}
	};
});