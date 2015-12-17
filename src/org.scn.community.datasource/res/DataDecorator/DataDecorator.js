/**
 * Copyright 2014 SCN Community Contributors
 * 
 * Original Source Code Location:
 *  https://github.com/sap-design-studio-free-addons/sdk-package
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
 * 
 */

/**
 * Data Decorator
 * 
 */
define(["../_modules/DatasourceCore", "sap/designstudio/sdk/databuffer"], function(DatasourceCore, DataBuffer) {
	var ownComponentName = "org.scn.community.datasource.DataDecorator";
	DataDecorator.prototype = DatasourceCore;
	// Call super
	function DataDecorator() {
		var that = this;
		
		this.test = function(){
			alert(JSON.stringify(this.sourceData()));
		};
		// Call super
		DatasourceCore.call(this, {
			sourceData :  {
				opts : {
					desc : "Data",
					cat : "Data",
					//apsControl : "byodata"
					apsControl : "text"
				},
				onChange : this.test
			}
		});
	}
	DataDecorator.prototype.constructor = DataDecorator;
	DataDecorator.prototype.toString = function(){
   	 return ownComponentName;
    }
	DataBuffer.subclass(ownComponentName,DataDecorator);
});
	