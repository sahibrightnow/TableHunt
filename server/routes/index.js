const router = require('express').Router({ mergeParams: true });
const consumers = require('./consumers');
const restaurantOwners = require('./restaurantOwners')

// const apiEndpointValidator = require('../middlewares/apiEndpointValidator');
// this middlerware will check for dynamic entered endpoints

router.use('/consumers', consumers);
router.use('/restaurantOwners', restaurantOwners);

router.get('/', (req, res, next) => {
    res.send('TableHunt Server API V1!');
});

module.exports = router;
