const express = require('express')
const mobileModel = require('../models/mobileModel')
const router = express.Router()

router.get('/latest_mobiles', async(req,res)=>{
    try{
        const getBrand = await mobileModel.distinct('brand')
        const newMobileDetails = [];

        for(const brand of getBrand){
            const mobilesForBrand = await mobileModel.find({brand}).limit(3)
            newMobileDetails.push(...mobilesForBrand)
        }
        return res.status(200).json({allDetails:newMobileDetails})
    }
    catch(error){
        return res.status(500).json({message: 'Server error'})
    }  
})

module.exports = router