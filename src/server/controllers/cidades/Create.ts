import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { YupMiddleware } from "../../shared/middlewares";
import { ICidade } from "../../entities";
import './../../shared/services/YupPT-BR';

export const ICidadeValidator = YupMiddleware({
    body: yup.object().shape({
        nome: yup.string().required("Atributo --nome-- não informado").min(4, "Atributo --nome-- deve possuir pelo menos 4 caracteres"),
        uf: yup.string().required("Atributo --uf-- não informado"),
        codigo_ibge: yup.number().optional()
    })
});

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json([req.body, {main_error :"método não implementando"}]);
}