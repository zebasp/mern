const express = require('express')

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
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new workout'})
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