import { ICidade } from "../../../entities";
import { Conn } from "../../knex";

export const Update = async (cidade: ICidade): Promise<void | Error> => {
    try {
        const result = await Conn('cidades')
        .update(cidade)
        .where('id', '=', cidade.id);

        if (result === 1) {
            return;
        } else {
            return new Error('Erro ao processar update na base de dados');
        }
    } catch (error) {
        console.log(error);
        return Error('Erro ao processar inserção na base de dados');
    }
}