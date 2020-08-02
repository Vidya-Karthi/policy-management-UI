#! /bin/ksh
#
# Publish ISP Static Content - DevFR2
#

rm -r /iplus/iplus_incentives/isp/qafr1/isp-app

if cp -r /iplus/envs/bfdeploy/buildagent/workspace/TMNA/DDC/IPLUS/IPLUS_ISPAngular/QAFR1/QAFR1_ISP_STATIC/ISP-APP/  /iplus/iplus_incentives/isp/qafr1/isp-app
then 
     echo /iplus/iplus_incentives/isp/qafr1/isp-app file copied successfully...
else
     echo /iplus/iplus_incentives/isp/qafr1/isp-app file copy failed..
     exit 1
fi
