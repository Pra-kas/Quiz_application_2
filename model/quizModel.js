const mongo = require("mongoose");

const { Schema } = mongo;

const quizModel = new Schema({
    question:{
        type:String,
        required:true
    },
    optionA:{
        type:String
    },
    optionB:{
        type:String
    },
    optionC:{
        type:String
    },
    optionD:{
        type:String
    },
    correctAnswer:{
        type:String
    }
});

module.exports = quizModel;