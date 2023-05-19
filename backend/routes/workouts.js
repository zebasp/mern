const express = require('express')
const { createWorkout, getWorkouts, getWorkout } = require('../controllers/workoutController')

const router = express.Router()

//get ALL
router.get('/', getWorkouts)

//get single
router.get('/:id',  getWorkout)

//POST a new one
router.post('/', createWorkout)

//DELETE 
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})

//UPDATE
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})

module.exports = router