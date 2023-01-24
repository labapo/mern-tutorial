import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

//initialize express app
const app = express();

//initialize dotenv
dotenv.config();

//-------------------------MIDDLEWARE---------------------------//
app.use(bodyParser.json({extended: true}))
app.use(express.urlencoded({extended:false}));//makes sure that you can get inside of the object and so that its not undefined


//use express middleware to connect to the application
//app.use('/posts', postRoutes); 

//-------------------------CONNECTIONS---------------------------//
const CONNECTION_URL = 'mongodb+srv://labapo:Missy217!@sei.xkd1rlx.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 3000;

mongoose.set('strictQuery', true);
mongoose.connect(CONNECTION_URL, {
    useNewURLParser: true, 
    useUnifiedTopology: true})

mongoose.connection
    .on("open", ()=> console.log('Connected to Mongoose'))
    .on("close", () => console.log("Disconnected from Mongoose"))
    .on("error", (error) => console.log(error))
