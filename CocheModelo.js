var mongoose = require('mongoose')

var Schema = mongoose.Schema

var CocheSchema = Schema(
    {
        _id:{type:Schema.ObjectId , auto:true},
        nombre:String,
        modelo:String,
        precio:Number
    }
)

module.exports = mongoose.model('Coche', CocheSchema)