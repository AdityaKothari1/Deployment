const express=require("express")
  const app=express()
  
  const bcrypt = require("bcrypt");
  const jwt = require("jsonwebtoken");
const { UserModel } = require("./Modal/userModal");
const { connection } = require("./Config/db");
const PORT=8000||5000
var cors = require('cors')
app.use(cors())
  app.use(express.json());
  

  app.post("/signup",(req,res)=>{
      const {name,email,password}=req.body
      bcrypt.hash(password,2,async (err,hash)=>{
          if(err){
            res.send({"msg":"Error in signup"})
          }
        const newuser=new UserModel({
            name:name,
            email:email,
            password:hash
        })
        await newuser.save()
        res.send({msg:"Signup sucess"})
      })
  })

   app.post("/getProfile",async(req,res)=>{
      const {email,password}=req.body
       const result=await UserModel.findOne({email})
       const hash=result?.password
       bcrypt.compare(password,hash,async(err,resu)=>{
         if(resu){
            const token=jwt.sign({email:email},"abcd")
            res.send({msg:"Login Sucess",token:token,data:result})
         }else{
            res.send({msg:"Log in failed"})
         }
       })
       
   })


app.post("/calculateEMI", (req, res) => {
  const loanAmount = (req.body.loanAmount);
  const annualInterestRate = (req.body.annualInterestRate);
  const tenureInMonths = (req.body.tenureInMonths);


  const monthlyInterestRate = annualInterestRate / 100 / 12;
  const EMI = (
    (loanAmount * monthlyInterestRate * (1 + monthlyInterestRate) ** tenureInMonths) /
    ((1 + monthlyInterestRate) ** tenureInMonths - 1)
  ).toFixed(2);
  const totalInterestPayable = (EMI * tenureInMonths - loanAmount).toFixed(2);

  const totalPayment = Number((+loanAmount + Number(totalInterestPayable))).toFixed(2);

    res.send({Emi:EMI,totalInterestPayable:totalInterestPayable,totalPayment:totalPayment})

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