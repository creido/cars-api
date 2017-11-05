'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
    manufacturer: {
        type: String,
        required: 'Enter manufacturer name'
    },
    model: {
        type: String,
        required: 'Enter car model'
    },
    price: {
        type     : Number
    },
    acceleration: {
        type     : Number
    },
    topSpeed: {
        type     : Number,
        required : true,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    },
    isSold: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Cars', carSchema);
