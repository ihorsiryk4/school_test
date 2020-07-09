const express = require('express');
const bodyParser = require('body-parser');

const LessonsController = require('../controllers/lessonRouter');

const lessonRouter = express.Router();

lessonRouter.use(bodyParser.json());

// Imported '/lessons' controllers

lessonRouter.get('/', LessonsController.lessonsGetAll);

lessonRouter.post('/', LessonsController.lessonsPostAll);

lessonRouter.put('/', LessonsController.lessonsPutAll);

lessonRouter.delete('/', LessonsController.lessonsDeleteAll);

// Imoprted '/lessons/lessonId controllers

lessonRouter.get('/:lessonId', LessonsController.lessonGetById);

lessonRouter.post('/:lessonId', LessonsController.lessonPostById);

lessonRouter.put('/:lessonId', LessonsController.lessonPutById);

lessonRouter.delete('/:lessonId', LessonsController.lessonDeleteById);

module.exports = lessonRouter;
