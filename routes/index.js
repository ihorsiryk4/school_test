const express = require('express');

const indexController = require('../controllers/index');

const router = express.Router();

/* GET home page. */
// eslint-disable-next-line no-unused-vars
router.get('/', indexController.indexGetHome);

module.exports = router;
