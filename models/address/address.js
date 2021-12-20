const Joi = require('joi')
const mongoose = require('mongoose')
const { Scope } = require('./scope')
const Schema = mongoose.Schema
const addressSchema= new Schema({
    idCountryRef:{
        type:mongoose.Schema.Types.ObjectId,
        required :true,
        ref :'Scope',
    },
    idCityRef:{
        type: mongoose.Schema.Types.ObjectId,
        ref :'Scope',
        required:true,
    },
    idDistrictRef:{
        type: mongoose.Schema.Types.ObjectId,
        ref :'Scope',
        required:true,
    },
    idCommuneRef:{
        type: mongoose.Schema.Types.ObjectId,
        ref :'Scope',
        required:true,
    },
    idVillageRef:{
        type: mongoose.Schema.Types.ObjectId,
        ref :'Scope',
        required :true
    }
})
exports.validate = function(address) {
    const schema = Joi.object({
        idCityRef:Joi.ObjectId().required(),
        idDistrictRef:Joi.ObjectId().required(),
        idCommuneRef:Joi.ObjectId().required(),
        idVillageRef:Joi.ObjectId().required(),

    })
    return schema.validate(address)
}

const Address = mongoose.model("Address",addressSchema)
exports.Address= Address