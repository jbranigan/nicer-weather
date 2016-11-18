var express = require('express');
var router = express.Router();
var config = require('../config.json');
var request = require('request');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'nicer weather' });
});

router.get('/city/:city_id', function(req, res, next) {   
  console.log('http://api.wunderground.com/api/' + config.wuKey + '/forecast/q/zmw:' + req.params.city_id + '.json')
  request('http://api.wunderground.com/api/' + config.wuKey + '/forecast/q/zmw:' + req.params.city_id + '.json', function (error, response, results) {
    if (!error && response.statusCode == 200) {
    var data = JSON.parse(results);   
    res.send(data);
    }
  });
});

module.exports = router;
