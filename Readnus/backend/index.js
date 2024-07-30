const express = require('express');

const UserRouter = require('./Router/userRouter');
const WriteRouter = require('./Router/writeRouter');
const BlogRouter = require('./Router/blogRouter');





const cors = require('cors');


const app=express();
const port= 5000;

app.use(express.json());
app.use(cors({
    orgin: 'http://localhost:5173'

}));

app.use('/user',UserRouter);
app.use('/write',WriteRouter);
app.use('/blog',BlogRouter);





// app.use(express.static)



app.listen(port,() =>{console.log('Server Started !!')});