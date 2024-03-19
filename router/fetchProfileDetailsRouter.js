const ProfileController = require("../controller/ProfileController");
const leaderboard = require("../controller/leaderBoardController");
const router = require('express').Router();

router.post('/getProfile',ProfileController.getProfileController);
router.post('/setprofile',ProfileController.setProfileController);
router.post('/getleaderboard',leaderboard.getLeaderBoard);

module.exports = router;
