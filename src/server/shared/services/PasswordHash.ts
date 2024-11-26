import { compare, genSalt, hash } from "bcryptjs";

const SALT = 8;

const hashPassWord = async (senha: string): Promise<string | Error> => {
    try {
        const salt = await genSalt(SALT);

        return await hash(senha, salt);
    } catch (e) {
        console.log(e)
        return new Error("Erro ao gerar senha criptografada");
    }
}

const verifyPassword = async (senha: string, senhaCriptografada: string): Promise<boolean | Error> => {
    try {
        return await compare(senha, senhaCriptografada);
    } catch (e) {
        console.log(e);
        return new Error("Erro ao descriptografar senha");
    }
}


export const PasswordHash = {
    hashPassWord,
    verifyPassword
}