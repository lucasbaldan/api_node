import * as yup from 'yup';
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { UsuariosModels } from "../../database/models";
import { YupMiddleware } from "../../shared/middlewares";
import { defaultResponse, IUsuario } from '../../entities';

export const insertValidator = YupMiddleware({
    body: yup.object().shape({
        id: yup.number().optional().moreThan(0),
        login: yup.string().required("Atributo --nome-- não informado").min(6, "Atributo --login-- deve possuir pelo menos 6 caracteres"),
        senha: yup.string().strict().required("Atributo --senha-- não informado").min(6, "Atributo --senha-- deve possuir pelo menos 6 caracteres"),
        id_pessoa: yup.number().required("Atributo --id_pessoa-- não informado"),
        ativo: yup.boolean().required("Atributo --ativo-- não informado")
    })
});

export const insertOrUpdate = async (req: Request<{}, {}, IUsuario>, res: Response) => {
    const response: defaultResponse = { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, status: false, errors: '', data: '' };
    let result: void | IUsuario | Error;

    if (req.body.id === undefined) {
        result = await UsuariosModels.Insert(req.body);
    } else {
        result = await UsuariosModels.Update(req.body);
    }

    if (result instanceof Error) {
        response.errors = { default: result.message };
    } else {
        if(typeof result === 'object') response.data = result;
        response.status = true;
        response.statusCode = StatusCodes.OK;
    }

    //NÃO LEVAR O STATUSCODE PARA A RESPOSTA DO SERVIDOR
    const {statusCode, ...finalResponse} = response;
    //--------------------------------------------------

    res.status(response.statusCode).json(finalResponse);
} 