const bcrypt = require('bcrypt');
const loginService = require('../service/loginServer');
const sessionService= require('../service/sessionService');

exports.loginControl = async(req,res)=>{

    try {
        const {email,password} = req.body;
        console.log("LOGIN : "+email,password);
         const result = await loginService.LoginService(email,password);
         if(result!==null){
            var sessionMessage = await sessionService.checkSession(email);
            if(sessionMessage=="failed"){
                 bcrypt.hash(email,10,async(err,session)=>{
                    if(err){
                       throw err;
                    }else{     
                        await sessionService.generateSession(email,session);
                        res.json({status:true,message:session,user:result.username}); 
                    } 
                });
            }else{
                res.json({status:true,message:sessionMessage,user:result.username}); 
            }
         }else{
            res.json({status:false,message:"emailid is not valid"});
         }

       
    } catch (error) {
        res.json({status:false,message:"failed"});
    }
}



