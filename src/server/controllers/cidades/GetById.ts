import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { YupMiddleware } from "../../shared/middlewares";
import { GetByIdProps } from "../../entities/CidadesEntity";

export const getByIdValidator = YupMiddleware({
    body: yup.object().shape({
        codigo: yup.number().optional().moreThan(0),
    })
});

export const getById = async (req: Request<{}, {}, GetByIdProps>, res: Response) => {

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json([req.body, {main_error :"método não implementando"}]);
} 