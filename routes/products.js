const express= require('express');
const router= express.Router();
const productsController= require('../controllers/productsController')

const path = require('path');

const options = {
    root: path.join(__dirname, '../views')
};

router.get('/producto', productsController.producto)

//exportando modulos
module.exports= router;