del ..\contribution.xml /q

REM Build Viz Databound contribution.xml files
call build_viz.cmd

REM Build the rest as normal
type ..\..\org.scn.community.shared\templates.main\contribution.xml.head.txt ^
..\templates\contribution.xml.head.txt ^
..\..\org.scn.community.shared\templates.main\eula.xml.txt ^
..\..\org.scn.community.shared\templates.main\license.xml.txt ^
..\templates\contribution.xml.groups.txt ^
..\res\AdvancedDataTable\def\contribution.xml ^
..\res\BulletChart\def\contribution.xml ^
..\res\Choropleth\def\contribution.xml ^
..\res\DropDown\def\contribution.xml ^
..\res\FacetFilter\def\contribution.xml ^
..\res\FacetSelector\def\contribution.xml ^
..\res\FioriLink\def\contribution.xml ^
..\res\FioriBusyDialog\def\contribution.xml ^
..\res\HexBin\def\contribution.xml ^
..\res\Hierarchy\def\contribution.xml ^
..\res\LeaderBoard\def\contribution.xml ^
..\res\LeafletMap\def\contribution.xml ^
..\res\LocationIntel\def\contribution.xml ^
..\res\MarimekkoChart\def\contribution.xml ^
..\res\MultiComboBox\def\contribution.xml ^
..\res\MultiLevelDropDown\def\contribution.xml ^
..\res\NiceChart\def\contribution.xml ^
..\res\Pictogram\def\contribution.xml ^
..\res\ProcessFlow\def\contribution.xml ^
..\res\ProgressBarSet\def\contribution.xml ^
..\res\RadioButtonGroup\def\contribution.xml ^
..\res\RangeSlider\def\contribution.xml ^
..\res\ResultSetInfo\def\contribution.xml ^
..\res\ResultSetMixer\def\contribution.xml ^
..\res\ScatterPlot\def\contribution.xml ^
..\res\Slider\def\contribution.xml ^
..\res\Table\def\contribution.xml ^
..\res\Table2D\def\contribution.xml ^
..\res\TagCloud\def\contribution.xml ^
..\res\TopFlop\def\contribution.xml ^
..\res\TopFlopChart\def\contribution.xml ^
..\res\UI5Table\def\contribution.xml ^
..\res\AreaMicroChart\def\contribution.xml ^
..\res\BulletMicroChart\def\contribution.xml ^
..\res\HarveyBallMicroChart\def\contribution.xml ^
..\..\org.scn.community.shared\templates.main\contribution.xml.close.txt > ^
..\contribution.xml

del ..\contribution.ztl /q

type ..\..\org.scn.community.shared\templates.main\contribution.ztl.head.txt ^
..\templates\contribution.ztl.head.txt ^
..\..\org.scn.community.shared\templates.main\license.js.txt ^
..\res\AdvancedDataTable\def\contribution.ztl ^
..\res\BulletChart\def\contribution.ztl ^
..\res\Choropleth\def\contribution.ztl ^
..\res\DropDown\def\contribution.ztl ^
..\res\Hierarchy\def\contribution.ztl ^
..\res\FacetFilter\def\contribution.ztl ^
..\res\FacetSelector\def\contribution.ztl ^
..\res\FioriLink\def\contribution.ztl ^
..\res\FioriBusyDialog\def\contribution.ztl ^
..\res\HexBin\def\contribution.ztl ^
..\res\LeaderBoard\def\contribution.ztl ^
..\res\LeafletMap\def\contribution.ztl ^
..\res\LocationIntel\def\contribution.ztl ^
..\res\MarimekkoChart\def\contribution.ztl ^
..\res\MultiComboBox\def\contribution.ztl ^
..\res\MultiLevelDropDown\def\contribution.ztl ^
..\res\NiceChart\def\contribution.ztl ^
..\res\Pictogram\def\contribution.ztl ^
..\res\ProcessFlow\def\contribution.ztl ^
..\res\ProgressBarSet\def\contribution.ztl ^
..\res\RadioButtonGroup\def\contribution.ztl ^
..\res\RangeSlider\def\contribution.ztl ^
..\res\ResultSetInfo\def\contribution.ztl ^
..\res\ResultSetMixer\def\contribution.ztl ^
..\res\ScatterPlot\def\contribution.ztl ^
..\res\Slider\def\contribution.ztl ^
..\res\Table\def\contribution.ztl ^
..\res\TagCloud\def\contribution.ztl ^
..\res\TopFlop\def\contribution.ztl ^
..\res\TopFlopChart\def\contribution.ztl ^
..\res\UI5Table\def\contribution.ztl ^
..\res\AreaMicroChart\def\contribution.ztl ^
..\res\BulletMicroChart\def\contribution.ztl ^
..\res\HarveyBallMicroChart\def\contribution.ztl ^
..\..\org.scn.community.shared\templates.main\contribution.ztl.close.txt > ^
..\contribution.ztl

del ..\META-INF\MANIFEST.MF /q

type ..\..\org.scn.community.shared\templates.main\MANIFEST.MF ^
..\templates\MANIFEST.MF > ^
..\META-INF\MANIFEST.MF
