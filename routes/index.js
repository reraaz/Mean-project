var express = require('express');
var router = express.Router();


// var User = require('../model/schema');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', title1 : 'Hello Me' });
  
});

// router.get('/', function(req, res){
// 	var user = User.getAll();
// 	res.render('index', user);
// })

module.exports = router;
