
const mongoose=require("mongoose")
mongoose.set('strictQuery', false);
const QuizSchema=mongoose.Schema({
   
})
const QuizModal=mongoose.model("quiz",QuizSchema)
module.exports={QuizModal}
