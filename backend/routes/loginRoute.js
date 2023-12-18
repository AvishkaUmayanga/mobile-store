const express = require('express')
const userModel = require('../models/usersModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = express.Router()

router.post('/login', async(req,res)=>{
    try{
        const {email, password} = req.body

        const existingUser = await userModel.findOne({email})
        if(!existingUser){
            return res.status(404).json({message: 'User not found. Please signup'})
        }

        const passwordMatch = await bcrypt.compare(password, existingUser.password)
        if(!passwordMatch){
            return res.status(401).json({message: 'Invalid password'})
        }

        const user = {email: existingUser.email, role:existingUser.role}
        const token = jwt.sign(user, process.env.TOKEN_KEY, {expiresIn: '1h'})
        return res.status(200).json({message: 'Login sucessfull', token, role: existingUser.role})
    }
    catch(error){
        return res.status(500).json({message : 'Server error'})
    }
})

module.exports = router