const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {type: String, require: true},
    userName: {type: String, require: true},
    password: {type: String, require: true},
    role: {type: String, default: 'user'},
})

const usersModel = mongoose.model('user registrations', userSchema)
module.exports = usersModel