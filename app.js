require("dotenv").config();
var express = require('express');
var app = express();
var cors = require('cors');
var mongoose = require('mongoose');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({enabled:true}))
     mongoose.connect('mongodb://127.0.0.1:27017/myApp', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },(err)=>{
        if(err){
            console.log(err)
        }else{

            require('./config/router')(app,express);
        }
    });


app.listen(process.env.PORT, () => {
    console.log(`server listening up on  ${process.env.PORT}`);
});