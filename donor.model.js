import mongoose from "mongoose";


const donorSchema=new mongoose.Schema({
    name:{type:String},
    gender:{type:String},
    age:{type:Number},
    dob:{type:Date},
    phone:{type:Number},
    place:{type:String},
    Bgroup:{type:String}

})

export default mongoose.model.donors||mongoose.model("donor",donorSchema)