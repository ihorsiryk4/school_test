/* eslint-disable no-unused-vars */
const passport = require('passport');
const User = require('../models/user');

const UsersController = {

  getAll(req, res) {
    res.send('respond with a resource');
  },

  signUp(req, res) {
    User.register(new User({ username: req.body.username }),
      req.body.password, (err, user) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({ err });
        } else {
          passport.authenticate('local')(req, res, () => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({ success: true, status: 'Registration Successful!' });
          });
        }
      });
  },

  logIn(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({ success: true, status: 'You are successfully logged in!' });
  },

  logOut(req, res, next) {
    if (req.session) {
      req.session.destroy();
      res.clearCookie('session-id');
      res.redirect('/');
    } else {
      const err = new Error('You are not logged in!');
      this.model
        .err.status = 401;
      next(err);
    }
  },
};
module.exports = UsersController;
