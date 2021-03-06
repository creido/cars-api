'use strict'

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// load model
const Car = require('./api/models/carsModel');
  
// connect to DB via mongoose
mongoose.connect('mongodb://localhost/carsdb', { useMongoClient: true });
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './api/views');

// import routes
const routes = require('./api/routes/carsRoutes');

// register routes
routes(app);

app.listen(port);

console.log('Server started on ' + port);
