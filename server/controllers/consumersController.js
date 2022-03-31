const Consumer = require('../models/consumersModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const getUserLogin = async (req, res) => {
    const { email, password } = req.body;
    console.log('Incoming Login request for user', req.body);

    const user = await Consumer.findOne({ email }).lean();

    if (!user) {
        return res.json({
            status: 'ERROR',
            message: 'Invalid Email!',
        });
    } else if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.JWT_SECRET, {
            expiresIn: 157788000,
        }
        );

        return res.json({
            status: 'SUCCESS',
            message: 'User Sign-In Successful!',
            userToken: token,
        });
    } else {
        return res.json({
            status: 'ERROR',
            message: 'Invalid Password!',
        });
    }
};

const createUser = async (req, res) => {
    const newUserEmail = await Consumer.isEmailInUse(req.body.email);
    const password = await bcrypt.hash(req.body.password, 10);

    if (newUserEmail) {
        const newUser = new Consumer({
            username: req.body.username,
            email: req.body.email,
            password: password,
        });

        newUser
            .save()
            .then((result) => {
                console.log('USER CREATED WITH FOLLOWING DETAILS:', result);

                res.status(201).json({
                    status: 'SUCCESS',
                    message: 'USER CREATED SUCCESSFULLY!',
                });
            })
            .catch((error) => res.status(500).json({ error: error }));
    } else {
        return res.json({
            status: 'ERROR',
            message:
                'This email is already in use. Please use a different email address!',
        });
    }
};

const changeUserPassword = async (req, res) => {
    const { token, newPassword } = req.body;

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        console.log('user change password:', user);

        const _id = user.id;

        const encryptedPassword = await bcrypt.hash(newPassword, 10);

        await Consumer.updateOne(
            { _id },
            { $set: { password: encryptedPassword } }
        );

        res.status(200).json({
            status: 'SUCCESS',
            message: 'Password Changed SUCCESSFULLY!',
        });
    } catch (error) {
        res.json({
            status: 'ERROR',
            message: 'Unexpected Error Occured!',
        });
    }
};

const logoutUser = (req, res) => {
    res.status(200).json({
        status: 'SUCCESS',
        message: 'Logout SUCCESSFUL!',
    });
};

const getAllReservations = async (req, res) => {
    Consumer.find({})
        .exec()
        .then((results) => {
            results.length
                ? res.status(200).json({
                    status: 'Success',
                    message: 'Sending all user Reservations!',
                    data: results,
                })
                : res.status(200).json({
                    status: 'Success',
                    message: 'Uh Oh, no Reservations found!',
                });
        })
        .catch((error) => res.status(500).send(error));
};

const createReservation = async (req, res) => {
    const { email } = req.body;
    console.log('Incoming Login request for user', req.body);

    const user = await Consumer.findOne({ email }).lean();

    if (user) {
        await Consumer.updateOne(
            {
                reservations: req //enter all data with reservations data
            }
        )

        user
            .save()
            .then((result) => {
                console.log('Reservation CREATED WITH FOLLOWING DETAILS:', result);

                res.status(201).json({
                    status: 'SUCCESS',
                    message: 'Reservation CREATED SUCCESSFULLY!',
                });
            })
            .catch((error) => res.status(500).json({ error: error }));
    } else {
        return res.json({
            status: 'ERROR',
            message: error.message,
        });
    }

};

module.exports = {
    getUserLogin,
    createUser,
    changeUserPassword,
    logoutUser,
    getAllReservations,
    createReservation
};
