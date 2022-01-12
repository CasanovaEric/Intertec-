//Const
const express = require('express');
const router= express.Router();
const usersController= require('../controllers/usersController');
const path = require('path');
const { check, body }= require('express-validator');
const options = {
    root: path.join(__dirname, '../views')
};

//VALIDATE
const validateForUsers= [
    check('firstName').notEmpty().withMessage('Debes Completar el campo Nombre'),
   check('lastName').notEmpty().withMessage('Debes Completar el campo Apellido'),
    check('userName').notEmpty().withMessage('Debes Completar el campo Nombre de Usuario'),
    check('email').isEmail().withMessage('Debes Completar el campo Nombre')
];

//Routes Users

router.get('/login', usersController.login);
router.post('/users/login', usersController.index);
// router.get('/register', usersController.register);
router.get('/register', usersController.register);
router.post('/', validateForUsers, usersController.create);



//Export Module
module.exports= router;