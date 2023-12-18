const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    userName :{type: String, require: true},
    email :{type: String, require: true},
    itemDetails:[{
        mobileName :{type: String, require: true},
        mobilePrice :{type: Number, require: true},
        mobileImage :{type: String, require: true},
    }]
})

const cartModel = mongoose.model('cart details', cartSchema)
module.exports = cartModel