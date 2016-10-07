var express = require('express');
var router = express.Router();

/* GET users listing. */

var User = require('../model/schema');
// #{user.username} java script in jades

router.get('/addUser', function(req, res) {
  res.render('addUser', { title : 'Express'});
  // console.log('Hello');
  
});



router.get('/edit',function(req,res){
	res.render('edit', { title : 'Express'});
});

router.get('/delete',function(req,res){
	res.render('delete', { title : 'Express'});
});

router.post('/addUser', function(req,res){
	// console.log('Hello');
	var name = req.body.name;
	var add = req.body.add;
	var email = req.body.email;
	var status = req.body.status;
	
		
		var newUser = new User({
			username: name,
			address : add,
			email: email,
			status : status
		});

		User.createUser(newUser,function(err,user){
			if(err) throw err;
			console.log(user);
		});
		

		// req.flash('success_msg','You are registered and now log in');
		res.redirect('/');
		

});

module.exports = router;
