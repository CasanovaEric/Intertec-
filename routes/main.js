//declarando constantes
const express = require('express');
const router= express.Router();
const mainController= require('../controllers/mainController');
const path = require('path');

const options = {
    root: path.join(__dirname, '../views')
};

router.get('/', mainController.index);

router.get('/login', mainController.login);
router.post('/', mainController.index);


router.get('/register', mainController.register);

router.get('/confirm-order', mainController.confirmOrder);


router.get('/carrito', mainController.carrito)

module.exports= router;
