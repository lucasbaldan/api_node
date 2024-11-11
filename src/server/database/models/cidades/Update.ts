import { ICidade } from "../../../entities";
import { Conn } from "../../knex";

export const Update = async (cidade: ICidade): Promise<void | Error> => {
    try {
        const {id, ...dadosUpdate} = cidade;
        
        const result = await Conn('cidades')
        .update(dadosUpdate)
        .where('id', '=', cidade.id);

        if (result > 0) {
            return;
        } else {
            return new Error("Erro ao processar atualização na base de dados, ou o registro não existe mais!");
        }
    } catch (error) {
        console.log(error);
        return new Error(error instanceof Error ? error.message : "Erro ao processar update na base de dados");
    }
}