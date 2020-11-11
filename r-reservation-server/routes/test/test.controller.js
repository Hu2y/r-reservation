const Test = require('../../models/test')

exports.test = (req, res) => {
  Test.find((err, obj) => {
    console.log(obj)
    if(err) return res.status(500).json({ result: false, message: err});
    res.json({result: true, data: obj})
  });
}

