const db = require('../models');
const auth = require("../config/middlewares/jwt");
class UserService {
    constructor() {
        this.db = db
    }

    async createUser(user) {
        try {
            const userCreation = await this.db.User.create(user)
            return {
                data: userCreation,
                status: true
            }
        } catch (error) {
            if (error.name == 'MongoError' && error.code === 11000){
                return {
                    data: 'Email Already Exists',
                    status: false
                }
            }
            return {
                data: error.message,
                status: false
            }
        }

    }
    async saveData(data) {
        try {
            const saveData = await this.db.Notepad.create(data)
            return {
                data: saveData,
                status: true
            }
        } catch (error) {
            return {
                data: error.message,
                status: false
            }
           
        }

    }
    async getSavedData(user) {
        try {
            // console.log("user::::", user)
            const allUsers = await this.db.Notepad.find({})

            return {
                data: allUsers,
                status: false
            }
        } catch (error) {
            console.log(error)
            return {
                data: error.message,
                status: false
            }
        }

    }

    async login(user) {
        try {
            console.log("user::::", user)
            const userFound = await this.db.User.findOne({ email: user.email, password: user.password })

            if (userFound) {
                let data = JSON.parse(JSON.stringify(userFound));
                data.token = await auth.create_token(data._id);
                return {
                    data: data.token,
                    status: false
                }

            }


        } catch (error) {
            console.log(error)
            return {
                data: error.message,
                status: false
            }
        }

    }


    async updateUser(user) {
        try {
            console.log("user::::", user)
            const userCreation = await this.db.User.create(user)

            return {
                data: userCreation,
                status: false
            }
        } catch (error) {
            console.log(error)
            return {
                data: error.message,
                status: false
            }
        }

    }
    async deleteUser(user) {
        try {
            console.log("user::::", user)
            const userCreation = await this.db.User.deleteOne({_id:user.id});

            return {
                data: userCreation,
                status: false
            }
        } catch (error) {
            console.log(error)
            return {
                data: error.message,
                status: false
            }
        }

    }
    async getAllUsers(user) {
        try {
            console.log("user::::", user)
            const allUsers = await this.db.User.find({})

            return {
                data: allUsers,
                status: false
            }
        } catch (error) {
            console.log(error)
            return {
                data: error.message,
                status: false
            }
        }

    }
    async getUserById(user) {
        try {
            const userCreation = await this.db.User.create(user)

            return {
                data: userCreation,
                status: false
            }
        } catch (error) {
            console.log(error)
            return {
                data: error.message,
                status: false
            }
        }

    }
}
module.exports = new UserService();