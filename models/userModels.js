const mongoose = require('mongoose')

const userSchema=new mongoose.Schema({
    photo:{type:String},
    name:{type:String,required:true,unique:true},
    email:{type:String,required:true, unique:true},
    password:{type:String, required:true},
    phone_number:{type:Number, required:true},
    adress:{type:String, required:true},
    createdAt:{type:Date,default:new Date()},
    role:{type:String ,default:'guest'}
})

module.exports=mongoose.model('user',userSchema);