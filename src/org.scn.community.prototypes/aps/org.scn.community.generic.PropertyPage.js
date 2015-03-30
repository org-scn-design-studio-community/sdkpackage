sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.generic.PropertyPage", function() {
	var that = this;
	/**
	 * Crawl Node config by node key to find its UI sheet.
	 */
	this.findUI = function(node,nodename){
		if(node.key==nodename) return node.ui;
		for(var childNode in node.nodes){
			var child = this.findUI(node.nodes[childNode],nodename);
			if(child) {
				//alert("found " + nodename + child);
				return child;
			}
		}
		return null;
	}
	/**
	 * Render either a Nav Sheet or a Property Sheet, depending on the node config passed.
	 */
	this.render = function(node,ui){
		var sheet = false;
		var leafcount = 0;
		for(var leaf in node.leafs) leafcount++;
		node.ui = ui;
		if(leafcount>0) {	// Render a Sheet.
			for(var leaf in node.leafs){
				var property = node.leafs[leaf].name;
				var propertyOptions = node.leafs[leaf].opts;
				var apsControl = propertyOptions.apsControl;
				this.props[property] = {
						value : null
					};
					// Step 1, create getter/setter
					this[property] = function(property,apsControl,onSet){
						return function(value){
							if(value===undefined){
								return this.props[property].value;
							}else{
								if(onSet) {
									value = this.callRuntimeHandler("callOnSet",property,value.replace(/(\n|\r\n)/g,"__n__"));
								}
								this.props[property].value = value;
								if(apsControl=="text" || !apsControl){
									this["cmp_"+property].setValue(value);	
								}
								if(apsControl=="textbox"){
									this["cmp_"+property].setValue(value);	
								}
								if(apsControl=="mapdownload"){
									this["cmp_"+property].setMapData(value);	
								}
								if(apsControl=="checkbox"){
									this["cmp_"+property].setChecked(Boolean(value));	
								}
								if(apsControl=="spinner"){
									this["cmp_"+property].setValue(value);
								}
								if(apsControl=="palette"){
									this["cmp_"+property].setColors(value);
								}
								if(apsControl=="combobox"){
									this["cmp_"+property].setSelectedKey(value);
								}
								if(apsControl=="color"){
									this["cmp_"+property].setBackgroundColor(value);
								}
								return this;
							}
						};
					}(property,apsControl,propertyOptions.onSet);
					// Step 2, create component event handler
					var f = function(property,apsControl){
						return function(oControlEvent){
							var newValue;
							if(apsControl=="text" || apsControl==null){
								newValue = oControlEvent.getSource().getValue();
							}
							if(apsControl=="textbox"){
								newValue = oControlEvent.getSource().getValue();
							}
							if(apsControl=="mapdownload"){
								newValue = oControlEvent.getSource().getMapData();
							}
							if(apsControl=="checkbox"){
								newValue = oControlEvent.getSource().getChecked();
							}
							if(apsControl=="spinner"){
								newValue = oControlEvent.getSource().getValue();
							}
							if(apsControl=="palette"){
								newValue = oControlEvent.getSource().getColors();
							}
							if(apsControl=="combobox"){
								newValue = oControlEvent.getSource().getSelectedKey();
							}
							if(apsControl=="color"){
								newValue = oControlEvent.getSource().getBackgroundColor();
							}
							this.props[property].value = newValue;
							this.firePropertiesChanged([property]);
						};
					}(property,apsControl);
					// Step 3, create component
					if(apsControl == "text" || !apsControl){
						this["cmp_"+property] = new sap.ui.commons.TextField({
							value : ""
						});
						this["cmp_"+property].attachChange(f,this);
					}
					if(apsControl == "textbox"){
						this["cmp_"+property] = new sap.ui.commons.TextArea({
							design : sap.ui.core.Design.Monospace,
							rows : 20,
							width : "100%",
							wrapping : sap.ui.core.Wrapping.Off
						});
						this["cmp_"+property].attachChange(f,this);
					}
					if(apsControl == "mapdownload"){
						this["cmp_"+property] = new org.scn.community.aps.MapDownloader({
							width : "100%",
							title : new sap.ui.commons.Title({
								text: propertyOptions.desc
							}),
							//tooltip: this.metaProps[prop].tooltip,
							showCollapseIcon : false,
							showAlpha : false,
							showRatios : false
						});
						this["cmp_"+property].attachMapDataChange(f,this);
					}
					if(apsControl == "checkbox"){
						this["cmp_"+property] = new sap.ui.commons.CheckBox();
						this["cmp_"+property].attachChange(f,this);
					}
					if(apsControl == "spinner"){
						this["cmp_"+property] = new org.scn.community.aps.Spinner({
							min : 0,
							max : 100
						 });
						this["cmp_"+property].attachValueChange(f,this);
					}
					if(apsControl == "combobox"){
						this["cmp_"+property] = new sap.ui.commons.ComboBox({});
						if(propertyOptions.options && propertyOptions.options.length>0){
							for(var i=0;i<propertyOptions.options.length;i++){
								var option = propertyOptions.options[i];
								this["cmp_"+property].addItem(new sap.ui.core.ListItem({
									key : option.key,
									text : option.text || option.key
								 }));
							}
						}
						this["cmp_"+property].attachChange(f,this);
					}
					if(apsControl == "palette"){
						this["cmp_"+property] = new org.scn.community.aps.ColorBuilder({
							width : "100%",
							title : new sap.ui.commons.Title({
								text: propertyOptions.desc
							}),
							//tooltip: this.metaProps[prop].tooltip,
							showCollapseIcon : false,
							showAlpha : false,
							showRatios : false
						});
						this["cmp_"+property].attachColorChange(f,this);
					}
					if(apsControl == "color"){
						this["cmp_"+property] = new org.scn.community.aps.ColorPicker({
							showAlpha : false
						});
						this["cmp_"+property].attachColorChange(f,this);
					}
					// Step 4, add control to layout
					//etcLayout.addContent(this.hLabel(property,this["cmp_"+property]));
					var useLabel = true;
					if(apsControl == "palette" || apsControl == "mapdownload") useLabel = false;
					if(useLabel){
						node.ui.addContent(this.hLabel(propertyOptions.desc || property,this["cmp_"+property]));
					}else{
						node.ui.addContent(this["cmp_"+property]);
					}
			}
		}else{	// Render nav strip and child ui area.
			var strip = new sap.ui.ux3.NavigationBar({
				toplevelVariant : (node==this.tree),
				width : "100%"
			});
			node.strip = strip;
			var stageUI = new sap.ui.commons.layout.VerticalLayout({
				width : "100%"
			});
			node.stageUI = stageUI;
			var firstChild = null;
			var firstChildUI = null;
			for(var childNode in node.nodes){
				var stripItem = new sap.ui.ux3.NavigationItem({
					key:node.nodes[childNode].key,
					text:node.nodes[childNode].title,
				});
				if(!firstChild) firstChild = stripItem;
				strip.addItem(stripItem);
				var childUI = new sap.ui.commons.layout.VerticalLayout({
					width : "100%"
				});
				this.render(node.nodes[childNode],childUI);
				if(!firstChildUI) firstChildUI = childUI;
			};
			strip.setSelectedItem(firstChild);
			strip.attachSelect(function(oControlEvent){
				var selectedKey = oControlEvent.getParameters().item.getKey();
				stageUI.removeAllContent();
				if(selectedKey=="ABOUT"){
					stageUI.addContent(this.aboutLayout);
				}else{
					stageUI.addContent(this.findUI(this.tree,selectedKey));	
				}				
			},this);
			ui.addContent(strip);
			ui.addContent(stageUI);
			stageUI.addContent(firstChildUI);
		}
	};
	/**
	 * Balances out hierarchy to not allow for cases where a node has nodes AND leafs.
	 * This is because we are either rendering a Navigation Strip OR a property sheet section.
	 * It would be ugly to try to render properties followed by a child Nav Strip.
	 */
	this.balance = function(node){
		var leafcount = 0;
		var nodecount = 0;
		for(var leaf in node.leafs) leafcount++;
		for(var leaf in node.nodes) nodecount++;
		if(nodecount>0 && leafcount>0) {
			// Move leafs to new node.
			node.nodes.splice(0,0,{
				key : node.title + "-General",
				title : node.title,
				nodes : [],
				leafs : node.leafs
			});
			// Remove leafs from original node.
			node.leafs = [];
		}
		if(nodecount>0){
			for(var child in node.nodes){
				this.balance(node.nodes[child]);
			}
		}
	};
	/**
	 * Design Studio Events
	 */
	this.init = function(){
		this.appHeader = new sap.ui.commons.ApplicationHeader({
			displayLogoff : false,
			logoText : "Property Sheet",
			displayWelcome : false,
			logoSrc : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAMwSURBVHjaYtxYISDCwMDQBMSZDBAwHYjr/NrfvwFxkgrqMOTnTWjKgrIZAAKIYUUR34zLW2r+//3+DoxBbJDY////GUA4Lqdqxtqte/7DQHxu9X+YHAgDBBDTj1//0tUswhm29LkwLC6VYwCxQWJwG/7/Tw/wcGT48/cvQ3xOFcOXj+/XMAIBTBoggJi+/vjL8PPVBYYn968zcAopg9kgMUYo+PvvL8Off/8ZPnz6wvDnz+93l88db43OLJsak1X+H4inAQQQy4NXfzee3LfIP7FuLcP/P98Yjm2byQASA5kemVY8VUtNmeH/PwYGPm4ehgAvFyGgs7f8+/tXeumMHobojJJMgABi1JdnMrfTZKoU5mX0B2l6+/n/xkPX/7Wru+TFK8nLZrbVFDH8+P2H4e69BwzqqkoMnz59ZhAS4AeLJWSVMgAEEMgvrECsCMRSUG89C4jNKlJVVkhvry1m2Ln3EIOcrAxYQklBDuQ1cOCt3byTYfmqdWsAAogxIDYTPZoY9HU0GWpLssGaQQBkwN5DxxgOHDkBD9tvXz+vuX31QitAALH8/v2nJSLQJz0qxJcBGezYexCuecaC5Qw3rt9Ys3fTsg4kJa9BrgUIIJZ///6m+/u4M7z68IXh0+cvDHy8PAxvXr2EO3va3CUM129cX3Ngy6piIPcxSCwxv/YfiFaREysBCCCWv8D4/fztJ0NiRh7Ib+/8fTyFAn29GN69ecWwbM1GhitXr6yRlVP8AdT0ENmFM7prGfJLqnsAAojp6+ePa+JSsxhA9IXj+4PWbdj06u279wwCQqIMp86eZzi8fS3QZsaY0rx0BhsLUwYQDQJ3H79i+PSTgQEggFiO7toAchrIb68dfMKrgK4QExIQYPj77x8DML4ZYM6+euUKw+dPH8E0MgAIIBaghkfAqHkMSuD2PuHp+zYuY3j88iPDuo2bGb5+/bIGpOjB3Ztrp895EgzTJK+kAjaIh/0fA0AAMYLiFARAydbUwWsVOydXCIj/8/u3NU/u3Wx99vDOBaCUHFBIFGaAk2/kGRCtLCs2CSCA4AZADUFWCI4moPwfBjQAVGcMZT4BCDAAVE+Dr1XMs78AAAAASUVORK5CYII="
		});
		/**
		 * Main Layout is coupled with top level node config (this.tree)
		 */
		this.mainLayout = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		this.mainLayout.addContent(this.appHeader);
		this.mainLayout.placeAt("content");
		// Get Property Metadata from Design Studio Component Runtime.
		var propMetadata = this.callRuntimeHandler("getPropertyMetaData");
		this.metaProps = jQuery.parseJSON(propMetadata);
		this.props = {};
		// Pass 1 - Create tree.
		this.tree = {
			key : "",
			title : "Properties",
			nodes : [],
			leafs : []
		};
		var generalFilled = false;
		for(var prop in this.metaProps){
			var property = this.metaProps[prop].name;
			var propertyOptions = this.metaProps[prop].opts;
			if(!propertyOptions.cat){
				// Add a General Tab to tree.
				/*
				 if(!generalFilled) this.tree.nodes.splice(0,0,{
					key : "General",
					title : "General",
					nodes : [],
					leafs : []
				});
				generalFilled = true;
				*/
				propertyOptions.cat = "?";
			}
			var category = propertyOptions.cat;
			var catChain = category.split("-");
			var currentNode = this.tree;	// Start at top.
			var nodeName = "";
			var sep = "";
			for(var i=0;i<catChain.length;i++){
				nodeName+=sep+catChain[i];
				if(!currentNode.nodes[nodeName]) currentNode.nodes[nodeName]={
					key : nodeName,
					title : catChain[i],
					nodes : [],
					leafs : []
				}
				sep = "-";
				currentNode = currentNode.nodes[nodeName];
			}
			currentNode.leafs[property] = this.metaProps[prop];
		}
		// Pass 2 - Balance out nodes that contain nodes and leafs.
		this.balance(this.tree);
		// Pass 3 - Create UI Components
		this.render(this.tree,this.mainLayout);
		
		var sComponentInfo = this.callRuntimeHandler("getComponentInformation");
		var componentInfo = {};
		if(sComponentInfo && sComponentInfo != "") {
			try{
			componentInfo = jQuery.parseJSON(sComponentInfo);
			if(componentInfo && componentInfo.visible){
				this.aboutLayout = new sap.ui.commons.layout.VerticalLayout({
					width : "100%"
				});
				this.tree.strip.addItem(new sap.ui.ux3.NavigationItem({
					key:"ABOUT",
					text:"About",
				}));
				aboutPanel = new sap.ui.commons.Panel({
					text : componentInfo.title,
					width : "100%"
				});
				this.appHeader.setLogoText("  " + componentInfo.title);
				if(componentInfo.icon) this.appHeader.setLogoSrc(componentInfo.icon);
				//var aboutDescription = new sap.ui.commons.TextView({ text : componentInfo.description});
				var aboutDescription = new sap.ui.core.HTML({ content : "<div>" + componentInfo.description + "</div>"});
				aboutPanel.addContent(aboutDescription);
				this.aboutLayout.addContent(aboutPanel);
				if(componentInfo.topics){
					for(var i=0;i<componentInfo.topics.length;i++){
						var topicPanel = new sap.ui.commons.Panel({
							text : componentInfo.topics[i].title,
							width : "100%"
						});
						var topicContent = new sap.ui.core.HTML({ content : "<div>" + componentInfo.topics[i].content + "</div>"});
						topicPanel.addContent(topicContent);
						this.aboutLayout.addContent(topicPanel);
					}
				}
			}
			}catch(e){
				alert(e);
			}
		}
		
	};
	this.hLabel = function(label,component){
		var hLayout = new sap.ui.commons.layout.HorizontalLayout({})
		hLayout.addContent(new sap.ui.commons.TextView({ text : label, width : "150px"}));
		hLayout.addContent(component);
		return hLayout;
	}
});