const path=require('path');
const { runInNewContext } = require('vm');

const controller= {
     // index: (req, res)=>{
     //      res.render('index.ejs')
     //      },
     
    
     register: (req, res)=>{
         res.render('../views/register.ejs')
    },

    login: (req, res)=>{
         res.render('../views/login.ejs')
    },
  
    create: (req, res)=>{
     let usuario= {
          "firstName": req.body.firstName,
          "lastName": req.body.lastName,
          "user": req.body.user,
          "email": req.body.email,
          "age": req.body.birth_date,
          "adress": req.body.adress,
          "zipCode": req.body.zipcode,
          "password": req.body.password,
          "passwordConfirm": req.body.passwordConfirm
     };
     res.send(req.body)
     
     //Save Users
     

     //Route
     
    },
    
};

//exportando modulo
module.exports= controller;