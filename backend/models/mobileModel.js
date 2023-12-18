const mongoose = require('mongoose')

const mobileSchema = new mongoose.Schema({
    brand: {type: String, require: true},
    mobileName: {type: String, require: true},
    mobilePrice:{type: String, require: true},
    mobileImage: {type: String, require: true},
    description: {type: [String], require: true},
})

const mobileDetails = mongoose.model('mobile details', mobileSchema)
module.exports = mobileDetails