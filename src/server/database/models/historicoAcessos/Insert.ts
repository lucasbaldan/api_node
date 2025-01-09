import { Knex } from "knex";
import { IHistoricoAcesso } from "../../../entities";
import { Conn } from "../../knex";

export const Insert = async (historico: Omit<Omit<IHistoricoAcesso, 'id'>,'dthr_revogacao'>): Promise<number | Error> => {
    try {
        if (Conn.client.config.client === 'mysql' || Conn.client.config.client === 'mysql2') {
            const [registroCriado] = await Conn('historico_acessos').insert(historico);
            if (typeof registroCriado === 'number') {
                return registroCriado;
            } else {
                return new Error('Erro ao processar insert na base de dados');
            }
        } else {
            const [registroCriado] = await Conn('historico_acessos').insert(historico).returning("id");
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