const express = require('express')
const userModel = require('../models/usersModel')
const bcrypt = require('bcrypt')
const router = express.Router()

router.post('/signup', async(req,res)=>{
    try{
        const {email, userName, password} = req.body

        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.status(400).json({message: 'Email already exist'})
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new userModel({email, userName, password:hashedPassword})
        await newUser.save()
        return res.status(201).json({message: 'Signup successfull'})
    }
    catch(error){
        return res.status(500).json({message : 'Server error'})
    }
})

module.exports = router