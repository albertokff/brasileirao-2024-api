import { Request, Response } from "express"
import * as service from "../services/player-service"

export const getAllPlayers = async (req: Request, res: Response) => {
    const data = await service.getPlayerService()
    res.status(data.statusCode).json(data.body)
}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const data = await service.getPlayerByIdService(id)
    res.status(data.statusCode).json(data.body)
}

export const setNewPlayer = async (req: Request, res: Response) => {
    const body = req.body
    const data = await service.setNewPlayerService(body)
    res.status(data.statusCode).json(data.body)
}

export const deletePlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const data = await service.deletePlayerByIdService(id)
    res.status(data.statusCode).json(data.body)
}