const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (payload) => {
    const token = jwt.sign(payload,config.get("jwtPrivateKey"));
    return token;
}