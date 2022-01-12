//"CONST FOR METHOD USE!"
const path=require('path');
const fs= require('fs');
const json_users= fs.readFileSync('./data/UsersDataBase.json', 'utf-8');
const users = JSON.parse(json_users);
const {validationResult}= require('express-validator');



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
              let user= req.body
              users.push(user);
              const json_users = JSON.stringify(users);
               fs.writeFileSync('./data/UsersDataBase.json', json_users, 'utf-8');
               res.render("index.ejs")
         } else{
              res.render('../views/register.ejs', {
                   errors: errors.array(),
                    old: req.body});
         }
     // let user = req.body;
     // users.push(user);
     // //Save Users
     // const json_users = JSON.stringify(users);
     // fs.writeFileSync('./data/UsersDataBase.json', json_users, 'utf-8');
     // res.render("index.ejs")
     //Route
     
    },
    
};

//"MODULE EXPORT"
module.exports= controller;