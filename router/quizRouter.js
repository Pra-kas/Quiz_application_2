const quiz = require('../controller/quizController');
const router = require('express').Router();

router.post('/insertQuiz',quiz.quizController);

module.exports = router;