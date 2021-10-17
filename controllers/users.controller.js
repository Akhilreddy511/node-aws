const userService = require('../services/userService');

module.exports = function (express) {
    let api = express.Router();

    api.post('/register', async (req, res) => {
        console.log("resquest in controller", req);
        let data = await userService.createUser(req.body)
        if (data) {
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



    return api;
}