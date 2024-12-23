import { IEstado } from "../../../entities";
import { Conn } from "../../knex";

export const Insert = async (estado: Omit<IEstado, 'id'>): Promise<number | Error> => {
    try {
        if (Conn.client.config.client === 'mysql' || Conn.client.config.client === 'mysql2') {
            const [estadoCriado] = await Conn('estados').insert(estado);
            if (typeof estadoCriado === 'number') {
                return estadoCriado;
            } else {
                return new Error('Erro ao processar insert na base de dados');
            }
        } else {
            const [estadoCriado] = await Conn('estados').insert(estado).returning("id");
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