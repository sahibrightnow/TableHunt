const router = require('express').Router({ mergeParams: true });

const { getAllReservations, getAllPhotos, postPhoto } = require('../controllers/restaurantOwnersController');

// delete in final production
router.get('/', (req, res, next) => {
    res.send('RestaurantOwners Endpoint');
});

router.route('/reservations').get(getAllReservations);
router.route('/photos').get(getAllPhotos).post(postPhoto);

module.exports = router;
