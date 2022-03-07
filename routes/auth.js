const express = require('express');
const auth = express.Router()
const {authSignup,authSignin}=require('../controllers/userController')
const {eventsController}=require('../controllers/eventsController')
//*****the form uses post methode to send request to the db server*** we use post methode because it contain a body when we will send the sensetive information that we wanted to anyone to see it in the url **for the information safety and security we uses methode POST***/
//we uses the parameter req and res to storage the request that we will sennd it  and to storage the answer the respond send it by the server ***//
const {validationSignUp,validationSignIn,isValid}=require('../middlewares/validation')
const {validationEvents,eventsValid}=require('../middlewares/eventsValidation') 
const {isAuth}= require('../middlewares/isAuth')

auth.post('/signup',validationSignUp,isValid,authSignup )

auth.post('/signin',validationSignIn,isValid,authSignin)

auth.post('/events',validationEvents,eventsValid,eventsController)
    
auth.get('/current',isAuth,(req,resp)=>{
  resp.send(req.user)  
})
module.exports=auth;