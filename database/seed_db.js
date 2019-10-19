const mongoose = require('mongoose');
const faker = require('faker');
const db = require('./index.js')

// var Experience = mongoose.model('Experiences', db.Schema);
    var x = 0;
    var dummies = []
while(x < 100){
    x += 1;
    dummies.push({
        id: x,
        lat: faker.address.latitude(),
        long: faker.address.longitude(),
        text: {
            title: faker.commerce.productName(),
            desciption: faker.lorem.paragraph(),
            price: Math.floor(Math.random()*420)},
        images: [faker.image.imageUrl(), faker.image.imageUrl(), faker.image.imageUrl()]
    });
}
// console.log(Experience)
db.Experience.insertMany(dummies)
// mongoose.disconnect();
module.exports = db;