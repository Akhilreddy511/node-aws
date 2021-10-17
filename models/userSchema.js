var mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name:String,
    password:String,
    phone:String,
    age:String,
    address:String

})

module.exports =  mongoose.model('user',UserSchema);