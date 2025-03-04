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
    return database.find( player => player.id === id)
}