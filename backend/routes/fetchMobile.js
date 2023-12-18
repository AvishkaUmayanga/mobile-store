const express = require('express')
const mobileModel = require('../models/mobileModel')
const router = express.Router()

router.get('/mobile_phones/:brand', async(req,res)=>{
    try{
        const {brand} = req.params
        const mobile = await mobileModel.find({brand})
        return res.status(200).json({mobileDetails: mobile})
    }
    catch(error){
        return res.status(500).json({message : 'Server error'})
    }
})

module.exports = router