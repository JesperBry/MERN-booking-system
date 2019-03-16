const mongoose = require("mongoose");

const slot = require("./TimeSlot");

const Schema = mongoose.Schema,
  ObjectId = mongoose.Schema.Types.ObjectId;

const appointmentSchema = new Schema({
  id: ObjectId,
  name: String,
  email: String,
  phone: Number,
  slot: { type: ObjectId, ref: slot },
  created_at: Date
});

module.exports = Appointment = mongoose.model("appointment", appointmentSchema);
