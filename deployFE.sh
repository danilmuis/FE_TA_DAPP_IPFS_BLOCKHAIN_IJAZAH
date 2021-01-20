#!/bin/bash
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/local/go/bin:/root/gopath/bin:/usr/local/lib/nod$#shopt -s expand_aliases
LOCATE=/home/mdm/FE_TA_DAPP_IPFS_BLOCKHAIN_IJAZAH
#alias node=/usr/local/lib/nodejs/node-v12.19.0-linux-x64/bin/node
#alias npm=/usr/local/lib/nodejs/node-v12.19.0-linux-x64/bin/npm
#cd $LOCATE
pwd
whoami
echo $PATH
git -C $LOCATE pull
npm --prefix $LOCATE install
npm --prefix $LOCATE run build
rm -r /var/www/sivil
mv $LOCATE/dist /var/www/sivil
echo "DONE"