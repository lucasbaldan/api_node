export interface IUsuario{
    id: number,
    login: string,
    senha: string
    id_pessoa: number
    ativo: boolean
}

export interface GetAllUsuarioProps {
    page?: number,
    limit?: number,
    usuario: IUsuario
}