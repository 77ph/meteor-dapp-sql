/**
Template Controllers

@module Templates
*/

/**
The view2 template

@class [template] views_view2
@constructor
*/

Template.views_view2.onCreated(function() {
	  Meta.setSuffix(TAPi18n.__("dapp.view2.title"));
});

Template.views_view2.helpers({
        logevent: function() {
		console.log('run logevent');
        	var cursor = License.find({});
		console.log('cursor count  =', cursor.count());
        	if (!cursor.count()) return;

        	cursor.forEach(function (row) {
            		console.log(row.db_name);
        	}); 
		console.log('run logevent end');
		return cursor;
        },
	db_name_human: function() {
		var a = this.db_name;
		var c = a.indexOf('\0');
  		if (c > -1) {
   	 		return a.substr(0, c);
  		}
  		return a;
        },
	table_name_human: function() {
                var a = this.table_name;
                var c = a.indexOf('\0');
                if (c > -1) {
                        return a.substr(0, c);
                }
                return a;
        },
	db_key_name_human: function() {
                var a = this.db_key_name;
                var c = a.indexOf('\0');
                if (c > -1) {
                        return a.substr(0, c);
                }
                return a;
        },
	db_op_type_human: function() {
                var a = this.db_op_type;
                var c = a.indexOf('\0');
                if (c > -1) {
                        return a.substr(0, c);
                }
                return a;
        },
	db_key_value_human: function() {
                var a = this.db_key_value.c[0];
                return a;
        },	
	transactionHashHuman: function() {
		var a =this.transactionHash;
		var a1 = a.substr(0,10);
		var a2 = a.substr(-5);
		var r = a1 + "..." + a2;
		return r;
	}
});
