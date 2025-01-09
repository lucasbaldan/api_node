import { IHistoricoAcesso, ResultGet } from "../../../entities";
import { Conn } from "../../knex";

export const getByToken = async (token: string): Promise<ResultGet<IHistoricoAcesso> | Error> => {

    try {
        const result = await Conn('historico_acessos').select('*').where('token', '=', token).first();

        return result ? { items: [result], totalCount: 1 } : { items: [], totalCount: 0 };

    } catch (error) {
        console.log(error);
        return Error(error instanceof Error ? error.message : "Erro ao consultar dados na base de dados");
    }
}