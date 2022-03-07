const eventsSchema = require('../models/userModels')
exports.eventsController=async(req,resp)=>{
    const{photo,eventName,startDate,endDate,description,plant,charges}=req.body
    try {
        const find = await eventsSchema.findOne({eventName:eventName})
      if (find) {
         return resp.status(500).send({message:'user already exist'})}
         const user= new eventsSchema(req.body)
    
        await user.save()
        resp.status(200).send({message:'user added with success',token})
    } catch (error) {
        resp.status(500).send({message:'failed to add user'})
    }
}