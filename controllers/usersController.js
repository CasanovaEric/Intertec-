const path=require('path');
const { runInNewContext } = require('vm');

const controller= {
     index: (req, res, next)=>{
          res.render('./views/index.ejs')
          next();
     },
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
     console.log(usuario);
     
     res.render("hola")
     //Save Users
     

     //Route
     
    },
    
};

//exportando modulo
module.exports= controller;