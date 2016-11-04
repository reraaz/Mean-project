var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');



var User = require('../model/schema');
/* GET home page. */
router.get('/', function(req, res, next) {

	
	User.getAll(
		function(err, user){
		if(err) throw err;
		
		var data = JSON.stringify(user);
		// res.json(user);
		res.render('index', { title: 'Express', users:user});
		// console.log(user);




	});
	// res.send(data);
	// console.log(user.username);


	// console.log(user);
  	
//   	res.format({html:function(){
//   		res.render('/', {"user": user});
//   	},
//    json: function(){
//    	res.json(user);
//    }});
// 	// console.log(user);

  // next();
});




module.exports = router;