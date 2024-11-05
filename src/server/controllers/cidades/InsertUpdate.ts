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
    let statusResponse: number = StatusCodes.INTERNAL_SERVER_ERROR; 
    let response: defaultResponse;

    const result = await CidadesModels.Insert(req.body);
    if (result instanceof Error) {
        response = {status: false, errors: "Erro ao inserir registro na base de dados", data: ''};
    } else {
        response = {status: true, errors: '', data: result};
        statusResponse = StatusCodes.OK;
    }

    res.status(statusResponse).json(response);
} 