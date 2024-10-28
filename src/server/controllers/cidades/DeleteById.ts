import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { YupMiddleware } from "../../shared/middlewares";
import { DeleteByIdProps } from "../../entities/CidadesEntity";

export const deleteValidator = YupMiddleware({
    body: yup.object().shape({
        codigo: yup.number().required().moreThan(0),
    })
});

export const deleteById = async (req: Request<{}, {}, DeleteByIdProps>, res: Response) => {

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json([req.body, {main_error :"método não implementando"}]);
} 