const quizService = require("../service/quizService");

exports.quizController = async(req,res)=>{

    try{
        const collectionName = req.get("collectionName");
        const obj = req.body;
        console.log(collectionName,obj);
        await quizService.insertQuiz(obj,collectionName);
        res.json({status:true,message:"saved sucessfully...!"});

    }catch(err){
        res.json({status:false,message:err.message});
    }
};
