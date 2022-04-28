const Author = require('../models/author');
var async = require('async');
const passportJWT = require('passport-jwt');
const JWTSTrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const passport = require('passport');
const { body, validationResult } = require('express-validator');
const session = require("express-session");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.sign_up_post = function (req, res) {
  const user = new Author({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    isAdmin: req.body.isAdmin
  })
  bcrypt.hash(user.password, 10, (err, hashedPassword) => {
    if (err) {
      return next(err)
    }
    else {
      user.password = hashedPassword;
      user.save(err => {
        if (err) {
          res.send("Error");
          return next(err)
        }
        res.send("Success");
      });
    }
  })
}

exports.sign_in_post = function (req, res) {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(401).json({
        message: 'There is no user in this database. Please create an account.',
        user: user
      })
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        return res.send(err);
      }
      //generate signed json web token
      const token = jwt.sign(user.toJSON(), 'your_jwt_secret');
      return res.json({
        auth: true,
        isAdmin: false,
        token: token,
        username: user,
      });
    })
  })(req, res);
}

exports.logout_post = function (req, res) {
  res.render('logout');
  req.logout();
  return ('logged out')
}
