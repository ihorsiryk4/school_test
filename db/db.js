/* eslint-disable no-console */
const mongoose = require('mongoose');
const { mongoURI } = require('../config');

const url = mongoURI;
const connect = mongoose.connect(url,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  });

const db = connect
  .then(() => {
    console.log('DB connected correctly to server');
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = db;
