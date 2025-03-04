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

export const setNewClub = async (req: Request, res: Response) => {
    const body = req.body
    const data = await service.setNewClubService(body)
    res.status(data.statusCode).json(data.body)
}

export const deleteClubById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const data = await service.deleteClubById(id)
    res.status(data.statusCode).json(data.body)
}

export const updateClubById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const body = req.body
    const data = await service.updateClubById(id, body)
    res.status(data.statusCode).json(data.body)
}