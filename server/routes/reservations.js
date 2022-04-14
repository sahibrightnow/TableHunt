const router = require('express').Router({ mergeParams: true });
const validateJWT = require('../middlewares/validateJWT')
const {
    createReservation,
    getUserReservations,
    removeUserReservation
} = require('../controllers/reservationController');

router.post('/', validateJWT, createReservation);
router.get('/list', validateJWT, getUserReservations);
router.patch('/remove-reservation', removeUserReservation);

module.exports = router;
