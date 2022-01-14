//Const
const express = require('express');
const router= express.Router();
const usersController= require('../controllers/usersController');
const path = require('path');
const options = {
    root: path.join(__dirname, '../views')
};


//Routes Users

router.get('/login', usersController.login);
router.post('/users/login', usersController.index);
// router.get('/register', usersController.register);
router.get('/register', usersController.register);
router.post('/', usersController.create);






//Export Module
module.exports= router;