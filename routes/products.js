const express= require('express');
const router= express.Router();
const productsController= require('../controllers/productsController')

const path = require('path');

const options = {
    root: path.join(__dirname, '../views')
};
//Routes Products
router.get('/', productsController.index);
router.get('/create', productsController.create);
//export Modules
module.exports= router;