

import express from "express"
import game from "../controllers/GameController.js"

const router = express.Router();

router
    .get("/game", game.getGame)
    .put("/game", user.sendCurrentState)

    
export default router; 