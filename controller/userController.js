const userService = require('../service/userService');
console.log("Prakash");
 exports.register = async(req,res,next) =>{
    try{
        const {email,password,confirmPassword,username} = req.body;
        console.log("SIGNUP : "+email,password);
        if(password===confirmPassword){
            const sucessRes = await userService.userRegistration(email,password,username);
            console.log("SIGNUP : "+email,password);
            res.json({status:true,message:200});
        }else{
            res.json({status:false,message:304});
        }
        
    }catch(err){
       res.json({status:false,message:404});
    }
}

