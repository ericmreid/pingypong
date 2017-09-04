const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  winner: Schema.Types.ObjectId,
  loser: Schema.Types.ObjectId,
  winnerScore: Number,
  loserScore: Number,
  date: {type: Date, default: Date.now},
}, { timestamps: true });

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;
