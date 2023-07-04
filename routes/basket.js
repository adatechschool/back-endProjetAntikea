// ****----- ROUTES for collection panier ****-----


//1. IMPORT everything we need to run the code
// import library express in this file
const express = require('express')
// method Router allows us to create routes
const router = express.Router()
// use to transform schema in model
const mongoose = require('mongoose')
// access models user
const basketModel = require('../models/basket');




//2. New Routes to manipulate *basket collection*

// GET a specific basket from the database
router.get('/:id', (req, res, next) => {
    // findOne() is the method from mongoose library we need to get one specific item
    basketModel.findOne({ _id: req.params.id }) // the one where id is equal to id in the request
        .then(basket => res.status(200).json(basket))
        .catch(error => res.status(404).json({ error }))
})

// PUT to modify data in the basket
router.put("/:id", (req, res, next) => {
    // updateOne() is the method from mongoose library we need to modify one specific item
    // take 2 arguments :  1 : id of request to compare. 2 : new version of the object
    basketModel.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id }) // "..." is a spread operator allows us to get all the request in one command
        .then(() => res.status(200).json({ message: 'Panier modifié' }))
        .catch(error => res.status(400).json({ error }))
})

// GET to obtain all the info from the "basket" collection
router.get('/', (req, res) => {
    // find() is the method from mongoose library we need to get a collection
    basketModel.find()
        .then(baskets =>
            res.status(200).json(baskets))
        .catch(error => res.status(400).json({ error }))
})

// POST to add a basket in the database
router.post('/', (req, res) => {
    console.log(req.body);
    // Be careful, the request must not have an id. MongoDB creates the id itself
    const addBasket = new basketModel({
        ...req.body // the spread operator "..." is a shortcut to not have to write body.userId, body.products... it gets every line of the request
    })
    addBasket.markModified('object') // try to fix the bug, but did not work, no idea if it is useful
    addBasket.save()
        .then(() => res.status(201).json({ message: 'Panier ajouté' }))
        .catch(error => res.status(400).json({ error }))
})

// DELETE an item from the database
// deleteOne() is the method from mongoose library we need to delete one specific item
router.delete('/:id', (req, res) => {
    basketModel.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Panier ajouté' }))
        .catch(error => res.status(400).json({ error }))
})

module.exports = router