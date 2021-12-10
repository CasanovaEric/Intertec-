//declarando constantes
const express = require('express');
const app = express();
const path= require('path')
const RouteMain= require('./routes/main')
const publicPath= path.resolve(__dirname, '/public')


//metodos usados 
app.listen(process.env.PORT || 3000, function() {
    
    console.log('Servidor corriendo en puerto 3000');
});
app.use(express.static('public'));

app.use('/', RouteMain);


//app.use(express.json());
//app.use(express.urlencoded({extended: true}))


 app.set('views', './views')
 app.set('views','ejs')




// app.post('/', (req,res)=>{
//     console.log(req.body);
//     res.sendFile(__dirname + '/views/login.html');
// });


