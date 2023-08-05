const express = require("express");
const router = express.Router();
const Workout = require("../models/workoutModels");

router.get("/", (req, res) => {
  res.json({ msg: "get all the workout" });
});
// Get a single workout
router.get("/:id", (req, res) => {
  res.json({
    msg: "get a single workout",
  });
});
//Post a new workout
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({
      title,
      load,
      reps,
    });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
//Delete a workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "Deleting a workout" });
});
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a workout" });
});
module.exports = router;
