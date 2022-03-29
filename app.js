//Const 
const express = require('express');
const app = express();
const path= require('path');
var methodOverride = require('method-override')
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
    console.log('Servidor corriendo en puerto 3000');

app.use(express.static('public'));

//app.use(remembermeMiddleware);
app.use(session({secret: 'this is secret'}));

app.use(remembermeMiddleware);
//Router users
app.use('/', RouteUser);
