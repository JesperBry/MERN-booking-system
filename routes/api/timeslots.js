const express = require("express");
const Appointment = require("../../models/Appointment");
const TimeSlot = require("../../models/TimeSlot");

const router = express.Router();

router.get("/", (req, res) => {
  TimeSlot.find({}).then(slots => res.json(slots));
});

module.exports = router;
