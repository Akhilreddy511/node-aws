const userService = require('../services/userService');

module.exports = function(express){
    let api = express.Router();

    api.post('/register',async (req,res)=>{
    let data = await userService.createUser(req.body)
    if(data){
        return res.status(201).send({statusCode:201,status:true,message:"user created succussfully"});
    }else{

        return res.status(500).send({status:false,message:"something went wrong"})
    }
    })

    return api;
}