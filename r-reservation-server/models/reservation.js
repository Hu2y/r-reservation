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
  _id: { $oid: mongoose.Schema.Types.ObjectId },
  layer: Number,
  scheduleData: [roomSchema]
});

reservationSchema.set("collection", "reservation"); 

module.exports = mongoose.model("Reservation", reservationSchema);