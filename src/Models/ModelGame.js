



const mongoose = require('mongoose');
const Schema = require('mongoose/schema');


const gameSchema = new mongoose.Schema({

  player :{
    type: Schema.Types.ObjectId,
    ref: 'Player'
  }, 

  gameState: {
    type: Boolean,
    default: false,
    required: true
  },

  credits: {
    type: Number,
    default: 10,
    required: true
  },

  lessThan40: {
    type: Boolean,
    default: true
  },

  moreThan60: {
    type: Boolean,
    default: false
  },

});



const Game = mongoose.model('Game', gameSchema);

module.exports = Game;