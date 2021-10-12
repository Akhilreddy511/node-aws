const db = require('../models');

class UserService {
    constructor() {
        this.db = db
    }

    async createUser(user) {
        try{
            console.log("user::::", user)
            const userCreation = await this.db.User.create(user)
        
            return {
                data:userCreation,
                status:false
            }
        }catch(error){
            console.log(error)
            return {
                data:error.message,
                status:false
            }
        }
     
    }
}
module.exports = new UserService();