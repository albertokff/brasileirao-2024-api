import { clubModel } from "../models/club-model";

const database: clubModel[] = [
    {
        id: 1,
        name: "Flamengo"
    },
    {
        id: 2,
        name: "Botafogo"
    },
    {
        id: 3,
        name: "Palmeiras"
    },
    {
        id: 4,
        name: "Athletico"
    },
    {
        id: 5,
        name: "Corinthians"
    },
    {
        id: 6,
        name: "Internacional"
    },
    {
        id: 7,
        name: "Bahia"
    },
    {
        id: 8,
        name: "Atlético Mineiro"
    },
    {
        id: 9,
        name: "São Paulo"
    },
    {
        id: 10,
        name: "Fortaleza"
    }
]

export const getAllClubsRepository = async (): Promise<clubModel[] | undefined> => {
    return database
}

export const getClubByIdRepository = async (id: number) => {
    return database.find( club => club.id === id)
}

export const setNewClubByIdRepository = async (club: clubModel) => {
    if (Object.keys(club).length > 0) {
        database.push(club)
        return {
            message: "Clube cadastrado com sucesso!"
        }
    } else {
        return false
    }
}