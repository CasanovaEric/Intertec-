//Const 
const express = require('express');
const app = express();
const path= require('path');
const methodOverride = require('method-override')
//Require Routes /users,/products,/Api
const RouteMain= require('./routes/main');
const RouteUser= require('./routes/user');
const RouteProducts = require('./routes/products');
const RouteApi = require('./routes/RouteApi')
//Require cors for api
const cors = require('cors')
const publicPath = path.resolve(__dirname, '/public');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const remembermeMiddleware = require('./middleware/RemembermeMiddleware');

//app.use(remembermeMiddleware);
app.use(session({secret: 'this is secret'}));

//Method use 
app.listen(process.env.PORT || 3000, function() {
    
    console.log('Servidor corriendo en puerto 3000');
});
//app.use(methodOverride('_method'))
app.use(express.static('public'));
app.set('views engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
app.use(remembermeMiddleware);
//Router users
app.use('/', RouteUser);
