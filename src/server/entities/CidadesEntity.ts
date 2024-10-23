export interface ICidade {
    nome: string,
    uf: string,
    codigo_ibge?: number | undefined
}

export interface GetAllProps {
    page?: number,
    limit?: number,
    filtro?: ICidade
}