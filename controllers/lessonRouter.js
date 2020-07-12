/* eslint-disable no-console */
const Lesson = require('../models/lessons');

const LessonController = {
  getAll(req, res, next) {
    Lesson
      .getAll()
      .then(
        (lessons) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(lessons);
        },
        (err) => next(err),
      )
      .catch((err) => next(err));
  },
  create(req, res, next) {
    Lesson
      .create(req.body)
      .then(
        (lesson) => {
        // eslint-disable-next-line no-console
          console.log('Lesson Created ', lesson);
          res.status(200).json(lesson);
        },
        (err) => next(err),
      )
      .catch((err) => next(err));
  },
  getById(req, res, next) {
    Lesson
      .getById(req.params.lessonId)
      .then(
        (lesson) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(lesson);
        },
        (err) => next(err),
      )
      .catch((err) => next(err));
  },
  updateById(req, res, next) {
    Lesson
      .update(req.params.lessonId,
        {
          $set: req.body,
        },
        { new: true })
      .then(
        (lesson) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(lesson);
        },
        (err) => next(err),
      )
      .catch((err) => next(err));
  },
  deleteById(req, res, next) {
    Lesson
      .deleteById(req.params.lessonId)
      .then(
        (resp) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(resp);
        },
        (err) => next(err),
      )
      .catch((err) => next(err));
  },

  deleteMany(req, res, next) {
    Lesson
      .deleteMany({})
      .then(
        (result) => {
          res.status(200).json(result);
        },
        (err) => next(err),
      )
      .catch((err) => next(err));
  },
};
module.exports = LessonController;
