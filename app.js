var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var countriesRouter = require('./routes/countries');
var citiesRouter = require('./routes/cities');
var zonesRouter = require('./routes/zones');
var rulesRouter = require('./routes/rules');
var categoriesRouter = require('./routes/categories');
var rulesvariantsRouter = require('./routes/rulesvariants');
var projectsRouter = require('./routes/projects');
var zonerulesRouter = require('./routes/zonerule');
var conditionsRouter = require('./routes/conditions');
var propertiesRouter = require('./routes/properties');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/countries', countriesRouter);
app.use('/cities', citiesRouter);
app.use('/zones', zonesRouter);
app.use('/rules', rulesRouter);
app.use('/categories', categoriesRouter);
app.use('/rulesvariants', rulesvariantsRouter);
app.use('/projects', projectsRouter);
app.use('/zonerules', zonerulesRouter);
app.use('/conditions', conditionsRouter);
app.use('/properties', propertiesRouter);

try{
  mongoose.connect(process.env.CONNECTION_STRING, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
} catch(e) {
  Console.log(e)
}

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
