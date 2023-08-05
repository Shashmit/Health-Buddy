const express = require("express");
const router = express.Router();
const {
  createWorkout,
  getAllWorkout,
  getSpecificWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../cotroller/workoutController");

router.get("/", getAllWorkout);
// Get a single workout
router.get("/:id", getSpecificWorkout);
//Post a new workout
router.post("/", createWorkout);
//Delete a workout
router.delete("/:id", deleteWorkout);
router.patch("/:id", updateWorkout);

module.exports = router;
