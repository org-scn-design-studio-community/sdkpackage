sap.designstudio.sdk.DataBuffer.subclass("com.sap.sample.scalingdatasource.ScalingDataSource", function() {

	var that = this;

	this.data = function(value) {
		if (value === undefined) {
			return "";
		} else {
			if (value) {
				this.buffer = value;
				if (!this.buffer.formattedData) {
					this.buffer.formattedData = this.buffer.data;
				}
				this.fireUpdate(false);
			}
			return this;
		}
	};

	var _aScaleSelection;

	this.scalingSelection = function(value) {
		if (value === undefined) {
			return _aScaleSelection;
		} else {
			if (value) {
				_aScaleSelection = [];
				value.selection.forEach(function(value, index) {
					if (Array.isArray(value)) {
						_aScaleSelection[index] = value;
					} else if (value == -1) {
						_aScaleSelection[index] = undefined;
					} else {
						_aScaleSelection[index] = [value];
					}
				});
			}
			return this;
		}
	};

	var _scaling = 1.0;

	this.scalingFactor = function(value) {
		if (value === undefined) {
			return _scaling;
		} else {
			_scaling = value;
			this.fireUpdate(false);
			return this;
		}
	};

	this.addResult = function(result, index, tuple) {
		var scale = 1.0;
		if (_aScaleSelection && this.tupleMatches(tuple, _aScaleSelection)) {
			scale = _scaling;
		}
		result.data.push(this.buffer.data[index] * scale);
		result.formattedData.push(this.buffer.formattedData[index]);
	}
});
