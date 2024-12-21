import * as yup from 'yup';
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CidadesModels, EstadosModels } from '../../database/models';
import { YupMiddleware } from "../../shared/middlewares";
import { defaultResponse, GetAllCidadesProps, ICidade, ResultGet } from "../../entities";

export const getAllvalidator = YupMiddleware({
    body: yup.object().shape({
        page: yup.number().optional().moreThan(0),
        limit: yup.number().optional().moreThan(0),
        cidade: yup.object({
            id: yup.number().optional().moreThan(0),
            nome: yup.string().optional(),
            id_estado: yup.string().optional(),
            ativo: yup.boolean().optional()
        })
    })
});

export const getAll = async (req: Request<{}, {}, GetAllCidadesProps>, res: Response) => {

    const response: defaultResponse = { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, status: false, errors: '', data: '' };
    let result: Error | ResultGet<ICidade>;

    result = await CidadesModels.getCidade(req.body, undefined);

    if (result instanceof Error) {
        response.errors = { default: result.message };
    }
    else if (result.filterCount === 0) {
        response.data = [];
        response.errors = { default: "Nenhum registro encontrado para os parâmetros informado" };
        response.statusCode = StatusCodes.NOT_FOUND;
    }
    else {

        for (let element of result.items) {
            if (typeof element.id_estado !== 'number') { }
            else {
                const resultEstado = await EstadosModels.getEstado(undefined, element.id_estado);
                if (resultEstado instanceof Error) {
                    response.errors = { default: resultEstado.message };
                    res.status(response.statusCode).json(response);
                } else {
                    element.id_estado = resultEstado.items[0];
                }
            }
        }
        

        response.data = result.items;
        response.status = true;
        response.statusCode = StatusCodes.OK;
    }

    res.status(response.statusCode).json(response);
}