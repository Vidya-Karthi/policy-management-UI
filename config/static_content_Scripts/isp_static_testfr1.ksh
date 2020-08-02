#! /bin/ksh
#
# Publish ISP Static Content - TestFR1
#

rm -r /iplus/iplus_incentives/isp/testfr1/isp-app

if cp -r /iplus/envs/bfdeploy/buildagent_v2/workspace/TMNA/DDC/IPLUS/IPLUS_ISPAngular/Testfr1/TESTFR1_ISP_STATIC/ISP-APP/  /iplus/iplus_incentives/isp/testfr1/isp-app
then 
     echo /iplus/iplus_incentives/isp/testfr1/isp-app file copied successfully...
else
     echo /iplus/iplus_incentives/isp/testfr1/isp-app file copy failed..
     exit 1
fi
