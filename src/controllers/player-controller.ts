import { Request, Response } from "express"
import * as service from "../services/player-service"

export const getAllPlayers = async (req: Request, res: Response) => {
    const data = await service.getPlayerService()
    res.status(data.statusCode).json(data.body)
}