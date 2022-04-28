var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var mongoose = require("mongoose");
const dotenv = require('dotenv');
var compression = require('compression');
const passport = require("passport");
const session = require("express-session");
require('./passport');

dotenv.config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var writingRouter = require('./routes/writing');
var authRouter = require('./routes/auth');
var protectedRouter = require('./routes/protected');

var app = express();

//compress routes
app.use(compression());


// mongodb setup
var dev_db_url = 'mongodb+srv://' + process.env.MONGO_KEY + '@cluster0.ppmsq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//no favicon
app.get('/favicon.ico', (req, res) => res.status(204).end());

// app.use code
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//passport stuff?
app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

// router setup
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/writing', writingRouter);
app.use('/auth', authRouter)
app.use('/protected', protectedRouter)


module.exports = app;
