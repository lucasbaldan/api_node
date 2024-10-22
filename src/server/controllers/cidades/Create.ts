import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import './../../shared/services/YupPT-BR';
import { YupMiddleware } from "../../shared/middlewares";

interface ICidades {
    nome: string,
    uf: string,
    codigo_ibge?: number | undefined | null
}

export const validator = YupMiddleware({
    body: yup.object().shape({
        nome: yup.string().required("Atributo --nome-- não informado").min(4, "Atributo --nome-- deve possuir pelo menos 4 caracteres"),
        uf: yup.string().required("Atributo --uf-- não informado"),
        codigo_ibge: yup.number().notRequired(),
        alguma_coisa: yup.string().required()
    })
});

export const create = async (req: Request<{}, {}, ICidades>, res: Response) => {

    res.json(req.body);
}