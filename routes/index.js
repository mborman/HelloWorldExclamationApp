"use strict";

var express = require("express");
var Hello = require("ModuleHello");
var World = require("ModuleWorld");
var Exclamation = require("ModuleExclamation");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res/*, next*/) {

  res.render("index", {
    htmlTitle: "test",
    pageTitle: "page title",
    headerText: "from the server: " +  Hello.value() + " " + World.value() + Exclamation.value()});
});

module.exports = router;