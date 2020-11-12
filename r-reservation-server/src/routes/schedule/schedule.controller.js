const Sechedule = require('../../models/schedule');

// const controller = {
//   findReservations : async() => {
//     const result = await Reservation.find();
// 		console.log(result);
//     return result
// 	},
// }

// module.exports = controller;



exports.searchSchedule = (req, res) => {
  Sechedule.find({}, (err, scheduleInfo) => {
    if(err) return res.status(500).json({ result: false, message: err});
    res.json({result: true, info: scheduleInfo})
  });
}
