import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { YupMiddleware } from "../../shared/middlewares";
import { GetAllProps } from "../../entities";
import '../../shared/services/YupPT-BR';
import { CidadesController } from ".";

export const validator = YupMiddleware({
    body: yup.object().shape({
        page: yup.number().optional().moreThan(0),
        limit: yup.number().optional().moreThan(0),
        filtro: yup.object({
            nome: yup.string().optional().min(4, "Atributo [filtro: {--nome--}] deve possuir pelo menos 4 caracteres"),
            uf: yup.string().optional(),
            codigo_ibge: yup.number().optional().positive()
        })
    })
});

export const getAll = async (req: Request<{}, {}, GetAllProps>, res: Response) => {

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json([req.body, {main_error :"método não implementando"}]);
}