import { GetAllCidadesProps, ICidade } from "../../../entities";
import { Conn } from "../../knex";

export const getCidade = async (parametro?: GetAllCidadesProps, id?: number): Promise<ICidade[] | ICidade | Error> => {
    let result: ICidade[] | ICidade | undefined;

    try {

        if (id !== undefined) {
            result = await Conn('cidades')
                .select('*')
                .where('id', id)
                .first();

            if(result === undefined) return Error("Nenhum registro encontrado para ID informado");

        } else if (parametro !== undefined) {
            result = await Conn('cidades')
                .select('*')
                .whereLike('id', `%${parametro.cidade.id}%`)
                .orWhereLike('nome', `%${parametro.cidade.nome}%`)
                .orWhere('id_estado', '=', parametro.cidade.id_estado)
                .orWhere('ativo', '=', parametro?.cidade.ativo)
                .limit(parametro.limit || 100);

            return result ?? [];
        }

        return Error("Erro ao processar consulta na base de dados");

    } catch (error) {
        console.log(error);
        return Error(error instanceof Error ? error.message : "Erro ao consultar dados na base de dados");
    }
}