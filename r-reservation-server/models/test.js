const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  _id: { $oid: mongoose.Schema.Types.ObjectId },
  name: String,
  age: Number
});

testSchema.set("collection", "test"); 

module.exports = mongoose.model("Test", testSchema);