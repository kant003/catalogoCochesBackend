// npm install express
// npm install body-parser
// npm install -D nodemon 
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.urlencoded( {extended:false} ))
app.use(bodyParser.json())

var PUERTO = 7777;

app.get('/prueba', (req,res)=>{
    res.status(200).send("hola angel que tal")
})

app.get('/prueba/:nombre', (req, res)=>{
    var nombre = req.params.nombre
    res.status(200).send("Hola que tal " + nombre)
})

app.get('/saluda/:nombre?', (req,res)=>{

    if(req.params.nombre){
        var nombre = req.params.nombre
    }else{
        var nombre = 'anonimo'
    }
    res.status(200).send("hola "+nombre)
})

app.get('/datos', (req,res)=>{
    res.status(200).send( {datos:[1,2,3], mensaje:'hola', valor:66} )
})

app.listen(PUERTO, ()=>{
    console.log('El servidor se arranco correctamente')
})
