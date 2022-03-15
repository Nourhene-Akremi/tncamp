const mongoose = require('mongoose')

const eventsSchema=new mongoose.Schema({
    photo:{type:String},
    eventName:{type:String,required:true,unique:true},
    startDate:{type:Date(),required:true},
    endDate:{type:Date(),required:true},
    charges:{type:String,required:true},
    plant:{type:String,required:true},
    createdAt:{type:Date,default:new Date()},  
})
module.exports=mongoose.model('event',eventsSchema);
