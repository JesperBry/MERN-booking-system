const express = require("express");
const sanitize = require("mongo-sanitize");

const Appointment = require("../../models/Appointment");
const TimeSlot = require("../../models/TimeSlot");

const router = express.Router();

router.get("/:date?", (req, res) => {
  let date = sanitize(req.params.date);
  if (date) {
    TimeSlot.find({ date: date }).then(slots => res.json(slots));
  }
  TimeSlot.find({}).then(slots => res.json(slots));
});

module.exports = router;
