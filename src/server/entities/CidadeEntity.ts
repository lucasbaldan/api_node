import { IEstado } from "./EstadoEntity"

export interface ICidade {
    id: number,
    nome: string,
    id_estado: number | IEstado,
    codigo_ibge: number,
    ativo: boolean
}

export interface GetAllCidadesProps {
    page?: number,
    limit?: number,
    cidade: ICidade
}