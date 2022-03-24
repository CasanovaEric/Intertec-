const path = require('path');
const fs= require('fs');
const productModel = require('../database/models/product')
const atributeProductModel = require('../database/models/atributeProduct');
const product = require('../database/models/product');

const controller={
     index: async (req, res)=>{
      const products = await productModel.findAll({include:['user']}); 
          res.render('index.ejs', {data:products})
    },

    detail: (req, res)=>{
         const id = req.params.id
         res.render('DetailsProducts.ejs')

    },
    registerProducts: (req, res)=>{
     res.render('create-product-form.ejs')
    },
    create: async (req, res)=>{ 
     //Create Method for users;    
       const product = await productModel.create({
          name_products: req.body.name_products,
          price: req.body.price,
          image_products: './public/images/products/'+req.file.filename,
          users_id:  req.session.usersLogged.id_users 
         })


         console.log(product.id_products)
         
         const atribute = await atributeProductModel.create({
          names_atributes: req.body.nameAtribute,
          values_atributes: req.body.valueAtribute,
          id_products: product.id_products
         });
     //     let errors = validationResult(req);
     //     if( errors.isEmpty()){
     //          let user= { 
     //           firstName :req.body.firstName,
     //           lastName: req.body.lastName,
     //           userName: req.body.userName,
     //           email: req.body.email,
     //           password: bcrypt.hashSync(req.body.password, 10),
     //           passwordConfirm: bcrypt.hashSync(req.body.password, 10),
     //          }} else{
     //          res.render('../views/register.ejs', {
     //               errors: errors.array(),
     //                old: req.body});
     //     }
         //Declarate Redirect views;
         res.render("index.ejs")
         console.log(req.file)
    },



};


//exportando moduloss
module.exports= controller;
