#! /bin/ksh
#
# Publish ISP Static Content - TestJIIT
#

rm -r /iplus/iplus_incentives/isp/testjit/isp-app

if cp -r /iplus/envs/bfdeploy/buildagent_v2/workspace/TMNA/DDC/IPLUS/IPLUS_ISPAngular/Testjit/TESTJIT_ISP_STATIC/ISP-APP /iplus/iplus_incentives/isp/testjit/isp-app
then 
     echo /iplus/iplus_incentives/isp/testjit/isp-app file copied successfully...
else
     echo /iplus/iplus_incentives/isp/testjit/isp-app file copy failed..
     exit 1
fi
