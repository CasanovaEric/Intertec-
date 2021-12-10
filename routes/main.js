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


router.get('/register', mainController.register);

router.get('/confirm-order', mainController.confirmOrder);

module.exports= router;
//module.exports= app;