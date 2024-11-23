import * as yup from 'yup';
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { EstadosModels, UsuariosModels } from '../../database/models';
import { YupMiddleware } from "../../shared/middlewares";
import { defaultResponse, GetAllEstadosProps, GetAllUsuarioProps, IEstado, IUsuario, ResultGet } from "../../entities";

export const getAllvalidator = YupMiddleware({
    body: yup.object().shape({
        page: yup.number().optional().moreThan(0),
        limit: yup.number().optional().moreThan(0),
        usuario: yup.object({
            id: yup.number().optional().moreThan(0),
            login: yup.string().optional(),
            id_pessoa: yup.number().optional(),
            ativo: yup.boolean().optional()
        })
    })
});

export const getAll = async (req: Request<{}, {}, GetAllUsuarioProps>, res: Response) => {

    const response: defaultResponse = { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, status: false, errors: '', data: '' };
    let result: Error | ResultGet<IUsuario>;

    result = await UsuariosModels.getUsuario(req.body, undefined);

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