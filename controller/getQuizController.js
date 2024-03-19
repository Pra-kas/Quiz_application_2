const quizService = require('../service/quizService');
const sessionService = require("../service/sessionService");
let answer_list = [];
exports.getQuiz = async (req, res) => {
  try {
    const session = req.get("session");
    const sessionResult = await sessionService.validateSession(session);
    console.log(sessionResult);
    if(sessionResult!==null){
    const { collectionName } = req.body;
    let arrayQuizzies = await quizService.getQuiz(collectionName);

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const randomSet = new Set();
    while (randomSet.size < 5) {
      randomSet.add(getRandomInt(0, arrayQuizzies.length - 1));
    }
    
    const quizArray = []; // Array to store quiz objects

    for (let i of randomSet) {
      const { _id, question, optionA, optionB, optionC, optionD, __v, correctAnswer } = arrayQuizzies[i];
      let quizObj = { _id, question, optionA, optionB, optionC, optionD, __v };
      quizArray.push(quizObj); // Add quiz object to array
      quizObj = { _id, question, optionA, optionB, optionC, optionD, __v ,correctAnswer};
      answer_list.push(quizObj);
    }
    console.log(quizArray);
    res.json({ status: true, message: quizArray });
    }else{
      console.log("dtyfgjhvnbgfuyhkvbnhgjyhkjb");
      res.json({status:false,message:143});
    }
     // Send array of quiz objects
  } catch (error) {
    res.json({ status: false, message: error.message });
  }
}

exports.questionValidation = async (req, res) => {
  try {
    const { index, answer } = req.body;
  
    if (answer_list[index]["correctAnswer"] == answer) {
      console.log("hello question validation ",answer_list[index]);
      res.json({ status: true, message: '1' });
    } else {
      res.json({ status: true, message: '0' });
    }
  } catch (error) {
    res.json({ status: false, message: error.message });
  }
}