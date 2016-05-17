'use strict';

const express = require('express'),
      routes = require('./routes/index'),
      app = express();

app.use('/', routes);

module.exports = app;
