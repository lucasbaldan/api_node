import { GetAllCidadesProps, ICidade } from "../../../entities";
import { Conn } from "../../knex";

export const getCidade = async (parametro: GetAllCidadesProps): Promise<ICidade[] | Error> => {
    try {
        const result = await Conn('cidades')
            .select('*')
            .where('id', '=', parametro.cidade.id)
            .orWhereLike('nome', parametro.cidade.nome)
            .orWhere('id_estado', '=', parametro.cidade.id_estado)
            .orWhere('ativo', '=', parametro.cidade.ativo)
            .limit(200);

        return result;

    } catch (error) {
        console.log(error);
        return Error(error instanceof Error ? error.message : "Erro ao consultar dados na base de dados");
    }
}