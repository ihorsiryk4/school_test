const express = require('express');
const passport = require('passport');

const UsersController = require('../controllers/users');

const router = express.Router();

/* GET users listing. */
router.get('/', UsersController.getAll);

// Users registration route

router.post('/signup', UsersController.signUp);

// User login route

router.post('/login', passport.authenticate('local'), UsersController.logIn);

// User logout route

router.get('/logout', UsersController.logOut);

module.exports = router;
