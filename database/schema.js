var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var expItemSchema = new Schema ({
    lat: Decimal128,
    long: Decimal128,
    text: {
        title: String,
        desciption: String,
        price: Number,
    },
    images: [String, String, String]
})