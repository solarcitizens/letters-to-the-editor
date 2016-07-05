'use strict';

const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      expressSanitized = require('express-sanitized'),
      neat = require('node-neat'),
      routes = require('./routes/index'),
      sassMiddleware = require('node-sass-middleware'),
      helmet = require('helmet'),
      scheduler = require('./export/scheduler'),
      config = require('config'),
      RateLimit = require('express-rate-limit');

const app = express();

let forceSsl = function (req, res, next) {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(['https://', req.get('Host'), req.url].join(''));
  }
  return next();
};

if (config.get('forceSsl')) {
  app.use(forceSsl);
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitized());

app.use(sassMiddleware({
    src: path.join(__dirname, '../public'),
    dest: path.join(__dirname, '../public'),
    debug: true,
    outputStyle: 'compressed',
    includePaths: neat.includePaths
}), express.static(path.join(__dirname, '../public')));

app.use('/', routes);
app.set('views', path.join(__dirname, '../../frontend/'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(helmet());

app.use(express.static(path.join(__dirname, '../public')));

app.enable('trust proxy');

var letterLimiter = new RateLimit({
  windowMs: 24*60*60*1000, // 24 hours
  max: 100,
  delayMs: 0 // disabled
});

// only apply to requests that begin with /letters (i.e. the letter POST endpoint)
app.use('/letters', letterLimiter);

scheduler.init();

module.exports = app;
