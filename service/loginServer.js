const db = require('../config/db');

class LoginService{
    static async LoginService(email){
        try {
            
            const collection = db.collection('users');
            var validUser =  await collection.findOne({"email":email});
            return validUser;
        } catch (error) {
            throw error;
        }
       
    }
}

module.exports = LoginService;