
// import library express in this file
const express = require('express')
// method Router allows us to create routes
const router = express.Router()
// use to transform schema in model
const mongoose = require('mongoose')
// access models user
const userSchema = require('../models/user');


router.post('/', async (req, res) => {
    try {
        const newUser = new userModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            admin: req.body.admin,
        });

        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (error) {
        res.status(400).send(error);
    }
});



// export router 
module.exports = router