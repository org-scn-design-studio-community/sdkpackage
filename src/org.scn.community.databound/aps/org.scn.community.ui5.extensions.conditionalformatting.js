/**
 * CC BY-NC-SA License
 * Conditional Formatting APS Control is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
 * Based on a work at http://github.com/org-scn-design-studio-community/sdkpackage/tree/master/src/org.scn.community.databound/res/AdvancedDataTable 
 *
 */
var propertyPageHandlerRegistry = propertyPageHandlerRegistry || [];
/**
 * Register Handler
 */
propertyPageHandlerRegistry.push({
	id : "conditionalformatting",
	setter : function(property, value){
		try{
		var newValue = jQuery.parseJSON(value);
		// this["cmp_"+property].setValue(newValue);
		this["cmp_"+property].getModel().setData(newValue);
		}catch(e){
			alert("Problem setting Conditional Formatting value.\n\n" + e);
		}
	},
	getter : function(property, control){
		//var arrayValue = control.getValue();
		var arrayValue = control.getModel().getData();
		newValue = JSON.stringify(arrayValue);
		alert(newValue);
		return newValue;
	},
	createComponent : function(property, propertyOptions, changeHandler){
		var component = new org.scn.community.aps.ConditionalFormatting({
			width : "100%",
			title : new sap.ui.commons.Title({
				text: propertyOptions.desc
			}),
			showCollapseIcon : false
		});
		component.attachValueChange(changeHandler ,this);
		return component;
	}
});
/**
 * Create UI5 Extension
 */
sap.ui.commons.layout.VerticalLayout.extend("org.scn.community.aps.ConditionalFormatting", {
	renderer : {},
	metadata : {                             
        properties : { },
	    events : {
	    	valueChange : {}
	    }
	},
	notifyDataChange : function(){
		// this.updateTable();
	},
	updateTable : function(){
		var defaults = {
			// Conditional Formatting Defaults
		}
		try{
		// alert(JSON.stringify(this._value + "\n\n" + this.cols));
		this.getModel().setData({ruleData: this.getValue()});
		// this.columnModel.setData({columnData: this._value});
		// this.columnTable.bindRows("/columnData");
		
		}catch(e){
			alert("Error when updating table: \n\n"+e);
		}
	},
	buildColumns : function(oControlEvent){
		/*var a = [];
		for(var i=0;i<this.cols.length;i++){
			a.push({
				targets : this.cols[i].targets,
				//targets : i,	
				title : this.cols[i].title,
				orderable : this.cols[i].orderable,
				searchable : this.cols[i].searchable
			});
		};*/
//		/alert(JSON.stringify(a));
		// this._value = a;
		//this._value = this.cols;
		this.fireValueChange();
	},
	changeHandler : function(oControlEvent){
		this.fireValueChange();
	},
	init : function(){
		var that = this;
		try{
		propertyPage.registerDataComponent(this);
		this.setModel(new sap.ui.model.json.JSONModel());
		this.repeater = new sap.ui.commons.RowRepeater({
			title :  new sap.ui.core.Title({
				text : "Rules",
				icon : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA1UlEQVR4nI2SwXXCMBBE//DcCBWE9GJ3AA9SQm7cKCEY3IFdS+KXAtLK5CBLFrYOntO81czurCQ1TWObDJJSJfFAhmGobPd9zzZIqhKPxHTCIDgaxbrddSOw29g7oWQI7b0qG6DKVBEnL1UZJoP+FLbw3vqccvtmnc8Aku/310iiDC0PqqJsDmgj5cEmg/dzybeMt215wvV7SnV953L5BWy37dvh8BEGjONXSLdbRAhSg6SwguPrvVyr1qbyclDXtbfh8fiZJzyfY5yu1H/+R4DXN7wN/6A8hkdTvaNHAAAAAElFTkSuQmCC"
			})
		});
		var matrix = new sap.ui.commons.layout.MatrixLayout({
			width : "100%"
		});
		var addButton = new sap.ui.commons.Button({
			text : "Add"
		});
		addButton.attachPress(function(oControlEvent){
			var d = this.getModel().getData().push({});
			//this.getModel().setData(d);
			this.getModel().refresh();
			this.changeHandler();
		},this);
		this.addContent(addButton);
		this.addContent(matrix);
		matrix.bindAggregation("rows","/",function(sId, oContext){
			var changeHandler = function(){
				that.changeHandler.apply(that, arguments);
			}
			var row = new sap.ui.commons.layout.MatrixLayoutRow();
			var textField = new sap.ui.commons.TextField(sId, {
				value : "{name}",
				change : changeHandler
			});
			var nameCell = new sap.ui.commons.layout.MatrixLayoutCell({
				content: [textField],
			});
			row.addCell(nameCell);
			var colorField2 = new org.scn.community.aps.ColorPicker2({
				value : "{color}"
			});
			var colorCell = new sap.ui.commons.layout.MatrixLayoutCell({
				content: [colorField2],
			});			
			row.addCell(colorCell);
			return row;
		});
		}catch(e){
			alert("Problem with Conditional Formatting Component:\n\n" + e);
		}		
	},	 
	renderer : {},
	needsLabel : function() {
		return false;
	}
});