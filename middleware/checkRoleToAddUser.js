
module.exports = (req,res,next) =>{
    if(req.decodedToken.role == 'B2')
        return res.status(403).send("Access denied")
    return next()
}