const router = require('express').Router();
const reservation = require('./reservation');
const test = require('./test')

router.use("/reservation", reservation);
router.use('/test', test);

module.exports = router;