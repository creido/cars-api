'use strict';

const mongoose = require('mongoose');
const Car = mongoose.model('Cars');

// Create or POST
exports.createItem = (req, res) => {
    const car = new Car(req.body);

    console.log('request', req.body);

    car.save((err, car) => {
        console.log(car);
        if (err) {
            res.send(err);
        } 

        res.json(car);
    });
};

// Read or GET
exports.readAllItems = (req, res) => {
    Car.find({}, (err, car) => {
        if (err) {
            res.send(err);
        }

        res.json(car);
    });
};
 
exports.readItem = (req, res) => {
    Car.findById(req.params.id, (err, car) => {
        if (err) {
            res.send(err);
        }

        res.json(car);
    });
};

// Update or PUT
exports.updateItem = (req, res) => {
    console.log('PUT', Number.isInteger(req.body.topSpeed));
    Car.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, car) => {
        if (err) {
            res.send(err);
        }

        res.json(car);
    });
};

// Delete
exports.deleteItem = (req, res) => {
    Car.remove({
        _id: req.params.id
    }, (err, car) => {
        if (err) {
            res.send(err);
        }

        res.json({ message: 'deleted' });
    });
};
