const User = require('../../models/user');

exports.searchUser = (req, res) => {
  User.find({}, (err, user) => {
    if(err) return res.status(500).json({ result: false, message: err});
    res.json({result: true, data: user})
  });
}
