const userModel = require('../model/userModel');

class userService{
    static async userRegistration(email,password,username){
        try{
            const createUser = new userModel({email,password,username});
            return await createUser.save();
        }catch(err){
           throw err;
        }
    }
}


module.exports = userService;