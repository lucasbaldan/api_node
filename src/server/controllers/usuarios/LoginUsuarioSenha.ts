import * as yup from 'yup';
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { UsuariosModels } from "../../database/models";
import { YupMiddleware } from "../../shared/middlewares";
import { defaultResponse, IUsuario } from '../../entities';

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
        if(typeof usuarioLogado === 'object') response.data = usuarioLogado;
        response.status = true;
        response.statusCode = StatusCodes.OK;
    }

    //NÃO LEVAR O STATUSCODE PARA A RESPOSTA DO SERVIDOR
    const {statusCode, ...finalResponse} = response;
    //--------------------------------------------------

    res.status(response.statusCode).json(finalResponse);
} 