const db = require('../config/db');

class LoginService{
    static async LoginService(email,password){
        try {
            
            const collection = db.collection('users');
            var validUser =  await collection.findOne({"email":email});
            if(validUser.password===password){
                if(true) return;
            }else{
                throw new Error("Email doesnot exist");
            }
        } catch (error) {
            throw error;
        }
       
    }
}

module.exports = LoginService;