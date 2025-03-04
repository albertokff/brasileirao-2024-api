import { Request, Response } from "express"
import * as service from "../services/club-service"

export const getAllClubs = async (req: Request, res: Response) => {
    const data = await service.getAllClubsService()
    res.status(data.statusCode).json(data.body)
}

export const getClubById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const data = await service.getClubByIdService(id)
    res.status(data.statusCode).json(data.body)
}