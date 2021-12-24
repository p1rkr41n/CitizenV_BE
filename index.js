const express = require('express');
const config = require('config');
const app = express();
const port = process.env.PORT || config.get("port");
const routes = require('./routes');

require("./startup/cors")(app);
// create application/json parser
app.use(express.json());
// create application/x-www-form-urlencoded parser
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth",routes.auth); 
app.use("/api/user",routes.user);
app.use("/api/address",routes.address);
app.use("/api/human",routes.human);
app.use("/api/family",routes.family);
require("./startup/db")();
require("./controllers/update/updater.js");

app.listen(port,()=>{
    console.log('app listening at http://localhost:'+port)
})