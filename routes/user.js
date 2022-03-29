//Const
const express = require('express');
const router= express.Router();
const usersController= require('../controllers/usersController');
const path = require('path');
const { body, check }= require('express-validator');
//Const for Multer
const multer = require('multer')
//Const for guestMiddleware
const guestMiddleware = require('../middleware/guestMiddleware');
//Const for authtMiddleware
const authMiddleware = require('../middleware/authMiddleware');
//Const for checktMiddleware
const checkMiddleware = require('../middleware/ChekLogged')
const options = {
    root: path.join(__dirname, '../views')
};

//STORAGE MULTER
const storage= multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, './public/images/users');
    },
    filename:(req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
})

const uploadFile = multer({storage});
//VALIDATE
const validationsForUsers= [
    body('firstName').notEmpty().withMessage('Debes Completar el campo Nombre'),
   body('lastName').notEmpty().withMessage('Debes Completar el campo Apellido'),
    body('userName').notEmpty().withMessage('Debes Completar el campo Nombre de Usuario'),
    body('email').isEmail().withMessage('Debes Completar el email'),
    body('password').notEmpty().withMessage('Debes escribir una contraseña'),
    //body('dateOfBirth').notEmpty().withMessage('Debes agregar una fecha de nacimiento'),
    body('addres').notEmpty().withMessage('Debes agregar una direccion'),
    body('zipCode').notEmpty().withMessage('Debes agregar un codigo postal'),
    body('passwordConfirm').notEmpty().withMessage('Debes  volver escribir la contraseña '),
    body('vendedor').notEmpty().withMessage('Debes escoger un rol vendedor o comprador'),
    body('uploadImage_users').custom((value,{req})=>{
        let file = req.file;
        let acceptedExtensions  = ['.jpg', '.png', '.gif'];
        if (!file){
            throw new Error('tienes que subir una imagen')
        }else{
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)){
                throw new Error(`las extensiones de archivo permitidias son ${acceptedExtensions.join(',')}`);
    
            }    
        }
        
        return true;
    })
];
// VALIDATE FOR LOGIN
const validationsLogin = [
    check('email').isEmail().withMessage('Email invalido'),
    check('password').isLength({min: 8}).withMessage('la contraseña debe tener al menos 8 caracteres')

]; 
//Routes Users/Logins
router.get('/login', usersController.login);
router.post('/users/login', validationsLogin, usersController.processLogin);
//Route for users/Register
router.get('/register',usersController.register);
router.post('/', uploadFile.single('uploadImage_users'),  validationsForUsers, usersController.create);
//Route Update && Delete user
router.get('/users/edit/:id', usersController.ProfileUser)
//Router Update user
router.put('/users/edit/:id', usersController.update)
//Export Module
module.exports= router;