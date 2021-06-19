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
});

router.put('/api/workouts/:id', async (req, res) => {
  try {
    const exercise = await Workout.findByIdAndUpdate(req.params.id, {
      $push: {
        exercises: req.body
      }
    })
    res.json(exercise)
  }
  catch (error) {
    res.status(400).json(error);
}
});

router.get('/api/workouts/range', async (req,res) => {
  try {
    const workouts = await Workout.find({}).sort({day:-1}).limit(7);
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json(error);
  }
})

module.exports = router
