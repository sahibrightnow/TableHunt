const router = require('express').Router({ mergeParams: true });

const {
    createRestaurant,
    getRestaurantsWithOrders
} = require('../controllers/restaurantsController');

// delete in final production
router.get('/', (req, res, next) => {
    res.send('Restaurants Endpoint');
});

router.route('/').post(createRestaurant);
router.route('/list').get(getRestaurantsWithOrders)

module.exports = router;
