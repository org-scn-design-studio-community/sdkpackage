	//%DEFINE-START%
var scn_pkg="org.scn.community.";if(sap.firefly!=undefined){scn_pkg=scn_pkg.replace(".","_");}
define([
	"sap/designstudio/sdk/component",
	"./ScalingDataSourceSpec",
	"../../../"+scn_pkg+"shared/modules/component.core",
	"../../../"+scn_pkg+"shared/modules/component.basics",
	"../../../"+scn_pkg+"shared/modules/component.datasource"
	
	],
	function(
		Component,
		spec,
		core,
		basics
	) {
//%DEFINE-END%

	var myComponentData = spec;

	ScalingDataSource = function () {

		var that = this;

		this.init = function() {
			/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
			var k = 0;
			/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
		};

		this.afterUpdate = function() {
			/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
			this.fireUpdate(false);
			/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
		};

		org_scn_community_component_Core(that, myComponentData);

		/* COMPONENT SPECIFIC CODE - START METHODS*/

		this.data = function(value) {
			if (value === undefined) {
				return "";
			} else {
				if (value) {
					this.buffer = value;
					if (!this.buffer.formattedData) {
						this.buffer.formattedData = this.buffer.data;
					}
				}
				return this;
			}
		};

		this.scalingSelection = function(value) {
			if (value === undefined) {
				return that._aScaleSelection;
			} else {
				if (value) {
					that._aScaleSelection = [];
					value.selection.forEach(function(valueLoop, index) {
						if (Array.isArray(valueLoop)) {
							that._aScaleSelection[index] = valueLoop;
						} else if (valueLoop == -1) {
							that._aScaleSelection[index] = undefined;
						} else {
							that._aScaleSelection[index] = [valueLoop];
						}
					});
				}
				return this;
			}
		};

		this.addResult = function (result, index, tuple) {
			var scale = 1.0;
			if (that._aScaleSelection && this.tupleMatches(tuple, that._aScaleSelection)) {
				scale = that.getScalingFactor();
			}

			var oldValue = this.buffer.data[index];
			var newValue = oldValue * scale;

			result.data.push(newValue);
			result.formattedData.push(""+newValue);
		};
		/* COMPONENT SPECIFIC CODE - END METHODS*/

		return that;
	};

//%INIT-START%
myComponentData.instance = ScalingDataSource;
sap.designstudio.sdk.DataBuffer.subclass(myComponentData.fullComponentName, myComponentData.instance);
});