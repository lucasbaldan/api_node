import * as yup from 'yup';
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CidadesModels, EstadosModels } from '../../database/models';
import { YupMiddleware } from "../../shared/middlewares";
import { defaultResponse, GetAllEstadosProps, IEstado, ResultGet } from "../../entities";

export const getAllvalidator = YupMiddleware({
    body: yup.object().shape({
        page: yup.number().optional().moreThan(0),
        limit: yup.number().optional().moreThan(0),
        estado: yup.object({
            id: yup.number().optional().moreThan(0),
            nome: yup.string().optional(),
            codigo_ibge: yup.number().optional(),
            ativo: yup.boolean().optional()
        })
    })
});

export const getAll = async (req: Request<{}, {}, GetAllEstadosProps>, res: Response) => {

    const response: defaultResponse = { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, status: false, errors: '', data: '' };
    let result: Error | ResultGet<IEstado>;

    result = await EstadosModels.getEstado(req.body, undefined);

    if (result instanceof Error) {
        response.errors = { default: result.message };
    } 
    else if (result.filterCount === 0){
        response.data = [];
        response.errors = { default: "Nenhum registro encontrado para os parâmetros informado" };
        response.statusCode = StatusCodes.NOT_FOUND;
    } 
    else {
        response.data = result.items;
        response.status = true;
        response.statusCode = StatusCodes.OK;
    }

    //NÃO LEVAR O STATUSCODE PARA A RESPOSTA DO SERVIDOR
    const {statusCode, ...finalResponse} = response;
    //--------------------------------------------------

    res.status(response.statusCode).json(finalResponse);
}