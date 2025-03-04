import { clubModel } from "../models/club-model"
import * as repository from "../repositories/club-repository"
import * as httpResponse from "../utils/http-helper"

export const getAllClubsService = async () => {
    const data = await repository.getAllClubsRepository()
    return data ? await httpResponse.ok(data) : await httpResponse.noContent()
}

export const getClubByIdService = async (id: number) => {
    const data = await repository.getClubByIdRepository(id)
    return data ? await httpResponse.ok(data) : await httpResponse.noContent()
}

export const setNewClubService = async (club: clubModel) => {
    const data = await repository.setNewClubByIdRepository(club)
    return data ? await httpResponse.ok(data) : await httpResponse.badRequest()
}

