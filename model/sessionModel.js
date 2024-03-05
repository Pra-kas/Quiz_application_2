const mongo = require('mongoose');
const db = require('../config/db');

const { Schema } = mongo;

const sessionSchame = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    session:{
        type:String,
    },
    createdAt:{
        type: Date, 
        default: Date.now 
    },
    sessionExpiresAt:{
         type: Date,
         expires: 3600,
         default: Date.now 
        }
});

const sessionModel = db.model("sessions",sessionSchame);

module.exports = sessionModel;