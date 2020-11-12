const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = () => {
  function connect() {
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
      })
      .then(() => {
        console.log('Successfully connected to mongodb');
      })
      .catch((err) => {
        console.log(err);
      });
  }
  connect();
  mongoose.connection.on('disconnected', connect);
};