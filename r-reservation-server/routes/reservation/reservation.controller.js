const Reservation = require('../../models/reservation');

exports.reservation = (req, res) => {
  Reservation.find(function (err, obj) {
    console.log(obj)
    if(err) return res.status(500).json({ result: false, message: err});
    res.json({result: true, data: obj})
  });
}