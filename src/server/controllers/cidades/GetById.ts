import * as yup from 'yup';
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CidadesModels } from '../../database/models';
import { YupMiddleware } from "../../shared/middlewares";
import { defaultResponse, ICidade, resultGet } from "../../entities";

export const getByIdValidator = YupMiddleware({
    body: yup.object().shape({
            id: yup.number().required('O temro --id-- deve ser informado').moreThan(0),  
    })
});

export const getById = async (req: Request<{}, {}, ICidade>, res: Response) => {

        const response: defaultResponse = { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, status: false, errors: '', data: '' };
        let result: Error | resultGet<ICidade>;

        result = await CidadesModels.getCidade(undefined, req.body.id);

        if (result instanceof Error) {
            response.errors = { default: result.message };
        } 
        else if (result.totalCount === 0){
            response.errors = { default: "Nenhum registro encontrado para o ID informado" };
            response.statusCode = StatusCodes.NOT_FOUND;
        } 
        else if (result.totalCount !== 1){
            response.errors = { default: "Erro ao processar requisição solicitada" };
            response.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
        }
        else {
            response.data = result.items[0];
            response.status = true;
            response.statusCode = StatusCodes.OK;
        }
    
        //NÃO LEVAR O STATUSCODE PARA A RESPOSTA DO SERVIDOR
        const {statusCode, ...finalResponse} = response;
        //--------------------------------------------------
    
        res.status(response.statusCode).json(finalResponse);
    }