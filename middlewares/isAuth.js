const jwt = require('jsonwebtoken');
const userSchema = require('../models/userModels')

exports.isAuth =async(req,resp,next)=>{
const token= req.header('Authorization');
    try {
        if(!token)
        {return resp.status(400).send({message:'authorization denied'})}
        const decoded=jwt.verify(token,process.env.SECRET_OR_KEY)
        if(!decoded)
        {return resp.status(400).send({message:'authorization denied'})}
        const user=await userSchema.findById( decoded.id) 
        req.user=user
         next()
    }catch (error) {
     resp.status(500).send({error})
}
} 
 