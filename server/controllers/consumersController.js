const Consumer = require('../models/consumers');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const registerUser = async (req, res) => {
    try {
        let user = await Consumer.findOne({ email: req.body.email }).lean();
        if (!user) {
            const newUser = new Consumer({ ...req.body });
            user = await newUser.save();
        }
        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.JWT_SECRET,
            {
                expiresIn: 157788000,
            }
        );
        return res.status(201).json({
            status: "SUCCESS",
            message: "User successfully registered!",
            userToken: token,
            userId: user._id
        });
    } catch (error) {
        console.log("ERROR", error)
        return res.status(500).json({
            status: "ERROR",
            message: 'Missing post request parameters (username, email)',
        });
    }
};

const userRegistrations = async (req, res) => {
    Consumer.find({})
        .exec()
        .then((results) => {
            results.length
                ? res.status(200).json({
                    status: 'Success',
                    message: 'Sending all user Registrations!',
                    data: results,
                })
                : res.status(200).json({
                    status: 'Success',
                    message: 'Uh Oh, no user Registrations found!',
                });
        })
        .catch((error) => res.status(500).send(error));
};

module.exports = {
    registerUser,
    userRegistrations,
};
