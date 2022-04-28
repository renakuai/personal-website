const express = require('express');
const router = express.Router();
const protected_controller = require('../controllers/protectedController');

// POST post form
//router.post('/post/create', protected_controller.post_post);

// POST comment form
router.post('/comment/create', protected_controller.comment_post);

module.exports = router;
