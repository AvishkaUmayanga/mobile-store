const express = require('express')
const cartModel = require('../models/cartModel')
const mobileModel = require('../models/mobileModel')
const authenticateToken = require('../middleware/auth')
const router = express.Router()
router.post('/add_to_cart', authenticateToken, async (req, res) => {
    try {
        const {mobileName, mobilePrice} = req.body;

        let cart = await cartModel.findOne({ email: req.user.email })
        if(!cart){
            cart = new cartModel({
                userName: req.user.userName,
                email: req.user.email,
                itemDetails: []
            });
        }
        const mobileDetais = await mobileModel.findOne({mobileName})
        const getMobileImage = mobileDetais.mobileImage

        cart.itemDetails.push({mobileName, mobilePrice, mobileImage:getMobileImage})
        await cart.save()
        return res.status(201).json({message: 'Item added'})
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Server error'});
    }
});

module.exports = router;