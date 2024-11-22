import { number } from "yup";
import { ICidade } from "../../../entities";
import { Conn } from "../../knex";

export const Count = async (parametro?: ICidade): Promise<number | Error> => {
    try {
        const [{ count }] = await Conn('cidades').count<[{ count: number }]>('* as count');

        if (Number.isInteger(Number(count))) return Number(count);
        else return new Error("Erro ao consultar quantidade de registro na base de dados");
    }
    catch (e) {
        console.log(e);
        return new Error(e instanceof Error ? e.message : "Erro ao consultar quantidade de registro na base de dados");
    }

}