set current=%cd%

set module=org.scn.community.shared
cd ..\src\%module%\script\
call build.cmd
cd %current%

set module=org.scn.community.utils
cd ..\src\%module%\script\
call build.cmd
cd %current%

set module=org.scn.community.basics
cd ..\src\%module%\script\
call build.cmd
cd %current%

set module=org.scn.community.databound
cd ..\src\%module%\script\
call build.cmd
cd %current%

set module=org.scn.community.datasource
cd ..\src\%module%\script\
call build.cmd
cd %current%

set module=org.scn.community.prototypes
cd ..\src\%module%\script\
call build.cmd
cd %current%

set module=org.scn.community.geovis
cd ..\src\%module%\script\
call build.cmd
cd %current%

copy ..\src\org.scn.community.basics\res\require_loader.js ..\src\org.scn.community.databound\res\require_loader.js /Y
copy ..\src\org.scn.community.basics\res\require_loader.js ..\src\org.scn.community.utils\res\require_loader.js /Y
copy ..\src\org.scn.community.basics\res\require_loader.js ..\src\org.scn.community.datasource\res\require_loader.js /Y
copy ..\src\org.scn.community.basics\res\require_loader.js ..\src\org.scn.community.prototypes\res\require_loader.js /Y
copy ..\src\org.scn.community.basics\res\require_loader.js ..\src\org.scn.community.shared\res\require_loader.js /Y

copy ..\src\org.scn.community.basics\aps\*.* ..\src\org.scn.community.databound\aps\ /Y
copy ..\src\org.scn.community.basics\aps\*.* ..\src\org.scn.community.utils\aps\ /Y
copy ..\src\org.scn.community.basics\aps\*.* ..\src\org.scn.community.datasource\aps\ /Y
copy ..\src\org.scn.community.basics\aps\*.* ..\src\org.scn.community.prototypes\aps\ /Y