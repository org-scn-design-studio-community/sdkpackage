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
/**
 * Based on from original version by Leandro Cardoso, blogged here: 
 * (http://scn.sap.com/docs/DOC-56356)
 * 
 */
sap.designstudio.sdk.Component
		.subclass(
				"org.scn.community.basics.Notify",
				function() {

					var _url = null;
					var _layout = null;
					var _modal = null;
					var _show = "N";
					var _msgText = "";
					var _delay = null;
					var _msgtype = null;

					this.init = function() {
						// this.$().addClass(STYLE_DIV);
					};

					this.afterUpdate = function() {
						if( _show == "Y"){
							this.genarate();
							this.shownote("N");
							this.msgtext("");
							this.firePropertiesChanged( [ "msgtext","shownote"]);
						}
					};

					this.genarate = function() {
				        var n = noty({
				            text        : _msgText,
				            type        : _msgtype,
				            dismissQueue: true,
				            modal		: _modal,
				            layout      : _layout,
				            theme       : 'defaultTheme'
				        });

				        setTimeout(function () {
				            $.noty.close(n.options.id);
				        }, _delay*1000);

				    };

				    this.msgtype = function(value){
				    	if (value === undefined) {
							return _msgtype;
						} else {
							_msgtype = value;
							return this;
						}
				    }; 
				    this.shownote = function(value){
				    	if (value === undefined) {
							return _show;
						} else {
							_show = value;
							return this;
						}
				    };

				    this.delay = function(value){
				    	if (value === undefined) {
							return _delay;
						} else {
							_delay = value;
							return this;
						}
				    };

				    this.msgtext = function(value){
				    	if (value === undefined) {
							return _msgText;
						} else {
							_msgText = value;
							return this;
						}
				    };



				    this.layout = function(value) {
						if (value === undefined) {
							return _layout;
						} else {
							_layout = value;
							return this;
						}
					};
					 this.modal = function(value) {
							if (value === undefined) {
								return _modal?"true":"false";
							} else {
								_modal = value == "true" ?true:false;
								return this;
							}
						};
					this.url = function(value) {
						if (value === undefined) {
							return _url;
						} else {
							_url = value;
							return this;
						}
					};					

				});