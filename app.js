/*const express = require ("express")
const path = require("path")
const app = express ()

const publicPath = path.resolve (__dirname, "./public") 
app.use(express.static(publicPath))

app.listen(4000, () => 
console.log("Houston todo en orden en el puerto"))

app.get("/", (req, res) => { 
    res.sendFile(path.join(__dirname + "/views/index.html"))
})

app.get("/bateria", (req, res) => { 
    res.sendFile(path.join(__dirname + "/views/bateria.html"))
})

app.get("/registro", (req, res) => { 
    res.sendFile(path.join(__dirname + "/views/registro.html"))
})

app.get("/confirmar-orden", (req, res) => { 
    res.sendFile(path.join(__dirname + "/views/confirmar-orden.html"))
})

// app.listen(3000, ()=>{
//     console.log('Servidor funcionando');
// });*/ 







const express = require('express');
const app = express();
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.listen(process.env.PORT || 3000, function() {
    
    console.log('Servidor corriendo en puerto 3000');
});


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
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
