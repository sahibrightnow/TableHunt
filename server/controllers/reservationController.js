const Reservations = require('../models/reservations');
const Restaurants = require('../models/restaurants')

const createReservation = async (req, res) => {
    try {
        const restaurant = await Restaurants.findOne({ place_id: req.body.placeId }).exec()
        delete req.body.placeId

        const reservation = new Reservations({ ...req.body, restaurantId: restaurant._id });
        reservation.save().then((result) => {
            res.status(201).json({
                status: 'SUCCESS',
                message: 'Reservation Created!',
            });
        }).catch((error) => res.status(500).json({ error: error }));
    } catch (error) {
        return res.status(500).json({
            status: 'ERROR',
            message: 'Missing parameters in post request body'
        });
    }
};

const getUserReservations = async (req, res) => {
    if (!req.query.userId) {
        return res.status(422).json({
            status: 'ERROR',
            message: 'Missing URL parameter: userId',
        });
    }
    else {
        try {
            Reservations.find({ userId: req.query.userId }).populate({ path: "userId" }).populate({ path: "restaurantId" }).then((result) => {
                res.status(200).json({
                    status: 'SUCCESS',
                    message: 'Sending User Reservations!',
                    data: result
                });
            }).catch((error) => res.status(500).json({
                status: 'ERROR',
                message: 'Invalid User ID',
            }));
        } catch (error) {
            return res.status(500).json({
                status: 'ERROR',
                message: error.message,
            });
        }
    }
};

module.exports = {
    createReservation,
    getUserReservations
};
