const bcrypt = require('bcrypt');
const loginService = require('../service/loginServer');
const sessionService= require('../service/sessionService');

exports.loginControl = async(req,res)=>{

    try {
        const {email,password} = req.body;
        console.log("LOGIN : "+email,password);
        await loginService.LoginService(email,password);
        var sessionMessage = await sessionService.checkSession(email);
        if(sessionMessage=="failed"){
             bcrypt.hash(email,10,async(err,session)=>{
                if(err){
                   throw err;
                }else{     
                    await sessionService.generateSession(email,session);
                    res.json({status:true,message:session}); 
                } 
            });
        }else{
            res.json({status:true,message:sessionMessage}); 
        }
    } catch (error) {
        res.json({status:false,message:"failed"});
    }
}



