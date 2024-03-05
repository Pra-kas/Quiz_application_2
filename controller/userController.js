const userService = require('../service/userService');

 exports.register = async(req,res,next) =>{
    try{
        const {email,password,confirmPassword} = req.body;
        console.log("SIGNUP : "+email,password);
        if(password===confirmPassword){
            const sucessRes = await userService.userRegistration(email,password);
            console.log("SIGNUP : "+email,password);
            res.json({status:true,message:"successfully registered....!"});
        }else{
            res.json({status:false,message:"Password and confirm not matched"});
        }
        
    }catch(err){
       res.json({status:false,message:"Email id is already taken"});
    }
}

