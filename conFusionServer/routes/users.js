const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const UsersController = require('../controllers/users');

const router = express.Router();
router.use(bodyParser.json());

/* GET users listing. */
router.get('/', UsersController.usersGetAll);

// Users registration route

router.post('/signup', UsersController.usersPostSignUp);

// User login route

router.post('/login', passport.authenticate('local'), UsersController.usersPostLogIn);

// User logout route

router.get('/logout', UsersController.usersGetLogOut);

module.exports = router;
