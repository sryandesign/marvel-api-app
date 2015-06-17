'use strict';

module.exports = function(app) {
	// Root routing
	var core = require('../../app/controllers/core.server.controller');
		//marvelApi = require('marvel-api');
	app.route('/').get(core.index);
	app.route('/findByName').get(core.findByName);

	/*var marvel = marvelApi.createClient({
		publicKey: '969f0fbe0b1db7486ba92262fee6a588',
		privateKey: '4bc5dbbed0881d47967060208ea737ca4436ec36'
	});

	marvel.characters.findByName('spider-man').then(function(res){
		console.log(res)
	})
	.fail(console.error)
	.done()

	marvel.characters.findAll(function(err, results){
		if(err){
			console.log(err);
		}
		console.log(results);
	});

	*/
};