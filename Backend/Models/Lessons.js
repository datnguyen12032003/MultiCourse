const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  rating: {
    type: Number,
    required: true,
    max: 5,
    min: 1,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const LessonSchema = new Schema({
  course_id: {
    type: Schema.Types.ObjectId,
    ref: "Courses",
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  video_url: {
    type: String,
    required: true,
  },
  document_url: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  comments: [CommentsSchema],
});

module.exports = mongoose.model("Lessons", LessonSchema);
