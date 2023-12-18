const express = require('express')
const mobileModel = require('../models/mobileModel')
const router = express.Router()

router.get('/mobile_details/:phoneName', async(req, res)=>{
    try{
        const {phoneName} = req.params
        const mobileDetails = await mobileModel.findOne({mobileName:phoneName})
        const modifyDetails  = {mobileImage: mobileDetails.mobileImage, describe: mobileDetails.description, mobilePrice:mobileDetails.mobilePrice}
        return res.status(200).json({details: modifyDetails})
    }
    catch(error){
        return res.status(500).json({message: 'Server error'})
    }
})

module.exports = router