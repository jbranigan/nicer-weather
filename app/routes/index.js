var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'nicer weather' });
});

// Get the forecast and current conditions
router.get('/city/:city_id', function(req, res, next) {   
  request('http://api.wunderground.com/api/' + process.env.WUKEY + '/conditions/forecast/q/zmw:' + req.params.city_id + '.json', function (error, response, results) {
    if (!error && response.statusCode == 200) {
    var data = JSON.parse(results);   
    //res.send(data);
    res.render('weather', { 'data': data })
    }
  });
});

module.exports = router;
