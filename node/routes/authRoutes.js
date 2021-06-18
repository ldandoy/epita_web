const userModel = require('../models/userSchema')
const bcrypt = require('bcrypt');

const express = require('express')
const Router = express.Router()

Router.post("/login", (req, res, next) => {
    try {
        const {email, password} = req.body

        if (email === undefined || password === undefined) {
            return res.status(500).json({msg: 'Please send all the information'})
        }

        userModel.findOne({ email })
        .then(user => {
            if (!user) return res.status(500).json({msg: "Account doesn't exists !"})

            bcrypt.compare(password, user.password, function(error, result) {
                if (error) return res.status(500).json({msg: error})

                if (!result) return res.status(500).json({msg: "Email or password is wrong !"})

                return res.status(200).json({...user._doc, password: ''})
            });
        })
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
})

Router.post('/register', (req, res, next) => {
    try {
        const {email, password} = req.body

        if (email === undefined || password === undefined) {
            return res.status(500).json({msg: 'Please send all the information'})
        }

        userModel.find({email})
        .then(user => {
            if (user.length > 0) return res.status(500).json({msg: 'Account already exists !'})

            bcrypt.hash(password, 12, function(error, hash) {
                if (error) return res.status(500).json({msg: error})

                user = new userModel({
                    email,
                    password: hash
                })
                user.save()
    
                return res.status(200).json({...user._doc, password: ''})
            });
        })
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
})


module.exports = Router