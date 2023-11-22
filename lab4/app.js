var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mobileRouter = require('./routes/mobile');

var app = express();

// 1. import mongoose module (db access & management)
var mongoose = require('mongoose');

// 2. set database uri (db connection string)
var URI_local = "mongodb://localhost:27017/";
var URI_cloud = "mongodb+srv://longndt:7mVa9LRF8AGEPWfc@cloud.gyaoxey.mongodb.net/gch1107";
//Note: must set a specific db name at the end URI (ex: gch1107)

// 3. connect db
mongoose.connect(URI_cloud)
  .then(() => console.log('Connect to DB succeed !'))
  .catch((err) => console.log('Connect to DB failed' + "Error: " + err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/mobile', mobileRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
