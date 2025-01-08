import { IPessoa } from "./PessoaEntity"

export interface IUsuario{
    id: number,
    login: string,
    senha: string
    id_pessoa: number | IPessoa
    ativo: boolean
}

export interface GetAllUsuarioProps {
    page?: number,
    limit?: number,
    usuario: IUsuario
}