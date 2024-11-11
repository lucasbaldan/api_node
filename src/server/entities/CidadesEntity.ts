export interface ICidade {
    id: number
    nome: string,
    id_estado: string,
    ativo: boolean
}

export interface GetAllCidadesProps {
    page?: number,
    limit?: number,
    cidade: ICidade
}