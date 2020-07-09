/* eslint-disable no-console */
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

const db = connect.then(() => {
  console.log('Connected correctly to server');
}, (err) => { console.log(err); });

module.exports = db;
