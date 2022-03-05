const {body,validationResult}=require('express-validator')

exports.validationSignUp=[
    body("photo"),
    body("name","name can not be empty and at least contain five caracters").isEmpty().isLength({min:5}),
    body("email","please type a correct email").isEmpty().isEmail,
    body("password","password can not be empty and have to contain at least five character").isEmpty().isLength({min:5}).isAlphanumeric(),
    body("phone_number","please type a correct phone number").isEmpty(),
    body("adress","adresse can not be empty and have to contain at least ten caracters").isEmpty().isLength({min:10})
]

exports.validationSignIn=[
    body("email","please type a correct email").isEmpty().isEmail,
    body("password","password can not be empty and have to contain at least five character").isEmpty().isLength({min:5}).isAlphanumeric()
]

exports.isValid= async(req,resp,next) => {
    try {
       const errors = validationResult(req.body)
       if(!errors.isEmpty())
       {
           return resp.status(400).json({errors:errors.array() })};   
       next();
    } catch (error) {
        resp.status(400).send({message:error}) 
    }
}