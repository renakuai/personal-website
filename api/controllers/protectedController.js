const Post = require('../models/post');
const Author = require('../models/author');
const Comment = require('../models/comment');
var async = require('async');
const mongoose = require('mongoose');
const { body,validationResult } = require('express-validator');

//exports.post_post = function(req, res) {

//}

exports.comment_post = [
  body('content').escape(),

  (req, res, next) => {
    const errors = validationResult(req);
    const comment = new Comment({
      author: req.body.author,
      post: req.body.post,
      content: req.body.content,
      date: req.body.date,
    });
    if (!errors.isEmpty()) {
      async.parallel({
        author: function (callback) {
          Author.find(callback)
        },
        post: function (callback) {
          Post.find(callback)
        }
      })
    }
    else {
      comment.save(function (err) {
        if (err) { return next(err); }
      });
    }
  }
]
