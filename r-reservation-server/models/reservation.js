const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  Id: Number,
  Subject: String,
  Location: String,
  StartTime: String,
  EndTime: String,
  CategoryColor: String
});

const reservationSchema = new mongoose.Schema({
  _id: { $oid: String },
  layer: Number,
  scheduleData: [roomSchema]
});

module.exports = mongoose.model('reservation', reservationSchema);