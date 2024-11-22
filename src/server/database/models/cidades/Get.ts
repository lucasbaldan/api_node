import { CidadesModels } from ".";
import { GetAllCidadesProps, ICidade, ResultGet } from "../../../entities";
import { Conn } from "../../knex";

export const getCidade = async (parametro?: GetAllCidadesProps, id?: number): Promise<ResultGet<ICidade> | Error> => {
    let query = Conn('cidades').select('*');

    try {

        if (id !== undefined) {
            const result = await query.where('id', id)
                .first();

            return result ? { items: [result], totalCount: 1 } : { items: [], totalCount: 0 };

        } else if (parametro !== undefined) {
            if (parametro.cidade !== undefined) {

                if (parametro.cidade.id !== undefined) query = query.whereLike('id', `%${parametro.cidade.id}%`);
                if (parametro.cidade.nome) query = query.orWhereLike('nome', `%${parametro.cidade.nome}%`);
                if (parametro.cidade.id_estado) query = query.orWhere('id_estado', '=', parametro.cidade.id_estado);
                if (parametro.cidade.ativo) query = query.orWhere('ativo', '=', parametro.cidade.ativo);
            }
            query.offset(((parametro.page || 1) - 1) * (parametro.limit || Number(process.env.DEFAULT_ROWS_READ)));
            query.limit(parametro.limit || Number(process.env.DEFAULT_ROWS_READ));

            const totalCount = await CidadesModels.Count();
            if (totalCount instanceof Error) return totalCount;

            const result = await query;

            return result ? { items: result, totalCount: totalCount, filterCount: result.length } : { items: [], totalCount: 0, filterCount: 0 };
        }

        return Error("Erro ao processar consulta na base de dados");

    } catch (error) {
        console.log(error);
        return Error(error instanceof Error ? error.message : "Erro ao consultar dados na base de dados");
    }
}