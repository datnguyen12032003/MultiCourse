const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProgressSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: "Courses",
    required: true,
  },
  lesson: {
    type: Schema.Types.ObjectId,
    ref: "Lessons",
    required: true,
  },
  status: {
    type: String,
    default: "Not Started",
    enum: ["In Progress", "Completed", "Not Started"],
  },
  note: {
    type: String,
    default: "",
  },
  progress_time: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Progress", ProgressSchema);
