const db = require('../config/db');
const quizModel = require('../model/quizModel');

class QuizService{
    static async insertQuiz(quiz,collectionName){
        try {
            const collection = await db.model(collectionName,quizModel);
            return await collection.insertMany(quiz);
        } catch (error) {
            throw error;
        } 
    }
    static async getQuiz(collectionName){
        try {
            const collection = await db.collection(collectionName);
            var quizzies = await collection.find();
            var arrayQuizzies = await quizzies.toArray();
            return arrayQuizzies;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = QuizService;

