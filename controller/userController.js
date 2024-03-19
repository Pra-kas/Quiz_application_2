const userService = require('../service/userService');
const profileService = require("../service/profileService");
console.log("Prakash");
 exports.register = async(req,res,next) =>{
    try{
        const {email,password,confirmPassword,username} = req.body;
        console.log("SIGNUP : "+email,password);
        if(password===confirmPassword){
            await userService.userRegistration(email,password,username);
            await profileService.createProfile(email,username);
            console.log("SIGNUP : "+email,password);
            res.json({status:true,message:200});
        }else{
            res.json({status:false,message:304});
        }
        
    }catch(err){
       res.json({status:false,message:404});
    }
}

