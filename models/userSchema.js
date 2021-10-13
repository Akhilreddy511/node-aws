var mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name:String,
    phone:String,
    age:String
})

module.exports =  mongoose.model('user',UserSchema);