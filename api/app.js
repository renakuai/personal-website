var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var mongoose = require("mongoose");
const dotenv = require('dotenv');
var compression = require('compression');

dotenv.config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var writingRouter = require('./routes/writing');

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
app.set('view engine', 'jade');

//no favicon
app.get('/favicon.ico', (req, res) => res.status(204).end());

// app.use code
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.resolve(__dirname, "./client/build")));


// router setup
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/writing', writingRouter);

module.exports = app;
