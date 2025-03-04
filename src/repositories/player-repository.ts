import { playerModel } from "../models/player-model";

const database: playerModel[] = [
    {
        "id": 1,
        "nome": "Rodrigo Garro",
        "time": "Corinthians",
        "posicao": "Meia",
        "notaSofascore": 7.61,
        "atributos": {
            "ataque": 67,
            "criatividade": 76,
            "defendendo": 30,
            "tatico": 45,
            "tecnica": 62
        }
    },
    {
        "id": 2,
        "nome": "Matheus Pereira",
        "time": "Cruzeiro",
        "posicao": "Atacante",
        "notaSofascore": 7.51,
        "atributos": {
            "ataque": 68,
            "criatividade": 69,
            "defendendo": 38,
            "tatico": 53,
            "tecnica": 67
        }
    },
    {
        "id": 3,
        "nome": "João Ricardo",
        "time": "Fortaleza",
        "posicao": "Goleiro",
        "notaSofascore": 7.42,
        "atributos": {
            "ataque": 66,
            "criatividade": 66 ,
            "defendendo": 56,
            "tatico": 51,
            "tecnica": 36
        }
    },
    {
        "id": 4,
        "nome": "Raphael Veiga",
        "time": "Palmeiras",
        "posicao": "Meia",
        "notaSofascore": 7.42,
        "atributos": {
            "ataque": 67,
            "criatividade": 72,
            "defendendo": 41,
            "tatico": 55,
            "tecnica": 65
        }
    },
    {
        "id": 5,
        "nome": "Wesley",
        "time": "Internacional",
        "posicao": "Meia",
        "notaSofascore": 7.41,
        "atributos": {
            "ataque": 63,
            "criatividade": 58,
            "defendendo": 37,
            "tatico": 45,
            "tecnica": 66
        }
    },
    {
        "id": 6,
        "nome": "Cássio",
        "time": "Cruzeiro",
        "posicao": "Goleiro",
        "notaSofascore": 7.36,
        "atributos": {
            "ataque": 66,
            "criatividade": 66 ,
            "defendendo": 56,
            "tatico": 51,
            "tecnica": 36
        }
    },
    {
        "id": 7,
        "nome": "Alexandro Bernabei",
        "time": "Internacional",
        "posicao": "Defensor",
        "notaSofascore": 7.36,
        "atributos": {
            "ataque": 49,
            "criatividade": 61,
            "defendendo": 62,
            "tatico": 52,
            "tecnica": 58
        }
    },
    {
        "id": 8,
        "nome": "Lucas Moura",
        "time": "São Paulo",
        "posicao": "Meia",
        "notaSofascore": 7.34,
        "atributos": {
            "ataque": 61,
            "criatividade": 60,
            "defendendo": 38,
            "tatico": 43,
            "tecnica": 64
        }
    },
    {
        "id": 9,
        "nome": "Estêvão",
        "time": "Palmeiras",
        "posicao": "Meia",
        "notaSofascore": 7.32,
        "atributos": {
            "ataque": 68,
            "criatividade": 66,
            "defendendo": 30,
            "tatico": 40,
            "tecnica": 70
        }
    },
    {
        "id": 10,
        "nome": "Franco Cristaldo",
        "time": "Grêmio",
        "posicao": "Meia",
        "notaSofascore": 7.32,
        "atributos": {
            "ataque": 64,
            "criatividade": 65,
            "defendendo": 37,
            "tatico": 46,
            "tecnica": 61
        }
    },
]

export const getAllPlayers = async (): Promise<playerModel[]> => {
    return database;
}