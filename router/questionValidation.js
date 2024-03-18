const getQuizController = require("../controller/getQuizController");
const router = require('express').Router();

router.post('/answerValidation', getQuizController.questionValidation);

module.exports = router;
