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
         res.render("index.ejs")
         /* console.log(req.file) */
    },
    detail: async (req, res)=>{
        id_products = req.params.id
        await productModel.findByPk(id_products)
        .then(function (product) {
            console.log(product) 
            res.render('product-Update.ejs', { product: product })


        }).catch(error => res.send(error))

   },

    update: (req,res) => {
        let id_users = parseInt(req.session.usersLogged.id_users)
       let productUpdate =  productModel
        .update(
            {
                name_products: req.body.name_products, 
                price: req.body.price,
                id_users: id_users
            },
            {
                where: {id_products : req.params.id }
            })
            .then(product => {
               console.log(product);
              console.log(req.body.firstName, req.body.lastName, req.body.email, req.body.dateOfBirth, req.body.addres, req.body.zipCode)
               return  res.render('product-Update.ejs', { product: product });
             })
          .catch(error => {
             console.log("SE JO DIO")
             console.log(error)
             res.send(error)
          })
    },
    /* delete: function (req,res) {
     let id_users = req.params.id;
     userModel
     .findByPk(id_users)
     .then(user => {
         return res.render('profileDelete.ejs',{ user:user })
     })
     .catch(error => res.send(error))
 
          
    },
    destroy: function (req,res) {
     let id_users = req.params.id;
     userModel
     .destroy({where: {id_users: id_users}, force: true}) // force: true es para asegurar que se ejecute la acción
     .then(()=>{
         return res.redirect('/register')})
     .catch(error => res.send(error)) 
 }, */



};


//exportando moduloss
module.exports= controller;
