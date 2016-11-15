var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('search', { title: 'search' });
  next();
});

router.use('/', function(req, res, next) {
	request('http://autocomplete.wunderground.com/aq?query=Philadelphia,%20PA', function (error, response, results) {
	  if (!error && response.statusCode == 200) {
	    console.log(results)
	  }
	});
});

module.exports = router;
