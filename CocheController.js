var Coche = require('./CocheModelo')

function getCoche(req, res){
    var idCoche = req.params.id
    
    Coche.findById(idCoche).then(
        cocheEncontrado => {
            if(!cocheEncontrado){
                res.status(404).send( {accion:'get one', mensaje:'No existe el coche con ese id'} )
            }else{
                res.status(200).send( {accion:'get one', data: cocheEncontrado})
            }
        }
    ).catch(
        err => {
            res.status(500).send( {accion:'get one', mensaje:'problema el obtener un coche'} )
        }
    )
}

function getCoches(req, res){
   /* Coche.find().exec( (err, coches)=>{
        if(err){
            res.status(500).send( {accion:'get all', mensaje:'problema al leer los coches'} )
        }else if(!coches){
            res.status(404).send( {accion:'get all', mensaje:'No hay coches'} )
        }else{
            res.status(200).send( {accion:'get all', data: coches})
        }
    })*/
    
    Coche.find().sort('-_id').exec().then(
        coches => {
            if(!coches){
                res.status(404).send( {accion:'get all', mensaje:'No hay coches'} )
            }else{
                res.status(200).send( {accion:'get all', data: coches})
            }
        }
    ).catch(
        err => { 
            res.status(500).send( {accion:'get all', mensaje:'problema al leer los coches:'+err} )
        }
    )

}

function saveCoche(req, res){
    var param = req.body
    console.log(param)
    // res.status(200).send( {accion:"save", data: param})
    var coche = new Coche();
    coche.nombre = param.nombre
    coche.modelo = param.modelo
    coche.precio = param.precio
    console.log(coche)
    coche.save().then(
        cocheGuardado => {
            res.status(200).send( {accion:'save', data: cocheGuardado} )
        }
    ).catch(
        err => { 
            res.status(500).send( {accion:'save', mensaje:'problema al guardar un coche:'+err} )
        }
    )
}

function updateCoche(req, res){
    var idCoche = req.params.id
    var param = req.body

    //{new:true}  ===>  hace que devuelva el nuevo coche insertado
    Coche.findOneAndUpdate(idCoche, param, {new:true}).then(
        cocheActualizado => {
            res.status(200).send( {accion:'update', data: cocheActualizado} )
        }
    ).catch(
        err => { 
            res.status(500).send( {accion:'update', mensaje:'problema al actualizar un coche:'+err} )
        }
    )
}

function deleteCoche(req, res){
    var idCoche = req.params.id
    
}

module.exports = {getCoche, getCoches, saveCoche, updateCoche, deleteCoche}