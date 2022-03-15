const eventsSchema = require('../models/userModels')
exports.eventsController=async(req,resp)=>{
    const{photo,eventName,startDate,endDate,description,plant,charges}=req.body
    try {
        const find = await eventsSchema.findOne({eventName:eventName})
      if (find) {

         return resp.status(500).send({message:'event already exist'})}
         
         const user= new eventsSchema(req.body)
    
        await user.save()
        resp.status(200).send({message:'events added with success'})
    } catch (error) {
        resp.status(500).send({message:'failed to add events'})
    }
}
exports.getEventsController=async(req,resp)=>{
    const{photo,eventName,startDate,endDate,description,plant,charges}=req.body
    try {
        const find = await eventsSchema.find()
      if (!find) {

         return resp.status(400).send({message:'their is no events '})}
         
        resp.status(200).send({message:'get events with success'})
    } catch (error) {
        resp.status(500).send({message:'failed to get events'})
    }
}