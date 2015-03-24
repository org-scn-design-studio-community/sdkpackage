del topojson\%3-regions.json
mapshaper -i shape-files\%1_adm\%1_adm%2.shp encoding=%5 -filter-fields ISO,NAME_0,NAME_1,VARNAME_1 -simplify %4%% -o topojson\%3-regions.json prettify format=topojson