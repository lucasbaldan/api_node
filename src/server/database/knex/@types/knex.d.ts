import { ICidade, IEstado, IHistoricoAcesso, IPessoa, IUsuario } from "../../../entities";

declare module 'knex/types/tables' {
    interface Tables {
        cidades: ICidade,
        estados: IEstado,
        usuarios: IUsuario
        pessoas: IPessoa
        auditoria: IAuditoria
        historico_acessos: IHistoricoAcesso
    }
}