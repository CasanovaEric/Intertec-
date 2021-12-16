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



};


//exportando moduloss
module.exports= controller;
