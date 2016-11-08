var express = require('express');
var router = express.Router();

/* GET users listing. */

var User = require('../model/schema');
// #{user.username} java script in jades

router.get('/addUser', function(req, res) {
  res.render('addUser', { title : 'Express'});
  // console.log('Hello');
  
});


router.get('/test',function(req,res){
	res.render('test', { title : 'Express'});
});

router.get('/edit',function(req,res){
	
	var id = req.query.id;
	User.getUserById(id, function(err, user){
		if(err) throw err;
		else res.render('edit', { title : 'Express', user: user});
		// console.log(user);
	});
	// console.log(id);
});


router.post('/addUser', function(req,res){
	// console.log('Hello');
	
	 if (req.body.cancel == "cancel")
	{
		res.redirect('/')
	}
	else
	{
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
			// console.log(user);
		});
		

		// req.flash('success_msg','You are registered and now log in');
		res.redirect('/');
	}
		

});

router.post('/edit', function(req, res){
	
	if(req.body.cancel == "cancel"){
		 // var id = req.body.id;
		// console.log(id);
		res.redirect('/');

	}
	else{
	var name = req.body.name;
	var add = req.body.add;
	var email = req.body.email;
	var status = req.body.status;
	var id = req.body.id;
	// console.log(id);
	User.updatedata(id,name,add,email,status,function(err,user){
		if(err) throw err;
	});
	res.redirect('/');
}

	// var update = 
});

router.get('/', function(req,res){
	var id = req.query.id;
	User.deletedata(id, function(err, user){
		if(err) throw(err);
		else
		res.redirect('/');
	})
	// console.log(id);
	
});


module.exports = router;
