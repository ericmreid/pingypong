const Player = require('../models/Player');
const Match = require('../models/Match');

/**
 * GET /
 * Home page.
 */
exports.index = async (req, res) => {
  const players = await Player.find({});
  const matches = await Match.find({});

  let scores = matches.reduce((obj, match) => {
    const winner = match['winner'];

    if(!obj[winner]){
      obj[winner] = {};
    }

    const loser = match['loser'];

    if(!obj[winner][loser]){
      obj[winner][loser] = 1;
    }
    else{
      obj[winner][loser]++;
    }

    return obj;
  }, {});

  res.render('home', {
    players,
    scores,
    title: 'Home'
  });
};
