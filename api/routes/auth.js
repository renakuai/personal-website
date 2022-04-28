const express = require('express');
const router = express.Router();
const auth_controller = require('../controllers/authController');


/* GET auth index. */
router.get('/', function(req, res, next) {
  res.send('auth');
});

/* POST sign up */
router.post('/sign-up', auth_controller.sign_up_post);

/* REMOVE LATER: GET sign up form */
router.get('/sign-in', function (req, res, next) {
  res.render('signin');
});

/* POST login */
router.post('/sign-in', auth_controller.sign_in_post);

/* POST logout */
router.post('/logout', auth_controller.logout_post);

module.exports = router;
