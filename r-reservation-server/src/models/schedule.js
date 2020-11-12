const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
  layer: Number,
  scheduleData: [{
    Subject: {type: String},
    StartTime: {type: Date},
    EndTime: {type: Date},
    ConferenceId: [{type: Number}]
  }]
});

module.exports = mongoose.model('Schedule', ScheduleSchema);