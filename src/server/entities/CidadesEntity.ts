export interface ICidade {
    id: number
    nome: string,
    id_estado: string,
    ativo: boolean
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