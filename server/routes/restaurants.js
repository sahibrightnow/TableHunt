const router = require('express').Router({ mergeParams: true });
const validateJWT = require('../middlewares/validateJWT')

const {
    createRestaurant,
    getRestaurantsWithOrders
} = require('../controllers/restaurantsController');

router.post('/', validateJWT, createRestaurant);
router.get('/list', validateJWT, getRestaurantsWithOrders)

module.exports = router;
