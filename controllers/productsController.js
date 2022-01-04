<<<<<<< HEAD
/*const controller={
    producto: (req, res)=>{
        return res.render('../views/motog60s')
    },
=======
const path = require('path');
const fs= require('fs');



const controller={
    index: (req, res)=>{
         res.render('index.ejs')
    },

    detail: (req, res)=>{
         res.render('DetailsProducts.ejs')

    },
    
    create: (req, res) => {
		res.render('create-products-form.ejs');
	},



>>>>>>> 3cef78d1c11f8a7bec32358d03ef87d0a7bb8664
};


//exportando moduloss
module.exports= controller;
<<<<<<< HEAD
*/
=======
>>>>>>> 3cef78d1c11f8a7bec32358d03ef87d0a7bb8664
