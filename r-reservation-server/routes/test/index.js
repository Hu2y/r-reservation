const router = require('express').Router();

const controller = require('./test.controller');

router.get('/', controller.test);

module.exports = router;
