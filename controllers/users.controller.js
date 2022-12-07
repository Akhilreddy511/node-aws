const userService = require('../services/userService');
const auth = require("../config/middlewares/jwt");
const multer  = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

var upload = multer({ storage: storage }).single('profile');
module.exports = function (express,app) {
    let api = express.Router();
// app(auth)

api.post('/profileUpload',async(req,res)=>{

   await upload(req,res,async(err)=>{
        if(err){
            res.json({ error: err });   
        }
        console.log(req.body);
        console.log(req.file);

        req.body.profile = req.file.originalname;

        console.log("profile:::",req.body)

        let data = await userService.createUser(req.body)
        if (data.status) {
            return res.status(201).send({ statusCode: 201, status: true, message: "user created succussfully" });
        } else {

            return res.status(500).send({ status: false, message: "something went wrong" })
        }
       
    })
  
})

    api.post('/register',async (req, res) => {
        
        console.log("resquest in controller", req);
        let data = await userService.createUser(req.body)
        if (data.status) {
            return res.status(201).send({ statusCode: 201, status: true, message: "user created succussfully" });
        } else {

            return res.status(500).send({ status: false, message: "something went wrong" })
        }
    });
    api.post('/login', async (req, res) => {
        console.log("resquest in controller", req);
        let data = await userService.login(req.body)
        if (data) {
            return res.status(201).send({ statusCode: 201, status: true, message: "user found",token:data.data });
        } else {

            return res.status(500).send({ status: false, message: "something went wrong" })
        }
    });


    // api.use((req,res,next)=>auth.isValidUser(req,res,next));
    api.post('/getAllUsers', async (req, res) => {
        console.log("resquest in controller", req);
        let data = await userService.getAllUsers(req.body)
        if (data) {
            return res.status(201).send({ statusCode: 201, status: true, message: "Data Retrived succussfully" ,data:data });
        } else {

            return res.status(500).send({ status: false, message: "something went wrong" })
        }
    })

    api.post('/deleteUser', async (req, res) => {
        console.log("resquest in controller", req);
        let data = await userService.deleteUser(req.body)
        if (data) {
            return res.status(201).send({ statusCode: 201, status: true, message: "user deleted succussfully",data:data.data });
        } else {

            return res.status(500).send({ status: false, message: "something went wrong" })
        }
    })

    api.post('/postData', async (req, res) => {
        console.log("resquest in controller", req);
        let data = await userService.saveData(req.body)
        if (data) {
            return res.status(201).send({ statusCode: 201, status: true, message: "Data saved succussfully",data:data.data });
        } else {

            return res.status(500).send({ status: false, message: "something went wrong" })
        }
    })


    api.get('/getSavedData', async (req, res) => {
        console.log("resquest in controller", req.body);
        let data = await userService.getSavedData(req.body)
        if (data) {
            return res.status(201).send({ statusCode: 201, status: true, message: "Data Retrived succussfully" ,data:data });
        } else {

            return res.status(500).send({ status: false, message: "something went wrong" })
        }
    })



 
    return api;
}