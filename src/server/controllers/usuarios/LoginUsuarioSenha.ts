import * as yup from 'yup';
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { UsuariosModels } from "../../database/models";
import { defaultResponse, IUsuario } from '../../entities';
import { JWTService, YupMiddleware } from "../../shared/middlewares";

export const loginUsuarioSenhaValidator = YupMiddleware({
    body: yup.object().shape({
        login: yup.string().strict().required("Atributo --login-- não informado").min(6, "Atributo --login-- deve possuir pelo menos 6 caracteres"),
        senha: yup.string().strict().required("Atributo --senha-- não informado").min(6, "Atributo --senha-- deve possuir pelo menos 6 caracteres")
    })
});

export const LoginUsuarioSenha = async (req: Request<{}, {}, IUsuario>, res: Response) => {
    const response: defaultResponse = { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, status: false, errors: '', data: '' };

    const usuarioLogado = await UsuariosModels.Login(req.body);

    if (usuarioLogado instanceof Error) {
        response.errors = { default: usuarioLogado.message };
    } else {
        const jwt = await JWTService.gerarJWT({ userID: usuarioLogado.id });
        if (jwt === 'SECRET_NOT_FOUND' || jwt === 'SERVER_ERROR') {
            response.errors = { default: jwt === 'SECRET_NOT_FOUND' ? "CHAVE DE CRIPTOGRAFIA NÃO ENCONTRADA" : "ERRO AO GERAR TOKEN DE ACESSO AO SERVIDOR"};
            res.status(response.statusCode).json(response);
        }
        response.status = true;
        response.statusCode = StatusCodes.OK;
        res.setHeader('acessToken', jwt);
    }
    res.status(response.statusCode).json(response);
} 