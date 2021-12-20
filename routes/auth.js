const express = require("express");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose")
const router = express.Router();
const generateAuthToken = require("../middleware/generateAuthToken");
const { User } = require("../models/user/user")

//login
router.post("/", async (req,res) => {
    //validate user,password(length,type...)
    //if(err) do st
    //if(!err)
    //find user in db has username === req.body.username
    const user = await User.findOne({username:req.body.username})
                        .populate({path:'idRoleRef',model:'Role'})
                        .populate({path:'idManagedScopeRef',model:'Scope'}) 
                        
    if(!user) 
        return res.status(400).send("Invalid username or password");
    const checkPassword = req.body.password == user.password
    //await bcrypt.compare(req.body.password,user.password);    
    if(!checkPassword) 
    return res.status(400).send("Invalid username or password");
    const token = generateAuthToken({
        _id : user._id,
        username:user.username,
        role : user.idRoleRef.name,
        declarable: user.declarable,
        idManagedScopeRef:user.idManagedScopeRef._id
    })
    return res.send({token,
                    name:user.name,
                    area:user.idManagedScopeRef? user.idManagedScopeRef.name:'A1',
                    idArea: user.idManagedScopeRef?user.idManagedScopeRef._id:'A1'
                });
})

module.exports =router;