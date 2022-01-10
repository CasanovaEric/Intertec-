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
router.get('/register', usersController.register);
router.get('/users/register', usersController.register);
router.post('/users/register', usersController.create);




//Export Module
module.exports= router;