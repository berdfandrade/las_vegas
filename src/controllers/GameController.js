
import game from "../models/Game.js"


class PlayGame {
    static initGame = (req, res) => {
        game.save((err, game) => {
            res.status(200).json(game)
        })
    }
}

PlayGame.initGame