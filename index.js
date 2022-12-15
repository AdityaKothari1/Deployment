
const express=require("express")
  const app=express()
  var cors = require('cors');
const { connection } = require("./Config/db");
const { ShopModal } = require("./Modal/shopModal");
app.use(cors())
  app.use(express.json());
  const PORT=8000||5000

app.post("/shop",async(req,res)=>{
  const data=req.body
   await ShopModal.insertMany(data)
   res.send({"msg":"Data Added"})
})

app.get("/getShop",async(req,res)=>{
    let result=await ShopModal.find()
    res.send({data:result})
})
app.get("/book",async(req,res)=>{
    let result=await ShopModal.find({bookmark:true})
    res.send({data:result})
})
app.delete("/getShop/:id",async(req,res)=>{
    const {id} = req.params;
    await ShopModal.deleteOne({ _id: id });
    res.send("Delete Sucess");
})
app.patch("/getShop/:id",async(req,res)=>{
    const {id} = req.params;
    const {bookmark}=req.body
    await ShopModal.updateOne({ _id: id },{$set:{bookmark:bookmark}});
    res.send("update Sucess");
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