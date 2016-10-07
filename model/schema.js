var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
	username : {
		type: String,
		index: true
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

module.exports.getAll = function(){
	User.find();
}