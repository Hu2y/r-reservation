const router = require('express').Router();
const user = require('./user');
const schedule = require('./schedule');

router.use('/user', user);
router.use('/schedule', schedule);
// router.get('/', (req, res) => {
//   res.send('main');
// });

module.exports = router;