// import library express in this file
const express = require('express')
// method Router allows us to create routes
const router = express.Router()
// use to transform schema in model
const mongoose = require('mongoose')
// access models user
const userModel = require('../models/user');

router.post('/login', (req, res, next) => {
  try {
    const email = req.email
    const password = req.password
    postLog(res, req, email, password)
  }
  catch(e) {
    console.log(e);
    res.status(500)
  }


// GET a specific user from the database
router.get('/:id', (req, res, next) => {
  // findOne() is the method from mongoose library we need to get one specific item
  userModel.findOne({ _id: req.params.id }) // the one where id is equal to id in the request
    .then(user => res.status(200).json(user))
    .catch(error => res.status(404).json({ error }))
})

// POST to add a user in the data base
router.post('/', (req, res) => {
  console.log(req.body);
  // Be carefull the request must not have id, MongoDB create the id itself
  const addUser = new userModel({
    ...req.body // the spread operator "..." is a short cut to not have to write body.name, body.image... it get every line of the request
  })
  addUser.markModified('object') // try to fix the bug, but did not work, no idea if it is usefull
  addUser.save()
    .then(() => res.status(201).json({ message: 'Meuble ajouté' }))
    .catch(error => res.status(400).json({ error }))
})

})

module.exports = router