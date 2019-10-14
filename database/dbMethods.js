const mongoose = require('mongoose');


var Schema =  new mongoose.Schema({
    lat: Number,
    long: Number,
    text: {
        title: String,
        desciption: String,
        price: Number
    },
    images: [String, String, String]
});

