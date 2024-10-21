import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { ObjectSchema, ValidationError } from "yup";

type TYupMiddleware = (field: 'body' | 'header' | 'params' | 'query', schema: ObjectSchema<any>) => RequestHandler;

export const YupMiddleware: TYupMiddleware = (field, schema) => async (req, res, next) => {
    try {
        await schema.validate(req[field], { abortEarly: false });
        next();
    } catch (error) {
        const yupError = error as ValidationError;
        const errosCampos: Record<string, string> = {};

        yupError.inner.forEach(error => {
            if (!error.path) return;

            errosCampos[error.path] = error.message;
        });

        res.status(StatusCodes.BAD_REQUEST).json({
            status: false,
            errors: errosCampos
        })

    }
}