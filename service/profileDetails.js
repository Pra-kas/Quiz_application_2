const db = require('../config/db');
const profileModel = require('../model/profileModel');

class ProfileService {
    static async fetchUserName(email) {
        try {
            // Access the model object and use findOne() method
            const user = await profileModel.findOne({ email }, { username: 1, _id: 0 });
            console.log(user.username);
            return user ? user.username : "Hello";
        } catch (error) {
            console.error("Error fetching username:", error);
            return null;
        }
    }
}

module.exports = ProfileService;
