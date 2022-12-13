
   const mongoose=require("mongoose")
   mongoose.set('strictQuery', false);
   const UserSchema=mongoose.Schema({
        name:{type:String,require:true},
        email:{type:String,require:true},
        password:{type:String,require:true}
      
   })

   const UserModel=mongoose.model("user",UserSchema)

   module.exports={UserModel}