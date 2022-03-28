//"CONST FOR METHOD USE!"
const path=require('path');
const fs= require('fs');
const json_users= fs.readFileSync('./data/UsersDataBase.json', 'utf-8');
const users = JSON.parse(json_users);
const {validationResult}= require('express-validator');
const bcrypt = require('bcryptjs');
const userModel = require('../database/models/user')
const {encrypt, compare} = require('../middleware/BcryptMiddleware')
path.resolve(__dirname, '/public')

//CONTROLER
const controller= {
     index: (req, res, next)=>{
          res.render('index.ejs')
          next();
     },
      register: (req, res)=>{
         res.render('../views/register.ejs')
    },

    login: (req, res)=>{
         res.render('login.ejs')
    },
  //Create Method for users; 
    create: async (req, res)=>{ 
        
     userModel.create({
          firstName :req.body.firstName,
          lastName: req.body.lastName,
          userName: req.body.userName,
          email: req.body.email,
          dateOfBirth: req.body.dateOfBirth,
          addres: req.body.addres, 
          zipCode: req.body.zipCode ,
          rol_users: req.body.vendedor,
          password_users: bcrypt.hashSync(req.body.password, 10),
          passwordConfirm: bcrypt.hashSync(req.body.passwordConfirm, 10),
          image_users: './public/images/users/'+ req.file.filename,
         });
         let errors = validationResult(req);
         if( errors.isEmpty()){
              let user= { 
               firstName :req.body.firstName,
               lastName: req.body.lastName,
               userName: req.body.userName,
               email: req.body.email,
               password: encrypt(req.body.password),
               passwordConfirm: compare(req.body.password, req.body.passwordConfirm),
              }} else{
              res.render('../views/register.ejs', {
                   errors: errors.array(),
                    old: req.body});
         }
         //Declarate Redirect views;
         res.render("index.ejs")
         
    },
 //Process for Login user
    processLogin: async (req, res) => {
         let errors = validationResult(req);
         if(errors.isEmpty()){
              const {email, password} = req.body
         const usersLogin = await userModel.findOne({where:{ email}})
         const checkpassword = await compare(password, usersLogin.password_users)
              if(!usersLogin || !checkpassword){
                   return res.render('login.ejs', {errors: [{msg: 'credenciales invalidas'}]})
               }
               
              req.session.usersLogged = usersLogin;
              //req.session.usersLogin.id
              if(req.body.remember != undefined){
                   res.cookie('recordame', usersLogin.email, {maxAge: 60000});
              }
              res.render('index.ejs')

         }else{
              return res.render('login.ejs', {errors: errors.errors});
         }
    }
};

//"MODULE EXPORT"
module.exports= controller;

var ds= 36
var fe=3

if (ds/fe >12) {
    console.log("puedo divirlo")
} else { console.log("no puedo") }