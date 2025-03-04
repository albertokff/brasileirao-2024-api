import { Router } from "express"
import * as playerController from "./controllers/player-controller"

const router = Router()

router.get("/player", playerController.getAllPlayers)
router.get("/player/:id", playerController.getPlayerById)
router.post("/player", playerController.setNewPlayer)

export default router