del ..\contribution.xml /q

type ..\..\org.scn.community.shared\templates.main\contribution.xml.head.txt ^
..\templates\contribution.xml.head.txt ^
..\..\org.scn.community.shared\templates.main\eula.xml.txt ^
..\..\org.scn.community.shared\templates.main\license.xml.txt ^
..\templates\contribution.xml.groups.txt ^
..\res\Array\def\contribution.xml ^
..\res\ClientInformation\def\contribution.xml ^
..\res\Collection\def\contribution.xml ^
..\res\DataSourceHelper\def\contribution.xml ^
..\res\Debugger\def\contribution.xml ^
..\res\ComponentManager\def\contribution.xml ^
..\res\CustomCssCollector\def\contribution.xml ^
..\res\FlowLayouter\def\contribution.xml ^
..\res\JsonObject\def\contribution.xml ^
..\res\Math\def\contribution.xml ^
..\res\OpenUrlInplace\def\contribution.xml ^
..\res\OpenWindowPost\def\contribution.xml ^
..\res\PdfPrint\def\contribution.xml ^
..\res\PostResponseParser\def\contribution.xml ^
..\res\RealDate\def\contribution.xml ^
..\res\SimpleDate\def\contribution.xml ^
..\res\WSPusher\def\contribution.xml ^
..\..\org.scn.community.shared\templates.main\contribution.xml.close.txt > ^
..\contribution.xml

del ..\contribution.ztl /q

type ..\..\org.scn.community.shared\templates.main\contribution.ztl.head.txt ^
..\templates\contribution.ztl.head.txt ^
..\..\org.scn.community.shared\templates.main\license.js.txt ^
..\res\Array\def\contribution.ztl ^
..\res\ClientInformation\def\contribution.ztl ^
..\res\Collection\def\contribution.ztl ^
..\res\ComponentManager\def\contribution.ztl ^
..\res\CustomCssCollector\def\contribution.ztl ^
..\res\Debugger\def\contribution.ztl ^
..\res\DataSourceHelper\def\contribution.ztl ^
..\res\FlowLayouter\def\contribution.ztl ^
..\res\JsonObject\def\contribution.ztl ^
..\res\Math\def\contribution.ztl ^
..\res\OpenUrlInplace\def\contribution.ztl ^
..\res\OpenWindowPost\def\contribution.ztl ^
..\res\PdfPrint\def\contribution.ztl ^
..\res\PostResponseParser\def\contribution.ztl ^
..\res\RealDate\def\contribution.ztl ^
..\res\SimpleDate\def\contribution.ztl ^
..\res\WSPusher\def\contribution.ztl ^
..\..\org.scn.community.shared\templates.main\contribution.ztl.close.txt > ^
..\contribution.ztl

del ..\META-INF\MANIFEST.MF /q

type ..\..\org.scn.community.shared\templates.main\MANIFEST.MF ^
..\templates\MANIFEST.MF > ^
..\META-INF\MANIFEST.MF
