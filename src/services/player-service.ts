import { atributos } from "../models/atributos-model"
import { playerModel } from "../models/player-model"
import * as repository from "../repositories/player-repository"
import * as httpResponse from "../utils/http-helper"

export const getPlayerService = async() => {
    const data = await repository.getAllPlayersRepository()
    let response = null

    if (data) {
        response = await httpResponse.ok(data)
    } else {
        response = await httpResponse.noContent()
    }

    return response
}

export const getPlayerByIdService = async(id: number) => {
    const data = await repository.getPlayerByIdRepository(id)
    let response = null

    if (data) {
        response = await httpResponse.ok(data)
    } else {
        response = await httpResponse.noContent()
    }

    return response
}

export const setNewPlayerService = async (player: playerModel) => {
    let response = null

    if (Object.keys(player).length !== 0) {
        await repository.setNewPlayerRepository(player)
        response = await httpResponse.created()        
    } else {
        response = await httpResponse.badRequest()
    }

    return response
}

export const deletePlayerByIdService = async (id: number) => {
    const data = await repository.deletePlayerByIdRepository(id)
    let response = null

    if (data) {
        response = await httpResponse.ok(data)
    } else {
        response = await httpResponse.badRequest()
    }

    return response
}

export const updatePlayerByIdService = async (id: number, body: atributos) => {
    const data = await repository.updatePlayerByIdRepository(id, body)
    let response = null

    if (data) {
        response = await httpResponse.ok(data)
    } else {
        response = await httpResponse.badRequest()
    }

    return response
}