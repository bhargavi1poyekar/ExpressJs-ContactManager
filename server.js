const express=require("express"); // create an express server
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv=require("dotenv").config();

connectDb();
const app=express();

const port=process.env.PORT||5000;


// app.get('/api/contacts',(req,res)=>{
//     // res.send("Get all contacts");
//     // res.json({message:'Get all contacts'});
//     res.status(200).json({message:'Get all contacts'});
// })

app.use(express.json()); // for parsing the json format in req
app.use('/api/contacts',require('./routes/contactRoutes')); // /api/contacts will be common for all the urls
//use for middleware
// /api/contacts will be common for all the urls
app.use('/api/users',require('./routes/userRoutes')); // /api/contacts will be common for all the urls

app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`Server Running on Port ${port}`);
})


