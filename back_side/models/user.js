
const mongoose = require("mongoose")
// no need id because mondb check it automaticaly
const userSchema = new mongoose.Schema(
    {
        "firstName": { type: String },
        "lastName": { type: String },
        "email": { type: String },
        "password": { type: String },
        "admin": { type: Boolean }
    })

const userModel = mongoose.model('users', userSchema)

module.exports = userModel