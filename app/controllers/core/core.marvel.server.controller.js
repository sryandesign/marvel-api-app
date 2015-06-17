'use strict';

var marvelApi = require('marvel-api');

var marvel = marvelApi.createClient({
	publicKey: '969f0fbe0b1db7486ba92262fee6a588',
	privateKey: '4bc5dbbed0881d47967060208ea737ca4436ec36'
});

marvel.characters.findByName('spider-man').then(function(res){
	console.log(res);
})
.fail(console.error)
.done();

exports.findByName = function(req, res){
	console.log(req.body);

	marvel.characters.findByName('spider-man').then(function(res){
		console.log(res);
	})
	.fail(console.error)
	.done();
};

exports.index = function(req, res) {
	res.render('index', {
		user: req.user || null,
		request: req
	});
};