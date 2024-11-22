import { EstadosModels } from ".";
import { GetAllEstadosProps, IEstado, ResultGet } from "../../../entities";
import { Conn } from "../../knex";

export const getEstado = async (parametro?: GetAllEstadosProps, id?: number): Promise<ResultGet<IEstado> | Error> => {
    let query = Conn('estados').select('*');

    try {

        if (id !== undefined) {
            const result = await query.where('id', id)
                .first();

            return result ? {items: [result], totalCount: 1} : {items: [], totalCount: 0};

        } else if (parametro !== undefined) {
            if (parametro.estado !== undefined) {

                if (parametro.estado.id !== undefined) query = query.whereLike('id', `%${parametro.estado.id}%`);
                if (parametro.estado.nome) query = query.orWhereLike('nome', `%${parametro.estado.nome}%`);
                if (parametro.estado.codigo_ibge) query = query.orWhere('codigo_ibge', '=', parametro.estado.codigo_ibge);
                if (parametro.estado.ativo) query = query.orWhere('ativo', '=', parametro.estado.ativo);
            
            }
            query.offset(((parametro.page || 1) - 1) * (parametro.limit || Number(process.env.DEFAULT_ROWS_READ)));
            query.limit(parametro.limit || Number(process.env.DEFAULT_ROWS_READ));

            const totalCount = await EstadosModels.Count();
            if(totalCount instanceof Error) return totalCount;
            
            const result = await query;

            return result ? {items: result, totalCount: totalCount, filterCount: result.length} : {items: [], totalCount: 0};
        }

        return Error("Erro ao processar consulta na base de dados");

    } catch (error) {
        console.log(error);
        return Error(error instanceof Error ? error.message : "Erro ao consultar dados na base de dados");
    }
}