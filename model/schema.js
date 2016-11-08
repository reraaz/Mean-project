var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
	username : {
		type: String
	},
	address:{
		type:String
	},
	email:{
		type:String
	},
	status:{
		type:String
	}
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback){
	newUser.save(callback); 
    
};


module.exports.getUserByUsername = function(username,callback){
	var query = {username: username};
	User.findOne(query,callback);
};

module.exports.getUserById = function(id,callback){
	User.findById(id,callback);
};

module.exports.getAll = function(callback){
	User.find({}, function(err, user){
		if(err) return callback(err)
			callback(null, user)
	});

module.exports.deletedata = function(id, callback){
	User.remove({"_id": id}, callback);
};

module.exports.updatedata = function(id,name,add,email,status,callback){
	User.update({ _id : id},
		{username: name,
		address: add,
		email: email,
		status: status}
	, callback);
};
// module.exports.model= mongoose.model('User', User);
};