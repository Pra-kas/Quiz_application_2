const db = require('../config/db');
const userSession = require('../model/sessionModel');

class SessionService{
    
    static async generateSession(email,session){
        try{
            const newSession = new userSession({email,session});
            return await newSession.save();
        }catch(err){
            throw err;
        }    
    }

    static async checkSession(email){
            const collection = db.collection('sessions');
            var validSession = await collection.findOne({"email":email});
            if(validSession!=null){
               return validSession.session;
            }else{
                return "failed";
            }   
    }

    static async validateSession(session){
        const collection = db.collection('sessions');
        var validSession = await collection.findOne({"session":session});
        return validSession;
    }
}

module.exports = SessionService;