const ReservationsModel = require('../models/reservations');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// const getUserLogin = async (req, res) => {
//     const { email, password } = req.body;
//     console.log('Incoming Login request for user', req.body);

//     const user = await Consumer.findOne({ email }).lean();

//     if (!user) {
//         return res.json({
//             status: 'ERROR',
//             message: 'Invalid Email!',
//         });
//     } else if (await bcrypt.compare(password, user.password)) {
//         const token = jwt.sign(
//             { id: user._id, username: user.username },
//             process.env.JWT_SECRET, {
//             expiresIn: 157788000,
//         }
//         );

//         return res.json({
//             status: 'SUCCESS',
//             message: 'User Sign-In Successful!',
//             userToken: token,
//         });
//     } else {
//         return res.json({
//             status: 'ERROR',
//             message: 'Invalid Password!',
//         });
//     }
// };

// const createUser = async (req, res) => {
//     const newUserEmail = await Consumer.isEmailInUse(req.body.email);
//     const password = await bcrypt.hash(req.body.password, 10);

//     if (newUserEmail) {
//         const newUser = new Consumer({
//             username: req.body.username,
//             email: req.body.email,
//             password: password,
//         });

//         newUser
//             .save()
//             .then((result) => {
//                 console.log('USER CREATED WITH FOLLOWING DETAILS:', result);

//                 res.status(201).json({
//                     status: 'SUCCESS',
//                     message: 'USER CREATED SUCCESSFULLY!',
//                 });
//             })
//             .catch((error) => res.status(500).json({ error: error }));
//     } else {
//         return res.json({
//             status: 'ERROR',
//             message:
//                 'This email is already in use. Please use a different email address!',
//         });
//     }
// };

const createReservation = async (req, res) => {
    try {
        const reservation = new ReservationsModel({ ...req.body });
        reservation.save().then((result) => {
            console.log('Reservation CREATED WITH FOLLOWING DETAILS:', result);

            res.status(201).json({
                status: 201,
                message: 'Reservation CREATED SUCCESSFULLY!',
            });
        }).catch((error) => res.status(500).json({ error: error }));
    } catch (error) {
        return res.json({
            status: 'ERROR',
            message: error.message,
        });
    }
};

const getAllReservations = async (req, res) => {
    try {
        ReservationsModel.find({}).then((result) => {
            res.status(200).json({
                status: 200,
                message: 'Sending Reservations for all users for the moment!',
                data: result
            });
        }).catch((error) => res.status(500).json({ error: error }));
    } catch (error) {
        return res.json({
            status: 'ERROR',
            message: error.message,
        });
    }
};

module.exports = {
    createReservation,
    getAllReservations
};
