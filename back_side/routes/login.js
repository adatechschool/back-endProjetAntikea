
// import library express in this file
const express = require('express')
// method Router allows us to create routes
const router = express.Router()
// use to transform schema in model
const mongoose = require('mongoose')
// access models user
const userModel = require('../models/user');


// GET all users
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

router.post('/auth', async (req, res) => {
  try {
    const newUser = new userModel({
      ...req.body
    })
    console.log(req.body);
    const saveUser = await newUser.save()
    res.status(201).json(saveUser)
  }
  catch (error) {
    res.status(400).json(error)
    console.log(error);
  }
});

// export router 
module.exports = router