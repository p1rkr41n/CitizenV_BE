const mongoose = require('mongoose')
const Joi = require('joi')
const Schema = mongoose.Schema
const userSchema = new Schema({
    addedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required : true,
    },
    name :{
        type: String,
        required: true,
    },
    idManagedScopeRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Scope',
        required : true,
    },
    idRoleRef:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Role',
        required: true,
    },
    username:{
        type : String,
        required :true,
    },
    password:{
        type : String,
        required :true,
    },
    completed: {
        type:Boolean,
        required: true,
        default:false,
    },
    declarable : {
        type: Boolean,
        required :true,
        default:true,
    },
})
const User = mongoose.model("User",userSchema)

const validate = function(user) {
    const schema = Joi.object({
    addedBy: Joi.ObjectId().required(),
    name: Joi.string().required(),
    idManagedScopeRef:Joi.ObjectId(),
    idRoleRef: Joi.ObjectId().required(),
    id:Joi.string().required,
    password:Joi.string().required(),
    // completed: Joi.boolean(),
    // declarable:Joi.boolean(),
})
    return schema.validate(user)
}
exports.User = User
exports.validate = validate