var mongoose = require ('mongoose');
var faker = require('faker');
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
    var x = 0;
    var dummies = []
while(x < 100){
    x += 1;
    var Experience = mongoose.model('Experiences', Schema);
    dummies.push({
        lat: faker.address.latitude(),
        long: faker.address.longitude(),
        text: {
            title: faker.commerce.productName(),
            desciption: faker.lorem.paragraph(),
            price: faker.random.number()},
        images: [faker.image.imageUrl(), faker.image.imageUrl(), faker.image.imageUrl()]
    });
}
// console.log(Experience)
Experience.insertMany(dummies)