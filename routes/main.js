//Const
const express = require('express');
const { route } = require('express/lib/router');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const mainController= require('../controllers/mainController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images'));
    },
    filename: (req, file, cb) => {
        console.log(file);
        const newFilename = 'images' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
});

const upload = multer({ storage });

const options = {
    root: path.join(__dirname, '../views')
};

//formulario de creacion multer
// router.post('/', upload.single('imagen-producto'), controller.store);

router.get('/', mainController.index);


router.get('/confirm-order', mainController.confirmOrder);



router.get('/carrito', mainController.carrito)

module.exports= router;

