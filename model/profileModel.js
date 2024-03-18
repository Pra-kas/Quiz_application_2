const mongo = require("mongoose");

const { Schema } = mongo;

const profileModel = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true
    },
    // Other fields if needed
});

module.exports = mongo.model('Profile', profileModel);
