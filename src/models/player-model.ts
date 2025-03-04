export interface playerModel {
    id: number,
    nome: string,
    time: string,
    posicao: string,
    notaSofascore: number,
    atributos: {
        ataque: number,
        criatividade: number,
        defendendo: number,
        tatico: number,
        tecnica: number
    }
}