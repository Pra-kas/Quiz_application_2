const mongo = require("mongoose");
const db  = require("../config/db");

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
    totalquiz:{
        type:Number,
        required:true
    },
    correctanswer:{
        type:Number,
        required:true
    },
    totalpoints:{
        type:Number,
        required:true
    },
    wronganswer:{
        type:Number,
        required:true
    }
});

module.exports = db.model('profiles', profileModel);
