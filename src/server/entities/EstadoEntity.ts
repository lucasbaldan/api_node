export interface IEstado {
    id: number
    nome: string,
    ativo: boolean
}

export interface GetAllCidadesProps {
    page?: number,
    limit?: number,
    estado: IEstado
}