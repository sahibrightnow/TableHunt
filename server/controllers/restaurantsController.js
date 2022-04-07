const Restaurants = require('../models/restaurants');

const createRestaurant = async (req, res) => {
    const place_id = req.body.place_id
    const found = await Restaurants.findOne({ place_id })

    if (!found) {
        try {
            const restaurant = new Restaurants({ ...req.body });
            restaurant.save().then((result) => {
                res.status(201).json({
                    status: 201,
                    message: 'Restaurant CREATED SUCCESSFULLY!',
                });
            }).catch((error) => res.status(500).json({
                status: 'ERROR',
                message: 'Missing parameters in post request body'
            }));
        } catch (error) {
            return res.status(500).json({
                status: 'ERROR',
                message: error.message,
            });
        }
    }
    else {
        res.status(200).json({
            status: 200,
            message: 'Restaurant already have been created!',
        });
    }
}

const getRestaurantsWithOrders = async (req, res) => {
    try {
        Restaurants.find({}).then((result) => {
            res.status(200).json({
                status: 200,
                message: 'Sending Restaurants, selected for bookings!',
                data: result
            });
        }).catch((error) => res.status(500).json({ error: error }));
    } catch (error) {
        return res.json({
            status: 500,
            message: error.message,
        });
    }
};

module.exports = { createRestaurant, getRestaurantsWithOrders };
