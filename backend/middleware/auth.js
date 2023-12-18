const jwt = require('jsonwebtoken')
require('dotenv').config()

const authenticateToken = (req,res,next) =>{
    if(req.headers && req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        const token = req.headers.authorization.split(' ')[1]
        if(token==null){
            return res.status(401).json({message: 'Unauthorized'})
        }
        jwt.verify(token, process.env.TOKEN_KEY, (err, user)=>{
            if(err){
                return res.status(403).json({message: 'Forbidden'})
            }
            req.user = user
            
            if(user){
                req.userName = user.userName;
                req.email = user.email;
                req.isAdmin = user.role === 'admin';
            }
            next()
        })
    }
}

module.exports = authenticateToken