const userController = require('../controller/userController');
const router = require('express').Router();


router.post('/signup',userController.register);

module.exports = router;