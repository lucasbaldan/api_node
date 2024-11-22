import { IEstado } from "../../../entities";
import { Conn } from "../../knex";

export const Update = async (estado: IEstado): Promise<void | Error> => {
    try {
        const {id, ...dadosUpdate} = estado;
        
        const result = await Conn('estados')
        .update(dadosUpdate)
        .where('id', '=', estado.id);

        if (result > 0) {
            return;
        } else {
            return new Error("O registro não existe mais na base de dados!");
        }
    } catch (error) {
        console.log(error);
        return new Error(error instanceof Error ? error.message : "Erro ao processar update na base de dados");
    }
}