/**
 * Copyright 2014 Scn Community Contributors
 * 
 * Original Source Code Location:
 *  https://github.com/org-scn-design-studio-community/sdkpackage/
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); 
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at 
 *  
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  
 * Unless required by applicable law or agreed to in writing, software 
 * distributed under the License is distributed on an "AS IS" BASIS, 
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
 * See the License for the specific language governing permissions and 
 * limitations under the License. 
 */
//%DEFINE-START%
var scn_pkg="org.scn.community.";if(sap.firefly!=undefined){scn_pkg=scn_pkg.replace(".","_");}
define([
	"sap/designstudio/sdk/component",
	"./TimeOutSpec",
	"../../../"+scn_pkg+"shared/modules/component.core",
	"../../../"+scn_pkg+"shared/modules/component.basics"
	
	],
	function(
		Component,
		spec,
		core,
		basics
	) {
//%DEFINE-END%

    var myComponentData = spec;

    TimeOut = function () {

        var that = this;

        that.init = function () {
            // define root component

            org_scn_community_basics.fillDummyDataInit(that, that.initAsync);
        };

        that.initAsync = function (owner) {
            var that = owner;
            org_scn_community_component_Core(that, myComponentData);

            /* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
            // that.addStyleClass("scn-pack-?");
            that._jqThis = that.$();
            that.interval_id = undefined;

            that._ownid = that._jqThis[0].id + "_c";

            //add DIV
            that.$().html('<div class="org-scn-Timer" id="' + that._ownid + '"></div>');
            //remember element
            that.$div = document.getElementById(that._ownid);

            /* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
        };

        that.afterUpdate = function () {
            /* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/

            // org_scn_community_basics.resizeContentAbsoluteLayout(that, that._oRoot, that.onResize);

            org_scn_community_basics.fillDummyData(that, that.processData, that.afterPrepare);
        };

        /* COMPONENT SPECIFIC CODE - START METHODS*/

        that.processData = function (flatData, afterPrepare, owner) {
            var that = owner;

            // processing on data
            that.afterPrepare(that);
        };

        that.afterPrepare = function (owner) {
            var that = owner;

            // visualization on processed data
            var timout = that.getTimer();
            var isPeriodic = that.getPeriodic();
            var start = that.getStart();
            var stop = that.getStop();
            var showCounter = that.getCounterVisible();

			var logoff = that.getLogoff();
			var logoffText = that.getLogoffText();

			if(logoff != "") {
				$(window).unload();
				sapbi_Ajax.prototype.submit = function() {
					if(logoffText != "") {
						alert(logoffText);
					}
				};
			}
			
			if (showCounter) {
                that.counterValue = timout;
                var timeLeft = Math.floor(that.counterValue / 1000);
                var display = that.getCounter(timeLeft);
                that.$div.innerHTML = display;
			} else {
				that.$div.innerHTML = "";
			}

            //check start trigger
            if (start !== "") {
                if (showCounter) {
					if (that.counter_id != undefined) {
						clearInterval(that.counter_id);
					}

                    that.counter_id = setInterval(function () {
                        that.counterValue = that.counterValue - 1000;
                        var timeLeft = Math.floor(that.counterValue / 1000);

                        var display = that.getCounter(timeLeft);
                        that.$div.innerHTML = display;
                    }, 1000);
                }

                if (isPeriodic) {
                    //clean up setInterval before starting new one when still active
                    if (that.interval_id !== undefined) {
                        clearInterval(that.interval_id);
                    }
                    that.interval_id = setInterval(function () {
                        that.fireTimeOutEvent();
                    }, timout);
                } else {
                    //clean up setTimeout before starting new one when still active
                    if (that.interval_id !== undefined) {
                        clearInterval(that.interval_id);
                    }
                    that.interval_id = setTimeout(function () {
                        that.fireTimeOutEvent();
                    }, timout);
                }
                //reset start trigger
                that.setStart("");
                that.firePropertiesChanged(["start"]);
            } else if (stop !== "") {
                //stop interval
                clearInterval(that.interval_id);
                if (that.counter_id != undefined) {
					clearInterval(that.counter_id);
				}
                //reset stop trigger
                that.setStop("");
                that.firePropertiesChanged(["stop"]);
            }
        };

        that.onResize = function (width, height, parent) {
            // in case special resize code is required
        };

        that.fireTimeOutEvent = function () {
        	if (that.counter_id != undefined) {
				var display = "00:00";
				that.$div.innerHTML = display;
				clearInterval(that.counter_id);
			}

			that.fireEvent("onTimeout");
        };

        that.getCounter = function (timeLeft) {
        	var display = "";
			if(timeLeft >= 60) {
				if ((""+Math.floor((timeLeft / 60))).length < 2) {
					display += "0";
				}
				display += Math.floor(timeLeft / 60) + ":";
				timeLeft = Math.floor(timeLeft % 60);
			} else {
				display += "00:";
			}

			if(timeLeft < 10) {
				display += "0";
			}

			display += timeLeft;

			return display;
        };

        /**
         * @function componentDeleted
         */
        that.componentDeleted = function () {
            clearInterval(that.interval_id);
            that.$().remove('#' + that._ownid);
        };

        /* COMPONENT SPECIFIC CODE - END METHODS*/
        return that;
    };


//%INIT-START%
myComponentData.instance = TimeOut;
Component.subclass(myComponentData.fullComponentName, myComponentData.instance);


});