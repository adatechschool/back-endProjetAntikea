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
    meubleModel.find()
        .then(meubles => 
            res.status(201).json(meubles)
        )
        .catch(err => {
            console.log(err)
            .then((() => res.status(201).json({ message: "Objet enregistré"})))
            .catch(error => res.status(400).json({ error }))
        })
})

router.post('/', (req, res) => {
    delete req.body._id; //s'il y a déjà un id dans la requete
    const addMeuble = new meubleModel({
        ...req.body
    })
    addMeuble.save()

})

router.get('/:id', (req, res, next) => {
    meubleModel.findOne({ _id: req.params.id })
    .then(meuble => res.status(200).json(meuble))
    .catch(error => res.status(404).json({ error }))
})

// export router 
module.exports = router