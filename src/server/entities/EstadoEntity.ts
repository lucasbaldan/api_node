export interface IEstado {
    id: number
    nome: string,
    uf: string,
    codigo_ibge: number,
    ativo: boolean
}

export interface GetAllEstadosProps {
    page?: number,
    limit?: number,
    estado: IEstado
}