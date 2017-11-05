'use strict';

const mongoose = require('mongoose');
const Car = mongoose.model('Cars');

const responseHandler = (response, error, car) => {
    if (error) {
        response.send(error);
    } else {
        response.json(car);
    }
};

// TODO: Could modify/add methods for creating, updating or deleting multiple items

// Create or POST
exports.createItem = (req, res) => {
    const car = new Car(req.body);

    console.log('request', req.body);

    car.save((error, car) => {
        responseHandler(res, error, car);
    });
};

// Read or GET
exports.readAllItems = (req, res) => {
    Car.find({}, (error, car) => {
        responseHandler(res, error, car);
    });
};
 
exports.readItem = (req, res) => {
    Car.findById(req.params.id, (error, car) => {
        responseHandler(res, error, car);
    });
};

// Update or PUT
exports.updateItem = (req, res) => {
    console.log('PUT', req.body);
    Car.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (error, car) => {
        responseHandler(res, error, car);
    });
};

// Delete
exports.deleteItem = (req, res) => {
    Car.remove({
        _id: req.params.id
    }, (error, car) => {

        if (error) {
            res.send(error);
        } else {
            res.json({ message: 'deleted' });
        }

    });
};
