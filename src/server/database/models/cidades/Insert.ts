import { ICidade } from "../../../entities/CidadeEntity";
import { Conn } from "../../knex";

export const Insert = async (cidade: Omit<ICidade, 'id'>): Promise<ICidade | Error> => {
    try {
        const [cidadeCriada] = await Conn('cidades').insert(cidade).returning("*");
        if (typeof cidadeCriada === 'object') {
            return cidadeCriada;
        } else {
            return new Error('Erro ao processar insert na base de dados');
        }
    } catch (error) {
        console.log(error);
        return new Error(error instanceof Error ? error.message : "Erro ao processar insert na base de dados");
    }
}