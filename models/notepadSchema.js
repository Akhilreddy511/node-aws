var mongoose = require('mongoose');
const NotepadSchema = new mongoose.Schema({
    note:String,


})

module.exports =  mongoose.model('notepad',NotepadSchema);