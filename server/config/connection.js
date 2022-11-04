const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'https://powerful-taiga-71538.herokuapp.com/',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
