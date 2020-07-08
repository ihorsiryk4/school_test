const mongoose = require('mongoose');

const { Schema } = mongoose;

const lecturerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const groupSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  student: [studentSchema],
});

const lessonSchema = new Schema({
  subject: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  lecturer: [lecturerSchema],
  studyGroup: [groupSchema],
  classroom: {
    type: Number,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },

}, {
  timestamps: true,
});

const Lessons = mongoose.model('Lesson', lessonSchema);

module.exports = Lessons;
