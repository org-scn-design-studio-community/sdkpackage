del ..\contribution.xml /q

type ..\..\org.scn.community.shared\templates.main\contribution.xml.head.txt ^
..\templates\contribution.xml.head.txt ^
..\..\org.scn.community.shared\templates.main\eula.xml.txt ^
..\..\org.scn.community.shared\templates.main\license.xml.txt ^
..\templates\contribution.xml.groups.txt ^
..\..\org.scn.community.shared\templates.main\contribution.xml.close.txt > ^
..\contribution.xml

del ..\contribution.ztl /q

type ..\..\org.scn.community.shared\templates.main\contribution.ztl.head.txt ^
..\templates\contribution.ztl.head.txt ^
..\..\org.scn.community.shared\templates.main\license.js.txt ^
..\res\ComponentsArrays\contribution.ztl ^
..\res\ConstBrowser\contribution.ztl ^
..\res\ConstButtonStyle\contribution.ztl ^
..\res\ConstButtonType\contribution.ztl ^
..\res\ConstContentNotation\contribution.ztl ^
..\res\ConstDimensionSet\contribution.ztl ^
..\res\ConstFormattingOperator\contribution.ztl ^
..\res\ConstImageSize\contribution.ztl ^
..\res\ConstMemberDisplay\contribution.ztl ^
..\res\ConstNavigationType\contribution.ztl ^
..\res\ConstPlacementType\contribution.ztl ^
..\res\ConstSelectionState\contribution.ztl ^
..\res\ConstSecondValueContent\contribution.ztl ^
..\res\ConstSortDirection\contribution.ztl ^
..\res\ConstSortType\contribution.ztl ^
..\res\DimensionMember\contribution.ztl ^
..\res\KeyLabel\contribution.ztl ^
..\res\KeyText\contribution.ztl ^
..\res\KeyLabelValue\contribution.ztl ^
..\res\KeyLabelValueProperty\contribution.ztl ^
..\res\NameValue\contribution.ztl ^
..\res\ValueText\contribution.ztl ^
..\def_shared\contribution.ztl ^
..\..\org.scn.community.shared\templates.main\contribution.ztl.close.txt > ^
..\contribution.ztl

del ..\META-INF\MANIFEST.MF /q

type ..\..\org.scn.community.shared\templates.main\MANIFEST.MF ^
..\templates\MANIFEST.MF > ^
..\META-INF\MANIFEST.MF
