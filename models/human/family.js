const Joi = require("joi");
const mongoose = require("mongoose");

const familySchema = new mongoose.Schema({
    idCardOfHeadOfHousehold:{
        type:String,    
        default:null  
    },
    headOfHouseholdName:{
        type:String,
        required:true
    },
    idAddressRef:{
        type: mongoose.Schema.Types.ObjectId,
        required :true,
        ref:'Address'
    },
    householdCode: {
        type: String,
        required:true,
    },
    members: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Human',
        required:true,
        default:[] ,
    }]
})
const Family = mongoose.model("Family",familySchema)
exports.Family = Family
exports.validate = function(family) {
    const schema = Joi.object({
        idCardOfHeadOfHousehold:Joi.String(),
        idAddressRef:Joi.ObjectId().required(),
        householdCode : Joi.string().required(),
        members: members.forEach(member=> Joi.ObjectId().required())
    })
    return schema.validate(family)
}