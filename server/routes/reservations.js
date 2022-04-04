const router = require('express').Router({ mergeParams: true });

const {
    createReservation,
    getAllReservations
} = require('../controllers/reservationController');

// delete in final production
router.get('/', (req, res, next) => {
    res.send('Reservations Endpoint');
});

router.route('/').post(createReservation);
router.route('/list').get(getAllReservations);

module.exports = router;
