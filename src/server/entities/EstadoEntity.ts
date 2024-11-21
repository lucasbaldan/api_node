export interface IEstado {
    id: number
    nome: string,
    codigo_ibge: number,
    ativo: boolean
}

export interface GetAllEstadosProps {
    page?: number,
    limit?: number,
    estado: IEstado
}