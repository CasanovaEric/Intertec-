const express = require ("express")
const path = require("path")
const app = express ()

const publicPath = path.resolve (__dirname, "./public") 
app.use(express.static(publicPath))

app.listen(4000, () => 
console.log("Houston todo en orden en el puerto"))

app.get("/", (req, res) => { 
    res.sendFile(path.join(__dirname + "/views/index.html"))
})