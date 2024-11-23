import { Conn } from "../../knex";
import { UsuariosModels } from ".";
import { GetAllUsuarioProps, IUsuario, ResultGet } from "../../../entities";

export const getUsuario = async (parametro?: GetAllUsuarioProps, id?: number): Promise<ResultGet<IUsuario> | Error> => {
    let query = Conn('usuarios').select('*');

    try {

        if (id !== undefined) {
            const result = await query.where('id', id)
                .first();

            return result ? { items: [result], totalCount: 1 } : { items: [], totalCount: 0 };

        } else if (parametro !== undefined) {
            if (parametro.usuario !== undefined) {

                if (parametro.usuario.id !== undefined) query = query.whereLike('id', `%${parametro.usuario.id}%`);
                if (parametro.usuario.login) query = query.orWhereLike('login', `%${parametro.usuario.login}%`);
                if (parametro.usuario.id_pessoa) query = query.orWhereLike('id_pessoa', parametro.usuario.id_pessoa);
                if (parametro.usuario.ativo) query = query.orWhere('ativo', '=', parametro.usuario.ativo);
            }
            query.offset(((parametro.page || 1) - 1) * (parametro.limit || Number(process.env.DEFAULT_ROWS_READ)));
            query.limit(parametro.limit || Number(process.env.DEFAULT_ROWS_READ));

            const totalCount = await UsuariosModels.Count();
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