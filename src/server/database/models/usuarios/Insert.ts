import { Conn } from "../../knex";
import { IUsuario } from "../../../entities";

export const Insert = async (usuario: Omit<IUsuario, 'id'>): Promise<IUsuario | Error> => {
    try {
        const [createdRow] = await Conn('usuarios').insert(usuario).returning("*");
        if (typeof createdRow === 'object') {
            return createdRow;
        } else {
            return new Error('Erro ao processar insert na base de dados');
        }
    } catch (error) {
        console.log(error);
        return new Error(error instanceof Error ? error.message : "Erro ao processar insert na base de dados");
    }
}