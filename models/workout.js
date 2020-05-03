const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises:[
        {
            type: {
                type: String,
            },
            name: {
                type: String,
            },
            duration: {
                type: Number,
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance:{
                type: Number,
            }
        }
    ]
  });

  workoutSchema.methods.totalDuration = function(){
      let totalDuration = 0;
      this.exercises.forEach(element => {
          totalDuration += element.duration;
      });
      this.totalDuration = totalDuration;
  };
  
  const Workout = mongoose.model("Workout", workoutSchema);
  
  module.exports = Workout;