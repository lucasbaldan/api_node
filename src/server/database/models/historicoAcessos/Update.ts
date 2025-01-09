import { IHistoricoAcesso } from "../../../entities";
import { Conn } from "../../knex";

export const Update = async (historico: IHistoricoAcesso): Promise<void | Error> => {
    try {
        const {id, ...dadosUpdate} = historico;
        
        const result = await Conn('historico_acessos')
        .update(dadosUpdate)
        .where('id', '=', historico.id);

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