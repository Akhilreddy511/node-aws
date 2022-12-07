var mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name:String,
    password:String,
    phone:String,
    age:String,
    address:String,
    profile:String,
    email:{ 
    type: String,
    required: true,
    match: /.+\@.+\..+/,
    unique: 'This email is already taken ({VALUE})',
}

})

module.exports =  mongoose.model('user',UserSchema);