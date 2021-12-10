//declarando constantes
const express = require('express');
const router= express.Router();
//const app= express();
const path = require('path');


const options = {
    root: path.join(__dirname, '../views')
};

router.get('/', (req,res)=>{
    res.sendFile('index.html', options);
    
});

router.get('/login', (req,res)=>{
    res.sendFile('login.html', options);
});

router.get('/register', (req,res)=>{
    res.sendFile('register.html', options);
});

router.get('/confirm-order', (req,res)=>{
    res.sendFile('confirm-order.html', options);
});

module.exports= router;
//module.exports= app;