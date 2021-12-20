const mongoose  = require("mongoose");
const Schema = mongoose.Schema

const roleSchema = new Schema({
    name:{
        type:String,
        enum: ["admin","A1","A2","A3","B1","B2"],
        required :true,
    },
    idRoleManageRef :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Role',    
    },

    typeOfManageScope :{
        type: String,
        enum:["country","city","district","commune","village"],
        required :true
    }
})

const Role = mongoose.model("Role",roleSchema)
exports.Role =Role
