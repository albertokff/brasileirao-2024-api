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

