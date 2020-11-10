const router = require('express').Router();
const reservation = require('./reservation');

router.use('/reservation', reservation);

module.exports = router;