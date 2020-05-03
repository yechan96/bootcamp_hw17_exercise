const router = require("express").Router();
const Exercises = require("../models/exercises.js");

router.post("/api/workouts", ({ body }, res) => {
  Exercises.create(body)
    .then(dbExercises => {
      res.json(dbExercises);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// router.put("/api/workouts/", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

router.get("/api/workouts", (req, res) => {
  Exercises.find({})
    .sort({ date: -1 })
    .then(dbExercises => {
      res.json(dbExercises);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Exercises.find({})
      .sort({ date: -1 })
      .then(dbExercises => {
        res.json(dbExercises);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

module.exports = router;