
// import library express in this file
const express = require('express')
// method Router allows us to create routes
const router = express.Router()
// use to transform schema in model
const mongoose = require('mongoose')
// access models user
const userSchema = require('../models/user');
// transform our schema in model
const userModel = mongoose.model('user', userSchema)


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

router.post('/auth', (req, res) => {
    try {
        const newUser = new userModel(
            {
                "firstName": "ryu",
                "lastName": "Oshi",
                "email": "streetfighter@example.com",
                "password": "hadouken",
                "admin": false
            }
        )
        const saveUser = newUser.save()
        res.status(201).json(saveUser)
    }
    catch (error) {
        res.status(400).json(error)
        console.log(error);
    }
});

// export router 
module.exports = router