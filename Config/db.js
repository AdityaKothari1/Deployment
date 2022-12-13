const mongoose=require("mongoose")
const connection=mongoose.connect("mongodb+srv://aditya1234:aditya_12345@cluster0.p5roukv.mongodb.net/mock?retryWrites=true&w=majority")

module.exports={connection}