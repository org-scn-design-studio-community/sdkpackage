del ..\contribution.xml /q

type ..\..\org.scn.community.shared\templates.main\contribution.xml.head.txt ^
..\templates\contribution.xml.head.txt ^
..\..\org.scn.community.shared\templates.main\eula.xml.txt ^
..\..\org.scn.community.shared\templates.main\license.xml.txt ^
..\templates\contribution.xml.groups.txt ^
..\res\dd\def\contribution.xml ^
..\res\lb\def\contribution.xml ^
..\res\map\def\contribution.xml ^
..\res\rsl\def\contribution.xml ^
..\res\sl\def\contribution.xml ^
..\res\tab\def\contribution.xml ^
..\res\tf\def\contribution.xml ^
..\res\tfc\def\contribution.xml ^
..\..\org.scn.community.shared\templates.main\contribution.xml.close.txt > ^
..\contribution.xml

del ..\contribution.ztl /q

type ..\..\org.scn.community.shared\templates.main\contribution.ztl.head.txt ^
..\templates\contribution.ztl.head.txt ^
..\..\org.scn.community.shared\templates.main\license.js.txt ^
..\res\dd\def\contribution.ztl ^
..\res\lb\def\contribution.ztl ^
..\res\map\def\contribution.ztl ^
..\res\rsl\def\contribution.ztl ^
..\res\sl\def\contribution.ztl ^
..\res\tab\def\contribution.ztl ^
..\res\tf\def\contribution.ztl ^
..\res\tfc\def\contribution.ztl ^
..\..\org.scn.community.shared\templates.main\contribution.ztl.close.txt > ^
..\contribution.ztl

del ..\META-INF\MANIFEST.MF /q

type ..\..\org.scn.community.shared\templates.main\MANIFEST.MF ^
..\templates\MANIFEST.MF > ^
..\META-INF\MANIFEST.MF
