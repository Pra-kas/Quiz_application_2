let answer_list = [];
const quizService = require('../service/quizService');

exports.getQuiz = async (req, res) => {
  console.log("Hi broo");
  try {
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

    res.json({ status: true, message: quizArray }); // Send array of quiz objects
  } catch (error) {
    res.json({ status: false, message: error.message });
  }
}

exports.questionValidation = async (req, res) => {
  console.log("Kumar");
  try {
    const { index, answer } = req.body;
    console.log(answer_list[index]['correctAnswer']);
    if (answer_list[index]["correctAnswer"] == answer) {
      res.json({ status: true, message: '1' });
    } else {
      res.json({ status: true, message: '0' });
    }
  } catch (error) {
    res.json({ status: false, message: error.message });
  }
}