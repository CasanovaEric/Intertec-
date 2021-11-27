// const express= require('express');
// const path = require('path')
// const app = express();
// app.use(express.static('public'));

// app.use(express.static(__dirname + '/public'));

// app.get('/', (req,res)=> {
//     res.sendFile(path.resolve(__dirname + '/views/home.html'))
// })

// app.get('/', (req,res)=>{
//     res.sendFile(__dirname + '/views/home.html');
// });

// // app.get('/login', (req,res)=>{
// //     res.sendFile(__dirname + '/views/login.html');
// // });

// // app.get('/register', (req,res)=>{
// //     res.sendFile(__dirname + '/views/register.html');
// // });


// app.listen(3000, ()=>{
//     console.log('Servidor funcionando');
// }); 







const express = require('express');
const app = express();
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.listen(process.env.PORT || 3000, function() {
    
    console.log('Servidor corriendo en puerto 3000');
});


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/registro.html');
});

app.get('/confirmar-orden', (req,res)=>{
    res.sendFile(__dirname + '/views/confirmar-orden.html');
});


app.post('/', (req,res)=>{
    console.log(req.body);
    res.sendFile(__dirname + '/views/login.html');
});
