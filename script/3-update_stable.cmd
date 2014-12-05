set current=%cd%

cd ..\releases\stable\features\
del *.* /q

cd ..\plugins\
del *.* /q

cd..

del *.jar /q
del *.zip /q

cd %current%

copy ..\releases\preview\features\*.* ..\releases\stable\features\
copy ..\releases\preview\plugins\*.* ..\releases\stable\plugins\
copy ..\releases\preview\*.jar ..\releases\stable\
copy ..\releases\preview\*.xml ..\releases\stable\
copy ..\releases\preview\org.scn.community.sdk.package_preview.zip ..\releases\stable\org.scn.community.sdk.package_stable.zip