const express = require("express");
const router = express.Router();

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
router.post("/", (req, res) => {
  res.json({ msg: "posting a new workout" });
});
//Delete a workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "Deleting a workout" });
});
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a workout" });
});
module.exports = router;
