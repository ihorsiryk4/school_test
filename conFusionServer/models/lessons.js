const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lecturerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    degree: {
        type: String,
        required: true,
    }
})

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
    }
})

const groupSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    student: [studentSchema],
})

const lessonSchema = new Schema({
    subject: {
        type: String,
        required: true,
    },
    topic: {
        type: String,
        required: true
    },
    lecturer: [lecturerSchema],
    studyGroup: [groupSchema],
    classroom: {
        type: Number,
        required: true
    },
    time: {
        type: String,
        required: true
    }

}),  
    

Lessons = mongoose.model('Lesson', lessonSchema);

module.exports = Lessons;