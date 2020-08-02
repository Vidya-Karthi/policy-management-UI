#! /bin/ksh
#
# Publish ISP Static Content - TestFr2
#

rm -r /iplus/iplus_incentives/isp/testfr2/isp-app

if cp -r /iplus/envs/bfdeploy/buildagent/workspace/TMNA/DDC/IPLUS/IPLUS_ISPAngular/Testfr2/TESTFR2_ISP_STATIC/ISP-APP/  /iplus/iplus_incentives/isp/testfr2/isp-app
then 
     echo /iplus/iplus_incentives/isp/testfr2/isp-app file copied successfully...
else
     echo /iplus/iplus_incentives/isp/testfr2/isp-app file copy failed..
     exit 1
fi
