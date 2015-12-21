/**
 * Base Visualization Class for use in databound D3 (V3) Visualizations.
 */
define(["./VizCoreDatabound","d3"], function(VizCoreDatabound,d3) {
	VizD3.prototype = VizCoreDatabound;
	VizD3.constructor = VizD3;
	function VizD3(options){
		var that = this;
		this.formatter = d3.format(',.2f');			// Make a DS property
		var properties = {
			pollInterval : { 
				value : 250,
				opts : {
					desc : "Resize Polling Interval (ms)",
					cat : "Behavior",
					apsControl : "spinner",
					//noAps : true
				}
			}
		};
		for(var prop in options) properties[prop] = options[prop];
		VizCoreDatabound.call(this,properties);
		this.componentInfo.title = "Visual D3 Component";
		this.componentInfo.icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALESURBVDhPLZL7T5JRGMffP8m1WVtjtZlrs2m/uHJd1rxgknOp/ZJbbhlroaEhXgAxQN8LeAFBQExJhMTNLBPEWyga10rLUHjfF4H3nM6rbp+dPWfn8z3nOWcHA2kTYCwgJM/P1HOuRm6qloazTM5Kn4GKHGddPTRKfURvgOxbJzBAmwE9kY+pkcpNizhnAw1nLuzsJJO3QmhbSIx1+YiBIN71lcJAvI/J29PAgZYzEeW5jWqQMsKUMc9MKDZI6Squ2ibqcGOhyIEC75B01oONBlPne7PQAWkTTJvYpEm8wjej3sFvv7YImuwYO9/6b22QhU7knbJmfnvophck/AmsNZse0W7rpD5KuUU0Gceu1E9hu9eLdwqu/h0XQ86KJAAdKUlF6kFh6s6lo2NNlFWksooPYe07P6n6fnaHvdJboaLiw/ZGCO3oxSB0nZQXpBqK6HuX43/kcXbggFV6f76XrlIXr7RfUhIS3IgHOjKnYxDOcJvd7KuSdKXg5EUpshOM6oBRehPawU1C5idRBstpKmKQiOfUkfxg2iLKdpZlVXcZfVUE6pEdp5XTP4bnokOLCZ12i5CvkVimvzwCtWghCrTp0ZpsTzkiZRSi6S9a+ZtVfowOuWI6b0KnOQ9wAVkyQ8UY1VGyn/O9zGruI1CRTPbH0qqR3SH9Du6J68x7wz1rJAIDrAXSFniggyEJiHSChIwn0gn3JT1+vMtPdftJ1D0C2b0B9DXQX8rYwBEOwm8hItLOE+6A0TeajWF0S8U6ccEmoQ7iGGDM3JY0P9sAl5+HgvJmL/7Mi4eDMt2KWuihJN/I1mWy2k21fCHE84abrTYMJkc5u5CbewqdojbXwEOPocpDVbgMj9x6FKj2kDUestZD1S0RRW2TgkY7Rh+PZ2fr+cDcE/GitsrDey2fCTQ+/kRWOg1CN1+Ilogy2cS1Zvt/xoQxnd26GQEAAAAASUVORK5CYII=";
		this.componentInfo.topics.push({
			title : "Visualization",
			content : "This component is a visualization component.  This means that you have control over cosmetic properties such as Legend, Margins, Plot positioning, zooming, among others."
		});
		/**
		 * Calculates new and old sizes and if different, trigger afterUpdate.
		 */
		this.measureSize = function(that){
			var currentWidth = that.$().outerWidth();
			var currentHeight = that.$().outerHeight();
			if(currentWidth != that._previousWidth || currentHeight != that._previousHeight){
				this.afterUpdate();
			}else{
				// Sizes are the same.  Don't redraw, but poll again after an interval.
				that._poller = window.setTimeout(function(){that.measureSize(that)},that.pollInterval());	
			}
		};
		/**
		 * Fires after Design Studio property updates
		 */
		this.afterUpdate = function() {
			var that = this;
			this._poller = window.setTimeout(function(){that.measureSize(that)},that.pollInterval());
		};
	};
	return VizD3;
});