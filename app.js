const { Router } = require('express');
const express = require('express');
const app = express();
const path= require('path');
const RouteMain= require('./routes/main');
const RouteProducts = require('./routes/products');
const publicPath= path.resolve(__dirname, '/public');
app.use(express.static(publicPath))

//Methods 
app.listen(process.env.PORT || 3000, function() {
    
    console.log('Servidor corriendo en puerto 3000');
});
//METHOD USED
app.use(express.static('public'));

app.set('views engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', RouteMain);

//"ROUTER PRODUCTS"
app.use('/', RouteProducts);
app.use('/products', RouteProducts);

//app.use('/products/:id', RouteProducts);
app.use('/products/detailsProducts', RouteProducts);
app.use('/products/detailsProducts/:id', RouteProducts);






app.get("/motog60s", (req, res) => { 
    res.sendFile(path.join(__dirname + "/views/motog60s.html"))
})
