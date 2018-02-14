#!/bin/bash

LOG="/opt/call_mysql_audit.log"

T=$( date +"%Y-%m-%d_%H-%M-%S" )
echo "exec ${T} Using: $*" >> ${LOG}

DST="/home/al/meteor-dapp-sql/app/server"

# exec 2017-09-13_15-03-55 Using: digotatortestdb answers Id 55 4e02687e21fe2ed40c1241e9ca0a2993becda6c474cf064eb0e4decb69cb94e9 abc7dc89c30b005dcd7b45e1a20d2729cd8ec12fbbc99ff053eaef5e9b6b350e update 1505304235
 
cat << EOF > /tmp/ethereum-contract_1.js
var adC = web3.eth.contract(AbiArray);
var AddRecordInstance = adC.at(ContractAddress);
console.log("Try call AddRecordInstance.addRec +1 from mysql");
AddRecordInstance.addRec("$1", "$2", "$3", $4, "$7", $8, {from: '0x9dfd03f48c7b66f86f2b70425b4a697d7c79205f', gas: 600000});
var count = AddRecordInstance.getCount();
console.log("Try get number rec. AFTER. call AddRecordInstance.getCount = ", count); 
EOF

chmod 666 /tmp/ethereum-contract_1.js

mv /tmp/ethereum-contract_1.js ${DST}/
