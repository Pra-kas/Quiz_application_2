const getQuizController = require("../controller/getQuizController");
const router = require('express').Router();

router.post('/getQuiz',getQuizController.getQuiz);

module.exports = router;
