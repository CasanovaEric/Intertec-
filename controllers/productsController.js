const path = require('path');
const fs= require('fs');



const controller={
     index: (req, res)=>{
          var fs = require('fs');
          var data = JSON.parse(fs.readFileSync('data/productDataBase.json', 'utf8'));
          res.render('products.ejs', {data:data})
    },

    detail: (req, res)=>{
         res.render('DetailsProducts.ejs')

    },
    
    create: (req, res) => {
		res.render('create-products-form.ejs');
	},



};


//exportando moduloss
module.exports= controller;
