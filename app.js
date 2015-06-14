"use strict";

// the framework
var express = require('express');

// the routes we will use
var routes = require('./routes/index');

// build paths with correct separator for OS
var path = require('path');

// the app
var app = express();

// Mount the public folder on the root
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

module.exports = app;
