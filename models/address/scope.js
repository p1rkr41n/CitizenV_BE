const Joi = require('joi')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const scopeSchema= new Schema({
    name :{
        type: String,
        required: true,
    },
    belongToIdScopeRef :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Scope',
    },
    areaCode : {
        type:String,
        required :true,
    },
    typeOfScope:{
        type : String,
        enum:["country","city","district","commune","village"],
        required : true,
    }
})
exports.validate = function(scope) {
    const schema = Joi.object({
        name:Joi.string().required(),
        belongToIdScopeRef:Joi.ObjectId(),
        areaCode : Joi.string().required(),
    })
    return schema.validate(scope)
}

const Scope = mongoose.model("Scope",scopeSchema)
exports.Scope= Scope