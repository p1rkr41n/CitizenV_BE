const express = require('express');
const config = require('config');
const jwt =require('jsonwebtoken');
const app = express();

const port =3000;
const routes = require('./routes');
// mongoose.connect('mongodb+srv://admin123456:admin123456@cluster0.qelzb.mongodb.net/citizenV?retryWrites=true&w=majority',{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// });
const { User } = require('./models/user/user');
const { Role } = require('./models/user/role');
const { Scope } = require('./models/address/scope');
const   {Address} = require('./models/address/address');
const { Human } = require('./models/human/human');
const {Family} = require('./models/human/family');

require("./startup/cors")(app);
// create application/json parser
app.use(express.json());
// create application/x-www-form-urlencoded parser
app.use(express.urlencoded({ extended: true }));
//{username,password} => server
app.use("/api/auth",routes.auth); 
app.use("/api/user",routes.user);
app.use("/api/address",routes.address);
app.use("/api/human",routes.human);
app.use("/api/family",routes.family);
require("./startup/db")();
require("./controllers/update/updater.js");



//  newUser = new User({
//                             name: 'cán bộ quận/huyện của thành phố '+ city.name,
//                             addedBy: ,
//                             idManagedScopeRef: city._id,
//                             idRoleRef:"61b5e3a8bf47d63c05ee12da",
//                             username:city.areaCode,
//                             password: '123456',
//                             completed:false,
//                             declarable: true
                        
//                         })


app.listen(port,()=>{
    console.log('app listening at http://localhost:'+port)
})