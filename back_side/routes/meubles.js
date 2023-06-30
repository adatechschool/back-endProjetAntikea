// ****----- ROUTES for collection meubles ****-----


//1. IMPORT everything we need to run the code
// import library express in this file
const express = require('express')
// method Router allows us to create routes
const router = express.Router()

// import mongoose library to get methods usefull to manipulate database
const mongoose = require("mongoose")

// import a meuble schema and change it to a model than can be manipulate
const meubleSchema = require("../models/meuble")
const meubleModel = mongoose.model('Meuble', meubleSchema)


// 2.New Routes to manipulate *meubles collection*

// GET a specific furniture from the database
router.get('/:id', (req, res, next) => {
    // findOne() is the method from mongoose library we need to get one specific item
    meubleModel.findOne({ _id: req.params.id }) // the one where id is equal to id in the request
        .then(meuble => res.status(200).json(meuble))
        .catch(error => res.status(404).json({ error }))
})

// PUT to modify data to the database
router.put("/:id", (req, res, next) => {
    // updateOne() is the method from mongoose library we need to modify one specific item
    // take 2 arguments :  1 : id of request to compare. 2 : new version of the object
    meubleModel.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id}) // "..." is a spread operator allows us to get all the request in one command
    .then(() => res.status(200).json({ message: 'Meuble modifié'}))
    .catch(error => res.status(400).json({ error }))
})

// GET to obtain all the info from the "meubles" table
router.get('/', (req, res) => {
    // find() is the method from mongoose library we need to get a collection
    meubleModel.find()
        .then(meubles => 
            res.status(200).json(meubles))
        .catch(error => res.status(400).json({ error }))
})

// POST to add a furniture in the data base
router.post('/', (req, res) => {
    console.log(req.body);
    // Be carefull the request must not have id, MongoDB create the id itself
    const addMeuble = new meubleModel({
        ...req.body // the spread operator "..." is a short cut to not have to write body.name, body.image... it get every line of the request
    })
    addMeuble.markModified('object') // try to fix the bug, but did not work, no idea if it is usefull
    addMeuble.save()
    .then(() => res.status(201).json({ message: 'Meuble ajouté'}))
    .catch(error => res.status(400).json({ error }))
})

// DELETE an item from the database
// deleteOne() is the method from mongoose library we need to delete one specific item
router.delete('/:id', (req, res) => {
    meubleModel.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Meuble supprimé' }))
        .catch(error => res.status(400).json({ error }))

})

module.exports = router

