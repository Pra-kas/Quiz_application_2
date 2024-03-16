const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const userRouter = require('./router/userRouter');
const loginRouter = require('./router/loginRouter');
const quizRouter = require('./router/quizRouter');
const getQuizRouter = require('./router/getQuizRouter');
const questionValidation = require('./router/questionValidation')
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/',userRouter);
app.use('/',loginRouter);
app.use('/',quizRouter);
app.use('/',getQuizRouter);
app.use('/',questionValidation);

module.exports = app;
