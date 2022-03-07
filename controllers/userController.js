const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = require('../models/userModels')


exports.authSignup=async(req,resp)=>{
    //distract data to avoid the repetion of req.body
    const{photo,name,email,password,phone_number,adress,role}=req.body
    
//****we use try and catch statement like we use the if and else statement to verify the res and to know their type by the status code and by the message *****//
    try {
        //**because express is asynchronous we need to use the await keyword that force the waiting of the specified iteration 
        //asynchronus programm is the one who ignore the first step because of the delay and dispatch the next one and that can cause many execution problems**//
        const find = await userSchema.findOne({email:email})
      if (find) {
         return resp.status(500).send({message:'user already exist'})}
        const user= new userSchema(req.body)
        const salt=10
        const passwordbhashed=bcrypt.hashSync(password,salt)
        const userId={id:user._id}
        const token = jwt.sign(userId,process.env.SECRET_OR_KEY)
        user.password = passwordbhashed
        //create the user in the data base
        await user.save()
        resp.status(200).send({message:'user added with success',token})
    } catch (error) {
        resp.status(500).send({message:'failed to add user'})
    }
}

exports.authSignin=async(req,resp)=>{
    const{email,password}=req.body
    try {
        const find = await userSchema.findOne({email:email})
        if (!find) {
       return resp.status(400).send({message:'bad credentials'})}
        const match= await bcrypt.compare(password,find.password)
        if(!match)
        {resp.status(400).send({message:'bad credentials'})}
        const userId = {id:find._id}
        const token = jwt.sign(userId,process.env.SECRET_OR_KEY)
        resp.status(200).send({message:'login successfully',token})
    } catch (error) {
        resp.status(400).send({message:'bad credentials'})
 
    }
}
