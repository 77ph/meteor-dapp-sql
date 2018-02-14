AbiArray = [  {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "records",
      "outputs": [
        {
          "name": "db_name",
          "type": "bytes32"
        },
        {
          "name": "table_name",
          "type": "bytes32"
        },
        {
          "name": "db_key_name",
          "type": "bytes32"
        },
        {
          "name": "db_key_value",
          "type": "uint256"
        },
        {
          "name": "db_op_type",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getCount",
      "outputs": [
        {
          "name": "Count",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newDb_name",
          "type": "bytes32"
        },
        {
          "name": "newTable_name",
          "type": "bytes32"
        },
        {
          "name": "newDb_key_name",
          "type": "bytes32"
        },
        {
          "name": "newDb_key_value",
          "type": "uint256"
        },
        {
          "name": "newDb_op_type",
          "type": "bytes32"
        }
      ],
      "name": "addRec",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "payable": true,
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Deposit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "newDb_name",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "newTable_name",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "newDb_key_name",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "newDb_key_value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "newDb_op_type",
          "type": "bytes32"
        }
      ],
      "name": "AddRec",
      "type": "event"
    }];
