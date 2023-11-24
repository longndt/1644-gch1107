var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();

//import & config mongoose (db access & manage)
var mongoose = require('mongoose');
var uri = "mongodb://localhost:27017/gch1107";
mongoose.connect(uri)
.then(() => console.log("success"))
.catch((err) => console.log(err))

//import body-parser library (get input from client-side)
var bodyParser = require('body-parser');
//config body-parser library
app.use(bodyParser.urlencoded({ extended: false }))

//register handlebars-helper-equal (to compare 2 values)
var hbs = require('hbs');
hbs.registerHelper('equal', require('handlebars-helper-equal'));
//register 3 functions (eq, gt, lt)
hbs.registerHelper('eq', function (a, b) {
  return a === b;
});
hbs.registerHelper('gt', function (a, b) {
  return a > b;
});
hbs.registerHelper('lt', function (a, b) {
  return a < b;
});

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

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
