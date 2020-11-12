const router = require('express').Router();
const controller = require('./schedule.controller');

router.get('/', controller.searchSchedule);

module.exports = router;
