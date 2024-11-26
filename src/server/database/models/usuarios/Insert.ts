import { Conn } from "../../knex";
import { IUsuario } from "../../../entities";
import { PasswordHash } from "../../../shared/services";

export const Insert = async (usuario: Omit<IUsuario, 'id'>): Promise<IUsuario | Error> => {
    try {

        const senhaCriptografada = await PasswordHash.hashPassWord(usuario.senha);
        if(senhaCriptografada instanceof Error) return senhaCriptografada;

        usuario.senha = senhaCriptografada;

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