const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  saveDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', UserSchema);

// const me = new User({
//   name: "Mike",
//   age: 27,
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((err) => {
//     console.log("Error : " + err);
//   });