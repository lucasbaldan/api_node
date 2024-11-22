import { IEstado } from "../../../entities";
import { Conn } from "../../knex";

export const Insert = async (estado: Omit<IEstado, 'id'>): Promise<IEstado | Error> => {
    try {
        const [estadoCriado] = await Conn('estados').insert(estado).returning("*");
        if (typeof estadoCriado === 'object') {
            return estadoCriado;
        } else {
            return new Error('Erro ao processar insert na base de dados');
        }
    } catch (error) {
        console.log(error);
        return new Error(error instanceof Error ? error.message : "Erro ao processar insert na base de dados");
    }
}