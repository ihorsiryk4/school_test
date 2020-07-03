const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Lessons = require('../models/lessons');

const lessonRouter = express.Router();

lessonRouter.use(bodyParser.json());

lessonRouter.route('/')
.get((req,res,next) => {
    Lessons.find({})
    .then((lessons) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(lessons);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Lessons.create(req.body)
    .then((lesson) => {
        console.log('Lesson Created ', lesson);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(lesson);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /lessons');
})
.delete((req, res, next) => {
    Lessons.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

lessonRouter.route('/:lessonId')
.get((req,res,next) => {
    Lessons.findById(req.params.lessonId)
    .then((lesson) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(lesson);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /lessons/'+ req.params.lessonId);
})
.put((req, res, next) => {
    Lessons.findByIdAndUpdate(req.params.lessonId, {
        $set: req.body
    }, { new: true })
    .then((lesson) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(lesson);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    lesson.findByIdAndRemove(req.params.lessonId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});


module.exports = lessonRouter;