//"CONST FOR METHOD USE!"
const path=require('path');
const fs= require('fs');
const json_users= fs.readFileSync('./data/UsersDataBase.json', 'utf-8');
const users = JSON.parse(json_users);
const {validationResult}= require('express-validator');
const bcrypt = require('bcryptjs');



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
  
    create: (req, res)=>{ 
         let errors = validationResult(req);
         if( errors.isEmpty()){
              let user= { 
               firstName :req.body.firstName,
               lastName: req.body.lastName,
               userName: req.body.userName,
               email: req.body.email,
               password: bcrypt.hashSync(req.body.password, 10),
               passwordConfirm: bcrypt.hashSync(req.body.password, 10),
              }
          
              console.log(user)

              users.push(user);
              const json_users = JSON.stringify(users);
               fs.writeFileSync('./data/UsersDataBase.json', json_users, 'utf-8');
               res.render("index.ejs")
         } else{
              res.render('../views/register.ejs', {
                   errors: errors.array(),
                    old: req.body});
         }
     
    },
    
    processLogin: (req, res) => {
         let errors = validationResult(req);
         if(errors.isEmpty()){
              let usersJSON= fs.readFileSync('./data/UsersDataBase.json')
              let users;
              if(usersJSON == ""){
                   users = [];
              }else{
                   users = JSON.parse(usersJSON);
              }
              let usersLogin
              for(let i = 0; i< users.length; i++){
                   if(users[i].email == req.body.email) {
                         if(bcrypt.compareSync(req.body.password, users.password))
                         usersLogin = users[i];
                        break;
                    };
              }
              if(usersLogin != undefined){
                   return res.render('login.ejs', {errors: [{msg: 'credenciales invalidas'}]})
              }
              req.session.usersLogin = usersLogin;

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