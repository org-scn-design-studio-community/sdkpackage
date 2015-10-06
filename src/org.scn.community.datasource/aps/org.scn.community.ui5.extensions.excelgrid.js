/**
 * Based on work by Alessandro Spadoni
 * http://scn.sap.com/community/developer-center/front-end/blog/2013/12/16/excel-like-custom-grid-control-in-sapui5-openui5
 */
var propertyPageHandlerRegistry = propertyPageHandlerRegistry || [];
/**
 * Register Handler
 */
propertyPageHandlerRegistry.push({
	id : "excelgrid",
	serialized : true,
	setter : function(property, value){
		var newValue = undefined;
		if(value && value !=""){
			newValue = jQuery.parseJSON(value);	
		}else{
			// Blank
		}	
		this["cmp_"+property].setValue(newValue);
	},
	getter : function(property, control){
		var arrayValue = control.getValue();
		newValue = JSON.stringify(arrayValue);
		return newValue;
	},
	createComponent : function(property, propertyOptions, changeHandler){
		var component = new org.scn.community.aps.ExcelGrid({
			options : {
				colHeaders : true,
				undo : false,
				//minSpareRows: 1,
				minRows : 1,
				minCols : 2,
				allowInsertColumn : true,
				allowInsertRow : true,
			    manualColumnResize: true,
			    manualRowResize: true,
				rowHeaders : true,
				height : 400,
				contextMenu : ["row_above", "row_below", "col_left", "col_right", "remove_row", "remove_col", "undo", "redo"],
				readOnly : false
			},
			content : "<div></div>"
			/*title : new sap.ui.commons.Title({	
				text: propertyOptions.desc
			}),
			showCollapseIcon : false*/
		});
		component.attachValueChange(changeHandler ,this);
		return component;
	}
});
/**
 * Create UI5 Extension
 */
sap.ui.core.HTML.extend("org.scn.community.aps.ExcelGrid", {  
    metadata: {  
        properties :  {  
            "options": {
            	type : "object",
            	defaultValue : {}
            },
            "value": {
            	type : "object",
            	defaultValue : [["a",1],["b",2]]
            },
            //"content": {type : "string", defaultValue : "<div style='width:100%;'></div>"},  
            //"preferDOM": {type : "boolean", defaultValue : false}  
        },
        events : {
	    	valueChange : {}
	    }        
    },
	setValue : function(a){
		sap.ui.core.Control.prototype.setProperty.apply(this,["value",a]);
		//var incoming = JSON.stringify(a);
		//var original = JSON.stringify(this.getValue());
		//if(incoming != original){
		if(this.ht) this.ht.loadData(a);
		//}
		return this;
	},
    afterRenderHandler : function(oControlEvent){
    	var container = $("#" +this.getId());
    	if(this.ht) return;
		var opts = this.getOptions();
        opts.data = jQuery.parseJSON(JSON.stringify(this.getValue()));
        var that = this;
        var rowColHandler = function(index,amount){
    		var newData = this.getData();
        	that.setValue(newData);
        	that.fireValueChange();
    	}
        //opts.afterCreateRow = rowColHandler;
        //opts.afterCreateCol = rowColHandler;
        //opts.afterRemoveRow = rowColHandler;
        //opts.afterRemoveCol = rowColHandler;
        opts.afterChange = function(changes, source) {
        	if(source!="loadData"){
        		var newData = this.getData();
            	that.setValue(newData);
            	that.fireValueChange();
        	}
        };
		this.ht = new Handsontable(container[0],opts);
		this.ht.updateSettings({
			contextMenu : {
				callback : this.contextHandler
			}
		});
    },
    contextHandler : function(key, options){
    	alert(key);
    },
    init: function(){
    	this.attachAfterRendering(this.afterRenderHandler, this);
    },  
    getInstance: function(){  
        return this.$().handsontable('getInstance');  
    },  
    renderer: "sap.ui.core.HTMLRenderer",
    needsLabel : function() {
		return false;
	}
});  