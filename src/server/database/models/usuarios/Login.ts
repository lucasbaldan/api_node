import { Conn } from "../../knex";
import { IUsuario } from "../../../entities";
import { PasswordHash } from "../../../shared/services";

export const Login = async (usuario: IUsuario): Promise<IUsuario | Error> => {

    try {

        const buscaUsuario = await Conn('usuarios').select("*")
            .where("login", "=", usuario.login)
            .first();

        if (buscaUsuario !== undefined) {
            if (buscaUsuario.ativo === false) return new Error("Usuário Inativo");

            const verificaSenha = await PasswordHash.verifyPassword(usuario.senha, buscaUsuario.senha);
            if (verificaSenha instanceof Error) return verificaSenha;
            if (verificaSenha) {
                return buscaUsuario;
            } else {
                return new Error("Senha incorreta");
            }
        }

        return Error("Usuário não encotrado na base de dados");
    
    } catch (error) {
        console.log(error);
        return Error(error instanceof Error ? error.message : "Erro ao realizar login");
    }
}