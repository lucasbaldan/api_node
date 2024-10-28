export interface ICidade {
    codigo: number
    nome: string,
    uf: string,
    codigo_ibge?: number | undefined
}

export interface GetAllProps {
    page?: number,
    limit?: number,
    cidade?: ICidade
}

export interface GetByIdProps {
    cidade: ICidade
}

export interface DeleteByIdProps {
    cidade: ICidade
}