const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
} = require("../controllers/workoutController");

const router = express.Router();

//get ALL
router.get("/", getWorkouts);

//get single
router.get("/:id", getWorkout);

//POST a new one
router.post("/", createWorkout);

//DELETE
router.delete("/:id", deleteWorkout);

//UPDATE
router.patch("/:id", updateWorkout);

module.exports = router;
