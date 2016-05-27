'use strict';

const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      expressSanitized = require('express-sanitized'),
      neat = require('node-neat'),
      routes = require('./routes/index'),
      sassMiddleware = require('node-sass-middleware'),
      helmet = require('helmet');

const app = express();

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

module.exports = app;
