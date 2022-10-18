import bodyParser from 'body-parser';
import express from 'express';
import sendEmail from './sendEmail.js';
const app=express()

app.set('view engine','ejs')

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.listen(5000,(req,res)=>{
    console.log("Server Started on Port 5000 ");
})

app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/sendEmail',(req,res)=>{
    const {email,subject,message}=req.body
    var sent= sendEmail(email,subject,message);
    if(sent!='0'){
        res.send('Email Sent Successfully');
    }
    else{
        res.send('Something Error');
    }
})

