//Const
const express= require('express');
const router= express.Router();
const productsController= require('../controllers/productsController')
const multer = require('multer')
const path = require('path');
const guestMiddleware = require('../middleware/guestMiddleware')
const checkMiddleware = require('../middleware/ChekLogged')

const options = {
    root: path.join(__dirname, '../views')
};
//STORAGE MULTER
const storage= multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, './public/images/products');
    },
    filename:(req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
});
const uploadFileProducts = multer({storage});
//Routes Products
router.get('/', productsController.index);
//Route Create Product
router.get('/create',checkMiddleware, productsController.registerProducts);
//Route Post register form products;
router.post('/', uploadFileProducts.single('uploadImage_products'),productsController.create);
router.get('/:id', productsController.detail);
router.get('/detailsProducts', productsController.detail);
router.get('/detailsProducts/:id', productsController.detail);
//export Modules
module.exports= router;
