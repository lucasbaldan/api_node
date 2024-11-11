import { ICidade } from "../../../entities";
import { Conn } from "../../knex";

export const getCidade = async (parametro: ICidade): Promise<ICidade[] | Error> => {
    try {
        const result = await Conn('cidades')
            .select('*')
            .where('codigo', '=', parametro.codigo)
            .orWhereLike('nome', parametro.nome)
            .orWhere('id_estado', '=', parametro.id_estado)
            .orWhere('ativo', '=', parametro.ativo)
            .limit(200);

        return result;

    } catch (error) {
        console.log(error);
        return Error('Erro ao processar inserção na base de dados');
    }
}