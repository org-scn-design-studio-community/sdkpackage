/**
 * List of Values Handler (Special type)
 */
define([], function () {
	sap.ui.commons.ComboBox.extend("org.scn.community.aps.ListofValues", {
		metadata : {
			properties : {
				propertyName : {
					type : "String"
				}
			}
		},
		setPropertyName : function(s){
			this._propertyName = s;
			if(propertyPage.rendered) this.notifyComplete();
		},
		getPropertyName : function(){
			return this._propertyName;
		},
		init : function(){
			propertyPage.registerComplete(this);
			if(propertyPage.rendered) this.notifyComplete();
		},
		notifyComplete : function(){
			if(this._propertyName && propertyPage[this._propertyName]) {
				propertyPage["cmp_" + this._propertyName].attachValueChange(this.updateList,this);
				this.updateList();
				//propertyPage["cmp_" + this._propertyName].detachValueChange(this.updateList,this);
			}else{
				
			}
		},
		updateList : function(){
			this.destroyItems();
			if(this._propertyName && propertyPage[this._propertyName]) {
				var otherProperty = propertyPage[this._propertyName]();
				var a = [];
				try {
					if(otherProperty && otherProperty != "") a = jQuery.parseJSON(otherProperty);
					if(a && a.length){
					for(var i=0;i<a.length;i++){
						var b = a[i];
						if(b.id){
							var newItem = new sap.ui.core.ListItem({
								key : b.id,
								text : b.id
							});
							this.addItem(newItem);
						}
					}
					}
				}catch(e){
					alert("Problem evaluating " + this._propertyName + "\n\n" + e);
				}
			}else{
				//alert("Failed to attach listener to " + this._propertyName);
			}
			
		},
		renderer : {}
	});
	
	return {
		id : "listofvalues",
		// serialized : true,
		setter : function (property, value) {
			// var newValue = jQuery.parseJSON(value);
			this["cmp_" + property].setValue(value);
		},
		getter : function (property, control) {
			//var arrayValue = control.getValue();
			//newValue = JSON.stringify(arrayValue);
			return control.getValue();
		},
		createComponent : function (property, propertyOptions, changeHandler) {
			var component = new org.scn.community.aps.ListOfValues({
				width : "100%"
			});
			component.attachValueChange(changeHandler, this);
			return component;
		}
	};
});
