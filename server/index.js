const express = require('express');
const path = require('path');

const PORT = 3005;
const app = express();

app.use(express.static(path.join(__dirname, '../client/public')));

app.listen(PORT, () => console.log ("Experiences now on: ", PORT));