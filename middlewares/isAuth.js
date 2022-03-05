const jwt = require('jsonwebtoken');
const { restart } = require('nodemon');
const models = require('../models/userModels')

exports.isAuth =async(req,resp,next)=>{
const token=req.headers('Authorization');
    try {
    if (!token){return resp.status(400).send({message:'authorization denied'})}
     const decoded=jwt.verify(token,process.env.SECRET_OR_KEY)
     if (!decoded){return resp.status(400).send({message:'authorization denied'})}
    const user=await userSchema.findById( decoded.id) 
     req.user=user
    next()
} catch (error) {
    restart.status(500).send({message:error})
}
}
