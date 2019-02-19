const mongoose = require('mongoose')
const Schema = mongoose.Schema
const CocheSchema = Schema(
    {
        _id:{type:Schema.ObjectId , auto:true},
        nombre:String,
        modelo:String,
        precio:Number
    }
)

module.exports = mongoose.model('Coche', CocheSchema)
