const mongoose = require('mongoose')
const Workout = require('../models/workoutModel')

//get all
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

//get a single one
const getWorkout = async (req, res) => {
    const { id } = req.params
if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({error: 'Not a valid id'})
}

    const workout = await Workout.findById(id)
    if (!workout) {
        return res.status(404).json({error: 'No such workout'})
    }
    res.status(200).json(workout)
}

//create
const createWorkout = async (req, res) => {
    const { title, reps, load} = req.body

    //add it to db
    try {
        const workout = await Workout.create({title, reps, load})   
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete

//update

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout
}