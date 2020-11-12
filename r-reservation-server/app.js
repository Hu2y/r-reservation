require('dotenv').config();
const config = require('./config.json');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const route = require('./src/routes');
const data = require('./src/database/Data/datasource.json');
const cors = require('cors');
const db = require('./src/database/db.js');

db();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', route);

const port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log("Express server has started on port " + port);
});