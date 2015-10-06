del .\vizDefs\Core.generated.xml
del .\vizDefs\Databound.generated.xml
del .\vizDefs\BaseViz.generated.xml
del .\vizDefs\BaseVizXY.generated.xml
del .\vizDefs\AxisChart.generated.xml
del .\vizDefs\Map.generated.xml

type .\vizDefs\Core.properties.xml > .\vizDefs\Core.generated.xml
type .\vizDefs\Core.generated.xml .\vizDefs\Databound.properties.xml > .\vizDefs\Databound.generated.xml
type .\vizDefs\Databound.generated.xml .\vizDefs\BaseViz.properties.xml > .\vizDefs\BaseViz.generated.xml
type .\vizDefs\BaseViz.generated.xml .\vizDefs\AxisChart.properties.xml > .\vizDefs\AxisChart.generated.xml
type .\vizDefs\BaseViz.generated.xml .\vizDefs\BaseVizXY.properties.xml > .\vizDefs\BaseVizXY.generated.xml
type .\vizDefs\BaseViz.generated.xml .\vizDefs\Map.properties.xml > .\vizDefs\Map.generated.xml

type .\vizDefs\Core.defaults.xml > .\vizDefs\Core.defaults.generated.xml
type .\vizDefs\Core.defaults.generated.xml .\vizDefs\Databound.defaults.xml > .\vizDefs\Databound.defaults.generated.xml
type .\vizDefs\Databound.defaults.generated.xml .\vizDefs\BaseViz.defaults.xml > .\vizDefs\BaseViz.defaults.generated.xml
type .\vizDefs\BaseViz.defaults.generated.xml .\vizDefs\AxisChart.defaults.xml > .\vizDefs\AxisChart.defaults.generated.xml
type .\vizDefs\BaseViz.defaults.generated.xml .\vizDefs\BaseVizXY.defaults.xml > .\vizDefs\BaseVizXY.defaults.generated.xml
type .\vizDefs\BaseViz.defaults.generated.xml .\vizDefs\Map.defaults.xml > .\vizDefs\Map.defaults.generated.xml

del ..\res\Table2D\def\contribution.xml
type ..\res\Table2D\def\header.xml ^
.\vizDefs\Databound.generated.xml ^
..\res\Table2D\def\properties.xml ^
.\vizDefs\InitializationHeader.xml ^
.\vizDefs\Databound.defaults.generated.xml ^
..\res\Table2D\def\defaults.xml ^
.\vizDefs\Footer.xml > ^
..\res\Table2D\def\contribution.xml

del ..\res\AdvancedDataTable\def\contribution.xml
type ..\res\AdvancedDataTable\def\header.xml ^
.\vizDefs\Databound.generated.xml ^
..\res\AdvancedDataTable\def\properties.xml ^
.\vizDefs\InitializationHeader.xml ^
.\vizDefs\Databound.defaults.generated.xml ^
..\res\AdvancedDataTable\def\defaults.xml ^
.\vizDefs\Footer.xml > ^
..\res\AdvancedDataTable\def\contribution.xml

del ..\res\Pictogram\def\contribution.xml
type ..\res\Pictogram\def\header.xml ^
.\vizDefs\Core.generated.xml ^
..\res\Pictogram\def\properties.xml ^
.\vizDefs\InitializationHeader.xml ^
.\vizDefs\Core.defaults.generated.xml ^
..\res\Pictogram\def\defaults.xml ^
.\vizDefs\Footer.xml > ^
..\res\Pictogram\def\contribution.xml

del ..\res\ProgressBarSet\def\contribution.xml
type ..\res\ProgressBarSet\def\header.xml ^
.\vizDefs\Databound.generated.xml ^
..\res\ProgressBarSet\def\properties.xml ^
.\vizDefs\InitializationHeader.xml ^
.\vizDefs\Databound.defaults.generated.xml ^
..\res\ProgressBarSet\def\defaults.xml ^
.\vizDefs\Footer.xml > ^
..\res\ProgressBarSet\def\contribution.xml

del ..\res\ScatterPlot\def\contribution.xml
type ..\res\ScatterPlot\def\header.xml ^
.\vizDefs\BaseVizXY.generated.xml ^
..\res\ScatterPlot\def\properties.xml ^
.\vizDefs\InitializationHeader.xml ^
.\vizDefs\BaseVizXY.defaults.generated.xml ^
..\res\ScatterPlot\def\defaults.xml ^
.\vizDefs\Footer.xml > ^
..\res\ScatterPlot\def\contribution.xml

del ..\res\HexBin\def\contribution.xml
type ..\res\HexBin\def\header.xml ^
.\vizDefs\BaseVizXY.generated.xml ^
..\res\HexBin\def\properties.xml ^
.\vizDefs\InitializationHeader.xml ^
.\vizDefs\BaseVizXY.defaults.generated.xml ^
..\res\HexBin\def\defaults.xml ^
.\vizDefs\Footer.xml > ^
..\res\HexBin\def\contribution.xml

del ..\res\MarimekkoChart\def\contribution.xml
type ..\res\MarimekkoChart\def\header.xml ^
.\vizDefs\AxisChart.generated.xml ^
..\res\MarimekkoChart\def\properties.xml ^
.\vizDefs\InitializationHeader.xml ^
.\vizDefs\AxisChart.defaults.generated.xml ^
..\res\MarimekkoChart\def\defaults.xml ^
.\vizDefs\Footer.xml > ^
..\res\MarimekkoChart\def\contribution.xml

del ..\res\Choropleth\def\contribution.xml
type ..\res\Choropleth\def\header.xml ^
.\vizDefs\Map.generated.xml ^
..\res\Choropleth\def\properties.xml ^
.\vizDefs\InitializationHeader.xml ^
.\vizDefs\Map.defaults.generated.xml ^
..\res\Choropleth\def\defaults.xml ^
.\vizDefs\Footer.xml > ^
..\res\Choropleth\def\contribution.xml

del ..\res\LocationIntel\def\contribution.xml
type ..\res\LocationIntel\def\header.xml ^
.\vizDefs\Map.generated.xml ^
..\res\LocationIntel\def\properties.xml ^
.\vizDefs\InitializationHeader.xml ^
.\vizDefs\Map.defaults.generated.xml ^
..\res\LocationIntel\def\defaults.xml ^
.\vizDefs\Footer.xml > ^
..\res\LocationIntel\def\contribution.xml