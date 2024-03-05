const mongo = require('mongoose');
const db = require('../config/db');
const bcrypt = require('bcrypt');

const { Schema } = mongo;

const userSchema = new Schema({
    email:{
        type:String,
         lowercase:true,
         unique:true,
         required:true
    },
    password:{
        type:String,
        required:true
    }
});


const userModel = db.model('user',userSchema);

module.exports = userModel;