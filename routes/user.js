//Const
const express = require('express');
const router= express.Router();
const usersController= require('../controllers/usersController');
const path = require('path');
const { body, check }= require('express-validator');
const guestMiddleware = require('../middleware/guestMiddleware');
const authMiddleware = require('../middleware/authMiddleware');
const options = {
    root: path.join(__dirname, '../views')
};

//VALIDATE
const validateForUsers= [
    body('firstName').notEmpty().withMessage('Debes Completar el campo Nombre'),
   body('lastName').notEmpty().withMessage('Debes Completar el campo Apellido'),
    body('userName').notEmpty().withMessage('Debes Completar el campo Nombre de Usuario'),
    body('email').isEmail().withMessage('Debes Completar el email')
];

//Routes Users

router.get('/login', usersController.login);
 router.post('/users/login',[check('email').isEmail().withMessage('Email invalido'),
 check('password').isLength({min: 8}).withMessage('la contraseña debe tener al menos 8 caracteres')

 ] ,usersController.processLogin);
// router.get('/register', usersController.register);
router.get('/register', guestMiddleware,usersController.register);
router.post('/', validateForUsers, usersController.create);



//Export Module
module.exports= router;