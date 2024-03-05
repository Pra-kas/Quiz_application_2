const userModel = require('../model/userModel');

class userService{
    static async userRegistration(email,password){
        try{
            const createUser = new userModel({email,password});
            return await createUser.save();
        }catch(err){
           throw err;
        }
    }
}


module.exports = userService;