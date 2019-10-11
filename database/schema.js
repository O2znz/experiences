var mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/experiences');
var db = mongoose.connection;
db.on('err', console.error.bind(console, "cannot connect to db"));
db.once('open', () => {console.log('db connected')});

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

var Experience = mongoose.model('Experiences', Schema);
var dummy = {
    lat: 37.441883,
    long: -122.143021,
    text: {
        title: "Apple Picking",
        desciption: "Enjoy a pleasant evening outdoors picking apples with your loved ones. Beautiful orchard in this hidden villa.",
        price: 9},
    images: ["https://i.ndtvimg.com/i/2017-10/apple-benefits_620x350_51507721694.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSj09dKvHIfLzsP4x8bTDE7A0JYM0BvVPxKQwlexaQzRlOfIS5B", "https://www.exploregeorgia.org/sites/default/files/legacy_images/bj-reece-apple-orchard-1502719963.jpg"]
};
// console.log(Experience)
Experience.insertMany(dummy);