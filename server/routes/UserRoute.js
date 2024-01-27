const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const bcrypt = require('bcrypt');
const UserModel = require('../models/UserModel');


router.post('/user/register', async (req, res, next) => {
    const { username, password } = req.body;
    const saltRounds = 10;

    await bcrypt.hash(password, saltRounds, async (err, hashed) => {
        if (err) {
            res.json("There was an error in hashing");
        } else {
            const userAdded = await UserModel.create({
                username: username,
                password: hashed
            });
            console.log(userAdded);
            res.status(201).json(userAdded);
        }
    })
})


router.post('/user/login', async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const data = await UserModel.findOne({username});
        const hashedPassword = data.password;
        const result = bcrypt.compare(password, hashedPassword);
        
        if (result) {
            console.log(data);
            res.json(`Successfully Logged in!`)
        } else {
            console.log(`There was a problem in logging in, try again! (Maybe wrong password)`);
        }
    } catch(err) {
        console.log(`Something wrong with logging in`);
    }
    
})


module.exports = router;