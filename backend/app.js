const createError = require('http-errors');
const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const apiRouter = require('./routes/api');
const apiCartRouter = require('./routes/apiCart');
const session = require('express-session');
const cors = require('cors');

const sessionMiddleware = require('./middlewares/session');
const categoriesMiddleware = require('./middlewares/categories');
const brandsMiddleware = require('./middlewares/brands');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use(cookieParser('secret'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7 // 7 días
  }
}));

app.use(sessionMiddleware);

app.use(categoriesMiddleware);
app.use(brandsMiddleware);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/api/cart', apiCartRouter);
app.use('/api', apiRouter);

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
