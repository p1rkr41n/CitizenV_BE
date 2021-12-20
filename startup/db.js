const mongoose = require("mongoose");
const config = require("config");

const mongooseOpts = {
    useNewUrlParser:true,
    useUnifiedTopology:true,
};

module.exports = function () {
  const db = config.get("db");
  mongoose.connect(db, mongooseOpts).then(() => console.log("Connected!"));
};