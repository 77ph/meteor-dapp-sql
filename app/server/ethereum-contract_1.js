var adC = web3.eth.contract(AbiArray);
var AddRecordInstance = adC.at(ContractAddress);
console.log("Try call AddRecordInstance.addRec +1 from mysql");
AddRecordInstance.addRec("digotatortestdb", "answers", "Id", 16, "update", 1512548971, {from: '0x9dfd03f48c7b66f86f2b70425b4a697d7c79205f', gas: 600000});
var count = AddRecordInstance.getCount();
console.log("Try get number rec. AFTER. call AddRecordInstance.getCount = ", count); 
