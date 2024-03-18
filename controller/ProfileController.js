const profileservice = require('../service/profileDetails')
exports.ProfileController = async(req,res)=>{

    try{
        const obj = req.body;
        console.log(obj);
        const name = await profileservice.fetchUserName("pk@gmail.com");
        res.json({status:true,message:name});

    }catch(err){
        console.log(err.message);
        res.json({status:false,message:err.message});
    }
};
