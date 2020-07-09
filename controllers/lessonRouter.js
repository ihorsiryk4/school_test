const Lessons = require('../models/lessons');

// Routing at .../lessons

exports.lessonsGetAll = ((req, res, next) => {
  Lessons.find({})
    .then((lessons) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(lessons);
    }, (err) => next(err))
    .catch((err) => next(err));
});

exports.lessonsPostAll = ((req, res, next) => {
  Lessons.create(req.body)
    .then((lesson) => {
      // eslint-disable-next-line no-console
      console.log('Lesson Created ', lesson);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(lesson);
    }, (err) => next(err))
    .catch((err) => next(err));
});

// eslint-disable-next-line no-unused-vars
exports.lessonsPutAll = ((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /lessons');
});

exports.lessonsDeleteAll = ((req, res, next) => {
  Lessons.remove({})
    .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

// Routing at .../lessons/lessonId

exports.lessonGetById = ((req, res, next) => {
  Lessons.findById(req.params.lessonId)
    .then((lesson) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(lesson);
    }, (err) => next(err))
    .catch((err) => next(err));
});

// eslint-disable-next-line no-unused-vars
exports.lessonPostById = ((req, res, next) => {
  res.statusCode = 403;
  res.end(`POST operation not supported on /lessons/${req.params.lessonId}`);
});

exports.lessonPutById = ((req, res, next) => {
  Lessons.findByIdAndUpdate(req.params.lessonId, {
    $set: req.body,
  }, { new: true })
    .then((lesson) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(lesson);
    }, (err) => next(err))
    .catch((err) => next(err));
});

exports.lessonDeleteById = ((req, res, next) => {
  // eslint-disable-next-line no-undef
  Lessons.findByIdAndRemove(req.params.lessonId)
    .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});
