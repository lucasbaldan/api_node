import * as yup from 'yup';
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CidadesModels } from "../../database/models";
import { YupMiddleware } from "../../shared/middlewares";
import { defaultResponse, ICidade } from '../../entities';

export const insertValidator = YupMiddleware({
    body: yup.object().shape({
        codigo: yup.number().optional().moreThan(0),
        nome: yup.string().required("Atributo --nome-- não informado").min(4, "Atributo --nome-- deve possuir pelo menos 4 caracteres"),
        id_estado: yup.number().required("Atributo --id_estado-- não informado"),
        ativo: yup.boolean().required("Atributo --ativo-- não informado")
    })
});

export const insertOrUpdate = async (req: Request<{}, {}, ICidade>, res: Response) => {
    const response: defaultResponse = { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, status: false, errors: '', data: '' };
    let result: void | ICidade | Error;

    if (req.body.id === undefined) {
        result = await CidadesModels.Insert(req.body);
    } else {
        result = await CidadesModels.Update(req.body);
    }

    if (result instanceof Error) {
        response.errors = { default: "Erro ao inserir ou atualizar registro na base de dados" };
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