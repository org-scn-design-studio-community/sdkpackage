del ..\contribution.xml /q

type ..\..\org.scn.community.shared\templates.main\contribution.xml.head.txt ^
..\templates\contribution.xml.head.txt ^
..\..\org.scn.community.shared\templates.main\eula.xml.txt ^
..\..\org.scn.community.shared\templates.main\license.xml.txt ^
..\templates\contribution.xml.groups.txt ^
..\res\ac\def\contribution.xml ^
..\res\ah\def\contribution.xml ^
..\res\bbc\def\contribution.xml ^
..\res\cbg\def\contribution.xml ^
..\res\cp\def\contribution.xml ^
..\res\dda\def\contribution.xml ^
..\res\fb\def\contribution.xml ^
..\res\fe\def\contribution.xml ^
..\res\fp\def\contribution.xml ^
..\res\ic\def\contribution.xml ^
..\res\kpi\def\contribution.xml ^
..\res\lb\def\contribution.xml ^
..\res\li\def\contribution.xml ^
..\res\mb\def\contribution.xml ^
..\res\mbt\def\contribution.xml ^
..\res\nb\def\contribution.xml ^
..\res\osm\def\contribution.xml ^
..\res\pa\def\contribution.xml ^
..\res\pi\def\contribution.xml ^
..\res\ri\def\contribution.xml ^
..\res\rsl\def\contribution.xml ^
..\res\sl\def\contribution.xml ^
..\res\ta\def\contribution.xml ^
..\res\tb\def\contribution.xml ^
..\res\tr\def\contribution.xml ^
..\res\vif\def\contribution.xml ^
..\..\org.scn.community.shared\templates.main\contribution.xml.close.txt > ^
..\contribution.xml

del ..\contribution.ztl /q

type ..\..\org.scn.community.shared\templates.main\contribution.ztl.head.txt ^
..\templates\contribution.ztl.head.txt ^
..\..\org.scn.community.shared\templates.main\license.js.txt ^
..\res\ac\def\contribution.ztl ^
..\res\ah\def\contribution.ztl ^
..\res\bbc\def\contribution.ztl ^
..\res\cbg\def\contribution.ztl ^
..\res\cp\def\contribution.ztl ^
..\res\dda\def\contribution.ztl ^
..\res\fb\def\contribution.ztl ^
..\res\fe\def\contribution.ztl ^
..\res\fp\def\contribution.ztl ^
..\res\ic\def\contribution.ztl ^
..\res\kpi\def\contribution.ztl ^
..\res\lb\def\contribution.ztl ^
..\res\li\def\contribution.ztl ^
..\res\mb\def\contribution.ztl ^
..\res\mbt\def\contribution.ztl ^
..\res\nb\def\contribution.ztl ^
..\res\osm\def\contribution.ztl ^
..\res\pa\def\contribution.ztl ^
..\res\pi\def\contribution.ztl ^
..\res\ri\def\contribution.ztl ^
..\res\rsl\def\contribution.ztl ^
..\res\sl\def\contribution.ztl ^
..\res\ta\def\contribution.ztl ^
..\res\tb\def\contribution.ztl ^
..\res\tr\def\contribution.ztl ^
..\res\vif\def\contribution.ztl ^
..\..\org.scn.community.shared\templates.main\contribution.ztl.close.txt > ^
..\contribution.ztl

del ..\META-INF\MANIFEST.MF /q

type ..\..\org.scn.community.shared\templates.main\MANIFEST.MF ^
..\templates\MANIFEST.MF > ^
..\META-INF\MANIFEST.MF
