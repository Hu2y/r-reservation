const Test = require('../../models/test')


// const controller = {
//   findReservations : async() => {
//     const result = await Test.find().exec();
// 		console.log(result);
//     return result
// 	},
// }

// module.exports = controller;


// exports.test = async (req, res) => {
//   try {
//     const a = await Test.find();
//     return a
//     console.log('test')
//   } catch (e) {
//     console.log(e)
//   }
// }

exports.test = (req, res) => {
  Test.find({}, function (err, obj) {
    console.log(obj)
    if(err) return res.status(500).json({ result: false, message: err});
    res.json({result: true, data: obj})
  });
}