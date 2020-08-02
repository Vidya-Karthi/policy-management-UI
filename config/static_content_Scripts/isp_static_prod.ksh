#! /bin/ksh
#
# Publish ISP Static Content - PROD
#

rm -r /iplus/incentives/isp/prod/isp-app

if cp -r /iplus/envs/bfdeploy/buildagent/workspace/TMNA/DDC/IPLUS/IPLUS_ISPAngular_Prod/PROD/PROD_ISP_STATIC/ISP-APP/  /iplus/incentives/isp/prod/isp-app
then 
     echo /iplus/incentives/isp/prod/isp-app file copied successfully...
else
     echo /iplus/incentives/isp/prod/isp-app file copy failed..
     exit 1
fi
