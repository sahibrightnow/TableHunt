const router = require('express').Router({ mergeParams: true });
const consumers = require('./consumers');
const restaurants = require('./restaurants');
const reservations = require('./reservations');

router.use('/consumers', consumers);
router.use('/restaurants', restaurants);
router.use('/reservations', reservations);


router.get('/', (req, res) => {
    res.send('TableHunt Server API V1!');
});

module.exports = router;
