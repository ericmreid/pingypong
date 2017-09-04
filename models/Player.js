const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const playerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
});

module.exports = mongoose.model('Player', playerSchema);
