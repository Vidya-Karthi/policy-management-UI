#! /bin/ksh
#
# Publish ISP Static Content - DevFR2
#

rm -r /iplus/iplus_incentives/isp/qa/isp-app

if cp -r /iplus/envs/bfdeploy/buildagent/workspace/TMNA/DDC/IPLUS/IPLUS_ISPAngular_Prod/QAPS/QAPS_ISP_STATIC/ISP-APP/  /iplus/iplus_incentives/isp/qa/isp-app
then 
     echo /iplus/iplus_incentives/isp/qa/isp-app file copied successfully...
else
     echo /iplus/iplus_incentives/isp/qa/isp-app file copy failed..
     exit 1
fi
