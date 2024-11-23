import { Conn } from "../../knex";
import { IUsuario } from "../../../entities";

export const Update = async (usuario: IUsuario): Promise<void | Error> => {
    try {
        const {id, ...dadosUpdate} = usuario;
        
        const result = await Conn('usuarios')
        .update(dadosUpdate)
        .where('id', '=', usuario.id);

        if (result > 0) {
            return;
        } else {
            return new Error("Erro ao processar atualização na base de dados, ou o registro não existe mais!");
        }
    } catch (error) {
        console.log(error);
        return new Error(error instanceof Error ? error.message : "Erro ao processar update na base de dados");
    }
}