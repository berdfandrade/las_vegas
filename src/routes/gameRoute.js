

import express from "express"
import game from "../controllers/GameController.js"

const router = express.Router();

router
    .get("/game", game.getGame)
    .put("/userState", user.sendCurrentState)

    
export default router; 