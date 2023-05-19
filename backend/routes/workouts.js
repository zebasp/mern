const express = require('express')
const Workout = require('../models/workoutModel')

const router = express.Router()

//get ALL
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})

//get single
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workout'})
})

//POST a new one
router.post('/', async (req, res) => {
    const { title, reps, load} = req.body
    try {
        const workout = await Workout.create({title, reps, load})   
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

//DELETE 
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})

//UPDATE
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})

module.exports = router