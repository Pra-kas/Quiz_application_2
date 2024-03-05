const mongo = require('mongoose');

const connection = mongo.createConnection("mongodb://127.0.0.1:27017/QuizApplication").on('open',()=>{
    console.log("connection sucessfully");
}).on('error',()=>{
    console.log("connection failed...!");
});

module.exports = connection;