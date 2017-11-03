'use strict'

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// load model
var Car = require('./api/models/carsModel');
  
// connect to DB via mongoose
mongoose.connect('mongodb://localhost/carsdb', { useMongoClient: true });
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// importing route
var routes = require('./api/routes/carsRoutes');
// register routes
routes(app);

app.listen(port);

console.log('Server started on ' + port);
