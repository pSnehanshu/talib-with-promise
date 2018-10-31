const talib = require('talib');

module.exports = {
	
	functions: talib.functions,

	version: talib.version,

	execute: function (params) {
		return new Promise(function(resolve, reject) {
			talib.execute(params, function (err, data) {
				if (err) {
                    return reject(err);
                }
                else{
                    return resolve(data);
                }
			});
		});
	},
	explain: function(func) {
		return new Promise ( function( resolve, reject) {
			var explain = talib.explain( func) ;
			resolve ( explain) ;
		}) ;
	}
	
} ;
