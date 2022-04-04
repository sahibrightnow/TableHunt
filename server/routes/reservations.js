const router = require('express').Router({ mergeParams: true });
const validateJWT = require('../middlewares/validateJWT')
const {
    createReservation,
    getUserReservations
} = require('../controllers/reservationController');

router.post('/', createReservation);
router.get('/list', validateJWT, getUserReservations);

module.exports = router;
