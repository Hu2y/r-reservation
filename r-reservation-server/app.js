require('dotenv').config();
const config = require('./config.json');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const mongoose = require("mongoose");
var Client = require('mongodb').MongoClient;
const cors = require("cors");
const route = require('./routes');
const data = require('./models/Data/datasource.json');
const assert = require('assert');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", route);

var db;
// Node.js의 native Promise 사용
// mongoose.Promise = global.Promise;

// CONNECT TO MONGODB SERVER
// mongoose.connect("mongodb://sanghun:tkdgnsdl0@127.0.0.1:27017", 
//   {useNewUrlParser: true, useUnifiedTopology: true})
//   .then(() => console.log('Successfully connected to mongodb'))
//   .catch(e => console.error(e));

Client.connect("mongodb://sanghun:tkdgnsdl0@127.0.0.1:27017",{useNewUrlParser: true, useUnifiedTopology: true}, function async (err, database) {
  assert.equal(null, err);
  db = database.db("rsupport");
  const a = db.collection('reservation').find();
  console.log(a)
  // db.collection('test').find()
  //   .then(function(numItems) {
  //     console.log(numItems); // Use this to debug
  //     callback(numItems);
  //   })
});

const port = process.env.PORT || 8080;


app.get('/', (req, res) => {
  res.send(data)
})

app.listen(port, function () {
  console.log("Express server has started on port " + port);
});