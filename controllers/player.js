const Player = require('../models/Player');

exports.addPlayer = (req, res) => {
  res.render('editPlayer', {
    title: 'Add Player'
  });
};

exports.createPlayer = async (req, res) => {
  const existingPlayer = await Player.findOne({firstName: req.body.firstName, lastName: req.body.lastName });
  if(existingPlayer){
    req.flash('errors', { msg: 'Player with that name already exists' });
    return res.redirect('/player/add');
  }

  const player = await (new Player(req.body)).save();
   req.flash('success', `Successfully created ${player.firstName} ${player.lastName}.`);
   res.redirect(`/player/${player._id}`);
};

exports.showPlayer = async (req, res) => {
  const player = await Player.findOne({_id: req.params.id});
  res.render('showPlayer', {
    title: 'Show Player',
    player: player
  });
};