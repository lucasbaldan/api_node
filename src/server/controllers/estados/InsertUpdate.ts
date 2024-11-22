import * as yup from 'yup';
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { EstadosModels } from "../../database/models";
import { YupMiddleware } from "../../shared/middlewares";
import { defaultResponse, IEstado } from '../../entities';

export const insertValidator = YupMiddleware({
    body: yup.object().shape({
        id: yup.number().optional().moreThan(0),
        nome: yup.string().required("Atributo --nome-- não informado").min(4, "Atributo --nome-- deve possuir pelo menos 4 caracteres"),
        codigo_ibge: yup.number().required("Atributo --id_estado-- não informado"),
        ativo: yup.boolean().required("Atributo --ativo-- não informado")
    })
});

export const insertOrUpdate = async (req: Request<{}, {}, IEstado>, res: Response) => {
    const response: defaultResponse = { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, status: false, errors: '', data: '' };
    let result: void | IEstado | Error;

    if (req.body.id === undefined) {
        result = await EstadosModels.Insert(req.body);
    } else {
        result = await EstadosModels.Update(req.body);
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