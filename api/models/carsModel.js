'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setDouble = (num) => {
    return (num.toFixed(2)) * 100;
};

const getDouble = (num) => {
    return (num / 100).toFixed(2);
};

const carSchema = new Schema({
    manufacturer: {
        type     : String,
        required : 'Enter manufacturer name'
    },
    model: {
        type     : String,
        required : 'Enter car model'
    },
    price: {
        type     : Number,
        min      : 0,
        required : true,
        get      : getDouble,
        set      : setDouble
    },
    acceleration: {
        type     : Number,
        min      : 0,
        required : true,
        get      : getDouble,
        set      : setDouble
    },
    topSpeed: {
        type     : Number,
        required : true,
        validate : {
            isAsync   : true,
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    },
    isSold: {
        type     : Boolean,
        default  : false,
        required : true
    },
    createdAt: {
        type     : Date,
        default  : Date.now,
        required : true
    }
});

module.exports = mongoose.model('Cars', carSchema);
