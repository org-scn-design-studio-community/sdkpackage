sap.designstudio.sdk.PropertyPage.subclass("org.scn.community.datasource.BYODataPropertyPage",  function() {
	var that = this;
	var _data = [];
	var _kfIndex = 1;
	var _dataString = "";
	this._tileConfig = []; 
	this._selectedIndex = -1;
	this.presets = [
	    {
	    	label : "Grocery Store",
	    	dimensions : 2,
	    	data : [
	    	   ["Department","Product","Sales","Quantity"],
	    	   ["Produce","Apples",100,20],
	    	   ["Produce","Oranges",75,15],
	    	   ["Produce","Kiwis",30,5],
	    	   ["Produce","Bananas",150,30],
	    	   ["Grocery","Cereal",34,20],
	    	   ["Grocery","Juice",25,15],
	    	   ["Grocery","Coffee",17,5],
	    	   ["Meat","Poultry",150,30],
	    	   ["Meat","Pork",78,23]
	    	]
	    },{
	    	label : "Web Traffic",
	    	dimensions : 1,
	    	data : [
	    	   ["Date","Hits","Unique Visitors"],
	    	   ["01/2014",1020,23],
	    	   ["02/2014",929,19],
	    	   ["03/2014",837,20],
	    	   ["04/2014",940,22],
	    	   ["05/2014",736,13],
	    	   ["06/2014",674,10],
	    	   ["07/2014",910,25],
	    	   ["08/2014",1200,29],
	    	   ["09/2014",980,34],
	    	   ["10/2014",1087,45],
	    	   ["11/2014",1350,89],
	    	   ["12/2014",1510,102]
	    	]
	    },{
	    	label : "Schools",
	    	dimensions : 6,
	    	data : [
				["Location","City","State","Zip Code","Longitude","Latitude","Students"],
				["University of Alabama at Birmingham","Birmingham","AL","35294-0110","-86.80446","33.50096",4401],
				["Amridge University","Montgomery","AL","36117-3553","-86.171548","32.365021",2021],
				["University of Alabama at Huntsville","Huntsville","AL","35899","-86.643936","34.723896",3302],
				["Alabama State University","Montgomery","AL","36101-0271","-86.296158","32.36623",3972],
				["University of Alabama System Office","Tuscaloosa","AL","35401","-87.560429","33.213047",2914],
				["The University of Alabama","Tuscaloosa","AL","35487-0166","-87.54234","33.208811",2748],
				["Central Alabama Community College","Alexander City","AL","35010","-85.947875","32.924383",1898],
				["Athens State University","Athens","AL","35611","-86.967621","34.805512",2873],
				["Auburn University at Montgomery","Montgomery","AL","36117-3596","-86.17771","32.36839",2635],
				["Auburn University","Auburn University","AL","36849","-85.486107","32.603383",2944],
				["Birmingham Southern College","Birmingham","AL","35254","-86.850359","33.517202",4469],
				["Chattahoochee Valley Community College","Phenix City","AL","36869","-85.028995","32.428862",1045],
				["Concordia College-Selma","Selma","AL","36701","-87.0177","32.4254",4170],
				["South University-Montgomery","Montgomery","AL","36116-1120","-86.217741","32.342503",2345],
				["Enterprise State Community College","Enterprise","AL","36330-1300","-85.835009","31.299651",2061],
				["James H Faulkner State Community College","Bay Minette","AL","36507-2698","-87.776669","30.852589",1513],
				["Faulkner University","Montgomery","AL","36109-3378","-86.216358","32.381918",1103],
				["Gadsden State Community College","Gadsden","AL","35903","-85.98997","33.994979",4708],
				["George C Wallace State Community College-Dothan","Dothan","AL","36303-9234","-85.46796","31.31592",1899],
				["George C Wallace State Community College-Hanceville","Hanceville","AL","35077-2000","-86.778259","34.072755",3252],
				["George C Wallace State Community College-Selma","Selma","AL","36703-2808","-87.014531","32.444291",4287],
				["Herzing University-Birmingham","Birmingham","AL","35209","-86.832344","33.468136",1521],
				["Huntingdon College","Montgomery","AL","36106-2148","-86.285285","32.352002",4362],
				["Heritage Christian University","Florence","AL","35630-9977","-87.660709","34.860679",3629],
				["J F Drake State Technical College","Huntsville","AL","35811","-86.572561","34.771174",2166],
				["J F Ingram State Technical College","Deatsville","AL","36022","-86.381859","32.576179",2648],
				["Jacksonville State University","Jacksonville","AL","36265","-85.763653","33.824096",4530],
				["Jefferson Davis Community College","Brewton","AL","36426","-87.08423","31.10199",3832],
				["Jefferson State Community College","Birmingham","AL","35215-3098","-86.709463","33.651085",2056],
				["John C Calhoun State Community College","Tanner","AL","35671","-86.94908","34.64771",3277],
				["Judson College","Marion","AL","36756","-87.316603","32.629662",1027],
				["Lawson State Community College-Birmingham Campus","Birmingham","AL","35221-1717","-86.888372","33.449443",1922],
				["University of West Alabama","Livingston","AL","35470","-88.18725","32.5843",2067],
				["Lurleen B Wallace Community College","Andalusia","AL","36420-1418","-86.451742","31.321861",1826],
				["Marion Military Institute","Marion","AL","36756","-87.318077","32.622556",4566],
				["Miles College","Fairfield","AL","35064-2621","-86.90718","33.48072",3080],
				["University of Mobile","Mobile","AL","36613-2842","-88.128739","30.793454",1404],
				["University of Montevallo","Montevallo","AL","35115-6000","-86.86473","33.10442",2560],
				["Northwest Shoals Community College-Muscle Shoals","Muscle Shoals","AL","35661","-87.678939","34.730351",3036],
				["University of North Alabama","Florence","AL","35632-0001","-87.67976","34.8072",1728],
				["Northeast Alabama Community College","Rainsville","AL","35986","-85.849296","34.495048",2998],
				["Oakwood University","Huntsville","AL","35896","-86.661596","34.756663",2365],
				["Alabama Southern Community College","Monroeville","AL","36460","-87.323941","31.48897",4066],
				["Prince Institute of Professional Studies Inc","Montgomery","AL","36117","-86.161564","32.38201",3273],
				["Reid State Technical College","Evergreen","AL","36401","-86.965527","31.45764",3766],
				["Bishop State Community College","Mobile","AL","36603-5898","-88.056355","30.694054",4216],
				["Samford University","Birmingham","AL","35229-2240","-86.790142","33.463236",2278],
				["Selma University","Selma","AL","36701","-87.031607","32.419785",1589],
				["Shelton State Community College","Tuscaloosa","AL","35405-8522","-87.557337","33.119706",2616],
				["Snead State Community College","Boaz","AL","35957-0734","-86.168184","34.200609",3979],
				["University of South Alabama","Mobile","AL","36688-0002","-88.174087","30.696578",1332],
				["Spring Hill College","Mobile","AL","36608-1791","-88.148412","30.685751",3818],
				["Southeastern Bible College","Birmingham","AL","35224-2083","-86.764053","33.364978",3362],
				["Stillman College","Tuscaloosa","AL","35403","-87.582864","33.200716",1893],
				["Talladega College","Talladega","AL","35160","-86.112036","33.433069",1750],
				["H Councill Trenholm State Technical College","Montgomery","AL","36108-3199","-86.344604","32.34991",1491],
				["Troy University","Troy","AL","36082-0001","-85.95035","31.7969",3185],
				["Tuskegee University","Tuskegee","AL","36088-1920","-85.71794","32.41666",1529],
				["United States Sports Academy","Daphne","AL","36526-7055","-87.91202","30.64004",1512],
				["Bevill State Community College","Jasper","AL","35501","-87.265034","33.835785",4614],
				["University of Alaska Anchorage","Anchorage","AK","99508","-149.826779","61.18824",3833],
				["Alaska Bible College","Glennallen","AK","99588","-145.52624","62.11296",1397],
				["University of Alaska Fairbanks","Fairbanks","AK","99775-7500","-147.82475","64.857053",2667],
				["University of Alaska Southeast","Juneau","AK","99801-8697","-134.639195","58.381976",4632],
				["Alaska Pacific University","Anchorage","AK","99508","-149.814307","61.189535",2294],
				["AVTEC-Alaska's Institute of Technology","Seward","AK","99664-0889","-149.443826","60.110502",3874],
				["Charter College-Anchorage","Anchorage","AK","99508","-149.83999","61.195436",2247],
				["Prince William Sound Community College","Valdez","AK","99686-0097","-146.357096","61.133085",3495],
				["Career Academy","Anchorage","AK","99507-1033","-149.855683","61.180849",2056],
				["University of Alaska System of Higher Education","Fairbanks","AK","99775-5000","-147.847787","64.858009",2332],
				["Everest College-Phoenix","Phoenix","AZ","85021-1641","-112.113531","33.580955",2407],
				["Collins College","Phoenix","AZ","85040","-111.98646","33.40334",4469],
				["Empire Beauty School-Paradise Valley","Phoenix","AZ","85032","-111.978446","33.602489",2132],
				["Empire Beauty School-Tucson","Tucson","AZ","85716","-110.927873","32.235959",2653],
				["Thunderbird School of Global Management","Glendale","AZ","85306-6000","-112.182574","33.622947",4777],
				["American Indian College of the Assemblies of God Inc","Phoenix","AZ","85021","-112.091236","33.577578",4705],
				["American Institute of Technology","Phoenix","AZ","85043-4729","-112.175284","33.442432",1305],
				["Carrington College-Phoenix","Phoenix","AZ","85051-4063","-112.116921","33.561821",1494],
				["Carrington College-Mesa","Mesa","AZ","85210","-111.845197","33.393316",2168],
				["Carrington College-Tucson","Tucson","AZ","85705-5885","-110.978011","32.270954",1051],
				["College America-Flagstaff","Flagstaff","AZ","86004","-111.606672","35.209765",1494],
				["Arizona Academy of Beauty-East","Tucson","AZ","85712","-110.871281","32.236258",3777],
				["Arizona Automotive Institute","Glendale","AZ","85301-3579","-112.15781","33.536413",1284],
				["Brookline College-Phoenix","Phoenix","AZ","85021","-112.112382","33.56756",2278],
				["Arizona State University","Tempe","AZ","85287","-111.932128","33.417515",3864],
				["Arizona Western College","Yuma","AZ","85365-8834","-114.49618","32.69022",3350],
				["University of Arizona","Tucson","AZ","85721-0066","-110.950875","32.232112",2691],
				["The Art Center Design College-Tucson","Tucson","AZ","85716","-110.926828","32.252507",3125],
				["Brillare Hairdressing Academy","Scottsdale","AZ","85251","-111.925323","33.50225",4149],
				["Central Arizona College","Coolidge","AZ","85128-9030","-111.652297","32.95582",1046],
				["Brown Mackie College-Tucson","Tucson","AZ","85712","-110.895053","32.236286",4869],
				["Charles of Italy Beauty College","Lake Havasu City","AZ","86403","-114.328115","34.475229",1848],
				["Cochise College","Douglas","AZ","85607-9724","-109.668765","31.361359",2800],
				["Empire Beauty School-Flagstaff","Flagstaff","AZ","86004","-111.626367","35.195723",1166],
				["Empire Beauty School-Chandler","Chandler","AZ","85224","-111.859237","33.349019",4161],
				["Cortiva Institute-Tucson","Tucson","AZ","85710","-110.856548","32.220975",1571],
				["DeVry University-Arizona","Phoenix","AZ","85021-2995","-112.104979","33.567573",3286],
				["Avalon School of Cosmetology","Mesa","AZ","85210","-111.859667","33.376506",3735],
				["Eastern Arizona College","Thatcher","AZ","85552-0769","-109.763017","32.84242",4068],
				["Embry Riddle Aeronautical University-Prescott","Prescott","AZ","86301-3720","-112.445315","34.615181",4999],
				["Frank Lloyd Wright School of Architecture","Scottsdale","AZ","85261","-111.846477","33.60715",3017],
				["Glendale Community College","Glendale","AZ","85302","-112.188466","33.567524",4680],
				["Grand Canyon University","Phoenix","AZ","85017","-112.129876","33.509446",2861],
				["Anthem College-Phoenix","Phoenix","AZ","85014","-112.050333","33.4947",2422],
				["International Academy of Hair Design","Chandler","AZ","85225-7198","-111.841802","33.354361",2166],
				["Lamson College","Tempe","AZ","85284","-111.95313","33.349029",3999],
				["Kaplan College-Phoenix","Phoenix","AZ","85029","-112.117258","33.609028",4134],
				["Maricopa Beauty College LLC","Avondale","AZ","85323","-112.355232","33.435281",1851],
				["Maricopa Community College System Office","Tempe","AZ","85281-6942","-111.97543","33.413592",3810],
				["GateWay Community College","Phoenix","AZ","85034","-111.995403","33.449261",4773],
				["Mesa Community College","Mesa","AZ","85202","-111.871413","33.392945",3127],
				["ITT Technical Institute-Tucson","Tucson","AZ","85704-5829","-110.997501","32.297261",3034],
				["ITT Technical Institute-Tempe","Tempe","AZ","85282","-111.969736","33.380254",3809],
				["Mohave Community College","Kingman","AZ","86409-1238","-114.022914","35.268508",3406],
				["Universal Technical Institute-Motorcycle Mechanics Institute Division","Phoenix","AZ","85027","-112.121476","33.683844",4897],
				["Dine College","Tsaile","AZ","86556","-109.21009","36.301684",3762],
				["Northern Arizona University","Flagstaff","AZ","86011-4132","-111.65582","35.19398",4914],
				["Northland Pioneer College","Holbrook","AZ","86025-0610","-110.132719","34.936766",4704],
				["Ottawa University-Phoenix","Phoenix","AZ","85021","-112.113493","33.577812",3628],
				["Phoenix College","Phoenix","AZ","85013","-112.088334","33.480476",2413],
				["Cortiva Institute-Scottsdale","Scottsdale","AZ","85257","-111.908192","33.46588",3013],
				["University of Phoenix-Phoenix-Hohokam Campus","Phoenix","AZ","85040-1958","-111.979941","33.413016",2610],
				["Pima Community College","Tucson","AZ","85709-5000","-110.985014","32.226881",1578],
				["Pima Medical Institute-Tucson","Tucson","AZ","85716","-110.921331","32.250463",3029],
				["Pima Medical Institute-Albuquerque","Albuquerque","NM","87110","-106.59439","35.105571",3032],
				["Prescott College","Prescott","AZ","86301","-112.47627","34.544783",3826],
				["Refrigeration School Inc","Phoenix","AZ","85034-1816","-111.989439","33.448254",3783],
				["Rio Salado College","Tempe","AZ","85281","-111.974354","33.413592",3573],
				["Roberto-Venn School of Luthiery","Phoenix","AZ","85040","-112.047076","33.410024",4832],
				["Hair Academy of Safford","Safford","AZ","85546","-109.727248","32.834978",2949],
				["Scottsdale Community College","Scottsdale","AZ","85256","-111.887308","33.509531",1087],
				["South Mountain Community College","Phoenix","AZ","85042","-112.030256","33.382544",4861],
				["Arizona Christian University","Phoenix","AZ","85032-7097","-112.026037","33.596721",1406],
				["Tucson College","Tucson","AZ","85711","-110.883209","32.22176",3388],
				["Universal Technical Institute of Arizona Inc","Avondale","AZ","85323","-112.289712","33.453494",3091],
				["Western International University","Phoenix","AZ","85021","-112.116846","33.570542",4599],
				["Empire Beauty School-NW Phoenix","Glendale","AZ","85051","-112.118476","33.538563",2291],
				["Yavapai College","Prescott","AZ","86301","-112.457119","34.545361",2061],
				["University of Arkansas at Little Rock","Little Rock","AR","72204","-92.341778","34.72685",1915],
				["University of Arkansas for Medical Sciences","Little Rock","AR","72205-7199","-92.320992","34.75153",3987],
				["ABC Beauty College Inc","Arkadelphia","AR","71923","-93.08187","34.12268",3520],
				["Arkansas Baptist College","Little Rock","AR","72202-6099","-92.289393","34.735262",4439],
				["Arkansas Beauty School","Little Rock","AR","72209","-92.334962","34.668785",2799],
				["Arkansas Beauty College","Russellville","AR","72801","-93.135284","35.278587",1796],
				["Lyon College","Batesville","AR","72501","-91.628158","35.77897",2139],
				["Arkansas College of Barbering and Hair Design","North Little Rock","AR","72114","-92.266583","34.754023",2663],
				["Arthur's Beauty College Inc-Fort Smith","Fort Smith","AR","72901-3342","-94.410982","35.380232",2640],
				["University of Arkansas","Fayetteville","AR","72701","-94.17569","36.0671",4179],
				["University of Arkansas at Pine Bluff","Pine Bluff","AR","71601","-92.019062","34.242231",1514],
				["Arkansas State University-Beebe","Beebe","AR","72012-1000","-91.894579","35.070224",2129],
				["Arkansas State University-Main Campus","Jonesboro","AR","72401","-90.680478","35.842779",3894],
				["Arkansas Tech University","Russellville","AR","72801-2222","-93.134649","35.293505",2507],
				["University of Arkansas at Monticello","Monticello","AR","71656","-91.80068","33.59223",3167],
				["Arthur's Beauty College Inc","Jacksonville","AR","72076","-92.103665","34.891119",1710],
				["Baptist Health Schools-Little Rock","Little Rock","AR","72210-2820","-92.40547","34.712269",1898],
				["Bee Jays Academy","Little Rock","AR","72212","-92.405875","34.769604",1524],
				["Black River Technical College","Pocahontas","AR","72455","-90.913157","36.237882",2736],
				["University of Central Arkansas","Conway","AR","72035-0001","-92.454235","35.079315",3544],
				["Central Baptist College","Conway","AR","72034","-92.509599","35.089094",4298],
				["Cossatot Community College of the University of Arkansas","De Queen","AR","71832","-94.366883","34.044332",4619],
				["Crowley's Ridge College","Paragould","AR","72450","-90.58468","36.066294",1840],
				["Crowleys Ridge Technical Institute","Forrest City","AR","72335-0925","-90.77586","35.02685",2152],
				["De Luxe Beauty School","Pine Bluff","AR","71603-1666","-92.018492","34.203384",1494],
				["East Arkansas Community College","Forrest City","AR","72335","-90.775976","35.028127",3759],
				["Eastern College of Health Vocations-Little Rock","Little Rock","AR","72205","-92.341312","34.751221",2272],
				["Imagine-Paul Mitchell Partner School","North Little Rock","AR","72117","-92.22215","34.789458",2829],
				["National Park Community College","Hot Springs","AR","71913","-93.119307","34.513294",3940],
				["University of Arkansas Community College-Batesville","Batesville","AR","72503-3350","-91.602593","35.791214",4750],
				["Harding University","Searcy","AR","72143","-91.728772","35.249646",2816],
				["Henderson State University","Arkadelphia","AR","71999-0001","-93.059794","34.125583",3026],
				["Hendrix College","Conway","AR","72032-3080","-92.444187","35.100058",3637],
				["Hot Springs Beauty College","Hot Springs","AR","71901","-93.038379","34.496247",4249],
				["Jefferson Regional Medical Center School of Nursing","Pine Bluff","AR","71603","-92.018188","34.189017",2779],
				["John Brown University","Siloam Springs","AR","72761","-94.557506","36.187187",3552]
	    	]
	    }
	]
	this.componentSelected = function(){
		this.updateProps();
	};
	this.updateProps = function(){
		this.dataContents.setValue(this.data());	// String version
		this.updateTable(_data);					// Array version
	};
	this.dataContentsChanged = function(){try{
		// Step 1 - Translate from Text
		var d = this.dataContents.getValue();
		_data = [];
		_dataString = d.replace(/\|/g,"\n");
		var sd = _dataString.split("\n");
		for(var i=0;i<sd.length;i++){
			_data.push(sd[i].split(","));
		}
		this.cleanseData();		
		this.updateTable(_data);
		this.firePropertiesChanged(["data"]);
	}catch(e){alert(e)}};
	/**
	 * Cleanse Data
	 */
	this.cleanseData = function(){
		// Step 1 - Find Max Columns
		var maxCols = 0;
		for(var i=0;i<_data.length;i++) {
			if(_data[i].length>maxCols) maxCols = _data[i].length;
		}
		// Step 2 - Balance Columns
		for(var i=0;i<_data.length;i++){
			while(_data[i].length<maxCols){
				if(i==0){	// Header Row, give Column Name
					_data[i].push("Column " + _data[i].length);	
				}else{		// Measure (maybe make a null)
					if(_data[i].length < _kfIndex){
						_data[i].push("#");
					}else{
						_data[i].push(0);
					}
					
				}
			}
		}
		// Step 3 - Validate Columns
		for(var i=0;i<_data.length;i++){
			var row = _data[i];
			for(var j=0;j<row.length;j++){
				if(i>0 && j >= _kfIndex) {
					row[j] = Number(row[j]);
					if(isNaN(row[j])) row[j] = 0;
				}
			}
		};
		// Step 4 - Update UI5 Table and notify Design Studio Runtime
	}
	
	/**
	 * Insert a Row
	 */
	this.insertRow = function(index,direction){
		var m = this.table.getModel();
		var s = m.getJSON();
		var o = jQuery.parseJSON(s);
		var newRows = o.rows;
		var newHeaders = o.headers;
		var newData = [];
		newData.push(newHeaders);
		for(var r=0;r<newRows.length;r++){
			newData.push(newRows[r]);
		}
		newData.splice(index + direction + 1,0,[]);		// +1 to account for header
		_data = newData;
		this.cleanseData();
		var propsChanged = ["data"];
		this.firePropertiesChanged(propsChanged);
		this.updateProps();
	}
	/**
	 * Delete a Row
	 */
	this.deleteRow = function(index){
		var m = this.table.getModel();
		var s = m.getJSON();
		var o = jQuery.parseJSON(s);
		var newRows = o.rows;
		var newHeaders = o.headers;
		var newData = [];
		newData.push(newHeaders);
		for(var r=0;r<newRows.length;r++){
			newData.push(newRows[r]);
		}
		newData.splice(index + 1,1);		// +1 to account for header
		_data = newData;
		this.cleanseData();
		var propsChanged = ["data"];
		this.firePropertiesChanged(propsChanged);
		this.updateProps();
	}
	/**
	 * Splice in new column before
	 */
	this.insertColumn = function(index,direction){
		var m = this.table.getModel();
		var s = m.getJSON();
		var o = jQuery.parseJSON(s);
		var newRows = o.rows;
		var newHeaders = o.headers;
		newHeaders.splice(index + direction,0,"Column "+ (index + direction));
		var newData = [];
		newData.push(newHeaders);
		var newValue = "#";
		var dimensionAdded = false;
		if(index+direction >= _kfIndex) {
			newValue = 0;
		}else{
			dimensionAdded = true;
		}
		for(var r=0;r<newRows.length;r++){
			var row = newRows[r];
			row.splice(index + direction,0,newValue);
			newData.push(row);
		}
		_data = newData;
		var propsChanged = ["data"];
		if(dimensionAdded){
			_kfIndex++;
			propsChanged.push("kfIndex");
		}
		this.firePropertiesChanged(propsChanged);
		this.updateProps();
	}
	/**
	 * Delete a Column
	 */
	this.deleteColumn = function(index){
		var m = this.table.getModel();
		var s = m.getJSON();
		var o = jQuery.parseJSON(s);
		var newRows = o.rows;
		var newHeaders = o.headers;
		newHeaders.splice(index,1);
		var newData = [];
		newData.push(newHeaders);
		for(var r=0;r<newRows.length;r++){
			var row = newRows[r];
			row.splice(index,1);
			newData.push(row);
		}
		_data = newData;
		var propsChanged = ["data"];
		if(index < _kfIndex) {
			_kfIndex--;
			propsChanged.push("kfIndex");
		}
		this.firePropertiesChanged(propsChanged);
		this.updateProps();
	}
	/**
	 * Rename a Column
	 */
	this.renameColumn = function(index,newLabel){
		var m = this.table.getModel();
		var s = m.getJSON();
		var o = jQuery.parseJSON(s);
		var newRows = o.rows;
		var newHeaders = o.headers;
		newHeaders[index] = newLabel;
		var newData = [];
		newData.push(newHeaders);
		for(var r=0;r<newRows.length;r++){
			newData.push(newRows[r]);
		}
		_data = newData;
		var propsChanged = ["data"];
		this.firePropertiesChanged(propsChanged);
		this.updateProps();
	}
	/**
	 * Change a field
	 */
	this.changeField = function(){
		var m = this.table.getModel();
		var s = m.getJSON();
		var o = jQuery.parseJSON(s);
		var newRows = o.rows;
		var newHeaders = o.headers;
		var newData = [];
		newData.push(newHeaders);
		for(var r=0;r<newRows.length;r++){
			newData.push(newRows[r]);
		}
		_data = newData;
		var propsChanged = ["data"];
		this.firePropertiesChanged(propsChanged);
		this.updateProps();
	}
	/**
	 * Updates UI5 table
	 */
	this.updateTable = function(d){
		var rows = d;
		var fact = [];
		var headers = [];
		this.table.removeAllColumns();
		this.table.destroyRows();
		this.table.unbindRows();
		var headers = [];
		if(d.length>0){
			var headers = d[0];
			var rowMenu = new sap.ui.commons.Menu({});
			var rowMenuButton = new sap.ui.commons.MenuButton({
				icon : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIElEQVR42mNkoBAwAvH6ATeAYi8MAwNGY2EwGDDEYwEA8MUEK153B5IAAAAASUVORK5CYII=",
				menu : rowMenu
			});
			var uiCol = new sap.ui.table.Column({
				label : "",
				width : "50px",
				resizable : false,
				template : rowMenuButton.bindProperty("text","s")
			});
			var rowInsertBefore = new sap.ui.commons.MenuItem({
				text : "Insert Before",
				icon : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACZSURBVDhPY1yzZjMDKQCk4azxZCiPEDA+m8sEZRINaK+BLE+7u/tAeYTAzp1bBoOneZcx8s4BIQiXBYiBLoNwsINvDBMz4vJ7F0F4IA24PA039devXyDuRBAXpAEPAJoNUV0Z7QYk26fvwqvhKwPEJUDVQKUQMXyefpX2H4gYPkG5n2v/rzHbTDimQ075gqgPDGvcNjMwMAAAveg31dg0HpIAAAAASUVORK5CYII="
			});
			rowInsertBefore.attachSelect(function(){
				return function(oControlEvent){
					var model = oControlEvent.getSource().getModel();
					var path = oControlEvent.getSource().getBindingContext().getPath("rows");
			        var arrPath = path.split("/");
			        var index = parseInt(arrPath[arrPath.length-1]);
					this.insertRow(index,0);
				};
			}(),this);
			var rowInsertAfter = new sap.ui.commons.MenuItem({
				text : "Insert After",
				icon : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACRSURBVDhPY1yzZjMDKQCkwd3dB8ojBHbu3MIEZRINaK9hZHiadxkj7xwQgnBZgBjoMggHO/jGMDEjLr93EYQH0nDWeDKEgwbaN+yCMH79+gUkeSeCLAFpwAOAZkNUV0a7Acn26bvwavjKAHEJUDVQKUQMn6eB6kAGf4JxM93WmG0mHNMhp3xB1AeGNW6bGRgYAHnXNiTeec8GAAAAAElFTkSuQmCC"
			});
			rowInsertAfter.attachSelect(function(index){
				return function(oControlEvent){
					var model = oControlEvent.getSource().getModel();
					var path = oControlEvent.getSource().getBindingContext().getPath("rows");
			        var arrPath = path.split("/");
			        var index = parseInt(arrPath[arrPath.length-1]);
					this.insertRow(index,1);
				};
			}(i),this);
			var rowDelete = new sap.ui.commons.MenuItem({
				text : "Delete",
				icon : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA3SURBVDhPY1yzZjMDKQCkwd3dB8ojBHbu3MIEZRINaK+BLE87rlgK5REC+yOih4unR1hMMzAAADMQF2dN9VQWAAAAAElFTkSuQmCC"
			});
			rowDelete.attachSelect(function(index){
				return function(oControlEvent){
					var model = oControlEvent.getSource().getModel();
					var path = oControlEvent.getSource().getBindingContext().getPath("rows");
			        var arrPath = path.split("/");
			        var index = parseInt(arrPath[arrPath.length-1]);
					this.deleteRow(index);
				};
			}(i),this);
			rowMenu.addItem(rowInsertBefore);
			rowMenu.addItem(rowInsertAfter);
			rowMenu.addItem(rowDelete);

			this.table.addColumn(uiCol);
			for(var i=0;i<headers.length;i++){
				var field = new sap.ui.commons.TextField();
				field.attachChange(this.changeField,this);
				var uiCol = new sap.ui.table.Column({
					label: new sap.ui.commons.Label({text : headers[i]}),
					//width: "40px",
					template: field.bindProperty("value", String(i)),
					sortProperty: i,
					filterProperty: i
				});
				// Column Menu
				var m = new sap.ui.commons.Menu({});
				var menuInsertBefore = new sap.ui.commons.MenuItem({
					text : "Insert Before",
					icon : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABMlBMVEXY2P//xV//y4qfn7Pf3/+VlZWTk5OHh4eFhYX/t1F/f3+ZmbN9fX3Z2f93d3ezgzugoLNxcXGR915vb2/g4P9tbW2N81r/sEpra2tpaWn/vVf/0Zl74Uh33UTT0//+/v7/tlCamrPa2v//w12zgjqhobMAkwAAkQAAjwAAjQAAiwAAiQAAhwAAhQAAgwAAgQAAfQD/vFb/woEAdQAAbQD/z47W1tbGxsbb2///wlz/yIfewqKiorPi4v//rkj/zo3V1f+WlpaUlJScnLP/tE7c3P/j4/+CgoL/rUd6enp0dHT/ulT/wH9wcHBubm5sbGxqampoaGiG7FOdnbP/s03d3f943kX/wFr////X1/8AegAAeAAAcgAAcACenrPe3v//skz/v1nl5f+zgDn/vn2YmLNbHszzAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAACXZwQWcAAAAQAAAAEABcxq3DAAAAt0lEQVQY02OIQAMMIMKRncOdi8eTz0sQJsCobBluk2TL4gsVYLUMT5RCFnCSMjT0BgkIQwXY+FWSk1UF4pz9YAKcCi4hqm4ioTABM1P7BHEBWxZXUbCAvJq6JpOdB7NIvIU/RIWGkLa0lVVcvCsvWEBdU0tMT9/AOliRO1UCJKApJBYkExZtpKjEEBkAEtDR1ZeJMo714WaIdJCEmGEgG5OSkpIa6SAHFTCONTEH+cxPIhDqDmQAAAIXQfP5Hsc9AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDEyLTAyLTI2VDEyOjMwOjAwKzAxOjAwez08xAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxMi0wMi0yNlQxMjozMDowMCswMTowMApghHgAAAAASUVORK5CYII="
				});
				menuInsertBefore.attachSelect(function(index){
					return function(oControlEvent){
						this.insertColumn(index, 0);
					};
				}(i),this);
				
				var menuDelete = new sap.ui.commons.MenuItem({
					text : "Delete",
					icon : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAA3NCSVQICAjb4U/gAAAAn1BMVEX////4YmT/dnnyTE//dnn9bnH6am34YmT3XWD2WVv2VVjsOj3oMDLlJyrjICL2VVjzUVTwR0ruPT/iHB72WVvwR0rzUVT/h4r/gob/foH/eXv/dnn/cnT9bnH/bG76am3/Zmb6ZGf4YmT3XWD/WFv2WVv/VFf2VVj0TVDyTE/2SkzwR0rvREfuQUPuPT/sOj3rNDboMDLnLTDlJyrjICIhCpwnAAAANXRSTlMAESIiMzMzMzMzMzMzMzNERERERHd3qv///////////////////////////////////////0mgXpwAAAAJcEhZcwAAHngAAB54AcurAx8AAAAYdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3Jrc0+zH04AAACVSURBVBiVbczXFoIwDAbguHGi4mqbWugQZInj/Z9NSuXAhblJvuTkB+jV4NeHY9e9g+/M2KSxFKdRY0JwWltxoo72gvRMxcxTgqrM/Qp2QWmdt+kRJ5SyzgCGao09zw3TN8yWnSNEfo3LVWdTPJIwqdbWCyN5XABUeZi+NvViG0trgHeRPgM77O6l+/04A+zb9AD+1Bf6lg3jQQJJTgAAAABJRU5ErkJggg=="
				});
				menuDelete.attachSelect(function(index){
					return function(oControlEvent){
						this.deleteColumn(index);
					};
				}(i),this);
				var menuInsertAfter = new sap.ui.commons.MenuItem({
					text : "Insert After",
					icon : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABLFBMVEXz8///xV/f3/+VlZX/0pqTk5ORkZGPj4+NjY2trbPt7f+Hh4eFhYX/t1F/f3//yZN9fX2zgzugoLNxcXGR915vb2/7+/+N81r/sEqnp7P/vVf/0Zl74Uh33UT+/v7/tlDizLH/w12zgjqhobP8/P8AkwAAkQAAjwAAjQAAiwAAiQAAhwAAhQAAgwAAgQCoqLMAfQD/vFYAdQAAbQD/0Jjv7//IyMj/wlyiorPi4v//rkjw8P+WlpaUlJScnLOSkpL/tE6QkJD39/+Ojo6Kior/1Z2CgoLq6v//ulRwcHD/zpZubm7/zJaG7FP/s03/x4943kX/wFqkpLP/1Jz///+rq7Py8v8AegAAeAAAcgAAcACenrP5+f//v1mlpbPl5f//05usrLOzgDn/ypSdwyaSAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAACXZwQWcAAAAQAAAAEABcxq3DAAAAu0lEQVQY02MIQQMMISE2rI4cLtw8bnzCMIEQlRhORkXzQE+oALOKWAyneWCsFEzANibGKVHK0NBDFCrAysmZGCqolJTkDRNgYAjT55V38IMJ2Ftbm0o6+LkGm0EF2Li4uOIkrBJU1TSgAu7u7kEs0ibqIlpyYAFHCwsLZQU1DU1xXT0DkAB7fHy8kJeGiLivTEAEWMDS0jLaR1tHTybcKAok4MzExGSXzO9vIBsJMRTiMwEzoyhjiAAqAACTGz6DRU9JuwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxMi0wMi0yNlQxMjozMDowMCswMTowMHs9PMQAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTItMDItMjZUMTI6MzA6MDArMDE6MDAKYIR4AAAAAElFTkSuQmCC"
				});
				menuInsertAfter.attachSelect(function(index){
					return function(oControlEvent){
						this.insertColumn(index, 1);
					};
				}(i),this);
			
				var menuRename = new sap.ui.commons.MenuTextFieldItem({
					label : "Rename:",
					icon : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZ9JREFUeNqkUzlLA0EU/mZ2ks1hQAQtRDyCFlYpFDvBSkjjj1DwiqCVB9Y2VhYKYm1jIQjmB2jphX8hhY3gUQjZze7OPF92syroisGBZR773ne8mTeCiPCfJZIS6yvzZIQFwyUSBEkau/tHoh3ysea3UZmjOP6pSA1vn5HrawTmsxViVRKsa6XgP5+ge7N6K7QPQU0/UZ3kuK84COUw+HqrjOZOXzuSAlYqg53KMa44H3guyJgPiYwEFi+eoHxt0NuZxctDDRaDhGANFjG8w9ioM3GH8wTXdWBiAi7oLxbhBo9Q8S1MV9+QVRKSSQz/c7XAzWwPNLeWKxQglGoRsM8WxnBOxY5tC0wAdgEGRSRQdgjK57JQyoLWOu7u8xDjMaj7JmSUIgI7Ue2HbTud/n4FTY04vl8utT9E7ERa+H0SbbaetFLcixoYGUL5tIaGF4RUIZ1UIJWGSGcxms9g6vwV5DkQgcc9BTyZEbjuNaBuVicnyG+YJJXS0sLt5UzXeNtvYa2ySEaqVgkfLivvHRyKPxMkzP7dN4L/Pud3AQYAKoqz1m0k8iEAAAAASUVORK5CYII=",
					value : headers[i]
				});
				menuRename.attachSelect(function(index){
					return function(oControlEvent){
						this.renameColumn(index, oControlEvent.getSource().getValue());
					};
				}(i),this);

				m.addItem(menuInsertBefore);
				m.addItem(menuInsertAfter);
				m.addItem(menuRename);
				m.addItem(menuDelete);			
				uiCol.setMenu(m);
				this.table.addColumn(uiCol)
			}
			// End of Column Construction
			var dataModel = new sap.ui.model.json.JSONModel();
			var rows = [];
			for(var i=1;i<d.length;i++) {
				rows.push(d[i].slice(0));		// Shallow Copy
			}
			dataModel.setData({
				rows: rows,
				headers : headers
			});
			
			this.table.setModel(dataModel);
			this.table.bindRows("/rows");
		}
		
	};
	this.toggleView = function(oControlEvent){
		this._content.removeAllContent();
		if(this.toggleItem.getText() == "Switch to Table View"){
			this.toggleItem.setText("Switch to CSV View");
			this._content.addContent(this.table);
		}else{
			this.toggleItem.setText("Switch to Table View");
			this._content.addContent(this.dataContents);
		}
	};
	this.showRowMenu = function(oControlEvent){
		alert("!");
	};
	this.init = function(){try{
		// Init
		this.panel = new sap.ui.commons.Panel({
			text : "Data",
			showCollapseIcon : false,
			width : "100%"
		});
		this.mainMenu = new sap.ui.commons.Menu({});
		this.presetsMenu = new sap.ui.commons.Menu({});
		for(var i=0;i<this.presets.length;i++){
			var newPresetItem = new sap.ui.commons.MenuItem({
				text : this.presets[i].label
			});
			newPresetItem.attachSelect(function(index){
				return function(oControlEvent){
					_data = this.presets[index].data;
					_kfIndex = this.presets[index].dimensions;
					this.cleanseData();
					this.firePropertiesChanged(["kfIndex","data"]);
					this.updateProps();
				};				
			}(i),this);
			this.presetsMenu.addItem(newPresetItem);
		}
		this.toggleItem = new sap.ui.commons.MenuItem({
			text : "Switch to CSV View"
		})
		this.presetsItem = new sap.ui.commons.MenuItem({
			text : "Presets",
			submenu : this.presetsMenu
		})
		this.toggleItem.attachSelect(this.toggleView, this);
		this.mainMenu.addItem(this.toggleItem);
		this.mainMenu.addItem(this.presetsItem);
		this.panel.addButton(new sap.ui.commons.MenuButton({ 
			text : "Options",
			menu : this.mainMenu
		}));
		this._content = new sap.ui.commons.layout.VerticalLayout({
			width : "100%"
		});
		this.table = new sap.ui.table.Table({
			title : "Data",
			selectionMode: sap.ui.table.SelectionMode.None,
			visibleRowCount : 10,
			navigationMode : sap.ui.table.NavigationMode.Scrollbar
		});
		this.rowMenu = new sap.ui.commons.Menu({});
		//this.table.attachRowSelectionChange(this.showRowMenu,this);
		this.dataContents = new sap.ui.commons.TextArea({
			value : this.data(),
			design : sap.ui.core.Design.Monospace,
			rows : 10,
			width : "100%",
			wrapping : sap.ui.core.Wrapping.Off
		});
		this.dataContents.attachChange(this.dataContentsChanged, this);
		this._content.addContent(this.dataLayout);
		this._content.addContent(this.table);
		this.panel.addContent(this._content);
		this.panel.placeAt($("#content"));
		this.updateProps();
	}catch(e){alert(e);}};
	this.kfIndex = function(s){
		if(s===undefined){
			return String(_kfIndex);
		}else{
			_kfIndex = parseInt(s);
			return this;
		}
	};
	this.data = function(s){
		if(s===undefined){
			var d = [];
			for(var i=0;i<_data.length;i++){
				var r = _data[i].join(",");
				d.push(r);
			}
			return d.join("\n");
		}else{
			_data = [];
			_dataString = s.replace(/\|/g,"\n");
			var sd = _dataString.split("\n");
			for(var i=0;i<sd.length;i++){
				_data.push(sd[i].split(","));
			}
			this.updateProps();
			return this;
		}
	};
});