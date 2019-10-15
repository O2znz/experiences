const express = require('express');
const path = require('path');
const bodyParser = require ('body-parser');
const db = require('../database/index.js');

const PORT = 3005;
const app = express();

app.use(express.static(path.join(__dirname, '../client/public')));
app.use(bodyParser.json());

app.get('/', (res, req) => {
    console.log(res)
    res.status(200).send(res)
})

app.get('/experiences/', (res, req) => {
    console.log(req)
    db.findExp(req)
    .then(data);
    var outBound = data[0];
    console.log('data found!')
    res.send(outBound)
    .catch((err) => {
        console.log(err);
        res.end();
})
})

app.listen(PORT, () => console.log ("Experiences now on: ", PORT));