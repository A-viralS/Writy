const express = require('express');
const app =express();
require('dotenv').config()
const mongoose=require ('mongoose')
app.use(express.json())
const cors = require('cors');

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
  }));
  

  mongoose
  .connect(process.env.MONGO_URL)
  .then(e=>console.log("mongoFuckingDB connected"))
  app.use(express.json())
  app.get('/test', (req,res)=>{
    res.json('test ok ')
  })


app.get('/test', (req,res)=>{
    res.send('test ok ');
})


app.post('/register',(req,res)=>{
  const {name, email, password} = req.body;
  res.json(req.body)
    
})
PORT=3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
    
