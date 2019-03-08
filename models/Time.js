const mongoose = require("mongoose");

const Schema = mongoose.Schema,

const timeSchema = new Schema({
  time: String,
  date: String,
  created_at: Date
});

module.exports = TimeSlot = mongoose.model("timeSlot", timeSchema);
