const express = require("express");
const { check, validationResult } = require("express-validator");

const Appointment = require("../../models/Appointment");
const TimeSlot = require("../../models/TimeSlot");

const router = express.Router();

router.get("/", (req, res) => {
  Appointment.find({}).then(appointments => res.json(appointments));
});

router.post(
  "/add",
  [check("email").isEmail(), check("phone").isMobilePhone()],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const newTimeSlot = new TimeSlot({
      time: req.body.slot.time,
      date: req.body.slot.date,
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
  }
);

module.exports = router;

/*
 * POST request structure:
 * {	
    "name": "FirstName LastName",
    "email": "example@example.com",
    "phone": "12345678",
    "slot": {
      "time": "slot number",
      "date": "YYYY-DD-MM"
    }
  }
 */
