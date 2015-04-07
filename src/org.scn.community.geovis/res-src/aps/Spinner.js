/*
 * Spinner Control
 */
sap.ui.commons.layout.HorizontalLayout.extend("org.scn.community.aps.Spinner",{
	metadata : {                             
        properties : {
        	value : 0.0,
        	min : 0.0,
        	max : 100.0
        },
	    events : {
	    	valueChange : {}
	    }
	 },
	 setMin : function(f){
		this._min = f; 
	 },
	 setMax : function(f){
		 this._max = f;
	 },
	 getMax : function(){
		 return this._max;
	 },
	 getMin : function(){
		 return this._min;
	 },
	 getValue : function(){
		return this._value;
	 },
	 setValue : function(v){
		 this._value = v;
		 this.renderComp();
	 },
	 renderComp : function(){
		if(!isNaN(this._value)){
			this._textBox.setValue(this._value);
		}
	 },
	init : function(){
		var that = this;
		this._textBox = new sap.ui.commons.TextField({
			width : "50px",
			change : function(oControlEvent){
				if(that._value!= this.getValue()){
					that._value = this.getValue();
					that.fireValueChange();
				}
			}
		});
		this._dec = new sap.ui.commons.Button({
			text : "-",
			press : function(oControlEvent){
				if(isNaN(that._value)) that._value = 0;
				that._value--;
				that._textBox.setValue(that._value);
				that.fireValueChange();
			}
		});
		this._inc = new sap.ui.commons.Button({
			text : "+",
			press : function(oControlEvent){
				if(isNaN(that._value)) that._value = 0;
				that._value++;
				that._textBox.setValue(that._value);
				that.fireValueChange();
			}
		});
		this.addContent(this._textBox);
		this.addContent(this._dec);
		this.addContent(this._inc);
	},
	renderer : {}
});
