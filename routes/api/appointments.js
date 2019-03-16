const express = require("express");
const Appointment = require("../../models/Appointment");
const TimeSlot = require("../../models/TimeSlot");

const router = express.Router();

router.get("/", (req, res) => {
  Appointment.find({}).then(appointments => res.json(appointments));
});

router.post("/add", (req, res) => {
  const newTimeSlot = new TimeSlot({
    time: req.body.time,
    date: req.body.date,
    created_at: Date.now()
  });
  newTimeSlot.save();

  const newAppointment = new Appointment({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    slot: newTimeSlot._id
  });

  newAppointment.save((err, saved) => {
    Appointment.find({ _id: saved._id })
      .populate("slot")
      .then(appointment => res.json(appointment));
  });
});

module.exports = router;
