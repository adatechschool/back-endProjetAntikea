// ------ LOGIN SCHEMA ------

/* A schema is a structure that defines the shape of the documents within a collection. 
The schema acts as a model for the documents, allowing MongoDB to enforce data consistency and provide a predictable structure for the data stored in the database.
Developers can specify the expected structure of their data and utilize features such as data validation, default values, and pre/post hooks for document lifecycle events.
 */

const mongoose = require("mongoose")
// no need id because mondb check it automaticaly
const userSchema = new mongoose.Schema(
    {
        "firstName": { type: String, required: true },
        "lastName": { type: String, required: true },
        "email": { type: String, required: true },
        "password": { type: String, required: true },
        "admin": { type: Boolean, required: true }
    })

const userModel = mongoose.model('users', userSchema)

module.exports = userModel