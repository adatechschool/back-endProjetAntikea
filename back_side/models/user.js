
const mongoose = require("mongoose")
// no need id because mondb check it automaticaly
const userSchema = mongoose.Schema(
    {
        "firstName": { type: String },
        "lastName": { type: String },
        "email": { type: String },
        "password": { type: String },
        "admin": { type: Boolean }
    })
