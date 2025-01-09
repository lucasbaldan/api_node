export interface IHistoricoAcesso {
    id: number,
    id_usuario: string,
    token: string,
    dthr_autenticao: string,
    revogacao: boolean,
    dthr_revogacao: string,
    quant_requisicoes: number
}

export type GetAllHistoricoAcessoProps = IHistoricoAcesso;