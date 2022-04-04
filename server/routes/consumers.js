const router = require('express').Router({ mergeParams: true });

const {
    registerUser,
    userRegistrations,
} = require('../controllers/consumersController');

router.route('/').post(registerUser);

// Internal API, not in use by Front-end
// router.route('/registrations').get(userRegistrations);  

module.exports = router;
