var express = require('express');
var router = express.Router();
const post_controller = require('../controllers/postController');

/* GET writing index (all writings) */
router.get('/', post_controller.post_list);

// GET single post
router.get('/post/:id', post_controller.post_detail);

module.exports = router;