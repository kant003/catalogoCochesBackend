// npm install express
// npm install body-parser
// npm install -D nodemon 
const express = require('express');
const bodyParser = require('body-parser');
const CocheController = require('./CocheController');
const mongoose = require('mongoose');
const PUERTO = 7777;
const app = express();

app.use(bodyParser.urlencoded( {extended:false} ));
app.use(bodyParser.json());

app.get('/coche/:id', CocheController.getCoche);
app.get('/coches', CocheController.getCoches);
app.post('/coche', CocheController.saveCoche);
app.put('/coche/:id', CocheController.updateCoche);
app.delete('/coche/:id', CocheController.deleteCoche);

/*mongoose.connect('mongoosedb://localhost:27017/coches', (err,res)=>{
    if(err){
        console.log('Fallo en BD' + err)
        throw err
    }else{
        console.log('Conexión con mongo correcta')
        
        app.listen(PUERTO, ()=>{
            console.log('El servidor se arranco correctamente')
        })
    }
})*/

mongoose.connect('mongodb://localhost:27017/coches', { useNewUrlParser: true, useFindAndModify:false }).then(
    () => {  
        console.log('Conexión con mongo correcta') 
        app.listen(PUERTO, ()=>{
            console.log('El servidor se arranco correctamente')
        })
    },err => { console.log('fallo en la base de datos:'+err) }
)






/*app.get('/prueba', (req,res)=>{
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
*/

