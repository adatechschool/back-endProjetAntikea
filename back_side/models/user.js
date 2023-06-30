// ------ LOGIN SCHEMA ------

/* A schema is a structure that defines the shape of the documents within a collection. 
The schema acts as a model for the documents, allowing MongoDB to enforce data consistency and provide a predictable structure for the data stored in the database.
Developers can specify the expected structure of their data and utilize features such as data validation, default values, and pre/post hooks for document lifecycle events.
 */

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
