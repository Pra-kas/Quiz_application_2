const profileservice = require('../service/profileService')



const setProfileController = async(req,res)=>{

    try{
        const {correct ,username} = req.body;
        const  result = await profileservice.getProfile(username);
        const points = (correct/5)*100;
        const newValue = {totalquiz:result.totalquiz+1,
            correctanswer:result.correctanswer+correct,
            totalpoints:result.totalpoints+(correct*points),
            wronganswer:result.wronganswer+(5-correct)
            };

        const updateresult  = await profileservice.update(username,newValue);
        res.json({status:true,message:"hello"});

    }catch(err){
        console.log(err.message);
        res.json({status:false,message:err.message});
    }
};


const getProfileController = async(req,res)=>{
    try {
        const {username} = req.body;
        const result = await profileservice.getProfile(username);
        res.json({status:true,message:result});
        
    } catch (error) {
        res.json({status:false,message:101});
    }
}



module.exports = {setProfileController,getProfileController};