set current=%cd%

cd..
cd tools\tools.html.generator\target\classes

call java -cp "../../os/*;." org.scn.community.htmlgenerator.Main

cd %current%