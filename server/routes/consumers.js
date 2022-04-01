const router = require('express').Router({ mergeParams: true });

const {
    createUser,
    getUserLogin,
    changeUserPassword,
    logoutUser,
    getAllReservations,
    createReservation
} = require('../controllers/consumersController');

// delete in final production
router.get('/', (req, res, next) => {
    res.send('Consumers Endpoint');
});

router.route('/').post(createUser);

router.route('/login').post(getUserLogin);

router.route('/reservations').get(getAllReservations).post(createReservation);

router.route('/changePassword').post(changeUserPassword);

router.route('/logout').post(logoutUser);

module.exports = router;
