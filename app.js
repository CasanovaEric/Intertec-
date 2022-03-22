//Const 
const express = require('express');
const app = express();
const path= require('path');
const RouteMain= require('./routes/main');
const RouteUser= require('./routes/user');
const RouteProducts = require('./routes/products');
const publicPath = path.resolve(__dirname, '/public');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const remembermeMiddleware = require('./middleware/RemembermeMiddleware');


//Method use 
app.listen(process.env.PORT || 3000, function() {
    
    console.log('Servidor corriendo en puerto 3000');
});

app.use(express.static('public'));
app.set('views engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
app.use(remembermeMiddleware);
app.use(session({secret: 'this is secret'}));
//"ROUTER PRODUCTS"
//app.use('/', RouteProducts);
app.use('/products', RouteProducts);
//Route Main
app.use('/', RouteMain);
//Routes Products
app.use('/products', RouteProducts);
//Router users
app.use('/', RouteUser);

app.get("/motog60s", (req, res) => { 
    res.sendFile(path.join(__dirname + "/views/motog60s.html"))
})
