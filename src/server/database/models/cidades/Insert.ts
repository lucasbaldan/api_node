import { number, object } from "yup";
import { ICidade } from "../../../entities/CidadesEntity";
import { Conn } from "../../knex";

export const Insert = async (cidade: Omit<ICidade, 'codigo'>): Promise<ICidade | Error> => {
    try {
        const [cidadeCriada] = await Conn('cidade').insert(cidade).returning("*");
        if (typeof cidadeCriada === 'object') {
            return cidadeCriada;
        } else {
            return new Error('Erro ao processar inserção na base de dados');
        }
    } catch (error) {
        return Error('Erro ao processar inserção na base de dados');
    }
}