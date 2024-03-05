const loginController = require('../controller/loginController');
const router = require('express').Router();

router.post('/login',loginController.loginControl);

module.exports = router;