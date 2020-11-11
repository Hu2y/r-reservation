const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  name: String,
  age: Number
});
// testSchema.set("collection", "test"); 
module.exports = mongoose.model("test", testSchema);