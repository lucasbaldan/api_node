import { IHistoricoAcesso, ResultGet } from "../../../entities";
import { Conn } from "../../knex";

export const getByUserId = async (userId: string): Promise<ResultGet<IHistoricoAcesso> | Error> => {

    try {
        const result = await Conn('historico_acessos').select('*')
        .where('id_usuario', '=', userId)
        .andWhere('revogacao', '=', false);

        return result ? { items: result, totalCount: 1 } : { items: [], totalCount: 0 };

    } catch (error) {
        console.log(error);
        return Error(error instanceof Error ? error.message : "Erro ao consultar dados na base de dados");
    }
}