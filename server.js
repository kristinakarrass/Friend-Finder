//dependencies
//==========================================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//set up express app
//==========================================================================
var app = express();
var PORT = 3000;

//sets up the express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlendcoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//==========================================================================