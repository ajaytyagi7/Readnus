const express = require('express');

const UserRouter = require('./Router/userRouter');
const WriteRouter = require('./Router/writeRouter');
const BlogRouter = require('./Router/blogRouter');

const utilRouter = require('./Router/util');
const paymentRouter = require('./Router/paymentRouter');
const razorpay=require('razorpay');




require("dotenv").config();
const cors = require('cors');


const app=express();
const port= 5000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({
    orgin: 'http://localhost:5173'

}));

app.use('/user',UserRouter);
app.use('/write',WriteRouter);
app.use('/util', utilRouter);
app.use('/payment',paymentRouter);
app.use('/blog',BlogRouter);
app.use(express.static('./uploads'));





// app.use(express.static)



app.listen(port,() =>{console.log('Server Started !!')});