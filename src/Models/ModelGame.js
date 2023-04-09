



const mongoose = require('mongoose');

// Mudar o cluster
mongoose.connect("mongodb+srv://berdfandrade:yGsAj1V6UVCddNov@cluster0.lkkxzsu.mongodb.net/bernardo-node");


const gameSchema = new mongoose.Schema({

  playerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player'
  },
  gameState: {
    type: Boolean,
    default: false
  },
  credits: {
    type: Number,
    required: true
  }

});

const Game = mongoose.model('Game', gameSchema);

export default game