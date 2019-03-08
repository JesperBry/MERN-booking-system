const mongoose = require("mongoose");

const slot = require("./Time");

const Schema = mongoose.Schema,
  ObjectId = mongoose.Schema.Types.ObjectId;

const appointmentSchema = new Schema({
  id: ObjectId,
  name: String,
  email: String,
  phone: Number,
  TimeSlots: { type: ObjectId, ref: slot },
  created_at: Date
});

module.exports = Appointment = mongoose.model("appointment", appointmentSchema);
