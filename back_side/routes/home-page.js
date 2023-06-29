// ---ROUTES for index.html---

// import library express in this file
const express = require('express')
// method Router allows us to create routes
const router = express.Router()

const mongoose = require("mongoose")

const meubleSchema = require("../models/meuble")
const meubleModel = mongoose.model('Meuble', meubleSchema)

// --- New Route :create the route to display 5 last fourniture to sell on the home page ---
// GET to obtain the info from the "meubles" table
router.get('/', (req, res) => {
    meubleModel.find({}).limit(5)
        .then(meubles => {
            res.json(meubles)
        })
        .catch(err => {
            console.log(err)
        })
})


// export router 
module.exports = router