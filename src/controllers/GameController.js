

const game = require("./models/ModelGame.js")

const gameInit = (req, res) => {
    game.gameState(err, game.gameState) =>{
        res.status(200)
    }
}


gameInit.save(); 

// There is a cash-out endpoint which moves 
// credits from the game session to user's account and closes the session.