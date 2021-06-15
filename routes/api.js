const router = require('express').Router();
const Workout = require('../models/workouts')

router.get('/api/workouts', async (req,res) => {
    try {
        const workouts = await Workout.find({});
        res.status(200).json(workouts);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.post('/api/workouts', ( { workoutData }, res) => {
    Workout.create(workoutData)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });

    // try {
    //     const newWorkout = await Workout. {

    //     };
    //     res.status(200).json(newWorkout);
    // } catch (error) {
    //     res.status(400).json(error);
    // }
     
});

module.exports = router
