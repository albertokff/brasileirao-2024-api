export const ok = async(data: any): Promise<httpResponse> => {
    return {
        statusCode: 200,
        body: data
    }
}

export const noContent = async(): Promise<httpResponse> => {
    return {
        statusCode: 204,
        body: null
    }
}

export const created = async(): Promise<httpResponse> => {
    return {
        statusCode: 201,
        body: {
            message: "successful"
        }
    }
}

export const badRequest = async(): Promise<httpResponse> => {
    return {
        statusCode: 400,
        body: {
            message: "Ocorreu um erro nessa requisição. Verifique os dados!"
        }
    }
}