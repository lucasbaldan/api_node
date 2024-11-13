import * as yup from 'yup';
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CidadesModels } from '../../database/models';
import { YupMiddleware } from "../../shared/middlewares";
import { defaultResponse, ICidade } from "../../entities";

export const getByIdValidator = YupMiddleware({
    body: yup.object().shape({
        cidade: yup.object({
            id: yup.number().required('O temro --id-- deve ser informado').moreThan(0),  
        }),
    })
});

export const getById = async (req: Request<{}, {}, ICidade>, res: Response) => {

        const response: defaultResponse = { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, status: false, errors: '', data: '' };
        let result: ICidade | Error | ICidade[];

        result = await CidadesModels.getCidade(undefined, req.body.id);

        if (result instanceof Error) {
            response.errors = { default: result.message };
        } else {
            response.data = result;
            response.status = true;
            response.statusCode = StatusCodes.OK;
        }
    
        //NÃO LEVAR O STATUSCODE PARA A RESPOSTA DO SERVIDOR
        const {statusCode, ...finalResponse} = response;
        //--------------------------------------------------
    
        res.status(response.statusCode).json(finalResponse);
    }