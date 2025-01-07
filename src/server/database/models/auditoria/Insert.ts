import { Knex } from "knex";
import { IAuditoria} from "../../../entities";

export const Insert = async (auditoria: Omit<IAuditoria, 'id'>, conexao: Knex.Transaction): Promise<number | Error> => {
    try {
        if (conexao.client.config.client === 'mysql' || conexao.client.config.client === 'mysql2') {
            const [registroCriado] = await conexao('auditoria').insert(auditoria);
            if (typeof registroCriado === 'number') {
                return registroCriado;
            } else {
                return new Error('Erro ao processar insert na base de dados');
            }
        } else {
            const [registroCriado] = await conexao('auditoria').insert(auditoria).returning("id");
            if (typeof registroCriado === 'object') {
                return registroCriado.id;
            } else {
                return new Error('Erro ao processar insert na base de dados');
            }
        }
    } catch (error) {
        console.log(error);
        return new Error(error instanceof Error ? error.message : "Erro ao processar insert na base de dados");
    }
}