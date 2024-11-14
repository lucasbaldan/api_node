import * as yup from 'yup';
import { StatusCodes } from "http-status-codes";
import { YupMiddleware } from "../../shared/middlewares";
import { Request, Response } from "express";
import { defaultResponse, GetAllCidadesProps, ICidade } from "../../entities";
import { CidadesModels } from '../../database/models';

export const getAllvalidator = YupMiddleware({
    body: yup.object().shape({
        page: yup.number().optional().moreThan(0),
        limit: yup.number().optional().moreThan(0),
        filtro: yup.object({
            codigo: yup.number().optional().moreThan(0),
            nome: yup.string().optional(),
            uf: yup.string().optional(),
            codigo_ibge: yup.number().optional().positive()
        })
    })
});

export const getAll = async (req: Request<{}, {}, GetAllCidadesProps>, res: Response) => {

    const response: defaultResponse = { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, status: false, errors: '', data: '' };
    let result: Error | ICidade[];

    result = await CidadesModels.getCidade(req.body, undefined);

    if (result instanceof Error) {
        response.errors = { default: result.message };
    } 
    else if (result.length === 0){
        response.errors = { default: "Nenhum registro encontrado para os parâmetros informado" };
        response.statusCode = StatusCodes.NOT_FOUND;
    } 
    else {
        response.data = result;
        response.status = true;
        response.statusCode = StatusCodes.OK;
    }

    //NÃO LEVAR O STATUSCODE PARA A RESPOSTA DO SERVIDOR
    const {statusCode, ...finalResponse} = response;
    //--------------------------------------------------

    res.status(response.statusCode).json(finalResponse);
}