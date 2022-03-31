const RestaurantOwners = require('../models/restaurantOwnersModel');

const getAllReservations = (req, res) => {
    const query = RestaurantOwners.find({});

    query
        .exec()
        .then((results) => {
            {
                results && results.length
                    ? res.status(200).json({
                        status: 'SUCCESS',
                        message: 'Sending all upcoming reservations!',
                        data: results,
                    })
                    : res.status(500).json({
                        status: 'ERROR',
                        message: 'No upcoming reservations found!',
                    });
            }
        })
        .catch((error) => res.status(500).json({ error: error }));
};

const getAllPhotos = (req, res) => {
    res.status(500).json({
        status: 'ERROR',
        message: 'No Photos found! TESTING ENDPOINT',
    });
}

const postPhoto = (req, res) => {
    res.status(500).json({
        status: 'ERROR',
        message: 'TESTING ENDPOINT, no photos uploaded',
    });
}

module.exports = { getAllReservations, getAllPhotos, postPhoto };
