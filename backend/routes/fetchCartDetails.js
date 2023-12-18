const express = require('express')
const cartModel = require('../models/cartModel')
const authenticateToken = require('../middleware/auth')
const router = express.Router()

router.get('/cartDetails',authenticateToken, async(req, res)=>{
    try{
        const existingDetails = await cartModel.findOne({email:req.user.email})
        if(!existingDetails){
            return res.status(500).json({message : 'Not found'})
        }
        return res.status(200).json({cartDetails:existingDetails})
    }
    catch(error){
        return res.status(500).json({message : 'Server error'})
    }
})

module.exports = router