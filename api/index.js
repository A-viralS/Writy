const express = require('express');
const app =express();
require('dotenv').config()
const mongoose=require ('mongoose')


//MODELS IMPORT
const User= require('./models/User')

//MIDDLEWARE FOR GETTING DATA FROM THE BODY
app.use(express.json())

//CORS MIDDLEWARE FOR SERVER CONNECTION 
const cors = require('cors');
app.use(cors({
  credentials: true,// this is for cookies allowance
  origin: 'http://localhost:5173',
}));


//PASSWORD HASHING IMPORT
const bcrypt = require('bcryptjs');
const bcryptSalt = bcrypt.genSaltSync(10);

//JSON WEB TOKEN IMPORT
const jwt = require('jsonwebtoken');
const secret='secret'

//COOKIE PARSER FOR VERIFYING USER
const cookieParser = require('cookie-parser');
app.use(cookieParser());

  

app.get('/test', (req,res)=>{
    res.send('test ok ');
})

//REGISTER
app.post('/register', async(req,res)=>{
  const {name, email, password} = req.body;
try {
  const userDoc=await User.create({
    name,email,
    password: bcrypt.hashSync(password,bcryptSalt)
  })
  res.json(userDoc)
} catch (error) {
  res.status(422).json(error)
  
}
  res.json(req.body)
    
})

//LOGIN

app.post('/login', async (req,res)=>{
  //in this first conpare passwords using bcrypt only then afer that sign the token 

  const {name,email,password}=req.body;
  const userDoc= await User.findOne({email:email})
  if (userDoc) {
    const passok= bcrypt.compareSync(password,userDoc.password);// this returns a boolean
  if (passok) {
    const payload={
      id:userDoc._id,
      email:userDoc.email,
      name:userDoc.name
    }
    const token=jwt.sign(payload,secret,(err,token)=>{
      if (err) throw err;
      res.cookie('token', token).json(userDoc);
    })
  
  } else {
    res.status(400).json({message:"passwords do not match"})
    
  }
    
  } else {
    res.json({message:"user not found"})
    
  }
  
})

//PROFILE 
app.get('/profile', (req,res)=>{
const token = req.cookies.token;// or const {token }= req.cookies
  if (!token) {
    res.status(401).json({message:"unauthorized"})
  } else {
    jwt.verify(token,secret,(err,info)=>{
      if (err) {
     throw err
      } else {
        res.json(info)
      }
    })
  }
})

//LOGOUT

app.get('/logout',(req,res)=>{
  res.clearCookie('token').json({message:"logged out"})
})



mongoose
  .connect(process.env.MONGO_URL)
  .then(e=>console.log("mongoFuckingDB connected"))
  app.use(express.json())
  app.get('/test', (req,res)=>{
    res.json('test ok ')
  })

PORT=3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
    
