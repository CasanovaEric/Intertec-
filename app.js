//Const 
const express = require('express')
const app = express();
const path= require('path')
const RouteMain= require('./routes/main')
const RouteUser= require('./routes/user')
const RouteProducts = require('./routes/products')
const publicPath= path.resolve(__dirname, '/public')


//Method use 
app.listen(process.env.PORT || 3000, function() {
    
    console.log('Servidor corriendo en puerto 3000');
});

app.use(express.static('public'));
app.set('views engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//"ROUTER PRODUCTS"
//app.use('/', RouteProducts);
app.use('/products', RouteProducts);

//app.use('/products/:id', RouteProducts);
app.use('/products/detailsProducts', RouteProducts);
app.use('/products/detailsProducts/:id', RouteProducts);

//Route Main
app.use('/', RouteMain);


//Routes Products
app.use('/products', RouteProducts)


//Router users
 app.use('/', RouteUser);

