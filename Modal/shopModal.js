
const mongoose=require("mongoose")
mongoose.set('strictQuery', false);
const ShopSchema=mongoose.Schema({
    Title:{type:String,require:true},
    Quantity:{type:String,require:true},
    Priority:{type:String,require:true},
    Description:{type:String,require:true},
    bookmark:{type:Boolean,default:false},
    TimeStamp: {
        type: String,
    }
    },{
       timestamps: true,
       get: time => time.toDateString()
})
const ShopModal=mongoose.model("shop",ShopSchema)
module.exports={ShopModal}
