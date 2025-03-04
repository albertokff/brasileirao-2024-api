import { Router } from "express"
import * as playerController from "./controllers/player-controller"

const router = Router()

router.get("/player", playerController.getAllPlayers)

export default router