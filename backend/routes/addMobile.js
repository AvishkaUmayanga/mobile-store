const express = require('express')
const mobileModel = require('../models/mobileModel')
const authenticateToken = require('../middleware/auth')
const router = express.Router()

router.post('/add_new_mobile',authenticateToken, async(req,res)=>{
    try{
        if(!req.isAdmin){
            return res.status(403).json({ message: 'Forbidden'});
        }

        const {brand, mobileName, mobilePrice, mobileImage, description} = req.body
        const existingMobile = await mobileModel.findOne({mobileName})
        if(existingMobile){
            return res.status(400).json({message : 'Already exist'})
        }

        const newMobile = new mobileModel({brand, mobileName, mobilePrice, mobileImage, description})
        await newMobile.save()
        return res.status(201).json({message: 'Saved successfull'})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({message : 'Server error'})
    }
})

module.exports = router