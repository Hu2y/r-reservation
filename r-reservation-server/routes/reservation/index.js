const router = require('express').Router();
const controller = require('./reservation.controller');

router.get('/', controller.reservation);

module.exports = router;
