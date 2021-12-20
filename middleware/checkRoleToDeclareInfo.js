
module.exports = (req,res,next) =>{
    if(req.decodedToken.role == 'B2' ||req.decodedToken.role == 'B1')
        if(req.decodedToken.declarable)
        return next()
    return res.status(403).send("Access denied")
}