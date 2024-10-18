import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';

interface ICidades {
    nome: string,
    uf: number,
    codigoIBGE: number
}

const validaCampos: yup.ObjectSchema<ICidades> = yup.object().shape({
    nome: yup.string().required().min(4),
    uf: yup.number().required(),
    codigoIBGE: yup.number().required("Atributo de entrada --codigoIbge-- não informado")
})

export const create = async (req: Request<{}, {}, ICidades>, res: Response) => {
    let cidadeValidada: ICidades | undefined = undefined;

    try {
        cidadeValidada = await validaCampos.validate(req.body, { abortEarly: false });
        console.log('Cidade validada com sucesso');
    } catch (error) {
        const yupError = error as yup.ValidationError;
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