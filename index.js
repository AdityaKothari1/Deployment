
const express=require("express")
  const app=express()
  var cors = require('cors');
const { connection } = require("./Config/db");
const { QuizModal } = require("./Modal/quizModal");
app.use(cors())
  app.use(express.json());
  const PORT=8000||5000

  
  app.get("/",async(req,res)=>{
    const {category,difficulty,Number}=req.query
    const result= await QuizModal.find({category:category,difficulty:difficulty}).limit(Number)
    res.send(result)
  })
  
  
  
  

  app.listen(PORT,async()=>{
    try{
        await connection
        console.log("Connection Sucess");
    }

    catch(err){
        console.log(err);
        console.log("Error in connection");
    }
  })