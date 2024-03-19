const db = require("../config/db");
const profileModel = require("../model/profileModel");



class profileService{
    static async createProfile(email,username){
        try {
            const  totalquiz = 0;
            const correctanswer = 0;
            const wronganswer = 0;
            const totalpoints = 0;
            const newProfile = new profileModel({email,username,totalquiz,correctanswer,totalpoints,wronganswer});
            return await newProfile.save();
            
        } catch (error) {
            throw error;
        }
    }

    static async getProfile(username){
       try {
        const collection = db.collection('profiles');
        var validUser =  await collection.findOne({"username":username});
        return validUser;
       } catch (error) {
        throw error;
       } 
    }

    static async update(username,newValue){
        try {
            const collection = db.collection('profiles');
            return await collection.updateOne({"username":username},{$set:newValue});
        } catch (error) {
            throw error;
        }
    }

    static async leaderboard(){
        try {
            const collection = db.collection("profiles");
            const result = collection.find().sort({totalpoints:-1}).limit(5);
            return await result.toArray();
            
        } catch (error) {
            throw error;
        }
    }
}

module.exports = profileService;