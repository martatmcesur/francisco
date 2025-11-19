var express = require('express');
var router = express.Router();


var dataService = require("../data/dataService");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

module.exports = router;
