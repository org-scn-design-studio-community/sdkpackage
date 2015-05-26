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

(function() {

	org_scn_community_require.knownComponents.prototypes.BulletChartGen.spec = 
{"graphTitle": {
  "opts": {
    "apsControl": "text",
    "cat": "Visualization",
    "desc": "Graph Title",
    "tooltip": "the title for the graph",
    "ztlFunction": "",
    "ztlType": "String"
  },
  "type": "String",
  "value": "",
  "visible": true
}};

	org_scn_community_require.knownComponents.prototypes.BulletChartGen.specAbout = 
{
  "description": "Bullet Chart",
  "icon": "BulletChartGen.png",
  "title": "Bullet Chart (Gen)",
  "topics": [{
    "content": "Allows view on data in form of a bullet chart.",
    "title": "Bullet Chart"
  }]
};

	org_scn_community_require.knownComponents.prototypes.BulletChartGen.specComp = 
{
  "databound": true,
  "extension": "Component",
  "group": "ScnCommunityPrototypes",
  "handlerType": "div",
  "height": "400",
  "id": "BulletChartGen",
  "package": "prototypes",
  "require": [{
    "id": "common_databound",
    "space": "known"
  }],
  "stdIncludes": [{"name": "d3"}],
  "title": "Bullet Chart (Gen Prototype)",
  "tooltip": "Bullet Chart Visualization",
  "width": "600"
};

})();// End of closure
