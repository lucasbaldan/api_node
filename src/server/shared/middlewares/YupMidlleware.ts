import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { ObjectSchema, ValidationError } from "yup";
import '../../shared/services/YupPT-BR';


type TFields = 'body' | 'header' | 'params' | 'query';

type TSchemas = Record<TFields, ObjectSchema<any>>;

type TYupMiddleware = (schemas: Partial<TSchemas>) => RequestHandler;

export const YupMiddleware: TYupMiddleware = (schemas) => async (req, res, next) => {

    const errosFinal: Record<string, Record<string, string>> = {}

    Object.entries(schemas).forEach(([key, schema]) => {

        try {
            schema.validateSync(req[key as TFields], { abortEarly: false });
        } catch (error) {
            const yupError = error as ValidationError;
            const erros: Record<string, string> = {};

            yupError.inner.forEach(error => {
                if (!error.path) return;
                erros[error.path] = error.message;
            });

            errosFinal[key] = erros;
        }
    });

    if (Object.entries(errosFinal).length === 0) {
        next();
    } else {
        res.status(StatusCodes.BAD_REQUEST).json({
            status: false,
            errors: errosFinal
        });
    }



}