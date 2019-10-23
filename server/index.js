const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const PORT = 3005;
const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, '../client/public')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log(res);
  res.status(200).send(res);
});

app.get('/experiences/', (req, res) => {
  console.log(req);
  db.returnAll()
    .then((data) => {
      const outBound = data;
      console.log(data);
      res.send(outBound);
    })
    .catch((err) => {
      console.log(err);
      res.end(err);
    });
});


app.listen(PORT, () => console.log('Experiences now on: ', PORT));
