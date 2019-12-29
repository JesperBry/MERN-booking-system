const express = require("express");
const Appointment = require("../../models/Appointment");
const TimeSlot = require("../../models/TimeSlot");

const router = express.Router();

router.get("/:date?", (req, res) => {
  if (req.params.date) {
    TimeSlot.find({ date: req.params.date }).then(slots => res.json(slots));
  }
  TimeSlot.find({}).then(slots => res.json(slots));
});

module.exports = router;
