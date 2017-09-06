const Match = require('../models/Match');

exports.addMatch = async (req, res) => {
  const match = await (new Match(req.body)).save();
  return res.redirect('/');
};

exports.removeMatch = async (req, res) => {
  const match = await Match.findOneAndRemove({
    winner: req.body.winner,
    loser: req.body.loser,
  });
  return res.redirect('/');
};