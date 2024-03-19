const profileservice = require("../service/profileService");

exports.getLeaderBoard = async (req,res)=>{
    try {
        const {username} = req.body;
        const result = await profileservice.leaderboard();
        res.json({status:true,message:result});
        
    } catch (error) {
        res.json({status:false,message:error.message});
    }

}