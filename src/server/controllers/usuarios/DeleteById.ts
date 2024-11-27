import * as yup from 'yup';
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { UsuariosModels } from "../../database/models";
import { YupMiddleware } from "../../shared/middlewares";
import { defaultResponse, IUsuario } from "../../entities";

export const deleteValidator = YupMiddleware({
    body: yup.object().shape({
        id: yup.number().required().moreThan(0),
    })
});

export const deleteById = async (req: Request<{}, {}, IUsuario>, res: Response) => {
    const response: defaultResponse = { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, status: false, errors: '', data: '' };
    let result: void | Error;

        result = await UsuariosModels.DeleteById(req.body.id);

    if (result instanceof Error) {
        response.errors = { default: result.message };
    } else {
        response.status = true;
        response.statusCode = StatusCodes.OK;
    }

    //NÃO LEVAR O STATUSCODE PARA A RESPOSTA DO SERVIDOR
    const {statusCode, ...finalResponse} = response;
    //--------------------------------------------------

    res.status(response.statusCode).json(finalResponse);
} 