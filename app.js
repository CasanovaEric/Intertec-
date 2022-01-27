//Const 
const express = require('express');
const app = express();
const path= require('path');
const RouteMain= require('./routes/main');
const RouteUser= require('./routes/user');
const RouteProducts = require('./routes/products');
const publicPath= path.resolve(__dirname, '/public');
const session = require('express-session');


//Method use 
app.listen(process.env.PORT || 5000, function() {
    
    console.log('Servidor corriendo en puerto 5000');
});

app.use(express.static('public'));
app.set('views engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(session({secret: 'this is secret'}));
//"ROUTER PRODUCTS"
//app.use('/', RouteProducts);
app.use('/products', RouteProducts);
//Route Main
app.use('/', RouteMain);
//Routes Products
app.use('/products', RouteProducts)
//Router users
 app.use('/', RouteUser);

