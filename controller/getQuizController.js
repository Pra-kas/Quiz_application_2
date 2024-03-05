const quizService = require('../service/quizService');

exports.getQuiz = async(req,res)=>{
     try {
        const {collectionName} = req.body;
        var arrayQuizzies = await quizService.getQuiz(collectionName);

        console.log(arrayQuizzies);

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
         var randomSet = new Set;
         while(randomSet.size<20){
            randomSet.add(getRandomInt(0,arrayQuizzies.length));
         }
         var quizObj = [];
         for(let random = 0; random<20 ;random++){
             quizObj.push(arrayQuizzies[[...randomSet][random]]);
         }
         res.json({status:true,message:quizObj});
        
     } catch (error) {
        res.json({status:false,message:error.message});
     }
}