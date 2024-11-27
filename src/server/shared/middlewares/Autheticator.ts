import { RequestHandler } from "express";
import { defaultResponse } from "../../entities";
import { StatusCodes } from "http-status-codes";

export const authenticator: RequestHandler = (req, res, next) => {

    const { authorization } = req.headers;
    const response: defaultResponse = { data: "", errors: "", status: false, statusCode: StatusCodes.UNAUTHORIZED };

    if (!authorization) {
        response.errors = { auth: "Erro ao autenticar. Formato de Autenticação inválido" };
        response.statusCode = StatusCodes.BAD_REQUEST;

        const { statusCode, ...finalResponse } = response;
        res.status(statusCode).json(finalResponse);
        return;
    }

    const [type, token] = authorization.split(' ');

    if(type !== 'Bearer'){
        response.errors = { auth: "Erro ao autenticar. Formato de Autenticação inválido" };
        response.statusCode = StatusCodes.BAD_REQUEST;

        const { statusCode, ...finalResponse } = response;
        res.status(statusCode).json(finalResponse);
        return;
    }

    if(token !== 'teste.teste.teste'){
        response.errors = { auth: "Erro ao autenticar. Autenticação inválida para o tipo de serviço requisitado" };
        response.statusCode = StatusCodes.BAD_REQUEST;

        const { statusCode, ...finalResponse } = response;
        res.status(statusCode).json(finalResponse);
        return;
    }

        next();

    } 