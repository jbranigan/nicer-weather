var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/:city', function(req, res, next) {
	request('http://autocomplete.wunderground.com/aq?query=' + req.params.city, function (error, response, results) {
	  if (!error && response.statusCode == 200) {
		var cities = JSON.parse(results);
		res.send(cities);
	  }
	});
});

module.exports = router;
