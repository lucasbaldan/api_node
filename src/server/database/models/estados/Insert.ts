import { Knex } from "knex";
import { IEstado } from "../../../entities";

export const Insert = async (estado: Omit<IEstado, 'id'>, conexao: Knex.Transaction): Promise<number | Error> => {
    try {
        if (conexao.client.config.client === 'mysql' || conexao.client.config.client === 'mysql2') {
            const [estadoCriado] = await conexao('estados').insert(estado);
            if (typeof estadoCriado === 'number') {
                return estadoCriado;
            } else {
                return new Error('Erro ao processar insert na base de dados');
            }
        } else {
            const [estadoCriado] = await conexao('estados').insert(estado).returning("id");
            if (typeof estadoCriado === 'object') {
                return estadoCriado.id;
            } else {
                return new Error('Erro ao processar insert na base de dados');
            }
        }
    } catch (error) {
        console.log(error);
        return new Error(error instanceof Error ? error.message : "Erro ao processar insert na base de dados");
    }
}