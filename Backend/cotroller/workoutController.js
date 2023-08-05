const Workout = require("../models/workoutModels");
const mongoose = require("mongoose");
//get all the workout
const getAllWorkout = async (req, res) => {
  const workouts = await Workout.find({}).sort({ created: -1 });
  res.status(200).json(workouts);
};
//get specific workout
const getSpecificWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such ID exist" });
  }
  const specific = await Workout.findById(id);
  if (!specific) {
    return res.status(400).json({ error: "No Such Workout" });
  }
};
//create new workout
const createWorkout = async (req, res) => {
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
};
//delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such ID exist" });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });
  if (!workout) {
    res.status(400).json({ error: "Not available" });
  }
  res.status(200).json(workout);
};
//update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such ID exist" });
  }
  const workout = await Workout.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!workout) {
    res.status(400).json({ error: "Not available" });
  }
  res.status(200).json(workout);
};
//exporting all the functions from an object
module.exports = {
  createWorkout,
  getAllWorkout,
  getSpecificWorkout,
  deleteWorkout,
  updateWorkout,
};
