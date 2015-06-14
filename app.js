"use strict";

// the framework
var express = require('express');

// the routes we will use
var routes = require('./routes/index');

// build paths with correct separator for OS
var path = require('path');

// the app
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// Mount the public folder on the root
app.use(express.static(path.join(__dirname, 'public')));

// mount requirejs to root so we can get it easily using /require.js
app.use(express.static(path.join(__dirname, "node_modules", "requirejs")));

app.use("/lib", express.static(path.join(__dirname, "node_modules")));
app.use('/', routes);

module.exports = app;
