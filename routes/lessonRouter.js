const express = require('express');

const LessonController = require('../controllers/lessonRouter');

const lessonRouter = express.Router();

lessonRouter.get('/', LessonController.getAll);

lessonRouter.post('/', LessonController.create);

lessonRouter.delete('/', LessonController.deleteMany);

lessonRouter.get('/:lessonId', LessonController.getById);

lessonRouter.put('/:lessonId', LessonController.updateById);

lessonRouter.delete('/:lessonId', LessonController.deleteById);

module.exports = lessonRouter;
