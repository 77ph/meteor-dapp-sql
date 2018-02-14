var adC = web3.eth.contract(AbiArray);
var AddRecordInstance = adC.at(ContractAddress);
var count = AddRecordInstance.getCount();
console.log("Try get number rec. ethereum-contract. call AddRecordInstance.getCount = ", count);

web3.eth.filter('latest').watch(function(e, blockHash) {
    if(!e) {
        web3.eth.getBlock(blockHash, function(e, block){
            // console.log('latestBlock : ', block);
        });
    }
});

var curTransactionHash = "";

AddRecordInstance.AddRec({}).watch(Meteor.bindEnvironment(function(e, log) { 
   if(!e) {
        // add the transaction to our collection
	console.log("log removed: " + log.removed + " blockNumber: " + log.blockNumber + " transactionHash: " + log.transactionHash);
	if(curTransactionHash != log.transactionHash) {
		var Db_name;
		var Table_name;
		var Db_key_name;
		var Db_key_value;
		var Db_op_type;
		Db_name = web3.toAscii(log.args.newDb_name);
		Table_name = web3.toAscii(log.args.newTable_name);
		Db_key_name = web3.toAscii(log.args.newDb_key_name);
		Db_key_value = log.args.newDb_key_value;
		Db_op_type =  web3.toAscii(log.args.newDb_op_type);
        	console.log("log: " + JSON.stringify(log, null, 2) + " blockNumber: " + log.blockNumber + " transactionHash: " + log.transactionHash);
		console.log("db_name: " + log.args.newDb_name + " converted: " + web3.toAscii(log.args.newDb_name));
		console.log("newTable_name: " + log.args.newTable_name + " converted: " + web3.toAscii(log.args.newTable_name));
		console.log("newDb_key_name: " + log.args.newDb_key_name + " converted: " + web3.toAscii(log.args.newDb_key_name));
		console.log("newDb_key_value: " + log.args.newDb_key_value);
		console.log("newDb_op_type: " + log.args.newDb_op_type + " converted: " + web3.toAscii(log.args.newDb_op_type));
		curTransactionHash = log.transactionHash;
		License.insert({
                        createdAt: new Date(),
                        db_name: Db_name,
                        table_name: Table_name,
			db_key_name: Db_key_name,
			db_key_value: Db_key_value,
			db_op_type: Db_op_type,
                        blockNumber: log.blockNumber,
                        transactionHash: log.transactionHash
                });

	}
    } else {
        console.log("AddRecord.AddRec event call with error: " + e);    
    }
}));


