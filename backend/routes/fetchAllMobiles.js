const express = require('express')
const mobileModel = require('../models/mobileModel')
const jwt = require('jsonwebtoken')
const authenticateToken = require('../middleware/auth')
const router = express.Router()

router.get('/all_mobiles',authenticateToken, async(req, res)=>{
    try{
        if(!req.isAdmin){
            return res.status(403).json({ message: 'Forbidden'});
        }
        const allMobiles = await mobileModel.find({})
        return res.status(200).json({allDetails: allMobiles})
    }
    catch(error){
        return res.status(500).json({message: 'Server error'})
    }
})

module.exports = router