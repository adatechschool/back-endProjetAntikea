// ****----- ROUTES for collection login ****-----


//1. IMPORT everything we need to run the code
// import library express in this file
const express = require('express')
// method Router allows us to create routes
const router = express.Router()
// use to transform schema in model
const mongoose = require('mongoose')
// access models user
const userModel = require('../models/user');


// 2.New Routes to manipulate *meubles collection*

// GET all users from the database
router.get('/', (req, res) => {
  // you can't use find() method with a schema, only model
  // no callback in find method 
  userModel.find({})
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      console.log(err);
    })
})

// router.post('/', async (req, res) => {
//   try {
//     const newUser = new userModel({
//       ...req.body
//     })
//     console.log(req.body);
//     const saveUser = await newUser.save()
//     res.status(201).json(saveUser)
//   }
//   catch (error) {
//     res.status(400).json(error)
//     console.log(error);
//   }
// });


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
    .then(() => res.status(201).json({ message: 'User ajouté' }))
    .catch(error => res.status(400).json({ error }))
})

// DELETE a user from the database
// deleteOne() is the method from mongoose library we need to delete one specific item
router.delete('/:id', (req, res) => {
  userModel.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'User supprimé' }))
    .catch(error => res.status(400).json({ error }))
})

//PUT a user from the dataBase
router.put("/:id", (req, res, next) => {
  // updateOne() is the method from mongoose library we need to modify one specific item
  // take 2 arguments :  1 : id of request to compare. 2 : new version of the object
  userModel.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id }) // "..." is a spread operator allows us to get all the request in one command
      .then(() => res.status(200).json({ message: 'User modifié' }))
      .catch(error => res.status(400).json({ error }))
})



// export router 
module.exports = router