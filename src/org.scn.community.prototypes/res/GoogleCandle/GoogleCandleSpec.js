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
define([],
function() {

	var spec = {
		id: "GoogleCandle",
		name: "prototypes.GoogleCandle",
		requireName: "prototypesgooglecandle",
		fullComponentName: "org.scn.community.prototypes.GoogleCandle",
		fullComponentPackage: "org.scn.community.prototypes/res/GoogleCandle",
		script: "org.scn.community.prototypes/res/GoogleCandle/GoogleCandle",
		scriptSpec: "org.scn.community.prototypes/res/GoogleCandle/GoogleCandleSpec",
		min: false
	};

	spec.spec = 
{"candles": {
  "opts": {
    "apsControl": "array",
    "arrayDefinition": {"candle": {
      "end1": {
        "desc": "End 1 value",
        "type": "float"
      },
      "end2": {
        "desc": "End 2 value",
        "type": "float"
      },
      "key": {
        "desc": "Unique key of the candle",
        "type": "String"
      },
      "sequence": "key,text,start1,start2,end1,end2",
      "start1": {
        "desc": "Start 1 value",
        "type": "float"
      },
      "start2": {
        "desc": "Start 2 value",
        "type": "float"
      },
      "text": {
        "desc": "Text of the candle",
        "type": "String"
      },
      "type": "Array"
    }},
    "arrayMode": "OneLevelArray",
    "cat": "Content-Candles",
    "desc": "Candles",
    "tooltip": "Array with Candles",
    "ztlFunction": "",
    "ztlType": "SingleArray"
  },
  "type": "String",
  "value": "[]",
  "visible": true
}};

	spec.specInclude = 
{};

	spec.specAbout = 
{
  "description": "Google Candle Chart (Prototype)",
  "title": "Google Candle Chart",
  "topics": [{
    "content": "This component is a visualization component.  This means that you have control over cosmetic properties such as Legend, Margins, Plot positioning, zooming, among others.",
    "title": "Visualization"
  }]
};

	spec.specComp = 
{
  "databound": false,
  "extension": "Component",
  "group": "ScnCommunityPrototypes",
  "handlerType": "div",
  "height": "400",
  "id": "GoogleCandle",
  "package": "prototypes",
  "require": [{"id": "https://www.google.com/jsapi"}],
  "title": "Google Candle Chart (Prototype)",
  "tooltip": "Google Candle Chart",
  "width": "600"
};

	return spec;
});// End of closure
