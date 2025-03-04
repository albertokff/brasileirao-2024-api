import { playerModel } from "../models/player-model"
import * as repository from "../repositories/player-repository"
import * as httpResponse from "../utils/http-helper"

export const getPlayerService = async() => {
    const data = await repository.getAllPlayers()
    let response = null

    if (data) {
        response = await httpResponse.ok(data)
    } else {
        response = await httpResponse.noContent()
    }

    return response
}