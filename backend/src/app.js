'use strict';

const express = require('express'),
      path = require('path'),
      routes = require('./routes/index');

const app = express();

app.use('/', routes);
app.set('views', path.join(__dirname, '../../frontend/'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, '../public')));

module.exports = app;
