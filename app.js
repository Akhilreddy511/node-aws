
var express = require('express');
var app = express();
var cors = require('cors');
var mongoose = require('mongoose');


app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
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

    let port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`server listening up on  ${port}`);

});