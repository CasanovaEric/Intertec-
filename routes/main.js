//Const
const express = require('express');
const router = express.Router();
const path = require('path');
const mainController = require('../controllers/mainController');


const options = {
    root: path.join(__dirname, '../views')
};

router.get('/', mainController.index);


router.get('/confirm-order', mainController.confirmOrder);


router.get('/carrito', mainController.carrito)


module.exports = router;
