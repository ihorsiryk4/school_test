const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const lessonSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    topic: {
        type: String,
        required: true
    },
    lector: {
        type: String,
        required: true
    },
    students: {
        type: Object,
        required: true
    },
    class: {
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