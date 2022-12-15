const mongoose=require("mongoose")
mongoose.set('strictQuery', false);
const connection=mongoose.connect("mongodb+srv://aditya1234:aditya_12345@cluster0.p5roukv.mongodb.net/shopping?retryWrites=true&w=majority")

module.exports={connection}