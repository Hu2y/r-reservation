const Reservation = require('../../models/reservation');

// const controller = {
//   findReservations : async() => {
//     const result = await Reservation.find();
// 		console.log(result);
//     return result
// 	},
// }

// module.exports = controller;



exports.reservation = (req, res) => {
  Reservation.find({}, (err, room) => {
    if(err) return res.status(500).json({ result: false, message: err});
    res.json({result: true, data: room})
  });
}