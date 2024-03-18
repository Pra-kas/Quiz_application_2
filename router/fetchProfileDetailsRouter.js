const ProfileController = require("../controller/ProfileController");
const router = require('express').Router();

router.post('/getProfileDetails',ProfileController.ProfileController);

module.exports = router;
