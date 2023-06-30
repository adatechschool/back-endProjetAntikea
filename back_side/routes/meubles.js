// ---ROUTES for collection meubles

// import library express in this file
const express = require('express')
// method Router allows us to create routes
const router = express.Router()

// import mongoose library to get methods usefull to manipulate database
const mongoose = require("mongoose")

// import a meuble schema and change it to a model than can be manipulate
const meubleSchema = require("../models/meuble")
const meubleModel = mongoose.model('Meuble', meubleSchema)


// --- New Routes to manipulate meubles collection ---

// GET a specific furniture
router.get('/:id', (req, res, next) => {
    meubleModel.findOne({ _id: req.params.id }) // the one where id is equal to id in the request
    .then(meuble => res.status(200).json(meuble))
    .catch(error => res.status(404).json({ error }))
})

router.put("/:id", (req, res, next) => {
    // use updateOne : argument 1 : id of request to compare, argument 2 : new version of the object
    meubleModel.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id}) // "..." is a spread operator allows us to get all the request in one command
    .catch(error => res.status(400).json({ error }))
})

// GET to obtain all the info from the "meubles" table
router.get('/', (req, res) => {
    meubleModel.find()
        .then(meubles => 
            res.status(201).json(meubles))
        .catch(error => res.status(400).json({ error }))
        })


// POST to add a furniture in the data base
router.post('/', (req, res) => {
    // first we need to delete the id in th ebody (if there is one) beaucause mongoDB handle ids for us
    delete req.body._id; // delete is a special futur very usefull
    const addMeuble = new meubleModel({
        ...req.body
    })
    addMeuble.save()
})

// DELETE un meuble
router.delete('/:id', (req, res) => {
    meubleModel.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Meuble supprimé'}))
    .catch(error => res.status(400).json({ error }))

})


// export router 
module.exports = router