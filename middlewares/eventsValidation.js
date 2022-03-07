const {body,validationResult}=require('express-validator')

exports.validationEvents=[
    body("photo"),
    
    body("eventName","name can not be empty and at least contain five caracters").isEmpty().isLength({min:5}),
    
    body("startDate","please type a correct email").isEmpty().isEmail,
    
    body("endDate","password can not be empty and have to contain at least five character").isEmpty().isLength({min:5}).isAlphanumeric(),

    body("description","name can not be empty and at least contain five caracters").isEmpty().isLength({min:5}),

    body("plant","name can not be empty and at least contain five caracters").isEmpty().isLength({min:5}),
    
    body("charges","adresse can not be empty and have to contain at least ten caracters").isEmpty().isLength({min:10})
]

exports.eventsValid= async(req,resp,next) => {
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