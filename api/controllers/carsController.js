'use strict';

var mongoose = require('mongoose'),
    Car = mongoose.model('Cars');

exports.list_all = function (req, res) {
    Car.find({}, function (err, car) {
        if (err)
            res.send(err);
        res.json(car);
    });
};

exports.createItem = function (req, res) {
    var car = new Car(req.body);

    car.save(function (err, car) {
        if (err) {
            res.send(err);
        }

        res.json(car);
    });
};

exports.readAPI = function (req, res) {
    Car.findById(req.params.id, function (err, car) {
        if (err) {
            res.send(err);
        }
        res.json(car);
    });
};

exports.updateAPI = function (req, res) {
    Car.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, car) {
        if (err) {
            res.send(err);
        }

        res.json(car);
    });
};

exports.deleteAPI = function (req, res) {
    Car.remove({
        _id: req.params.id
    }, function (err, car) {
        if (err) {
            res.send(err);
        }

        res.json({ message: 'deleted' });
    });
};
