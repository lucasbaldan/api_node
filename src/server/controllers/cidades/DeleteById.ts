import * as yup from 'yup';
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CidadesModels } from "../../database/models";
import { YupMiddleware } from "../../shared/middlewares";
import { defaultResponse, ICidade } from "../../entities";

export const deleteValidator = YupMiddleware({
    body: yup.object().shape({
        id: yup.number().required().moreThan(0),
    })
});

export const deleteById = async (req: Request<{}, {}, ICidade>, res: Response) => {
    const response: defaultResponse = { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, status: false, errors: '', data: '' };
    let result: void | Error;

        result = await CidadesModels.DeleteById(req.body.id);

    if (result instanceof Error) {
        response.errors = { default: "Erro ao excluir registro na base de dados" };
    } else {
        response.status = true;
        response.statusCode = StatusCodes.OK;
    }

    //NÃO LEVAR O STATUSCODE PARA A RESPOSTA DO SERVIDOR
    const {statusCode, ...finalResponse} = response;
    //--------------------------------------------------

    res.status(response.statusCode).json(finalResponse);
} 