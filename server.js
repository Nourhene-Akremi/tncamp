//first file we created to start with the backend is server 
//second create the config file where we connect to cloud db thanks to the uri atlas we name the file connectDb
//third we create the shecma in the models folder the schema is the skelet of the db it compose the atrribute and the values that can contain a predefined function that specifie the values of attributes like type,unique,required..
//forth the routes folder where we use express and express.Router to create the routers that they will interact with db by sending the request and receiving the response(error or success)

const express= require('express');
const connectDb = require('./config/connectDb');
const cors=require('cors');
const app = express();
const authRouter=require('./routes/auth');
//to import the .env file we need to import the dotenv node.module(node_modules/dotenv/lib/main)and we need the config() to Loads the .env file contents into process.env. 
require('dotenv').config()
app.use(express.json())
app.use(cors())
connectDb()
port=process.env.port||5000
//app.use() used to use a module
 
app.use('/',authRouter)
app.listen(port,(err)=>{err? console.log(err):console.log(`connected with success ${port}`)
})