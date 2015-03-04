del ..\contribution.xml /q

type ..\..\org.scn.community.shared\templates.main\contribution.xml.head.txt ^
..\templates\contribution.xml.head.txt ^
..\..\org.scn.community.shared\templates.main\eula.xml.txt ^
..\..\org.scn.community.shared\templates.main\license.xml.txt ^
..\templates\contribution.xml.groups.txt ^
..\res\ApplicationHeaderEventTrigger\def\contribution.xml ^
..\res\ApplicationHeaderOnBeforeRender\def\contribution.xml ^
..\res\ProgressSet\def\contribution.xml ^
..\res\SapMList\def\contribution.xml ^
..\res\RapidPrototype\def\contribution.xml ^
..\..\org.scn.community.shared\templates.main\contribution.xml.close.txt > ^
..\contribution.xml

del ..\contribution.ztl /q

type ..\..\org.scn.community.shared\templates.main\contribution.ztl.head.txt ^
..\templates\contribution.ztl.head.txt ^
..\..\org.scn.community.shared\templates.main\license.js.txt ^
..\res\ApplicationHeaderEventTrigger\def\contribution.ztl ^
..\res\ApplicationHeaderOnBeforeRender\def\contribution.ztl ^
..\res\ProgressSet\def\contribution.ztl ^
..\res\SapMList\def\contribution.ztl ^
..\res\RapidPrototype\def\contribution.ztl ^
..\..\org.scn.community.shared\templates.main\contribution.ztl.close.txt > ^
..\contribution.ztl

del ..\META-INF\MANIFEST.MF /q

type ..\..\org.scn.community.shared\templates.main\MANIFEST.MF ^
..\templates\MANIFEST.MF > ^
..\META-INF\MANIFEST.MF
