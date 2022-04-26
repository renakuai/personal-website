const Post = require('../models/post');
const Author = require('../models/author');
const Comment = require('../models/comment');
var async = require('async');
const mongoose = require('mongoose');

exports.post_list = function(req, res) {
  Post.find({ status : 'Published'}, 'title date author')
    .sort({ date: 'asc' })
    .populate('author', 'name')
    .exec(function (err, list_post) {
      if (err) {
        return next(err)
      }
      res.send(list_post);
      //res.render('index', {
      // title: 'List of Posts',
      //  posts: list_post
      // });
    })
}

exports.post_detail = function (req, res) {
  async.parallel({
    post: function(callback) {
      Post.findById(req.params.id)
        .populate('author', 'name')
        .exec(callback)
    },
    comments: function (callback) {
      Comment.find({ 'post': mongoose.Types.ObjectId(req.params.id) })
        .populate('author', 'name')
        .exec(callback)
    },
    commentCount: function (callback) {
      Comment.find({ 'post': mongoose.Types.ObjectId(req.params.id) })
        .countDocuments()
        .exec(callback)
    }
  }, function(err, postdetails) {
      if (err) {
        return next(err);
      }
      if (postdetails.post == null) {
        const err = new Error('No post found');
        err.status = 404;
        return next(err);
      }
      console.log('post detail:'+postdetails.post);
    console.log('post comments:' + postdetails.comments);
      // res.render('post', {
      // title: 'Post Details',
      //  postdetail: postdetails.post,
      //  comments: postdetails.comments
      // });
    res.send({
      postdetail: postdetails.post,
      comments: postdetails.comments,
      commentCount: postdetails.commentCount
    })
  })
}