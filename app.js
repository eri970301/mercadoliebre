const express = require("express");
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));

app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})
app.get('/login', function(req, res){
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})
app.get('/registro', function(req, res){
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.listen(3000, function(){
    console.log("Servidor escuchando en puerto 3000!")
});