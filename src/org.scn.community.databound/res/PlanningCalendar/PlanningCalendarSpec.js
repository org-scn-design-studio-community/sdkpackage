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
		id: "PlanningCalendar",
		name: "databound.PlanningCalendar",
		requireName: "databoundplanningcalendar",
		fullComponentName: "org.scn.community.databound.PlanningCalendar",
		fullComponentPackage: "org.scn.community.databound/res/PlanningCalendar",
		script: "org.scn.community.databound/res/PlanningCalendar/PlanningCalendar",
		scriptSpec: "org.scn.community.databound/res/PlanningCalendar/PlanningCalendarSpec",
		min: false
	};

	spec.spec = 
{};

	spec.specInclude = 
{
  "appointmentSelectedKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Internal",
      "desc": "Appointment Selected Key",
      "noAps": true,
      "noZtl": false,
      "tooltip": "AppointmentSelected Key",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "origType": "EventKey",
    "template": "EventKey",
    "type": "String",
    "value": "",
    "visible": false
  },
  "appointments": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"appointments": {
        "end": {
          "desc": "End Date/Time",
          "type": "String"
        },
        "icon": {
          "desc": "Icon",
          "type": "String,optional"
        },
        "key": {
          "desc": "Unique Appointment Key",
          "type": "String"
        },
        "ntype": {
          "apsControl": "combobox",
          "desc": "Type",
          "options": [
            {
              "key": "Type01",
              "text": "Type01"
            },
            {
              "key": "Type02",
              "text": "Type02"
            },
            {
              "key": "Type03",
              "text": "Type03"
            },
            {
              "key": "Type04",
              "text": "Type04"
            },
            {
              "key": "Type05",
              "text": "Type05"
            },
            {
              "key": "Type06",
              "text": "Type06"
            },
            {
              "key": "Type07",
              "text": "Type07"
            },
            {
              "key": "Type08",
              "text": "Type08"
            },
            {
              "key": "Type09",
              "text": "Type09"
            }
          ],
          "type": "String,optional"
        },
        "rowKey": {
          "desc": "Unique Row Key",
          "type": "String"
        },
        "selected": {
          "apsControl": "checkbox",
          "desc": "Selected",
          "type": "boolean,optional"
        },
        "sequence": "key,rowKey,start,end,text,title,ntype,icon,selected,tentative",
        "start": {
          "desc": "Start Date/Time",
          "type": "String"
        },
        "tentative": {
          "apsControl": "checkbox",
          "desc": "Tentative",
          "type": "boolean,optional"
        },
        "text": {
          "desc": "Text",
          "type": "String"
        },
        "title": {
          "desc": "Title",
          "type": "String"
        },
        "type": "Array"
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content-Appointments",
      "desc": "Appointments",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Appointments to be displayed in the top of the intervals. The ",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "origType": "CalendarAppointment",
    "template": "ObjectArray",
    "type": "String",
    "value": "[{\"parentKey\":\"ROOT\",\"key\":\"ELEMENT\",\"leaf\":false,\"text\":\"Short Event\",\"rowKey\":\"PLANNING_EVENTS\",\"start\":\"201604091234\",\"end\":\"201604091634\",\"title\":\"This event is only for 4 hours\"},{\"parentKey\":\"ROOT\",\"key\":\"ELEMENT1\",\"leaf\":false,\"title\":\"Long Running Event\",\"text\":\"this events runs over 2 months\",\"tentative\":true,\"start\":\"20160409\",\"end\":\"20160611\",\"rowKey\":\"PLANNING_EVENTS\",\"ntype\":\"Type02\"},{\"parentKey\":\"ROOT\",\"key\":\"PAST_EVENT1\",\"leaf\":false,\"rowKey\":\"PAST_EVENTS\",\"start\":\"20100101\",\"text\":\"First Event in the past\",\"title\":\"Past Event 1 / Tentative\",\"icon\":\"sap-icon://accept\",\"tentative\":true,\"ntype\":\"Type06\",\"selected\":false}]",
    "visible": true
  },
  "contentHeight": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Content Height",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Height of the ",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 0,
    "visible": false
  },
  "contentWidth": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display",
      "desc": "Content Width",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Width of the ",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "template": "int",
    "type": "int",
    "value": 0,
    "visible": false
  },
  "dataCellListAppointments": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Appointments Data List [Multiple]",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Appointments Data List [Multiple]",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "template": "ds-DataCellList",
    "type": "ResultCellList",
    "value": "null",
    "visible": false
  },
  "dataCellListIntervalHeaders": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Interval Headers Data List [Multiple]",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Interval Headers Data List [Multiple]",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "template": "ds-DataCellList",
    "type": "ResultCellList",
    "value": "null",
    "visible": false
  },
  "dataCellListRows": {
    "options": {
      "includeData": "true",
      "includeFormattedData": "true"
    },
    "opts": {
      "cat": "Data",
      "desc": "Rows Data List [Multiple]",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Rows Data List [Multiple]",
      "type": "data",
      "value": "null",
      "ztlFunction": ""
    },
    "template": "ds-DataCellList",
    "type": "ResultCellList",
    "value": "null",
    "visible": false
  },
  "intervalHeaders": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"intervalHeaders": {
        "end": {
          "desc": "End Date/Time",
          "type": "String"
        },
        "icon": {
          "desc": "Icon",
          "type": "String,optional"
        },
        "key": {
          "desc": "Unique Header Key",
          "type": "String"
        },
        "ntype": {
          "apsControl": "combobox",
          "desc": "Type",
          "options": [
            {
              "key": "Type01",
              "text": "Type01"
            },
            {
              "key": "Type02",
              "text": "Type02"
            },
            {
              "key": "Type03",
              "text": "Type03"
            },
            {
              "key": "Type04",
              "text": "Type04"
            },
            {
              "key": "Type05",
              "text": "Type05"
            },
            {
              "key": "Type06",
              "text": "Type06"
            },
            {
              "key": "Type07",
              "text": "Type07"
            },
            {
              "key": "Type08",
              "text": "Type08"
            },
            {
              "key": "Type09",
              "text": "Type09"
            }
          ],
          "type": "String,optional"
        },
        "rowKey": {
          "desc": "Unique Row Key",
          "type": "String"
        },
        "selected": {
          "apsControl": "checkbox",
          "desc": "Selected",
          "type": "boolean,optional"
        },
        "sequence": "key,rowKey,start,end,text,title,ntype,icon,selected,tentative",
        "start": {
          "desc": "Start Date/Time",
          "type": "String"
        },
        "tentative": {
          "apsControl": "checkbox",
          "desc": "Tentative",
          "type": "boolean,optional"
        },
        "text": {
          "desc": "Text",
          "type": "String"
        },
        "title": {
          "desc": "Title",
          "type": "String"
        },
        "type": "Array"
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content-Interval Headers",
      "desc": "Interval Headers",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Interval Headers to be displayed in the top of the intervals. The ",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "origType": "CalendarAppointment",
    "template": "ObjectArray",
    "type": "String",
    "value": "[{\"parentKey\":\"ROOT\",\"key\":\"PAST_EVENTS\",\"leaf\":false,\"rowKey\":\"PAST_EVENTS\",\"text\":\"Interval Header\",\"title\":\"Header\",\"start\":\"20160401\",\"end\":\"20161010\",\"icon\":\"sap-con://warning\",\"selected\":false,\"tentative\":false}]",
    "visible": true
  },
  "intervalSelectedKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Internal",
      "desc": "Interval Selected Key",
      "noAps": true,
      "noZtl": true,
      "tooltip": "IntervalSelected Key",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "origType": "EventKey",
    "template": "EventKey",
    "type": "String",
    "value": "",
    "visible": false
  },
  "noDataText": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "No Data Text",
      "noAps": false,
      "noZtl": false,
      "tooltip": "This text is displayed when no rows are assigned.",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "No Data",
    "visible": true
  },
  "onAppointmentSelected": {
    "opts": {
      "cat": "Events",
      "desc": "On Appointment Selected",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event triggered on If set, the appointment was selected using multiple selection (e.g. Shift + single mouse click),meaning more than the current appointment could be selected."
    },
    "template": "ScriptText",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "onIntervalSelected": {
    "opts": {
      "cat": "Events",
      "desc": "On Interval Selected",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event triggered on Start date of the selected interval, as JavaScript date object."
    },
    "template": "ScriptText",
    "type": "ScriptText",
    "value": "",
    "visible": false
  },
  "onRowSelectionChanged": {
    "opts": {
      "cat": "Events",
      "desc": "On Row Selection Changed",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event triggered on Array of rows whose selection has changed."
    },
    "template": "ScriptText",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "onStartDateChanged": {
    "opts": {
      "cat": "Events",
      "desc": "On Start Date Changed",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event triggered on <"
    },
    "template": "ScriptText",
    "type": "ScriptText",
    "value": "",
    "visible": false
  },
  "onViewChanged": {
    "opts": {
      "cat": "Events",
      "desc": "On View Changeed",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event triggered on <"
    },
    "template": "ScriptText",
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "rowSelectionChangedKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Internal",
      "desc": "Row Selection Changed Key",
      "noAps": true,
      "noZtl": false,
      "tooltip": "RowSelectionChangeed Key",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "origType": "EventKey",
    "template": "EventKey",
    "type": "String",
    "value": "",
    "visible": false
  },
  "rows": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"rows": {
        "icon": {
          "desc": "Icon",
          "type": "String,optional"
        },
        "key": {
          "desc": "Unique Property Key",
          "type": "String"
        },
        "selected": {
          "apsControl": "checkbox",
          "desc": "Selected",
          "type": "boolean,optional"
        },
        "sequence": "key,text,title,icon,selected",
        "text": {
          "desc": "Text",
          "type": "String"
        },
        "title": {
          "desc": "Title",
          "type": "String"
        },
        "type": "Array"
      }},
      "arrayMode": "OneLevelArray",
      "cat": "Content-Rows",
      "desc": "Rows",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Rows to be displayed",
      "ztlFunction": "",
      "ztlType": "SingleArray"
    },
    "origType": "PlanningCalendarRow",
    "template": "ObjectArray",
    "type": "String",
    "value": "[{\"parentKey\":\"ROOT\",\"key\":\"PLANNING_EVENTS\",\"leaf\":false,\"text\":\"Events Example in Planning\",\"title\":\"Main Events\",\"icon\":\"sap-icon://accept\",\"selected\":false},{\"parentKey\":\"ROOT\",\"key\":\"PAST_EVENTS\",\"leaf\":false,\"text\":\"Events in the past\",\"title\":\"Past Events\",\"icon\":\"sap-icon://error\"}]",
    "visible": true
  },
  "showIntervalHeaders": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Show Interval Headers",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If set, interval headers are shown even if no ",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "showRowHeaders": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Show Row Headers",
      "noAps": false,
      "noZtl": false,
      "tooltip": "If set, headers of the ",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "boolean",
    "type": "boolean",
    "value": true,
    "visible": true
  },
  "startDate": {
    "opts": {
      "apsControl": "text",
      "cat": "Display",
      "desc": "Start Date",
      "noAps": false,
      "noZtl": false,
      "tooltip": "Start date of the row, as JavaScript date object. As a default the current date is used.",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "template": "String",
    "type": "String",
    "value": "",
    "visible": true
  },
  "startDateChangedKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Internal",
      "desc": "Start Date Changed Key",
      "noAps": true,
      "noZtl": true,
      "tooltip": "StartDateChanged Key",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "origType": "EventKey",
    "template": "EventKey",
    "type": "String",
    "value": "",
    "visible": false
  },
  "useAppointments": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Content-Rows",
      "desc": "Use Manual 'Appointments'",
      "noAps": true,
      "noZtl": true,
      "tooltip": "If checked, the property 'Appointments' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": false
  },
  "useContentHeight": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Use Manual 'Content Height'",
      "noAps": true,
      "noZtl": true,
      "tooltip": "If checked, the property 'Content Height' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": false
  },
  "useContentWidth": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display",
      "desc": "Use Manual 'Content Width'",
      "noAps": true,
      "noZtl": true,
      "tooltip": "If checked, the property 'Content Width' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": false
  },
  "useIntervalHeaders": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Content-Rows",
      "desc": "Use Manual 'Interval Headers'",
      "noAps": true,
      "noZtl": true,
      "tooltip": "If checked, the property 'Interval Headers' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": false
  },
  "useRows": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Content-Rows",
      "desc": "Use Manual 'Rows'",
      "noAps": true,
      "noZtl": true,
      "tooltip": "If checked, the property 'Rows' will be used.",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "template": "ds-boolean",
    "type": "boolean",
    "value": true,
    "visible": false
  },
  "viewChangedKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Internal",
      "desc": "View Changed Key",
      "noAps": true,
      "noZtl": true,
      "tooltip": "ViewChanged Key",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "origType": "EventKey",
    "template": "EventKey",
    "type": "String",
    "value": "",
    "visible": false
  },
  "viewKey": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display",
      "choiceType": "-",
      "desc": "View Type",
      "noAps": false,
      "noZtl": false,
      "options": [
        {
          "key": "Hour",
          "text": "Hour"
        },
        {
          "key": "Day",
          "text": "Day"
        },
        {
          "key": "Month",
          "text": "Month"
        }
      ],
      "tooltip": "View Type",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "template": "Choice",
    "type": "String",
    "value": "Day",
    "visible": true
  }
};

	spec.specAbout = 
{
  "description": "PlanninCalendar",
  "icon": "PlanninCalendar.png",
  "title": "Planning Calendar",
  "topics": [
    {
      "content": "The PlanningCalendar can display rows with appointments for different persons. It is possible to define different views and switch between the views. You can add your own buttons or other controls to the toolbar.",
      "title": "Plannin Calendar"
    },
    {
      "content": "This component is a visualization component. It requires specific space in the application canvas.",
      "title": "Visualization"
    }
  ]
};

	spec.specComp = 
{
  "dataType": "DataCellList",
  "databound": false,
  "extends1ControlDs": "PlanningCalendar.ds",
  "extends2Control": "PlanningCalendar",
  "extends3ControlEvents": "PlanningCalendar.events",
  "extension": "ui5.PlanningCalendar",
  "generatedJsFile": "true",
  "group": "ScnCommunityBasics",
  "handlerType": "sapui5",
  "height": "400",
  "id": "PlanningCalendar",
  "modes": "m",
  "package": "databound",
  "parentControl": "sap.zen.commons.layout.AbsoluteLayout",
  "require": [
    {
      "id": "common_basics",
      "space": "known"
    },
    {
      "id": "basics/os/date/DateFormat",
      "space": "date"
    }
  ],
  "title": "Planning Calendar",
  "tooltip": "Planning Calendar - Component as Calendar",
  "ui5package": "sap.m",
  "width": "900"
};

	return spec;
});// End of closure
