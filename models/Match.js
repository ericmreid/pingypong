const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const matchSchema = new mongoose.Schema({
  winner: mongoose.Schema.Types.ObjectId,
  loser: mongoose.Schema.Types.ObjectId,
  // winnerScore: Number,
  // loserScore: Number,
  date: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Match', matchSchema);
