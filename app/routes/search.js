var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/:city', function(req, res, next) {
	request('http://autocomplete.wunderground.com/aq?query=' + req.params.city, function (error, response, results) {
	  if (!error && response.statusCode == 200) {
		var data = JSON.parse(results);
    var cities = {};
    for (var i = 0; i < Object.keys(data.RESULTS).length; i++) {
      cities[data.RESULTS[i].name] = data.RESULTS[i].l;
      //console.log(data.RESULTS[i].name + " - " + data.RESULTS[i].l);
    }		
		res.send(cities);
	  }
	});
});

module.exports = router;
