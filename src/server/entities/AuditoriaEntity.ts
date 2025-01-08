export interface IAuditoria {
    id: number,
    id_usuario: string,
    nome_usuario: string,
    nome_pessoa_usuario: string,
    acao: string,
    dthr_acao: string,
    dados_acao: string,
    dados_requisicao: string,
}

export interface GetAllAuditoriaProps {
    page?: number,
    limit?: number,
    auditoria: IAuditoria
}