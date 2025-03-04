import { Router } from "express"
import * as playerController from "./controllers/player-controller"
import * as clubController from './controllers/club-controller'

const router = Router()
router.get("/player", playerController.getAllPlayers)
router.get("/player/:id", playerController.getPlayerById)
router.post("/player", playerController.setNewPlayer)
router.delete("/player/:id", playerController.deletePlayerById)
router.patch("/player/:id", playerController.updatePlayerById)

router.get("/club", clubController.getAllClubs)
router.get("/club/:id", clubController.getClubById)
router.post("/club", clubController.setNewClub)
router.delete("/club/:id", clubController.deleteClubById)
router.patch("/club/:id", clubController.updateClubById)

export default router